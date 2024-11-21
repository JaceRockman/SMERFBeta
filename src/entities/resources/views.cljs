(ns entities.resources.views
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [entities.resources.data.interface :as resource-data]
            [entities.actions.views :refer [action-list]]
            [organisms.config :refer [screen-width]]
            [organisms.library :as components]))

(defn resource-modal
  [conn id quantity]
  (let [resource (resource-data/get-resource conn id)]
    [:> rn/View {:style {:height "100%"}}
     (components/default-text (:title resource) {:font-size 24})
     (components/default-text (str "(" (:resource/type resource) ")") {:font-size 12})
     (components/default-text (:resource/description resource))
     (components/default-text (str (:resource/quality-title resource) ": " (:resource/quality-value resource)))
     (components/default-text (str (:resource/power-title resource) ": " (:resource/power-value resource)))
     (components/default-text (str "Quantity: " (or quantity 0)))
     (action-list conn {:id (:db/id resource)
                        :actions (resource-data/get-resource-actions conn (:db/id resource))
                        :header "Actions"
                        :collapsed? false})]))

(defn resource-quantity-column
  [conn creature-id creature-resource-id quantity flex-size]
  (let [dec-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-id creature-resource-id dec))
        inc-quantity (fn [] (resource-data/update-creature-resource-quantity conn creature-id creature-resource-id inc))]
    [:> rn/View {:style {:flex flex-size}}
     (components/decrementor-and-incrementor nil quantity dec-quantity inc-quantity)]))

(defn resource [conn {:keys [flex-vals on-press-override style]}]
  (fn [{:keys [resource-quantity creature-resource-id creature-id]
        {:keys [id title quality-value power-value]} :resource-data}]
    [:> rn/Pressable
     {:style (merge {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"} style)
      :on-press (or on-press-override
                    (fn []
                      (reset! components/modal-content
                              {:display? true
                               :fn resource-modal
                               :args [conn id resource-quantity]})))}
     (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
     (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16 :text-align :center})
     (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16 :text-align :center})
     (when (= 4 (count flex-vals))
       (resource-quantity-column conn creature-id creature-resource-id resource-quantity (nth flex-vals 3)))]))

(defn sort-resources-by-type
  [resources]
  (let [type-section-from-resources (fn [type resources]
                                      (let [resource-type-section-data (filter #(= type (:resource/type (:resource-data %)))
                                                                               resources)]
                                        (when-not (empty? resource-type-section-data)
                                          {:title type :data resource-type-section-data})))
        equipment (type-section-from-resources "Equipment" resources)
        traits (type-section-from-resources "Trait" resources)
        expertise (type-section-from-resources "Expertise" resources)
        affiliations (type-section-from-resources "Affiliation" resources)
        items (type-section-from-resources "Item" resources)]
    (remove nil? [equipment traits expertise affiliations items])))

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

(defn create-new-resource
  [conn]
  (reset! components/modal-content
          {:display? true :fn new-resource-modal :args [conn] :close-fn #(reset! components/text-input-map {})}))

(defn resource-list [conn {:keys [resources header on-press-override item-style]}]
  (let [flex-vals [3 1 2]]
    (components/search-filter-sort-list
     {:list-header      header
      :items            (if (:resource-quantity resources)
                          resources
                          (map (fn [resource-data] {:resource-data resource-data}) resources))
      :new-item-fn      #(create-new-resource conn)
      :column-headers   ["Title" "Quality" "Power"]
      :column-flex-vals flex-vals
      :item-format-fn   (fn [resource-data]
                          ((resource conn {:flex-vals flex-vals
                                           :on-press-override on-press-override
                                           :style item-style})
                           resource-data))
      :section-sort-fns [sort-resources-by-type]}
     "resources")))

(defn creature-resource-list
  [conn {:keys [resources header on-press-override item-style]}]
  (let [flex-vals [3 1 1 2]]
    (components/search-filter-sort-list
     {:list-header      header
      :items            resources
      :new-item-fn      #(create-new-resource conn)
      :column-headers   ["Title" "Quality" "Power" "Quantity"]
      :column-flex-vals flex-vals
      :item-format-fn   (fn [resource-data]
                          ((resource conn {:flex-vals flex-vals
                                           :on-press-override on-press-override
                                           :style item-style})
                           resource-data))
      :section-sort-fns [sort-resources-by-type]}
     "resources")))

(defn resources-main-page [conn]
  (let [resources (resource-data/get-all-resources conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center}}
     (resource-list conn {:resources resources})]))

(defn resources [conn ^js props]
  (components/view-frame conn (resources-main-page conn) "resources-page"))

