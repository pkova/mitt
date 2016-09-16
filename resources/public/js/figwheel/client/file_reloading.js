// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16926__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16926__auto__){
return or__16926__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16926__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25014_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25014_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25019 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25020 = null;
var count__25021 = (0);
var i__25022 = (0);
while(true){
if((i__25022 < count__25021)){
var n = cljs.core._nth.call(null,chunk__25020,i__25022);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25023 = seq__25019;
var G__25024 = chunk__25020;
var G__25025 = count__25021;
var G__25026 = (i__25022 + (1));
seq__25019 = G__25023;
chunk__25020 = G__25024;
count__25021 = G__25025;
i__25022 = G__25026;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25019);
if(temp__4657__auto__){
var seq__25019__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25019__$1)){
var c__17729__auto__ = cljs.core.chunk_first.call(null,seq__25019__$1);
var G__25027 = cljs.core.chunk_rest.call(null,seq__25019__$1);
var G__25028 = c__17729__auto__;
var G__25029 = cljs.core.count.call(null,c__17729__auto__);
var G__25030 = (0);
seq__25019 = G__25027;
chunk__25020 = G__25028;
count__25021 = G__25029;
i__25022 = G__25030;
continue;
} else {
var n = cljs.core.first.call(null,seq__25019__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25031 = cljs.core.next.call(null,seq__25019__$1);
var G__25032 = null;
var G__25033 = (0);
var G__25034 = (0);
seq__25019 = G__25031;
chunk__25020 = G__25032;
count__25021 = G__25033;
i__25022 = G__25034;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25073_25080 = cljs.core.seq.call(null,deps);
var chunk__25074_25081 = null;
var count__25075_25082 = (0);
var i__25076_25083 = (0);
while(true){
if((i__25076_25083 < count__25075_25082)){
var dep_25084 = cljs.core._nth.call(null,chunk__25074_25081,i__25076_25083);
topo_sort_helper_STAR_.call(null,dep_25084,(depth + (1)),state);

var G__25085 = seq__25073_25080;
var G__25086 = chunk__25074_25081;
var G__25087 = count__25075_25082;
var G__25088 = (i__25076_25083 + (1));
seq__25073_25080 = G__25085;
chunk__25074_25081 = G__25086;
count__25075_25082 = G__25087;
i__25076_25083 = G__25088;
continue;
} else {
var temp__4657__auto___25089 = cljs.core.seq.call(null,seq__25073_25080);
if(temp__4657__auto___25089){
var seq__25073_25090__$1 = temp__4657__auto___25089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25073_25090__$1)){
var c__17729__auto___25091 = cljs.core.chunk_first.call(null,seq__25073_25090__$1);
var G__25092 = cljs.core.chunk_rest.call(null,seq__25073_25090__$1);
var G__25093 = c__17729__auto___25091;
var G__25094 = cljs.core.count.call(null,c__17729__auto___25091);
var G__25095 = (0);
seq__25073_25080 = G__25092;
chunk__25074_25081 = G__25093;
count__25075_25082 = G__25094;
i__25076_25083 = G__25095;
continue;
} else {
var dep_25096 = cljs.core.first.call(null,seq__25073_25090__$1);
topo_sort_helper_STAR_.call(null,dep_25096,(depth + (1)),state);

var G__25097 = cljs.core.next.call(null,seq__25073_25090__$1);
var G__25098 = null;
var G__25099 = (0);
var G__25100 = (0);
seq__25073_25080 = G__25097;
chunk__25074_25081 = G__25098;
count__25075_25082 = G__25099;
i__25076_25083 = G__25100;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25077){
var vec__25079 = p__25077;
var x = cljs.core.nth.call(null,vec__25079,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25079,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25079,x,xs,get_deps__$1){
return (function (p1__25035_SHARP_){
return clojure.set.difference.call(null,p1__25035_SHARP_,x);
});})(vec__25079,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25113 = cljs.core.seq.call(null,provides);
var chunk__25114 = null;
var count__25115 = (0);
var i__25116 = (0);
while(true){
if((i__25116 < count__25115)){
var prov = cljs.core._nth.call(null,chunk__25114,i__25116);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25117_25125 = cljs.core.seq.call(null,requires);
var chunk__25118_25126 = null;
var count__25119_25127 = (0);
var i__25120_25128 = (0);
while(true){
if((i__25120_25128 < count__25119_25127)){
var req_25129 = cljs.core._nth.call(null,chunk__25118_25126,i__25120_25128);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25129,prov);

var G__25130 = seq__25117_25125;
var G__25131 = chunk__25118_25126;
var G__25132 = count__25119_25127;
var G__25133 = (i__25120_25128 + (1));
seq__25117_25125 = G__25130;
chunk__25118_25126 = G__25131;
count__25119_25127 = G__25132;
i__25120_25128 = G__25133;
continue;
} else {
var temp__4657__auto___25134 = cljs.core.seq.call(null,seq__25117_25125);
if(temp__4657__auto___25134){
var seq__25117_25135__$1 = temp__4657__auto___25134;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25117_25135__$1)){
var c__17729__auto___25136 = cljs.core.chunk_first.call(null,seq__25117_25135__$1);
var G__25137 = cljs.core.chunk_rest.call(null,seq__25117_25135__$1);
var G__25138 = c__17729__auto___25136;
var G__25139 = cljs.core.count.call(null,c__17729__auto___25136);
var G__25140 = (0);
seq__25117_25125 = G__25137;
chunk__25118_25126 = G__25138;
count__25119_25127 = G__25139;
i__25120_25128 = G__25140;
continue;
} else {
var req_25141 = cljs.core.first.call(null,seq__25117_25135__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25141,prov);

var G__25142 = cljs.core.next.call(null,seq__25117_25135__$1);
var G__25143 = null;
var G__25144 = (0);
var G__25145 = (0);
seq__25117_25125 = G__25142;
chunk__25118_25126 = G__25143;
count__25119_25127 = G__25144;
i__25120_25128 = G__25145;
continue;
}
} else {
}
}
break;
}

var G__25146 = seq__25113;
var G__25147 = chunk__25114;
var G__25148 = count__25115;
var G__25149 = (i__25116 + (1));
seq__25113 = G__25146;
chunk__25114 = G__25147;
count__25115 = G__25148;
i__25116 = G__25149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25113);
if(temp__4657__auto__){
var seq__25113__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25113__$1)){
var c__17729__auto__ = cljs.core.chunk_first.call(null,seq__25113__$1);
var G__25150 = cljs.core.chunk_rest.call(null,seq__25113__$1);
var G__25151 = c__17729__auto__;
var G__25152 = cljs.core.count.call(null,c__17729__auto__);
var G__25153 = (0);
seq__25113 = G__25150;
chunk__25114 = G__25151;
count__25115 = G__25152;
i__25116 = G__25153;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25113__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25121_25154 = cljs.core.seq.call(null,requires);
var chunk__25122_25155 = null;
var count__25123_25156 = (0);
var i__25124_25157 = (0);
while(true){
if((i__25124_25157 < count__25123_25156)){
var req_25158 = cljs.core._nth.call(null,chunk__25122_25155,i__25124_25157);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25158,prov);

var G__25159 = seq__25121_25154;
var G__25160 = chunk__25122_25155;
var G__25161 = count__25123_25156;
var G__25162 = (i__25124_25157 + (1));
seq__25121_25154 = G__25159;
chunk__25122_25155 = G__25160;
count__25123_25156 = G__25161;
i__25124_25157 = G__25162;
continue;
} else {
var temp__4657__auto___25163__$1 = cljs.core.seq.call(null,seq__25121_25154);
if(temp__4657__auto___25163__$1){
var seq__25121_25164__$1 = temp__4657__auto___25163__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25121_25164__$1)){
var c__17729__auto___25165 = cljs.core.chunk_first.call(null,seq__25121_25164__$1);
var G__25166 = cljs.core.chunk_rest.call(null,seq__25121_25164__$1);
var G__25167 = c__17729__auto___25165;
var G__25168 = cljs.core.count.call(null,c__17729__auto___25165);
var G__25169 = (0);
seq__25121_25154 = G__25166;
chunk__25122_25155 = G__25167;
count__25123_25156 = G__25168;
i__25124_25157 = G__25169;
continue;
} else {
var req_25170 = cljs.core.first.call(null,seq__25121_25164__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25170,prov);

var G__25171 = cljs.core.next.call(null,seq__25121_25164__$1);
var G__25172 = null;
var G__25173 = (0);
var G__25174 = (0);
seq__25121_25154 = G__25171;
chunk__25122_25155 = G__25172;
count__25123_25156 = G__25173;
i__25124_25157 = G__25174;
continue;
}
} else {
}
}
break;
}

