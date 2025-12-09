goog.provide('organisms.molecules.lists');
organisms.molecules.lists.sort_manager = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
organisms.molecules.lists.simplify_sort_order = (function organisms$molecules$lists$simplify_sort_order(sort_manager){
var sorts_in_order = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (sort_value){
return new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last(sort_value));
}),cljs.core.deref(sort_manager));
return cljs.core.reset_BANG_(sort_manager,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,p__28885){
var vec__28887 = p__28885;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28887,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"order","order",-1254677256),(idx + (1)))], null);
}),sorts_in_order)));
});
organisms.molecules.lists.toggle_sort_manager = (function organisms$molecules$lists$toggle_sort_manager(sort_manager,header_key){
var G__28893 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_manager),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_key,new cljs.core.Keyword(null,"asc?","asc?",891093427)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__28893)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_manager,(function (p1__28890_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28890_SHARP_,header_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc?","asc?",891093427),true,new cljs.core.Keyword(null,"order","order",-1254677256),(cljs.core.count(cljs.core.deref(sort_manager)) + (1))], null));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__28893)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_manager,(function (p1__28891_SHARP_){
return cljs.core.assoc_in(p1__28891_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_key,new cljs.core.Keyword(null,"asc?","asc?",891093427)], null),false);
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28893)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(sort_manager,(function (p1__28892_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28892_SHARP_,header_key);
}));

