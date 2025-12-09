goog.provide('entities.campaigns.views');
entities.campaigns.views.campaign_select_list_item = (function entities$campaigns$views$campaign_select_list_item(conn,p__38659){
var map__38660 = p__38659;
var map__38660__$1 = cljs.core.__destructure_map(map__38660);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"title","title",636505583));
var owner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"owner","owner",-392611939));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38660__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(5),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(5)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$2((entities.campaigns.data.interface$.set_active_campaign.cljs$core$IFn$_invoke$arity$2 ? entities.campaigns.data.interface$.set_active_campaign.cljs$core$IFn$_invoke$arity$2(conn,id) : entities.campaigns.data.interface$.set_active_campaign.call(null,conn,id)),systems.navigation.navigate_BANG_(conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"campaign","campaign",763700630),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)));
})], null),(function (){var G__38664 = title;
var G__38665 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38664,G__38665) : organisms.library.default_text.call(null,G__38664,G__38665));
})(),(function (){var G__38666 = (function (){var or__5141__auto__ = owner;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return "Avis Industries";
}
})();
var G__38667 = cljs.core.PersistentArrayMap.EMPTY;
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38666,G__38667) : organisms.library.default_text.call(null,G__38666,G__38667));
})()], null);
});
entities.campaigns.views.add_campaign_fn = (function entities$campaigns$views$add_campaign_fn(){
return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),organisms.environments.modals.new_item_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [organisms.environments.modals.example_schema], null),new cljs.core.Keyword(null,"display?","display?",-1189123617),true], null));
});
entities.campaigns.views.campaign_select_list = (function entities$campaigns$views$campaign_select_list(conn,p__38676){
var map__38677 = p__38676;
var map__38677__$1 = cljs.core.__destructure_map(map__38677);
var campaigns_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38677__$1,new cljs.core.Keyword(null,"campaigns-data","campaigns-data",1857692262));
var show_header_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38677__$1,new cljs.core.Keyword(null,"show-header?","show-header?",1283469804));
var G__38678 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Campaign Title","Campaign Owner"], null),new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.Keyword(null,"items","items",1031954938),campaigns_data,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (p1__38671_SHARP_){
return entities.campaigns.views.campaign_select_list_item(conn,p1__38671_SHARP_);
}),new cljs.core.Keyword(null,"add-item-fn","add-item-fn",1175869661),entities.campaigns.views.add_campaign_fn], null);
var G__38679 = "campaigns";
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__38678,G__38679) : organisms.library.search_filter_sort_list.call(null,G__38678,G__38679));
});
entities.campaigns.views.campaign_select = (function entities$campaigns$views$campaign_select(conn,campaigns_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),entities.campaigns.views.campaign_select_list(conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"campaigns-data","campaigns-data",1857692262),campaigns_data,new cljs.core.Keyword(null,"show-header?","show-header?",1283469804),true], null))], null);
});
entities.campaigns.views.campaign_summary = (function entities$campaigns$views$campaign_summary(conn,campaign_data){
return organisms.library.view_frame(conn,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__38680 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(campaign_data);
var G__38681 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38680,G__38681) : organisms.library.default_text.call(null,G__38680,G__38681));
})(),(function (){var G__38682 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(campaign_data));
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__38682) : organisms.library.default_text.call(null,G__38682));
})()], null),"campaign-page");
});
entities.campaigns.views.campaign = (function entities$campaigns$views$campaign(conn,props){
var active_campaign_data = (entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign.call(null,conn));
var all_campaigns_data = (entities.campaigns.data.interface$.get_all_campaigns.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_all_campaigns.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_all_campaigns.call(null,conn));
if(cljs.core.empty_QMARK_(active_campaign_data)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),(function (){var G__38683 = "Campaigns";
var G__38684 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),null], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__38683,G__38684) : organisms.library.default_text.call(null,G__38683,G__38684));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"content-container-style","content-container-style",-26145133),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-between","space-between",1908176695),new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),entities.campaigns.views.campaign_select(conn,all_campaigns_data)], null)], null);
} else {
return entities.campaigns.views.campaign_summary(conn,active_campaign_data);
}
});

//# sourceMappingURL=entities.campaigns.views.js.map
