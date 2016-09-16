// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22116 = [];
var len__17984__auto___22122 = arguments.length;
var i__17985__auto___22123 = (0);
while(true){
if((i__17985__auto___22123 < len__17984__auto___22122)){
args22116.push((arguments[i__17985__auto___22123]));

var G__22124 = (i__17985__auto___22123 + (1));
i__17985__auto___22123 = G__22124;
continue;
} else {
}
break;
}

var G__22118 = args22116.length;
switch (G__22118) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22116.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22119 = (function (f,blockable,meta22120){
this.f = f;
this.blockable = blockable;
this.meta22120 = meta22120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22121,meta22120__$1){
var self__ = this;
var _22121__$1 = this;
return (new cljs.core.async.t_cljs$core$async22119(self__.f,self__.blockable,meta22120__$1));
});

cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22121){
var self__ = this;
var _22121__$1 = this;
return self__.meta22120;
});

cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22120","meta22120",-1229601599,null)], null);
});

cljs.core.async.t_cljs$core$async22119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22119";

cljs.core.async.t_cljs$core$async22119.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async22119");
});

cljs.core.async.__GT_t_cljs$core$async22119 = (function cljs$core$async$__GT_t_cljs$core$async22119(f__$1,blockable__$1,meta22120){
return (new cljs.core.async.t_cljs$core$async22119(f__$1,blockable__$1,meta22120));
});

}

