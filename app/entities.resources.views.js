goog.provide('entities.resources.views');
entities.resources.views.resource_flex_vals = (function entities$resources$views$resource_flex_vals(creature_QMARK_){
if(cljs.core.truth_(creature_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1),(2)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1)], null);
}
});
entities.resources.views.resource_search_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, ["resources",reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""),"creature-resources",reagent.core.atom.cljs$core$IFn$_invoke$arity$1(""),"add-resources",reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")], null));
entities.resources.views.resource_list_search_bar = (function entities$resources$views$resource_list_search_bar(search_text_map_key){
return (organisms.library.search_bar.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_bar.cljs$core$IFn$_invoke$arity$2(entities.resources.views.resource_search_text,search_text_map_key) : organisms.library.search_bar.call(null,entities.resources.views.resource_search_text,search_text_map_key));
});
entities.resources.views.resource_search_fn = (function entities$resources$views$resource_search_fn(resources,component_key){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39750_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(p1__39750_SHARP_))),clojure.string.lower_case((function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.resources.views.resource_search_text),component_key);
if(cljs.core.truth_(temp__5802__auto__)){
var search_text_atom = temp__5802__auto__;
return cljs.core.deref(search_text_atom);
} else {
return "";
}
})()));
}),resources);
});
entities.resources.views.resource_type_filters_list = new cljs.core.PersistentArrayMap(null, 5, ["Equipment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"fist-raised","fist-raised",905824129),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Equipment"], null)], null),"Trait",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"eye","eye",-1788770007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Trait"], null)], null),"Expertise",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Expertise"], null)], null),"Affiliation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"user-friends","user-friends",-1511454783),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Affiliation"], null)], null),"Item",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Item"], null)], null)], null);
entities.resources.views.active_resource_filter_lists = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, ["resources",cljs.core.PersistentArrayMap.EMPTY,"creature-resources",cljs.core.PersistentArrayMap.EMPTY,"add-resources",cljs.core.PersistentArrayMap.EMPTY], null));
entities.resources.views.toggle_filter = (function entities$resources$views$toggle_filter(active_resource_list_filters,active_filter_list_key,filter_key){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(active_resource_list_filters,(function (active_resource_list_filters__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(active_resource_list_filters__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_filter_list_key,filter_key], null),cljs.core.not);
}));
});
entities.resources.views.toggle_filter_button = (function entities$resources$views$toggle_filter_button(resource_type_filters,active_filter_lists,active_filter_list_key,filter_key){
var filter_on_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_filter_lists),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_filter_list_key,filter_key], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(filter_on_QMARK_)?new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)):null),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return entities.resources.views.toggle_filter(active_filter_lists,active_filter_list_key,filter_key);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(resource_type_filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_key,new cljs.core.Keyword(null,"icon","icon",1679606541)], null)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(filter_on_QMARK_)?new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)):new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
entities.resources.views.resource_list_simple_filters = (function entities$resources$views$resource_list_simple_filters(active_filter_list_key){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39751_SHARP_){
return entities.resources.views.toggle_filter_button(entities.resources.views.resource_type_filters_list,entities.resources.views.active_resource_filter_lists,active_filter_list_key,p1__39751_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Equipment","Trait","Expertise","Affiliation","Item"], null)))], null);
});
entities.resources.views.creature_resource_column_headers = new cljs.core.PersistentArrayMap(null, 4, ["Title",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Title",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39752_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__39752_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.Keyword(null,"title","title",636505583)], null));
})], null),"Quality",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Quality",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39753_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__39753_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437)], null));
})], null),"Power",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Power",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39754_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__39754_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423)], null));
})], null),"Quantity",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Quantity",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39755_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39755_SHARP_,new cljs.core.Keyword("creature-resource","quantity","creature-resource/quantity",2108753046));
})], null)], null);
entities.resources.views.resource_column_headers = new cljs.core.PersistentArrayMap(null, 3, ["Title",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Title",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39756_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39756_SHARP_,new cljs.core.Keyword(null,"title","title",636505583));
})], null),"Quality",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Quality",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39757_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39757_SHARP_,new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437));
})], null),"Power",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Power",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39758_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39758_SHARP_,new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423));
})], null)], null);
entities.resources.views.sort_as_sections = (function entities$resources$views$sort_as_sections(grouped_resources){
return (function (sorted_sections,section_title){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39759_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__39759_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sorted_sections,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),section_title,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_resources,section_title)], null)));
});
});
entities.resources.views.sort_sections = (function entities$resources$views$sort_sections(grouped_resources,resource_type){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped_resources,resource_type);
if(cljs.core.truth_(temp__5804__auto__)){
var resource_data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),resource_type,new cljs.core.Keyword(null,"data","data",-232669377),resource_data], null);
} else {
return null;
}
});
entities.resources.views.sort_resources_by_type = (function entities$resources$views$sort_resources_by_type(var_args){
var G__39762 = arguments.length;
switch (G__39762) {
case 1:
return entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$1 = (function (resources){
return entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$2(resources,new cljs.core.Keyword("resource","type","resource/type",2041163162));
}));

(entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$2 = (function (resources,grouping_logic){
var grouped_resources = cljs.core.group_by(grouping_logic,resources);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__39760_SHARP_){
return entities.resources.views.sort_sections(grouped_resources,p1__39760_SHARP_);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Equipment","Trait","Expertise","Affiliation","Item"], null)));
}));

(entities.resources.views.sort_resources_by_type.cljs$lang$maxFixedArity = 2);

entities.resources.views.sort_creature_resources_by_type = (function entities$resources$views$sort_creature_resources_by_type(creature_resources){
return entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$2(creature_resources,(function (p1__39763_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__39763_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.Keyword("resource","type","resource/type",2041163162)], null));
}));
});
entities.resources.views.creature_resource_sort_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["Title",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),true,new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null));
entities.resources.views.resource_sort_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["Title",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),true,new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null));
entities.resources.views.resource_modal = (function entities$resources$views$resource_modal(conn,id){
var resource = (entities.resources.data.interface$.get_resource.cljs$core$IFn$_invoke$arity$2 ? entities.resources.data.interface$.get_resource.cljs$core$IFn$_invoke$arity$2(conn,id) : entities.resources.data.interface$.get_resource.call(null,conn,id));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__39764 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(resource);
var G__39765 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39764,G__39765) : organisms.library.default_text.call(null,G__39764,G__39765));
})(),(function (){var G__39766 = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("resource","type","resource/type",2041163162).cljs$core$IFn$_invoke$arity$1(resource)),")"].join('');
var G__39767 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39766,G__39767) : organisms.library.default_text.call(null,G__39766,G__39767));
})(),(function (){var G__39768 = new cljs.core.Keyword("resource","description","resource/description",-683595378).cljs$core$IFn$_invoke$arity$1(resource);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39768) : organisms.library.default_text.call(null,G__39768));
})(),(function (){var G__39769 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("resource","quality-title","resource/quality-title",-1451866234).cljs$core$IFn$_invoke$arity$1(resource)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437).cljs$core$IFn$_invoke$arity$1(resource))].join('');
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39769) : organisms.library.default_text.call(null,G__39769));
})(),(function (){var G__39770 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("resource","power-title","resource/power-title",959882574).cljs$core$IFn$_invoke$arity$1(resource)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423).cljs$core$IFn$_invoke$arity$1(resource))].join('');
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39770) : organisms.library.default_text.call(null,G__39770));
})(),(function (){var temp__5804__auto__ = (function (){var G__39771 = conn;
var G__39772 = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(resource);
return (entities.resources.data.interface$.get_resource_actions.cljs$core$IFn$_invoke$arity$2 ? entities.resources.data.interface$.get_resource_actions.cljs$core$IFn$_invoke$arity$2(G__39771,G__39772) : entities.resources.data.interface$.get_resource_actions.call(null,G__39771,G__39772));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var resource_actions = temp__5804__auto__;
return entities.actions.views.action_list(conn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(resource),new cljs.core.Keyword(null,"actions","actions",-812656882),resource_actions,new cljs.core.Keyword(null,"header","header",119441134),"Actions",new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false,new cljs.core.Keyword(null,"non-sorted?","non-sorted?",374995111),true], null));
} else {
return null;
}
})()], null);
});
entities.resources.views.new_resource_type_selection = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Equipment");
entities.resources.views.resource_type_select_button = (function entities$resources$views$resource_type_select_button(type_id,type_title){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_title,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),type_id)))?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"red","red",-969428204))], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.library.text_input_map,(function (p1__39773_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39773_SHARP_,type_id,type_title);
}));
})], null),(organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(type_title) : organisms.library.default_text.call(null,type_title))], null);
});
entities.resources.views.resource_type_select = (function entities$resources$views$resource_type_select(type_id){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),entities.resources.views.resource_type_select_button(type_id,"Equipment"),entities.resources.views.resource_type_select_button(type_id,"Traits"),entities.resources.views.resource_type_select_button(type_id,"Expertise"),entities.resources.views.resource_type_select_button(type_id,"Connections"),entities.resources.views.resource_type_select_button(type_id,"Items")], null);
});
entities.resources.views.resource_property_select_button = (function entities$resources$views$resource_property_select_button(type_id,p__39776){
var map__39777 = p__39776;
var map__39777__$1 = cljs.core.__destructure_map(map__39777);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777__$1,new cljs.core.Keyword("resource-property","title","resource-property/title",-1249508581));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39777__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var selected_QMARK_ = cljs.core.some((function (p1__39774_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__39774_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),type_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"green","green",-945526839):new cljs.core.Keyword(null,"red","red",-969428204))], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
var new_property_vals = (cljs.core.truth_(selected_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39775_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__39775_SHARP_,id)));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),type_id)):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),type_id),id));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.library.text_input_map,(function (input_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(input_map,type_id,new_property_vals);
}));
})], null),(organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(title) : organisms.library.default_text.call(null,title))], null);
});
entities.resources.views.resource_property_select = (function entities$resources$views$resource_property_select(conn,property_id){
var resource_properties = (entities.resources.data.interface$.get_all_resource_properties.cljs$core$IFn$_invoke$arity$1 ? entities.resources.data.interface$.get_all_resource_properties.cljs$core$IFn$_invoke$arity$1(conn) : entities.resources.data.interface$.get_all_resource_properties.call(null,conn));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__39778 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Properties:") : organisms.library.default_text.call(null,"Properties:"));
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39778) : organisms.library.default_text.call(null,G__39778));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3(entities.resources.views.resource_property_select_button,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(property_id),resource_properties)], null)], null);
});
entities.resources.views.new_resource_modal = (function entities$resources$views$new_resource_modal(conn){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(5)], null)], null),(function (){var G__39779 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Title:") : organisms.library.default_text.call(null,"Title:"));
var G__39780 = "new-resource-title";
return (organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2(G__39779,G__39780) : organisms.library.default_text_input.call(null,G__39779,G__39780));
})(),entities.resources.views.resource_type_select("new-resource-type"),entities.resources.views.resource_property_select(conn,"new-resource-properties"),(function (){var G__39781 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Actions:") : organisms.library.default_text.call(null,"Actions:"));
var G__39782 = "new-resource-actions";
return (organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2(G__39781,G__39782) : organisms.library.default_text_input.call(null,G__39781,G__39782));
})(),(function (){var G__39783 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Quality:") : organisms.library.default_text.call(null,"Quality:"));
var G__39784 = "new-resource-quality";
return (organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2(G__39783,G__39784) : organisms.library.default_text_input.call(null,G__39783,G__39784));
})(),(function (){var G__39785 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Power:") : organisms.library.default_text.call(null,"Power:"));
var G__39786 = "new-resource-power";
return (organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2(G__39785,G__39786) : organisms.library.default_text_input.call(null,G__39785,G__39786));
})(),(function (){var G__39787 = (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("Description:") : organisms.library.default_text.call(null,"Description:"));
var G__39788 = "new-resource-description";
return (organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text_input.cljs$core$IFn$_invoke$arity$2(G__39787,G__39788) : organisms.library.default_text_input.call(null,G__39787,G__39788));
})(),(function (){var G__39789 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
var G__39791_39846 = conn;
var G__39792_39847 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39793){
var vec__39794 = p__39793;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39794,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(organisms.library.text_input_map)], 0));

