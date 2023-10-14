(ns interface.views.library
  (:require ["react-native" :as rn]
            [interface.views.realm :as realm]
            [interface.views.setting :as setting]
            [interface.views.rules :as rules] 
            [interface.views.creatures :as creatures]
            [interface.views.resources :as resources]
            [interface.views.actions :as actions]))

(defn no-page [db ^js props]
  [:> rn/View
   [:> rn/Text "Page not Found"]])

(defn realm [db ^js props]
  (realm/realm db props))

(defn setting [db ^js props]
  (setting/setting db props))

(defn rules [db ^js props]
  (rules/rules db props))

(defn creatures [db ^js props]
  (creatures/creatures db props))

(defn resources [db ^js props]
  (resources/resources db props))

(defn actions [db ^js props]
  (actions/actions db props))
