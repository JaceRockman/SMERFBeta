(ns entities.resources.views
  (:require ["react-native" :as rn]
            [entities.resources.data.interface :as resource-data]
            [entities.actions.views :refer [action-list]]
            [systems.navigation :as navigation]
            [organisms.library :as components]))

(defn screen-width [] (.-width js/screen))

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])

(defn resource-modal
  [conn id quantity]
  (let [resource (resource-data/get-resource conn id)]
    [:> rn/View
     (components/default-text (:title resource) {:font-size 24})
     (components/default-text (str "(" (:resource/type resource) ")") {:font-size 12})
     (components/default-text (:resource/description resource))
     (components/default-text (str (:resource/quality-title resource) ": " (:resource/quality-value resource)))
     (components/default-text (str (:resource/power-title resource) ": " (:resource/power-value resource)))
     (components/default-text (str "Quantity: " (or quantity 0)))
     (action-list conn {:id (:id resource) :actions (:resource/actions resource) :header "Actions" :collapsed? false})]))

(defn resource [conn flex-vals]
  (fn [{:keys [id title quality-value power-value] :as resource} quantity]
    [:> rn/Pressable {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
                      :on-press #(reset! components/modal-content {:fn resource-modal :args [conn id quantity]})}
     (components/default-text title {:flex (nth flex-vals 0) :font-size 16})
     (components/default-text quality-value {:flex (nth flex-vals 1) :font-size 16})
     (components/default-text power-value {:flex (nth flex-vals 2) :font-size 16})
     (components/default-text (or quantity 0) {:flex (nth flex-vals 3) :font-size 16})]))

(defn sort-resources-by-type
  [resources]
  (let [type-section-from-resources (fn [type resources]
                                      (let [resource-type-section-data (filter #(= type (:resource/type %))
                                                                               resources)]
                                        (when-not (empty? resource-type-section-data)
                                          {:title type :data resource-type-section-data})))
        equipment (type-section-from-resources "Equipment" resources)
        traits (type-section-from-resources "Trait" resources)
        expertise (type-section-from-resources "Expertise" resources)
        affiliations (type-section-from-resources "Affiliation" resources)
        items (type-section-from-resources "Item" resources)]
    (remove nil? [equipment traits expertise affiliations items])))

(defn resource-list [conn {:keys [resources quantities header]}]
  (let [flex-vals [3 1 1 2]]
    (components/search-filter-sort-list
     {:list-header      header
      :items            resources
      :column-headers   ["Title" "Quality" "Power" "Quantity"]
      :column-flex-vals flex-vals
      :item-format-fn   #((resource conn flex-vals) % (get quantities (:db/id resource)))
      :section-sort-fns [sort-resources-by-type]}
     "resources")))

(defn resources-main-page [conn]
  (let [resources (resource-data/get-all-resources conn)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center}}
     (resource-list conn {:resources resources})]))

(defn resources [conn ^js props]
  (components/view-frame conn (resources-main-page conn)))

