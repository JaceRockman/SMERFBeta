goog.provide('main');
main.app_conn = (function (){var G__38838 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("resource","actions","resource/actions",2068058884),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null),new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null)], null);
return (datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 ? datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1(G__38838) : datascript.core.create_conn.call(null,G__38838));
})();
main.root = (function main$root(conn){
var nav_state = (((!((conn == null))))?systems.navigation.get_nav_state(conn):null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nav-state",nav_state], 0));

var G__38839 = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(nav_state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__38839)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Error: No database found"], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings","settings",1556144875),G__38839)){
return entities.views_library.no_page(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"asset-library","asset-library",786208781),G__38839)){
return entities.views_library.asset_library(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"actions","actions",-812656882),G__38839)){
return entities.views_library.actions(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"campaigns","campaigns",-1931854575),G__38839)){
return entities.views_library.campaign(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creatures","creatures",761416150),G__38839)){
return entities.views_library.creatures(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"realms","realms",1714748568),G__38839)){
return entities.views_library.realm(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resources","resources",1632806811),G__38839)){
return entities.views_library.resources(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rulesets","rulesets",1624022173),G__38839)){
return entities.views_library.rules(conn,cljs.core.PersistentArrayMap.EMPTY);
} else {
return entities.views_library.campaign(conn,cljs.core.PersistentArrayMap.EMPTY);

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
main.render = (function main$render(conn){
return expo.root.render_root(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(main.root(conn)));
});
var G__38840_38842 = main.app_conn;
var G__38841_38843 = (function (tx_report){
return main.render(main.app_conn);
});
(datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2(G__38840_38842,G__38841_38843) : datascript.core.listen_BANG_.call(null,G__38840_38842,G__38841_38843));
main.init = (function main$init(){
init.initialize_db(main.app_conn);

return main.render(main.app_conn);
});
goog.exportSymbol('main.init', main.init);
main.init_dev_tools = (function main$init_dev_tools(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Dev"], 0));
});

//# sourceMappingURL=main.js.map
