goog.provide('entities.actions.views');
entities.actions.views.filter_by_skills = (function entities$actions$views$filter_by_skills(actions,skills){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (action){
return cljs.core.some((function (p1__39613_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("action","skill","action/skill",-596796714).cljs$core$IFn$_invoke$arity$1(action),p1__39613_SHARP_);
}),skills);
}),actions);
});
entities.actions.views.sort_by_domain = (function entities$actions$views$sort_by_domain(actions){
var physical_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Coordination","Reflexes","Endurance"], null));
var spiritual_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exertion","Instinct","Perseverance"], null));
var mental_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concentration","Recognition","Comprehension"], null));
var social_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persuasion","Insight","Connections"], null));
return cljs.core.filterv((function (p1__39614_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__39614_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Physical",new cljs.core.Keyword(null,"data","data",-232669377),physical_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Spiritual",new cljs.core.Keyword(null,"data","data",-232669377),spiritual_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Mental",new cljs.core.Keyword(null,"data","data",-232669377),mental_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Social",new cljs.core.Keyword(null,"data","data",-232669377),social_actions], null)], null));
});
entities.actions.views.row_style_override = (function entities$actions$views$row_style_override(conn,action_id){
return (function (item){
var selected_skill_domain = (entities.actions.data.interface$.get_selected_skill_domain.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_skill_domain.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_skill_domain.call(null,conn,action_id));
var selected_skill_value_key = (entities.actions.data.interface$.get_selected_skill.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_skill.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_skill.call(null,conn,action_id));
var selected_ability_domain = (entities.actions.data.interface$.get_selected_ability_domain.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_ability_domain.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_ability_domain.call(null,conn,action_id));
var selected_ability_value_key = (entities.actions.data.interface$.get_selected_ability.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_ability.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_ability.call(null,conn,action_id));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_((function (){var or__5045__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item),selected_skill_domain)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item),selected_skill_value_key)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item),selected_ability_domain);
if(and__5043__auto__){
var and__5043__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item),selected_ability_value_key);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"surface-600","surface-600",896719945).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))),"80"].join(''):null)], null);
});
});
entities.actions.views.row_press_override = (function entities$actions$views$row_press_override(conn,action_id){
return (function (item){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item))){
var G__39639_39739 = conn;
var G__39640_39740 = action_id;
var G__39641_39741 = cljs.core.name(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item));
(entities.actions.data.interface$.set_selected_skill.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_skill.cljs$core$IFn$_invoke$arity$3(G__39639_39739,G__39640_39740,G__39641_39741) : entities.actions.data.interface$.set_selected_skill.call(null,G__39639_39739,G__39640_39740,G__39641_39741));

var G__39644_39742 = conn;
var G__39645_39743 = action_id;
var G__39646_39744 = new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item);
(entities.actions.data.interface$.set_selected_skill_domain.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_skill_domain.cljs$core$IFn$_invoke$arity$3(G__39644_39742,G__39645_39743,G__39646_39744) : entities.actions.data.interface$.set_selected_skill_domain.call(null,G__39644_39742,G__39645_39743,G__39646_39744));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item))){
var G__39649_39745 = conn;
var G__39650_39746 = action_id;
var G__39651_39747 = cljs.core.name(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item));
(entities.actions.data.interface$.set_selected_ability.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_ability.cljs$core$IFn$_invoke$arity$3(G__39649_39745,G__39650_39746,G__39651_39747) : entities.actions.data.interface$.set_selected_ability.call(null,G__39649_39745,G__39650_39746,G__39651_39747));

