// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26457 = cljs.core._EQ_;
var expr__26458 = (function (){var or__16926__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26457.call(null,"true",expr__26458))){
return true;
} else {
if(cljs.core.truth_(pred__26457.call(null,"false",expr__26458))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26458)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26460__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26461__i = 0, G__26461__a = new Array(arguments.length -  0);
while (G__26461__i < G__26461__a.length) {G__26461__a[G__26461__i] = arguments[G__26461__i + 0]; ++G__26461__i;}
  args = new cljs.core.IndexedSeq(G__26461__a,0);
} 
return G__26460__delegate.call(this,args);};
G__26460.cljs$lang$maxFixedArity = 0;
G__26460.cljs$lang$applyTo = (function (arglist__26462){
var args = cljs.core.seq(arglist__26462);
return G__26460__delegate(args);
});
G__26460.cljs$core$IFn$_invoke$arity$variadic = G__26460__delegate;
return G__26460;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26463){
var map__26466 = p__26463;
var map__26466__$1 = ((((!((map__26466 == null)))?((((map__26466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26466):map__26466);
var message = cljs.core.get.call(null,map__26466__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26466__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16926__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16914__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16914__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16914__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22071__auto___26628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___26628,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___26628,ch){
return (function (state_26597){
var state_val_26598 = (state_26597[(1)]);
if((state_val_26598 === (7))){
var inst_26593 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26599_26629 = state_26597__$1;
(statearr_26599_26629[(2)] = inst_26593);

(statearr_26599_26629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (1))){
var state_26597__$1 = state_26597;
var statearr_26600_26630 = state_26597__$1;
(statearr_26600_26630[(2)] = null);

(statearr_26600_26630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (4))){
var inst_26550 = (state_26597[(7)]);
var inst_26550__$1 = (state_26597[(2)]);
var state_26597__$1 = (function (){var statearr_26601 = state_26597;
(statearr_26601[(7)] = inst_26550__$1);

return statearr_26601;
})();
if(cljs.core.truth_(inst_26550__$1)){
var statearr_26602_26631 = state_26597__$1;
(statearr_26602_26631[(1)] = (5));

} else {
var statearr_26603_26632 = state_26597__$1;
(statearr_26603_26632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (15))){
var inst_26557 = (state_26597[(8)]);
var inst_26572 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26557);
var inst_26573 = cljs.core.first.call(null,inst_26572);
var inst_26574 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26573);
var inst_26575 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26574)].join('');
var inst_26576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26575);
var state_26597__$1 = state_26597;
var statearr_26604_26633 = state_26597__$1;
(statearr_26604_26633[(2)] = inst_26576);

(statearr_26604_26633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (13))){
var inst_26581 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26605_26634 = state_26597__$1;
(statearr_26605_26634[(2)] = inst_26581);

(statearr_26605_26634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (6))){
var state_26597__$1 = state_26597;
var statearr_26606_26635 = state_26597__$1;
(statearr_26606_26635[(2)] = null);

(statearr_26606_26635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (17))){
var inst_26579 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26607_26636 = state_26597__$1;
(statearr_26607_26636[(2)] = inst_26579);

(statearr_26607_26636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (3))){
var inst_26595 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26597__$1,inst_26595);
} else {
if((state_val_26598 === (12))){
var inst_26556 = (state_26597[(9)]);
var inst_26570 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26556,opts);
var state_26597__$1 = state_26597;
if(cljs.core.truth_(inst_26570)){
var statearr_26608_26637 = state_26597__$1;
(statearr_26608_26637[(1)] = (15));

} else {
var statearr_26609_26638 = state_26597__$1;
(statearr_26609_26638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (2))){
var state_26597__$1 = state_26597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26597__$1,(4),ch);
} else {
if((state_val_26598 === (11))){
var inst_26557 = (state_26597[(8)]);
var inst_26562 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26563 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26557);
var inst_26564 = cljs.core.async.timeout.call(null,(1000));
var inst_26565 = [inst_26563,inst_26564];
var inst_26566 = (new cljs.core.PersistentVector(null,2,(5),inst_26562,inst_26565,null));
var state_26597__$1 = state_26597;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26597__$1,(14),inst_26566);
} else {
if((state_val_26598 === (9))){
var inst_26557 = (state_26597[(8)]);
var inst_26583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26584 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26557);
var inst_26585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26584);
var inst_26586 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26585)].join('');
var inst_26587 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26586);
var state_26597__$1 = (function (){var statearr_26610 = state_26597;
(statearr_26610[(10)] = inst_26583);

return statearr_26610;
})();
var statearr_26611_26639 = state_26597__$1;
(statearr_26611_26639[(2)] = inst_26587);