return organisms.molecules.lists.simplify_sort_order(sort_manager);
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28893))));

}
}
}
});
organisms.molecules.lists.section_separator = (function organisms$molecules$lists$section_separator(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null);
});
organisms.molecules.lists.item_separator = (function organisms$molecules$lists$item_separator(){
return (function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null));
});
});
organisms.molecules.lists.SectionList = (function organisms$molecules$lists$SectionList(p__28902){
var map__28903 = p__28902;
var map__28903__$1 = cljs.core.__destructure_map(map__28903);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var flex_vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"flex-vals","flex-vals",1874330255));
var item_format_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887));
var sort_manager = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"sort-manager","sort-manager",502299230));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.SectionList,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"sections","sections",-886710106),cljs.core.clj__GT_js((cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(sort_manager)))?(function (){var ordered_sort_list = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (sort_value){
return new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last(sort_value));
}),cljs.core.deref(sort_manager));
var column_sort_list = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__28906){
var vec__28907 = p__28906;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28907,(1),null);
var sort_criteria = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011)], null));
return (function (p1__28899_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_criteria,(cljs.core.truth_(new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(v))?cljs.core._LT_:cljs.core._GT_),p1__28899_SHARP_);
});
}),ordered_sort_list);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (section){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(section,new cljs.core.Keyword(null,"data","data",-232669377),(function (section_data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28901_SHARP_,p2__28900_SHARP_){
return (p2__28900_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__28900_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__28901_SHARP_) : p2__28900_SHARP_.call(null,p1__28901_SHARP_));
}),section_data,cljs.core.reverse(column_sort_list));
}));
}),items);
})():items)),new cljs.core.Keyword(null,"render-section-header","render-section-header",572553705),(function (section){
var clj_section = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(section));
var clj_section_title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(clj_section));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null)], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic(clj_section_title,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20),new cljs.core.Keyword(null,"padding","padding",1660304693),(10)], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__28919,flex){
var vec__28920 = p__28919;
var header_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28920,(0),null);
var header_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28920,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex,new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(15),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(15)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return organisms.molecules.lists.toggle_sort_manager(sort_manager,header_key);
})], null),organisms.atoms.text.default_text(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(header_data)),(function (){var map__28923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(sort_manager),header_key);
var map__28923__$1 = cljs.core.__destructure_map(map__28923);
var asc_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28923__$1,new cljs.core.Keyword(null,"asc?","asc?",891093427));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28923__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
var G__28925 = asc_QMARK_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__28925)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chevron-up","chevron-up",622486702),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),"50%"], null)], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic(order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"30%"], null)], 0))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28925)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chevron-down","chevron-down",1154032101),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),"50%"], null)], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic(order,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"30%"], null)], 0))], null);
} else {
return null;

}
}
})()], null);
}),headers,flex_vals)], null),organisms.molecules.lists.section_separator()], null));
}),new cljs.core.Keyword(null,"render-item","render-item",-1805124071),(function (js_item){
var clj_item = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_item.item);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__28931 = clojure.walk.keywordize_keys(clj_item);
return (item_format_fn.cljs$core$IFn$_invoke$arity$1 ? item_format_fn.cljs$core$IFn$_invoke$arity$1(G__28931) : item_format_fn.call(null,G__28931));
})());
}),new cljs.core.Keyword(null,"ItemSeparatorComponent","ItemSeparatorComponent",1006101526),organisms.molecules.lists.item_separator(),new cljs.core.Keyword(null,"key-extractor","key-extractor",-553322464),(function (js_item){
var clj_item = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_item));
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clj_item);
}),new cljs.core.Keyword(null,"listEmptyComponent","listEmptyComponent",877092983),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(organisms.atoms.text.default_text("No Items"));
}),new cljs.core.Keyword(null,"sticky-section-headers-enabled","sticky-section-headers-enabled",74492714),true], null)], null);
});
organisms.molecules.lists.FlatList = (function organisms$molecules$lists$FlatList(p__28935){
var map__28936 = p__28935;
var map__28936__$1 = cljs.core.__destructure_map(map__28936);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var flex_vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"flex-vals","flex-vals",1874330255));
var item_format_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28936__$1,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.FlatList,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.clj__GT_js((cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(organisms.molecules.lists.sort_manager)))?(function (){var ordered_sort_list = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (sort_value){
return new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.last(sort_value));
}),cljs.core.deref(organisms.molecules.lists.sort_manager));
var column_sort_list = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__28942){
var vec__28943 = p__28942;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28943,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28943,(1),null);
var sort_criteria = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(headers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011)], null));
return (function (p1__28932_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(sort_criteria,(cljs.core.truth_(new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(v))?cljs.core._LT_:cljs.core._GT_),p1__28932_SHARP_);
});
}),ordered_sort_list);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28934_SHARP_,p2__28933_SHARP_){
return (p2__28933_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__28933_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__28934_SHARP_) : p2__28933_SHARP_.call(null,p1__28934_SHARP_));
}),items,column_sort_list);
})():items)),new cljs.core.Keyword(null,"ListHeaderComponent","ListHeaderComponent",-1363711184),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__28951,flex){
var vec__28952 = p__28951;
var header_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(0),null);
var header_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28952,(1),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),flex], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return organisms.molecules.lists.toggle_sort_manager(organisms.molecules.lists.sort_manager,header_key);
})], null),organisms.atoms.text.default_text(new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(header_data)),(function (){var header_toggle_val = new cljs.core.Keyword(null,"asc?","asc?",891093427).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.molecules.lists.sort_manager),header_key));
var G__28955 = header_toggle_val;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__28955)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chevron-up","chevron-up",622486702),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__28955)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chevron-down","chevron-down",1154032101),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(10)], null)], null);
} else {
return null;

}
}
})()], null);
}),headers,flex_vals)], null));
}),new cljs.core.Keyword(null,"render-item","render-item",-1805124071),(function (js_item){
var clj_item = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_item.item);
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((function (){var G__28957 = clojure.walk.keywordize_keys(clj_item);
return (item_format_fn.cljs$core$IFn$_invoke$arity$1 ? item_format_fn.cljs$core$IFn$_invoke$arity$1(G__28957) : item_format_fn.call(null,G__28957));
})());
}),new cljs.core.Keyword(null,"ItemSeparatorComponent","ItemSeparatorComponent",1006101526),organisms.molecules.lists.item_separator(),new cljs.core.Keyword(null,"key-extractor","key-extractor",-553322464),(function (js_item){
var clj_item = clojure.walk.keywordize_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(js_item));
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(clj_item);
}),new cljs.core.Keyword(null,"ListEmptyComponent","ListEmptyComponent",-726187473),(function (){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null)], null),"No Items"], null));
})], null)], null);
});

//# sourceMappingURL=organisms.molecules.lists.js.map
