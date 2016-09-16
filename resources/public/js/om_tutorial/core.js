// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_tutorial.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.next');
goog.require('om.dom');
om_tutorial.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app","title","app/title",636408784),"Animals",new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Ant"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Antelope"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Bird"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),"Cat"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),"Dog"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(6),"Lion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),"Mouse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),"Monkey"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),"Snake"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),"Zebra"], null)], null)], null));
if(typeof om_tutorial.core.read !== 'undefined'){
} else {
om_tutorial.core.read = (function (){var method_table__17839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-tutorial.core","read"),((function (method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__,hierarchy__17843__auto__){
return (function (env,key,params){
return key;
});})(method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__,hierarchy__17843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17843__auto__,method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__));
})();
}
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__29621,key,params){
var map__29622 = p__29621;
var map__29622__$1 = ((((!((map__29622 == null)))?((((map__29622.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29622.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29622):map__29622);
var env = map__29622__$1;
var state = cljs.core.get.call(null,map__29622__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4655__auto__ = cljs.core.find.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__29624 = temp__4655__auto__;
var _ = cljs.core.nth.call(null,vec__29624,(0),null);
var value = cljs.core.nth.call(null,vec__29624,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
cljs.core._add_method.call(null,om_tutorial.core.read,new cljs.core.Keyword("animals","list","animals/list",1488034922),(function (p__29625,key,p__29626){
var map__29627 = p__29625;
var map__29627__$1 = ((((!((map__29627 == null)))?((((map__29627.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29627.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29627):map__29627);
var env = map__29627__$1;
var state = cljs.core.get.call(null,map__29627__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__29628 = p__29626;
var map__29628__$1 = ((((!((map__29628 == null)))?((((map__29628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29628):map__29628);
var start = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.call(null,map__29628__$1,new cljs.core.Keyword(null,"end","end",-268185958));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.subvec.call(null,new cljs.core.Keyword("animals","list","animals/list",1488034922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),start,end)], null);
}));
/**
 * @constructor
 */
om_tutorial.core.AnimalsList = (function om_tutorial$core$AnimalsList(){
var this__20227__auto__ = this;
React.Component.apply(this__20227__auto__,arguments);

if(!((this__20227__auto__.initLocalState == null))){
this__20227__auto__.state = this__20227__auto__.initLocalState();
} else {
this__20227__auto__.state = {};
}

return this__20227__auto__;
});

om_tutorial.core.AnimalsList.prototype = goog.object.clone(React.Component.prototype);

var x29635_29649 = om_tutorial.core.AnimalsList.prototype;
x29635_29649.componentWillUpdate = ((function (x29635_29649){
return (function (next_props__20163__auto__,next_state__20164__auto__){
var this__20162__auto__ = this;
if(((!((this__20162__auto__ == null)))?(((false) || (this__20162__auto__.om$next$Ident$))?true:false):false)){
var ident__20166__auto___29650 = om.next.ident.call(null,this__20162__auto__,om.next.props.call(null,this__20162__auto__));
var next_ident__20167__auto___29651 = om.next.ident.call(null,this__20162__auto__,om.next._next_props.call(null,next_props__20163__auto__,this__20162__auto__));
if(cljs.core.not_EQ_.call(null,ident__20166__auto___29650,next_ident__20167__auto___29651)){
var idxr__20168__auto___29652 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20162__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20168__auto___29652 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20168__auto___29652),((function (idxr__20168__auto___29652,ident__20166__auto___29650,next_ident__20167__auto___29651,this__20162__auto__,x29635_29649){
return (function (indexes__20169__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20169__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20166__auto___29650], null),cljs.core.disj,this__20162__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20167__auto___29651], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20162__auto__);
});})(idxr__20168__auto___29652,ident__20166__auto___29650,next_ident__20167__auto___29651,this__20162__auto__,x29635_29649))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20162__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20162__auto__);
});})(x29635_29649))
;

x29635_29649.shouldComponentUpdate = ((function (x29635_29649){
return (function (next_props__20163__auto__,next_state__20164__auto__){
var this__20162__auto__ = this;
var next_children__20165__auto__ = next_props__20163__auto__.children;
var next_props__20163__auto____$1 = goog.object.get(next_props__20163__auto__,"omcljs$value");
var next_props__20163__auto____$2 = (function (){var G__29637 = next_props__20163__auto____$1;
if((next_props__20163__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__29637);
} else {
return G__29637;
}
})();
var or__16926__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20162__auto__),next_props__20163__auto____$2);
if(or__16926__auto__){
return or__16926__auto__;
} else {
var or__16926__auto____$1 = (function (){var and__16914__auto__ = this__20162__auto__.state;
if(cljs.core.truth_(and__16914__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20162__auto__.state,"omcljs$state"),goog.object.get(next_state__20164__auto__,"omcljs$state"));
} else {
return and__16914__auto__;
}
})();
if(cljs.core.truth_(or__16926__auto____$1)){
return or__16926__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__20162__auto__.props.children,next_children__20165__auto__);
}
}
});})(x29635_29649))
;

x29635_29649.componentWillUnmount = ((function (x29635_29649){
return (function (){
var this__20162__auto__ = this;
var r__20173__auto__ = om.next.get_reconciler.call(null,this__20162__auto__);
var cfg__20174__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20173__auto__);
var st__20175__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20174__auto__);
var indexer__20172__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20174__auto__);
if(cljs.core.truth_((function (){var and__16914__auto__ = !((st__20175__auto__ == null));
if(and__16914__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20175__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20162__auto__], null));
} else {
return and__16914__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20175__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20162__auto__);
} else {
}

if((indexer__20172__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20172__auto__,this__20162__auto__);
}
});})(x29635_29649))
;

x29635_29649.componentDidUpdate = ((function (x29635_29649){
return (function (prev_props__20170__auto__,prev_state__20171__auto__){
var this__20162__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20162__auto__);
});})(x29635_29649))
;

x29635_29649.isMounted = ((function (x29635_29649){
return (function (){
var this__20162__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20162__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x29635_29649))
;

x29635_29649.componentWillMount = ((function (x29635_29649){
return (function (){
var this__20162__auto__ = this;
var indexer__20172__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20162__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20172__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20172__auto__,this__20162__auto__);
}
});})(x29635_29649))
;

x29635_29649.render = ((function (x29635_29649){
return (function (){
var this__20161__auto__ = this;
var this$ = this__20161__auto__;
var _STAR_reconciler_STAR_29638 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_29639 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_29640 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_29641 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_29642 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20161__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20161__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20161__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20161__auto__);

om.next._STAR_parent_STAR_ = this__20161__auto__;

try{var map__29643 = om.next.props.call(null,this$);
var map__29643__$1 = ((((!((map__29643 == null)))?((((map__29643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29643):map__29643);
var title = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword("app","title","app/title",636408784));
var list = cljs.core.get.call(null,map__29643__$1,new cljs.core.Keyword("animals","list","animals/list",1488034922));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.h2(null,om.util.force_children.call(null,title))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (map__29643,map__29643__$1,title,list,_STAR_reconciler_STAR_29638,_STAR_depth_STAR_29639,_STAR_shared_STAR_29640,_STAR_instrument_STAR_29641,_STAR_parent_STAR_29642,this$,this__20161__auto__,x29635_29649){
return (function (p__29645){
var vec__29646 = p__29645;
var i = cljs.core.nth.call(null,vec__29646,(0),null);
var name = cljs.core.nth.call(null,vec__29646,(1),null);
return React.DOM.li(null,om.util.force_children.call(null,[cljs.core.str(i),cljs.core.str(". "),cljs.core.str(name)].join('')));
});})(map__29643,map__29643__$1,title,list,_STAR_reconciler_STAR_29638,_STAR_depth_STAR_29639,_STAR_shared_STAR_29640,_STAR_instrument_STAR_29641,_STAR_parent_STAR_29642,this$,this__20161__auto__,x29635_29649))
,list))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_29642;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_29641;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_29640;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_29639;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_29638;
}});})(x29635_29649))
;


om_tutorial.core.AnimalsList.prototype.constructor = om_tutorial.core.AnimalsList;

om_tutorial.core.AnimalsList.prototype.constructor.displayName = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.prototype.om$isComponent = true;

var x29647_29653 = om_tutorial.core.AnimalsList;
x29647_29653.om$next$IQueryParams$ = true;

x29647_29653.om$next$IQueryParams$params$arity$1 = ((function (x29647_29653){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29647_29653))
;

x29647_29653.om$next$IQuery$ = true;

x29647_29653.om$next$IQuery$query$arity$1 = ((function (x29647_29653){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29647_29653))
;


var x29648_29654 = om_tutorial.core.AnimalsList.prototype;
x29648_29654.om$next$IQueryParams$ = true;

x29648_29654.om$next$IQueryParams$params$arity$1 = ((function (x29648_29654){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),(0),new cljs.core.Keyword(null,"end","end",-268185958),(10)], null);
});})(x29648_29654))
;

x29648_29654.om$next$IQuery$ = true;

x29648_29654.om$next$IQuery$query$arity$1 = ((function (x29648_29654){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","title","app/title",636408784),cljs.core.list(new cljs.core.Keyword("animals","list","animals/list",1488034922),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Symbol(null,"?start","?start",-1182059288,null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Symbol(null,"?end","?end",2061258539,null)], null))], null);
});})(x29648_29654))
;


om_tutorial.core.AnimalsList.cljs$lang$type = true;

om_tutorial.core.AnimalsList.cljs$lang$ctorStr = "om-tutorial.core/AnimalsList";

om_tutorial.core.AnimalsList.cljs$lang$ctorPrWriter = (function (this__20229__auto__,writer__20230__auto__,opt__20231__auto__){
return cljs.core._write.call(null,writer__20230__auto__,"om-tutorial.core/AnimalsList");
});
om_tutorial.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tutorial.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read","read",1140058661),om_tutorial.core.read], null))], null));
om.next.add_root_BANG_.call(null,om_tutorial.core.reconciler,om_tutorial.core.AnimalsList,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map