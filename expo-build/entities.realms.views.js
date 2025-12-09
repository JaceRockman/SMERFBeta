goog.provide('entities.realms.views');
entities.realms.views.realm_select = (function entities$realms$views$realm_select(conn,realms){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["realm-select"], 0));

var flex_vals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null);
var G__38648 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Realms",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Owner"], null),new cljs.core.Keyword(null,"items","items",1031954938),realms,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (realm_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
var G__38652 = conn;
var G__38653 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2(G__38652,G__38653) : entities.realms.data.interface$.set_active_realm.call(null,G__38652,G__38653));
})], null),(function (){var G__38654 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(realm_data);
var G__38655 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38654,G__38655) : organisms.library.default_text.call(null,G__38654,G__38655));
})(),(function (){var G__38656 = "Avis Industries";
var G__38657 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38656,G__38657) : organisms.library.default_text.call(null,G__38656,G__38657));
})()], null);
})], null);
var G__38649 = "realms";
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__38648,G__38649) : organisms.library.search_filter_sort_list.call(null,G__38648,G__38649));
});
entities.realms.views.subrealm_sort = (function entities$realms$views$subrealm_sort(realm_entities){
var entity_type_groups = cljs.core.group_by(new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),realm_entities);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__38685){
var vec__38686 = p__38685;
var entity_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38686,(0),null);
var entity_data_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38686,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),clojure.string.capitalize(entity_type),new cljs.core.Keyword(null,"data","data",-232669377),entity_data_list], null);
}),entity_type_groups);
});
entities.realms.views.set_active_subrealm = (function entities$realms$views$set_active_subrealm(conn,realm_data){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("realm",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125).cljs$core$IFn$_invoke$arity$1(realm_data))){
var G__38698 = conn;
var G__38699 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_realm.cljs$core$IFn$_invoke$arity$2(G__38698,G__38699) : entities.realms.data.interface$.set_active_realm.call(null,G__38698,G__38699));
} else {
var G__38700 = conn;
var G__38701 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(realm_data);
return (entities.realms.data.interface$.set_active_subrealm.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_subrealm.cljs$core$IFn$_invoke$arity$2(G__38700,G__38701) : entities.realms.data.interface$.set_active_subrealm.call(null,G__38700,G__38701));
}
});
});
entities.realms.views.subrealm_entity_row = (function entities$realms$views$subrealm_entity_row(conn,flex_vals,realm_entity){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),entities.realms.views.set_active_subrealm(conn,realm_entity)], null),(function (){var G__38714 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(realm_entity);
var G__38715 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38714,G__38715) : organisms.library.default_text.call(null,G__38714,G__38715));
})(),(function (){var G__38716 = "System";
var G__38717 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38716,G__38717) : organisms.library.default_text.call(null,G__38716,G__38717));
})()], null);
});
entities.realms.views.subrealm_select = (function entities$realms$views$subrealm_select(var_args){
var G__38728 = arguments.length;
switch (G__38728) {
case 2:
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$2 = (function (conn,subrealm_data){
return entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3(conn,subrealm_data,cljs.core.PersistentArrayMap.EMPTY);
}));

(entities.realms.views.subrealm_select.cljs$core$IFn$_invoke$arity$3 = (function (conn,subrealm_data,p__38731){
var map__38732 = p__38731;
var map__38732__$1 = cljs.core.__destructure_map(map__38732);
var realm_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"realm-data","realm-data",-1523168603));
var list_overrides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38732__$1,new cljs.core.Keyword(null,"list-overrides","list-overrides",-1303386994));
var flex_vals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(cljs.core.truth_(realm_data)?(function (){var G__38735 = new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843).cljs$core$IFn$_invoke$arity$1(realm_data);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__38735) : organisms.library.default_text.call(null,G__38735));
})():null),(function (){var G__38738 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Realms",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Author"], null),new cljs.core.Keyword(null,"items","items",1031954938),entities.realms.views.subrealm_sort(subrealm_data),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (p1__38724_SHARP_){
return entities.realms.views.subrealm_entity_row(conn,flex_vals,p1__38724_SHARP_);
})], null),list_overrides], 0));
var G__38739 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(subrealm_data))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list-header","list-header",-862823076).cljs$core$IFn$_invoke$arity$1(list_overrides)));
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__38738,G__38739) : organisms.library.search_filter_sort_list.call(null,G__38738,G__38739));
})()], null);
}));

(entities.realms.views.subrealm_select.cljs$lang$maxFixedArity = 3);

entities.realms.views.realm_details = (function entities$realms$views$realm_details(conn,subrealm_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__38742 = conn;
var G__38743 = new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (organisms.library.default_realm_markdown.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_realm_markdown.cljs$core$IFn$_invoke$arity$2(G__38742,G__38743) : organisms.library.default_realm_markdown.call(null,G__38742,G__38743));
})(),(function (){var parents = (function (){var G__38744 = conn;
var G__38745 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (entities.realms.data.interface$.get_realm_entity_parents.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_parents.cljs$core$IFn$_invoke$arity$2(G__38744,G__38745) : entities.realms.data.interface$.get_realm_entity_parents.call(null,G__38744,G__38745));
})();
var children = (function (){var G__38746 = conn;
var G__38747 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(subrealm_data);
return (entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2(G__38746,G__38747) : entities.realms.data.interface$.get_realm_entity_children.call(null,G__38746,G__38747));
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
var subrealms = (function (){var G__38756 = conn;
var G__38757 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(active_realm_data);
return (entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.get_realm_entity_children.cljs$core$IFn$_invoke$arity$2(G__38756,G__38757) : entities.realms.data.interface$.get_realm_entity_children.call(null,G__38756,G__38757));
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
