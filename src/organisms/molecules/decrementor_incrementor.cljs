(ns organisms.molecules.decrementor-incrementor
  (:require ["react-native" :as rn]
            [organisms.atoms.text :as text]))

(defn decrementor-and-incrementor
  [label number dec-fn inc-fn & [vertical?]]
  [:> rn/View {:style {:align-items :center}}
   (when-not vertical? (text/default-text label {:font-size 24 :align-self :center}))
   [:> rn/View {:style {:flex-direction (if vertical? :column :row) :align-content :center :gap 10}}
    [:> rn/Pressable {:on-press (if vertical? inc-fn dec-fn)}
     (text/default-text (if vertical? "^" "-") {:text-align :center})]
    (text/default-text number {:text-align :center :flex 0})
    [:> rn/Pressable {:on-press (if vertical? dec-fn inc-fn)}
     (text/default-text (if vertical? "v" "+") {:text-align :center})]]])
