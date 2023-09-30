(ns interface.app
  (:require
   [interface.views.home :refer [home]]
   [interface.views.about :refer [about]]
   [interface.views.creature :refer [creature]]
   [expo.root :as expo-root]
   [data.app-state :as app-state]
   [datascript.core :as ds]
   [reagent.core :as r]
   ["@react-navigation/native" :as rnn]
   ["@react-navigation/native-stack" :as rnn-stack])
  (:require-macros
   [interface.app :refer [profile]]))

;; This would be a simpler way to do routing for the app
(defn root [db]
  (case (app-state/navigation-state db)
    :about (r/as-element [about db {}])
    :creature (r/as-element [creature db 8 {}])
    (r/as-element [home db {}])))

(defn render
  {:dev/after-load true}
  ([] (render @app-state/conn))
  ([db]
   (profile "render"
            (expo-root/render-root (r/as-element [root db])))))

;; re-render on every DB change
(ds/listen! app-state/conn :render
            (fn [tx-report]
              (render (:db-after tx-report))))

(defn ^:export init []
  (app-state/init-dev-db)
  (render))

;; More complex root component with navigation libraries

;; (defonce Stack (rnn-stack/createNativeStackNavigator))

;; (defn root [db]
;;   ;; The save and restore of the navigation root state is for development time bliss
;;   (r/with-let [!root-state (ffirst (ds/q '[:find ?navigation-root
;;                                            :where [?eid :navigator/val ?navigation-root]]
;;                                          db))
;;                save-root-state! (fn [^js state]
;;                                   (ds/transact! app-state/conn [[:db/add 1 :navigator/val state]]))
;;                add-listener! (fn [^js navigation-ref]
;;                                (when navigation-ref
;;                                  (.addListener navigation-ref "state" save-root-state!)))]
;;     [:> rnn/NavigationContainer {:ref add-listener!
;;                                  :initialState (when !root-state (-> !root-state .-data .-state))}
;;      [:> Stack.Navigator
;;       [:> Stack.Screen {:name "Home"
;;                         :component (fn [props] (r/as-element [home db props]))
;;                         :options {:title "Example App"}}]
;;       [:> Stack.Screen {:name "About"
;;                         :component (fn [props] (r/as-element [about db props]))
;;                         :options {:title "About"}}]
;;       [:> Stack.Screen {:name "Creature"
;;                         :component (fn [{:keys [creature-id props]}] (r/as-element [creature creature-id db props]))
;;                         :options {:title "Creature"}}]]]))
