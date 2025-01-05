(ns entities.resources.views
  (:require [clojure.string :as str]
            [reagent.core :as r]
            ["react-native" :as rn]
            [datascript.core :as ds]
            ["@expo/vector-icons" :refer [FontAwesome5]]
            [entities.campaigns.data.interface :as campaign-data]
            [entities.resources.data.interface :as resource-data]
            [entities.actions.views :refer [action-list]]
            [organisms.config :refer [palette screen-width]]
            [organisms.library :as components]))

(defn resource-flex-vals
  [creature?]
  (if creature?
    [3 1 1 2]
    [3 1 1]))

;;;;;;;;;;;;;;;;
;; Search fns ;;
;;;;;;;;;;;;;;;;

(def resource-search-text (r/atom {"resources"          (r/atom "")
                                   "creature-resources" (r/atom "")
                                   "add-resources"      (r/atom "")}))

(defn resource-list-search-bar
  [search-text-map-key]
  (components/search-bar resource-search-text search-text-map-key))

(defn resource-search-fn
  [resources component-key]
  (filter #(str/includes?
            (str/lower-case (apply str (vals %)))
            (str/lower-case
             (if-let [search-text-atom (get @resource-search-text component-key)]
               (deref search-text-atom)
               "")))
          resources))

;;;;;;;;;;;;;;;;
;; Filter fns ;;
;;;;;;;;;;;;;;;;

