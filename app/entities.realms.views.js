goog.provide('entities.realms.views');
entities.realms.views.realm_select = (function entities$realms$views$realm_select(conn,realms){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["realm-select"], 0));

var flex_vals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var G__39443 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Realms",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Owner"], null),new cljs.core.Keyword(null,"items","items",1031954938),realms,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (realm_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
var G__39447 = conn;
var G__39448 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2(G__39447,G__39448) : entities.realms.data.interface$.set_active_realm.call(null,G__39447,G__39448));
})], null),(function (){var G__39454 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(realm_data);
var G__39455 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39454,G__39455) : organisms.library.default_text.call(null,G__39454,G__39455));
})(),(function (){var G__39458 = "Avis Industries";
var G__39459 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39458,G__39459) : organisms.library.default_text.call(null,G__39458,G__39459));
})()], null);
})], null);
var G__39444 = "realms";
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__39443,G__39444) : organisms.library.search_filter_sort_list.call(null,G__39443,G__39444));
});
entities.realms.views.subrealm_sort = (function entities$realms$views$subrealm_sort(realm_entities){
var entity_type_groups = cljs.core.group_by(new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),realm_entities);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39463){
var vec__39464 = p__39463;
var entity_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39464,(0),null);
var entity_data_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39464,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.capitalize(entity_type),new cljs.core.Keyword(null,"data","data",-232669377),entity_data_list], null);
}),entity_type_groups);
});
entities.realms.views.set_active_subrealm = (function entities$realms$views$set_active_subrealm(conn,realm_data){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("realm",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125).cljs$core$IFn$_invoke$arity$1(realm_data))){
var G__39472 = conn;
var G__39473 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2(G__39472,G__39473) : entities.realms.data.interface$.set_active_realm.call(null,G__39472,G__39473));
} else {
var G__39474 = conn;
var G__39475 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_subrealm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_subrealm.cljs$core$IFn$_invoke$arity$2(G__39474,G__39475) : entities.realms.data.interface$.set_active_subrealm.call(null,G__39474,G__39475));
}
});
});
entities.realms.views.subrealm_entity_row = (function entities$realms$views$subrealm_entity_row(conn,flex_vals,realm_entity){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),entities.realms.views.set_active_subrealm(conn,realm_entity)], null),(function (){var G__39480 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(realm_entity);
var G__39481 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39480,G__39481) : organisms.library.default_text.call(null,G__39480,G__39481));
})(),(function (){var G__39482 = "System";
var G__39483 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39482,G__39483) : organisms.library.default_text.call(null,G__39482,G__39483));
})()], null);
});
entities.realms.views.subrealm_select = (function entities$realms$views$subrealm_select(var_args){
var G__39489 = arguments.length;
switch (G__39489) {
case 2:
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$2 = (function (conn,subrealm_data){
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3(conn,subrealm_data,cljs.core.PersistentArrayMap.EMPTY);
}));

(entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3 = (function (conn,subrealm_data,p__39490){
var map__39491 = p__39490;
var map__39491__$1 = cljs.core.__destructure_map(map__39491);
var realm_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"realm-data","realm-data",-1523168603));
var list_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39491__$1,new cljs.core.Keyword(null,"list-overrides","list-overrides",-1303386994));
var flex_vals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(cljs.core.truth_(realm_data)?(function (){var G__39492 = new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843).cljs$core$IFn$_invoke$arity$1(realm_data);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39492) : organisms.library.default_text.call(null,G__39492));
})():null),(function (){var G__39493 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Realms",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Author"], null),new cljs.core.Keyword(null,"items","items",1031954938),entities.realms.views.subrealm_sort(subrealm_data),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (p1__39484_SHARP_){
return entities.realms.views.subrealm_entity_row(conn,flex_vals,p1__39484_SHARP_);
})], null),list_overrides], 0));
var G__39494 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(subrealm_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list-header","list-header",-862823076).cljs$core$IFn$_invoke$arity$1(list_overrides))].join('');
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__39493,G__39494) : organisms.library.search_filter_sort_list.call(null,G__39493,G__39494));
})()], null);
}));

(entities.realms.views.subrealm_select.cljs$lang$maxFixedArity = 3);

entities.realms.views.realm_details = (function entities$realms$views$realm_details(conn,subrealm_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__39499 = conn;
var G__39500 = new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (organisms.library.default_realm_markdown.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_realm_markdown.cljs$core$IFn$_invoke$arity$2(G__39499,G__39500) : organisms.library.default_realm_markdown.call(null,G__39499,G__39500));
})(),(function (){var parents = (function (){var G__39501 = conn;
var G__39502 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (entities.realms.data.interface$.get_realm_entity_parents.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_parents.cljs$core$IFn$_invoke$arity$2(G__39501,G__39502) : entities.realms.data.interface$.get_realm_entity_parents.call(null,G__39501,G__39502));
})();
var children = (function (){var G__39503 = conn;
var G__39504 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2(G__39503,G__39504) : entities.realms.data.interface$.get_realm_entity_children.call(null,G__39503,G__39504));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,((cljs.core.empty_QMARK_(parents))?null:entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3(conn,parents,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-overrides","list-overrides",-1303386994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Parents",new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,((cljs.core.empty_QMARK_(children))?null:entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3(conn,children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-overrides","list-overrides",-1303386994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Children",new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),true], null)], null)))], null)], null);
})()], null);
});
entities.realms.views.realm_home = (function entities$realms$views$realm_home(conn){
var active_campaign_data = (entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign.call(null,conn));
var active_realm_data = (entities.realms.data.interface$.get_active_realm.cljs$core$IFn$_invoke$arity$1 ? entities.realms.data.interface$.get_active_realm.cljs$core$IFn$_invoke$arity$1(conn) : entities.realms.data.interface$.get_active_realm.call(null,conn));
var active_subrealm_data = (entities.realms.data.interface$.get_active_subrealm.cljs$core$IFn$_invoke$arity$1 ? entities.realms.data.interface$.get_active_subrealm.cljs$core$IFn$_invoke$arity$1(conn) : entities.realms.data.interface$.get_active_subrealm.call(null,conn));
if(cljs.core.truth_(active_subrealm_data)){
return entities.realms.views.realm_details(conn,active_subrealm_data);
} else {
if(cljs.core.truth_(active_realm_data)){
var subrealms = (function (){var G__39508 = conn;
var G__39509 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(active_realm_data);
return (entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2(G__39508,G__39509) : entities.realms.data.interface$.get_realm_entity_children.call(null,G__39508,G__39509));
})();
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3(conn,subrealms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"realm-data","realm-data",-1523168603),active_realm_data], null));
} else {
if(cljs.core.truth_(active_campaign_data)){
return entities.realms.views.realm_select(conn,(entities.campaigns.data.interface$.get_active_campaign_realms.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign_realms.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign_realms.call(null,conn)));
} else {
return entities.realms.views.realm_select(conn,(entities.realms.data.interface$.get_all_realms.cljs$core$IFn$_invoke$arity$1 ? entities.realms.data.interface$.get_all_realms.cljs$core$IFn$_invoke$arity$1(conn) : entities.realms.data.interface$.get_all_realms.call(null,conn)));

}
}
}
});
entities.realms.views.realm = (function entities$realms$views$realm(conn,props){
return organisms.library.view_frame(conn,entities.realms.views.realm_home(conn),"realms-page");
});

//# sourceMappingURL=entities.realms.views.js.map
