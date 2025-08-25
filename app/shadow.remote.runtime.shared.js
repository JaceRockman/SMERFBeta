goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28118){
var map__28119 = p__28118;
var map__28119__$1 = cljs.core.__destructure_map(map__28119);
var runtime = map__28119__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28119__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_28384 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_28384)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__28125 = runtime;
var G__28126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_28384);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__28125,G__28126) : shadow.remote.runtime.shared.process.call(null,G__28125,G__28126));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28137,res){
var map__28140 = p__28137;
var map__28140__$1 = cljs.core.__destructure_map(map__28140);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28140__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28140__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28148 = res;
var G__28148__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28148,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28148);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28148__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28148__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28164 = arguments.length;
switch (G__28164) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28171,msg,handlers,timeout_after_ms){
var map__28172 = p__28171;
var map__28172__$1 = cljs.core.__destructure_map(map__28172);
var runtime = map__28172__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28172__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var args__5775__auto__ = [];
var len__5769__auto___28405 = arguments.length;
var i__5770__auto___28406 = (0);
while(true){
if((i__5770__auto___28406 < len__5769__auto___28405)){
args__5775__auto__.push((arguments[i__5770__auto___28406]));

var G__28408 = (i__5770__auto___28406 + (1));
i__5770__auto___28406 = G__28408;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28179,ev,args){
var map__28180 = p__28179;
var map__28180__$1 = cljs.core.__destructure_map(map__28180);
var runtime = map__28180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28181 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28184 = null;
var count__28185 = (0);
var i__28186 = (0);
while(true){
if((i__28186 < count__28185)){
var ext = chunk__28184.cljs$core$IIndexed$_nth$arity$2(null,i__28186);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28417 = seq__28181;
var G__28418 = chunk__28184;
var G__28419 = count__28185;
var G__28420 = (i__28186 + (1));
seq__28181 = G__28417;
chunk__28184 = G__28418;
count__28185 = G__28419;
i__28186 = G__28420;
continue;
} else {
var G__28421 = seq__28181;
var G__28422 = chunk__28184;
var G__28423 = count__28185;
var G__28424 = (i__28186 + (1));
seq__28181 = G__28421;
chunk__28184 = G__28422;
count__28185 = G__28423;
i__28186 = G__28424;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28181);
if(temp__5804__auto__){
var seq__28181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28181__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28181__$1);
var G__28427 = cljs.core.chunk_rest(seq__28181__$1);
var G__28428 = c__5568__auto__;
var G__28429 = cljs.core.count(c__5568__auto__);
var G__28430 = (0);
seq__28181 = G__28427;
chunk__28184 = G__28428;
count__28185 = G__28429;
i__28186 = G__28430;
continue;
} else {
var ext = cljs.core.first(seq__28181__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__28433 = cljs.core.next(seq__28181__$1);
var G__28434 = null;
var G__28435 = (0);
var G__28436 = (0);
seq__28181 = G__28433;
chunk__28184 = G__28434;
count__28185 = G__28435;
i__28186 = G__28436;
continue;
} else {
var G__28437 = cljs.core.next(seq__28181__$1);
var G__28438 = null;
var G__28439 = (0);
var G__28440 = (0);
seq__28181 = G__28437;
chunk__28184 = G__28438;
count__28185 = G__28439;
i__28186 = G__28440;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28176){
var G__28177 = cljs.core.first(seq28176);
var seq28176__$1 = cljs.core.next(seq28176);
var G__28178 = cljs.core.first(seq28176__$1);
var seq28176__$2 = cljs.core.next(seq28176__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28177,G__28178,seq28176__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28205,p__28206){
var map__28207 = p__28205;
var map__28207__$1 = cljs.core.__destructure_map(map__28207);
var runtime = map__28207__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28207__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28208 = p__28206;
var map__28208__$1 = cljs.core.__destructure_map(map__28208);
var msg = map__28208__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28208__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__28211 = cljs.core.deref(state_ref);
var map__28211__$1 = cljs.core.__destructure_map(map__28211);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28211__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28211__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28219,msg){
var map__28220 = p__28219;
var map__28220__$1 = cljs.core.__destructure_map(map__28220);
var runtime = map__28220__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28220__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28230,key,p__28231){
var map__28232 = p__28230;
var map__28232__$1 = cljs.core.__destructure_map(map__28232);
var state = map__28232__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28232__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28233 = p__28231;
var map__28233__$1 = cljs.core.__destructure_map(map__28233);
var spec = map__28233__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28233__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28244,key,spec){
var map__28245 = p__28244;
var map__28245__$1 = cljs.core.__destructure_map(map__28245);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28245__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28250_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28250_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28251_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28251_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28252_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28252_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28253_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28253_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28254_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28254_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28270,key){
var map__28271 = p__28270;
var map__28271__$1 = cljs.core.__destructure_map(map__28271);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28271__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28277,msg){
var map__28278 = p__28277;
var map__28278__$1 = cljs.core.__destructure_map(map__28278);
var runtime = map__28278__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28278__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28292,p__28293){
var map__28294 = p__28292;
var map__28294__$1 = cljs.core.__destructure_map(map__28294);
var runtime = map__28294__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28294__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28295 = p__28293;
var map__28295__$1 = cljs.core.__destructure_map(map__28295);
var msg = map__28295__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28295__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__28314 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28316 = null;
var count__28317 = (0);
var i__28318 = (0);
while(true){
if((i__28318 < count__28317)){
var map__28345 = chunk__28316.cljs$core$IIndexed$_nth$arity$2(null,i__28318);
var map__28345__$1 = cljs.core.__destructure_map(map__28345);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28345__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28521 = seq__28314;
var G__28522 = chunk__28316;
var G__28523 = count__28317;
var G__28524 = (i__28318 + (1));
seq__28314 = G__28521;
chunk__28316 = G__28522;
count__28317 = G__28523;
i__28318 = G__28524;
continue;
} else {
var G__28526 = seq__28314;
var G__28527 = chunk__28316;
var G__28528 = count__28317;
var G__28529 = (i__28318 + (1));
seq__28314 = G__28526;
chunk__28316 = G__28527;
count__28317 = G__28528;
i__28318 = G__28529;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__28314);
if(temp__5804__auto__){
var seq__28314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28314__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__28314__$1);
var G__28531 = cljs.core.chunk_rest(seq__28314__$1);
var G__28532 = c__5568__auto__;
var G__28533 = cljs.core.count(c__5568__auto__);
var G__28534 = (0);
seq__28314 = G__28531;
chunk__28316 = G__28532;
count__28317 = G__28533;
i__28318 = G__28534;
continue;
} else {
var map__28354 = cljs.core.first(seq__28314__$1);
var map__28354__$1 = cljs.core.__destructure_map(map__28354);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28354__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__28537 = cljs.core.next(seq__28314__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__28314 = G__28537;
chunk__28316 = G__28538;
count__28317 = G__28539;
i__28318 = G__28540;
continue;
} else {
var G__28542 = cljs.core.next(seq__28314__$1);
var G__28543 = null;
var G__28544 = (0);
var G__28545 = (0);
seq__28314 = G__28542;
chunk__28316 = G__28543;
count__28317 = G__28544;
i__28318 = G__28545;
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