(def resource-type-filters-list
  {"Equipment"   {:icon   :fist-raised
                  :filter ['?resource-id :resource/type "Equipment"]}
   "Trait"       {:icon   :eye
                  :filter ['?resource-id :resource/type "Trait"]}
   "Expertise"   {:icon   :brain
                  :filter ['?resource-id :resource/type "Expertise"]}
   "Affiliation" {:icon   :user-friends
                  :filter ['?resource-id :resource/type "Affiliation"]}
   "Item"        {:icon   :suitcase
                  :filter ['?resource-id :resource/type "Item"]}})

(def active-resource-filter-lists
  (r/atom {}))

(defn get-filter-toggle-state
  [active-filter-list active-filter-list-key filter-key]
  (some #(= % filter-key)
        (get active-filter-list active-filter-list-key)))

(defn toggle-filter-state
  [filter-on? active-filter-list filter-key]
  (if filter-on?
    (remove #(= % filter-key) active-filter-list)
    (conj active-filter-list filter-key)))

(defn set-filter-toggle-state
  [active-resource-filter-lists active-filter-list-key filter-key filter-on?]
  (swap! active-resource-filter-lists
         (fn [active-filter-lists]
           (update active-filter-lists active-filter-list-key
                   #(toggle-filter-state filter-on? % filter-key)))))

(defn toggle-filter-button
  [active-filter-lists filter-list active-filter-list-key filter-key]
  (let [active-filter-list (get @active-filter-lists active-filter-list-key)
        filter-on?         (get-filter-toggle-state active-filter-list active-filter-list-key filter-key)]
    [:> rn/Pressable {:style    {:background-color (when filter-on? (:surface-700 @palette))
                                 :align-items      :center :width "20%"}
                      :on-press #(set-filter-toggle-state active-filter-lists
                                                          active-filter-list-key
                                                          filter-key
                                                          filter-on?)}
     [:> FontAwesome5 {:name  (get-in active-filter-lists [filter-key :icon])
                       :color (if filter-on? (:surface-100 @palette) (:surface-700 @palette))
                       :size  20}]]))

(defn toggle-resource-type-filter-button
  [active-filter-list-key filter-key]
  (toggle-filter-button active-resource-filter-lists
                        resource-type-filters-list
                        active-filter-list-key
                        filter-key))

(defn resource-list-simple-filters
  [active-filter-list-key]
  (println active-filter-list-key)
  [:> rn/View {:style {:flex-direction :row}}
   (toggle-resource-type-filter-button active-filter-list-key "Equipment")
   (toggle-resource-type-filter-button active-filter-list-key "Trait")
   (toggle-resource-type-filter-button active-filter-list-key "Expertise")
   (toggle-resource-type-filter-button active-filter-list-key "Affiliation")
   (toggle-resource-type-filter-button active-filter-list-key "Item")])

;;;;;;;;;;;;;;
;; Sort fns ;;
;;;;;;;;;;;;;;

(def creature-resource-column-headers
  {"Title"    {:header  "Title"
               :sort-fn #(get-in % [:creature-resource/resource :title])}
   "Quality"  {:header  "Quality"
               :sort-fn #(get-in % [:creature-resource/resource :resource/quality-value])}
   "Power"    {:header  "Power"
               :sort-fn #(get-in % [:creature-resource/resource :resource/power-value])}
   "Quantity" {:header  "Quantity"
               :sort-fn #(get % :creature-resource/quantity)}})

(def resource-column-headers
  {"Title"   {:header  "Title"
              :sort-fn #(get % :title)}
   "Quality" {:header  "Quality"
              :sort-fn #(get % :resource/quality-value)}
   "Power"   {:header  "Power"
              :sort-fn #(get % :resource/power-value)}})

(defn sort-as-sections
  [grouped-resources]
  (fn
    [sorted-sections section-title]
    (remove #(empty? (:data %))
            (conj sorted-sections
                  {:title section-title
                   :data (get grouped-resources section-title)}))))

(defn sort-resources-by-type
  ([resources]
   (sort-resources-by-type resources :resource/type))
  ([resources grouping-logic]
   (let [grouped-resources (group-by grouping-logic resources)]
     (reduce (sort-as-sections grouped-resources) 
             []
             ["Equipment" "Trait" "Expertise" "Affiliation" "Item"]))))

(defn sort-creature-resources-by-type
  [creature-resources]
  (sort-resources-by-type creature-resources
                          #(get-in % [:creature-resource/resource :resource/type])))

(def creature-resource-sort-manager
  (r/atom {"Title" {:asc? true :order 1}}))

;;;;;;;;;;;;
;; Modals ;;
;;;;;;;;;;;;

(defn resource-modal
  [conn id]
  (let [resource (resource-data/get-resource conn id)]
    [:> rn/View {:style {:height "100%"}}
     (components/default-text (:title resource) {:font-size 24})
     (components/default-text (str "(" (:resource/type resource) ")") {:font-size 12})
     (components/default-text (:resource/description resource))
     (components/default-text (str (:resource/quality-title resource) ": " (:resource/quality-value resource)))
     (components/default-text (str (:resource/power-title resource) ": " (:resource/power-value resource)))
     (when-let [resource-actions (resource-data/get-resource-actions conn (:db/id resource))]
       (action-list conn {:id (:db/id resource)
                          :actions resource-actions
                          :header "Actions"
                          :collapsed? false
                          :non-sorted? true}))]))

(def new-resource-type-selection
  (r/atom "Equipment"))

(defn resource-type-select-button
  [type-id type-title]
  [:> rn/Pressable
   {:style {:background-color (if (= type-title (get @components/text-input-map type-id)) :green :red)}
    :on-press (fn []
                (swap! components/text-input-map #(assoc % type-id type-title)))}
   (components/default-text type-title)])

(defn resource-type-select
  [type-id]
  [:> rn/View {:style {:flex-direction :row}}
   (resource-type-select-button type-id "Equipment")
   (resource-type-select-button type-id "Traits")
   (resource-type-select-button type-id "Expertise")
   (resource-type-select-button type-id "Connections")
   (resource-type-select-button type-id "Items")])

(defn resource-property-select-button
  [type-id {:keys [resource-property/title db/id]}]
  (let [selected? (some #(= id %) (get @components/text-input-map type-id))]
    [:> rn/Pressable
     {:style {:background-color (if selected? :green :red)}
      :on-press (fn []
                  (let [new-property-vals (if selected?
                                            (filter #(not (= % id))
                                                    (get @components/text-input-map type-id))
                                            (conj (get @components/text-input-map type-id) id))]
                    (swap! components/text-input-map (fn [input-map]
                                                       (assoc input-map type-id new-property-vals)))))}
     (components/default-text title)]))

(defn resource-property-select
  [conn property-id]
  (let [resource-properties (resource-data/get-all-resource-properties conn)]
    [:> rn/View
     (components/default-text (components/default-text "Properties:"))
     [:> rn/View {:style {:flex-direction :row}}
      (map resource-property-select-button (repeat property-id) resource-properties)]]))

(defn new-resource-modal
  [conn]
  [:> rn/ScrollView {:style {:padding 5}}
   (components/default-text-input (components/default-text "Title:") "new-resource-title")
   (resource-type-select "new-resource-type")
   (resource-property-select conn "new-resource-properties")
   (components/default-text-input (components/default-text "Actions:") "new-resource-actions")
   (components/default-text-input (components/default-text "Quality:") "new-resource-quality")
   (components/default-text-input (components/default-text "Power:") "new-resource-power")
   (components/default-text-input (components/default-text "Description:") "new-resource-description")
   (components/button
    {:on-press (fn []
                 (resource-data/create-resource
                  conn
                  [(into {}
                         (remove
                          (fn [[_ v]] (println @components/text-input-map) (or (nil? v) (= "" v)))
                          {:title                  (get @components/text-input-map "new-resource-title")
                           :entity-type            "resource"
                           :resource/type          (get @components/text-input-map "new-resource-type")
                           :resource/properties    (get @components/text-input-map "new-resource-properties")
                           ;; :resource/actions       (get @components/text-input-map "new-resource-actions")
                           :resource/quality-title "Quality"
                           :resource/quality-value (get @components/text-input-map "new-resource-quality")
                           :resource/power-title   "Power"
                           :resource/power-value   (get @components/text-input-map "new-resource-power")
                           :resource/flavor-text   (get @components/text-input-map "new-resource-description")}))])
                 (reset! components/text-input-map {}))}
    "Save!")])

(defn creature-resource-modal
  [conn
   {:keys [id
           title type description
           quality-title quality-value
           power-title power-value]}
   quantity]
  [:> rn/View {:style {:height "100%"}}
   (components/default-text title {:font-size 24})
   (components/default-text (str "(" type ")") {:font-size 12})
   (components/default-text description)
   (components/default-text (str quality-title ": " quality-value))
   (components/default-text (str power-title ": " power-value))
   (when quantity (components/default-text (str "Quantity: " (or quantity 0))))
   (action-list conn {:id id
                      :actions (resource-data/get-resource-actions conn id)
                      :header "Actions"
                      :collapsed? false})])


;;;;;;;;;;;
;; Lists ;;
;;;;;;;;;;;

(defn resource-quantity-column
  [conn creature-resource-id quantity flex-size]
  (let [dec-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-resource-id dec))
        inc-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-resource-id inc))]
    [:> rn/View {:style {:flex flex-size}}
     (components/decrementor-and-incrementor nil quantity dec-quantity inc-quantity)]))

(defn creature-resource-quantity-column
  [conn creature-resource-id flex-size]
  (let [quantity (resource-data/get-quantity-from-creature-resource conn creature-resource-id)
        dec-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-resource-id dec))
        inc-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-resource-id inc))]
    [:> rn/View {:style {:flex flex-size}}
     (components/decrementor-and-incrementor nil quantity dec-quantity inc-quantity)]))

(defn resource-row-component
  [conn flex-vals]
  (fn [{:keys [id title quality-value power-value]}]
     [:> rn/Pressable
      {:style    {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
       :on-press (fn []
                   (reset! components/modal-content
                           {:display? true
                            :fn       resource-modal
                            :args     [conn id]}))}
      (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
      (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16 :text-align :center})
      (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16 :text-align :center})]))

(defn create-new-resource
  [conn]
  (reset! components/modal-content
          {:display? true :fn new-resource-modal :args [conn] :close-fn #(reset! components/text-input-map {})}))

(defn resource-list-sfs-component
  [list-key]
  [:> rn/View {:style {:flex "auto"}}
   (resource-list-search-bar list-key)
   (resource-list-simple-filters list-key)])

(defn add-resource-row-component
  [conn creature-id]
  (fn [{:keys [title quality-value power-value id] :as resource}]
    (let [flex-vals (resource-flex-vals true)]
      [:> rn/Pressable
       {:style    {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
        :on-press (fn []
                    (resource-data/add-creature-resource conn creature-id id))}
       (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
       (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16 :text-align :center})
       (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16 :text-align :center})])))

(defn creature-resource-row-component
  [conn]
  (let [flex-vals (resource-flex-vals true)]
    (fn [{id                                                     :id
          {:keys [title quality-value power-value] :as resource} :resource
          quantity                                               :quantity
          :as stuff}]
      [:> rn/Pressable
       {:style    {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
        :on-press (fn []
                    (reset! components/modal-content
                            {:display? true
                             :fn       creature-resource-modal
                             :args     [conn resource quantity]}))}
       (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
       (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16 :text-align :center})
       (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16 :text-align :center})
       (creature-resource-quantity-column conn id (nth flex-vals 3))])))

(defn get-disjunctive-filters
  [active-filter-list]
  (when (not-empty active-filter-list)
    [(concat ['or]
             (vec (map #(get-in resource-type-filters-list [% :filter])
                       active-filter-list)))]))

(defn get-default-resource-where-vector
  [active-filter-list]
  (vec (concat [['?eid :entity-type "resource"]] (get-disjunctive-filters active-filter-list))))

(defn get-creature-resource-where-vector
  [active-filter-list]
  (vec (concat [['?eid :entity-type "creature-resource"]]
               [['?eid :creature-resource/resource '?resource-id]]
               (get-disjunctive-filters active-filter-list))))

(defn resource-search-filter-query
  [conn active-resource-filter-lists list-key]
  (let [active-filter-list (get @active-resource-filter-lists list-key)
        creature-resources? (= list-key "creature-resources")
        where-vector (if creature-resources? 
                       (get-creature-resource-where-vector active-filter-list)
                       (get-default-resource-where-vector active-filter-list))
        resource-ids (map first (ds/q {':find '[?eid]
                                       ':where where-vector}
                                      @conn))
        resources (ds/pull-many @conn '[*] resource-ids)
        search-applied-resources (resource-search-fn resources list-key)]
    (if creature-resources?
      (sort-creature-resources-by-type search-applied-resources)
      (sort-resources-by-type search-applied-resources))))

(defn resource-list
  [conn {:keys [search-filter-query item-format-fn new-item-fn
                sort-manager sfs-component
                quantity? list-key]}]
  (let [flex-vals (resource-flex-vals quantity?)
        headers   (if quantity?
                    creature-resource-column-headers
                    resource-column-headers)]
    (components/search-filter-sort-list-2
     {:list-header      "Resources"
      :column-flex-vals flex-vals
      :column-headers   headers
      :items            (or search-filter-query
                            (resource-search-filter-query conn
                                                          active-resource-filter-lists
                                                          (or list-key "resources")))
      :item-format-fn   (or item-format-fn
                            (resource-row-component conn flex-vals))
      :new-item-fn      (or new-item-fn
                            #(create-new-resource conn))
      :sort-manager     sort-manager
      :search-filter-sort-component
      (or sfs-component
          (resource-list-sfs-component "resources"))}
     1)))

(defn add-resource-to-creature-list
  [conn creature-id]
  (let [list-key "add-resources"]
    (resource-list
     conn
     {:item-format-fn (add-resource-row-component conn creature-id)
      :new-item-fn    #(create-new-resource conn)
      :sfs-component  (resource-list-sfs-component list-key)
      :sort-manager   creature-resource-sort-manager
      :quantity?      false
      :list-key       list-key})))

(defn creature-resource-list
  [conn creature-id]
  (let [list-key "creature-resources"]
    (resource-list 
     conn
     {:item-format-fn (creature-resource-row-component conn)
      :new-item-fn    #(reset! components/modal-content
                               {:display? true
                                :fn       add-resource-to-creature-list
                                :args     [conn creature-id]})
      :sfs-component  (resource-list-sfs-component list-key)
      :sort-manager   creature-resource-sort-manager
      :quantity?      true
      :list-key       list-key})))

(defn resources-main-page [conn]
  (let [resources (resource-data/get-all-resources conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center}}
     (resource-list conn {})]))

(defn resources [conn ^js props]
  (components/view-frame conn (resources-main-page conn) "resources-page"))
