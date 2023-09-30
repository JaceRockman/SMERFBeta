(ns interface.app
  (:require
   [interface.views.home :refer [home]]
   [interface.views.about :refer [about]]
   [interface.views.character :refer [character]]
   [expo.root :as expo-root]
   [data.app-state :as app]
   [datascript.core :as ds]
   [reagent.core :as r]
   ["@react-navigation/native" :as rnn]
   ["@react-navigation/native-stack" :as rnn-stack])
  (:require-macros
   [interface.app :refer [profile]]))

(defonce Stack (rnn-stack/createNativeStackNavigator))

(defn root [db]
  ;; The save and restore of the navigation root state is for development time bliss
  (r/with-let [!root-state (ffirst (ds/q '[:find ?navigation-root
                                           :where [?eid :navigator/val ?navigation-root]]
                                         db))
               save-root-state! (fn [^js state]
                                  (ds/transact! app/conn [[:db/add 1 :navigator/val state]]))
               add-listener! (fn [^js navigation-ref]
                               (when navigation-ref
                                 (.addListener navigation-ref "state" save-root-state!)))]
    [:> rnn/NavigationContainer {:ref add-listener!
                                 :initialState (when !root-state (-> !root-state .-data .-state))}
     [:> Stack.Navigator
      [:> Stack.Screen {:name "Home"
                        :component (fn [props] (r/as-element [home db props]))
                        :options {:title "Example App"}}]
      [:> Stack.Screen {:name "About"
                        :component (fn [props] (r/as-element [about db props]))
                        :options {:title "About"}}]
      [:> Stack.Screen {:name "Character"
                        :component (fn [props] (r/as-element [character db props]))
                        :options {:title "Character"}}]]]))

;; This would be a simpler way to do routing for the app
(defn my-root [db]
  (case (ffirst (ds/q '[:find ?navigator
                        :where [?eid :navigator/val ?navigator]]
                      db))
    :home (r/as-element [home db {}])
    :about (r/as-element [about db {}])))

(defn render
  {:dev/after-load true}
  ([] (render @app/conn))
  ([db]
   (println db)
   (profile "render"
            (expo-root/render-root (r/as-element [root db])))))

;; re-render on every DB change
(ds/listen! app/conn :render
            (fn [tx-report]
              (render (:db-after tx-report))))

(defn ^:export init []
  (app/init-dev-db)
  (render))
