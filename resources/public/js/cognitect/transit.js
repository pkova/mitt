// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18040_18044 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18041_18045 = null;
var count__18042_18046 = (0);
var i__18043_18047 = (0);
while(true){
if((i__18043_18047 < count__18042_18046)){
var k_18048 = cljs.core._nth.call(null,chunk__18041_18045,i__18043_18047);
var v_18049 = (b[k_18048]);
(a[k_18048] = v_18049);

var G__18050 = seq__18040_18044;
var G__18051 = chunk__18041_18045;
var G__18052 = count__18042_18046;
var G__18053 = (i__18043_18047 + (1));
seq__18040_18044 = G__18050;
chunk__18041_18045 = G__18051;
count__18042_18046 = G__18052;
i__18043_18047 = G__18053;
continue;
} else {
var temp__4657__auto___18054 = cljs.core.seq.call(null,seq__18040_18044);
if(temp__4657__auto___18054){
var seq__18040_18055__$1 = temp__4657__auto___18054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18040_18055__$1)){
var c__17729__auto___18056 = cljs.core.chunk_first.call(null,seq__18040_18055__$1);
var G__18057 = cljs.core.chunk_rest.call(null,seq__18040_18055__$1);
var G__18058 = c__17729__auto___18056;
var G__18059 = cljs.core.count.call(null,c__17729__auto___18056);
var G__18060 = (0);
seq__18040_18044 = G__18057;
chunk__18041_18045 = G__18058;
count__18042_18046 = G__18059;
i__18043_18047 = G__18060;
continue;
} else {
var k_18061 = cljs.core.first.call(null,seq__18040_18055__$1);
var v_18062 = (b[k_18061]);
(a[k_18061] = v_18062);

var G__18063 = cljs.core.next.call(null,seq__18040_18055__$1);
var G__18064 = null;
var G__18065 = (0);
var G__18066 = (0);
seq__18040_18044 = G__18063;
chunk__18041_18045 = G__18064;
count__18042_18046 = G__18065;
i__18043_18047 = G__18066;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18067 = [];
var len__17984__auto___18070 = arguments.length;
var i__17985__auto___18071 = (0);
while(true){
if((i__17985__auto___18071 < len__17984__auto___18070)){
args18067.push((arguments[i__17985__auto___18071]));

var G__18072 = (i__17985__auto___18071 + (1));
i__17985__auto___18071 = G__18072;
continue;
} else {
}
break;
}

var G__18069 = args18067.length;
switch (G__18069) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18067.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18074 = (i + (2));
var G__18075 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18074;
ret = G__18075;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18076_18080 = cljs.core.seq.call(null,v);
var chunk__18077_18081 = null;
var count__18078_18082 = (0);
var i__18079_18083 = (0);
while(true){
if((i__18079_18083 < count__18078_18082)){
var x_18084 = cljs.core._nth.call(null,chunk__18077_18081,i__18079_18083);
ret.push(x_18084);

var G__18085 = seq__18076_18080;
var G__18086 = chunk__18077_18081;
var G__18087 = count__18078_18082;
var G__18088 = (i__18079_18083 + (1));
seq__18076_18080 = G__18085;
chunk__18077_18081 = G__18086;
count__18078_18082 = G__18087;
i__18079_18083 = G__18088;
continue;
} else {
var temp__4657__auto___18089 = cljs.core.seq.call(null,seq__18076_18080);
if(temp__4657__auto___18089){
var seq__18076_18090__$1 = temp__4657__auto___18089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18076_18090__$1)){
var c__17729__auto___18091 = cljs.core.chunk_first.call(null,seq__18076_18090__$1);
var G__18092 = cljs.core.chunk_rest.call(null,seq__18076_18090__$1);
var G__18093 = c__17729__auto___18091;
var G__18094 = cljs.core.count.call(null,c__17729__auto___18091);
var G__18095 = (0);
seq__18076_18080 = G__18092;
chunk__18077_18081 = G__18093;
count__18078_18082 = G__18094;
i__18079_18083 = G__18095;
continue;
} else {
var x_18096 = cljs.core.first.call(null,seq__18076_18090__$1);
ret.push(x_18096);

var G__18097 = cljs.core.next.call(null,seq__18076_18090__$1);
var G__18098 = null;
var G__18099 = (0);
var G__18100 = (0);
seq__18076_18080 = G__18097;
chunk__18077_18081 = G__18098;
count__18078_18082 = G__18099;
i__18079_18083 = G__18100;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18101_18105 = cljs.core.seq.call(null,v);
var chunk__18102_18106 = null;
var count__18103_18107 = (0);
var i__18104_18108 = (0);
while(true){
if((i__18104_18108 < count__18103_18107)){
var x_18109 = cljs.core._nth.call(null,chunk__18102_18106,i__18104_18108);
ret.push(x_18109);

var G__18110 = seq__18101_18105;
var G__18111 = chunk__18102_18106;
var G__18112 = count__18103_18107;
var G__18113 = (i__18104_18108 + (1));
seq__18101_18105 = G__18110;
chunk__18102_18106 = G__18111;
count__18103_18107 = G__18112;
i__18104_18108 = G__18113;
continue;
} else {
var temp__4657__auto___18114 = cljs.core.seq.call(null,seq__18101_18105);
if(temp__4657__auto___18114){
var seq__18101_18115__$1 = temp__4657__auto___18114;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18101_18115__$1)){
var c__17729__auto___18116 = cljs.core.chunk_first.call(null,seq__18101_18115__$1);
var G__18117 = cljs.core.chunk_rest.call(null,seq__18101_18115__$1);
var G__18118 = c__17729__auto___18116;
var G__18119 = cljs.core.count.call(null,c__17729__auto___18116);
var G__18120 = (0);
seq__18101_18105 = G__18117;
chunk__18102_18106 = G__18118;
count__18103_18107 = G__18119;
i__18104_18108 = G__18120;
continue;
} else {
var x_18121 = cljs.core.first.call(null,seq__18101_18115__$1);
ret.push(x_18121);

var G__18122 = cljs.core.next.call(null,seq__18101_18115__$1);
var G__18123 = null;
var G__18124 = (0);
var G__18125 = (0);
seq__18101_18105 = G__18122;
chunk__18102_18106 = G__18123;
count__18103_18107 = G__18124;
i__18104_18108 = G__18125;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18126_18130 = cljs.core.seq.call(null,v);
var chunk__18127_18131 = null;
var count__18128_18132 = (0);
var i__18129_18133 = (0);
while(true){
if((i__18129_18133 < count__18128_18132)){
var x_18134 = cljs.core._nth.call(null,chunk__18127_18131,i__18129_18133);
ret.push(x_18134);

var G__18135 = seq__18126_18130;
var G__18136 = chunk__18127_18131;
var G__18137 = count__18128_18132;
var G__18138 = (i__18129_18133 + (1));
seq__18126_18130 = G__18135;
chunk__18127_18131 = G__18136;
count__18128_18132 = G__18137;
i__18129_18133 = G__18138;
continue;
} else {
var temp__4657__auto___18139 = cljs.core.seq.call(null,seq__18126_18130);
if(temp__4657__auto___18139){
var seq__18126_18140__$1 = temp__4657__auto___18139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18126_18140__$1)){
var c__17729__auto___18141 = cljs.core.chunk_first.call(null,seq__18126_18140__$1);
var G__18142 = cljs.core.chunk_rest.call(null,seq__18126_18140__$1);
var G__18143 = c__17729__auto___18141;
var G__18144 = cljs.core.count.call(null,c__17729__auto___18141);
var G__18145 = (0);
seq__18126_18130 = G__18142;
chunk__18127_18131 = G__18143;
count__18128_18132 = G__18144;
i__18129_18133 = G__18145;
continue;
} else {
var x_18146 = cljs.core.first.call(null,seq__18126_18140__$1);
ret.push(x_18146);

var G__18147 = cljs.core.next.call(null,seq__18126_18140__$1);
var G__18148 = null;
var G__18149 = (0);
var G__18150 = (0);
seq__18126_18130 = G__18147;
chunk__18127_18131 = G__18148;
count__18128_18132 = G__18149;
i__18129_18133 = G__18150;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18151 = [];
var len__17984__auto___18162 = arguments.length;
var i__17985__auto___18163 = (0);
while(true){
if((i__17985__auto___18163 < len__17984__auto___18162)){
args18151.push((arguments[i__17985__auto___18163]));

var G__18164 = (i__17985__auto___18163 + (1));
i__17985__auto___18163 = G__18164;
continue;
} else {
}
break;
}

var G__18153 = args18151.length;
switch (G__18153) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18151.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18154 = obj;
G__18154.push(kfn.call(null,k),vfn.call(null,v));

return G__18154;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18155 = cljs.core.clone.call(null,handlers);
x18155.forEach = ((function (x18155,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18156 = cljs.core.seq.call(null,coll);
var chunk__18157 = null;
var count__18158 = (0);
var i__18159 = (0);
while(true){
if((i__18159 < count__18158)){
var vec__18160 = cljs.core._nth.call(null,chunk__18157,i__18159);
var k = cljs.core.nth.call(null,vec__18160,(0),null);
var v = cljs.core.nth.call(null,vec__18160,(1),null);
f.call(null,v,k);

var G__18166 = seq__18156;
var G__18167 = chunk__18157;
var G__18168 = count__18158;
var G__18169 = (i__18159 + (1));
seq__18156 = G__18166;
chunk__18157 = G__18167;
count__18158 = G__18168;
i__18159 = G__18169;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__18156);
if(temp__4657__auto__){
var seq__18156__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18156__$1)){
var c__17729__auto__ = cljs.core.chunk_first.call(null,seq__18156__$1);
var G__18170 = cljs.core.chunk_rest.call(null,seq__18156__$1);
var G__18171 = c__17729__auto__;
var G__18172 = cljs.core.count.call(null,c__17729__auto__);
var G__18173 = (0);
seq__18156 = G__18170;
chunk__18157 = G__18171;
count__18158 = G__18172;
i__18159 = G__18173;
continue;
} else {
var vec__18161 = cljs.core.first.call(null,seq__18156__$1);
var k = cljs.core.nth.call(null,vec__18161,(0),null);
var v = cljs.core.nth.call(null,vec__18161,(1),null);
f.call(null,v,k);

var G__18174 = cljs.core.next.call(null,seq__18156__$1);
var G__18175 = null;
var G__18176 = (0);
var G__18177 = (0);
seq__18156 = G__18174;
chunk__18157 = G__18175;
count__18158 = G__18176;
i__18159 = G__18177;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18155,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18155;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18178 = [];
var len__17984__auto___18184 = arguments.length;
var i__17985__auto___18185 = (0);
while(true){
if((i__17985__auto___18185 < len__17984__auto___18184)){
args18178.push((arguments[i__17985__auto___18185]));

var G__18186 = (i__17985__auto___18185 + (1));
i__17985__auto___18185 = G__18186;
continue;
} else {
}
break;
}

var G__18180 = args18178.length;
switch (G__18180) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18178.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18181 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18182){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18182 = meta18182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18183,meta18182__$1){
var self__ = this;
var _18183__$1 = this;
return (new cognitect.transit.t_cognitect$transit18181(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18182__$1));
});

cognitect.transit.t_cognitect$transit18181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18183){
var self__ = this;
var _18183__$1 = this;
return self__.meta18182;
});

cognitect.transit.t_cognitect$transit18181.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18181.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18181.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18181.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18182","meta18182",-2073541567,null)], null);
});

cognitect.transit.t_cognitect$transit18181.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18181.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18181";

cognitect.transit.t_cognitect$transit18181.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cognitect.transit/t_cognitect$transit18181");
});

cognitect.transit.__GT_t_cognitect$transit18181 = (function cognitect$transit$__GT_t_cognitect$transit18181(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18182){
return (new cognitect.transit.t_cognitect$transit18181(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18182));
});

}

return (new cognitect.transit.t_cognitect$transit18181(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16926__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map