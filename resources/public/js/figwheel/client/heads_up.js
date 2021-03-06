// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17991__auto__ = [];
var len__17984__auto___26223 = arguments.length;
var i__17985__auto___26224 = (0);
while(true){
if((i__17985__auto___26224 < len__17984__auto___26223)){
args__17991__auto__.push((arguments[i__17985__auto___26224]));

var G__26225 = (i__17985__auto___26224 + (1));
i__17985__auto___26224 = G__26225;
continue;
} else {
}
break;
}

var argseq__17992__auto__ = ((((2) < args__17991__auto__.length))?(new cljs.core.IndexedSeq(args__17991__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17992__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26215_26226 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26216_26227 = null;
var count__26217_26228 = (0);
var i__26218_26229 = (0);
while(true){
if((i__26218_26229 < count__26217_26228)){
var k_26230 = cljs.core._nth.call(null,chunk__26216_26227,i__26218_26229);
e.setAttribute(cljs.core.name.call(null,k_26230),cljs.core.get.call(null,attrs,k_26230));

var G__26231 = seq__26215_26226;
var G__26232 = chunk__26216_26227;
var G__26233 = count__26217_26228;
var G__26234 = (i__26218_26229 + (1));
seq__26215_26226 = G__26231;
chunk__26216_26227 = G__26232;
count__26217_26228 = G__26233;
i__26218_26229 = G__26234;
continue;
} else {
var temp__4657__auto___26235 = cljs.core.seq.call(null,seq__26215_26226);
if(temp__4657__auto___26235){
var seq__26215_26236__$1 = temp__4657__auto___26235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26215_26236__$1)){
var c__17729__auto___26237 = cljs.core.chunk_first.call(null,seq__26215_26236__$1);
var G__26238 = cljs.core.chunk_rest.call(null,seq__26215_26236__$1);
var G__26239 = c__17729__auto___26237;
var G__26240 = cljs.core.count.call(null,c__17729__auto___26237);
var G__26241 = (0);
seq__26215_26226 = G__26238;
chunk__26216_26227 = G__26239;
count__26217_26228 = G__26240;
i__26218_26229 = G__26241;
continue;
} else {
var k_26242 = cljs.core.first.call(null,seq__26215_26236__$1);
e.setAttribute(cljs.core.name.call(null,k_26242),cljs.core.get.call(null,attrs,k_26242));

var G__26243 = cljs.core.next.call(null,seq__26215_26236__$1);
var G__26244 = null;
var G__26245 = (0);
var G__26246 = (0);
seq__26215_26226 = G__26243;
chunk__26216_26227 = G__26244;
count__26217_26228 = G__26245;
i__26218_26229 = G__26246;
continue;
}
} else {
}
}
break;
}

var seq__26219_26247 = cljs.core.seq.call(null,children);
var chunk__26220_26248 = null;
var count__26221_26249 = (0);
var i__26222_26250 = (0);
while(true){
if((i__26222_26250 < count__26221_26249)){
var ch_26251 = cljs.core._nth.call(null,chunk__26220_26248,i__26222_26250);
e.appendChild(ch_26251);

var G__26252 = seq__26219_26247;
var G__26253 = chunk__26220_26248;
var G__26254 = count__26221_26249;
var G__26255 = (i__26222_26250 + (1));
seq__26219_26247 = G__26252;
chunk__26220_26248 = G__26253;
count__26221_26249 = G__26254;
i__26222_26250 = G__26255;
continue;
} else {
var temp__4657__auto___26256 = cljs.core.seq.call(null,seq__26219_26247);
if(temp__4657__auto___26256){
var seq__26219_26257__$1 = temp__4657__auto___26256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26219_26257__$1)){
var c__17729__auto___26258 = cljs.core.chunk_first.call(null,seq__26219_26257__$1);
var G__26259 = cljs.core.chunk_rest.call(null,seq__26219_26257__$1);
var G__26260 = c__17729__auto___26258;
var G__26261 = cljs.core.count.call(null,c__17729__auto___26258);
var G__26262 = (0);
seq__26219_26247 = G__26259;
chunk__26220_26248 = G__26260;
count__26221_26249 = G__26261;
i__26222_26250 = G__26262;
continue;
} else {
var ch_26263 = cljs.core.first.call(null,seq__26219_26257__$1);
e.appendChild(ch_26263);

var G__26264 = cljs.core.next.call(null,seq__26219_26257__$1);
var G__26265 = null;
var G__26266 = (0);
var G__26267 = (0);
seq__26219_26247 = G__26264;
chunk__26220_26248 = G__26265;
count__26221_26249 = G__26266;
i__26222_26250 = G__26267;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26212){
var G__26213 = cljs.core.first.call(null,seq26212);
var seq26212__$1 = cljs.core.next.call(null,seq26212);
var G__26214 = cljs.core.first.call(null,seq26212__$1);
var seq26212__$2 = cljs.core.next.call(null,seq26212__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26213,G__26214,seq26212__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17839__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17840__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17841__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17842__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17843__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__,hierarchy__17843__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__,hierarchy__17843__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17843__auto__,method_table__17839__auto__,prefer_table__17840__auto__,method_cache__17841__auto__,cached_hierarchy__17842__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_26268 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26268.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26268.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26268.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26268);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26269,st_map){
var map__26274 = p__26269;
var map__26274__$1 = ((((!((map__26274 == null)))?((((map__26274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26274):map__26274);
var container_el = cljs.core.get.call(null,map__26274__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26274,map__26274__$1,container_el){
return (function (p__26276){
var vec__26277 = p__26276;
var k = cljs.core.nth.call(null,vec__26277,(0),null);
var v = cljs.core.nth.call(null,vec__26277,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26274,map__26274__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26278,dom_str){
var map__26281 = p__26278;
var map__26281__$1 = ((((!((map__26281 == null)))?((((map__26281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26281):map__26281);
var c = map__26281__$1;
var content_area_el = cljs.core.get.call(null,map__26281__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26283){
var map__26286 = p__26283;
var map__26286__$1 = ((((!((map__26286 == null)))?((((map__26286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26286):map__26286);
var content_area_el = cljs.core.get.call(null,map__26286__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_26329){
var state_val_26330 = (state_26329[(1)]);
if((state_val_26330 === (1))){
var inst_26314 = (state_26329[(7)]);
var inst_26314__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26315 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26316 = ["10px","10px","100%","68px","1.0"];
var inst_26317 = cljs.core.PersistentHashMap.fromArrays(inst_26315,inst_26316);
var inst_26318 = cljs.core.merge.call(null,inst_26317,style);
var inst_26319 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26314__$1,inst_26318);
var inst_26320 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26314__$1,msg);
var inst_26321 = cljs.core.async.timeout.call(null,(300));
var state_26329__$1 = (function (){var statearr_26331 = state_26329;
(statearr_26331[(7)] = inst_26314__$1);

(statearr_26331[(8)] = inst_26319);

(statearr_26331[(9)] = inst_26320);

return statearr_26331;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26329__$1,(2),inst_26321);
} else {
if((state_val_26330 === (2))){
var inst_26314 = (state_26329[(7)]);
var inst_26323 = (state_26329[(2)]);
var inst_26324 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26325 = ["auto"];
var inst_26326 = cljs.core.PersistentHashMap.fromArrays(inst_26324,inst_26325);
var inst_26327 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26314,inst_26326);
var state_26329__$1 = (function (){var statearr_26332 = state_26329;
(statearr_26332[(10)] = inst_26323);

return statearr_26332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26329__$1,inst_26327);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____0 = (function (){
var statearr_26336 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26336[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__);

(statearr_26336[(1)] = (1));

return statearr_26336;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____1 = (function (state_26329){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_26329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e26337){if((e26337 instanceof Object)){
var ex__21963__auto__ = e26337;
var statearr_26338_26340 = state_26329;
(statearr_26338_26340[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26341 = state_26329;
state_26329 = G__26341;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__ = function(state_26329){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____1.call(this,state_26329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_26339 = f__22072__auto__.call(null);
(statearr_26339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__26343 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__26343,(0),null);
var ln = cljs.core.nth.call(null,vec__26343,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26346 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26346,(0),null);
var file_line = cljs.core.nth.call(null,vec__26346,(1),null);
var file_column = cljs.core.nth.call(null,vec__26346,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26346,file_name,file_line,file_column){
return (function (p1__26344_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26344_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26346,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16926__auto__ = file_line;
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
var and__16914__auto__ = cause;
if(cljs.core.truth_(and__16914__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16914__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__26349 = figwheel.client.heads_up.ensure_container.call(null);
var map__26349__$1 = ((((!((map__26349 == null)))?((((map__26349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26349):map__26349);
var content_area_el = cljs.core.get.call(null,map__26349__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_26397){
var state_val_26398 = (state_26397[(1)]);
if((state_val_26398 === (1))){
var inst_26380 = (state_26397[(7)]);
var inst_26380__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26381 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26382 = ["0.0"];
var inst_26383 = cljs.core.PersistentHashMap.fromArrays(inst_26381,inst_26382);
var inst_26384 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26380__$1,inst_26383);
var inst_26385 = cljs.core.async.timeout.call(null,(300));
var state_26397__$1 = (function (){var statearr_26399 = state_26397;
(statearr_26399[(8)] = inst_26384);

(statearr_26399[(7)] = inst_26380__$1);

return statearr_26399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26397__$1,(2),inst_26385);
} else {
if((state_val_26398 === (2))){
var inst_26380 = (state_26397[(7)]);
var inst_26387 = (state_26397[(2)]);
var inst_26388 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26389 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26390 = cljs.core.PersistentHashMap.fromArrays(inst_26388,inst_26389);
var inst_26391 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26380,inst_26390);
var inst_26392 = cljs.core.async.timeout.call(null,(200));
var state_26397__$1 = (function (){var statearr_26400 = state_26397;
(statearr_26400[(9)] = inst_26387);

(statearr_26400[(10)] = inst_26391);

return statearr_26400;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26397__$1,(3),inst_26392);
} else {
if((state_val_26398 === (3))){
var inst_26380 = (state_26397[(7)]);
var inst_26394 = (state_26397[(2)]);
var inst_26395 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26380,"");
var state_26397__$1 = (function (){var statearr_26401 = state_26397;
(statearr_26401[(11)] = inst_26394);

return statearr_26401;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26397__$1,inst_26395);
} else {
return null;
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__21960__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__21960__auto____0 = (function (){
var statearr_26405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26405[(0)] = figwheel$client$heads_up$clear_$_state_machine__21960__auto__);

(statearr_26405[(1)] = (1));

return statearr_26405;
});
var figwheel$client$heads_up$clear_$_state_machine__21960__auto____1 = (function (state_26397){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_26397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e26406){if((e26406 instanceof Object)){
var ex__21963__auto__ = e26406;
var statearr_26407_26409 = state_26397;
(statearr_26407_26409[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26410 = state_26397;
state_26397 = G__26410;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__21960__auto__ = function(state_26397){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__21960__auto____1.call(this,state_26397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__21960__auto____0;
figwheel$client$heads_up$clear_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__21960__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_26408 = f__22072__auto__.call(null);
(statearr_26408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_26442){
var state_val_26443 = (state_26442[(1)]);
if((state_val_26443 === (1))){
var inst_26432 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26442__$1,(2),inst_26432);
} else {
if((state_val_26443 === (2))){
var inst_26434 = (state_26442[(2)]);
var inst_26435 = cljs.core.async.timeout.call(null,(400));
var state_26442__$1 = (function (){var statearr_26444 = state_26442;
(statearr_26444[(7)] = inst_26434);

return statearr_26444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26442__$1,(3),inst_26435);
} else {
if((state_val_26443 === (3))){
var inst_26437 = (state_26442[(2)]);
var inst_26438 = figwheel.client.heads_up.clear.call(null);
var state_26442__$1 = (function (){var statearr_26445 = state_26442;
(statearr_26445[(8)] = inst_26437);

return statearr_26445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26442__$1,(4),inst_26438);
} else {
if((state_val_26443 === (4))){
var inst_26440 = (state_26442[(2)]);
var state_26442__$1 = state_26442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26442__$1,inst_26440);
} else {
return null;
}
}
}
}
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____0 = (function (){
var statearr_26449 = [null,null,null,null,null,null,null,null,null];
(statearr_26449[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__);

(statearr_26449[(1)] = (1));

return statearr_26449;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____1 = (function (state_26442){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_26442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e26450){if((e26450 instanceof Object)){
var ex__21963__auto__ = e26450;
var statearr_26451_26453 = state_26442;
(statearr_26451_26453[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26454 = state_26442;
state_26442 = G__26454;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__ = function(state_26442){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____1.call(this,state_26442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_26452 = f__22072__auto__.call(null);
(statearr_26452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map