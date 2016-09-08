(ns mitt.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [clj-http.client :as http]
            [ring.util.response :as resp]))

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))
  (POST "/prices" x (str x))
  (route/not-found "Not Found"))

(def app
  (wrap-defaults
   app-routes
   (assoc-in site-defaults [:security :anti-forgery] false)))
