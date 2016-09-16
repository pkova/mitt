// Compiled by ClojureScript 1.7.170 {}
goog.provide('mitt_frontend.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
mitt_frontend.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * @constructor
 */
mitt_frontend.core.App = (function mitt_frontend$core$App(){
var this__19064__auto__ = this;
React.Component.apply(this__19064__auto__,arguments);

if(!((this__19064__auto__.initLocalState == null))){
this__19064__auto__.state = this__19064__auto__.initLocalState();
} else {
this__19064__auto__.state = {};
}

return this__19064__auto__;
});

mitt_frontend.core.App.prototype = goog.object.clone(React.Component.prototype);

var x20207_20217 = mitt_frontend.core.App.prototype;
x20207_20217.componentWillUpdate = ((function (x20207_20217){
return (function (next_props__19000__auto__,next_state__19001__auto__){
var this__18999__auto__ = this;
if(((!((this__18999__auto__ == null)))?(((false) || (this__18999__auto__.om$next$Ident$))?true:false):false)){
var ident__19003__auto___20218 = om.next.ident.call(null,this__18999__auto__,om.next.props.call(null,this__18999__auto__));
var next_ident__19004__auto___20219 = om.next.ident.call(null,this__18999__auto__,om.next._next_props.call(null,next_props__19000__auto__,this__18999__auto__));
if(cljs.core.not_EQ_.call(null,ident__19003__auto___20218,next_ident__19004__auto___20219)){
var idxr__19005__auto___20220 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18999__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__19005__auto___20220 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__19005__auto___20220),((function (idxr__19005__auto___20220,ident__19003__auto___20218,next_ident__19004__auto___20219,this__18999__auto__,x20207_20217){
return (function (indexes__19006__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__19006__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__19003__auto___20218], null),cljs.core.disj,this__18999__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__19004__auto___20219], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__18999__auto__);
});})(idxr__19005__auto___20220,ident__19003__auto___20218,next_ident__19004__auto___20219,this__18999__auto__,x20207_20217))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__18999__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18999__auto__);
});})(x20207_20217))
;

x20207_20217.shouldComponentUpdate = ((function (x20207_20217){
return (function (next_props__19000__auto__,next_state__19001__auto__){
var this__18999__auto__ = this;
var next_children__19002__auto__ = next_props__19000__auto__.children;
var next_props__19000__auto____$1 = goog.object.get(next_props__19000__auto__,"omcljs$value");
var next_props__19000__auto____$2 = (function (){var G__20209 = next_props__19000__auto____$1;
if((next_props__19000__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__20209);
} else {
return G__20209;
}
})();
var or__16926__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18999__auto__),next_props__19000__auto____$2);
if(or__16926__auto__){
return or__16926__auto__;
} else {
var or__16926__auto____$1 = (function (){var and__16914__auto__ = this__18999__auto__.state;
if(cljs.core.truth_(and__16914__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18999__auto__.state,"omcljs$state"),goog.object.get(next_state__19001__auto__,"omcljs$state"));
} else {
return and__16914__auto__;
}
})();
if(cljs.core.truth_(or__16926__auto____$1)){
return or__16926__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__18999__auto__.props.children,next_children__19002__auto__);
}
}
});})(x20207_20217))
;

x20207_20217.componentWillUnmount = ((function (x20207_20217){
return (function (){
var this__18999__auto__ = this;
var r__19010__auto__ = om.next.get_reconciler.call(null,this__18999__auto__);
var cfg__19011__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19010__auto__);
var st__19012__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19011__auto__);
var indexer__19009__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19011__auto__);
if(cljs.core.truth_((function (){var and__16914__auto__ = !((st__19012__auto__ == null));
if(and__16914__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__19012__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__18999__auto__], null));
} else {
return and__16914__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__19012__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18999__auto__);
} else {
}

if((indexer__19009__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19009__auto__,this__18999__auto__);
}
});})(x20207_20217))
;

x20207_20217.componentDidUpdate = ((function (x20207_20217){
return (function (prev_props__19007__auto__,prev_state__19008__auto__){
var this__18999__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18999__auto__);
});})(x20207_20217))
;

x20207_20217.isMounted = ((function (x20207_20217){
return (function (){
var this__18999__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18999__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20207_20217))
;

x20207_20217.componentWillMount = ((function (x20207_20217){
return (function (){
var this__18999__auto__ = this;
var indexer__19009__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18999__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19009__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19009__auto__,this__18999__auto__);
}
});})(x20207_20217))
;

x20207_20217.render = ((function (x20207_20217){
return (function (){
var this__18998__auto__ = this;
var this$ = this__18998__auto__;
var _STAR_reconciler_STAR_20210 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20211 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20212 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20213 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20214 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__18998__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__18998__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__18998__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__18998__auto__);

om.next._STAR_parent_STAR_ = this__18998__auto__;

try{return React.DOM.div(null,om.util.force_children.call(null,"This is mitt"));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20214;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20213;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20212;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20211;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20210;
}});})(x20207_20217))
;


mitt_frontend.core.App.prototype.constructor = mitt_frontend.core.App;

mitt_frontend.core.App.prototype.constructor.displayName = "mitt-frontend.core/App";

mitt_frontend.core.App.prototype.om$isComponent = true;

var x20215_20221 = mitt_frontend.core.App;


var x20216_20222 = mitt_frontend.core.App.prototype;


mitt_frontend.core.App.cljs$lang$type = true;

mitt_frontend.core.App.cljs$lang$ctorStr = "mitt-frontend.core/App";

mitt_frontend.core.App.cljs$lang$ctorPrWriter = (function (this__19066__auto__,writer__19067__auto__,opt__19068__auto__){
return cljs.core._write.call(null,writer__19067__auto__,"mitt-frontend.core/App");
});
mitt_frontend.core.app = om.next.factory.call(null,mitt_frontend.core.App);
ReactDOM.render(mitt_frontend.core.app.call(null),goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map