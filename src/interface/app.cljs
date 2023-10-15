(ns interface.app
  (:require
   [expo.root :as expo-root]
   [data.conn :refer [conn]]
   [data.app-state :as app-state]
   [datascript.core :as ds]
   [interface.views.library :as views]
   [reagent.core :as r]
   ["@react-navigation/native" :as rnn]
   ["@react-navigation/native-stack" :as rnn-stack])
  (:require-macros
   [interface.app :refer [profile]]))

(defn root [db]
  (let [main-nav (app-state/main-nav-state db)] 
    (case main-nav
      :settings (r/as-element [views/setting db {}])
      :realm (r/as-element [views/realm db {}])
      :setting (r/as-element [views/setting db {}])
      :rules (r/as-element [views/rules db {}])
      :creatures (r/as-element [views/creatures db {}])
      :resources (r/as-element [views/resources db {}])
      :actions (r/as-element [views/actions db {}])
      (r/as-element [views/realm db {}]))))

(defn render
  {:dev/after-load true}
  ([] (render @conn))
  ([db]
   (profile "render"
            (expo-root/render-root (r/as-element [root db])))))

;; re-render on every DB change
(ds/listen! conn :render
            (fn [tx-report]
              (render (:db-after tx-report))))

(defn ^:export init []
  (app-state/initialize-db conn)
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
