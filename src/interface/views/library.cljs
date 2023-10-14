(ns interface.views.library
  (:require ["react-native" :as rn]
            [interface.views.creatures :as creatures]
            [interface.views.home :as home]
            [interface.views.setting :as setting]
            [interface.views.realm :as realm]))

(defn no-page [db ^js props]
  [:> rn/View
   [:> rn/Text "Page not Found"]])

(defn realm [db ^js props]
  (realm/realm db props))

(defn setting [db ^js props]
  (setting/setting db props))

(defn rules [db ^js props]
  [:> rn/View
   [:> rn/Text "Rules"]])

(defn creatures [db ^js props]
  [:> rn/View
   [:> rn/Text "Creatures"]])

(defn resources [db ^js props]
  [:> rn/View
   [:> rn/Text "Resources"]])

(defn actions [db ^js props]
  [:> rn/View
   [:> rn/Text "Actions"]])