(statearr_26611_26639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (5))){
var inst_26550 = (state_26597[(7)]);
var inst_26552 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26553 = (new cljs.core.PersistentArrayMap(null,2,inst_26552,null));
var inst_26554 = (new cljs.core.PersistentHashSet(null,inst_26553,null));
var inst_26555 = figwheel.client.focus_msgs.call(null,inst_26554,inst_26550);
var inst_26556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26555);
var inst_26557 = cljs.core.first.call(null,inst_26555);
var inst_26558 = figwheel.client.autoload_QMARK_.call(null);
var state_26597__$1 = (function (){var statearr_26612 = state_26597;
(statearr_26612[(9)] = inst_26556);

(statearr_26612[(8)] = inst_26557);

return statearr_26612;
})();
if(cljs.core.truth_(inst_26558)){
var statearr_26613_26640 = state_26597__$1;
(statearr_26613_26640[(1)] = (8));

} else {
var statearr_26614_26641 = state_26597__$1;
(statearr_26614_26641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (14))){
var inst_26568 = (state_26597[(2)]);
var state_26597__$1 = state_26597;
var statearr_26615_26642 = state_26597__$1;
(statearr_26615_26642[(2)] = inst_26568);

(statearr_26615_26642[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (16))){
var state_26597__$1 = state_26597;
var statearr_26616_26643 = state_26597__$1;
(statearr_26616_26643[(2)] = null);

(statearr_26616_26643[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (10))){
var inst_26589 = (state_26597[(2)]);
var state_26597__$1 = (function (){var statearr_26617 = state_26597;
(statearr_26617[(11)] = inst_26589);

return statearr_26617;
})();
var statearr_26618_26644 = state_26597__$1;
(statearr_26618_26644[(2)] = null);

(statearr_26618_26644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26598 === (8))){
var inst_26556 = (state_26597[(9)]);
var inst_26560 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26556,opts);
var state_26597__$1 = state_26597;
if(cljs.core.truth_(inst_26560)){
var statearr_26619_26645 = state_26597__$1;
(statearr_26619_26645[(1)] = (11));

} else {
var statearr_26620_26646 = state_26597__$1;
(statearr_26620_26646[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22071__auto___26628,ch))
;
return ((function (switch__21959__auto__,c__22071__auto___26628,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____0 = (function (){
var statearr_26624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26624[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__);

(statearr_26624[(1)] = (1));

return statearr_26624;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____1 = (function (state_26597){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_26597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e26625){if((e26625 instanceof Object)){
var ex__21963__auto__ = e26625;
var statearr_26626_26647 = state_26597;
(statearr_26626_26647[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26648 = state_26597;
state_26597 = G__26648;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__ = function(state_26597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____1.call(this,state_26597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21960__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___26628,ch))
})();
var state__22073__auto__ = (function (){var statearr_26627 = f__22072__auto__.call(null);
(statearr_26627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___26628);

return statearr_26627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___26628,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26649_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26649_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26656 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26656){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26655 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26654,_STAR_print_newline_STAR_26655,base_path_26656){
return (function() { 
var G__26657__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26658__i = 0, G__26658__a = new Array(arguments.length -  0);
while (G__26658__i < G__26658__a.length) {G__26658__a[G__26658__i] = arguments[G__26658__i + 0]; ++G__26658__i;}
  args = new cljs.core.IndexedSeq(G__26658__a,0);
} 
return G__26657__delegate.call(this,args);};
G__26657.cljs$lang$maxFixedArity = 0;
G__26657.cljs$lang$applyTo = (function (arglist__26659){
var args = cljs.core.seq(arglist__26659);
return G__26657__delegate(args);
});
G__26657.cljs$core$IFn$_invoke$arity$variadic = G__26657__delegate;
return G__26657;
})()
;})(_STAR_print_fn_STAR_26654,_STAR_print_newline_STAR_26655,base_path_26656))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26655;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26654;
}}catch (e26653){if((e26653 instanceof Error)){
var e = e26653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26656], null));
} else {
var e = e26653;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26656))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26660){
var map__26667 = p__26660;
var map__26667__$1 = ((((!((map__26667 == null)))?((((map__26667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26667):map__26667);
var opts = map__26667__$1;
var build_id = cljs.core.get.call(null,map__26667__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26667,map__26667__$1,opts,build_id){
return (function (p__26669){
var vec__26670 = p__26669;
var map__26671 = cljs.core.nth.call(null,vec__26670,(0),null);
var map__26671__$1 = ((((!((map__26671 == null)))?((((map__26671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26671):map__26671);
var msg = map__26671__$1;
var msg_name = cljs.core.get.call(null,map__26671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26670,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26670,map__26671,map__26671__$1,msg,msg_name,_,map__26667,map__26667__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26670,map__26671,map__26671__$1,msg,msg_name,_,map__26667,map__26667__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26667,map__26667__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26677){
var vec__26678 = p__26677;
var map__26679 = cljs.core.nth.call(null,vec__26678,(0),null);
var map__26679__$1 = ((((!((map__26679 == null)))?((((map__26679.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26679.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26679):map__26679);
var msg = map__26679__$1;
var msg_name = cljs.core.get.call(null,map__26679__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26678,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26681){
var map__26691 = p__26681;
var map__26691__$1 = ((((!((map__26691 == null)))?((((map__26691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26691):map__26691);
var on_compile_warning = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26691__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26691,map__26691__$1,on_compile_warning,on_compile_fail){
return (function (p__26693){
var vec__26694 = p__26693;
var map__26695 = cljs.core.nth.call(null,vec__26694,(0),null);
var map__26695__$1 = ((((!((map__26695 == null)))?((((map__26695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26695):map__26695);
var msg = map__26695__$1;
var msg_name = cljs.core.get.call(null,map__26695__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26694,(1));
var pred__26697 = cljs.core._EQ_;
var expr__26698 = msg_name;
if(cljs.core.truth_(pred__26697.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26698))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26697.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26698))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26691,map__26691__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__,msg_hist,msg_names,msg){
return (function (state_26914){
var state_val_26915 = (state_26914[(1)]);
if((state_val_26915 === (7))){
var inst_26838 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26838)){
var statearr_26916_26962 = state_26914__$1;
(statearr_26916_26962[(1)] = (8));

} else {
var statearr_26917_26963 = state_26914__$1;
(statearr_26917_26963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (20))){
var inst_26908 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26918_26964 = state_26914__$1;
(statearr_26918_26964[(2)] = inst_26908);

(statearr_26918_26964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (27))){
var inst_26904 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26919_26965 = state_26914__$1;
(statearr_26919_26965[(2)] = inst_26904);

(statearr_26919_26965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (1))){
var inst_26831 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26831)){
var statearr_26920_26966 = state_26914__$1;
(statearr_26920_26966[(1)] = (2));

} else {
var statearr_26921_26967 = state_26914__$1;
(statearr_26921_26967[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (24))){
var inst_26906 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26922_26968 = state_26914__$1;
(statearr_26922_26968[(2)] = inst_26906);

(statearr_26922_26968[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (4))){
var inst_26912 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else {
if((state_val_26915 === (15))){
var inst_26910 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26923_26969 = state_26914__$1;
(statearr_26923_26969[(2)] = inst_26910);

(statearr_26923_26969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (21))){
var inst_26869 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26924_26970 = state_26914__$1;
(statearr_26924_26970[(2)] = inst_26869);

(statearr_26924_26970[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (31))){
var inst_26893 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26893)){
var statearr_26925_26971 = state_26914__$1;
(statearr_26925_26971[(1)] = (34));

} else {
var statearr_26926_26972 = state_26914__$1;
(statearr_26926_26972[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (32))){
var inst_26902 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26927_26973 = state_26914__$1;
(statearr_26927_26973[(2)] = inst_26902);

(statearr_26927_26973[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (33))){
var inst_26891 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26928_26974 = state_26914__$1;
(statearr_26928_26974[(2)] = inst_26891);

(statearr_26928_26974[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (13))){
var inst_26852 = figwheel.client.heads_up.clear.call(null);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(16),inst_26852);
} else {
if((state_val_26915 === (22))){
var inst_26873 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26874 = figwheel.client.heads_up.append_message.call(null,inst_26873);
var state_26914__$1 = state_26914;
var statearr_26929_26975 = state_26914__$1;
(statearr_26929_26975[(2)] = inst_26874);

(statearr_26929_26975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (36))){
var inst_26900 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26930_26976 = state_26914__$1;
(statearr_26930_26976[(2)] = inst_26900);

(statearr_26930_26976[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (29))){
var inst_26884 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26931_26977 = state_26914__$1;
(statearr_26931_26977[(2)] = inst_26884);

(statearr_26931_26977[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (6))){
var inst_26833 = (state_26914[(7)]);
var state_26914__$1 = state_26914;
var statearr_26932_26978 = state_26914__$1;
(statearr_26932_26978[(2)] = inst_26833);

(statearr_26932_26978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (28))){
var inst_26880 = (state_26914[(2)]);
var inst_26881 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26882 = figwheel.client.heads_up.display_warning.call(null,inst_26881);
var state_26914__$1 = (function (){var statearr_26933 = state_26914;
(statearr_26933[(8)] = inst_26880);

return statearr_26933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(29),inst_26882);
} else {
if((state_val_26915 === (25))){
var inst_26878 = figwheel.client.heads_up.clear.call(null);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(28),inst_26878);
} else {
if((state_val_26915 === (34))){
var inst_26895 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(37),inst_26895);
} else {
if((state_val_26915 === (17))){
var inst_26860 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26934_26979 = state_26914__$1;
(statearr_26934_26979[(2)] = inst_26860);

(statearr_26934_26979[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (3))){
var inst_26850 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26850)){
var statearr_26935_26980 = state_26914__$1;
(statearr_26935_26980[(1)] = (13));

} else {
var statearr_26936_26981 = state_26914__$1;
(statearr_26936_26981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (12))){
var inst_26846 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26937_26982 = state_26914__$1;
(statearr_26937_26982[(2)] = inst_26846);

(statearr_26937_26982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (2))){
var inst_26833 = (state_26914[(7)]);
var inst_26833__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_26914__$1 = (function (){var statearr_26938 = state_26914;
(statearr_26938[(7)] = inst_26833__$1);

return statearr_26938;
})();
if(cljs.core.truth_(inst_26833__$1)){
var statearr_26939_26983 = state_26914__$1;
(statearr_26939_26983[(1)] = (5));

} else {
var statearr_26940_26984 = state_26914__$1;
(statearr_26940_26984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (23))){
var inst_26876 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26876)){
var statearr_26941_26985 = state_26914__$1;
(statearr_26941_26985[(1)] = (25));

} else {
var statearr_26942_26986 = state_26914__$1;
(statearr_26942_26986[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (35))){
var state_26914__$1 = state_26914;
var statearr_26943_26987 = state_26914__$1;
(statearr_26943_26987[(2)] = null);

(statearr_26943_26987[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (19))){
var inst_26871 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26871)){
var statearr_26944_26988 = state_26914__$1;
(statearr_26944_26988[(1)] = (22));

} else {
var statearr_26945_26989 = state_26914__$1;
(statearr_26945_26989[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (11))){
var inst_26842 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26946_26990 = state_26914__$1;
(statearr_26946_26990[(2)] = inst_26842);

(statearr_26946_26990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (9))){
var inst_26844 = figwheel.client.heads_up.clear.call(null);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(12),inst_26844);
} else {
if((state_val_26915 === (5))){
var inst_26835 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_26914__$1 = state_26914;
var statearr_26947_26991 = state_26914__$1;
(statearr_26947_26991[(2)] = inst_26835);

(statearr_26947_26991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (14))){
var inst_26862 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26862)){
var statearr_26948_26992 = state_26914__$1;
(statearr_26948_26992[(1)] = (18));

} else {
var statearr_26949_26993 = state_26914__$1;
(statearr_26949_26993[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (26))){
var inst_26886 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_26914__$1 = state_26914;
if(cljs.core.truth_(inst_26886)){
var statearr_26950_26994 = state_26914__$1;
(statearr_26950_26994[(1)] = (30));

} else {
var statearr_26951_26995 = state_26914__$1;
(statearr_26951_26995[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (16))){
var inst_26854 = (state_26914[(2)]);
var inst_26855 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26856 = figwheel.client.format_messages.call(null,inst_26855);
var inst_26857 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26858 = figwheel.client.heads_up.display_error.call(null,inst_26856,inst_26857);
var state_26914__$1 = (function (){var statearr_26952 = state_26914;
(statearr_26952[(9)] = inst_26854);

return statearr_26952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(17),inst_26858);
} else {
if((state_val_26915 === (30))){
var inst_26888 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26889 = figwheel.client.heads_up.display_warning.call(null,inst_26888);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(33),inst_26889);
} else {
if((state_val_26915 === (10))){
var inst_26848 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26953_26996 = state_26914__$1;
(statearr_26953_26996[(2)] = inst_26848);

(statearr_26953_26996[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (18))){
var inst_26864 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26865 = figwheel.client.format_messages.call(null,inst_26864);
var inst_26866 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_26867 = figwheel.client.heads_up.display_error.call(null,inst_26865,inst_26866);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(21),inst_26867);
} else {
if((state_val_26915 === (37))){
var inst_26897 = (state_26914[(2)]);
var state_26914__$1 = state_26914;
var statearr_26954_26997 = state_26914__$1;
(statearr_26954_26997[(2)] = inst_26897);

(statearr_26954_26997[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26915 === (8))){
var inst_26840 = figwheel.client.heads_up.flash_loaded.call(null);
var state_26914__$1 = state_26914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,(11),inst_26840);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21959__auto__,c__22071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____0 = (function (){
var statearr_26958 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26958[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__);

(statearr_26958[(1)] = (1));

return statearr_26958;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____1 = (function (state_26914){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_26914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e26959){if((e26959 instanceof Object)){
var ex__21963__auto__ = e26959;
var statearr_26960_26998 = state_26914;
(statearr_26960_26998[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26999 = state_26914;
state_26914 = G__26999;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__,msg_hist,msg_names,msg))
})();
var state__22073__auto__ = (function (){var statearr_26961 = f__22072__auto__.call(null);
(statearr_26961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_26961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,msg_hist,msg_names,msg))
);

return c__22071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22071__auto___27062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___27062,ch){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___27062,ch){
return (function (state_27045){
var state_val_27046 = (state_27045[(1)]);
if((state_val_27046 === (1))){
var state_27045__$1 = state_27045;
var statearr_27047_27063 = state_27045__$1;
(statearr_27047_27063[(2)] = null);

(statearr_27047_27063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (2))){
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(4),ch);
} else {
if((state_val_27046 === (3))){
var inst_27043 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27045__$1,inst_27043);
} else {
if((state_val_27046 === (4))){
var inst_27033 = (state_27045[(7)]);
var inst_27033__$1 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27048 = state_27045;
(statearr_27048[(7)] = inst_27033__$1);

return statearr_27048;
})();
if(cljs.core.truth_(inst_27033__$1)){
var statearr_27049_27064 = state_27045__$1;
(statearr_27049_27064[(1)] = (5));

} else {
var statearr_27050_27065 = state_27045__$1;
(statearr_27050_27065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (5))){
var inst_27033 = (state_27045[(7)]);
var inst_27035 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27033);
var state_27045__$1 = state_27045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27045__$1,(8),inst_27035);
} else {
if((state_val_27046 === (6))){
var state_27045__$1 = state_27045;
var statearr_27051_27066 = state_27045__$1;
(statearr_27051_27066[(2)] = null);

(statearr_27051_27066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (7))){
var inst_27041 = (state_27045[(2)]);
var state_27045__$1 = state_27045;
var statearr_27052_27067 = state_27045__$1;
(statearr_27052_27067[(2)] = inst_27041);

(statearr_27052_27067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27046 === (8))){
var inst_27037 = (state_27045[(2)]);
var state_27045__$1 = (function (){var statearr_27053 = state_27045;
(statearr_27053[(8)] = inst_27037);

return statearr_27053;
})();
var statearr_27054_27068 = state_27045__$1;
(statearr_27054_27068[(2)] = null);

(statearr_27054_27068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22071__auto___27062,ch))
;
return ((function (switch__21959__auto__,c__22071__auto___27062,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21960__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21960__auto____0 = (function (){
var statearr_27058 = [null,null,null,null,null,null,null,null,null];
(statearr_27058[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21960__auto__);

(statearr_27058[(1)] = (1));

return statearr_27058;
});
var figwheel$client$heads_up_plugin_$_state_machine__21960__auto____1 = (function (state_27045){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_27045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e27059){if((e27059 instanceof Object)){
var ex__21963__auto__ = e27059;
var statearr_27060_27069 = state_27045;
(statearr_27060_27069[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27070 = state_27045;
state_27045 = G__27070;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21960__auto__ = function(state_27045){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21960__auto____1.call(this,state_27045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21960__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21960__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___27062,ch))
})();
var state__22073__auto__ = (function (){var statearr_27061 = f__22072__auto__.call(null);
(statearr_27061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___27062);

return statearr_27061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___27062,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_27091){
var state_val_27092 = (state_27091[(1)]);
if((state_val_27092 === (1))){
var inst_27086 = cljs.core.async.timeout.call(null,(3000));
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27091__$1,(2),inst_27086);
} else {
if((state_val_27092 === (2))){
var inst_27088 = (state_27091[(2)]);
var inst_27089 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27091__$1 = (function (){var statearr_27093 = state_27091;
(statearr_27093[(7)] = inst_27088);

return statearr_27093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27091__$1,inst_27089);
} else {
return null;
}
}
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____0 = (function (){
var statearr_27097 = [null,null,null,null,null,null,null,null];
(statearr_27097[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__);

(statearr_27097[(1)] = (1));

return statearr_27097;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____1 = (function (state_27091){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_27091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e27098){if((e27098 instanceof Object)){
var ex__21963__auto__ = e27098;
var statearr_27099_27101 = state_27091;
(statearr_27099_27101[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27102 = state_27091;
state_27091 = G__27102;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__ = function(state_27091){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____1.call(this,state_27091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21960__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_27100 = f__22072__auto__.call(null);
(statearr_27100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_27100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27103){
var map__27110 = p__27103;
var map__27110__$1 = ((((!((map__27110 == null)))?((((map__27110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27110):map__27110);
var ed = map__27110__$1;
var formatted_exception = cljs.core.get.call(null,map__27110__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27110__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27110__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27112_27116 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27113_27117 = null;
var count__27114_27118 = (0);
var i__27115_27119 = (0);
while(true){
if((i__27115_27119 < count__27114_27118)){
var msg_27120 = cljs.core._nth.call(null,chunk__27113_27117,i__27115_27119);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27120);

var G__27121 = seq__27112_27116;
var G__27122 = chunk__27113_27117;
var G__27123 = count__27114_27118;
var G__27124 = (i__27115_27119 + (1));
seq__27112_27116 = G__27121;
chunk__27113_27117 = G__27122;
count__27114_27118 = G__27123;
i__27115_27119 = G__27124;
continue;
} else {
var temp__4657__auto___27125 = cljs.core.seq.call(null,seq__27112_27116);
if(temp__4657__auto___27125){
var seq__27112_27126__$1 = temp__4657__auto___27125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27112_27126__$1)){
var c__17729__auto___27127 = cljs.core.chunk_first.call(null,seq__27112_27126__$1);
var G__27128 = cljs.core.chunk_rest.call(null,seq__27112_27126__$1);
var G__27129 = c__17729__auto___27127;
var G__27130 = cljs.core.count.call(null,c__17729__auto___27127);
var G__27131 = (0);
seq__27112_27116 = G__27128;
chunk__27113_27117 = G__27129;
count__27114_27118 = G__27130;
i__27115_27119 = G__27131;
continue;
} else {
var msg_27132 = cljs.core.first.call(null,seq__27112_27126__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27132);

var G__27133 = cljs.core.next.call(null,seq__27112_27126__$1);
var G__27134 = null;
var G__27135 = (0);
var G__27136 = (0);
seq__27112_27116 = G__27133;
chunk__27113_27117 = G__27134;
count__27114_27118 = G__27135;
i__27115_27119 = G__27136;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27137){
var map__27140 = p__27137;
var map__27140__$1 = ((((!((map__27140 == null)))?((((map__27140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27140):map__27140);
var w = map__27140__$1;
var message = cljs.core.get.call(null,map__27140__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16914__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16914__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16914__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27148 = cljs.core.seq.call(null,plugins);
var chunk__27149 = null;
var count__27150 = (0);
var i__27151 = (0);
while(true){
if((i__27151 < count__27150)){
var vec__27152 = cljs.core._nth.call(null,chunk__27149,i__27151);
var k = cljs.core.nth.call(null,vec__27152,(0),null);
var plugin = cljs.core.nth.call(null,vec__27152,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27154 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27148,chunk__27149,count__27150,i__27151,pl_27154,vec__27152,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27154.call(null,msg_hist);
});})(seq__27148,chunk__27149,count__27150,i__27151,pl_27154,vec__27152,k,plugin))
);
} else {
}

var G__27155 = seq__27148;
var G__27156 = chunk__27149;
var G__27157 = count__27150;
var G__27158 = (i__27151 + (1));
seq__27148 = G__27155;
chunk__27149 = G__27156;
count__27150 = G__27157;
i__27151 = G__27158;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27148);
if(temp__4657__auto__){
var seq__27148__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27148__$1)){
var c__17729__auto__ = cljs.core.chunk_first.call(null,seq__27148__$1);
var G__27159 = cljs.core.chunk_rest.call(null,seq__27148__$1);
var G__27160 = c__17729__auto__;
var G__27161 = cljs.core.count.call(null,c__17729__auto__);
var G__27162 = (0);
seq__27148 = G__27159;
chunk__27149 = G__27160;
count__27150 = G__27161;
i__27151 = G__27162;
continue;
} else {
var vec__27153 = cljs.core.first.call(null,seq__27148__$1);
var k = cljs.core.nth.call(null,vec__27153,(0),null);
var plugin = cljs.core.nth.call(null,vec__27153,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27163 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27148,chunk__27149,count__27150,i__27151,pl_27163,vec__27153,k,plugin,seq__27148__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27163.call(null,msg_hist);
});})(seq__27148,chunk__27149,count__27150,i__27151,pl_27163,vec__27153,k,plugin,seq__27148__$1,temp__4657__auto__))
);
} else {
}

var G__27164 = cljs.core.next.call(null,seq__27148__$1);
var G__27165 = null;
var G__27166 = (0);
var G__27167 = (0);
seq__27148 = G__27164;
chunk__27149 = G__27165;
count__27150 = G__27166;
i__27151 = G__27167;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27168 = [];
var len__17984__auto___27171 = arguments.length;
var i__17985__auto___27172 = (0);
while(true){
if((i__17985__auto___27172 < len__17984__auto___27171)){
args27168.push((arguments[i__17985__auto___27172]));

var G__27173 = (i__17985__auto___27172 + (1));
i__17985__auto___27172 = G__27173;
continue;
} else {
}
break;
}

var G__27170 = args27168.length;
switch (G__27170) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27168.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17991__auto__ = [];
var len__17984__auto___27179 = arguments.length;
var i__17985__auto___27180 = (0);
while(true){
if((i__17985__auto___27180 < len__17984__auto___27179)){
args__17991__auto__.push((arguments[i__17985__auto___27180]));

var G__27181 = (i__17985__auto___27180 + (1));
i__17985__auto___27180 = G__27181;
continue;
} else {
}
break;
}

var argseq__17992__auto__ = ((((0) < args__17991__auto__.length))?(new cljs.core.IndexedSeq(args__17991__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17992__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27176){
var map__27177 = p__27176;
var map__27177__$1 = ((((!((map__27177 == null)))?((((map__27177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27177):map__27177);
var opts = map__27177__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27175){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27175));
});

//# sourceMappingURL=client.js.map