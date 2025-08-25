goog.provide('main');
main.app_conn = datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("resource","actions","resource/actions",2068058884),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null)], null));
main.root = (function main$root(conn){
var main_nav = (((!((conn == null))))?systems.navigation.get_main_nav_state(conn):null);
var G__39883 = main_nav;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__39883)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Error: No database found"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.no_page,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-library","asset-library",786208781),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.asset_library,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actions","actions",-812656882),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.actions,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"campaigns","campaigns",-1931854575),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.campaign,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creatures","creatures",761416150),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.creatures,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"realms","realms",1714748568),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.realm,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resources","resources",1632806811),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.resources,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rulesets","rulesets",1624022173),G__39883)){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.rules,conn,cljs.core.PersistentArrayMap.EMPTY], null));
} else {
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.views_library.campaign,conn,cljs.core.PersistentArrayMap.EMPTY], null));

}
}
}
}
}
}
}
}
}
});
main.render = (function main$render(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39885 = arguments.length;
var i__5770__auto___39886 = (0);
while(true){
if((i__5770__auto___39886 < len__5769__auto___39885)){
args__5775__auto__.push((arguments[i__5770__auto___39886]));

var G__39887 = (i__5770__auto___39886 + (1));
i__5770__auto___39886 = G__39887;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return main.render.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(main.render.cljs$core$IFn$_invoke$arity$variadic = (function (conn){
if(((cljs.core.empty_QMARK_(conn)) || ((cljs.core.first(conn) == null)))){
init.initialize_db(main.app_conn);
} else {
}

var k__39876__auto__ = "render";
console.time(k__39876__auto__);

var res__39877__auto__ = expo.root.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.root,(function (){var or__5045__auto__ = cljs.core.first(conn);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return main.app_conn;
}
})()], null)));
console.timeEnd(k__39876__auto__);

return res__39877__auto__;
}));

(main.render.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(main.render.cljs$lang$applyTo = (function (seq39884){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39884));
}));

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(main.app_conn,(function (tx_report){
return main.render.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report))], 0));
}));
main.init = (function main$init(){
init.initialize_db(main.app_conn);

return main.render.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([main.app_conn], 0));
});
goog.exportSymbol('main.init', main.init);

//# sourceMappingURL=main.js.map
