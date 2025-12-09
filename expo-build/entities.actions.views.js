goog.provide('entities.actions.views');
entities.actions.views.filter_by_skills = (function entities$actions$views$filter_by_skills(actions,skills){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (action){
return cljs.core.some((function (p1__30733_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("action","skill","action/skill",-596796714).cljs$core$IFn$_invoke$arity$1(action),p1__30733_SHARP_);
}),skills);
}),actions);
});
entities.actions.views.sort_by_domain = (function entities$actions$views$sort_by_domain(actions){
var physical_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Coordination","Reflexes","Endurance"], null));
var spiritual_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exertion","Instinct","Perseverance"], null));
var mental_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Concentration","Recognition","Comprehension"], null));
var social_actions = entities.actions.views.filter_by_skills(actions,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Persuasion","Insight","Connections"], null));
return cljs.core.filterv((function (p1__30734_SHARP_){
return cljs.core.not_empty(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__30734_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Physical",new cljs.core.Keyword(null,"data","data",-232669377),physical_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Spiritual",new cljs.core.Keyword(null,"data","data",-232669377),spiritual_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Mental",new cljs.core.Keyword(null,"data","data",-232669377),mental_actions], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Social",new cljs.core.Keyword(null,"data","data",-232669377),social_actions], null)], null));
});
entities.actions.views.row_style_override = (function entities$actions$views$row_style_override(conn,action_id){
return (function (item){
var selected_skill_domain = (entities.actions.data.interface$.get_selected_skill_domain.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_skill_domain.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_skill_domain.call(null,conn,action_id));
var selected_skill_value_key = (entities.actions.data.interface$.get_selected_skill.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_skill.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_skill.call(null,conn,action_id));
var selected_ability_domain = (entities.actions.data.interface$.get_selected_ability_domain.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_ability_domain.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_ability_domain.call(null,conn,action_id));
var selected_ability_value_key = (entities.actions.data.interface$.get_selected_ability.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_ability.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_ability.call(null,conn,action_id));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_((function (){var or__5141__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item),selected_skill_domain)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item),selected_skill_value_key)));
if(or__5141__auto__){
return or__5141__auto__;
} else {
var and__5139__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item),selected_ability_domain);
if(and__5139__auto__){
var and__5139__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(and__5139__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item),selected_ability_value_key);
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
}
})())?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"surface-600","surface-600",896719945).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)))+"80"):null)], null);
});
});
entities.actions.views.row_press_override = (function entities$actions$views$row_press_override(conn,action_id){
return (function (item){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item))){
var G__30735_30833 = conn;
var G__30736_30834 = action_id;
var G__30737_30835 = cljs.core.name(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item));
(entities.actions.data.interface$.set_selected_skill.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_skill.cljs$core$IFn$_invoke$arity$3(G__30735_30833,G__30736_30834,G__30737_30835) : entities.actions.data.interface$.set_selected_skill.call(null,G__30735_30833,G__30736_30834,G__30737_30835));

var G__30740_30836 = conn;
var G__30741_30837 = action_id;
var G__30742_30838 = new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item);
(entities.actions.data.interface$.set_selected_skill_domain.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_skill_domain.cljs$core$IFn$_invoke$arity$3(G__30740_30836,G__30741_30837,G__30742_30838) : entities.actions.data.interface$.set_selected_skill_domain.call(null,G__30740_30836,G__30741_30837,G__30742_30838));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item))){
var G__30743_30839 = conn;
var G__30744_30840 = action_id;
var G__30745_30841 = cljs.core.name(new cljs.core.Keyword(null,"power-key","power-key",-403308292).cljs$core$IFn$_invoke$arity$1(item));
(entities.actions.data.interface$.set_selected_ability.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_ability.cljs$core$IFn$_invoke$arity$3(G__30743_30839,G__30744_30840,G__30745_30841) : entities.actions.data.interface$.set_selected_ability.call(null,G__30743_30839,G__30744_30840,G__30745_30841));

var G__30746 = conn;
var G__30747 = action_id;
var G__30748 = new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item);
return (entities.actions.data.interface$.set_selected_ability_domain.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.set_selected_ability_domain.cljs$core$IFn$_invoke$arity$3(G__30746,G__30747,G__30748) : entities.actions.data.interface$.set_selected_ability_domain.call(null,G__30746,G__30747,G__30748));
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
return (function (p__30750){
var map__30751 = p__30750;
var map__30751__$1 = cljs.core.__destructure_map(map__30751);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30751__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30751__$1,new cljs.core.Keyword(null,"title","title",636505583));
var quality_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30751__$1,new cljs.core.Keyword(null,"quality-value","quality-value",540051845));
var power_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30751__$1,new cljs.core.Keyword(null,"power-value","power-value",-581715901));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"resource-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_(cljs.core.some((function (p1__30749_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,p1__30749_SHARP_);
}),selected_resources))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"surface-600","surface-600",896719945).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)))+"80"):null)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.actions.data.interface$.toggle_resource_selection.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.toggle_resource_selection.cljs$core$IFn$_invoke$arity$3(conn,id,action_id) : entities.actions.data.interface$.toggle_resource_selection.call(null,conn,id,action_id));
})], null),(function (){var G__30752 = title;
var G__30753 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30752,G__30753) : organisms.library.default_text.call(null,G__30752,G__30753));
})(),(function (){var G__30754 = quality_value;
var G__30755 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30754,G__30755) : organisms.library.default_text.call(null,G__30754,G__30755));
})(),(function (){var G__30756 = power_value;
var G__30757 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30756,G__30757) : organisms.library.default_text.call(null,G__30756,G__30757));
})()], null);
});
});
entities.actions.views.external_search_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, ["action-resources",reagent.core.atom.cljs$core$IFn$_invoke$arity$1("")], null));
entities.actions.views.action_resource_search_fn = (function entities$actions$views$action_resource_search_fn(creature_resources,component_key){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30758_SHARP_){
return clojure.string.includes_QMARK_(clojure.string.lower_case(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.vals(p1__30758_SHARP_))),clojure.string.lower_case((function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.actions.views.external_search_text),component_key);
if(cljs.core.truth_(temp__5823__auto__)){
var search_text_atom = temp__5823__auto__;
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
entities.actions.views.resource_multiselect_column_headers = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Title",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__30760_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30760_SHARP_,new cljs.core.Keyword(null,"title","title",636505583));
})], null),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Quality",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__30762_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30762_SHARP_,new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437));
})], null),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"header","header",119441134),"Power",new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011),(function (p1__30763_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__30763_SHARP_,new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423));
})], null)], null);
entities.actions.views.action_resource_list_filters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, ["Equipment",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"fist-raised","fist-raised",905824129),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Equipment"], null)], null),"Trait",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"eye","eye",-1788770007),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Trait"], null)], null),"Expertise",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"brain","brain",428499577),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Expertise"], null)], null),"Affiliation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"user-friends","user-friends",-1511454783),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Affiliation"], null)], null),"Item",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"suitcase","suitcase",-801872906),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword("resource","type","resource/type",2041163162),"Item"], null)], null)], null));
entities.actions.views.active_action_resource_list_filters = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
entities.actions.views.type_section_from_resources = (function entities$actions$views$type_section_from_resources(type,resources){
var resource_type_section_data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30764_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("resource","type","resource/type",2041163162).cljs$core$IFn$_invoke$arity$1(p1__30764_SHARP_));
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
var where_vector = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"resource"], null)], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(entities.actions.views.active_action_resource_list_filters)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null)], null),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30765_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(entities.actions.views.action_resource_list_filters),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30765_SHARP_,new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
}),cljs.core.deref(entities.actions.views.active_action_resource_list_filters))))], null):null)));
var resource_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__30768 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?resource-id","?resource-id",1439255238,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),where_vector], null);
var G__30769 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__30768,G__30769) : datascript.core.q.call(null,G__30768,G__30769));
})());
var resources = (function (){var G__30770 = cljs.core.deref(conn);
var G__30771 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30772 = resource_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__30770,G__30771,G__30772) : datascript.core.pull_many.call(null,G__30770,G__30771,G__30772));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30767_SHARP_,p2__30766_SHARP_){
return (p2__30766_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__30766_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__30767_SHARP_) : p2__30766_SHARP_.call(null,p1__30767_SHARP_));
}),entities.actions.views.action_resource_search_fn(resources,"resources"),cljs.core.deref(entities.actions.views.action_resource_list_sorts));
});
entities.actions.views.action_resource_sort_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),true,new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null));
entities.actions.views.resource_multi_select = (function entities$actions$views$resource_multi_select(conn,action_id,resources){
var flex_vals = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1)], null);
var selected_resources = (entities.actions.data.interface$.get_selected_resources.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_selected_resources.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_selected_resources.call(null,conn,action_id));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var G__30773 = "Select Resources";
var G__30774 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30773,G__30774) : organisms.library.default_text.call(null,G__30773,G__30774));
})(),(function (){var G__30775 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),"Resources",new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),entities.actions.views.resource_multiselect_column_headers,new cljs.core.Keyword(null,"items","items",1031954938),entities.actions.views.resource_multiselect_list_query(conn),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (resource_data){
return entities.actions.views.resource(conn,flex_vals,action_id,selected_resources)(resource_data);
}),new cljs.core.Keyword(null,"search-filter-sort-component","search-filter-sort-component",-852643056),entities.actions.views.action_resource_list_search_filter_sort_component(flex_vals),new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230),entities.actions.views.action_resource_sort_manager], null);
var G__30776 = "resources";
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__30775,G__30776) : organisms.library.search_filter_sort_list.call(null,G__30775,G__30776));
})()], null);
});
entities.actions.views.roll_modifiers_tab = (function entities$actions$views$roll_modifiers_tab(conn,action_id){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"gap","gap",80255254),(20),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(20)], null)], null),(function (){var G__30777 = "Circumstantial Modifiers";
var G__30778 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30777,G__30778) : organisms.library.default_text.call(null,G__30777,G__30778));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__30779 = (""+"Dice Modifier: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((entities.actions.data.interface$.get_dice_modifier.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_modifier.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_modifier.call(null,conn,action_id))));
var G__30780 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30779,G__30780) : organisms.library.default_text.call(null,G__30779,G__30780));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715)], null)], null),(function (){var G__30781 = "Penalties";
var G__30782 = (entities.actions.data.interface$.get_dice_penalties.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_penalties.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_penalties.call(null,conn,action_id));
var G__30783 = (function (){
return (entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_dice_penalties.call(null,conn,action_id,cljs.core.dec));
});
var G__30784 = (function (){
return (entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_dice_penalties.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__30781,G__30782,G__30783,G__30784) : organisms.library.decrementor_and_incrementor.call(null,G__30781,G__30782,G__30783,G__30784));
})(),(function (){var G__30785 = "Bonuses";
var G__30786 = (entities.actions.data.interface$.get_dice_bonuses.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_dice_bonuses.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_dice_bonuses.call(null,conn,action_id));
var G__30787 = (function (){
return (entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_dice_bonuses.call(null,conn,action_id,cljs.core.dec));
});
var G__30788 = (function (){
return (entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_dice_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_dice_bonuses.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__30785,G__30786,G__30787,G__30788) : organisms.library.decrementor_and_incrementor.call(null,G__30785,G__30786,G__30787,G__30788));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__30789 = (""+"Flat Modifier: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((entities.actions.data.interface$.get_flat_modifier.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_modifier.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_modifier.call(null,conn,action_id))));
var G__30790 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30789,G__30790) : organisms.library.default_text.call(null,G__30789,G__30790));
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"space-evenly","space-evenly",-998758715)], null)], null),(function (){var G__30791 = "Penalties";
var G__30792 = (entities.actions.data.interface$.get_flat_penalties.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_penalties.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_penalties.call(null,conn,action_id));
var G__30793 = (function (){
return (entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_flat_penalties.call(null,conn,action_id,cljs.core.dec));
});
var G__30794 = (function (){
return (entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_penalties.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_flat_penalties.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__30791,G__30792,G__30793,G__30794) : organisms.library.decrementor_and_incrementor.call(null,G__30791,G__30792,G__30793,G__30794));
})(),(function (){var G__30795 = "Bonuses";
var G__30796 = (entities.actions.data.interface$.get_flat_bonuses.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_flat_bonuses.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_flat_bonuses.call(null,conn,action_id));
var G__30797 = (function (){
return (entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_flat_bonuses.call(null,conn,action_id,cljs.core.dec));
});
var G__30798 = (function (){
return (entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_flat_bonuses.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_flat_bonuses.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__30795,G__30796,G__30797,G__30798) : organisms.library.decrementor_and_incrementor.call(null,G__30795,G__30796,G__30797,G__30798));
})()], null)], null)], null);
});
entities.actions.views.roll_splinters_tab = (function entities$actions$views$roll_splinters_tab(conn,action_id){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var G__30799 = "Select Dice Pools";
var G__30800 = (entities.actions.data.interface$.get_splinters.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_splinters.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_splinters.call(null,conn,action_id));
var G__30801 = (function (){
return (entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.dec) : entities.actions.data.interface$.update_splinters.call(null,conn,action_id,cljs.core.dec));
});
var G__30802 = (function (){
return (entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3 ? entities.actions.data.interface$.update_splinters.cljs$core$IFn$_invoke$arity$3(conn,action_id,cljs.core.inc) : entities.actions.data.interface$.update_splinters.call(null,conn,action_id,cljs.core.inc));
});
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$4(G__30799,G__30800,G__30801,G__30802) : organisms.library.decrementor_and_incrementor.call(null,G__30799,G__30800,G__30801,G__30802));
})()], null);
});
entities.actions.views.pool_format = (function entities$actions$views$pool_format(index,p__30803){
var map__30804 = p__30803;
var map__30804__$1 = cljs.core.__destructure_map(map__30804);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"conn","conn",278309663));
var action_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"action-id","action-id",-1727958578));
var pool = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"pool","pool",-1814211613));
var careful_or_reckless_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30804__$1,new cljs.core.Keyword(null,"careful-or-reckless?","careful-or-reckless?",548830276));
var pool_roll_button = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"padding","padding",1660304693),(5),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"surface-500","surface-500",-1315752688).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(4)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(entities.actions.data.interface$.roll_dice_pool.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.roll_dice_pool.cljs$core$IFn$_invoke$arity$1(pool) : entities.actions.data.interface$.roll_dice_pool.call(null,pool))], 0));
})], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null)], null),(entities.actions.data.interface$.format_dice_pool_icons.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.format_dice_pool_icons.cljs$core$IFn$_invoke$arity$1(pool) : entities.actions.data.interface$.format_dice_pool_icons.call(null,pool))))], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"33%",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(25)], null)], null),(cljs.core.truth_(careful_or_reckless_QMARK_)?(function (){var G__30805 = null;
var G__30806 = pool_roll_button;
var G__30807 = (function (){
return (entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4 ? entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4(conn,action_id,index,cljs.core.dec) : entities.actions.data.interface$.update_combinations.call(null,conn,action_id,index,cljs.core.dec));
});
var G__30808 = (function (){
return (entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4 ? entities.actions.data.interface$.update_combinations.cljs$core$IFn$_invoke$arity$4(conn,action_id,index,cljs.core.inc) : entities.actions.data.interface$.update_combinations.call(null,conn,action_id,index,cljs.core.inc));
});
var G__30809 = true;
return (organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$5 ? organisms.library.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$5(G__30805,G__30806,G__30807,G__30808,G__30809) : organisms.library.decrementor_and_incrementor.call(null,G__30805,G__30806,G__30807,G__30808,G__30809));
})():new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),pool_roll_button], null))], null);
});
entities.actions.views.pools_tab = (function entities$actions$views$pools_tab(conn,action_id,careful_or_reckless_QMARK_){
var pools = (entities.actions.data.interface$.get_combined_dice_pools.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_combined_dice_pools.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.interface$.get_combined_dice_pools.call(null,conn,action_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,(function (){var G__30810 = (cljs.core.truth_(careful_or_reckless_QMARK_)?"Combine and Split Dice":"Roll Dice");
var G__30811 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30810,G__30811) : organisms.library.default_text.call(null,G__30810,G__30811));
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
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),(function (){var G__30812 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(action_data);
var G__30813 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30812,G__30813) : organisms.library.default_text.call(null,G__30812,G__30813));
})(),(function (){var G__30814 = (function (){var G__30816 = conn;
var G__30817 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data);
return (entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2(G__30816,G__30817) : entities.actions.data.interface$.get_fully_formatted_roll.call(null,G__30816,G__30817));
})();
var G__30815 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30814,G__30815) : organisms.library.default_text.call(null,G__30814,G__30815));
})(),(function (){var G__30818 = organisms.library.roll_horizontal_position;
var G__30819 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"header","header",119441134),action_pages);
var G__30820 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component","component",1555936782),action_pages);
return (organisms.library.indicated_scroll_view.cljs$core$IFn$_invoke$arity$3 ? organisms.library.indicated_scroll_view.cljs$core$IFn$_invoke$arity$3(G__30818,G__30819,G__30820) : organisms.library.indicated_scroll_view.call(null,G__30818,G__30819,G__30820));
})()], null);
});
entities.actions.views.save_action_roll = (function entities$actions$views$save_action_roll(conn,action_data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Saved Action!"], 0));
})], null),(function (){var G__30821 = "Save!";
var G__30822 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30821,G__30822) : organisms.library.default_text.call(null,G__30821,G__30822));
})()], null);
});
entities.actions.views.action_constructor = (function entities$actions$views$action_constructor(conn,flex_vals,ruleset,domains,resources){
return (function (action_data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(10),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.actions.views.construct_roll,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,action_data,ruleset,domains,resources], null),new cljs.core.Keyword(null,"save-fn","save-fn",383840986),entities.actions.views.save_action_roll,new cljs.core.Keyword(null,"save-args","save-args",1563115312),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,action_data], null)], null));
})], null),(function (){var G__30823 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(action_data);
var G__30824 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30823,G__30824) : organisms.library.default_text.call(null,G__30823,G__30824));
})(),(function (){var G__30825 = (function (){var G__30827 = conn;
var G__30828 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(action_data);
return (entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.interface$.get_fully_formatted_roll.cljs$core$IFn$_invoke$arity$2(G__30827,G__30828) : entities.actions.data.interface$.get_fully_formatted_roll.call(null,G__30827,G__30828));
})();
var G__30826 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30825,G__30826) : organisms.library.default_text.call(null,G__30825,G__30826));
})()], null);
});
});
entities.actions.views.action_list = (function entities$actions$views$action_list(conn,p__30829){
var map__30830 = p__30829;
var map__30830__$1 = cljs.core.__destructure_map(map__30830);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"header","header",119441134));
var collapsed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
var non_sorted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"non-sorted?","non-sorted?",374995111));
var domains = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"domains","domains",1410387719));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30830__$1,new cljs.core.Keyword(null,"resources","resources",1632806811));
var active_campaign_QMARK_ = (!(((entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign.call(null,conn)) == null)));
var ruleset = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)):(entities.rulesets.data.interface$.get_default_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.rulesets.data.interface$.get_default_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.rulesets.data.interface$.get_default_ruleset.call(null,conn)));
var default_domains = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_active_campaign_default_domains.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign_default_domains.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign_default_domains.call(null,conn)):(entities.rulesets.data.interface$.get_default_domains.cljs$core$IFn$_invoke$arity$1 ? entities.rulesets.data.interface$.get_default_domains.cljs$core$IFn$_invoke$arity$1(conn) : entities.rulesets.data.interface$.get_default_domains.call(null,conn)));
var default_resources = ((active_campaign_QMARK_)?(entities.campaigns.data.interface$.get_active_campaign_resources.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_active_campaign_resources.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_active_campaign_resources.call(null,conn)):(entities.resources.data.interface$.get_all_resources.cljs$core$IFn$_invoke$arity$1 ? entities.resources.data.interface$.get_all_resources.cljs$core$IFn$_invoke$arity$1(conn) : entities.resources.data.interface$.get_all_resources.call(null,conn)));
var flex_vals = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2),(1)], null);
var G__30831 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-header","list-header",-862823076),header,new cljs.core.Keyword(null,"column-flex-vals","column-flex-vals",-637482818),flex_vals,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Roll Value","Roll"], null),new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),collapsed_QMARK_,new cljs.core.Keyword(null,"items","items",1031954938),((cljs.core.not(non_sorted_QMARK_))?entities.actions.views.sort_by_domain(actions):actions),new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),entities.actions.views.action_constructor(conn,flex_vals,ruleset,(function (){var or__5141__auto__ = domains;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return default_domains;
}
})(),(function (){var or__5141__auto__ = resources;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return default_resources;
}
})())], null);
var G__30832 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"actions");
return (organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2 ? organisms.library.search_filter_sort_list.cljs$core$IFn$_invoke$arity$2(G__30831,G__30832) : organisms.library.search_filter_sort_list.call(null,G__30831,G__30832));
});
entities.actions.views.actions_details = (function entities$actions$views$actions_details(conn){
var actions = (entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1(conn) : entities.actions.data.interface$.get_all_actions.call(null,conn));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"align-text","align-text",-188686142),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),entities.actions.views.action_list(conn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null))], null);
});
entities.actions.views.actions = (function entities$actions$views$actions(conn,props){
return organisms.library.view_frame(conn,entities.actions.views.actions_details(conn),"actions-page");
});

//# sourceMappingURL=entities.actions.views.js.map
