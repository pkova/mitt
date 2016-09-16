// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26038_26052 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26039_26053 = null;
var count__26040_26054 = (0);
var i__26041_26055 = (0);
while(true){
if((i__26041_26055 < count__26040_26054)){
var f_26056 = cljs.core._nth.call(null,chunk__26039_26053,i__26041_26055);
cljs.core.println.call(null,"  ",f_26056);

var G__26057 = seq__26038_26052;
var G__26058 = chunk__26039_26053;
var G__26059 = count__26040_26054;
var G__26060 = (i__26041_26055 + (1));
seq__26038_26052 = G__26057;
chunk__26039_26053 = G__26058;
count__26040_26054 = G__26059;
i__26041_26055 = G__26060;
continue;
} else {
var temp__4657__auto___26061 = cljs.core.seq.call(null,seq__26038_26052);
if(temp__4657__auto___26061){
var seq__26038_26062__$1 = temp__4657__auto___26061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26038_26062__$1)){
var c__17729__auto___26063 = cljs.core.chunk_first.call(null,seq__26038_26062__$1);
var G__26064 = cljs.core.chunk_rest.call(null,seq__26038_26062__$1);
var G__26065 = c__17729__auto___26063;
var G__26066 = cljs.core.count.call(null,c__17729__auto___26063);
var G__26067 = (0);
seq__26038_26052 = G__26064;
chunk__26039_26053 = G__26065;
count__26040_26054 = G__26066;
i__26041_26055 = G__26067;
continue;
} else {
var f_26068 = cljs.core.first.call(null,seq__26038_26062__$1);
cljs.core.println.call(null,"  ",f_26068);

var G__26069 = cljs.core.next.call(null,seq__26038_26062__$1);
var G__26070 = null;
var G__26071 = (0);
var G__26072 = (0);
seq__26038_26052 = G__26069;
chunk__26039_26053 = G__26070;
count__26040_26054 = G__26071;
i__26041_26055 = G__26072;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26073 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16926__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26073);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26073)))?cljs.core.second.call(null,arglists_26073):arglists_26073));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26042 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26043 = null;
var count__26044 = (0);
var i__26045 = (0);
while(true){
if((i__26045 < count__26044)){
var vec__26046 = cljs.core._nth.call(null,chunk__26043,i__26045);
var name = cljs.core.nth.call(null,vec__26046,(0),null);
var map__26047 = cljs.core.nth.call(null,vec__26046,(1),null);
var map__26047__$1 = ((((!((map__26047 == null)))?((((map__26047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26047):map__26047);
var doc = cljs.core.get.call(null,map__26047__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26047__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26074 = seq__26042;
var G__26075 = chunk__26043;
var G__26076 = count__26044;
var G__26077 = (i__26045 + (1));
seq__26042 = G__26074;
chunk__26043 = G__26075;
count__26044 = G__26076;
i__26045 = G__26077;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26042);
if(temp__4657__auto__){
var seq__26042__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26042__$1)){
var c__17729__auto__ = cljs.core.chunk_first.call(null,seq__26042__$1);
var G__26078 = cljs.core.chunk_rest.call(null,seq__26042__$1);
var G__26079 = c__17729__auto__;
var G__26080 = cljs.core.count.call(null,c__17729__auto__);
var G__26081 = (0);
seq__26042 = G__26078;
chunk__26043 = G__26079;
count__26044 = G__26080;
i__26045 = G__26081;
continue;
} else {
var vec__26049 = cljs.core.first.call(null,seq__26042__$1);
var name = cljs.core.nth.call(null,vec__26049,(0),null);
var map__26050 = cljs.core.nth.call(null,vec__26049,(1),null);
var map__26050__$1 = ((((!((map__26050 == null)))?((((map__26050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26050):map__26050);
var doc = cljs.core.get.call(null,map__26050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26050__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26082 = cljs.core.next.call(null,seq__26042__$1);
var G__26083 = null;
var G__26084 = (0);
var G__26085 = (0);
seq__26042 = G__26082;
chunk__26043 = G__26083;
count__26044 = G__26084;
i__26045 = G__26085;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map