return (((v == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",v)));
}),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("resource","quality-title","resource/quality-title",-1451866234),new cljs.core.Keyword("resource","properties","resource/properties",1145864842),new cljs.core.Keyword("resource","power-title","resource/power-title",959882574),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423),new cljs.core.Keyword("resource","type","resource/type",2041163162),new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437),new cljs.core.Keyword("resource","flavor-text","resource/flavor-text",2447965)],["resource","Quality",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-properties"),"Power",cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-title"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-power"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-type"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-quality"),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.library.text_input_map),"new-resource-description")])))], null);
(entities.resources.data.interface$.create_resource.cljs$core$IFn$_invoke$arity$2 ? entities.resources.data.interface$.create_resource.cljs$core$IFn$_invoke$arity$2(G__39791_39846,G__39792_39847) : entities.resources.data.interface$.create_resource.call(null,G__39791_39846,G__39792_39847));

return cljs.core.reset_BANG_(organisms.library.text_input_map,cljs.core.PersistentArrayMap.EMPTY);
})], null);
var G__39790 = "Save!";
return (organisms.library.button.cljs$core$IFn$_invoke$arity$2 ? organisms.library.button.cljs$core$IFn$_invoke$arity$2(G__39789,G__39790) : organisms.library.button.call(null,G__39789,G__39790));
})()], null);
});
entities.resources.views.creature_resource_modal = (function entities$resources$views$creature_resource_modal(conn,p__39797,quantity){
var map__39798 = p__39797;
var map__39798__$1 = cljs.core.__destructure_map(map__39798);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"title","title",636505583));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var quality_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"quality-title","quality-title",-16635012));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"power-title","power-title",1267360032));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39798__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__39799 = title;
var G__39800 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39799,G__39800) : organisms.library.default_text.call(null,G__39799,G__39800));
})(),(function (){var G__39801 = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),")"].join('');
var G__39802 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39801,G__39802) : organisms.library.default_text.call(null,G__39801,G__39802));
})(),(organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(description) : organisms.library.default_text.call(null,description)),(function (){var G__39803 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quality_title),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quality_value)].join('');
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39803) : organisms.library.default_text.call(null,G__39803));
})(),(function (){var G__39804 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_title),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_value)].join('');
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39804) : organisms.library.default_text.call(null,G__39804));
})(),(cljs.core.truth_(quantity)?(function (){var G__39805 = ["Quantity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = quantity;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})())].join('');
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1(G__39805) : organisms.library.default_text.call(null,G__39805));
})():null),entities.actions.views.action_list(conn,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"actions","actions",-812656882),(entities.resources.data.interface$.get_resource_actions.cljs$core$IFn$_invoke$arity$2 ? entities.resources.data.interface$.get_resource_actions.cljs$core$IFn$_invoke$arity$2(conn,id) : entities.resources.data.interface$.get_resource_actions.call(null,conn,id)),new cljs.core.Keyword(null,"header","header",119441134),"Actions",new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false], null))], null);
});
entities.resources.views.resource_quantity_column = (function entities$resources$views$resource_quantity_column(conn,creature_resource_id,quantity,flex_size){
var dec_quantity = (function (){
return (entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3 ? entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3(conn,creature_resource_id,cljs.core.dec) : entities.resources.data.interface$.update_creature_resource_quantity.call(null,conn,creature_resource_id,cljs.core.dec));
});
var inc_quantity = (function (){
return (entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3 ? entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3(conn,creature_resource_id,cljs.core.inc) : entities.resources.data.interface$.update_creature_resource_quantity.call(null,conn,creature_resource_id,cljs.core.inc));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex_size], null)], null),(organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(null,quantity,dec_quantity,inc_quantity) : organisms.library.decrementor_and_incrementor.call(null,null,quantity,dec_quantity,inc_quantity))], null);
});
entities.resources.views.creature_resource_quantity_column = (function entities$resources$views$creature_resource_quantity_column(conn,creature_resource_id,flex_size){
var quantity = (entities.resources.data.interface$.get_quantity_from_creature_resource.cljs$core$IFn$_invoke$arity$2 ? entities.resources.data.interface$.get_quantity_from_creature_resource.cljs$core$IFn$_invoke$arity$2(conn,creature_resource_id) : entities.resources.data.interface$.get_quantity_from_creature_resource.call(null,conn,creature_resource_id));
var dec_quantity = (function (){
return (entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3 ? entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3(conn,creature_resource_id,cljs.core.dec) : entities.resources.data.interface$.update_creature_resource_quantity.call(null,conn,creature_resource_id,cljs.core.dec));
});
var inc_quantity = (function (){
return (entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3 ? entities.resources.data.interface$.update_creature_resource_quantity.cljs$core$IFn$_invoke$arity$3(conn,creature_resource_id,cljs.core.inc) : entities.resources.data.interface$.update_creature_resource_quantity.call(null,conn,creature_resource_id,cljs.core.inc));
});
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex_size], null)], null),(organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(null,quantity,dec_quantity,inc_quantity) : organisms.library.decrementor_and_incrementor.call(null,null,quantity,dec_quantity,inc_quantity))], null);
});
entities.resources.views.resource_row_component = (function entities$resources$views$resource_row_component(conn,flex_vals){
return (function (p__39806){
var map__39807 = p__39806;
var map__39807__$1 = cljs.core.__destructure_map(map__39807);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"title","title",636505583));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39807__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_(organisms.library.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.resources.views.resource_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,id], null)], null));
})], null),(function (){var G__39808 = title;
var G__39809 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39808,G__39809) : organisms.library.default_text.call(null,G__39808,G__39809));
})(),(function (){var G__39810 = quality_value;
var G__39811 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39810,G__39811) : organisms.library.default_text.call(null,G__39810,G__39811));
})(),(function (){var G__39812 = power_value;
var G__39813 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39812,G__39813) : organisms.library.default_text.call(null,G__39812,G__39813));
})()], null);
});
});
entities.resources.views.create_new_resource = (function entities$resources$views$create_new_resource(conn){
return cljs.core.reset_BANG_(organisms.library.modal_content,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.resources.views.new_resource_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn], null),new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),(function (){
return cljs.core.reset_BANG_(organisms.library.text_input_map,cljs.core.PersistentArrayMap.EMPTY);
})], null));
});
entities.resources.views.resource_list_sfs_component = (function entities$resources$views$resource_list_sfs_component(list_key){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"auto"], null)], null),entities.resources.views.resource_list_search_bar(list_key),entities.resources.views.resource_list_simple_filters(list_key)], null);
});
entities.resources.views.add_resource_row_component = (function entities$resources$views$add_resource_row_component(conn,creature_id){
return (function (p__39814){
var map__39815 = p__39814;
var map__39815__$1 = cljs.core.__destructure_map(map__39815);
var resource = map__39815__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,new cljs.core.Keyword(null,"title","title",636505583));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39815__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var flex_vals = entities.resources.views.resource_flex_vals(true);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.resources.data.interface$.add_creature_resource.cljs$core$IFn$_invoke$arity$3 ? entities.resources.data.interface$.add_creature_resource.cljs$core$IFn$_invoke$arity$3(conn,creature_id,id) : entities.resources.data.interface$.add_creature_resource.call(null,conn,creature_id,id));
})], null),(function (){var G__39816 = title;
var G__39817 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39816,G__39817) : organisms.library.default_text.call(null,G__39816,G__39817));
})(),(function (){var G__39818 = quality_value;
var G__39819 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39818,G__39819) : organisms.library.default_text.call(null,G__39818,G__39819));
})(),(function (){var G__39820 = power_value;
var G__39821 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39820,G__39821) : organisms.library.default_text.call(null,G__39820,G__39821));
})()], null);
});
});
entities.resources.views.creature_resource_row_component = (function entities$resources$views$creature_resource_row_component(conn){
var flex_vals = entities.resources.views.resource_flex_vals(true);
return (function (p__39822){
var map__39823 = p__39822;
var map__39823__$1 = cljs.core.__destructure_map(map__39823);
var stuff = map__39823__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__39824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,new cljs.core.Keyword(null,"resource","resource",251898836));
var map__39824__$1 = cljs.core.__destructure_map(map__39824);
var resource = map__39824__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"title","title",636505583));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39824__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39823__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_(organisms.library.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.resources.views.creature_resource_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,resource,quantity], null)], null));
})], null),(function (){var G__39825 = title;
var G__39826 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39825,G__39826) : organisms.library.default_text.call(null,G__39825,G__39826));
})(),(function (){var G__39827 = quality_value;
var G__39828 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39827,G__39828) : organisms.library.default_text.call(null,G__39827,G__39828));
})(),(function (){var G__39829 = power_value;
var G__39830 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39829,G__39830) : organisms.library.default_text.call(null,G__39829,G__39830));
})(),entities.resources.views.creature_resource_quantity_column(conn,id,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(3)))], null);
});
});
entities.resources.views.get_disjunctive_filters = (function entities$resources$views$get_disjunctive_filters(active_filter_list){
if(cljs.core.truth_(cljs.core.not_empty(active_filter_list))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39831){
var vec__39832 = p__39831;
var filter_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(0),null);
var filter_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39832,(1),null);
if(cljs.core.truth_(filter_value)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(entities.resources.views.resource_type_filters_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
} else {
return null;
}
}),active_filter_list)))], null);
} else {
return null;
}
});
entities.resources.views.get_default_resource_where_vector = (function entities$resources$views$get_default_resource_where_vector(active_filter_list){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"resource"], null)], null),entities.resources.views.get_disjunctive_filters(active_filter_list)));
});
entities.resources.views.get_creature_resource_where_vector = (function entities$resources$views$get_creature_resource_where_vector(active_filter_list){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"creature-resource"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entities.resources.views.get_disjunctive_filters(active_filter_list)], 0)));
});
entities.resources.views.resource_search_filter_query = (function entities$resources$views$resource_search_filter_query(conn,active_resource_filter_lists,list_key){
var active_filter_list = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39835_SHARP_){
return cljs.core.last(p1__39835_SHARP_);
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_resource_filter_lists),list_key));
var creature_resources_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(list_key,"creature-resources");
var where_vector = ((creature_resources_QMARK_)?entities.resources.views.get_creature_resource_where_vector(active_filter_list):entities.resources.views.get_default_resource_where_vector(active_filter_list));
var resource_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39836 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),((creature_resources_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),where_vector], null);
var G__39837 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39836,G__39837) : datascript.core.q.call(null,G__39836,G__39837));
})());
var resources = (function (){var G__39838 = cljs.core.deref(conn);
var G__39839 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39840 = resource_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39838,G__39839,G__39840) : datascript.core.pull_many.call(null,G__39838,G__39839,G__39840));
})();
var search_applied_resources = entities.resources.views.resource_search_fn(resources,list_key);
if(creature_resources_QMARK_){
return entities.resources.views.sort_creature_resources_by_type(search_applied_resources);
} else {
return entities.resources.views.sort_resources_by_type.cljs$core$IFn$_invoke$arity$1(search_applied_resources);
}
});
entities.resources.views.resource_list = (function entities$resources$views$resource_list(conn,p__39841){
var map__39842 = p__39841;
var map__39842__$1 = cljs.core.__destructure_map(map__39842);
var search_filter_query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"search-filter-query","search-filter-query",-163807358));
var item_format_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887));
var new_item_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"new-item-fn","new-item-fn",-847841493));
var sort_manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230));
var sfs_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"sfs-component","sfs-component",-1971113144));
var quantity_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"quantity?","quantity?",-378141106));
var list_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39842__$1,new cljs.core.Keyword(null,"list-key","list-key",1563228021));
var flex_vals = entities.resources.views.resource_flex_vals(quantity_QMARK_);
var headers = (cljs.core.truth_(quantity_QMARK_)?entities.resources.views.creature_resource_column_headers:entities.resources.views.resource_column_headers);
var G__39843 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Resources",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),headers,new cljs.core.Keyword(null,"items","items",1031954938),(function (){var or__5045__auto__ = search_filter_query;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return entities.resources.views.resource_search_filter_query(conn,entities.resources.views.active_resource_filter_lists,(function (){var or__5045__auto____$1 = list_key;
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return "resources";
}
})());
}
})(),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (){var or__5045__auto__ = item_format_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return entities.resources.views.resource_row_component(conn,flex_vals);
}
})(),new cljs.core.Keyword(null,"new-item-fn","new-item-fn",-847841493),(function (){var or__5045__auto__ = new_item_fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (){
return entities.resources.views.create_new_resource(conn);
});
}
})(),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),sort_manager,new cljs.core.Keyword(null,"search-filter-sort-component","search-filter-sort-component",-852643056),(function (){var or__5045__auto__ = sfs_component;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return entities.resources.views.resource_list_sfs_component("resources");
}
})()], null);
var G__39844 = (1);
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__39843,G__39844) : organisms.library.search_filter_sort_list.call(null,G__39843,G__39844));
});
entities.resources.views.add_resource_to_creature_list = (function entities$resources$views$add_resource_to_creature_list(conn,creature_id){
var list_key = "add-resources";
return entities.resources.views.resource_list(conn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),entities.resources.views.add_resource_row_component(conn,creature_id),new cljs.core.Keyword(null,"new-item-fn","new-item-fn",-847841493),(function (){
return entities.resources.views.create_new_resource(conn);
}),new cljs.core.Keyword(null,"sfs-component","sfs-component",-1971113144),entities.resources.views.resource_list_sfs_component(list_key),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),entities.resources.views.creature_resource_sort_manager,new cljs.core.Keyword(null,"quantity?","quantity?",-378141106),false,new cljs.core.Keyword(null,"list-key","list-key",1563228021),list_key], null));
});
entities.resources.views.creature_resource_list = (function entities$resources$views$creature_resource_list(conn,creature_id){
var list_key = "creature-resources";
return entities.resources.views.resource_list(conn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),entities.resources.views.creature_resource_row_component(conn),new cljs.core.Keyword(null,"new-item-fn","new-item-fn",-847841493),(function (){
return cljs.core.reset_BANG_(organisms.library.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.resources.views.add_resource_to_creature_list,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,creature_id], null)], null));
}),new cljs.core.Keyword(null,"sfs-component","sfs-component",-1971113144),entities.resources.views.resource_list_sfs_component(list_key),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),entities.resources.views.creature_resource_sort_manager,new cljs.core.Keyword(null,"quantity?","quantity?",-378141106),true,new cljs.core.Keyword(null,"list-key","list-key",1563228021),list_key], null));
});
entities.resources.views.resources_main_page = (function entities$resources$views$resources_main_page(conn){
var list_key = "resources";
var flex_vals = entities.resources.views.resource_flex_vals(false);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),entities.resources.views.resource_list(conn,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),entities.resources.views.resource_row_component(conn,flex_vals),new cljs.core.Keyword(null,"sfs-component","sfs-component",-1971113144),entities.resources.views.resource_list_sfs_component(list_key),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),entities.resources.views.resource_sort_manager,new cljs.core.Keyword(null,"list-key","list-key",1563228021),list_key], null))], null);
});
entities.resources.views.resources = (function entities$resources$views$resources(conn,props){
return organisms.library.view_frame(conn,entities.resources.views.resources_main_page(conn),"resources-page");
});

//# sourceMappingURL=entities.resources.views.js.map