var G__39654 = conn;
var G__39655 = action_id;
var G__39656 = new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item);
return (entities.actions.data.interface$.set_selected_ability_domain.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_ability_domain.cljs$core$IFn$_invoke$arity$3(G__39654,G__39655,G__39656) : entities.actions.data.interface$.set_selected_ability_domain.call(null,G__39654,G__39655,G__39656));
} else {
return null;
}
});
});
});
entities.actions.views.new_resource = (function entities$actions$views$new_resource(){
return (organisms.library.hide_modal_content.cljs$core$IFn$_invoke$arity$0 ? organisms.library.hide_modal_content.cljs$core$IFn$_invoke$arity$0() : organisms.library.hide_modal_content.call(null));
});
entities.actions.views.resource = (function entities$actions$views$resource(conn,flex_vals,action_id,selected_resources){
return (function (p__39658){
var map__39659 = p__39658;
var map__39659__$1 = cljs.core.__destructure_map(map__39659);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39659__$1,new cljs.core.Keyword(null,"title","title",636505583));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39659__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39659__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["resource-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.some((function (p1__39657_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__39657_SHARP_);
}),selected_resources))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"surface-600","surface-600",896719945).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))),"80"].join(''):null)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.actions.data.interface$.toggle_resource_selection.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.toggle_resource_selection.cljs$core$IFn$_invoke$arity$3(conn,id,action_id) : entities.actions.data.interface$.toggle_resource_selection.call(null,conn,id,action_id));
})], null),(function (){var G__39660 = title;
var G__39661 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39660,G__39661) : organisms.library.default_text.call(null,G__39660,G__39661));
})(),(function (){var G__39662 = quality_value;
var G__39663 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39662,G__39663) : organisms.library.default_text.call(null,G__39662,G__39663));
})(),(function (){var G__39664 = power_value;
var G__39665 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39664,G__39665) : organisms.library.default_text.call(null,G__39664,G__39665));
})()], null);
});
});
entities.actions.views.external_search_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["action-resources",reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")], null));
entities.actions.views.action_resource_search_fn = (function entities$actions$views$action_resource_search_fn(creature_resources,component_key){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39666_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(p1__39666_SHARP_))),clojure.string.lower_case((function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.actions.views.external_search_text),component_key);
if(cljs.core.truth_(temp__5802__auto__)){
var search_text_atom = temp__5802__auto__;
return cljs.core.deref(search_text_atom);
} else {
return "";
}
})()));
}),creature_resources);
});
entities.actions.views.action_resource_list_search = (function entities$actions$views$action_resource_list_search(){
return (organisms.library.search_bar.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_bar.cljs$core$IFn$_invoke$arity$2(entities.actions.views.external_search_text,"action-resources") : organisms.library.search_bar.call(null,entities.actions.views.external_search_text,"action-resources"));
});
entities.actions.views.resource_multiselect_column_headers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Title",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39667_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39667_SHARP_,new cljs.core.Keyword(null,"title","title",636505583));
})], null),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Quality",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39668_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39668_SHARP_,new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437));
})], null),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Power",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__39669_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__39669_SHARP_,new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423));
})], null)], null);
entities.actions.views.action_resource_list_filters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["Equipment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"fist-raised","fist-raised",905824129),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Equipment"], null)], null),"Trait",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"eye","eye",-1788770007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Trait"], null)], null),"Expertise",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Expertise"], null)], null),"Affiliation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"user-friends","user-friends",-1511454783),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Affiliation"], null)], null),"Item",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Item"], null)], null)], null));
entities.actions.views.active_action_resource_list_filters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
entities.actions.views.type_section_from_resources = (function entities$actions$views$type_section_from_resources(type,resources){
var resource_type_section_data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("resource","type","resource/type",2041163162).cljs$core$IFn$_invoke$arity$1(p1__39670_SHARP_));
}),resources);
if(cljs.core.empty_QMARK_(resource_type_section_data)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),type,new cljs.core.Keyword(null,"data","data",-232669377),resource_type_section_data], null);
}
});
entities.actions.views.sort_resources_by_type = (function entities$actions$views$sort_resources_by_type(resources){
var equipment = entities.actions.views.type_section_from_resources("Equipment",resources);
var traits = entities.actions.views.type_section_from_resources("Trait",resources);
var expertise = entities.actions.views.type_section_from_resources("Expertise",resources);
var affiliations = entities.actions.views.type_section_from_resources("Affiliation",resources);
var items = entities.actions.views.type_section_from_resources("Item",resources);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [equipment,traits,expertise,affiliations,items], null));
});
entities.actions.views.action_resource_list_sorts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entities.actions.views.sort_resources_by_type], null));
entities.actions.views.toggle_action_resource_type_filter_button = (function entities$actions$views$toggle_action_resource_type_filter_button(resource_type){
var filter_on_QMARK_ = cljs.core.some((function (filter){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_type,filter);
}),cljs.core.deref(entities.actions.views.active_action_resource_list_filters));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(filter_on_QMARK_)?new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)):null),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"width","width",-384071477),"20%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(entities.actions.views.active_action_resource_list_filters,(function (filters){
if(cljs.core.truth_(filter_on_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (filter){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_type,filter);
}),filters);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(filters,resource_type);
}
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.actions.views.action_resource_list_filters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resource_type,new cljs.core.Keyword(null,"icon","icon",1679606541)], null)),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(filter_on_QMARK_)?new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)):new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
entities.actions.views.action_resource_list_simple_filters = (function entities$actions$views$action_resource_list_simple_filters(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),entities.actions.views.toggle_action_resource_type_filter_button("Equipment"),entities.actions.views.toggle_action_resource_type_filter_button("Trait"),entities.actions.views.toggle_action_resource_type_filter_button("Expertise"),entities.actions.views.toggle_action_resource_type_filter_button("Affiliation"),entities.actions.views.toggle_action_resource_type_filter_button("Item")], null);
});
entities.actions.views.action_resource_list_search_filter_sort_component = (function entities$actions$views$action_resource_list_search_filter_sort_component(flex_vals){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"auto"], null)], null),entities.actions.views.action_resource_list_search(),entities.actions.views.action_resource_list_simple_filters()], null);
});
entities.actions.views.resource_multiselect_list_query = (function entities$actions$views$resource_multiselect_list_query(conn){
var where_vector = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"resource"], null)], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(entities.actions.views.active_action_resource_list_filters)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39671_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.actions.views.action_resource_list_filters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39671_SHARP_,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
}),cljs.core.deref(entities.actions.views.active_action_resource_list_filters))))], null):null)));
var resource_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39674 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),where_vector], null);
var G__39675 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39674,G__39675) : datascript.core.q.call(null,G__39674,G__39675));
})());
var resources = (function (){var G__39676 = cljs.core.deref(conn);
var G__39677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39678 = resource_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39676,G__39677,G__39678) : datascript.core.pull_many.call(null,G__39676,G__39677,G__39678));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__39673_SHARP_,p2__39672_SHARP_){
return (p2__39672_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__39672_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__39673_SHARP_) : p2__39672_SHARP_.call(null,p1__39673_SHARP_));
}),entities.actions.views.action_resource_search_fn(resources,"resources"),cljs.core.deref(entities.actions.views.action_resource_list_sorts));
});
entities.actions.views.action_resource_sort_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),true,new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null));
entities.actions.views.resource_multi_select = (function entities$actions$views$resource_multi_select(conn,action_id,resources){
var flex_vals = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1)], null);
var selected_resources = (entities.actions.data.interface$.get_selected_resources.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_resources.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_resources.call(null,conn,action_id));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var G__39679 = "Select Resources";
var G__39680 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39679,G__39680) : organisms.library.default_text.call(null,G__39679,G__39680));
})(),(function (){var G__39681 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Resources",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),entities.actions.views.resource_multiselect_column_headers,new cljs.core.Keyword(null,"items","items",1031954938),entities.actions.views.resource_multiselect_list_query(conn),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (resource_data){
return entities.actions.views.resource(conn,flex_vals,action_id,selected_resources)(resource_data);
}),new cljs.core.Keyword(null,"search-filter-sort-component","search-filter-sort-component",-852643056),entities.actions.views.action_resource_list_search_filter_sort_component(flex_vals),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),entities.actions.views.action_resource_sort_manager], null);
var G__39682 = "resources";
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__39681,G__39682) : organisms.library.search_filter_sort_list.call(null,G__39681,G__39682));
})()], null);
});
entities.actions.views.roll_modifiers_tab = (function entities$actions$views$roll_modifiers_tab(conn,action_id){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(20)], null)], null),(function (){var G__39683 = "Circumstantial Modifiers";
var G__39684 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39683,G__39684) : organisms.library.default_text.call(null,G__39683,G__39684));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__39685 = ["Dice Modifier: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((entities.actions.data.interface$.get_dice_modifier.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_modifier.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_modifier.call(null,conn,action_id)))].join('');
var G__39686 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39685,G__39686) : organisms.library.default_text.call(null,G__39685,G__39686));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715)], null)], null),(function (){var G__39687 = "Penalties";
var G__39688 = (entities.actions.data.interface$.get_dice_penalties.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_penalties.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_penalties.call(null,conn,action_id));
var G__39689 = (function (){
return (entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_dice_penalties.call(null,conn,action_id,cljs.core.dec));
});
var G__39690 = (function (){
return (entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_dice_penalties.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__39687,G__39688,G__39689,G__39690) : organisms.library.decrementor_and_incrementor.call(null,G__39687,G__39688,G__39689,G__39690));
})(),(function (){var G__39691 = "Bonuses";
var G__39692 = (entities.actions.data.interface$.get_dice_bonuses.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_bonuses.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_bonuses.call(null,conn,action_id));
var G__39693 = (function (){
return (entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_dice_bonuses.call(null,conn,action_id,cljs.core.dec));
});
var G__39694 = (function (){
return (entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_dice_bonuses.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__39691,G__39692,G__39693,G__39694) : organisms.library.decrementor_and_incrementor.call(null,G__39691,G__39692,G__39693,G__39694));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__39695 = ["Flat Modifier: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((entities.actions.data.interface$.get_flat_modifier.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_modifier.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_modifier.call(null,conn,action_id)))].join('');
var G__39696 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39695,G__39696) : organisms.library.default_text.call(null,G__39695,G__39696));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715)], null)], null),(function (){var G__39697 = "Penalties";
var G__39698 = (entities.actions.data.interface$.get_flat_penalties.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_penalties.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_penalties.call(null,conn,action_id));
var G__39699 = (function (){
return (entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_flat_penalties.call(null,conn,action_id,cljs.core.dec));
});
var G__39700 = (function (){
return (entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_flat_penalties.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__39697,G__39698,G__39699,G__39700) : organisms.library.decrementor_and_incrementor.call(null,G__39697,G__39698,G__39699,G__39700));
})(),(function (){var G__39701 = "Bonuses";
var G__39702 = (entities.actions.data.interface$.get_flat_bonuses.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_bonuses.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_bonuses.call(null,conn,action_id));
var G__39703 = (function (){
return (entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_flat_bonuses.call(null,conn,action_id,cljs.core.dec));
});
var G__39704 = (function (){
return (entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_flat_bonuses.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__39701,G__39702,G__39703,G__39704) : organisms.library.decrementor_and_incrementor.call(null,G__39701,G__39702,G__39703,G__39704));
})()], null)], null)], null);
});
entities.actions.views.roll_splinters_tab = (function entities$actions$views$roll_splinters_tab(conn,action_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var G__39705 = "Select Dice Pools";
var G__39706 = (entities.actions.data.interface$.get_splinters.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_splinters.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_splinters.call(null,conn,action_id));
var G__39707 = (function (){
return (entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_splinters.call(null,conn,action_id,cljs.core.dec));
});
var G__39708 = (function (){
return (entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_splinters.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__39705,G__39706,G__39707,G__39708) : organisms.library.decrementor_and_incrementor.call(null,G__39705,G__39706,G__39707,G__39708));
})()], null);
});
entities.actions.views.pool_format = (function entities$actions$views$pool_format(index,p__39709){
var map__39710 = p__39709;
var map__39710__$1 = cljs.core.__destructure_map(map__39710);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39710__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39710__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39710__$1,new cljs.core.Keyword(null,"pool","pool",-1814211613));
var careful_or_reckless_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39710__$1,new cljs.core.Keyword(null,"careful-or-reckless?","careful-or-reckless?",548830276));
var pool_roll_button = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"surface-500","surface-500",-1315752688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(entities.actions.data.interface$.roll_dice_pool.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.roll_dice_pool.cljs$core$IFn$_invoke$arity$1(pool) : entities.actions.data.interface$.roll_dice_pool.call(null,pool))], 0));
})], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null)], null),(entities.actions.data.interface$.format_dice_pool_icons.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.format_dice_pool_icons.cljs$core$IFn$_invoke$arity$1(pool) : entities.actions.data.interface$.format_dice_pool_icons.call(null,pool))))], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"33%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(25)], null)], null),(cljs.core.truth_(careful_or_reckless_QMARK_)?(function (){var G__39711 = null;
var G__39712 = pool_roll_button;
var G__39713 = (function (){
return (entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4 ? entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4(conn,action_id,index,cljs.core.dec) : entities.actions.data.interface$.update_combinations.call(null,conn,action_id,index,cljs.core.dec));
});
var G__39714 = (function (){
return (entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4 ? entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4(conn,action_id,index,cljs.core.inc) : entities.actions.data.interface$.update_combinations.call(null,conn,action_id,index,cljs.core.inc));
});
var G__39715 = true;
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$5 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$5(G__39711,G__39712,G__39713,G__39714,G__39715) : organisms.library.decrementor_and_incrementor.call(null,G__39711,G__39712,G__39713,G__39714,G__39715));
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),pool_roll_button], null))], null);
});
entities.actions.views.pools_tab = (function entities$actions$views$pools_tab(conn,action_id,careful_or_reckless_QMARK_){
var pools = (entities.actions.data.interface$.get_combined_dice_pools.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_combined_dice_pools.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_combined_dice_pools.call(null,conn,action_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__39716 = (cljs.core.truth_(careful_or_reckless_QMARK_)?"Combine and Split Dice":"Roll Dice");
var G__39717 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39716,G__39717) : organisms.library.default_text.call(null,G__39716,G__39717));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(((pools == null))?(organisms.library.default_text.cljs$core$IFn$_invoke$arity$1 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$1("No Dice Pools Found") : organisms.library.default_text.call(null,"No Dice Pools Found")):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(entities.actions.views.pool_format,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (pool){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"conn","conn",278309663),conn,new cljs.core.Keyword(null,"action-id","action-id",-1727958578),action_id,new cljs.core.Keyword(null,"pool","pool",-1814211613),pool,new cljs.core.Keyword(null,"careful-or-reckless?","careful-or-reckless?",548830276),careful_or_reckless_QMARK_], null);
}),pools)))], null)], null);
});
entities.actions.views.construct_roll = (function entities$actions$views$construct_roll(conn,action_data,ruleset,domains,resources){
var stats = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Stats",new cljs.core.Keyword(null,"component","component",1555936782),entities.creatures.views.stats.stats(conn,domains,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"damage-hidden?","damage-hidden?",-2100240093),true,new cljs.core.Keyword(null,"row-press-override","row-press-override",297881763),entities.actions.views.row_press_override(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data)),new cljs.core.Keyword(null,"row-style-override","row-style-override",-1184003089),entities.actions.views.row_style_override(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data))], null))], null);
var resources__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Resources",new cljs.core.Keyword(null,"component","component",1555936782),entities.actions.views.resource_multi_select(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data),resources)], null);
var modifiers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Modifiers",new cljs.core.Keyword(null,"component","component",1555936782),entities.actions.views.roll_modifiers_tab(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data))], null);
var splinters = (cljs.core.truth_(new cljs.core.Keyword("ruleset","splintering","ruleset/splintering",-32986725).cljs$core$IFn$_invoke$arity$1(ruleset))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Shards",new cljs.core.Keyword(null,"component","component",1555936782),entities.actions.views.roll_splinters_tab(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data))], null):null);
var pools = (function (){var careful_or_reckless_QMARK_ = new cljs.core.Keyword("ruleset","careful-or-reckless","ruleset/careful-or-reckless",1291672693).cljs$core$IFn$_invoke$arity$1(ruleset);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"SplitOrMerge",new cljs.core.Keyword(null,"component","component",1555936782),entities.actions.views.pools_tab(conn,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data),careful_or_reckless_QMARK_)], null);
})();
var action_pages = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [stats,resources__$1,modifiers,splinters,pools], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__39718 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(action_data);
var G__39719 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39718,G__39719) : organisms.library.default_text.call(null,G__39718,G__39719));
})(),(function (){var G__39720 = (function (){var G__39722 = conn;
var G__39723 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data);
return (entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2(G__39722,G__39723) : entities.actions.data.interface$.get_fully_formatted_roll.call(null,G__39722,G__39723));
})();
var G__39721 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39720,G__39721) : organisms.library.default_text.call(null,G__39720,G__39721));
})(),(function (){var G__39724 = organisms.library.roll_horizontal_position;
var G__39725 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"header","header",119441134),action_pages);
var G__39726 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),action_pages);
return (organisms.library.indicated_scroll_view.cljs$core$IFn$_invoke$arity$3 ? organisms.library.indicated_scroll_view.cljs$core$IFn$_invoke$arity$3(G__39724,G__39725,G__39726) : organisms.library.indicated_scroll_view.call(null,G__39724,G__39725,G__39726));
})()], null);
});
entities.actions.views.save_action_roll = (function entities$actions$views$save_action_roll(conn,action_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Saved Action!"], 0));
})], null),(function (){var G__39727 = "Save!";
var G__39728 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39727,G__39728) : organisms.library.default_text.call(null,G__39727,G__39728));
})()], null);
});
entities.actions.views.action_constructor = (function entities$actions$views$action_constructor(conn,flex_vals,ruleset,domains,resources){
return (function (action_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.actions.views.construct_roll,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,action_data,ruleset,domains,resources], null),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),entities.actions.views.save_action_roll,new cljs.core.Keyword(null,"save-args","save-args",1563115312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,action_data], null)], null));
})], null),(function (){var G__39729 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(action_data);
var G__39730 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39729,G__39730) : organisms.library.default_text.call(null,G__39729,G__39730));
})(),(function (){var G__39731 = (function (){var G__39733 = conn;
var G__39734 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data);
return (entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2(G__39733,G__39734) : entities.actions.data.interface$.get_fully_formatted_roll.call(null,G__39733,G__39734));
})();
var G__39732 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39731,G__39732) : organisms.library.default_text.call(null,G__39731,G__39732));
})()], null);
});
});
entities.actions.views.action_list = (function entities$actions$views$action_list(conn,p__39735){
var map__39736 = p__39735;
var map__39736__$1 = cljs.core.__destructure_map(map__39736);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"header","header",119441134));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var non_sorted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"non-sorted?","non-sorted?",374995111));
var domains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"domains","domains",1410387719));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
var active_campaign_QMARK_ = (!(((entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign.call(null,conn)) == null)));
var ruleset = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)):(entities.rulesets.data.interface$.get_default_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.rulesets.data.interface$.get_default_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.rulesets.data.interface$.get_default_ruleset.call(null,conn)));
var default_domains = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_active_campaign_default_domains.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign_default_domains.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign_default_domains.call(null,conn)):(entities.rulesets.data.interface$.get_default_domains.cljs$core$IFn$_invoke$arity$1 ? entities.rulesets.data.interface$.get_default_domains.cljs$core$IFn$_invoke$arity$1(conn) : entities.rulesets.data.interface$.get_default_domains.call(null,conn)));
var default_resources = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_active_campaign_resources.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign_resources.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign_resources.call(null,conn)):(entities.resources.data.interface$.get_all_resources.cljs$core$IFn$_invoke$arity$1 ? entities.resources.data.interface$.get_all_resources.cljs$core$IFn$_invoke$arity$1(conn) : entities.resources.data.interface$.get_all_resources.call(null,conn)));
var flex_vals = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null);
var G__39737 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),header,new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Roll Value","Roll"], null),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_,new cljs.core.Keyword(null,"items","items",1031954938),((cljs.core.not(non_sorted_QMARK_))?entities.actions.views.sort_by_domain(actions):actions),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),entities.actions.views.action_constructor(conn,flex_vals,ruleset,(function (){var or__5045__auto__ = domains;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default_domains;
}
})(),(function (){var or__5045__auto__ = resources;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default_resources;
}
})())], null);
var G__39738 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"actions"].join('');
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__39737,G__39738) : organisms.library.search_filter_sort_list.call(null,G__39737,G__39738));
});
entities.actions.views.actions_details = (function entities$actions$views$actions_details(conn){
var actions = (entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1(conn) : entities.actions.data.interface$.get_all_actions.call(null,conn));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-text","align-text",-188686142),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),entities.actions.views.action_list(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null))], null);
});
entities.actions.views.actions = (function entities$actions$views$actions(conn,props){
return organisms.library.view_frame(conn,entities.actions.views.actions_details(conn),"actions-page");
});

//# sourceMappingURL=entities.actions.views.js.map
