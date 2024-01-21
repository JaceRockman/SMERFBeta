(ns interface.views.asset-library
  (:require [reagent.core :as r]
            ["react-native" :as rn]
            [interface.components.organization :as organization]
            [interface.components.navigation :as navigation]
            [interface.widgets.buttons :as buttons]))

(def asset-library-dropdown-state (r/atom {}))

(defn dropdown
  [title toggles content]
  (let [input->component (fn [item] (if (string? item) [:> rn/Text {:style {:font-size 18 :color :white}} item] item))
        title-component (input->component title)
        toggles-component (input->component toggles)
        content-component (input->component content)]
      [:> rn/View {:style {:width "100%"}}
       [:> rn/Pressable {:style {:width "100%" :flex-direction :row :justify-content :space-between}
                         :on-press (fn []
                                     (swap! asset-library-dropdown-state
                                            #(update % title
                                                     (fn [dropdown-state]
                                                       (not dropdown-state)))))}
        title-component
        [:> rn/Text "v"]]
       [:> rn/View {:style {:display (if (get @asset-library-dropdown-state title) "flex" "none")}}
        toggles-component
        [:> rn/View {:style {:margin-left "10%"}}
         content-component]]]))

(defn buttons-list
  []
  (dropdown [:> rn/Text {:style {:font-size 24 :color :white}} "Buttons"]
            "No Toggles Yet"
            [:> rn/View
             (dropdown "Primary Button"
                       "No Toggles"
                       (buttons/primary-button {:text "Primary Button"
                                                :on-press #(println "Primary Button Pressed!")}))
             (dropdown "Secondary Button" "No Toggles"
                       (buttons/secondary-button {:text "Secondary Button"
                                                  :on-press #(println "Secondary Button Pressed!")}))
             (dropdown "Tertiary Button" nil
                       (buttons/tertiary-button {:text "Tertiary Button"
                                                 :on-press #(println "Tertiary Button Pressed!")}))]))

(defn asset-library
  [db ^js props]
  (organization/view-frame db [:> rn/View {:style {:flex 1 :width "100%"}}
                               (buttons-list)]))
