(ns interface.views.resources
  (:require ["react-native" :as rn]
            [data.resources :as resources]
            [interface.components.navigation :as navigation]
            [interface.components.organization :as organization]
            [interface.widgets.text :as text]))

(defn screen-width [] (.-width js/screen))

(defn section-divider []
  [:> rn/View {:style {:background-color :lavender :width "80%" :height 2 :align-self :center}}])

(defn resource [flex-vals]
  (fn [{:keys [title quality-value power-value] :as resource} quantity]
    [:> rn/Pressable {:style {:flex-direction :row :padding-top 10 :padding-bottom 10 :width "100%"}
                    :on-press #(println "button pressed")}
   (text/default-text {:style {:flex (nth flex-vals 0) :font-size 16} :text title})
   (text/default-text {:style {:flex (nth flex-vals 1) :font-size 16} :text quality-value})
   (text/default-text {:style {:flex (nth flex-vals 2) :font-size 16} :text power-value})
   (text/default-text {:style {:flex (nth flex-vals 3) :font-size 16} :text (or quantity 0)})]))

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
        affiliations (type-section-from-resources "Affiliations" resources)
        items (type-section-from-resources "Items" resources)]
    (remove nil? [equipment traits expertise affiliations items])))

(defn resource-list [{:keys [resources quantities show-header?]}]
  (let [flex-vals [3 1 1 2]]
    (navigation/search-filter-sort-list
     {:list-header (when show-header? "Resources") 
      :items resources
      :column-headers ["Title" "Quality" "Power" "Quantity"]
      :column-flex-vals flex-vals
      :item-format-fn #((resource flex-vals) % (get quantities (:db/id resource)))
      :sort-fns [sort-resources-by-type]})))

(defn resources-main-page [db]
  (let [resources (resources/get-all-resources db)]
    [:> rn/View {:style {:flex :1 :width (screen-width) :align-items :center}}
     (resource-list {:resources resources})]))

(defn resources [db ^js props]
  (organization/view-frame db (resources-main-page db)))

