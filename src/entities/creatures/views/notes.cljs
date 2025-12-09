(ns entities.creatures.views.notes
  (:require ["react-native" :as rn]
            [organisms.config :as config]
            [organisms.library :as components]))

(defn notes [_conn {:keys [:creature/notes]}]
  [:> rn/ScrollView {:style {:width (config/screen-width)}}
   (components/default-text notes)])
