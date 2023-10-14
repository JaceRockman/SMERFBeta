(ns interface.views.setting
  (:require ["react-native" :as rn]
            [data.realms :as realms]
            [interface.components.navigation :as navigation]))

(defn setting [db ^js props]
  (let [active-realm (realms/get-active-realm db)
                      all-realms (realms/get-details-for-all-realms db)
                      realm-data (when (not-empty active-realm) (realms/get-realm-details db (first active-realm)))]
      [:> rn/View {:style {:flex 1
                           :justify-content :space-between
                           :align-items :center
                           :background-color :white}}
       [:> rn/Text "Setting"]
       (navigation/tab-bar)]))
