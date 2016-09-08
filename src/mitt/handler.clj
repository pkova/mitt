(ns mitt.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-body]]
            [clj-http.client :as http]
            [ring.util.response :as resp]))

(defroutes app-routes
  (GET "/" [] (resp/redirect "/index.html"))
  (POST "/prices" x (str (get-in x [:body "hello"])))
  (route/not-found "Not Found"))

(def app
  (-> app-routes
      (wrap-json-body)
      (wrap-defaults api-defaults)))
