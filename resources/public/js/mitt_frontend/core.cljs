(ns mitt-frontend.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(def app-state
  (atom {}))

(defui App
  Object
  (render [this]
    (dom/div nil "This is mitt")))

(def app (om/factory App))

(js/ReactDOM.render
 (app)
 (gdom/getElement "app"))