var G__25175 = cljs.core.next.call(null,seq__25113__$1);
var G__25176 = null;
var G__25177 = (0);
var G__25178 = (0);
seq__25113 = G__25175;
chunk__25114 = G__25176;
count__25115 = G__25177;
i__25116 = G__25178;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25183_25187 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25184_25188 = null;
var count__25185_25189 = (0);
var i__25186_25190 = (0);
while(true){
if((i__25186_25190 < count__25185_25189)){
var ns_25191 = cljs.core._nth.call(null,chunk__25184_25188,i__25186_25190);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25191);

var G__25192 = seq__25183_25187;
var G__25193 = chunk__25184_25188;
var G__25194 = count__25185_25189;
var G__25195 = (i__25186_25190 + (1));
seq__25183_25187 = G__25192;
chunk__25184_25188 = G__25193;
count__25185_25189 = G__25194;
i__25186_25190 = G__25195;
continue;
} else {
var temp__4657__auto___25196 = cljs.core.seq.call(null,seq__25183_25187);
if(temp__4657__auto___25196){
var seq__25183_25197__$1 = temp__4657__auto___25196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25183_25197__$1)){
var c__17729__auto___25198 = cljs.core.chunk_first.call(null,seq__25183_25197__$1);
var G__25199 = cljs.core.chunk_rest.call(null,seq__25183_25197__$1);
var G__25200 = c__17729__auto___25198;
var G__25201 = cljs.core.count.call(null,c__17729__auto___25198);
var G__25202 = (0);
seq__25183_25187 = G__25199;
chunk__25184_25188 = G__25200;
count__25185_25189 = G__25201;
i__25186_25190 = G__25202;
continue;
} else {
var ns_25203 = cljs.core.first.call(null,seq__25183_25197__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25203);

var G__25204 = cljs.core.next.call(null,seq__25183_25197__$1);
var G__25205 = null;
var G__25206 = (0);
var G__25207 = (0);
seq__25183_25187 = G__25204;
chunk__25184_25188 = G__25205;
count__25185_25189 = G__25206;
i__25186_25190 = G__25207;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16926__auto__ = goog.require__;
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25208__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25209__i = 0, G__25209__a = new Array(arguments.length -  0);
while (G__25209__i < G__25209__a.length) {G__25209__a[G__25209__i] = arguments[G__25209__i + 0]; ++G__25209__i;}
  args = new cljs.core.IndexedSeq(G__25209__a,0);
} 
return G__25208__delegate.call(this,args);};
G__25208.cljs$lang$maxFixedArity = 0;
G__25208.cljs$lang$applyTo = (function (arglist__25210){
var args = cljs.core.seq(arglist__25210);
return G__25208__delegate(args);
});
G__25208.cljs$core$IFn$_invoke$arity$variadic = G__25208__delegate;
return G__25208;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25212 = cljs.core._EQ_;
var expr__25213 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25212.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25213))){
var path_parts = ((function (pred__25212,expr__25213){
return (function (p1__25211_SHARP_){
return clojure.string.split.call(null,p1__25211_SHARP_,/[\/\\]/);
});})(pred__25212,expr__25213))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25212,expr__25213){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25215){if((e25215 instanceof Error)){
var e = e25215;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25215;

}
}})());
});
;})(path_parts,sep,root,pred__25212,expr__25213))
} else {
if(cljs.core.truth_(pred__25212.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25213))){
return ((function (pred__25212,expr__25213){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25212,expr__25213){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25212,expr__25213))
);

return deferred.addErrback(((function (deferred,pred__25212,expr__25213){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25212,expr__25213))
);
});
;})(pred__25212,expr__25213))
} else {
return ((function (pred__25212,expr__25213){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25212,expr__25213))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25216,callback){
var map__25219 = p__25216;
var map__25219__$1 = ((((!((map__25219 == null)))?((((map__25219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25219):map__25219);
var file_msg = map__25219__$1;
var request_url = cljs.core.get.call(null,map__25219__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25219,map__25219__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25219,map__25219__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_25243){
var state_val_25244 = (state_25243[(1)]);
if((state_val_25244 === (7))){
var inst_25239 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
var statearr_25245_25265 = state_25243__$1;
(statearr_25245_25265[(2)] = inst_25239);

(statearr_25245_25265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (1))){
var state_25243__$1 = state_25243;
var statearr_25246_25266 = state_25243__$1;
(statearr_25246_25266[(2)] = null);

(statearr_25246_25266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (4))){
var inst_25223 = (state_25243[(7)]);
var inst_25223__$1 = (state_25243[(2)]);
var state_25243__$1 = (function (){var statearr_25247 = state_25243;
(statearr_25247[(7)] = inst_25223__$1);

return statearr_25247;
})();
if(cljs.core.truth_(inst_25223__$1)){
var statearr_25248_25267 = state_25243__$1;
(statearr_25248_25267[(1)] = (5));

} else {
var statearr_25249_25268 = state_25243__$1;
(statearr_25249_25268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (6))){
var state_25243__$1 = state_25243;
var statearr_25250_25269 = state_25243__$1;
(statearr_25250_25269[(2)] = null);

(statearr_25250_25269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (3))){
var inst_25241 = (state_25243[(2)]);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25243__$1,inst_25241);
} else {
if((state_val_25244 === (2))){
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25243__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25244 === (11))){
var inst_25235 = (state_25243[(2)]);
var state_25243__$1 = (function (){var statearr_25251 = state_25243;
(statearr_25251[(8)] = inst_25235);

return statearr_25251;
})();
var statearr_25252_25270 = state_25243__$1;
(statearr_25252_25270[(2)] = null);

(statearr_25252_25270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (9))){
var inst_25227 = (state_25243[(9)]);
var inst_25229 = (state_25243[(10)]);
var inst_25231 = inst_25229.call(null,inst_25227);
var state_25243__$1 = state_25243;
var statearr_25253_25271 = state_25243__$1;
(statearr_25253_25271[(2)] = inst_25231);

(statearr_25253_25271[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (5))){
var inst_25223 = (state_25243[(7)]);
var inst_25225 = figwheel.client.file_reloading.blocking_load.call(null,inst_25223);
var state_25243__$1 = state_25243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25243__$1,(8),inst_25225);
} else {
if((state_val_25244 === (10))){
var inst_25227 = (state_25243[(9)]);
var inst_25233 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25227);
var state_25243__$1 = state_25243;
var statearr_25254_25272 = state_25243__$1;
(statearr_25254_25272[(2)] = inst_25233);

(statearr_25254_25272[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25244 === (8))){
var inst_25229 = (state_25243[(10)]);
var inst_25223 = (state_25243[(7)]);
var inst_25227 = (state_25243[(2)]);
var inst_25228 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25229__$1 = cljs.core.get.call(null,inst_25228,inst_25223);
var state_25243__$1 = (function (){var statearr_25255 = state_25243;
(statearr_25255[(9)] = inst_25227);

(statearr_25255[(10)] = inst_25229__$1);

return statearr_25255;
})();
if(cljs.core.truth_(inst_25229__$1)){
var statearr_25256_25273 = state_25243__$1;
(statearr_25256_25273[(1)] = (9));

} else {
var statearr_25257_25274 = state_25243__$1;
(statearr_25257_25274[(1)] = (10));

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
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21960__auto__ = null;
var figwheel$client$file_reloading$state_machine__21960__auto____0 = (function (){
var statearr_25261 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25261[(0)] = figwheel$client$file_reloading$state_machine__21960__auto__);

(statearr_25261[(1)] = (1));

return statearr_25261;
});
var figwheel$client$file_reloading$state_machine__21960__auto____1 = (function (state_25243){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_25243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e25262){if((e25262 instanceof Object)){
var ex__21963__auto__ = e25262;
var statearr_25263_25275 = state_25243;
(statearr_25263_25275[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25276 = state_25243;
state_25243 = G__25276;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21960__auto__ = function(state_25243){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21960__auto____1.call(this,state_25243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21960__auto____0;
figwheel$client$file_reloading$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21960__auto____1;
return figwheel$client$file_reloading$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_25264 = f__22072__auto__.call(null);
(statearr_25264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_25264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25277,callback){
var map__25280 = p__25277;
var map__25280__$1 = ((((!((map__25280 == null)))?((((map__25280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25280):map__25280);
var file_msg = map__25280__$1;
var namespace = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25280,map__25280__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25280,map__25280__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25282){
var map__25285 = p__25282;
var map__25285__$1 = ((((!((map__25285 == null)))?((((map__25285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25285):map__25285);
var file_msg = map__25285__$1;
var namespace = cljs.core.get.call(null,map__25285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16914__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16914__auto__){
var or__16926__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
var or__16926__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16926__auto____$1)){
return or__16926__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16914__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25287,callback){
var map__25290 = p__25287;
var map__25290__$1 = ((((!((map__25290 == null)))?((((map__25290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25290):map__25290);
var file_msg = map__25290__$1;
var request_url = cljs.core.get.call(null,map__25290__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25290__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22071__auto___25378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___25378,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___25378,out){
return (function (state_25360){
var state_val_25361 = (state_25360[(1)]);
if((state_val_25361 === (1))){
var inst_25338 = cljs.core.nth.call(null,files,(0),null);
var inst_25339 = cljs.core.nthnext.call(null,files,(1));
var inst_25340 = files;
var state_25360__$1 = (function (){var statearr_25362 = state_25360;
(statearr_25362[(7)] = inst_25339);

(statearr_25362[(8)] = inst_25338);

(statearr_25362[(9)] = inst_25340);

return statearr_25362;
})();
var statearr_25363_25379 = state_25360__$1;
(statearr_25363_25379[(2)] = null);

(statearr_25363_25379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (2))){
var inst_25343 = (state_25360[(10)]);
var inst_25340 = (state_25360[(9)]);
var inst_25343__$1 = cljs.core.nth.call(null,inst_25340,(0),null);
var inst_25344 = cljs.core.nthnext.call(null,inst_25340,(1));
var inst_25345 = (inst_25343__$1 == null);
var inst_25346 = cljs.core.not.call(null,inst_25345);
var state_25360__$1 = (function (){var statearr_25364 = state_25360;
(statearr_25364[(10)] = inst_25343__$1);

(statearr_25364[(11)] = inst_25344);

return statearr_25364;
})();
if(inst_25346){
var statearr_25365_25380 = state_25360__$1;
(statearr_25365_25380[(1)] = (4));

} else {
var statearr_25366_25381 = state_25360__$1;
(statearr_25366_25381[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (3))){
var inst_25358 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25360__$1,inst_25358);
} else {
if((state_val_25361 === (4))){
var inst_25343 = (state_25360[(10)]);
var inst_25348 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25343);
var state_25360__$1 = state_25360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25360__$1,(7),inst_25348);
} else {
if((state_val_25361 === (5))){
var inst_25354 = cljs.core.async.close_BANG_.call(null,out);
var state_25360__$1 = state_25360;
var statearr_25367_25382 = state_25360__$1;
(statearr_25367_25382[(2)] = inst_25354);

(statearr_25367_25382[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (6))){
var inst_25356 = (state_25360[(2)]);
var state_25360__$1 = state_25360;
var statearr_25368_25383 = state_25360__$1;
(statearr_25368_25383[(2)] = inst_25356);

(statearr_25368_25383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25361 === (7))){
var inst_25344 = (state_25360[(11)]);
var inst_25350 = (state_25360[(2)]);
var inst_25351 = cljs.core.async.put_BANG_.call(null,out,inst_25350);
var inst_25340 = inst_25344;
var state_25360__$1 = (function (){var statearr_25369 = state_25360;
(statearr_25369[(12)] = inst_25351);

(statearr_25369[(9)] = inst_25340);

return statearr_25369;
})();
var statearr_25370_25384 = state_25360__$1;
(statearr_25370_25384[(2)] = null);

(statearr_25370_25384[(1)] = (2));


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
});})(c__22071__auto___25378,out))
;
return ((function (switch__21959__auto__,c__22071__auto___25378,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____0 = (function (){
var statearr_25374 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25374[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__);

(statearr_25374[(1)] = (1));

return statearr_25374;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____1 = (function (state_25360){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_25360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e25375){if((e25375 instanceof Object)){
var ex__21963__auto__ = e25375;
var statearr_25376_25385 = state_25360;
(statearr_25376_25385[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25386 = state_25360;
state_25360 = G__25386;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__ = function(state_25360){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____1.call(this,state_25360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___25378,out))
})();
var state__22073__auto__ = (function (){var statearr_25377 = f__22072__auto__.call(null);
(statearr_25377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___25378);

return statearr_25377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___25378,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25387,opts){
var map__25391 = p__25387;
var map__25391__$1 = ((((!((map__25391 == null)))?((((map__25391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25391):map__25391);
var eval_body__$1 = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16914__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16914__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16914__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25393){var e = e25393;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25394_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25394_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25399){
var vec__25400 = p__25399;
var k = cljs.core.nth.call(null,vec__25400,(0),null);
var v = cljs.core.nth.call(null,vec__25400,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25401){
var vec__25402 = p__25401;
var k = cljs.core.nth.call(null,vec__25402,(0),null);
var v = cljs.core.nth.call(null,vec__25402,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25406,p__25407){
var map__25654 = p__25406;
var map__25654__$1 = ((((!((map__25654 == null)))?((((map__25654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25654):map__25654);
var opts = map__25654__$1;
var before_jsload = cljs.core.get.call(null,map__25654__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25654__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25654__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25655 = p__25407;
var map__25655__$1 = ((((!((map__25655 == null)))?((((map__25655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25655):map__25655);
var msg = map__25655__$1;
var files = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25655__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25808){
var state_val_25809 = (state_25808[(1)]);
if((state_val_25809 === (7))){
var inst_25669 = (state_25808[(7)]);
var inst_25671 = (state_25808[(8)]);
var inst_25672 = (state_25808[(9)]);
var inst_25670 = (state_25808[(10)]);
var inst_25677 = cljs.core._nth.call(null,inst_25670,inst_25672);
var inst_25678 = figwheel.client.file_reloading.eval_body.call(null,inst_25677,opts);
var inst_25679 = (inst_25672 + (1));
var tmp25810 = inst_25669;
var tmp25811 = inst_25671;
var tmp25812 = inst_25670;
var inst_25669__$1 = tmp25810;
var inst_25670__$1 = tmp25812;
var inst_25671__$1 = tmp25811;
var inst_25672__$1 = inst_25679;
var state_25808__$1 = (function (){var statearr_25813 = state_25808;
(statearr_25813[(7)] = inst_25669__$1);

(statearr_25813[(11)] = inst_25678);

(statearr_25813[(8)] = inst_25671__$1);

(statearr_25813[(9)] = inst_25672__$1);

(statearr_25813[(10)] = inst_25670__$1);

return statearr_25813;
})();
var statearr_25814_25900 = state_25808__$1;
(statearr_25814_25900[(2)] = null);

(statearr_25814_25900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (20))){
var inst_25712 = (state_25808[(12)]);
var inst_25720 = figwheel.client.file_reloading.sort_files.call(null,inst_25712);
var state_25808__$1 = state_25808;
var statearr_25815_25901 = state_25808__$1;
(statearr_25815_25901[(2)] = inst_25720);

(statearr_25815_25901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (27))){
var state_25808__$1 = state_25808;
var statearr_25816_25902 = state_25808__$1;
(statearr_25816_25902[(2)] = null);

(statearr_25816_25902[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (1))){
var inst_25661 = (state_25808[(13)]);
var inst_25658 = before_jsload.call(null,files);
var inst_25659 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25660 = (function (){return ((function (inst_25661,inst_25658,inst_25659,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25403_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25403_SHARP_);
});
;})(inst_25661,inst_25658,inst_25659,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25661__$1 = cljs.core.filter.call(null,inst_25660,files);
var inst_25662 = cljs.core.not_empty.call(null,inst_25661__$1);
var state_25808__$1 = (function (){var statearr_25817 = state_25808;
(statearr_25817[(14)] = inst_25658);

(statearr_25817[(13)] = inst_25661__$1);

(statearr_25817[(15)] = inst_25659);

return statearr_25817;
})();
if(cljs.core.truth_(inst_25662)){
var statearr_25818_25903 = state_25808__$1;
(statearr_25818_25903[(1)] = (2));

} else {
var statearr_25819_25904 = state_25808__$1;
(statearr_25819_25904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (24))){
var state_25808__$1 = state_25808;
var statearr_25820_25905 = state_25808__$1;
(statearr_25820_25905[(2)] = null);

(statearr_25820_25905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (39))){
var inst_25762 = (state_25808[(16)]);
var state_25808__$1 = state_25808;
var statearr_25821_25906 = state_25808__$1;
(statearr_25821_25906[(2)] = inst_25762);

(statearr_25821_25906[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (46))){
var inst_25803 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25822_25907 = state_25808__$1;
(statearr_25822_25907[(2)] = inst_25803);

(statearr_25822_25907[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (4))){
var inst_25706 = (state_25808[(2)]);
var inst_25707 = cljs.core.List.EMPTY;
var inst_25708 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25707);
var inst_25709 = (function (){return ((function (inst_25706,inst_25707,inst_25708,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25404_SHARP_){
var and__16914__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25404_SHARP_);
if(cljs.core.truth_(and__16914__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25404_SHARP_));
} else {
return and__16914__auto__;
}
});
;})(inst_25706,inst_25707,inst_25708,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25710 = cljs.core.filter.call(null,inst_25709,files);
var inst_25711 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25712 = cljs.core.concat.call(null,inst_25710,inst_25711);
var state_25808__$1 = (function (){var statearr_25823 = state_25808;
(statearr_25823[(12)] = inst_25712);

(statearr_25823[(17)] = inst_25708);

(statearr_25823[(18)] = inst_25706);

return statearr_25823;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25824_25908 = state_25808__$1;
(statearr_25824_25908[(1)] = (16));

} else {
var statearr_25825_25909 = state_25808__$1;
(statearr_25825_25909[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (15))){
var inst_25696 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25826_25910 = state_25808__$1;
(statearr_25826_25910[(2)] = inst_25696);

(statearr_25826_25910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (21))){
var inst_25722 = (state_25808[(19)]);
var inst_25722__$1 = (state_25808[(2)]);
var inst_25723 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25722__$1);
var state_25808__$1 = (function (){var statearr_25827 = state_25808;
(statearr_25827[(19)] = inst_25722__$1);

return statearr_25827;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25808__$1,(22),inst_25723);
} else {
if((state_val_25809 === (31))){
var inst_25806 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25808__$1,inst_25806);
} else {
if((state_val_25809 === (32))){
var inst_25762 = (state_25808[(16)]);
var inst_25767 = inst_25762.cljs$lang$protocol_mask$partition0$;
var inst_25768 = (inst_25767 & (64));
var inst_25769 = inst_25762.cljs$core$ISeq$;
var inst_25770 = (inst_25768) || (inst_25769);
var state_25808__$1 = state_25808;
if(cljs.core.truth_(inst_25770)){
var statearr_25828_25911 = state_25808__$1;
(statearr_25828_25911[(1)] = (35));

} else {
var statearr_25829_25912 = state_25808__$1;
(statearr_25829_25912[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (40))){
var inst_25783 = (state_25808[(20)]);
var inst_25782 = (state_25808[(2)]);
var inst_25783__$1 = cljs.core.get.call(null,inst_25782,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25784 = cljs.core.get.call(null,inst_25782,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25785 = cljs.core.not_empty.call(null,inst_25783__$1);
var state_25808__$1 = (function (){var statearr_25830 = state_25808;
(statearr_25830[(20)] = inst_25783__$1);

(statearr_25830[(21)] = inst_25784);

return statearr_25830;
})();
if(cljs.core.truth_(inst_25785)){
var statearr_25831_25913 = state_25808__$1;
(statearr_25831_25913[(1)] = (41));

} else {
var statearr_25832_25914 = state_25808__$1;
(statearr_25832_25914[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (33))){
var state_25808__$1 = state_25808;
var statearr_25833_25915 = state_25808__$1;
(statearr_25833_25915[(2)] = false);

(statearr_25833_25915[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (13))){
var inst_25682 = (state_25808[(22)]);
var inst_25686 = cljs.core.chunk_first.call(null,inst_25682);
var inst_25687 = cljs.core.chunk_rest.call(null,inst_25682);
var inst_25688 = cljs.core.count.call(null,inst_25686);
var inst_25669 = inst_25687;
var inst_25670 = inst_25686;
var inst_25671 = inst_25688;
var inst_25672 = (0);
var state_25808__$1 = (function (){var statearr_25834 = state_25808;
(statearr_25834[(7)] = inst_25669);

(statearr_25834[(8)] = inst_25671);

(statearr_25834[(9)] = inst_25672);

(statearr_25834[(10)] = inst_25670);

return statearr_25834;
})();
var statearr_25835_25916 = state_25808__$1;
(statearr_25835_25916[(2)] = null);

(statearr_25835_25916[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (22))){
var inst_25725 = (state_25808[(23)]);
var inst_25726 = (state_25808[(24)]);
var inst_25722 = (state_25808[(19)]);
var inst_25730 = (state_25808[(25)]);
var inst_25725__$1 = (state_25808[(2)]);
var inst_25726__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25725__$1);
var inst_25727 = (function (){var all_files = inst_25722;
var res_SINGLEQUOTE_ = inst_25725__$1;
var res = inst_25726__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25725,inst_25726,inst_25722,inst_25730,inst_25725__$1,inst_25726__$1,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25405_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25405_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25725,inst_25726,inst_25722,inst_25730,inst_25725__$1,inst_25726__$1,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25728 = cljs.core.filter.call(null,inst_25727,inst_25725__$1);
var inst_25729 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25730__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25729);
var inst_25731 = cljs.core.not_empty.call(null,inst_25730__$1);
var state_25808__$1 = (function (){var statearr_25836 = state_25808;
(statearr_25836[(26)] = inst_25728);

(statearr_25836[(23)] = inst_25725__$1);

(statearr_25836[(24)] = inst_25726__$1);

(statearr_25836[(25)] = inst_25730__$1);

return statearr_25836;
})();
if(cljs.core.truth_(inst_25731)){
var statearr_25837_25917 = state_25808__$1;
(statearr_25837_25917[(1)] = (23));

} else {
var statearr_25838_25918 = state_25808__$1;
(statearr_25838_25918[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (36))){
var state_25808__$1 = state_25808;
var statearr_25839_25919 = state_25808__$1;
(statearr_25839_25919[(2)] = false);

(statearr_25839_25919[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (41))){
var inst_25783 = (state_25808[(20)]);
var inst_25787 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25788 = cljs.core.map.call(null,inst_25787,inst_25783);
var inst_25789 = cljs.core.pr_str.call(null,inst_25788);
var inst_25790 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25789)].join('');
var inst_25791 = figwheel.client.utils.log.call(null,inst_25790);
var state_25808__$1 = state_25808;
var statearr_25840_25920 = state_25808__$1;
(statearr_25840_25920[(2)] = inst_25791);

(statearr_25840_25920[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (43))){
var inst_25784 = (state_25808[(21)]);
var inst_25794 = (state_25808[(2)]);
var inst_25795 = cljs.core.not_empty.call(null,inst_25784);
var state_25808__$1 = (function (){var statearr_25841 = state_25808;
(statearr_25841[(27)] = inst_25794);

return statearr_25841;
})();
if(cljs.core.truth_(inst_25795)){
var statearr_25842_25921 = state_25808__$1;
(statearr_25842_25921[(1)] = (44));

} else {
var statearr_25843_25922 = state_25808__$1;
(statearr_25843_25922[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (29))){
var inst_25728 = (state_25808[(26)]);
var inst_25725 = (state_25808[(23)]);
var inst_25762 = (state_25808[(16)]);
var inst_25726 = (state_25808[(24)]);
var inst_25722 = (state_25808[(19)]);
var inst_25730 = (state_25808[(25)]);
var inst_25758 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25761 = (function (){var all_files = inst_25722;
var res_SINGLEQUOTE_ = inst_25725;
var res = inst_25726;
var files_not_loaded = inst_25728;
var dependencies_that_loaded = inst_25730;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25762,inst_25726,inst_25722,inst_25730,inst_25758,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25760){
var map__25844 = p__25760;
var map__25844__$1 = ((((!((map__25844 == null)))?((((map__25844.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25844.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25844):map__25844);
var namespace = cljs.core.get.call(null,map__25844__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25762,inst_25726,inst_25722,inst_25730,inst_25758,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25762__$1 = cljs.core.group_by.call(null,inst_25761,inst_25728);
var inst_25764 = (inst_25762__$1 == null);
var inst_25765 = cljs.core.not.call(null,inst_25764);
var state_25808__$1 = (function (){var statearr_25846 = state_25808;
(statearr_25846[(28)] = inst_25758);

(statearr_25846[(16)] = inst_25762__$1);

return statearr_25846;
})();
if(inst_25765){
var statearr_25847_25923 = state_25808__$1;
(statearr_25847_25923[(1)] = (32));

} else {
var statearr_25848_25924 = state_25808__$1;
(statearr_25848_25924[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (44))){
var inst_25784 = (state_25808[(21)]);
var inst_25797 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25784);
var inst_25798 = cljs.core.pr_str.call(null,inst_25797);
var inst_25799 = [cljs.core.str("not required: "),cljs.core.str(inst_25798)].join('');
var inst_25800 = figwheel.client.utils.log.call(null,inst_25799);
var state_25808__$1 = state_25808;
var statearr_25849_25925 = state_25808__$1;
(statearr_25849_25925[(2)] = inst_25800);

(statearr_25849_25925[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (6))){
var inst_25703 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25850_25926 = state_25808__$1;
(statearr_25850_25926[(2)] = inst_25703);

(statearr_25850_25926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (28))){
var inst_25728 = (state_25808[(26)]);
var inst_25755 = (state_25808[(2)]);
var inst_25756 = cljs.core.not_empty.call(null,inst_25728);
var state_25808__$1 = (function (){var statearr_25851 = state_25808;
(statearr_25851[(29)] = inst_25755);

return statearr_25851;
})();
if(cljs.core.truth_(inst_25756)){
var statearr_25852_25927 = state_25808__$1;
(statearr_25852_25927[(1)] = (29));

} else {
var statearr_25853_25928 = state_25808__$1;
(statearr_25853_25928[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (25))){
var inst_25726 = (state_25808[(24)]);
var inst_25742 = (state_25808[(2)]);
var inst_25743 = cljs.core.not_empty.call(null,inst_25726);
var state_25808__$1 = (function (){var statearr_25854 = state_25808;
(statearr_25854[(30)] = inst_25742);

return statearr_25854;
})();
if(cljs.core.truth_(inst_25743)){
var statearr_25855_25929 = state_25808__$1;
(statearr_25855_25929[(1)] = (26));

} else {
var statearr_25856_25930 = state_25808__$1;
(statearr_25856_25930[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (34))){
var inst_25777 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
if(cljs.core.truth_(inst_25777)){
var statearr_25857_25931 = state_25808__$1;
(statearr_25857_25931[(1)] = (38));

} else {
var statearr_25858_25932 = state_25808__$1;
(statearr_25858_25932[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (17))){
var state_25808__$1 = state_25808;
var statearr_25859_25933 = state_25808__$1;
(statearr_25859_25933[(2)] = recompile_dependents);

(statearr_25859_25933[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (3))){
var state_25808__$1 = state_25808;
var statearr_25860_25934 = state_25808__$1;
(statearr_25860_25934[(2)] = null);

(statearr_25860_25934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (12))){
var inst_25699 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25861_25935 = state_25808__$1;
(statearr_25861_25935[(2)] = inst_25699);

(statearr_25861_25935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (2))){
var inst_25661 = (state_25808[(13)]);
var inst_25668 = cljs.core.seq.call(null,inst_25661);
var inst_25669 = inst_25668;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25808__$1 = (function (){var statearr_25862 = state_25808;
(statearr_25862[(7)] = inst_25669);

(statearr_25862[(8)] = inst_25671);

(statearr_25862[(9)] = inst_25672);

(statearr_25862[(10)] = inst_25670);

return statearr_25862;
})();
var statearr_25863_25936 = state_25808__$1;
(statearr_25863_25936[(2)] = null);

(statearr_25863_25936[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (23))){
var inst_25728 = (state_25808[(26)]);
var inst_25725 = (state_25808[(23)]);
var inst_25726 = (state_25808[(24)]);
var inst_25722 = (state_25808[(19)]);
var inst_25730 = (state_25808[(25)]);
var inst_25733 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25735 = (function (){var all_files = inst_25722;
var res_SINGLEQUOTE_ = inst_25725;
var res = inst_25726;
var files_not_loaded = inst_25728;
var dependencies_that_loaded = inst_25730;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25733,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25734){
var map__25864 = p__25734;
var map__25864__$1 = ((((!((map__25864 == null)))?((((map__25864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25864):map__25864);
var request_url = cljs.core.get.call(null,map__25864__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25733,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25736 = cljs.core.reverse.call(null,inst_25730);
var inst_25737 = cljs.core.map.call(null,inst_25735,inst_25736);
var inst_25738 = cljs.core.pr_str.call(null,inst_25737);
var inst_25739 = figwheel.client.utils.log.call(null,inst_25738);
var state_25808__$1 = (function (){var statearr_25866 = state_25808;
(statearr_25866[(31)] = inst_25733);

return statearr_25866;
})();
var statearr_25867_25937 = state_25808__$1;
(statearr_25867_25937[(2)] = inst_25739);

(statearr_25867_25937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (35))){
var state_25808__$1 = state_25808;
var statearr_25868_25938 = state_25808__$1;
(statearr_25868_25938[(2)] = true);

(statearr_25868_25938[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (19))){
var inst_25712 = (state_25808[(12)]);
var inst_25718 = figwheel.client.file_reloading.expand_files.call(null,inst_25712);
var state_25808__$1 = state_25808;
var statearr_25869_25939 = state_25808__$1;
(statearr_25869_25939[(2)] = inst_25718);

(statearr_25869_25939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (11))){
var state_25808__$1 = state_25808;
var statearr_25870_25940 = state_25808__$1;
(statearr_25870_25940[(2)] = null);

(statearr_25870_25940[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (9))){
var inst_25701 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25871_25941 = state_25808__$1;
(statearr_25871_25941[(2)] = inst_25701);

(statearr_25871_25941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (5))){
var inst_25671 = (state_25808[(8)]);
var inst_25672 = (state_25808[(9)]);
var inst_25674 = (inst_25672 < inst_25671);
var inst_25675 = inst_25674;
var state_25808__$1 = state_25808;
if(cljs.core.truth_(inst_25675)){
var statearr_25872_25942 = state_25808__$1;
(statearr_25872_25942[(1)] = (7));

} else {
var statearr_25873_25943 = state_25808__$1;
(statearr_25873_25943[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (14))){
var inst_25682 = (state_25808[(22)]);
var inst_25691 = cljs.core.first.call(null,inst_25682);
var inst_25692 = figwheel.client.file_reloading.eval_body.call(null,inst_25691,opts);
var inst_25693 = cljs.core.next.call(null,inst_25682);
var inst_25669 = inst_25693;
var inst_25670 = null;
var inst_25671 = (0);
var inst_25672 = (0);
var state_25808__$1 = (function (){var statearr_25874 = state_25808;
(statearr_25874[(32)] = inst_25692);

(statearr_25874[(7)] = inst_25669);

(statearr_25874[(8)] = inst_25671);

(statearr_25874[(9)] = inst_25672);

(statearr_25874[(10)] = inst_25670);

return statearr_25874;
})();
var statearr_25875_25944 = state_25808__$1;
(statearr_25875_25944[(2)] = null);

(statearr_25875_25944[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (45))){
var state_25808__$1 = state_25808;
var statearr_25876_25945 = state_25808__$1;
(statearr_25876_25945[(2)] = null);

(statearr_25876_25945[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (26))){
var inst_25728 = (state_25808[(26)]);
var inst_25725 = (state_25808[(23)]);
var inst_25726 = (state_25808[(24)]);
var inst_25722 = (state_25808[(19)]);
var inst_25730 = (state_25808[(25)]);
var inst_25745 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25747 = (function (){var all_files = inst_25722;
var res_SINGLEQUOTE_ = inst_25725;
var res = inst_25726;
var files_not_loaded = inst_25728;
var dependencies_that_loaded = inst_25730;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25745,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25746){
var map__25877 = p__25746;
var map__25877__$1 = ((((!((map__25877 == null)))?((((map__25877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25877):map__25877);
var namespace = cljs.core.get.call(null,map__25877__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25877__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25745,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25748 = cljs.core.map.call(null,inst_25747,inst_25726);
var inst_25749 = cljs.core.pr_str.call(null,inst_25748);
var inst_25750 = figwheel.client.utils.log.call(null,inst_25749);
var inst_25751 = (function (){var all_files = inst_25722;
var res_SINGLEQUOTE_ = inst_25725;
var res = inst_25726;
var files_not_loaded = inst_25728;
var dependencies_that_loaded = inst_25730;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25745,inst_25747,inst_25748,inst_25749,inst_25750,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25728,inst_25725,inst_25726,inst_25722,inst_25730,inst_25745,inst_25747,inst_25748,inst_25749,inst_25750,state_val_25809,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25752 = setTimeout(inst_25751,(10));
var state_25808__$1 = (function (){var statearr_25879 = state_25808;
(statearr_25879[(33)] = inst_25750);

(statearr_25879[(34)] = inst_25745);

return statearr_25879;
})();
var statearr_25880_25946 = state_25808__$1;
(statearr_25880_25946[(2)] = inst_25752);

(statearr_25880_25946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (16))){
var state_25808__$1 = state_25808;
var statearr_25881_25947 = state_25808__$1;
(statearr_25881_25947[(2)] = reload_dependents);

(statearr_25881_25947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (38))){
var inst_25762 = (state_25808[(16)]);
var inst_25779 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25762);
var state_25808__$1 = state_25808;
var statearr_25882_25948 = state_25808__$1;
(statearr_25882_25948[(2)] = inst_25779);

(statearr_25882_25948[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (30))){
var state_25808__$1 = state_25808;
var statearr_25883_25949 = state_25808__$1;
(statearr_25883_25949[(2)] = null);

(statearr_25883_25949[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (10))){
var inst_25682 = (state_25808[(22)]);
var inst_25684 = cljs.core.chunked_seq_QMARK_.call(null,inst_25682);
var state_25808__$1 = state_25808;
if(inst_25684){
var statearr_25884_25950 = state_25808__$1;
(statearr_25884_25950[(1)] = (13));

} else {
var statearr_25885_25951 = state_25808__$1;
(statearr_25885_25951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (18))){
var inst_25716 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
if(cljs.core.truth_(inst_25716)){
var statearr_25886_25952 = state_25808__$1;
(statearr_25886_25952[(1)] = (19));

} else {
var statearr_25887_25953 = state_25808__$1;
(statearr_25887_25953[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (42))){
var state_25808__$1 = state_25808;
var statearr_25888_25954 = state_25808__$1;
(statearr_25888_25954[(2)] = null);

(statearr_25888_25954[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (37))){
var inst_25774 = (state_25808[(2)]);
var state_25808__$1 = state_25808;
var statearr_25889_25955 = state_25808__$1;
(statearr_25889_25955[(2)] = inst_25774);

(statearr_25889_25955[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25809 === (8))){
var inst_25669 = (state_25808[(7)]);
var inst_25682 = (state_25808[(22)]);
var inst_25682__$1 = cljs.core.seq.call(null,inst_25669);
var state_25808__$1 = (function (){var statearr_25890 = state_25808;
(statearr_25890[(22)] = inst_25682__$1);

return statearr_25890;
})();
if(inst_25682__$1){
var statearr_25891_25956 = state_25808__$1;
(statearr_25891_25956[(1)] = (10));

} else {
var statearr_25892_25957 = state_25808__$1;
(statearr_25892_25957[(1)] = (11));

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
});})(c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21959__auto__,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____0 = (function (){
var statearr_25896 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25896[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__);

(statearr_25896[(1)] = (1));

return statearr_25896;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____1 = (function (state_25808){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_25808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e25897){if((e25897 instanceof Object)){
var ex__21963__auto__ = e25897;
var statearr_25898_25958 = state_25808;
(statearr_25898_25958[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25959 = state_25808;
state_25808 = G__25959;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__ = function(state_25808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____1.call(this,state_25808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22073__auto__ = (function (){var statearr_25899 = f__22072__auto__.call(null);
(statearr_25899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_25899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,map__25654,map__25654__$1,opts,before_jsload,on_jsload,reload_dependents,map__25655,map__25655__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25962,link){
var map__25965 = p__25962;
var map__25965__$1 = ((((!((map__25965 == null)))?((((map__25965.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25965.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25965):map__25965);
var file = cljs.core.get.call(null,map__25965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__25965,map__25965__$1,file){
return (function (p1__25960_SHARP_,p2__25961_SHARP_){
if(cljs.core._EQ_.call(null,p1__25960_SHARP_,p2__25961_SHARP_)){
return p1__25960_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__25965,map__25965__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25971){
var map__25972 = p__25971;
var map__25972__$1 = ((((!((map__25972 == null)))?((((map__25972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25972):map__25972);
var match_length = cljs.core.get.call(null,map__25972__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25972__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25967_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25967_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args25974 = [];
var len__17984__auto___25977 = arguments.length;
var i__17985__auto___25978 = (0);
while(true){
if((i__17985__auto___25978 < len__17984__auto___25977)){
args25974.push((arguments[i__17985__auto___25978]));

var G__25979 = (i__17985__auto___25978 + (1));
i__17985__auto___25978 = G__25979;
continue;
} else {
}
break;
}

var G__25976 = args25974.length;
switch (G__25976) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25974.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25981_SHARP_,p2__25982_SHARP_){
return cljs.core.assoc.call(null,p1__25981_SHARP_,cljs.core.get.call(null,p2__25982_SHARP_,key),p2__25982_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25983){
var map__25986 = p__25983;
var map__25986__$1 = ((((!((map__25986 == null)))?((((map__25986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25986):map__25986);
var f_data = map__25986__$1;
var file = cljs.core.get.call(null,map__25986__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25988,files_msg){
var map__25995 = p__25988;
var map__25995__$1 = ((((!((map__25995 == null)))?((((map__25995.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25995.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25995):map__25995);
var opts = map__25995__$1;
var on_cssload = cljs.core.get.call(null,map__25995__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25997_26001 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25998_26002 = null;
var count__25999_26003 = (0);
var i__26000_26004 = (0);
while(true){
if((i__26000_26004 < count__25999_26003)){
var f_26005 = cljs.core._nth.call(null,chunk__25998_26002,i__26000_26004);
figwheel.client.file_reloading.reload_css_file.call(null,f_26005);

var G__26006 = seq__25997_26001;
var G__26007 = chunk__25998_26002;
var G__26008 = count__25999_26003;
var G__26009 = (i__26000_26004 + (1));
seq__25997_26001 = G__26006;
chunk__25998_26002 = G__26007;
count__25999_26003 = G__26008;
i__26000_26004 = G__26009;
continue;
} else {
var temp__4657__auto___26010 = cljs.core.seq.call(null,seq__25997_26001);
if(temp__4657__auto___26010){
var seq__25997_26011__$1 = temp__4657__auto___26010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25997_26011__$1)){
var c__17729__auto___26012 = cljs.core.chunk_first.call(null,seq__25997_26011__$1);
var G__26013 = cljs.core.chunk_rest.call(null,seq__25997_26011__$1);
var G__26014 = c__17729__auto___26012;
var G__26015 = cljs.core.count.call(null,c__17729__auto___26012);
var G__26016 = (0);
seq__25997_26001 = G__26013;
chunk__25998_26002 = G__26014;
count__25999_26003 = G__26015;
i__26000_26004 = G__26016;
continue;
} else {
var f_26017 = cljs.core.first.call(null,seq__25997_26011__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26017);

var G__26018 = cljs.core.next.call(null,seq__25997_26011__$1);
var G__26019 = null;
var G__26020 = (0);
var G__26021 = (0);
seq__25997_26001 = G__26018;
chunk__25998_26002 = G__26019;
count__25999_26003 = G__26020;
i__26000_26004 = G__26021;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25995,map__25995__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25995,map__25995__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map