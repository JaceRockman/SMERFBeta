(ns organisms.environments.modals
  (:require [cljs.reader :as reader]
            [reagent.core :as r]
            ["react-native" :as rn]
            [organisms.config :refer [palette]]
            [organisms.atoms.text-input :as text-input]
            [systems.navigation :as navigation]))

(def modal-content (r/atom nil))

(defn hide-modal-content
  []
  (swap! modal-content (fn [content] (assoc content :display? false))))

(defn show-modal-content
  []
  (swap! modal-content (fn [content] (assoc content :display? true))))

(def example-schema
  [[:example/number  {:db/valueType  :db.type/long
                      :db.attr/preds #(and (int? (int %)) (< 0 (int %) 5))}]
   [:example/string  {:db/valueType :db.type/string
                      :db.attr/preds #(= "asdf" %)}]
   [:example/boolean {:db/valueType :db.type/boolean}]
   [:example/ref     {:db/valueType :db.type/ref}]])

(defn new-item-modal
  [schema]
  (let [new-item-modal-content
        (doall
         (mapv
          (fn [[schema-element-title schema-element]]
            (case (:db/valueType schema-element)
              :db.type/long (text-input/default-text-input
                             schema-element-title
                             schema-element-title
                             (:db.attr/preds schema-element))
              :db.type/string (text-input/default-text-input
                               schema-element-title
                               schema-element-title
                               (:db.attr/preds schema-element))
              :db.type/boolean [:> rn/Text {:style {:color :white}} "Toggle!"]
              :db.type/ref [:> rn/Text {:style {:color :white}} "Ref!"]))
          schema))]
    (vec (concat [:> rn/View] new-item-modal-content))))



(def example-new-item-modal
  #(reset! modal-content {:fn new-item-modal :args [example-schema] :display? true}))

(defn modal
  []
  (when (:display? @modal-content)
    (let [content (apply (:fn @modal-content) (:args @modal-content))
          save-button (when (:save-fn @modal-content)
                        (apply (:save-fn @modal-content) (:save-args @modal-content)))]
      [:> rn/View {:style {:position :absolute :width "100%" :height "100%" :background-color "rgba(0, 0, 0, 0.6)" :justify-content :flex-end}}
       [:> rn/Pressable {:style {:flex 100 :width "100%"}
                         :on-press (fn []
                                     (when (:close-fn @modal-content)
                                       (apply (:close-fn @modal-content)
                                              (:close-args @modal-content)))
                                     (reset! modal-content nil))}]
       [:> rn/View {:style {:border-width 2 :border-color (:surface-700 @palette) :background-color (:surface-100 @palette) :width "100%" :max-height "80%"}}
        content
        [:> rn/View {:style {:position :absolute :right 5 :top 5}}
         save-button]]])))