return (new cljs.core.async.t_cljs$core$async22119(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22128 = [];
var len__17984__auto___22131 = arguments.length;
var i__17985__auto___22132 = (0);
while(true){
if((i__17985__auto___22132 < len__17984__auto___22131)){
args22128.push((arguments[i__17985__auto___22132]));

var G__22133 = (i__17985__auto___22132 + (1));
i__17985__auto___22132 = G__22133;
continue;
} else {
}
break;
}

var G__22130 = args22128.length;
switch (G__22130) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22128.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22135 = [];
var len__17984__auto___22138 = arguments.length;
var i__17985__auto___22139 = (0);
while(true){
if((i__17985__auto___22139 < len__17984__auto___22138)){
args22135.push((arguments[i__17985__auto___22139]));

var G__22140 = (i__17985__auto___22139 + (1));
i__17985__auto___22139 = G__22140;
continue;
} else {
}
break;
}

var G__22137 = args22135.length;
switch (G__22137) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22135.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22142 = [];
var len__17984__auto___22145 = arguments.length;
var i__17985__auto___22146 = (0);
while(true){
if((i__17985__auto___22146 < len__17984__auto___22145)){
args22142.push((arguments[i__17985__auto___22146]));

var G__22147 = (i__17985__auto___22146 + (1));
i__17985__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var G__22144 = args22142.length;
switch (G__22144) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22142.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22149 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22149);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22149,ret){
return (function (){
return fn1.call(null,val_22149);
});})(val_22149,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22150 = [];
var len__17984__auto___22153 = arguments.length;
var i__17985__auto___22154 = (0);
while(true){
if((i__17985__auto___22154 < len__17984__auto___22153)){
args22150.push((arguments[i__17985__auto___22154]));

var G__22155 = (i__17985__auto___22154 + (1));
i__17985__auto___22154 = G__22155;
continue;
} else {
}
break;
}

var G__22152 = args22150.length;
switch (G__22152) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22150.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17829__auto___22157 = n;
var x_22158 = (0);
while(true){
if((x_22158 < n__17829__auto___22157)){
(a[x_22158] = (0));

var G__22159 = (x_22158 + (1));
x_22158 = G__22159;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22160 = (i + (1));
i = G__22160;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22164 = (function (alt_flag,flag,meta22165){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22165 = meta22165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22166,meta22165__$1){
var self__ = this;
var _22166__$1 = this;
return (new cljs.core.async.t_cljs$core$async22164(self__.alt_flag,self__.flag,meta22165__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22166){
var self__ = this;
var _22166__$1 = this;
return self__.meta22165;
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22165","meta22165",-1989114696,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22164";

cljs.core.async.t_cljs$core$async22164.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async22164");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22164 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22164(alt_flag__$1,flag__$1,meta22165){
return (new cljs.core.async.t_cljs$core$async22164(alt_flag__$1,flag__$1,meta22165));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22164(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22170 = (function (alt_handler,flag,cb,meta22171){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22171 = meta22171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22172,meta22171__$1){
var self__ = this;
var _22172__$1 = this;
return (new cljs.core.async.t_cljs$core$async22170(self__.alt_handler,self__.flag,self__.cb,meta22171__$1));
});

cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22172){
var self__ = this;
var _22172__$1 = this;
return self__.meta22171;
});

cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22171","meta22171",-199727993,null)], null);
});

cljs.core.async.t_cljs$core$async22170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22170";

cljs.core.async.t_cljs$core$async22170.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async22170");
});

cljs.core.async.__GT_t_cljs$core$async22170 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22170(alt_handler__$1,flag__$1,cb__$1,meta22171){
return (new cljs.core.async.t_cljs$core$async22170(alt_handler__$1,flag__$1,cb__$1,meta22171));
});

}

return (new cljs.core.async.t_cljs$core$async22170(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22173_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22173_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22174_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22174_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16926__auto__ = wport;
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22175 = (i + (1));
i = G__22175;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16926__auto__ = ret;
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__16914__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16914__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16914__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17991__auto__ = [];
var len__17984__auto___22181 = arguments.length;
var i__17985__auto___22182 = (0);
while(true){
if((i__17985__auto___22182 < len__17984__auto___22181)){
args__17991__auto__.push((arguments[i__17985__auto___22182]));

var G__22183 = (i__17985__auto___22182 + (1));
i__17985__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var argseq__17992__auto__ = ((((1) < args__17991__auto__.length))?(new cljs.core.IndexedSeq(args__17991__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17992__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22178){
var map__22179 = p__22178;
var map__22179__$1 = ((((!((map__22179 == null)))?((((map__22179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22179):map__22179);
var opts = map__22179__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22176){
var G__22177 = cljs.core.first.call(null,seq22176);
var seq22176__$1 = cljs.core.next.call(null,seq22176);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22177,seq22176__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22184 = [];
var len__17984__auto___22234 = arguments.length;
var i__17985__auto___22235 = (0);
while(true){
if((i__17985__auto___22235 < len__17984__auto___22234)){
args22184.push((arguments[i__17985__auto___22235]));

var G__22236 = (i__17985__auto___22235 + (1));
i__17985__auto___22235 = G__22236;
continue;
} else {
}
break;
}

var G__22186 = args22184.length;
switch (G__22186) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22184.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22071__auto___22238 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___22238){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___22238){
return (function (state_22210){
var state_val_22211 = (state_22210[(1)]);
if((state_val_22211 === (7))){
var inst_22206 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22212_22239 = state_22210__$1;
(statearr_22212_22239[(2)] = inst_22206);

(statearr_22212_22239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (1))){
var state_22210__$1 = state_22210;
var statearr_22213_22240 = state_22210__$1;
(statearr_22213_22240[(2)] = null);

(statearr_22213_22240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (4))){
var inst_22189 = (state_22210[(7)]);
var inst_22189__$1 = (state_22210[(2)]);
var inst_22190 = (inst_22189__$1 == null);
var state_22210__$1 = (function (){var statearr_22214 = state_22210;
(statearr_22214[(7)] = inst_22189__$1);

return statearr_22214;
})();
if(cljs.core.truth_(inst_22190)){
var statearr_22215_22241 = state_22210__$1;
(statearr_22215_22241[(1)] = (5));

} else {
var statearr_22216_22242 = state_22210__$1;
(statearr_22216_22242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (13))){
var state_22210__$1 = state_22210;
var statearr_22217_22243 = state_22210__$1;
(statearr_22217_22243[(2)] = null);

(statearr_22217_22243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (6))){
var inst_22189 = (state_22210[(7)]);
var state_22210__$1 = state_22210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22210__$1,(11),to,inst_22189);
} else {
if((state_val_22211 === (3))){
var inst_22208 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22210__$1,inst_22208);
} else {
if((state_val_22211 === (12))){
var state_22210__$1 = state_22210;
var statearr_22218_22244 = state_22210__$1;
(statearr_22218_22244[(2)] = null);

(statearr_22218_22244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (2))){
var state_22210__$1 = state_22210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22210__$1,(4),from);
} else {
if((state_val_22211 === (11))){
var inst_22199 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
if(cljs.core.truth_(inst_22199)){
var statearr_22219_22245 = state_22210__$1;
(statearr_22219_22245[(1)] = (12));

} else {
var statearr_22220_22246 = state_22210__$1;
(statearr_22220_22246[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (9))){
var state_22210__$1 = state_22210;
var statearr_22221_22247 = state_22210__$1;
(statearr_22221_22247[(2)] = null);

(statearr_22221_22247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (5))){
var state_22210__$1 = state_22210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22222_22248 = state_22210__$1;
(statearr_22222_22248[(1)] = (8));

} else {
var statearr_22223_22249 = state_22210__$1;
(statearr_22223_22249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (14))){
var inst_22204 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22224_22250 = state_22210__$1;
(statearr_22224_22250[(2)] = inst_22204);

(statearr_22224_22250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (10))){
var inst_22196 = (state_22210[(2)]);
var state_22210__$1 = state_22210;
var statearr_22225_22251 = state_22210__$1;
(statearr_22225_22251[(2)] = inst_22196);

(statearr_22225_22251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22211 === (8))){
var inst_22193 = cljs.core.async.close_BANG_.call(null,to);
var state_22210__$1 = state_22210;
var statearr_22226_22252 = state_22210__$1;
(statearr_22226_22252[(2)] = inst_22193);

(statearr_22226_22252[(1)] = (10));


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
});})(c__22071__auto___22238))
;
return ((function (switch__21959__auto__,c__22071__auto___22238){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_22230 = [null,null,null,null,null,null,null,null];
(statearr_22230[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_22230[(1)] = (1));

return statearr_22230;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_22210){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22231){if((e22231 instanceof Object)){
var ex__21963__auto__ = e22231;
var statearr_22232_22253 = state_22210;
(statearr_22232_22253[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22254 = state_22210;
state_22210 = G__22254;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_22210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_22210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___22238))
})();
var state__22073__auto__ = (function (){var statearr_22233 = f__22072__auto__.call(null);
(statearr_22233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22238);

return statearr_22233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___22238))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22438){
var vec__22439 = p__22438;
var v = cljs.core.nth.call(null,vec__22439,(0),null);
var p = cljs.core.nth.call(null,vec__22439,(1),null);
var job = vec__22439;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22071__auto___22621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results){
return (function (state_22444){
var state_val_22445 = (state_22444[(1)]);
if((state_val_22445 === (1))){
var state_22444__$1 = state_22444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22444__$1,(2),res,v);
} else {
if((state_val_22445 === (2))){
var inst_22441 = (state_22444[(2)]);
var inst_22442 = cljs.core.async.close_BANG_.call(null,res);
var state_22444__$1 = (function (){var statearr_22446 = state_22444;
(statearr_22446[(7)] = inst_22441);

return statearr_22446;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22444__$1,inst_22442);
} else {
return null;
}
}
});})(c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results))
;
return ((function (switch__21959__auto__,c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_22450 = [null,null,null,null,null,null,null,null];
(statearr_22450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__);

(statearr_22450[(1)] = (1));

return statearr_22450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1 = (function (state_22444){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22451){if((e22451 instanceof Object)){
var ex__21963__auto__ = e22451;
var statearr_22452_22622 = state_22444;
(statearr_22452_22622[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22623 = state_22444;
state_22444 = G__22623;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = function(state_22444){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1.call(this,state_22444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results))
})();
var state__22073__auto__ = (function (){var statearr_22453 = f__22072__auto__.call(null);
(statearr_22453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22621);

return statearr_22453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___22621,res,vec__22439,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22454){
var vec__22455 = p__22454;
var v = cljs.core.nth.call(null,vec__22455,(0),null);
var p = cljs.core.nth.call(null,vec__22455,(1),null);
var job = vec__22455;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17829__auto___22624 = n;
var __22625 = (0);
while(true){
if((__22625 < n__17829__auto___22624)){
var G__22456_22626 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22456_22626) {
case "compute":
var c__22071__auto___22628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22625,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (__22625,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function (state_22469){
var state_val_22470 = (state_22469[(1)]);
if((state_val_22470 === (1))){
var state_22469__$1 = state_22469;
var statearr_22471_22629 = state_22469__$1;
(statearr_22471_22629[(2)] = null);

(statearr_22471_22629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (2))){
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22469__$1,(4),jobs);
} else {
if((state_val_22470 === (3))){
var inst_22467 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22469__$1,inst_22467);
} else {
if((state_val_22470 === (4))){
var inst_22459 = (state_22469[(2)]);
var inst_22460 = process.call(null,inst_22459);
var state_22469__$1 = state_22469;
if(cljs.core.truth_(inst_22460)){
var statearr_22472_22630 = state_22469__$1;
(statearr_22472_22630[(1)] = (5));

} else {
var statearr_22473_22631 = state_22469__$1;
(statearr_22473_22631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (5))){
var state_22469__$1 = state_22469;
var statearr_22474_22632 = state_22469__$1;
(statearr_22474_22632[(2)] = null);

(statearr_22474_22632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (6))){
var state_22469__$1 = state_22469;
var statearr_22475_22633 = state_22469__$1;
(statearr_22475_22633[(2)] = null);

(statearr_22475_22633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22470 === (7))){
var inst_22465 = (state_22469[(2)]);
var state_22469__$1 = state_22469;
var statearr_22476_22634 = state_22469__$1;
(statearr_22476_22634[(2)] = inst_22465);

(statearr_22476_22634[(1)] = (3));


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
});})(__22625,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
;
return ((function (__22625,switch__21959__auto__,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_22480 = [null,null,null,null,null,null,null];
(statearr_22480[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__);

(statearr_22480[(1)] = (1));

return statearr_22480;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1 = (function (state_22469){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22481){if((e22481 instanceof Object)){
var ex__21963__auto__ = e22481;
var statearr_22482_22635 = state_22469;
(statearr_22482_22635[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22636 = state_22469;
state_22469 = G__22636;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = function(state_22469){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1.call(this,state_22469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__;
})()
;})(__22625,switch__21959__auto__,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_22483 = f__22072__auto__.call(null);
(statearr_22483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22628);

return statearr_22483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__22625,c__22071__auto___22628,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
);


break;
case "async":
var c__22071__auto___22637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22625,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (__22625,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function (state_22496){
var state_val_22497 = (state_22496[(1)]);
if((state_val_22497 === (1))){
var state_22496__$1 = state_22496;
var statearr_22498_22638 = state_22496__$1;
(statearr_22498_22638[(2)] = null);

(statearr_22498_22638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22497 === (2))){
var state_22496__$1 = state_22496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22496__$1,(4),jobs);
} else {
if((state_val_22497 === (3))){
var inst_22494 = (state_22496[(2)]);
var state_22496__$1 = state_22496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22496__$1,inst_22494);
} else {
if((state_val_22497 === (4))){
var inst_22486 = (state_22496[(2)]);
var inst_22487 = async.call(null,inst_22486);
var state_22496__$1 = state_22496;
if(cljs.core.truth_(inst_22487)){
var statearr_22499_22639 = state_22496__$1;
(statearr_22499_22639[(1)] = (5));

} else {
var statearr_22500_22640 = state_22496__$1;
(statearr_22500_22640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22497 === (5))){
var state_22496__$1 = state_22496;
var statearr_22501_22641 = state_22496__$1;
(statearr_22501_22641[(2)] = null);

(statearr_22501_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22497 === (6))){
var state_22496__$1 = state_22496;
var statearr_22502_22642 = state_22496__$1;
(statearr_22502_22642[(2)] = null);

(statearr_22502_22642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22497 === (7))){
var inst_22492 = (state_22496[(2)]);
var state_22496__$1 = state_22496;
var statearr_22503_22643 = state_22496__$1;
(statearr_22503_22643[(2)] = inst_22492);

(statearr_22503_22643[(1)] = (3));


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
});})(__22625,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
;
return ((function (__22625,switch__21959__auto__,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_22507 = [null,null,null,null,null,null,null];
(statearr_22507[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__);

(statearr_22507[(1)] = (1));

return statearr_22507;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1 = (function (state_22496){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22508){if((e22508 instanceof Object)){
var ex__21963__auto__ = e22508;
var statearr_22509_22644 = state_22496;
(statearr_22509_22644[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22645 = state_22496;
state_22496 = G__22645;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = function(state_22496){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1.call(this,state_22496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__;
})()
;})(__22625,switch__21959__auto__,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_22510 = f__22072__auto__.call(null);
(statearr_22510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22637);

return statearr_22510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(__22625,c__22071__auto___22637,G__22456_22626,n__17829__auto___22624,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22646 = (__22625 + (1));
__22625 = G__22646;
continue;
} else {
}
break;
}

var c__22071__auto___22647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___22647,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___22647,jobs,results,process,async){
return (function (state_22532){
var state_val_22533 = (state_22532[(1)]);
if((state_val_22533 === (1))){
var state_22532__$1 = state_22532;
var statearr_22534_22648 = state_22532__$1;
(statearr_22534_22648[(2)] = null);

(statearr_22534_22648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22533 === (2))){
var state_22532__$1 = state_22532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22532__$1,(4),from);
} else {
if((state_val_22533 === (3))){
var inst_22530 = (state_22532[(2)]);
var state_22532__$1 = state_22532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22532__$1,inst_22530);
} else {
if((state_val_22533 === (4))){
var inst_22513 = (state_22532[(7)]);
var inst_22513__$1 = (state_22532[(2)]);
var inst_22514 = (inst_22513__$1 == null);
var state_22532__$1 = (function (){var statearr_22535 = state_22532;
(statearr_22535[(7)] = inst_22513__$1);

return statearr_22535;
})();
if(cljs.core.truth_(inst_22514)){
var statearr_22536_22649 = state_22532__$1;
(statearr_22536_22649[(1)] = (5));

} else {
var statearr_22537_22650 = state_22532__$1;
(statearr_22537_22650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22533 === (5))){
var inst_22516 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22532__$1 = state_22532;
var statearr_22538_22651 = state_22532__$1;
(statearr_22538_22651[(2)] = inst_22516);

(statearr_22538_22651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22533 === (6))){
var inst_22518 = (state_22532[(8)]);
var inst_22513 = (state_22532[(7)]);
var inst_22518__$1 = cljs.core.async.chan.call(null,(1));
var inst_22519 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22520 = [inst_22513,inst_22518__$1];
var inst_22521 = (new cljs.core.PersistentVector(null,2,(5),inst_22519,inst_22520,null));
var state_22532__$1 = (function (){var statearr_22539 = state_22532;
(statearr_22539[(8)] = inst_22518__$1);

return statearr_22539;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22532__$1,(8),jobs,inst_22521);
} else {
if((state_val_22533 === (7))){
var inst_22528 = (state_22532[(2)]);
var state_22532__$1 = state_22532;
var statearr_22540_22652 = state_22532__$1;
(statearr_22540_22652[(2)] = inst_22528);

(statearr_22540_22652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22533 === (8))){
var inst_22518 = (state_22532[(8)]);
var inst_22523 = (state_22532[(2)]);
var state_22532__$1 = (function (){var statearr_22541 = state_22532;
(statearr_22541[(9)] = inst_22523);

return statearr_22541;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22532__$1,(9),results,inst_22518);
} else {
if((state_val_22533 === (9))){
var inst_22525 = (state_22532[(2)]);
var state_22532__$1 = (function (){var statearr_22542 = state_22532;
(statearr_22542[(10)] = inst_22525);

return statearr_22542;
})();
var statearr_22543_22653 = state_22532__$1;
(statearr_22543_22653[(2)] = null);

(statearr_22543_22653[(1)] = (2));


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
});})(c__22071__auto___22647,jobs,results,process,async))
;
return ((function (switch__21959__auto__,c__22071__auto___22647,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_22547 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22547[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__);

(statearr_22547[(1)] = (1));

return statearr_22547;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1 = (function (state_22532){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22548){if((e22548 instanceof Object)){
var ex__21963__auto__ = e22548;
var statearr_22549_22654 = state_22532;
(statearr_22549_22654[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22655 = state_22532;
state_22532 = G__22655;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = function(state_22532){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1.call(this,state_22532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___22647,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_22550 = f__22072__auto__.call(null);
(statearr_22550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22647);

return statearr_22550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___22647,jobs,results,process,async))
);


var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__,jobs,results,process,async){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__,jobs,results,process,async){
return (function (state_22588){
var state_val_22589 = (state_22588[(1)]);
if((state_val_22589 === (7))){
var inst_22584 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22590_22656 = state_22588__$1;
(statearr_22590_22656[(2)] = inst_22584);

(statearr_22590_22656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (20))){
var state_22588__$1 = state_22588;
var statearr_22591_22657 = state_22588__$1;
(statearr_22591_22657[(2)] = null);

(statearr_22591_22657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (1))){
var state_22588__$1 = state_22588;
var statearr_22592_22658 = state_22588__$1;
(statearr_22592_22658[(2)] = null);

(statearr_22592_22658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (4))){
var inst_22553 = (state_22588[(7)]);
var inst_22553__$1 = (state_22588[(2)]);
var inst_22554 = (inst_22553__$1 == null);
var state_22588__$1 = (function (){var statearr_22593 = state_22588;
(statearr_22593[(7)] = inst_22553__$1);

return statearr_22593;
})();
if(cljs.core.truth_(inst_22554)){
var statearr_22594_22659 = state_22588__$1;
(statearr_22594_22659[(1)] = (5));

} else {
var statearr_22595_22660 = state_22588__$1;
(statearr_22595_22660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (15))){
var inst_22566 = (state_22588[(8)]);
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22588__$1,(18),to,inst_22566);
} else {
if((state_val_22589 === (21))){
var inst_22579 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22596_22661 = state_22588__$1;
(statearr_22596_22661[(2)] = inst_22579);

(statearr_22596_22661[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (13))){
var inst_22581 = (state_22588[(2)]);
var state_22588__$1 = (function (){var statearr_22597 = state_22588;
(statearr_22597[(9)] = inst_22581);

return statearr_22597;
})();
var statearr_22598_22662 = state_22588__$1;
(statearr_22598_22662[(2)] = null);

(statearr_22598_22662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (6))){
var inst_22553 = (state_22588[(7)]);
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22588__$1,(11),inst_22553);
} else {
if((state_val_22589 === (17))){
var inst_22574 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
if(cljs.core.truth_(inst_22574)){
var statearr_22599_22663 = state_22588__$1;
(statearr_22599_22663[(1)] = (19));

} else {
var statearr_22600_22664 = state_22588__$1;
(statearr_22600_22664[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (3))){
var inst_22586 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22588__$1,inst_22586);
} else {
if((state_val_22589 === (12))){
var inst_22563 = (state_22588[(10)]);
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22588__$1,(14),inst_22563);
} else {
if((state_val_22589 === (2))){
var state_22588__$1 = state_22588;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22588__$1,(4),results);
} else {
if((state_val_22589 === (19))){
var state_22588__$1 = state_22588;
var statearr_22601_22665 = state_22588__$1;
(statearr_22601_22665[(2)] = null);

(statearr_22601_22665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (11))){
var inst_22563 = (state_22588[(2)]);
var state_22588__$1 = (function (){var statearr_22602 = state_22588;
(statearr_22602[(10)] = inst_22563);

return statearr_22602;
})();
var statearr_22603_22666 = state_22588__$1;
(statearr_22603_22666[(2)] = null);

(statearr_22603_22666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (9))){
var state_22588__$1 = state_22588;
var statearr_22604_22667 = state_22588__$1;
(statearr_22604_22667[(2)] = null);

(statearr_22604_22667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (5))){
var state_22588__$1 = state_22588;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22605_22668 = state_22588__$1;
(statearr_22605_22668[(1)] = (8));

} else {
var statearr_22606_22669 = state_22588__$1;
(statearr_22606_22669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (14))){
var inst_22566 = (state_22588[(8)]);
var inst_22568 = (state_22588[(11)]);
var inst_22566__$1 = (state_22588[(2)]);
var inst_22567 = (inst_22566__$1 == null);
var inst_22568__$1 = cljs.core.not.call(null,inst_22567);
var state_22588__$1 = (function (){var statearr_22607 = state_22588;
(statearr_22607[(8)] = inst_22566__$1);

(statearr_22607[(11)] = inst_22568__$1);

return statearr_22607;
})();
if(inst_22568__$1){
var statearr_22608_22670 = state_22588__$1;
(statearr_22608_22670[(1)] = (15));

} else {
var statearr_22609_22671 = state_22588__$1;
(statearr_22609_22671[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (16))){
var inst_22568 = (state_22588[(11)]);
var state_22588__$1 = state_22588;
var statearr_22610_22672 = state_22588__$1;
(statearr_22610_22672[(2)] = inst_22568);

(statearr_22610_22672[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (10))){
var inst_22560 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22611_22673 = state_22588__$1;
(statearr_22611_22673[(2)] = inst_22560);

(statearr_22611_22673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (18))){
var inst_22571 = (state_22588[(2)]);
var state_22588__$1 = state_22588;
var statearr_22612_22674 = state_22588__$1;
(statearr_22612_22674[(2)] = inst_22571);

(statearr_22612_22674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22589 === (8))){
var inst_22557 = cljs.core.async.close_BANG_.call(null,to);
var state_22588__$1 = state_22588;
var statearr_22613_22675 = state_22588__$1;
(statearr_22613_22675[(2)] = inst_22557);

(statearr_22613_22675[(1)] = (10));


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
});})(c__22071__auto__,jobs,results,process,async))
;
return ((function (switch__21959__auto__,c__22071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_22617 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__);

(statearr_22617[(1)] = (1));

return statearr_22617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1 = (function (state_22588){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22588);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22618){if((e22618 instanceof Object)){
var ex__21963__auto__ = e22618;
var statearr_22619_22676 = state_22588;
(statearr_22619_22676[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22588);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22677 = state_22588;
state_22588 = G__22677;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__ = function(state_22588){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1.call(this,state_22588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__,jobs,results,process,async))
})();
var state__22073__auto__ = (function (){var statearr_22620 = f__22072__auto__.call(null);
(statearr_22620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_22620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__,jobs,results,process,async))
);

return c__22071__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22678 = [];
var len__17984__auto___22681 = arguments.length;
var i__17985__auto___22682 = (0);
while(true){
if((i__17985__auto___22682 < len__17984__auto___22681)){
args22678.push((arguments[i__17985__auto___22682]));

var G__22683 = (i__17985__auto___22682 + (1));
i__17985__auto___22682 = G__22683;
continue;
} else {
}
break;
}

var G__22680 = args22678.length;
switch (G__22680) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22678.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22685 = [];
var len__17984__auto___22688 = arguments.length;
var i__17985__auto___22689 = (0);
while(true){
if((i__17985__auto___22689 < len__17984__auto___22688)){
args22685.push((arguments[i__17985__auto___22689]));

var G__22690 = (i__17985__auto___22689 + (1));
i__17985__auto___22689 = G__22690;
continue;
} else {
}
break;
}

var G__22687 = args22685.length;
switch (G__22687) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22685.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22692 = [];
var len__17984__auto___22745 = arguments.length;
var i__17985__auto___22746 = (0);
while(true){
if((i__17985__auto___22746 < len__17984__auto___22745)){
args22692.push((arguments[i__17985__auto___22746]));

var G__22747 = (i__17985__auto___22746 + (1));
i__17985__auto___22746 = G__22747;
continue;
} else {
}
break;
}

var G__22694 = args22692.length;
switch (G__22694) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22692.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22071__auto___22749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___22749,tc,fc){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___22749,tc,fc){
return (function (state_22720){
var state_val_22721 = (state_22720[(1)]);
if((state_val_22721 === (7))){
var inst_22716 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22722_22750 = state_22720__$1;
(statearr_22722_22750[(2)] = inst_22716);

(statearr_22722_22750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (1))){
var state_22720__$1 = state_22720;
var statearr_22723_22751 = state_22720__$1;
(statearr_22723_22751[(2)] = null);

(statearr_22723_22751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (4))){
var inst_22697 = (state_22720[(7)]);
var inst_22697__$1 = (state_22720[(2)]);
var inst_22698 = (inst_22697__$1 == null);
var state_22720__$1 = (function (){var statearr_22724 = state_22720;
(statearr_22724[(7)] = inst_22697__$1);

return statearr_22724;
})();
if(cljs.core.truth_(inst_22698)){
var statearr_22725_22752 = state_22720__$1;
(statearr_22725_22752[(1)] = (5));

} else {
var statearr_22726_22753 = state_22720__$1;
(statearr_22726_22753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (13))){
var state_22720__$1 = state_22720;
var statearr_22727_22754 = state_22720__$1;
(statearr_22727_22754[(2)] = null);

(statearr_22727_22754[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (6))){
var inst_22697 = (state_22720[(7)]);
var inst_22703 = p.call(null,inst_22697);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22703)){
var statearr_22728_22755 = state_22720__$1;
(statearr_22728_22755[(1)] = (9));

} else {
var statearr_22729_22756 = state_22720__$1;
(statearr_22729_22756[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (3))){
var inst_22718 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22720__$1,inst_22718);
} else {
if((state_val_22721 === (12))){
var state_22720__$1 = state_22720;
var statearr_22730_22757 = state_22720__$1;
(statearr_22730_22757[(2)] = null);

(statearr_22730_22757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (2))){
var state_22720__$1 = state_22720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22720__$1,(4),ch);
} else {
if((state_val_22721 === (11))){
var inst_22697 = (state_22720[(7)]);
var inst_22707 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22720__$1,(8),inst_22707,inst_22697);
} else {
if((state_val_22721 === (9))){
var state_22720__$1 = state_22720;
var statearr_22731_22758 = state_22720__$1;
(statearr_22731_22758[(2)] = tc);

(statearr_22731_22758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (5))){
var inst_22700 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22701 = cljs.core.async.close_BANG_.call(null,fc);
var state_22720__$1 = (function (){var statearr_22732 = state_22720;
(statearr_22732[(8)] = inst_22700);

return statearr_22732;
})();
var statearr_22733_22759 = state_22720__$1;
(statearr_22733_22759[(2)] = inst_22701);

(statearr_22733_22759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (14))){
var inst_22714 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
var statearr_22734_22760 = state_22720__$1;
(statearr_22734_22760[(2)] = inst_22714);

(statearr_22734_22760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (10))){
var state_22720__$1 = state_22720;
var statearr_22735_22761 = state_22720__$1;
(statearr_22735_22761[(2)] = fc);

(statearr_22735_22761[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22721 === (8))){
var inst_22709 = (state_22720[(2)]);
var state_22720__$1 = state_22720;
if(cljs.core.truth_(inst_22709)){
var statearr_22736_22762 = state_22720__$1;
(statearr_22736_22762[(1)] = (12));

} else {
var statearr_22737_22763 = state_22720__$1;
(statearr_22737_22763[(1)] = (13));

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
});})(c__22071__auto___22749,tc,fc))
;
return ((function (switch__21959__auto__,c__22071__auto___22749,tc,fc){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_22741 = [null,null,null,null,null,null,null,null,null];
(statearr_22741[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_22741[(1)] = (1));

return statearr_22741;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_22720){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22742){if((e22742 instanceof Object)){
var ex__21963__auto__ = e22742;
var statearr_22743_22764 = state_22720;
(statearr_22743_22764[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22765 = state_22720;
state_22720 = G__22765;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_22720){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_22720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___22749,tc,fc))
})();
var state__22073__auto__ = (function (){var statearr_22744 = f__22072__auto__.call(null);
(statearr_22744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___22749);

return statearr_22744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___22749,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_22829){
var state_val_22830 = (state_22829[(1)]);
if((state_val_22830 === (7))){
var inst_22825 = (state_22829[(2)]);
var state_22829__$1 = state_22829;
var statearr_22831_22852 = state_22829__$1;
(statearr_22831_22852[(2)] = inst_22825);

(statearr_22831_22852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (1))){
var inst_22809 = init;
var state_22829__$1 = (function (){var statearr_22832 = state_22829;
(statearr_22832[(7)] = inst_22809);

return statearr_22832;
})();
var statearr_22833_22853 = state_22829__$1;
(statearr_22833_22853[(2)] = null);

(statearr_22833_22853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (4))){
var inst_22812 = (state_22829[(8)]);
var inst_22812__$1 = (state_22829[(2)]);
var inst_22813 = (inst_22812__$1 == null);
var state_22829__$1 = (function (){var statearr_22834 = state_22829;
(statearr_22834[(8)] = inst_22812__$1);

return statearr_22834;
})();
if(cljs.core.truth_(inst_22813)){
var statearr_22835_22854 = state_22829__$1;
(statearr_22835_22854[(1)] = (5));

} else {
var statearr_22836_22855 = state_22829__$1;
(statearr_22836_22855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (6))){
var inst_22809 = (state_22829[(7)]);
var inst_22816 = (state_22829[(9)]);
var inst_22812 = (state_22829[(8)]);
var inst_22816__$1 = f.call(null,inst_22809,inst_22812);
var inst_22817 = cljs.core.reduced_QMARK_.call(null,inst_22816__$1);
var state_22829__$1 = (function (){var statearr_22837 = state_22829;
(statearr_22837[(9)] = inst_22816__$1);

return statearr_22837;
})();
if(inst_22817){
var statearr_22838_22856 = state_22829__$1;
(statearr_22838_22856[(1)] = (8));

} else {
var statearr_22839_22857 = state_22829__$1;
(statearr_22839_22857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (3))){
var inst_22827 = (state_22829[(2)]);
var state_22829__$1 = state_22829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22829__$1,inst_22827);
} else {
if((state_val_22830 === (2))){
var state_22829__$1 = state_22829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22829__$1,(4),ch);
} else {
if((state_val_22830 === (9))){
var inst_22816 = (state_22829[(9)]);
var inst_22809 = inst_22816;
var state_22829__$1 = (function (){var statearr_22840 = state_22829;
(statearr_22840[(7)] = inst_22809);

return statearr_22840;
})();
var statearr_22841_22858 = state_22829__$1;
(statearr_22841_22858[(2)] = null);

(statearr_22841_22858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (5))){
var inst_22809 = (state_22829[(7)]);
var state_22829__$1 = state_22829;
var statearr_22842_22859 = state_22829__$1;
(statearr_22842_22859[(2)] = inst_22809);

(statearr_22842_22859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (10))){
var inst_22823 = (state_22829[(2)]);
var state_22829__$1 = state_22829;
var statearr_22843_22860 = state_22829__$1;
(statearr_22843_22860[(2)] = inst_22823);

(statearr_22843_22860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22830 === (8))){
var inst_22816 = (state_22829[(9)]);
var inst_22819 = cljs.core.deref.call(null,inst_22816);
var state_22829__$1 = state_22829;
var statearr_22844_22861 = state_22829__$1;
(statearr_22844_22861[(2)] = inst_22819);

(statearr_22844_22861[(1)] = (10));


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
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21960__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21960__auto____0 = (function (){
var statearr_22848 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22848[(0)] = cljs$core$async$reduce_$_state_machine__21960__auto__);

(statearr_22848[(1)] = (1));

return statearr_22848;
});
var cljs$core$async$reduce_$_state_machine__21960__auto____1 = (function (state_22829){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22849){if((e22849 instanceof Object)){
var ex__21963__auto__ = e22849;
var statearr_22850_22862 = state_22829;
(statearr_22850_22862[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22863 = state_22829;
state_22829 = G__22863;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21960__auto__ = function(state_22829){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21960__auto____1.call(this,state_22829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21960__auto____0;
cljs$core$async$reduce_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21960__auto____1;
return cljs$core$async$reduce_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_22851 = f__22072__auto__.call(null);
(statearr_22851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_22851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22864 = [];
var len__17984__auto___22916 = arguments.length;
var i__17985__auto___22917 = (0);
while(true){
if((i__17985__auto___22917 < len__17984__auto___22916)){
args22864.push((arguments[i__17985__auto___22917]));

var G__22918 = (i__17985__auto___22917 + (1));
i__17985__auto___22917 = G__22918;
continue;
} else {
}
break;
}

var G__22866 = args22864.length;
switch (G__22866) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22864.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_22891){
var state_val_22892 = (state_22891[(1)]);
if((state_val_22892 === (7))){
var inst_22873 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22893_22920 = state_22891__$1;
(statearr_22893_22920[(2)] = inst_22873);

(statearr_22893_22920[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (1))){
var inst_22867 = cljs.core.seq.call(null,coll);
var inst_22868 = inst_22867;
var state_22891__$1 = (function (){var statearr_22894 = state_22891;
(statearr_22894[(7)] = inst_22868);

return statearr_22894;
})();
var statearr_22895_22921 = state_22891__$1;
(statearr_22895_22921[(2)] = null);

(statearr_22895_22921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (4))){
var inst_22868 = (state_22891[(7)]);
var inst_22871 = cljs.core.first.call(null,inst_22868);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22891__$1,(7),ch,inst_22871);
} else {
if((state_val_22892 === (13))){
var inst_22885 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22896_22922 = state_22891__$1;
(statearr_22896_22922[(2)] = inst_22885);

(statearr_22896_22922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (6))){
var inst_22876 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22876)){
var statearr_22897_22923 = state_22891__$1;
(statearr_22897_22923[(1)] = (8));

} else {
var statearr_22898_22924 = state_22891__$1;
(statearr_22898_22924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (3))){
var inst_22889 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22891__$1,inst_22889);
} else {
if((state_val_22892 === (12))){
var state_22891__$1 = state_22891;
var statearr_22899_22925 = state_22891__$1;
(statearr_22899_22925[(2)] = null);

(statearr_22899_22925[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (2))){
var inst_22868 = (state_22891[(7)]);
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22868)){
var statearr_22900_22926 = state_22891__$1;
(statearr_22900_22926[(1)] = (4));

} else {
var statearr_22901_22927 = state_22891__$1;
(statearr_22901_22927[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (11))){
var inst_22882 = cljs.core.async.close_BANG_.call(null,ch);
var state_22891__$1 = state_22891;
var statearr_22902_22928 = state_22891__$1;
(statearr_22902_22928[(2)] = inst_22882);

(statearr_22902_22928[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (9))){
var state_22891__$1 = state_22891;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22903_22929 = state_22891__$1;
(statearr_22903_22929[(1)] = (11));

} else {
var statearr_22904_22930 = state_22891__$1;
(statearr_22904_22930[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (5))){
var inst_22868 = (state_22891[(7)]);
var state_22891__$1 = state_22891;
var statearr_22905_22931 = state_22891__$1;
(statearr_22905_22931[(2)] = inst_22868);

(statearr_22905_22931[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (10))){
var inst_22887 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22906_22932 = state_22891__$1;
(statearr_22906_22932[(2)] = inst_22887);

(statearr_22906_22932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (8))){
var inst_22868 = (state_22891[(7)]);
var inst_22878 = cljs.core.next.call(null,inst_22868);
var inst_22868__$1 = inst_22878;
var state_22891__$1 = (function (){var statearr_22907 = state_22891;
(statearr_22907[(7)] = inst_22868__$1);

return statearr_22907;
})();
var statearr_22908_22933 = state_22891__$1;
(statearr_22908_22933[(2)] = null);

(statearr_22908_22933[(1)] = (2));


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
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_22912 = [null,null,null,null,null,null,null,null];
(statearr_22912[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_22912[(1)] = (1));

return statearr_22912;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_22891){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_22891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e22913){if((e22913 instanceof Object)){
var ex__21963__auto__ = e22913;
var statearr_22914_22934 = state_22891;
(statearr_22914_22934[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22935 = state_22891;
state_22891 = G__22935;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_22891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_22891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_22915 = f__22072__auto__.call(null);
(statearr_22915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_22915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17581__auto__ = (((_ == null))?null:_);
var m__17582__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,_);
} else {
var m__17582__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17582__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,ch);
} else {
var m__17582__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m);
} else {
var m__17582__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23157 = (function (mult,ch,cs,meta23158){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23158 = meta23158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23159,meta23158__$1){
var self__ = this;
var _23159__$1 = this;
return (new cljs.core.async.t_cljs$core$async23157(self__.mult,self__.ch,self__.cs,meta23158__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23159){
var self__ = this;
var _23159__$1 = this;
return self__.meta23158;
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23158","meta23158",-1473583127,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23157.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23157.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23157";

cljs.core.async.t_cljs$core$async23157.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async23157");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23157 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23157(mult__$1,ch__$1,cs__$1,meta23158){
return (new cljs.core.async.t_cljs$core$async23157(mult__$1,ch__$1,cs__$1,meta23158));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23157(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__22071__auto___23378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___23378,cs,m,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___23378,cs,m,dchan,dctr,done){
return (function (state_23290){
var state_val_23291 = (state_23290[(1)]);
if((state_val_23291 === (7))){
var inst_23286 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23292_23379 = state_23290__$1;
(statearr_23292_23379[(2)] = inst_23286);

(statearr_23292_23379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (20))){
var inst_23191 = (state_23290[(7)]);
var inst_23201 = cljs.core.first.call(null,inst_23191);
var inst_23202 = cljs.core.nth.call(null,inst_23201,(0),null);
var inst_23203 = cljs.core.nth.call(null,inst_23201,(1),null);
var state_23290__$1 = (function (){var statearr_23293 = state_23290;
(statearr_23293[(8)] = inst_23202);

return statearr_23293;
})();
if(cljs.core.truth_(inst_23203)){
var statearr_23294_23380 = state_23290__$1;
(statearr_23294_23380[(1)] = (22));

} else {
var statearr_23295_23381 = state_23290__$1;
(statearr_23295_23381[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (27))){
var inst_23231 = (state_23290[(9)]);
var inst_23162 = (state_23290[(10)]);
var inst_23238 = (state_23290[(11)]);
var inst_23233 = (state_23290[(12)]);
var inst_23238__$1 = cljs.core._nth.call(null,inst_23231,inst_23233);
var inst_23239 = cljs.core.async.put_BANG_.call(null,inst_23238__$1,inst_23162,done);
var state_23290__$1 = (function (){var statearr_23296 = state_23290;
(statearr_23296[(11)] = inst_23238__$1);

return statearr_23296;
})();
if(cljs.core.truth_(inst_23239)){
var statearr_23297_23382 = state_23290__$1;
(statearr_23297_23382[(1)] = (30));

} else {
var statearr_23298_23383 = state_23290__$1;
(statearr_23298_23383[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (1))){
var state_23290__$1 = state_23290;
var statearr_23299_23384 = state_23290__$1;
(statearr_23299_23384[(2)] = null);

(statearr_23299_23384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (24))){
var inst_23191 = (state_23290[(7)]);
var inst_23208 = (state_23290[(2)]);
var inst_23209 = cljs.core.next.call(null,inst_23191);
var inst_23171 = inst_23209;
var inst_23172 = null;
var inst_23173 = (0);
var inst_23174 = (0);
var state_23290__$1 = (function (){var statearr_23300 = state_23290;
(statearr_23300[(13)] = inst_23171);

(statearr_23300[(14)] = inst_23172);

(statearr_23300[(15)] = inst_23208);

(statearr_23300[(16)] = inst_23173);

(statearr_23300[(17)] = inst_23174);

return statearr_23300;
})();
var statearr_23301_23385 = state_23290__$1;
(statearr_23301_23385[(2)] = null);

(statearr_23301_23385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (39))){
var state_23290__$1 = state_23290;
var statearr_23305_23386 = state_23290__$1;
(statearr_23305_23386[(2)] = null);

(statearr_23305_23386[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (4))){
var inst_23162 = (state_23290[(10)]);
var inst_23162__$1 = (state_23290[(2)]);
var inst_23163 = (inst_23162__$1 == null);
var state_23290__$1 = (function (){var statearr_23306 = state_23290;
(statearr_23306[(10)] = inst_23162__$1);

return statearr_23306;
})();
if(cljs.core.truth_(inst_23163)){
var statearr_23307_23387 = state_23290__$1;
(statearr_23307_23387[(1)] = (5));

} else {
var statearr_23308_23388 = state_23290__$1;
(statearr_23308_23388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (15))){
var inst_23171 = (state_23290[(13)]);
var inst_23172 = (state_23290[(14)]);
var inst_23173 = (state_23290[(16)]);
var inst_23174 = (state_23290[(17)]);
var inst_23187 = (state_23290[(2)]);
var inst_23188 = (inst_23174 + (1));
var tmp23302 = inst_23171;
var tmp23303 = inst_23172;
var tmp23304 = inst_23173;
var inst_23171__$1 = tmp23302;
var inst_23172__$1 = tmp23303;
var inst_23173__$1 = tmp23304;
var inst_23174__$1 = inst_23188;
var state_23290__$1 = (function (){var statearr_23309 = state_23290;
(statearr_23309[(18)] = inst_23187);

(statearr_23309[(13)] = inst_23171__$1);

(statearr_23309[(14)] = inst_23172__$1);

(statearr_23309[(16)] = inst_23173__$1);

(statearr_23309[(17)] = inst_23174__$1);

return statearr_23309;
})();
var statearr_23310_23389 = state_23290__$1;
(statearr_23310_23389[(2)] = null);

(statearr_23310_23389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (21))){
var inst_23212 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23314_23390 = state_23290__$1;
(statearr_23314_23390[(2)] = inst_23212);

(statearr_23314_23390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (31))){
var inst_23238 = (state_23290[(11)]);
var inst_23242 = done.call(null,null);
var inst_23243 = cljs.core.async.untap_STAR_.call(null,m,inst_23238);
var state_23290__$1 = (function (){var statearr_23315 = state_23290;
(statearr_23315[(19)] = inst_23242);

return statearr_23315;
})();
var statearr_23316_23391 = state_23290__$1;
(statearr_23316_23391[(2)] = inst_23243);

(statearr_23316_23391[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (32))){
var inst_23232 = (state_23290[(20)]);
var inst_23230 = (state_23290[(21)]);
var inst_23231 = (state_23290[(9)]);
var inst_23233 = (state_23290[(12)]);
var inst_23245 = (state_23290[(2)]);
var inst_23246 = (inst_23233 + (1));
var tmp23311 = inst_23232;
var tmp23312 = inst_23230;
var tmp23313 = inst_23231;
var inst_23230__$1 = tmp23312;
var inst_23231__$1 = tmp23313;
var inst_23232__$1 = tmp23311;
var inst_23233__$1 = inst_23246;
var state_23290__$1 = (function (){var statearr_23317 = state_23290;
(statearr_23317[(20)] = inst_23232__$1);

(statearr_23317[(21)] = inst_23230__$1);

(statearr_23317[(9)] = inst_23231__$1);

(statearr_23317[(22)] = inst_23245);

(statearr_23317[(12)] = inst_23233__$1);

return statearr_23317;
})();
var statearr_23318_23392 = state_23290__$1;
(statearr_23318_23392[(2)] = null);

(statearr_23318_23392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (40))){
var inst_23258 = (state_23290[(23)]);
var inst_23262 = done.call(null,null);
var inst_23263 = cljs.core.async.untap_STAR_.call(null,m,inst_23258);
var state_23290__$1 = (function (){var statearr_23319 = state_23290;
(statearr_23319[(24)] = inst_23262);

return statearr_23319;
})();
var statearr_23320_23393 = state_23290__$1;
(statearr_23320_23393[(2)] = inst_23263);

(statearr_23320_23393[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (33))){
var inst_23249 = (state_23290[(25)]);
var inst_23251 = cljs.core.chunked_seq_QMARK_.call(null,inst_23249);
var state_23290__$1 = state_23290;
if(inst_23251){
var statearr_23321_23394 = state_23290__$1;
(statearr_23321_23394[(1)] = (36));

} else {
var statearr_23322_23395 = state_23290__$1;
(statearr_23322_23395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (13))){
var inst_23181 = (state_23290[(26)]);
var inst_23184 = cljs.core.async.close_BANG_.call(null,inst_23181);
var state_23290__$1 = state_23290;
var statearr_23323_23396 = state_23290__$1;
(statearr_23323_23396[(2)] = inst_23184);

(statearr_23323_23396[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (22))){
var inst_23202 = (state_23290[(8)]);
var inst_23205 = cljs.core.async.close_BANG_.call(null,inst_23202);
var state_23290__$1 = state_23290;
var statearr_23324_23397 = state_23290__$1;
(statearr_23324_23397[(2)] = inst_23205);

(statearr_23324_23397[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (36))){
var inst_23249 = (state_23290[(25)]);
var inst_23253 = cljs.core.chunk_first.call(null,inst_23249);
var inst_23254 = cljs.core.chunk_rest.call(null,inst_23249);
var inst_23255 = cljs.core.count.call(null,inst_23253);
var inst_23230 = inst_23254;
var inst_23231 = inst_23253;
var inst_23232 = inst_23255;
var inst_23233 = (0);
var state_23290__$1 = (function (){var statearr_23325 = state_23290;
(statearr_23325[(20)] = inst_23232);

(statearr_23325[(21)] = inst_23230);

(statearr_23325[(9)] = inst_23231);

(statearr_23325[(12)] = inst_23233);

return statearr_23325;
})();
var statearr_23326_23398 = state_23290__$1;
(statearr_23326_23398[(2)] = null);

(statearr_23326_23398[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (41))){
var inst_23249 = (state_23290[(25)]);
var inst_23265 = (state_23290[(2)]);
var inst_23266 = cljs.core.next.call(null,inst_23249);
var inst_23230 = inst_23266;
var inst_23231 = null;
var inst_23232 = (0);
var inst_23233 = (0);
var state_23290__$1 = (function (){var statearr_23327 = state_23290;
(statearr_23327[(20)] = inst_23232);

(statearr_23327[(21)] = inst_23230);

(statearr_23327[(9)] = inst_23231);

(statearr_23327[(12)] = inst_23233);

(statearr_23327[(27)] = inst_23265);

return statearr_23327;
})();
var statearr_23328_23399 = state_23290__$1;
(statearr_23328_23399[(2)] = null);

(statearr_23328_23399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (43))){
var state_23290__$1 = state_23290;
var statearr_23329_23400 = state_23290__$1;
(statearr_23329_23400[(2)] = null);

(statearr_23329_23400[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (29))){
var inst_23274 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23330_23401 = state_23290__$1;
(statearr_23330_23401[(2)] = inst_23274);

(statearr_23330_23401[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (44))){
var inst_23283 = (state_23290[(2)]);
var state_23290__$1 = (function (){var statearr_23331 = state_23290;
(statearr_23331[(28)] = inst_23283);

return statearr_23331;
})();
var statearr_23332_23402 = state_23290__$1;
(statearr_23332_23402[(2)] = null);

(statearr_23332_23402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (6))){
var inst_23222 = (state_23290[(29)]);
var inst_23221 = cljs.core.deref.call(null,cs);
var inst_23222__$1 = cljs.core.keys.call(null,inst_23221);
var inst_23223 = cljs.core.count.call(null,inst_23222__$1);
var inst_23224 = cljs.core.reset_BANG_.call(null,dctr,inst_23223);
var inst_23229 = cljs.core.seq.call(null,inst_23222__$1);
var inst_23230 = inst_23229;
var inst_23231 = null;
var inst_23232 = (0);
var inst_23233 = (0);
var state_23290__$1 = (function (){var statearr_23333 = state_23290;
(statearr_23333[(20)] = inst_23232);

(statearr_23333[(21)] = inst_23230);

(statearr_23333[(30)] = inst_23224);

(statearr_23333[(9)] = inst_23231);

(statearr_23333[(29)] = inst_23222__$1);

(statearr_23333[(12)] = inst_23233);

return statearr_23333;
})();
var statearr_23334_23403 = state_23290__$1;
(statearr_23334_23403[(2)] = null);

(statearr_23334_23403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (28))){
var inst_23230 = (state_23290[(21)]);
var inst_23249 = (state_23290[(25)]);
var inst_23249__$1 = cljs.core.seq.call(null,inst_23230);
var state_23290__$1 = (function (){var statearr_23335 = state_23290;
(statearr_23335[(25)] = inst_23249__$1);

return statearr_23335;
})();
if(inst_23249__$1){
var statearr_23336_23404 = state_23290__$1;
(statearr_23336_23404[(1)] = (33));

} else {
var statearr_23337_23405 = state_23290__$1;
(statearr_23337_23405[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (25))){
var inst_23232 = (state_23290[(20)]);
var inst_23233 = (state_23290[(12)]);
var inst_23235 = (inst_23233 < inst_23232);
var inst_23236 = inst_23235;
var state_23290__$1 = state_23290;
if(cljs.core.truth_(inst_23236)){
var statearr_23338_23406 = state_23290__$1;
(statearr_23338_23406[(1)] = (27));

} else {
var statearr_23339_23407 = state_23290__$1;
(statearr_23339_23407[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (34))){
var state_23290__$1 = state_23290;
var statearr_23340_23408 = state_23290__$1;
(statearr_23340_23408[(2)] = null);

(statearr_23340_23408[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (17))){
var state_23290__$1 = state_23290;
var statearr_23341_23409 = state_23290__$1;
(statearr_23341_23409[(2)] = null);

(statearr_23341_23409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (3))){
var inst_23288 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23290__$1,inst_23288);
} else {
if((state_val_23291 === (12))){
var inst_23217 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23342_23410 = state_23290__$1;
(statearr_23342_23410[(2)] = inst_23217);

(statearr_23342_23410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (2))){
var state_23290__$1 = state_23290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23290__$1,(4),ch);
} else {
if((state_val_23291 === (23))){
var state_23290__$1 = state_23290;
var statearr_23343_23411 = state_23290__$1;
(statearr_23343_23411[(2)] = null);

(statearr_23343_23411[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (35))){
var inst_23272 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23344_23412 = state_23290__$1;
(statearr_23344_23412[(2)] = inst_23272);

(statearr_23344_23412[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (19))){
var inst_23191 = (state_23290[(7)]);
var inst_23195 = cljs.core.chunk_first.call(null,inst_23191);
var inst_23196 = cljs.core.chunk_rest.call(null,inst_23191);
var inst_23197 = cljs.core.count.call(null,inst_23195);
var inst_23171 = inst_23196;
var inst_23172 = inst_23195;
var inst_23173 = inst_23197;
var inst_23174 = (0);
var state_23290__$1 = (function (){var statearr_23345 = state_23290;
(statearr_23345[(13)] = inst_23171);

(statearr_23345[(14)] = inst_23172);

(statearr_23345[(16)] = inst_23173);

(statearr_23345[(17)] = inst_23174);

return statearr_23345;
})();
var statearr_23346_23413 = state_23290__$1;
(statearr_23346_23413[(2)] = null);

(statearr_23346_23413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (11))){
var inst_23171 = (state_23290[(13)]);
var inst_23191 = (state_23290[(7)]);
var inst_23191__$1 = cljs.core.seq.call(null,inst_23171);
var state_23290__$1 = (function (){var statearr_23347 = state_23290;
(statearr_23347[(7)] = inst_23191__$1);

return statearr_23347;
})();
if(inst_23191__$1){
var statearr_23348_23414 = state_23290__$1;
(statearr_23348_23414[(1)] = (16));

} else {
var statearr_23349_23415 = state_23290__$1;
(statearr_23349_23415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (9))){
var inst_23219 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23350_23416 = state_23290__$1;
(statearr_23350_23416[(2)] = inst_23219);

(statearr_23350_23416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (5))){
var inst_23169 = cljs.core.deref.call(null,cs);
var inst_23170 = cljs.core.seq.call(null,inst_23169);
var inst_23171 = inst_23170;
var inst_23172 = null;
var inst_23173 = (0);
var inst_23174 = (0);
var state_23290__$1 = (function (){var statearr_23351 = state_23290;
(statearr_23351[(13)] = inst_23171);

(statearr_23351[(14)] = inst_23172);

(statearr_23351[(16)] = inst_23173);

(statearr_23351[(17)] = inst_23174);

return statearr_23351;
})();
var statearr_23352_23417 = state_23290__$1;
(statearr_23352_23417[(2)] = null);

(statearr_23352_23417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (14))){
var state_23290__$1 = state_23290;
var statearr_23353_23418 = state_23290__$1;
(statearr_23353_23418[(2)] = null);

(statearr_23353_23418[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (45))){
var inst_23280 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23354_23419 = state_23290__$1;
(statearr_23354_23419[(2)] = inst_23280);

(statearr_23354_23419[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (26))){
var inst_23222 = (state_23290[(29)]);
var inst_23276 = (state_23290[(2)]);
var inst_23277 = cljs.core.seq.call(null,inst_23222);
var state_23290__$1 = (function (){var statearr_23355 = state_23290;
(statearr_23355[(31)] = inst_23276);

return statearr_23355;
})();
if(inst_23277){
var statearr_23356_23420 = state_23290__$1;
(statearr_23356_23420[(1)] = (42));

} else {
var statearr_23357_23421 = state_23290__$1;
(statearr_23357_23421[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (16))){
var inst_23191 = (state_23290[(7)]);
var inst_23193 = cljs.core.chunked_seq_QMARK_.call(null,inst_23191);
var state_23290__$1 = state_23290;
if(inst_23193){
var statearr_23358_23422 = state_23290__$1;
(statearr_23358_23422[(1)] = (19));

} else {
var statearr_23359_23423 = state_23290__$1;
(statearr_23359_23423[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (38))){
var inst_23269 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23360_23424 = state_23290__$1;
(statearr_23360_23424[(2)] = inst_23269);

(statearr_23360_23424[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (30))){
var state_23290__$1 = state_23290;
var statearr_23361_23425 = state_23290__$1;
(statearr_23361_23425[(2)] = null);

(statearr_23361_23425[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (10))){
var inst_23172 = (state_23290[(14)]);
var inst_23174 = (state_23290[(17)]);
var inst_23180 = cljs.core._nth.call(null,inst_23172,inst_23174);
var inst_23181 = cljs.core.nth.call(null,inst_23180,(0),null);
var inst_23182 = cljs.core.nth.call(null,inst_23180,(1),null);
var state_23290__$1 = (function (){var statearr_23362 = state_23290;
(statearr_23362[(26)] = inst_23181);

return statearr_23362;
})();
if(cljs.core.truth_(inst_23182)){
var statearr_23363_23426 = state_23290__$1;
(statearr_23363_23426[(1)] = (13));

} else {
var statearr_23364_23427 = state_23290__$1;
(statearr_23364_23427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (18))){
var inst_23215 = (state_23290[(2)]);
var state_23290__$1 = state_23290;
var statearr_23365_23428 = state_23290__$1;
(statearr_23365_23428[(2)] = inst_23215);

(statearr_23365_23428[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (42))){
var state_23290__$1 = state_23290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23290__$1,(45),dchan);
} else {
if((state_val_23291 === (37))){
var inst_23258 = (state_23290[(23)]);
var inst_23162 = (state_23290[(10)]);
var inst_23249 = (state_23290[(25)]);
var inst_23258__$1 = cljs.core.first.call(null,inst_23249);
var inst_23259 = cljs.core.async.put_BANG_.call(null,inst_23258__$1,inst_23162,done);
var state_23290__$1 = (function (){var statearr_23366 = state_23290;
(statearr_23366[(23)] = inst_23258__$1);

return statearr_23366;
})();
if(cljs.core.truth_(inst_23259)){
var statearr_23367_23429 = state_23290__$1;
(statearr_23367_23429[(1)] = (39));

} else {
var statearr_23368_23430 = state_23290__$1;
(statearr_23368_23430[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23291 === (8))){
var inst_23173 = (state_23290[(16)]);
var inst_23174 = (state_23290[(17)]);
var inst_23176 = (inst_23174 < inst_23173);
var inst_23177 = inst_23176;
var state_23290__$1 = state_23290;
if(cljs.core.truth_(inst_23177)){
var statearr_23369_23431 = state_23290__$1;
(statearr_23369_23431[(1)] = (10));

} else {
var statearr_23370_23432 = state_23290__$1;
(statearr_23370_23432[(1)] = (11));

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
});})(c__22071__auto___23378,cs,m,dchan,dctr,done))
;
return ((function (switch__21959__auto__,c__22071__auto___23378,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21960__auto__ = null;
var cljs$core$async$mult_$_state_machine__21960__auto____0 = (function (){
var statearr_23374 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23374[(0)] = cljs$core$async$mult_$_state_machine__21960__auto__);

(statearr_23374[(1)] = (1));

return statearr_23374;
});
var cljs$core$async$mult_$_state_machine__21960__auto____1 = (function (state_23290){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_23290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e23375){if((e23375 instanceof Object)){
var ex__21963__auto__ = e23375;
var statearr_23376_23433 = state_23290;
(statearr_23376_23433[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23434 = state_23290;
state_23290 = G__23434;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21960__auto__ = function(state_23290){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21960__auto____1.call(this,state_23290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21960__auto____0;
cljs$core$async$mult_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21960__auto____1;
return cljs$core$async$mult_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___23378,cs,m,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_23377 = f__22072__auto__.call(null);
(statearr_23377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___23378);

return statearr_23377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___23378,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23435 = [];
var len__17984__auto___23438 = arguments.length;
var i__17985__auto___23439 = (0);
while(true){
if((i__17985__auto___23439 < len__17984__auto___23438)){
args23435.push((arguments[i__17985__auto___23439]));

var G__23440 = (i__17985__auto___23439 + (1));
i__17985__auto___23439 = G__23440;
continue;
} else {
}
break;
}

var G__23437 = args23435.length;
switch (G__23437) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23435.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,ch);
} else {
var m__17582__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,ch);
} else {
var m__17582__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m);
} else {
var m__17582__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,state_map);
} else {
var m__17582__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17581__auto__ = (((m == null))?null:m);
var m__17582__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,m,mode);
} else {
var m__17582__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17991__auto__ = [];
var len__17984__auto___23452 = arguments.length;
var i__17985__auto___23453 = (0);
while(true){
if((i__17985__auto___23453 < len__17984__auto___23452)){
args__17991__auto__.push((arguments[i__17985__auto___23453]));

var G__23454 = (i__17985__auto___23453 + (1));
i__17985__auto___23453 = G__23454;
continue;
} else {
}
break;
}

var argseq__17992__auto__ = ((((3) < args__17991__auto__.length))?(new cljs.core.IndexedSeq(args__17991__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17992__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23446){
var map__23447 = p__23446;
var map__23447__$1 = ((((!((map__23447 == null)))?((((map__23447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23447):map__23447);
var opts = map__23447__$1;
var statearr_23449_23455 = state;
(statearr_23449_23455[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23447,map__23447__$1,opts){
return (function (val){
var statearr_23450_23456 = state;
(statearr_23450_23456[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23447,map__23447__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23451_23457 = state;
(statearr_23451_23457[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23442){
var G__23443 = cljs.core.first.call(null,seq23442);
var seq23442__$1 = cljs.core.next.call(null,seq23442);
var G__23444 = cljs.core.first.call(null,seq23442__$1);
var seq23442__$2 = cljs.core.next.call(null,seq23442__$1);
var G__23445 = cljs.core.first.call(null,seq23442__$2);
var seq23442__$3 = cljs.core.next.call(null,seq23442__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23443,G__23444,G__23445,seq23442__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23621 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23622){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23622 = meta23622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23623,meta23622__$1){
var self__ = this;
var _23623__$1 = this;
return (new cljs.core.async.t_cljs$core$async23621(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23622__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23623){
var self__ = this;
var _23623__$1 = this;
return self__.meta23622;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23622","meta23622",2092686402,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23621";

cljs.core.async.t_cljs$core$async23621.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async23621");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23621 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23621(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23622){
return (new cljs.core.async.t_cljs$core$async23621(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23622));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23621(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___23784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23721){
var state_val_23722 = (state_23721[(1)]);
if((state_val_23722 === (7))){
var inst_23639 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
var statearr_23723_23785 = state_23721__$1;
(statearr_23723_23785[(2)] = inst_23639);

(statearr_23723_23785[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (20))){
var inst_23651 = (state_23721[(7)]);
var state_23721__$1 = state_23721;
var statearr_23724_23786 = state_23721__$1;
(statearr_23724_23786[(2)] = inst_23651);

(statearr_23724_23786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (27))){
var state_23721__$1 = state_23721;
var statearr_23725_23787 = state_23721__$1;
(statearr_23725_23787[(2)] = null);

(statearr_23725_23787[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (1))){
var inst_23627 = (state_23721[(8)]);
var inst_23627__$1 = calc_state.call(null);
var inst_23629 = (inst_23627__$1 == null);
var inst_23630 = cljs.core.not.call(null,inst_23629);
var state_23721__$1 = (function (){var statearr_23726 = state_23721;
(statearr_23726[(8)] = inst_23627__$1);

return statearr_23726;
})();
if(inst_23630){
var statearr_23727_23788 = state_23721__$1;
(statearr_23727_23788[(1)] = (2));

} else {
var statearr_23728_23789 = state_23721__$1;
(statearr_23728_23789[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (24))){
var inst_23674 = (state_23721[(9)]);
var inst_23695 = (state_23721[(10)]);
var inst_23681 = (state_23721[(11)]);
var inst_23695__$1 = inst_23674.call(null,inst_23681);
var state_23721__$1 = (function (){var statearr_23729 = state_23721;
(statearr_23729[(10)] = inst_23695__$1);

return statearr_23729;
})();
if(cljs.core.truth_(inst_23695__$1)){
var statearr_23730_23790 = state_23721__$1;
(statearr_23730_23790[(1)] = (29));

} else {
var statearr_23731_23791 = state_23721__$1;
(statearr_23731_23791[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (4))){
var inst_23642 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23642)){
var statearr_23732_23792 = state_23721__$1;
(statearr_23732_23792[(1)] = (8));

} else {
var statearr_23733_23793 = state_23721__$1;
(statearr_23733_23793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (15))){
var inst_23668 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23668)){
var statearr_23734_23794 = state_23721__$1;
(statearr_23734_23794[(1)] = (19));

} else {
var statearr_23735_23795 = state_23721__$1;
(statearr_23735_23795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (21))){
var inst_23673 = (state_23721[(12)]);
var inst_23673__$1 = (state_23721[(2)]);
var inst_23674 = cljs.core.get.call(null,inst_23673__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23675 = cljs.core.get.call(null,inst_23673__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23676 = cljs.core.get.call(null,inst_23673__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23721__$1 = (function (){var statearr_23736 = state_23721;
(statearr_23736[(12)] = inst_23673__$1);

(statearr_23736[(13)] = inst_23675);

(statearr_23736[(9)] = inst_23674);

return statearr_23736;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23721__$1,(22),inst_23676);
} else {
if((state_val_23722 === (31))){
var inst_23703 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23703)){
var statearr_23737_23796 = state_23721__$1;
(statearr_23737_23796[(1)] = (32));

} else {
var statearr_23738_23797 = state_23721__$1;
(statearr_23738_23797[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (32))){
var inst_23680 = (state_23721[(14)]);
var state_23721__$1 = state_23721;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23721__$1,(35),out,inst_23680);
} else {
if((state_val_23722 === (33))){
var inst_23673 = (state_23721[(12)]);
var inst_23651 = inst_23673;
var state_23721__$1 = (function (){var statearr_23739 = state_23721;
(statearr_23739[(7)] = inst_23651);

return statearr_23739;
})();
var statearr_23740_23798 = state_23721__$1;
(statearr_23740_23798[(2)] = null);

(statearr_23740_23798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (13))){
var inst_23651 = (state_23721[(7)]);
var inst_23658 = inst_23651.cljs$lang$protocol_mask$partition0$;
var inst_23659 = (inst_23658 & (64));
var inst_23660 = inst_23651.cljs$core$ISeq$;
var inst_23661 = (inst_23659) || (inst_23660);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23661)){
var statearr_23741_23799 = state_23721__$1;
(statearr_23741_23799[(1)] = (16));

} else {
var statearr_23742_23800 = state_23721__$1;
(statearr_23742_23800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (22))){
var inst_23681 = (state_23721[(11)]);
var inst_23680 = (state_23721[(14)]);
var inst_23679 = (state_23721[(2)]);
var inst_23680__$1 = cljs.core.nth.call(null,inst_23679,(0),null);
var inst_23681__$1 = cljs.core.nth.call(null,inst_23679,(1),null);
var inst_23682 = (inst_23680__$1 == null);
var inst_23683 = cljs.core._EQ_.call(null,inst_23681__$1,change);
var inst_23684 = (inst_23682) || (inst_23683);
var state_23721__$1 = (function (){var statearr_23743 = state_23721;
(statearr_23743[(11)] = inst_23681__$1);

(statearr_23743[(14)] = inst_23680__$1);

return statearr_23743;
})();
if(cljs.core.truth_(inst_23684)){
var statearr_23744_23801 = state_23721__$1;
(statearr_23744_23801[(1)] = (23));

} else {
var statearr_23745_23802 = state_23721__$1;
(statearr_23745_23802[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (36))){
var inst_23673 = (state_23721[(12)]);
var inst_23651 = inst_23673;
var state_23721__$1 = (function (){var statearr_23746 = state_23721;
(statearr_23746[(7)] = inst_23651);

return statearr_23746;
})();
var statearr_23747_23803 = state_23721__$1;
(statearr_23747_23803[(2)] = null);

(statearr_23747_23803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (29))){
var inst_23695 = (state_23721[(10)]);
var state_23721__$1 = state_23721;
var statearr_23748_23804 = state_23721__$1;
(statearr_23748_23804[(2)] = inst_23695);

(statearr_23748_23804[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (6))){
var state_23721__$1 = state_23721;
var statearr_23749_23805 = state_23721__$1;
(statearr_23749_23805[(2)] = false);

(statearr_23749_23805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (28))){
var inst_23691 = (state_23721[(2)]);
var inst_23692 = calc_state.call(null);
var inst_23651 = inst_23692;
var state_23721__$1 = (function (){var statearr_23750 = state_23721;
(statearr_23750[(15)] = inst_23691);

(statearr_23750[(7)] = inst_23651);

return statearr_23750;
})();
var statearr_23751_23806 = state_23721__$1;
(statearr_23751_23806[(2)] = null);

(statearr_23751_23806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (25))){
var inst_23717 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
var statearr_23752_23807 = state_23721__$1;
(statearr_23752_23807[(2)] = inst_23717);

(statearr_23752_23807[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (34))){
var inst_23715 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
var statearr_23753_23808 = state_23721__$1;
(statearr_23753_23808[(2)] = inst_23715);

(statearr_23753_23808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (17))){
var state_23721__$1 = state_23721;
var statearr_23754_23809 = state_23721__$1;
(statearr_23754_23809[(2)] = false);

(statearr_23754_23809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (3))){
var state_23721__$1 = state_23721;
var statearr_23755_23810 = state_23721__$1;
(statearr_23755_23810[(2)] = false);

(statearr_23755_23810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (12))){
var inst_23719 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23721__$1,inst_23719);
} else {
if((state_val_23722 === (2))){
var inst_23627 = (state_23721[(8)]);
var inst_23632 = inst_23627.cljs$lang$protocol_mask$partition0$;
var inst_23633 = (inst_23632 & (64));
var inst_23634 = inst_23627.cljs$core$ISeq$;
var inst_23635 = (inst_23633) || (inst_23634);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23635)){
var statearr_23756_23811 = state_23721__$1;
(statearr_23756_23811[(1)] = (5));

} else {
var statearr_23757_23812 = state_23721__$1;
(statearr_23757_23812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (23))){
var inst_23680 = (state_23721[(14)]);
var inst_23686 = (inst_23680 == null);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23686)){
var statearr_23758_23813 = state_23721__$1;
(statearr_23758_23813[(1)] = (26));

} else {
var statearr_23759_23814 = state_23721__$1;
(statearr_23759_23814[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (35))){
var inst_23706 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
if(cljs.core.truth_(inst_23706)){
var statearr_23760_23815 = state_23721__$1;
(statearr_23760_23815[(1)] = (36));

} else {
var statearr_23761_23816 = state_23721__$1;
(statearr_23761_23816[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (19))){
var inst_23651 = (state_23721[(7)]);
var inst_23670 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23651);
var state_23721__$1 = state_23721;
var statearr_23762_23817 = state_23721__$1;
(statearr_23762_23817[(2)] = inst_23670);

(statearr_23762_23817[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (11))){
var inst_23651 = (state_23721[(7)]);
var inst_23655 = (inst_23651 == null);
var inst_23656 = cljs.core.not.call(null,inst_23655);
var state_23721__$1 = state_23721;
if(inst_23656){
var statearr_23763_23818 = state_23721__$1;
(statearr_23763_23818[(1)] = (13));

} else {
var statearr_23764_23819 = state_23721__$1;
(statearr_23764_23819[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (9))){
var inst_23627 = (state_23721[(8)]);
var state_23721__$1 = state_23721;
var statearr_23765_23820 = state_23721__$1;
(statearr_23765_23820[(2)] = inst_23627);

(statearr_23765_23820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (5))){
var state_23721__$1 = state_23721;
var statearr_23766_23821 = state_23721__$1;
(statearr_23766_23821[(2)] = true);

(statearr_23766_23821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (14))){
var state_23721__$1 = state_23721;
var statearr_23767_23822 = state_23721__$1;
(statearr_23767_23822[(2)] = false);

(statearr_23767_23822[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (26))){
var inst_23681 = (state_23721[(11)]);
var inst_23688 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23681);
var state_23721__$1 = state_23721;
var statearr_23768_23823 = state_23721__$1;
(statearr_23768_23823[(2)] = inst_23688);

(statearr_23768_23823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (16))){
var state_23721__$1 = state_23721;
var statearr_23769_23824 = state_23721__$1;
(statearr_23769_23824[(2)] = true);

(statearr_23769_23824[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (38))){
var inst_23711 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
var statearr_23770_23825 = state_23721__$1;
(statearr_23770_23825[(2)] = inst_23711);

(statearr_23770_23825[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (30))){
var inst_23675 = (state_23721[(13)]);
var inst_23674 = (state_23721[(9)]);
var inst_23681 = (state_23721[(11)]);
var inst_23698 = cljs.core.empty_QMARK_.call(null,inst_23674);
var inst_23699 = inst_23675.call(null,inst_23681);
var inst_23700 = cljs.core.not.call(null,inst_23699);
var inst_23701 = (inst_23698) && (inst_23700);
var state_23721__$1 = state_23721;
var statearr_23771_23826 = state_23721__$1;
(statearr_23771_23826[(2)] = inst_23701);

(statearr_23771_23826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (10))){
var inst_23627 = (state_23721[(8)]);
var inst_23647 = (state_23721[(2)]);
var inst_23648 = cljs.core.get.call(null,inst_23647,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23649 = cljs.core.get.call(null,inst_23647,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23650 = cljs.core.get.call(null,inst_23647,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23651 = inst_23627;
var state_23721__$1 = (function (){var statearr_23772 = state_23721;
(statearr_23772[(7)] = inst_23651);

(statearr_23772[(16)] = inst_23649);

(statearr_23772[(17)] = inst_23650);

(statearr_23772[(18)] = inst_23648);

return statearr_23772;
})();
var statearr_23773_23827 = state_23721__$1;
(statearr_23773_23827[(2)] = null);

(statearr_23773_23827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (18))){
var inst_23665 = (state_23721[(2)]);
var state_23721__$1 = state_23721;
var statearr_23774_23828 = state_23721__$1;
(statearr_23774_23828[(2)] = inst_23665);

(statearr_23774_23828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (37))){
var state_23721__$1 = state_23721;
var statearr_23775_23829 = state_23721__$1;
(statearr_23775_23829[(2)] = null);

(statearr_23775_23829[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23722 === (8))){
var inst_23627 = (state_23721[(8)]);
var inst_23644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23627);
var state_23721__$1 = state_23721;
var statearr_23776_23830 = state_23721__$1;
(statearr_23776_23830[(2)] = inst_23644);

(statearr_23776_23830[(1)] = (10));


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
});})(c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21959__auto__,c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21960__auto__ = null;
var cljs$core$async$mix_$_state_machine__21960__auto____0 = (function (){
var statearr_23780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23780[(0)] = cljs$core$async$mix_$_state_machine__21960__auto__);

(statearr_23780[(1)] = (1));

return statearr_23780;
});
var cljs$core$async$mix_$_state_machine__21960__auto____1 = (function (state_23721){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_23721);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e23781){if((e23781 instanceof Object)){
var ex__21963__auto__ = e23781;
var statearr_23782_23831 = state_23721;
(statearr_23782_23831[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23832 = state_23721;
state_23721 = G__23832;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21960__auto__ = function(state_23721){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21960__auto____1.call(this,state_23721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21960__auto____0;
cljs$core$async$mix_$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21960__auto____1;
return cljs$core$async$mix_$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22073__auto__ = (function (){var statearr_23783 = f__22072__auto__.call(null);
(statearr_23783[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___23784);

return statearr_23783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___23784,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17581__auto__ = (((p == null))?null:p);
var m__17582__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17582__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17581__auto__ = (((p == null))?null:p);
var m__17582__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,p,v,ch);
} else {
var m__17582__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23833 = [];
var len__17984__auto___23836 = arguments.length;
var i__17985__auto___23837 = (0);
while(true){
if((i__17985__auto___23837 < len__17984__auto___23836)){
args23833.push((arguments[i__17985__auto___23837]));

var G__23838 = (i__17985__auto___23837 + (1));
i__17985__auto___23837 = G__23838;
continue;
} else {
}
break;
}

var G__23835 = args23833.length;
switch (G__23835) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23833.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17581__auto__ = (((p == null))?null:p);
var m__17582__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,p);
} else {
var m__17582__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17581__auto__ = (((p == null))?null:p);
var m__17582__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17581__auto__)]);
if(!((m__17582__auto__ == null))){
return m__17582__auto__.call(null,p,v);
} else {
var m__17582__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17582__auto____$1 == null))){
return m__17582__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23841 = [];
var len__17984__auto___23966 = arguments.length;
var i__17985__auto___23967 = (0);
while(true){
if((i__17985__auto___23967 < len__17984__auto___23966)){
args23841.push((arguments[i__17985__auto___23967]));

var G__23968 = (i__17985__auto___23967 + (1));
i__17985__auto___23967 = G__23968;
continue;
} else {
}
break;
}

var G__23843 = args23841.length;
switch (G__23843) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23841.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16926__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16926__auto__)){
return or__16926__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16926__auto__,mults){
return (function (p1__23840_SHARP_){
if(cljs.core.truth_(p1__23840_SHARP_.call(null,topic))){
return p1__23840_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23840_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16926__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23844 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23844 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23845){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23845 = meta23845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23846,meta23845__$1){
var self__ = this;
var _23846__$1 = this;
return (new cljs.core.async.t_cljs$core$async23844(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23845__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23846){
var self__ = this;
var _23846__$1 = this;
return self__.meta23845;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23845","meta23845",1061479055,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23844.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23844";

cljs.core.async.t_cljs$core$async23844.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async23844");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23844 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23845){
return (new cljs.core.async.t_cljs$core$async23844(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23845));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23844(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22071__auto___23970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___23970,mults,ensure_mult,p){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___23970,mults,ensure_mult,p){
return (function (state_23918){
var state_val_23919 = (state_23918[(1)]);
if((state_val_23919 === (7))){
var inst_23914 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23920_23971 = state_23918__$1;
(statearr_23920_23971[(2)] = inst_23914);

(statearr_23920_23971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (20))){
var state_23918__$1 = state_23918;
var statearr_23921_23972 = state_23918__$1;
(statearr_23921_23972[(2)] = null);

(statearr_23921_23972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (1))){
var state_23918__$1 = state_23918;
var statearr_23922_23973 = state_23918__$1;
(statearr_23922_23973[(2)] = null);

(statearr_23922_23973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (24))){
var inst_23897 = (state_23918[(7)]);
var inst_23906 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23897);
var state_23918__$1 = state_23918;
var statearr_23923_23974 = state_23918__$1;
(statearr_23923_23974[(2)] = inst_23906);

(statearr_23923_23974[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (4))){
var inst_23849 = (state_23918[(8)]);
var inst_23849__$1 = (state_23918[(2)]);
var inst_23850 = (inst_23849__$1 == null);
var state_23918__$1 = (function (){var statearr_23924 = state_23918;
(statearr_23924[(8)] = inst_23849__$1);

return statearr_23924;
})();
if(cljs.core.truth_(inst_23850)){
var statearr_23925_23975 = state_23918__$1;
(statearr_23925_23975[(1)] = (5));

} else {
var statearr_23926_23976 = state_23918__$1;
(statearr_23926_23976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (15))){
var inst_23891 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23927_23977 = state_23918__$1;
(statearr_23927_23977[(2)] = inst_23891);

(statearr_23927_23977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (21))){
var inst_23911 = (state_23918[(2)]);
var state_23918__$1 = (function (){var statearr_23928 = state_23918;
(statearr_23928[(9)] = inst_23911);

return statearr_23928;
})();
var statearr_23929_23978 = state_23918__$1;
(statearr_23929_23978[(2)] = null);

(statearr_23929_23978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (13))){
var inst_23873 = (state_23918[(10)]);
var inst_23875 = cljs.core.chunked_seq_QMARK_.call(null,inst_23873);
var state_23918__$1 = state_23918;
if(inst_23875){
var statearr_23930_23979 = state_23918__$1;
(statearr_23930_23979[(1)] = (16));

} else {
var statearr_23931_23980 = state_23918__$1;
(statearr_23931_23980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (22))){
var inst_23903 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
if(cljs.core.truth_(inst_23903)){
var statearr_23932_23981 = state_23918__$1;
(statearr_23932_23981[(1)] = (23));

} else {
var statearr_23933_23982 = state_23918__$1;
(statearr_23933_23982[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (6))){
var inst_23899 = (state_23918[(11)]);
var inst_23897 = (state_23918[(7)]);
var inst_23849 = (state_23918[(8)]);
var inst_23897__$1 = topic_fn.call(null,inst_23849);
var inst_23898 = cljs.core.deref.call(null,mults);
var inst_23899__$1 = cljs.core.get.call(null,inst_23898,inst_23897__$1);
var state_23918__$1 = (function (){var statearr_23934 = state_23918;
(statearr_23934[(11)] = inst_23899__$1);

(statearr_23934[(7)] = inst_23897__$1);

return statearr_23934;
})();
if(cljs.core.truth_(inst_23899__$1)){
var statearr_23935_23983 = state_23918__$1;
(statearr_23935_23983[(1)] = (19));

} else {
var statearr_23936_23984 = state_23918__$1;
(statearr_23936_23984[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (25))){
var inst_23908 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23937_23985 = state_23918__$1;
(statearr_23937_23985[(2)] = inst_23908);

(statearr_23937_23985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (17))){
var inst_23873 = (state_23918[(10)]);
var inst_23882 = cljs.core.first.call(null,inst_23873);
var inst_23883 = cljs.core.async.muxch_STAR_.call(null,inst_23882);
var inst_23884 = cljs.core.async.close_BANG_.call(null,inst_23883);
var inst_23885 = cljs.core.next.call(null,inst_23873);
var inst_23859 = inst_23885;
var inst_23860 = null;
var inst_23861 = (0);
var inst_23862 = (0);
var state_23918__$1 = (function (){var statearr_23938 = state_23918;
(statearr_23938[(12)] = inst_23862);

(statearr_23938[(13)] = inst_23861);

(statearr_23938[(14)] = inst_23860);

(statearr_23938[(15)] = inst_23859);

(statearr_23938[(16)] = inst_23884);

return statearr_23938;
})();
var statearr_23939_23986 = state_23918__$1;
(statearr_23939_23986[(2)] = null);

(statearr_23939_23986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (3))){
var inst_23916 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23918__$1,inst_23916);
} else {
if((state_val_23919 === (12))){
var inst_23893 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23940_23987 = state_23918__$1;
(statearr_23940_23987[(2)] = inst_23893);

(statearr_23940_23987[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (2))){
var state_23918__$1 = state_23918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23918__$1,(4),ch);
} else {
if((state_val_23919 === (23))){
var state_23918__$1 = state_23918;
var statearr_23941_23988 = state_23918__$1;
(statearr_23941_23988[(2)] = null);

(statearr_23941_23988[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (19))){
var inst_23899 = (state_23918[(11)]);
var inst_23849 = (state_23918[(8)]);
var inst_23901 = cljs.core.async.muxch_STAR_.call(null,inst_23899);
var state_23918__$1 = state_23918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23918__$1,(22),inst_23901,inst_23849);
} else {
if((state_val_23919 === (11))){
var inst_23873 = (state_23918[(10)]);
var inst_23859 = (state_23918[(15)]);
var inst_23873__$1 = cljs.core.seq.call(null,inst_23859);
var state_23918__$1 = (function (){var statearr_23942 = state_23918;
(statearr_23942[(10)] = inst_23873__$1);

return statearr_23942;
})();
if(inst_23873__$1){
var statearr_23943_23989 = state_23918__$1;
(statearr_23943_23989[(1)] = (13));

} else {
var statearr_23944_23990 = state_23918__$1;
(statearr_23944_23990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (9))){
var inst_23895 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23945_23991 = state_23918__$1;
(statearr_23945_23991[(2)] = inst_23895);

(statearr_23945_23991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (5))){
var inst_23856 = cljs.core.deref.call(null,mults);
var inst_23857 = cljs.core.vals.call(null,inst_23856);
var inst_23858 = cljs.core.seq.call(null,inst_23857);
var inst_23859 = inst_23858;
var inst_23860 = null;
var inst_23861 = (0);
var inst_23862 = (0);
var state_23918__$1 = (function (){var statearr_23946 = state_23918;
(statearr_23946[(12)] = inst_23862);

(statearr_23946[(13)] = inst_23861);

(statearr_23946[(14)] = inst_23860);

(statearr_23946[(15)] = inst_23859);

return statearr_23946;
})();
var statearr_23947_23992 = state_23918__$1;
(statearr_23947_23992[(2)] = null);

(statearr_23947_23992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (14))){
var state_23918__$1 = state_23918;
var statearr_23951_23993 = state_23918__$1;
(statearr_23951_23993[(2)] = null);

(statearr_23951_23993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (16))){
var inst_23873 = (state_23918[(10)]);
var inst_23877 = cljs.core.chunk_first.call(null,inst_23873);
var inst_23878 = cljs.core.chunk_rest.call(null,inst_23873);
var inst_23879 = cljs.core.count.call(null,inst_23877);
var inst_23859 = inst_23878;
var inst_23860 = inst_23877;
var inst_23861 = inst_23879;
var inst_23862 = (0);
var state_23918__$1 = (function (){var statearr_23952 = state_23918;
(statearr_23952[(12)] = inst_23862);

(statearr_23952[(13)] = inst_23861);

(statearr_23952[(14)] = inst_23860);

(statearr_23952[(15)] = inst_23859);

return statearr_23952;
})();
var statearr_23953_23994 = state_23918__$1;
(statearr_23953_23994[(2)] = null);

(statearr_23953_23994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (10))){
var inst_23862 = (state_23918[(12)]);
var inst_23861 = (state_23918[(13)]);
var inst_23860 = (state_23918[(14)]);
var inst_23859 = (state_23918[(15)]);
var inst_23867 = cljs.core._nth.call(null,inst_23860,inst_23862);
var inst_23868 = cljs.core.async.muxch_STAR_.call(null,inst_23867);
var inst_23869 = cljs.core.async.close_BANG_.call(null,inst_23868);
var inst_23870 = (inst_23862 + (1));
var tmp23948 = inst_23861;
var tmp23949 = inst_23860;
var tmp23950 = inst_23859;
var inst_23859__$1 = tmp23950;
var inst_23860__$1 = tmp23949;
var inst_23861__$1 = tmp23948;
var inst_23862__$1 = inst_23870;
var state_23918__$1 = (function (){var statearr_23954 = state_23918;
(statearr_23954[(12)] = inst_23862__$1);

(statearr_23954[(17)] = inst_23869);

(statearr_23954[(13)] = inst_23861__$1);

(statearr_23954[(14)] = inst_23860__$1);

(statearr_23954[(15)] = inst_23859__$1);

return statearr_23954;
})();
var statearr_23955_23995 = state_23918__$1;
(statearr_23955_23995[(2)] = null);

(statearr_23955_23995[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (18))){
var inst_23888 = (state_23918[(2)]);
var state_23918__$1 = state_23918;
var statearr_23956_23996 = state_23918__$1;
(statearr_23956_23996[(2)] = inst_23888);

(statearr_23956_23996[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23919 === (8))){
var inst_23862 = (state_23918[(12)]);
var inst_23861 = (state_23918[(13)]);
var inst_23864 = (inst_23862 < inst_23861);
var inst_23865 = inst_23864;
var state_23918__$1 = state_23918;
if(cljs.core.truth_(inst_23865)){
var statearr_23957_23997 = state_23918__$1;
(statearr_23957_23997[(1)] = (10));

} else {
var statearr_23958_23998 = state_23918__$1;
(statearr_23958_23998[(1)] = (11));

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
});})(c__22071__auto___23970,mults,ensure_mult,p))
;
return ((function (switch__21959__auto__,c__22071__auto___23970,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_23962 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23962[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_23962[(1)] = (1));

return statearr_23962;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_23918){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_23918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e23963){if((e23963 instanceof Object)){
var ex__21963__auto__ = e23963;
var statearr_23964_23999 = state_23918;
(statearr_23964_23999[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24000 = state_23918;
state_23918 = G__24000;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_23918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_23918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___23970,mults,ensure_mult,p))
})();
var state__22073__auto__ = (function (){var statearr_23965 = f__22072__auto__.call(null);
(statearr_23965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___23970);

return statearr_23965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___23970,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24001 = [];
var len__17984__auto___24004 = arguments.length;
var i__17985__auto___24005 = (0);
while(true){
if((i__17985__auto___24005 < len__17984__auto___24004)){
args24001.push((arguments[i__17985__auto___24005]));

var G__24006 = (i__17985__auto___24005 + (1));
i__17985__auto___24005 = G__24006;
continue;
} else {
}
break;
}

var G__24003 = args24001.length;
switch (G__24003) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24001.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24008 = [];
var len__17984__auto___24011 = arguments.length;
var i__17985__auto___24012 = (0);
while(true){
if((i__17985__auto___24012 < len__17984__auto___24011)){
args24008.push((arguments[i__17985__auto___24012]));

var G__24013 = (i__17985__auto___24012 + (1));
i__17985__auto___24012 = G__24013;
continue;
} else {
}
break;
}

var G__24010 = args24008.length;
switch (G__24010) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24008.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24015 = [];
var len__17984__auto___24086 = arguments.length;
var i__17985__auto___24087 = (0);
while(true){
if((i__17985__auto___24087 < len__17984__auto___24086)){
args24015.push((arguments[i__17985__auto___24087]));

var G__24088 = (i__17985__auto___24087 + (1));
i__17985__auto___24087 = G__24088;
continue;
} else {
}
break;
}

var G__24017 = args24015.length;
switch (G__24017) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24015.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__22071__auto___24090 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24056){
var state_val_24057 = (state_24056[(1)]);
if((state_val_24057 === (7))){
var state_24056__$1 = state_24056;
var statearr_24058_24091 = state_24056__$1;
(statearr_24058_24091[(2)] = null);

(statearr_24058_24091[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (1))){
var state_24056__$1 = state_24056;
var statearr_24059_24092 = state_24056__$1;
(statearr_24059_24092[(2)] = null);

(statearr_24059_24092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (4))){
var inst_24020 = (state_24056[(7)]);
var inst_24022 = (inst_24020 < cnt);
var state_24056__$1 = state_24056;
if(cljs.core.truth_(inst_24022)){
var statearr_24060_24093 = state_24056__$1;
(statearr_24060_24093[(1)] = (6));

} else {
var statearr_24061_24094 = state_24056__$1;
(statearr_24061_24094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (15))){
var inst_24052 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24062_24095 = state_24056__$1;
(statearr_24062_24095[(2)] = inst_24052);

(statearr_24062_24095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (13))){
var inst_24045 = cljs.core.async.close_BANG_.call(null,out);
var state_24056__$1 = state_24056;
var statearr_24063_24096 = state_24056__$1;
(statearr_24063_24096[(2)] = inst_24045);

(statearr_24063_24096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (6))){
var state_24056__$1 = state_24056;
var statearr_24064_24097 = state_24056__$1;
(statearr_24064_24097[(2)] = null);

(statearr_24064_24097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (3))){
var inst_24054 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24056__$1,inst_24054);
} else {
if((state_val_24057 === (12))){
var inst_24042 = (state_24056[(8)]);
var inst_24042__$1 = (state_24056[(2)]);
var inst_24043 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24042__$1);
var state_24056__$1 = (function (){var statearr_24065 = state_24056;
(statearr_24065[(8)] = inst_24042__$1);

return statearr_24065;
})();
if(cljs.core.truth_(inst_24043)){
var statearr_24066_24098 = state_24056__$1;
(statearr_24066_24098[(1)] = (13));

} else {
var statearr_24067_24099 = state_24056__$1;
(statearr_24067_24099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (2))){
var inst_24019 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24020 = (0);
var state_24056__$1 = (function (){var statearr_24068 = state_24056;
(statearr_24068[(9)] = inst_24019);

(statearr_24068[(7)] = inst_24020);

return statearr_24068;
})();
var statearr_24069_24100 = state_24056__$1;
(statearr_24069_24100[(2)] = null);

(statearr_24069_24100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (11))){
var inst_24020 = (state_24056[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24056,(10),Object,null,(9));
var inst_24029 = chs__$1.call(null,inst_24020);
var inst_24030 = done.call(null,inst_24020);
var inst_24031 = cljs.core.async.take_BANG_.call(null,inst_24029,inst_24030);
var state_24056__$1 = state_24056;
var statearr_24070_24101 = state_24056__$1;
(statearr_24070_24101[(2)] = inst_24031);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (9))){
var inst_24020 = (state_24056[(7)]);
var inst_24033 = (state_24056[(2)]);
var inst_24034 = (inst_24020 + (1));
var inst_24020__$1 = inst_24034;
var state_24056__$1 = (function (){var statearr_24071 = state_24056;
(statearr_24071[(7)] = inst_24020__$1);

(statearr_24071[(10)] = inst_24033);

return statearr_24071;
})();
var statearr_24072_24102 = state_24056__$1;
(statearr_24072_24102[(2)] = null);

(statearr_24072_24102[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (5))){
var inst_24040 = (state_24056[(2)]);
var state_24056__$1 = (function (){var statearr_24073 = state_24056;
(statearr_24073[(11)] = inst_24040);

return statearr_24073;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24056__$1,(12),dchan);
} else {
if((state_val_24057 === (14))){
var inst_24042 = (state_24056[(8)]);
var inst_24047 = cljs.core.apply.call(null,f,inst_24042);
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24056__$1,(16),out,inst_24047);
} else {
if((state_val_24057 === (16))){
var inst_24049 = (state_24056[(2)]);
var state_24056__$1 = (function (){var statearr_24074 = state_24056;
(statearr_24074[(12)] = inst_24049);

return statearr_24074;
})();
var statearr_24075_24103 = state_24056__$1;
(statearr_24075_24103[(2)] = null);

(statearr_24075_24103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (10))){
var inst_24024 = (state_24056[(2)]);
var inst_24025 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24056__$1 = (function (){var statearr_24076 = state_24056;
(statearr_24076[(13)] = inst_24024);

return statearr_24076;
})();
var statearr_24077_24104 = state_24056__$1;
(statearr_24077_24104[(2)] = inst_24025);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24056__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (8))){
var inst_24038 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24078_24105 = state_24056__$1;
(statearr_24078_24105[(2)] = inst_24038);

(statearr_24078_24105[(1)] = (5));


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
});})(c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21959__auto__,c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24082[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24082[(1)] = (1));

return statearr_24082;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24056){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24083){if((e24083 instanceof Object)){
var ex__21963__auto__ = e24083;
var statearr_24084_24106 = state_24056;
(statearr_24084_24106[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24107 = state_24056;
state_24056 = G__24107;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22073__auto__ = (function (){var statearr_24085 = f__22072__auto__.call(null);
(statearr_24085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24090);

return statearr_24085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24090,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24109 = [];
var len__17984__auto___24165 = arguments.length;
var i__17985__auto___24166 = (0);
while(true){
if((i__17985__auto___24166 < len__17984__auto___24165)){
args24109.push((arguments[i__17985__auto___24166]));

var G__24167 = (i__17985__auto___24166 + (1));
i__17985__auto___24166 = G__24167;
continue;
} else {
}
break;
}

var G__24111 = args24109.length;
switch (G__24111) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24109.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24169 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24169,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24169,out){
return (function (state_24141){
var state_val_24142 = (state_24141[(1)]);
if((state_val_24142 === (7))){
var inst_24121 = (state_24141[(7)]);
var inst_24120 = (state_24141[(8)]);
var inst_24120__$1 = (state_24141[(2)]);
var inst_24121__$1 = cljs.core.nth.call(null,inst_24120__$1,(0),null);
var inst_24122 = cljs.core.nth.call(null,inst_24120__$1,(1),null);
var inst_24123 = (inst_24121__$1 == null);
var state_24141__$1 = (function (){var statearr_24143 = state_24141;
(statearr_24143[(7)] = inst_24121__$1);

(statearr_24143[(8)] = inst_24120__$1);

(statearr_24143[(9)] = inst_24122);

return statearr_24143;
})();
if(cljs.core.truth_(inst_24123)){
var statearr_24144_24170 = state_24141__$1;
(statearr_24144_24170[(1)] = (8));

} else {
var statearr_24145_24171 = state_24141__$1;
(statearr_24145_24171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (1))){
var inst_24112 = cljs.core.vec.call(null,chs);
var inst_24113 = inst_24112;
var state_24141__$1 = (function (){var statearr_24146 = state_24141;
(statearr_24146[(10)] = inst_24113);

return statearr_24146;
})();
var statearr_24147_24172 = state_24141__$1;
(statearr_24147_24172[(2)] = null);

(statearr_24147_24172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (4))){
var inst_24113 = (state_24141[(10)]);
var state_24141__$1 = state_24141;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24141__$1,(7),inst_24113);
} else {
if((state_val_24142 === (6))){
var inst_24137 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24148_24173 = state_24141__$1;
(statearr_24148_24173[(2)] = inst_24137);

(statearr_24148_24173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (3))){
var inst_24139 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24141__$1,inst_24139);
} else {
if((state_val_24142 === (2))){
var inst_24113 = (state_24141[(10)]);
var inst_24115 = cljs.core.count.call(null,inst_24113);
var inst_24116 = (inst_24115 > (0));
var state_24141__$1 = state_24141;
if(cljs.core.truth_(inst_24116)){
var statearr_24150_24174 = state_24141__$1;
(statearr_24150_24174[(1)] = (4));

} else {
var statearr_24151_24175 = state_24141__$1;
(statearr_24151_24175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (11))){
var inst_24113 = (state_24141[(10)]);
var inst_24130 = (state_24141[(2)]);
var tmp24149 = inst_24113;
var inst_24113__$1 = tmp24149;
var state_24141__$1 = (function (){var statearr_24152 = state_24141;
(statearr_24152[(11)] = inst_24130);

(statearr_24152[(10)] = inst_24113__$1);

return statearr_24152;
})();
var statearr_24153_24176 = state_24141__$1;
(statearr_24153_24176[(2)] = null);

(statearr_24153_24176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (9))){
var inst_24121 = (state_24141[(7)]);
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24141__$1,(11),out,inst_24121);
} else {
if((state_val_24142 === (5))){
var inst_24135 = cljs.core.async.close_BANG_.call(null,out);
var state_24141__$1 = state_24141;
var statearr_24154_24177 = state_24141__$1;
(statearr_24154_24177[(2)] = inst_24135);

(statearr_24154_24177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (10))){
var inst_24133 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
var statearr_24155_24178 = state_24141__$1;
(statearr_24155_24178[(2)] = inst_24133);

(statearr_24155_24178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (8))){
var inst_24121 = (state_24141[(7)]);
var inst_24120 = (state_24141[(8)]);
var inst_24122 = (state_24141[(9)]);
var inst_24113 = (state_24141[(10)]);
var inst_24125 = (function (){var cs = inst_24113;
var vec__24118 = inst_24120;
var v = inst_24121;
var c = inst_24122;
return ((function (cs,vec__24118,v,c,inst_24121,inst_24120,inst_24122,inst_24113,state_val_24142,c__22071__auto___24169,out){
return (function (p1__24108_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24108_SHARP_);
});
;})(cs,vec__24118,v,c,inst_24121,inst_24120,inst_24122,inst_24113,state_val_24142,c__22071__auto___24169,out))
})();
var inst_24126 = cljs.core.filterv.call(null,inst_24125,inst_24113);
var inst_24113__$1 = inst_24126;
var state_24141__$1 = (function (){var statearr_24156 = state_24141;
(statearr_24156[(10)] = inst_24113__$1);

return statearr_24156;
})();
var statearr_24157_24179 = state_24141__$1;
(statearr_24157_24179[(2)] = null);

(statearr_24157_24179[(1)] = (2));


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
});})(c__22071__auto___24169,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24169,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24161 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24161[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24161[(1)] = (1));

return statearr_24161;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24141){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24162){if((e24162 instanceof Object)){
var ex__21963__auto__ = e24162;
var statearr_24163_24180 = state_24141;
(statearr_24163_24180[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24181 = state_24141;
state_24141 = G__24181;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24169,out))
})();
var state__22073__auto__ = (function (){var statearr_24164 = f__22072__auto__.call(null);
(statearr_24164[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24169);

return statearr_24164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24169,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24182 = [];
var len__17984__auto___24231 = arguments.length;
var i__17985__auto___24232 = (0);
while(true){
if((i__17985__auto___24232 < len__17984__auto___24231)){
args24182.push((arguments[i__17985__auto___24232]));

var G__24233 = (i__17985__auto___24232 + (1));
i__17985__auto___24232 = G__24233;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24235,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24235,out){
return (function (state_24208){
var state_val_24209 = (state_24208[(1)]);
if((state_val_24209 === (7))){
var inst_24190 = (state_24208[(7)]);
var inst_24190__$1 = (state_24208[(2)]);
var inst_24191 = (inst_24190__$1 == null);
var inst_24192 = cljs.core.not.call(null,inst_24191);
var state_24208__$1 = (function (){var statearr_24210 = state_24208;
(statearr_24210[(7)] = inst_24190__$1);

return statearr_24210;
})();
if(inst_24192){
var statearr_24211_24236 = state_24208__$1;
(statearr_24211_24236[(1)] = (8));

} else {
var statearr_24212_24237 = state_24208__$1;
(statearr_24212_24237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (1))){
var inst_24185 = (0);
var state_24208__$1 = (function (){var statearr_24213 = state_24208;
(statearr_24213[(8)] = inst_24185);

return statearr_24213;
})();
var statearr_24214_24238 = state_24208__$1;
(statearr_24214_24238[(2)] = null);

(statearr_24214_24238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (4))){
var state_24208__$1 = state_24208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24208__$1,(7),ch);
} else {
if((state_val_24209 === (6))){
var inst_24203 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
var statearr_24215_24239 = state_24208__$1;
(statearr_24215_24239[(2)] = inst_24203);

(statearr_24215_24239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (3))){
var inst_24205 = (state_24208[(2)]);
var inst_24206 = cljs.core.async.close_BANG_.call(null,out);
var state_24208__$1 = (function (){var statearr_24216 = state_24208;
(statearr_24216[(9)] = inst_24205);

return statearr_24216;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24208__$1,inst_24206);
} else {
if((state_val_24209 === (2))){
var inst_24185 = (state_24208[(8)]);
var inst_24187 = (inst_24185 < n);
var state_24208__$1 = state_24208;
if(cljs.core.truth_(inst_24187)){
var statearr_24217_24240 = state_24208__$1;
(statearr_24217_24240[(1)] = (4));

} else {
var statearr_24218_24241 = state_24208__$1;
(statearr_24218_24241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (11))){
var inst_24185 = (state_24208[(8)]);
var inst_24195 = (state_24208[(2)]);
var inst_24196 = (inst_24185 + (1));
var inst_24185__$1 = inst_24196;
var state_24208__$1 = (function (){var statearr_24219 = state_24208;
(statearr_24219[(8)] = inst_24185__$1);

(statearr_24219[(10)] = inst_24195);

return statearr_24219;
})();
var statearr_24220_24242 = state_24208__$1;
(statearr_24220_24242[(2)] = null);

(statearr_24220_24242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (9))){
var state_24208__$1 = state_24208;
var statearr_24221_24243 = state_24208__$1;
(statearr_24221_24243[(2)] = null);

(statearr_24221_24243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (5))){
var state_24208__$1 = state_24208;
var statearr_24222_24244 = state_24208__$1;
(statearr_24222_24244[(2)] = null);

(statearr_24222_24244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (10))){
var inst_24200 = (state_24208[(2)]);
var state_24208__$1 = state_24208;
var statearr_24223_24245 = state_24208__$1;
(statearr_24223_24245[(2)] = inst_24200);

(statearr_24223_24245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24209 === (8))){
var inst_24190 = (state_24208[(7)]);
var state_24208__$1 = state_24208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24208__$1,(11),out,inst_24190);
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
});})(c__22071__auto___24235,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24235,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24227 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24227[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24227[(1)] = (1));

return statearr_24227;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24208){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24228){if((e24228 instanceof Object)){
var ex__21963__auto__ = e24228;
var statearr_24229_24246 = state_24208;
(statearr_24229_24246[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24228;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24247 = state_24208;
state_24208 = G__24247;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24235,out))
})();
var state__22073__auto__ = (function (){var statearr_24230 = f__22072__auto__.call(null);
(statearr_24230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24235);

return statearr_24230;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24235,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24255 = (function (map_LT_,f,ch,meta24256){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24256 = meta24256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24257,meta24256__$1){
var self__ = this;
var _24257__$1 = this;
return (new cljs.core.async.t_cljs$core$async24255(self__.map_LT_,self__.f,self__.ch,meta24256__$1));
});

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24257){
var self__ = this;
var _24257__$1 = this;
return self__.meta24256;
});

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24258 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24258 = (function (map_LT_,f,ch,meta24256,_,fn1,meta24259){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24256 = meta24256;
this._ = _;
this.fn1 = fn1;
this.meta24259 = meta24259;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24260,meta24259__$1){
var self__ = this;
var _24260__$1 = this;
return (new cljs.core.async.t_cljs$core$async24258(self__.map_LT_,self__.f,self__.ch,self__.meta24256,self__._,self__.fn1,meta24259__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24260){
var self__ = this;
var _24260__$1 = this;
return self__.meta24259;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24248_SHARP_){
return f1.call(null,(((p1__24248_SHARP_ == null))?null:self__.f.call(null,p1__24248_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24256","meta24256",597908823,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24255","cljs.core.async/t_cljs$core$async24255",-854214829,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24259","meta24259",715859385,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24258.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24258.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24258";

cljs.core.async.t_cljs$core$async24258.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async24258");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24258 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24258(map_LT___$1,f__$1,ch__$1,meta24256__$1,___$2,fn1__$1,meta24259){
return (new cljs.core.async.t_cljs$core$async24258(map_LT___$1,f__$1,ch__$1,meta24256__$1,___$2,fn1__$1,meta24259));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24258(self__.map_LT_,self__.f,self__.ch,self__.meta24256,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16914__auto__ = ret;
if(cljs.core.truth_(and__16914__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16914__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24256","meta24256",597908823,null)], null);
});

cljs.core.async.t_cljs$core$async24255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24255";

cljs.core.async.t_cljs$core$async24255.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async24255");
});

cljs.core.async.__GT_t_cljs$core$async24255 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24255(map_LT___$1,f__$1,ch__$1,meta24256){
return (new cljs.core.async.t_cljs$core$async24255(map_LT___$1,f__$1,ch__$1,meta24256));
});

}

return (new cljs.core.async.t_cljs$core$async24255(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24264 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24264 = (function (map_GT_,f,ch,meta24265){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24265 = meta24265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24266,meta24265__$1){
var self__ = this;
var _24266__$1 = this;
return (new cljs.core.async.t_cljs$core$async24264(self__.map_GT_,self__.f,self__.ch,meta24265__$1));
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24266){
var self__ = this;
var _24266__$1 = this;
return self__.meta24265;
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24265","meta24265",-1183652233,null)], null);
});

cljs.core.async.t_cljs$core$async24264.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24264";

cljs.core.async.t_cljs$core$async24264.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async24264");
});

cljs.core.async.__GT_t_cljs$core$async24264 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24264(map_GT___$1,f__$1,ch__$1,meta24265){
return (new cljs.core.async.t_cljs$core$async24264(map_GT___$1,f__$1,ch__$1,meta24265));
});

}

return (new cljs.core.async.t_cljs$core$async24264(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24270 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24270 = (function (filter_GT_,p,ch,meta24271){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24271 = meta24271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24272,meta24271__$1){
var self__ = this;
var _24272__$1 = this;
return (new cljs.core.async.t_cljs$core$async24270(self__.filter_GT_,self__.p,self__.ch,meta24271__$1));
});

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24272){
var self__ = this;
var _24272__$1 = this;
return self__.meta24271;
});

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24270.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24271","meta24271",-969990743,null)], null);
});

cljs.core.async.t_cljs$core$async24270.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24270.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24270";

cljs.core.async.t_cljs$core$async24270.cljs$lang$ctorPrWriter = (function (this__17524__auto__,writer__17525__auto__,opt__17526__auto__){
return cljs.core._write.call(null,writer__17525__auto__,"cljs.core.async/t_cljs$core$async24270");
});

cljs.core.async.__GT_t_cljs$core$async24270 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24270(filter_GT___$1,p__$1,ch__$1,meta24271){
return (new cljs.core.async.t_cljs$core$async24270(filter_GT___$1,p__$1,ch__$1,meta24271));
});

}

return (new cljs.core.async.t_cljs$core$async24270(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24273 = [];
var len__17984__auto___24317 = arguments.length;
var i__17985__auto___24318 = (0);
while(true){
if((i__17985__auto___24318 < len__17984__auto___24317)){
args24273.push((arguments[i__17985__auto___24318]));

var G__24319 = (i__17985__auto___24318 + (1));
i__17985__auto___24318 = G__24319;
continue;
} else {
}
break;
}

var G__24275 = args24273.length;
switch (G__24275) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24273.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24321,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24321,out){
return (function (state_24296){
var state_val_24297 = (state_24296[(1)]);
if((state_val_24297 === (7))){
var inst_24292 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24298_24322 = state_24296__$1;
(statearr_24298_24322[(2)] = inst_24292);

(statearr_24298_24322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (1))){
var state_24296__$1 = state_24296;
var statearr_24299_24323 = state_24296__$1;
(statearr_24299_24323[(2)] = null);

(statearr_24299_24323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (4))){
var inst_24278 = (state_24296[(7)]);
var inst_24278__$1 = (state_24296[(2)]);
var inst_24279 = (inst_24278__$1 == null);
var state_24296__$1 = (function (){var statearr_24300 = state_24296;
(statearr_24300[(7)] = inst_24278__$1);

return statearr_24300;
})();
if(cljs.core.truth_(inst_24279)){
var statearr_24301_24324 = state_24296__$1;
(statearr_24301_24324[(1)] = (5));

} else {
var statearr_24302_24325 = state_24296__$1;
(statearr_24302_24325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (6))){
var inst_24278 = (state_24296[(7)]);
var inst_24283 = p.call(null,inst_24278);
var state_24296__$1 = state_24296;
if(cljs.core.truth_(inst_24283)){
var statearr_24303_24326 = state_24296__$1;
(statearr_24303_24326[(1)] = (8));

} else {
var statearr_24304_24327 = state_24296__$1;
(statearr_24304_24327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (3))){
var inst_24294 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24296__$1,inst_24294);
} else {
if((state_val_24297 === (2))){
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24296__$1,(4),ch);
} else {
if((state_val_24297 === (11))){
var inst_24286 = (state_24296[(2)]);
var state_24296__$1 = state_24296;
var statearr_24305_24328 = state_24296__$1;
(statearr_24305_24328[(2)] = inst_24286);

(statearr_24305_24328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (9))){
var state_24296__$1 = state_24296;
var statearr_24306_24329 = state_24296__$1;
(statearr_24306_24329[(2)] = null);

(statearr_24306_24329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (5))){
var inst_24281 = cljs.core.async.close_BANG_.call(null,out);
var state_24296__$1 = state_24296;
var statearr_24307_24330 = state_24296__$1;
(statearr_24307_24330[(2)] = inst_24281);

(statearr_24307_24330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (10))){
var inst_24289 = (state_24296[(2)]);
var state_24296__$1 = (function (){var statearr_24308 = state_24296;
(statearr_24308[(8)] = inst_24289);

return statearr_24308;
})();
var statearr_24309_24331 = state_24296__$1;
(statearr_24309_24331[(2)] = null);

(statearr_24309_24331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24297 === (8))){
var inst_24278 = (state_24296[(7)]);
var state_24296__$1 = state_24296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24296__$1,(11),out,inst_24278);
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
});})(c__22071__auto___24321,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24321,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24313 = [null,null,null,null,null,null,null,null,null];
(statearr_24313[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24313[(1)] = (1));

return statearr_24313;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24296){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24314){if((e24314 instanceof Object)){
var ex__21963__auto__ = e24314;
var statearr_24315_24332 = state_24296;
(statearr_24315_24332[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24333 = state_24296;
state_24296 = G__24333;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24321,out))
})();
var state__22073__auto__ = (function (){var statearr_24316 = f__22072__auto__.call(null);
(statearr_24316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24321);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24321,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24334 = [];
var len__17984__auto___24337 = arguments.length;
var i__17985__auto___24338 = (0);
while(true){
if((i__17985__auto___24338 < len__17984__auto___24337)){
args24334.push((arguments[i__17985__auto___24338]));

var G__24339 = (i__17985__auto___24338 + (1));
i__17985__auto___24338 = G__24339;
continue;
} else {
}
break;
}

var G__24336 = args24334.length;
switch (G__24336) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24334.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__22071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto__){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto__){
return (function (state_24506){
var state_val_24507 = (state_24506[(1)]);
if((state_val_24507 === (7))){
var inst_24502 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24508_24549 = state_24506__$1;
(statearr_24508_24549[(2)] = inst_24502);

(statearr_24508_24549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (20))){
var inst_24472 = (state_24506[(7)]);
var inst_24483 = (state_24506[(2)]);
var inst_24484 = cljs.core.next.call(null,inst_24472);
var inst_24458 = inst_24484;
var inst_24459 = null;
var inst_24460 = (0);
var inst_24461 = (0);
var state_24506__$1 = (function (){var statearr_24509 = state_24506;
(statearr_24509[(8)] = inst_24483);

(statearr_24509[(9)] = inst_24459);

(statearr_24509[(10)] = inst_24458);

(statearr_24509[(11)] = inst_24461);

(statearr_24509[(12)] = inst_24460);

return statearr_24509;
})();
var statearr_24510_24550 = state_24506__$1;
(statearr_24510_24550[(2)] = null);

(statearr_24510_24550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (1))){
var state_24506__$1 = state_24506;
var statearr_24511_24551 = state_24506__$1;
(statearr_24511_24551[(2)] = null);

(statearr_24511_24551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (4))){
var inst_24447 = (state_24506[(13)]);
var inst_24447__$1 = (state_24506[(2)]);
var inst_24448 = (inst_24447__$1 == null);
var state_24506__$1 = (function (){var statearr_24512 = state_24506;
(statearr_24512[(13)] = inst_24447__$1);

return statearr_24512;
})();
if(cljs.core.truth_(inst_24448)){
var statearr_24513_24552 = state_24506__$1;
(statearr_24513_24552[(1)] = (5));

} else {
var statearr_24514_24553 = state_24506__$1;
(statearr_24514_24553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (15))){
var state_24506__$1 = state_24506;
var statearr_24518_24554 = state_24506__$1;
(statearr_24518_24554[(2)] = null);

(statearr_24518_24554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (21))){
var state_24506__$1 = state_24506;
var statearr_24519_24555 = state_24506__$1;
(statearr_24519_24555[(2)] = null);

(statearr_24519_24555[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (13))){
var inst_24459 = (state_24506[(9)]);
var inst_24458 = (state_24506[(10)]);
var inst_24461 = (state_24506[(11)]);
var inst_24460 = (state_24506[(12)]);
var inst_24468 = (state_24506[(2)]);
var inst_24469 = (inst_24461 + (1));
var tmp24515 = inst_24459;
var tmp24516 = inst_24458;
var tmp24517 = inst_24460;
var inst_24458__$1 = tmp24516;
var inst_24459__$1 = tmp24515;
var inst_24460__$1 = tmp24517;
var inst_24461__$1 = inst_24469;
var state_24506__$1 = (function (){var statearr_24520 = state_24506;
(statearr_24520[(9)] = inst_24459__$1);

(statearr_24520[(10)] = inst_24458__$1);

(statearr_24520[(14)] = inst_24468);

(statearr_24520[(11)] = inst_24461__$1);

(statearr_24520[(12)] = inst_24460__$1);

return statearr_24520;
})();
var statearr_24521_24556 = state_24506__$1;
(statearr_24521_24556[(2)] = null);

(statearr_24521_24556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (22))){
var state_24506__$1 = state_24506;
var statearr_24522_24557 = state_24506__$1;
(statearr_24522_24557[(2)] = null);

(statearr_24522_24557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (6))){
var inst_24447 = (state_24506[(13)]);
var inst_24456 = f.call(null,inst_24447);
var inst_24457 = cljs.core.seq.call(null,inst_24456);
var inst_24458 = inst_24457;
var inst_24459 = null;
var inst_24460 = (0);
var inst_24461 = (0);
var state_24506__$1 = (function (){var statearr_24523 = state_24506;
(statearr_24523[(9)] = inst_24459);

(statearr_24523[(10)] = inst_24458);

(statearr_24523[(11)] = inst_24461);

(statearr_24523[(12)] = inst_24460);

return statearr_24523;
})();
var statearr_24524_24558 = state_24506__$1;
(statearr_24524_24558[(2)] = null);

(statearr_24524_24558[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (17))){
var inst_24472 = (state_24506[(7)]);
var inst_24476 = cljs.core.chunk_first.call(null,inst_24472);
var inst_24477 = cljs.core.chunk_rest.call(null,inst_24472);
var inst_24478 = cljs.core.count.call(null,inst_24476);
var inst_24458 = inst_24477;
var inst_24459 = inst_24476;
var inst_24460 = inst_24478;
var inst_24461 = (0);
var state_24506__$1 = (function (){var statearr_24525 = state_24506;
(statearr_24525[(9)] = inst_24459);

(statearr_24525[(10)] = inst_24458);

(statearr_24525[(11)] = inst_24461);

(statearr_24525[(12)] = inst_24460);

return statearr_24525;
})();
var statearr_24526_24559 = state_24506__$1;
(statearr_24526_24559[(2)] = null);

(statearr_24526_24559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (3))){
var inst_24504 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24506__$1,inst_24504);
} else {
if((state_val_24507 === (12))){
var inst_24492 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24527_24560 = state_24506__$1;
(statearr_24527_24560[(2)] = inst_24492);

(statearr_24527_24560[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (2))){
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24506__$1,(4),in$);
} else {
if((state_val_24507 === (23))){
var inst_24500 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24528_24561 = state_24506__$1;
(statearr_24528_24561[(2)] = inst_24500);

(statearr_24528_24561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (19))){
var inst_24487 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24529_24562 = state_24506__$1;
(statearr_24529_24562[(2)] = inst_24487);

(statearr_24529_24562[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (11))){
var inst_24472 = (state_24506[(7)]);
var inst_24458 = (state_24506[(10)]);
var inst_24472__$1 = cljs.core.seq.call(null,inst_24458);
var state_24506__$1 = (function (){var statearr_24530 = state_24506;
(statearr_24530[(7)] = inst_24472__$1);

return statearr_24530;
})();
if(inst_24472__$1){
var statearr_24531_24563 = state_24506__$1;
(statearr_24531_24563[(1)] = (14));

} else {
var statearr_24532_24564 = state_24506__$1;
(statearr_24532_24564[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (9))){
var inst_24494 = (state_24506[(2)]);
var inst_24495 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24506__$1 = (function (){var statearr_24533 = state_24506;
(statearr_24533[(15)] = inst_24494);

return statearr_24533;
})();
if(cljs.core.truth_(inst_24495)){
var statearr_24534_24565 = state_24506__$1;
(statearr_24534_24565[(1)] = (21));

} else {
var statearr_24535_24566 = state_24506__$1;
(statearr_24535_24566[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (5))){
var inst_24450 = cljs.core.async.close_BANG_.call(null,out);
var state_24506__$1 = state_24506;
var statearr_24536_24567 = state_24506__$1;
(statearr_24536_24567[(2)] = inst_24450);

(statearr_24536_24567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (14))){
var inst_24472 = (state_24506[(7)]);
var inst_24474 = cljs.core.chunked_seq_QMARK_.call(null,inst_24472);
var state_24506__$1 = state_24506;
if(inst_24474){
var statearr_24537_24568 = state_24506__$1;
(statearr_24537_24568[(1)] = (17));

} else {
var statearr_24538_24569 = state_24506__$1;
(statearr_24538_24569[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (16))){
var inst_24490 = (state_24506[(2)]);
var state_24506__$1 = state_24506;
var statearr_24539_24570 = state_24506__$1;
(statearr_24539_24570[(2)] = inst_24490);

(statearr_24539_24570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24507 === (10))){
var inst_24459 = (state_24506[(9)]);
var inst_24461 = (state_24506[(11)]);
var inst_24466 = cljs.core._nth.call(null,inst_24459,inst_24461);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24506__$1,(13),out,inst_24466);
} else {
if((state_val_24507 === (18))){
var inst_24472 = (state_24506[(7)]);
var inst_24481 = cljs.core.first.call(null,inst_24472);
var state_24506__$1 = state_24506;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24506__$1,(20),out,inst_24481);
} else {
if((state_val_24507 === (8))){
var inst_24461 = (state_24506[(11)]);
var inst_24460 = (state_24506[(12)]);
var inst_24463 = (inst_24461 < inst_24460);
var inst_24464 = inst_24463;
var state_24506__$1 = state_24506;
if(cljs.core.truth_(inst_24464)){
var statearr_24540_24571 = state_24506__$1;
(statearr_24540_24571[(1)] = (10));

} else {
var statearr_24541_24572 = state_24506__$1;
(statearr_24541_24572[(1)] = (11));

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
});})(c__22071__auto__))
;
return ((function (switch__21959__auto__,c__22071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____0 = (function (){
var statearr_24545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24545[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__);

(statearr_24545[(1)] = (1));

return statearr_24545;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____1 = (function (state_24506){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24546){if((e24546 instanceof Object)){
var ex__21963__auto__ = e24546;
var statearr_24547_24573 = state_24506;
(statearr_24547_24573[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24574 = state_24506;
state_24506 = G__24574;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__ = function(state_24506){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____1.call(this,state_24506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21960__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto__))
})();
var state__22073__auto__ = (function (){var statearr_24548 = f__22072__auto__.call(null);
(statearr_24548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto__);

return statearr_24548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto__))
);

return c__22071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24575 = [];
var len__17984__auto___24578 = arguments.length;
var i__17985__auto___24579 = (0);
while(true){
if((i__17985__auto___24579 < len__17984__auto___24578)){
args24575.push((arguments[i__17985__auto___24579]));

var G__24580 = (i__17985__auto___24579 + (1));
i__17985__auto___24579 = G__24580;
continue;
} else {
}
break;
}

var G__24577 = args24575.length;
switch (G__24577) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24575.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24582 = [];
var len__17984__auto___24585 = arguments.length;
var i__17985__auto___24586 = (0);
while(true){
if((i__17985__auto___24586 < len__17984__auto___24585)){
args24582.push((arguments[i__17985__auto___24586]));

var G__24587 = (i__17985__auto___24586 + (1));
i__17985__auto___24586 = G__24587;
continue;
} else {
}
break;
}

var G__24584 = args24582.length;
switch (G__24584) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24582.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24589 = [];
var len__17984__auto___24640 = arguments.length;
var i__17985__auto___24641 = (0);
while(true){
if((i__17985__auto___24641 < len__17984__auto___24640)){
args24589.push((arguments[i__17985__auto___24641]));

var G__24642 = (i__17985__auto___24641 + (1));
i__17985__auto___24641 = G__24642;
continue;
} else {
}
break;
}

var G__24591 = args24589.length;
switch (G__24591) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24589.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24644,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24644,out){
return (function (state_24615){
var state_val_24616 = (state_24615[(1)]);
if((state_val_24616 === (7))){
var inst_24610 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24617_24645 = state_24615__$1;
(statearr_24617_24645[(2)] = inst_24610);

(statearr_24617_24645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (1))){
var inst_24592 = null;
var state_24615__$1 = (function (){var statearr_24618 = state_24615;
(statearr_24618[(7)] = inst_24592);

return statearr_24618;
})();
var statearr_24619_24646 = state_24615__$1;
(statearr_24619_24646[(2)] = null);

(statearr_24619_24646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (4))){
var inst_24595 = (state_24615[(8)]);
var inst_24595__$1 = (state_24615[(2)]);
var inst_24596 = (inst_24595__$1 == null);
var inst_24597 = cljs.core.not.call(null,inst_24596);
var state_24615__$1 = (function (){var statearr_24620 = state_24615;
(statearr_24620[(8)] = inst_24595__$1);

return statearr_24620;
})();
if(inst_24597){
var statearr_24621_24647 = state_24615__$1;
(statearr_24621_24647[(1)] = (5));

} else {
var statearr_24622_24648 = state_24615__$1;
(statearr_24622_24648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (6))){
var state_24615__$1 = state_24615;
var statearr_24623_24649 = state_24615__$1;
(statearr_24623_24649[(2)] = null);

(statearr_24623_24649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (3))){
var inst_24612 = (state_24615[(2)]);
var inst_24613 = cljs.core.async.close_BANG_.call(null,out);
var state_24615__$1 = (function (){var statearr_24624 = state_24615;
(statearr_24624[(9)] = inst_24612);

return statearr_24624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24615__$1,inst_24613);
} else {
if((state_val_24616 === (2))){
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24615__$1,(4),ch);
} else {
if((state_val_24616 === (11))){
var inst_24595 = (state_24615[(8)]);
var inst_24604 = (state_24615[(2)]);
var inst_24592 = inst_24595;
var state_24615__$1 = (function (){var statearr_24625 = state_24615;
(statearr_24625[(7)] = inst_24592);

(statearr_24625[(10)] = inst_24604);

return statearr_24625;
})();
var statearr_24626_24650 = state_24615__$1;
(statearr_24626_24650[(2)] = null);

(statearr_24626_24650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (9))){
var inst_24595 = (state_24615[(8)]);
var state_24615__$1 = state_24615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24615__$1,(11),out,inst_24595);
} else {
if((state_val_24616 === (5))){
var inst_24592 = (state_24615[(7)]);
var inst_24595 = (state_24615[(8)]);
var inst_24599 = cljs.core._EQ_.call(null,inst_24595,inst_24592);
var state_24615__$1 = state_24615;
if(inst_24599){
var statearr_24628_24651 = state_24615__$1;
(statearr_24628_24651[(1)] = (8));

} else {
var statearr_24629_24652 = state_24615__$1;
(statearr_24629_24652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (10))){
var inst_24607 = (state_24615[(2)]);
var state_24615__$1 = state_24615;
var statearr_24630_24653 = state_24615__$1;
(statearr_24630_24653[(2)] = inst_24607);

(statearr_24630_24653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24616 === (8))){
var inst_24592 = (state_24615[(7)]);
var tmp24627 = inst_24592;
var inst_24592__$1 = tmp24627;
var state_24615__$1 = (function (){var statearr_24631 = state_24615;
(statearr_24631[(7)] = inst_24592__$1);

return statearr_24631;
})();
var statearr_24632_24654 = state_24615__$1;
(statearr_24632_24654[(2)] = null);

(statearr_24632_24654[(1)] = (2));


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
});})(c__22071__auto___24644,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24644,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24636 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24636[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24636[(1)] = (1));

return statearr_24636;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24615){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24637){if((e24637 instanceof Object)){
var ex__21963__auto__ = e24637;
var statearr_24638_24655 = state_24615;
(statearr_24638_24655[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24656 = state_24615;
state_24615 = G__24656;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24644,out))
})();
var state__22073__auto__ = (function (){var statearr_24639 = f__22072__auto__.call(null);
(statearr_24639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24644);

return statearr_24639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24644,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24657 = [];
var len__17984__auto___24727 = arguments.length;
var i__17985__auto___24728 = (0);
while(true){
if((i__17985__auto___24728 < len__17984__auto___24727)){
args24657.push((arguments[i__17985__auto___24728]));

var G__24729 = (i__17985__auto___24728 + (1));
i__17985__auto___24728 = G__24729;
continue;
} else {
}
break;
}

var G__24659 = args24657.length;
switch (G__24659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24657.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24731,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24731,out){
return (function (state_24697){
var state_val_24698 = (state_24697[(1)]);
if((state_val_24698 === (7))){
var inst_24693 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24699_24732 = state_24697__$1;
(statearr_24699_24732[(2)] = inst_24693);

(statearr_24699_24732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (1))){
var inst_24660 = (new Array(n));
var inst_24661 = inst_24660;
var inst_24662 = (0);
var state_24697__$1 = (function (){var statearr_24700 = state_24697;
(statearr_24700[(7)] = inst_24662);

(statearr_24700[(8)] = inst_24661);

return statearr_24700;
})();
var statearr_24701_24733 = state_24697__$1;
(statearr_24701_24733[(2)] = null);

(statearr_24701_24733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (4))){
var inst_24665 = (state_24697[(9)]);
var inst_24665__$1 = (state_24697[(2)]);
var inst_24666 = (inst_24665__$1 == null);
var inst_24667 = cljs.core.not.call(null,inst_24666);
var state_24697__$1 = (function (){var statearr_24702 = state_24697;
(statearr_24702[(9)] = inst_24665__$1);

return statearr_24702;
})();
if(inst_24667){
var statearr_24703_24734 = state_24697__$1;
(statearr_24703_24734[(1)] = (5));

} else {
var statearr_24704_24735 = state_24697__$1;
(statearr_24704_24735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (15))){
var inst_24687 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24705_24736 = state_24697__$1;
(statearr_24705_24736[(2)] = inst_24687);

(statearr_24705_24736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (13))){
var state_24697__$1 = state_24697;
var statearr_24706_24737 = state_24697__$1;
(statearr_24706_24737[(2)] = null);

(statearr_24706_24737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (6))){
var inst_24662 = (state_24697[(7)]);
var inst_24683 = (inst_24662 > (0));
var state_24697__$1 = state_24697;
if(cljs.core.truth_(inst_24683)){
var statearr_24707_24738 = state_24697__$1;
(statearr_24707_24738[(1)] = (12));

} else {
var statearr_24708_24739 = state_24697__$1;
(statearr_24708_24739[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (3))){
var inst_24695 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24697__$1,inst_24695);
} else {
if((state_val_24698 === (12))){
var inst_24661 = (state_24697[(8)]);
var inst_24685 = cljs.core.vec.call(null,inst_24661);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24697__$1,(15),out,inst_24685);
} else {
if((state_val_24698 === (2))){
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24697__$1,(4),ch);
} else {
if((state_val_24698 === (11))){
var inst_24677 = (state_24697[(2)]);
var inst_24678 = (new Array(n));
var inst_24661 = inst_24678;
var inst_24662 = (0);
var state_24697__$1 = (function (){var statearr_24709 = state_24697;
(statearr_24709[(10)] = inst_24677);

(statearr_24709[(7)] = inst_24662);

(statearr_24709[(8)] = inst_24661);

return statearr_24709;
})();
var statearr_24710_24740 = state_24697__$1;
(statearr_24710_24740[(2)] = null);

(statearr_24710_24740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (9))){
var inst_24661 = (state_24697[(8)]);
var inst_24675 = cljs.core.vec.call(null,inst_24661);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24697__$1,(11),out,inst_24675);
} else {
if((state_val_24698 === (5))){
var inst_24670 = (state_24697[(11)]);
var inst_24662 = (state_24697[(7)]);
var inst_24661 = (state_24697[(8)]);
var inst_24665 = (state_24697[(9)]);
var inst_24669 = (inst_24661[inst_24662] = inst_24665);
var inst_24670__$1 = (inst_24662 + (1));
var inst_24671 = (inst_24670__$1 < n);
var state_24697__$1 = (function (){var statearr_24711 = state_24697;
(statearr_24711[(11)] = inst_24670__$1);

(statearr_24711[(12)] = inst_24669);

return statearr_24711;
})();
if(cljs.core.truth_(inst_24671)){
var statearr_24712_24741 = state_24697__$1;
(statearr_24712_24741[(1)] = (8));

} else {
var statearr_24713_24742 = state_24697__$1;
(statearr_24713_24742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (14))){
var inst_24690 = (state_24697[(2)]);
var inst_24691 = cljs.core.async.close_BANG_.call(null,out);
var state_24697__$1 = (function (){var statearr_24715 = state_24697;
(statearr_24715[(13)] = inst_24690);

return statearr_24715;
})();
var statearr_24716_24743 = state_24697__$1;
(statearr_24716_24743[(2)] = inst_24691);

(statearr_24716_24743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (10))){
var inst_24681 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24717_24744 = state_24697__$1;
(statearr_24717_24744[(2)] = inst_24681);

(statearr_24717_24744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24698 === (8))){
var inst_24670 = (state_24697[(11)]);
var inst_24661 = (state_24697[(8)]);
var tmp24714 = inst_24661;
var inst_24661__$1 = tmp24714;
var inst_24662 = inst_24670;
var state_24697__$1 = (function (){var statearr_24718 = state_24697;
(statearr_24718[(7)] = inst_24662);

(statearr_24718[(8)] = inst_24661__$1);

return statearr_24718;
})();
var statearr_24719_24745 = state_24697__$1;
(statearr_24719_24745[(2)] = null);

(statearr_24719_24745[(1)] = (2));


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
});})(c__22071__auto___24731,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24731,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24723[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24723[(1)] = (1));

return statearr_24723;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24697){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24724){if((e24724 instanceof Object)){
var ex__21963__auto__ = e24724;
var statearr_24725_24746 = state_24697;
(statearr_24725_24746[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24747 = state_24697;
state_24697 = G__24747;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24731,out))
})();
var state__22073__auto__ = (function (){var statearr_24726 = f__22072__auto__.call(null);
(statearr_24726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24731);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24731,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24748 = [];
var len__17984__auto___24822 = arguments.length;
var i__17985__auto___24823 = (0);
while(true){
if((i__17985__auto___24823 < len__17984__auto___24822)){
args24748.push((arguments[i__17985__auto___24823]));

var G__24824 = (i__17985__auto___24823 + (1));
i__17985__auto___24823 = G__24824;
continue;
} else {
}
break;
}

var G__24750 = args24748.length;
switch (G__24750) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24748.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22071__auto___24826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22071__auto___24826,out){
return (function (){
var f__22072__auto__ = (function (){var switch__21959__auto__ = ((function (c__22071__auto___24826,out){
return (function (state_24792){
var state_val_24793 = (state_24792[(1)]);
if((state_val_24793 === (7))){
var inst_24788 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
var statearr_24794_24827 = state_24792__$1;
(statearr_24794_24827[(2)] = inst_24788);

(statearr_24794_24827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (1))){
var inst_24751 = [];
var inst_24752 = inst_24751;
var inst_24753 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24792__$1 = (function (){var statearr_24795 = state_24792;
(statearr_24795[(7)] = inst_24753);

(statearr_24795[(8)] = inst_24752);

return statearr_24795;
})();
var statearr_24796_24828 = state_24792__$1;
(statearr_24796_24828[(2)] = null);

(statearr_24796_24828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (4))){
var inst_24756 = (state_24792[(9)]);
var inst_24756__$1 = (state_24792[(2)]);
var inst_24757 = (inst_24756__$1 == null);
var inst_24758 = cljs.core.not.call(null,inst_24757);
var state_24792__$1 = (function (){var statearr_24797 = state_24792;
(statearr_24797[(9)] = inst_24756__$1);

return statearr_24797;
})();
if(inst_24758){
var statearr_24798_24829 = state_24792__$1;
(statearr_24798_24829[(1)] = (5));

} else {
var statearr_24799_24830 = state_24792__$1;
(statearr_24799_24830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (15))){
var inst_24782 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
var statearr_24800_24831 = state_24792__$1;
(statearr_24800_24831[(2)] = inst_24782);

(statearr_24800_24831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (13))){
var state_24792__$1 = state_24792;
var statearr_24801_24832 = state_24792__$1;
(statearr_24801_24832[(2)] = null);

(statearr_24801_24832[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (6))){
var inst_24752 = (state_24792[(8)]);
var inst_24777 = inst_24752.length;
var inst_24778 = (inst_24777 > (0));
var state_24792__$1 = state_24792;
if(cljs.core.truth_(inst_24778)){
var statearr_24802_24833 = state_24792__$1;
(statearr_24802_24833[(1)] = (12));

} else {
var statearr_24803_24834 = state_24792__$1;
(statearr_24803_24834[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (3))){
var inst_24790 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24792__$1,inst_24790);
} else {
if((state_val_24793 === (12))){
var inst_24752 = (state_24792[(8)]);
var inst_24780 = cljs.core.vec.call(null,inst_24752);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24792__$1,(15),out,inst_24780);
} else {
if((state_val_24793 === (2))){
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24792__$1,(4),ch);
} else {
if((state_val_24793 === (11))){
var inst_24756 = (state_24792[(9)]);
var inst_24760 = (state_24792[(10)]);
var inst_24770 = (state_24792[(2)]);
var inst_24771 = [];
var inst_24772 = inst_24771.push(inst_24756);
var inst_24752 = inst_24771;
var inst_24753 = inst_24760;
var state_24792__$1 = (function (){var statearr_24804 = state_24792;
(statearr_24804[(7)] = inst_24753);

(statearr_24804[(8)] = inst_24752);

(statearr_24804[(11)] = inst_24770);

(statearr_24804[(12)] = inst_24772);

return statearr_24804;
})();
var statearr_24805_24835 = state_24792__$1;
(statearr_24805_24835[(2)] = null);

(statearr_24805_24835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (9))){
var inst_24752 = (state_24792[(8)]);
var inst_24768 = cljs.core.vec.call(null,inst_24752);
var state_24792__$1 = state_24792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24792__$1,(11),out,inst_24768);
} else {
if((state_val_24793 === (5))){
var inst_24756 = (state_24792[(9)]);
var inst_24753 = (state_24792[(7)]);
var inst_24760 = (state_24792[(10)]);
var inst_24760__$1 = f.call(null,inst_24756);
var inst_24761 = cljs.core._EQ_.call(null,inst_24760__$1,inst_24753);
var inst_24762 = cljs.core.keyword_identical_QMARK_.call(null,inst_24753,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24763 = (inst_24761) || (inst_24762);
var state_24792__$1 = (function (){var statearr_24806 = state_24792;
(statearr_24806[(10)] = inst_24760__$1);

return statearr_24806;
})();
if(cljs.core.truth_(inst_24763)){
var statearr_24807_24836 = state_24792__$1;
(statearr_24807_24836[(1)] = (8));

} else {
var statearr_24808_24837 = state_24792__$1;
(statearr_24808_24837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (14))){
var inst_24785 = (state_24792[(2)]);
var inst_24786 = cljs.core.async.close_BANG_.call(null,out);
var state_24792__$1 = (function (){var statearr_24810 = state_24792;
(statearr_24810[(13)] = inst_24785);

return statearr_24810;
})();
var statearr_24811_24838 = state_24792__$1;
(statearr_24811_24838[(2)] = inst_24786);

(statearr_24811_24838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (10))){
var inst_24775 = (state_24792[(2)]);
var state_24792__$1 = state_24792;
var statearr_24812_24839 = state_24792__$1;
(statearr_24812_24839[(2)] = inst_24775);

(statearr_24812_24839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24793 === (8))){
var inst_24756 = (state_24792[(9)]);
var inst_24752 = (state_24792[(8)]);
var inst_24760 = (state_24792[(10)]);
var inst_24765 = inst_24752.push(inst_24756);
var tmp24809 = inst_24752;
var inst_24752__$1 = tmp24809;
var inst_24753 = inst_24760;
var state_24792__$1 = (function (){var statearr_24813 = state_24792;
(statearr_24813[(7)] = inst_24753);

(statearr_24813[(8)] = inst_24752__$1);

(statearr_24813[(14)] = inst_24765);

return statearr_24813;
})();
var statearr_24814_24840 = state_24792__$1;
(statearr_24814_24840[(2)] = null);

(statearr_24814_24840[(1)] = (2));


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
});})(c__22071__auto___24826,out))
;
return ((function (switch__21959__auto__,c__22071__auto___24826,out){
return (function() {
var cljs$core$async$state_machine__21960__auto__ = null;
var cljs$core$async$state_machine__21960__auto____0 = (function (){
var statearr_24818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24818[(0)] = cljs$core$async$state_machine__21960__auto__);

(statearr_24818[(1)] = (1));

return statearr_24818;
});
var cljs$core$async$state_machine__21960__auto____1 = (function (state_24792){
while(true){
var ret_value__21961__auto__ = (function (){try{while(true){
var result__21962__auto__ = switch__21959__auto__.call(null,state_24792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21962__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21962__auto__;
}
break;
}
}catch (e24819){if((e24819 instanceof Object)){
var ex__21963__auto__ = e24819;
var statearr_24820_24841 = state_24792;
(statearr_24820_24841[(5)] = ex__21963__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24842 = state_24792;
state_24792 = G__24842;
continue;
} else {
return ret_value__21961__auto__;
}
break;
}
});
cljs$core$async$state_machine__21960__auto__ = function(state_24792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21960__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21960__auto____1.call(this,state_24792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21960__auto____0;
cljs$core$async$state_machine__21960__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21960__auto____1;
return cljs$core$async$state_machine__21960__auto__;
})()
;})(switch__21959__auto__,c__22071__auto___24826,out))
})();
var state__22073__auto__ = (function (){var statearr_24821 = f__22072__auto__.call(null);
(statearr_24821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22071__auto___24826);

return statearr_24821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22073__auto__);
});})(c__22071__auto___24826,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map