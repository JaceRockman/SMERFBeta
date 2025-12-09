goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__27085){
var map__27086 = p__27085;
var map__27086__$1 = cljs.core.__destructure_map(map__27086);
var runtime = map__27086__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27086__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5141__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_27306 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_27306)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__27093 = runtime;
var G__27094 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_27306);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__27093,G__27094) : shadow.remote.runtime.shared.process.call(null,G__27093,G__27094));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__27098,res){
var map__27099 = p__27098;
var map__27099__$1 = cljs.core.__destructure_map(map__27099);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27099__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__27103 = res;
var G__27103__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27103,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__27103);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__27103__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__27103__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__27128 = arguments.length;
switch (G__27128) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__27165,msg,handlers,timeout_after_ms){
var map__27166 = p__27165;
var map__27166__$1 = cljs.core.__destructure_map(map__27166);
var runtime = map__27166__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27166__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5881__auto__ = [];
var len__5875__auto___27326 = arguments.length;
var i__5876__auto___27327 = (0);
while(true){
if((i__5876__auto___27327 < len__5875__auto___27326)){
args__5881__auto__.push((arguments[i__5876__auto___27327]));

var G__27335 = (i__5876__auto___27327 + (1));
i__5876__auto___27327 = G__27335;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((2) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5882__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__27181,ev,args){
var map__27182 = p__27181;
var map__27182__$1 = cljs.core.__destructure_map(map__27182);
var runtime = map__27182__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27182__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__27185 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27188 = null;
var count__27189 = (0);
var i__27190 = (0);
while(true){
if((i__27190 < count__27189)){
var ext = chunk__27188.cljs$core$IIndexed$_nth$arity$2(null,i__27190);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27340 = seq__27185;
var G__27341 = chunk__27188;
var G__27342 = count__27189;
var G__27343 = (i__27190 + (1));
seq__27185 = G__27340;
chunk__27188 = G__27341;
count__27189 = G__27342;
i__27190 = G__27343;
continue;
} else {
var G__27344 = seq__27185;
var G__27345 = chunk__27188;
var G__27346 = count__27189;
var G__27347 = (i__27190 + (1));
seq__27185 = G__27344;
chunk__27188 = G__27345;
count__27189 = G__27346;
i__27190 = G__27347;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27185);
if(temp__5825__auto__){
var seq__27185__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27185__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__27185__$1);
var G__27351 = cljs.core.chunk_rest(seq__27185__$1);
var G__27352 = c__5672__auto__;
var G__27353 = cljs.core.count(c__5672__auto__);
var G__27354 = (0);
seq__27185 = G__27351;
chunk__27188 = G__27352;
count__27189 = G__27353;
i__27190 = G__27354;
continue;
} else {
var ext = cljs.core.first(seq__27185__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__27355 = cljs.core.next(seq__27185__$1);
var G__27356 = null;
var G__27357 = (0);
var G__27358 = (0);
seq__27185 = G__27355;
chunk__27188 = G__27356;
count__27189 = G__27357;
i__27190 = G__27358;
continue;
} else {
var G__27362 = cljs.core.next(seq__27185__$1);
var G__27363 = null;
var G__27364 = (0);
var G__27365 = (0);
seq__27185 = G__27362;
chunk__27188 = G__27363;
count__27189 = G__27364;
i__27190 = G__27365;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq27177){
var G__27178 = cljs.core.first(seq27177);
var seq27177__$1 = cljs.core.next(seq27177);
var G__27179 = cljs.core.first(seq27177__$1);
var seq27177__$2 = cljs.core.next(seq27177__$1);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27178,G__27179,seq27177__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__27206,p__27207){
var map__27208 = p__27206;
var map__27208__$1 = cljs.core.__destructure_map(map__27208);
var runtime = map__27208__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27208__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27209 = p__27207;
var map__27209__$1 = cljs.core.__destructure_map(map__27209);
var msg = map__27209__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27209__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__27211 = cljs.core.deref(state_ref);
var map__27211__$1 = cljs.core.__destructure_map(map__27211);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27211__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__27217,msg){
var map__27218 = p__27217;
var map__27218__$1 = cljs.core.__destructure_map(map__27218);
var runtime = map__27218__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27218__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__27227,key,p__27228){
var map__27229 = p__27227;
var map__27229__$1 = cljs.core.__destructure_map(map__27229);
var state = map__27229__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27229__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__27230 = p__27228;
var map__27230__$1 = cljs.core.__destructure_map(map__27230);
var spec = map__27230__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27230__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27230__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__27235,key,spec){
var map__27236 = p__27235;
var map__27236__$1 = cljs.core.__destructure_map(map__27236);
var runtime = map__27236__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27236__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5829__auto___27376 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5829__auto___27376 == null)){
} else {
var on_welcome_27378 = temp__5829__auto___27376;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_27378.cljs$core$IFn$_invoke$arity$0 ? on_welcome_27378.cljs$core$IFn$_invoke$arity$0() : on_welcome_27378.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__27238_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__27238_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__27239_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__27239_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__27240_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__27240_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__27241_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__27241_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__27242_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__27242_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__27262,key){
var map__27263 = p__27262;
var map__27263__$1 = cljs.core.__destructure_map(map__27263);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27263__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__27268,msg){
var map__27269 = p__27268;
var map__27269__$1 = cljs.core.__destructure_map(map__27269);
var runtime = map__27269__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27269__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__27272,p__27273){
var map__27274 = p__27272;
var map__27274__$1 = cljs.core.__destructure_map(map__27274);
var runtime = map__27274__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27274__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__27275 = p__27273;
var map__27275__$1 = cljs.core.__destructure_map(map__27275);
var msg = map__27275__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27275__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27275__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__27287 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__27289 = null;
var count__27290 = (0);
var i__27291 = (0);
while(true){
if((i__27291 < count__27290)){
var map__27299 = chunk__27289.cljs$core$IIndexed$_nth$arity$2(null,i__27291);
var map__27299__$1 = cljs.core.__destructure_map(map__27299);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27299__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27393 = seq__27287;
var G__27394 = chunk__27289;
var G__27395 = count__27290;
var G__27396 = (i__27291 + (1));
seq__27287 = G__27393;
chunk__27289 = G__27394;
count__27290 = G__27395;
i__27291 = G__27396;
continue;
} else {
var G__27397 = seq__27287;
var G__27398 = chunk__27289;
var G__27399 = count__27290;
var G__27400 = (i__27291 + (1));
seq__27287 = G__27397;
chunk__27289 = G__27398;
count__27290 = G__27399;
i__27291 = G__27400;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__27287);
if(temp__5825__auto__){
var seq__27287__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27287__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__27287__$1);
var G__27401 = cljs.core.chunk_rest(seq__27287__$1);
var G__27402 = c__5672__auto__;
var G__27403 = cljs.core.count(c__5672__auto__);
var G__27404 = (0);
seq__27287 = G__27401;
chunk__27289 = G__27402;
count__27290 = G__27403;
i__27291 = G__27404;
continue;
} else {
var map__27300 = cljs.core.first(seq__27287__$1);
var map__27300__$1 = cljs.core.__destructure_map(map__27300);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27300__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__27414 = cljs.core.next(seq__27287__$1);
var G__27415 = null;
var G__27416 = (0);
var G__27417 = (0);
seq__27287 = G__27414;
chunk__27289 = G__27415;
count__27290 = G__27416;
i__27291 = G__27417;
continue;
} else {
var G__27418 = cljs.core.next(seq__27287__$1);
var G__27419 = null;
var G__27420 = (0);
var G__27421 = (0);
seq__27287 = G__27418;
chunk__27289 = G__27419;
count__27290 = G__27420;
i__27291 = G__27421;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
