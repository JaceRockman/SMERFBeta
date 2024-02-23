(ns entities.views-library
  (:require ["react-native" :as rn]
            [entities.campaigns.views :as campaign-views]
            [entities.realms.views :as realm-views]
            [entities.rulesets.views :as ruleset-views] 
            [entities.creatures.views :as creature-views]
            [entities.resources.views :as resource-views]
            [entities.actions.views :as action-views]))

(defn no-page [conn ^js props]
  [:> rn/View
   [:> rn/Text "Page not Found"]])

(defn account [conn ^js props]
  [:> rn/View
   [:> rn/Text "Account Stuff"]])

(defn asset-library [conn ^js props]
  [:> rn/View
   [:> rn/Text "Asset Library"]])

(defn campaign [conn ^js props]
  (campaign-views/campaign conn props))

(defn realm [conn ^js props]
  (realm-views/realm conn props))

(defn rules [conn ^js props]
  (ruleset-views/rules conn props))

(defn creatures [conn ^js props]
  (creature-views/creatures conn props))

(defn resources [conn ^js props]
  (resource-views/resources conn props))

(defn actions [conn ^js props]
  (action-views/actions conn props))
