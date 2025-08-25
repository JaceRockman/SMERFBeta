goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__34363,p__34364){
var map__34366 = p__34363;
var map__34366__$1 = cljs.core.__destructure_map(map__34366);
var svc = map__34366__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34366__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34366__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34366__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34367 = p__34364;
var map__34367__$1 = cljs.core.__destructure_map(map__34367);
var msg = map__34367__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34367__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34367__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__34382,p__34383){
var map__34386 = p__34382;
var map__34386__$1 = cljs.core.__destructure_map(map__34386);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34386__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__34387 = p__34383;
var map__34387__$1 = cljs.core.__destructure_map(map__34387);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34387__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__34392,p__34393){
var map__34395 = p__34392;
var map__34395__$1 = cljs.core.__destructure_map(map__34395);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34395__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34395__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__34396 = p__34393;
var map__34396__$1 = cljs.core.__destructure_map(map__34396);
var msg = map__34396__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34396__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__34401,tid){
var map__34402 = p__34401;
var map__34402__$1 = cljs.core.__destructure_map(map__34402);
var svc = map__34402__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34402__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__34412 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__34413 = null;
var count__34414 = (0);
var i__34415 = (0);
while(true){
if((i__34415 < count__34414)){
var vec__34435 = chunk__34413.cljs$core$IIndexed$_nth$arity$2(null,i__34415);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34435,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34451 = seq__34412;
var G__34452 = chunk__34413;
var G__34453 = count__34414;
var G__34454 = (i__34415 + (1));
seq__34412 = G__34451;
chunk__34413 = G__34452;
count__34414 = G__34453;
i__34415 = G__34454;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34412);
if(temp__5804__auto__){
var seq__34412__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34412__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34412__$1);
var G__34455 = cljs.core.chunk_rest(seq__34412__$1);
var G__34456 = c__5568__auto__;
var G__34457 = cljs.core.count(c__5568__auto__);
var G__34458 = (0);
seq__34412 = G__34455;
chunk__34413 = G__34456;
count__34414 = G__34457;
i__34415 = G__34458;
continue;
} else {
var vec__34438 = cljs.core.first(seq__34412__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34438,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__34462 = cljs.core.next(seq__34412__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__34412 = G__34462;
chunk__34413 = G__34463;
count__34414 = G__34464;
i__34415 = G__34465;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__34403_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__34403_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__34404_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__34404_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__34405_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__34405_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__34406_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__34406_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__34447){
var map__34449 = p__34447;
var map__34449__$1 = cljs.core.__destructure_map(map__34449);
var svc = map__34449__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34449__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34449__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
