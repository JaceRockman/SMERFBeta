(ns interface.views.library
  (:require ["react-native" :as rn]
            [interface.views.campaigns :as campaigns]
            [interface.views.realms :as realms]
            [interface.views.rules :as rules] 
            [interface.views.creatures :as creatures]
            [interface.views.resources :as resources]
            [interface.views.actions :as actions]
            [interface.views.asset-library :as asset-library]))

(defn no-page [db ^js props]
  [:> rn/View
   [:> rn/Text "Page not Found"]])

(defn account [db ^js props]
  [:> rn/View
   [:> rn/Text "Account Stuff"]])

(defn asset-library [db ^js props]
  (asset-library/asset-library db props))

(defn campaign [db ^js props]
  (campaigns/campaign db props))

(defn realm [db ^js props]
  (realms/realm db props))

(defn rules [db ^js props]
  (rules/rules db props))

(defn creatures [db ^js props]
  (creatures/creatures db props))

(defn resources [db ^js props]
  (resources/resources db props))

(defn actions [db ^js props]
  (actions/actions db props))
