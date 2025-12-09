goog.provide('systems.navigation');
systems.navigation.get_nav_history = (function systems$navigation$get_nav_history(conn){
var result = cljs.core.ffirst((function (){var G__38528 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?history","?history",118325671,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),new cljs.core.Symbol(null,"?history","?history",118325671,null)], null)], null);
var G__38529 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38528,G__38529) : datascript.core.q.call(null,G__38528,G__38529));
})());
return result;
});
systems.navigation.get_nav_state = (function systems$navigation$get_nav_state(conn){
var temp__5825__auto__ = systems.navigation.get_nav_history(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var history__$1 = temp__5825__auto__;
return cljs.core.first(history__$1);
} else {
return null;
}
});
systems.navigation.get_current_nav_state_title = (function systems$navigation$get_current_nav_state_title(conn){
var map__38530 = systems.navigation.get_nav_state(conn);
var map__38530__$1 = cljs.core.__destructure_map(map__38530);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword(null,"page","page",849072397));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38530__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([page,query_params], 0));

return clojure.string.capitalize(((((0) < cljs.core.count(query_params)))?cljs.core.ffirst((function (){var G__38531 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__38532 = cljs.core.deref(conn);
var G__38533 = (cljs.core.first(query_params) | (0));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__38531,G__38532,G__38533) : datascript.core.q.call(null,G__38531,G__38532,G__38533));
})()):cljs.core.name(page)));
});
systems.navigation.reset_temp_state = (function systems$navigation$reset_temp_state(){
cljs.core.reset_BANG_(organisms.compounds.search_filter_sort_list.external_search_text,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(organisms.compounds.search_filter_sort_list.collapse_state,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(organisms.molecules.scroll_position_indicator.ruleset_horizontal_position,(0));

return cljs.core.reset_BANG_(organisms.molecules.scroll_position_indicator.creature_horizontal_position,(0));
});
systems.navigation.navigate_BANG_ = (function systems$navigation$navigate_BANG_(conn,p__38534){
var map__38535 = p__38534;
var map__38535__$1 = cljs.core.__destructure_map(map__38535);
var nav_state = map__38535__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535__$1,new cljs.core.Keyword(null,"page","page",849072397));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
systems.navigation.reset_temp_state();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["navigating to",nav_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([systems.navigation.get_nav_history(conn)], 0));

var history__$1 = systems.navigation.get_nav_history(conn);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.first(history__$1)),page)))){
var G__38536 = conn;
var G__38537 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),cljs.core.vec(cljs.core.cons(nav_state,history__$1))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38536,G__38537) : datascript.core.transact_BANG_.call(null,G__38536,G__38537));
} else {
return null;
}
});
systems.navigation.subnavigate_BANG_ = (function systems$navigation$subnavigate_BANG_(conn,nav_state){
var new_nav_state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([systems.navigation.get_nav_state(conn),nav_state], 0));
var history__$1 = systems.navigation.get_nav_history(conn);
var G__38538 = conn;
var G__38539 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),cljs.core.vec(cljs.core.cons(new_nav_state,history__$1))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38538,G__38539) : datascript.core.transact_BANG_.call(null,G__38538,G__38539));
});
systems.navigation.nav_back = (function systems$navigation$nav_back(conn){
if(((1) < cljs.core.count(systems.navigation.get_nav_history(conn)))){
var history__$1 = systems.navigation.get_nav_history(conn);
var updated_history = cljs.core.rest(history__$1);
var G__38540 = conn;
var G__38541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),updated_history], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38540,G__38541) : datascript.core.transact_BANG_.call(null,G__38540,G__38541));
} else {
return null;
}
});
systems.navigation.nav_out = (function systems$navigation$nav_out(conn){
var map__38542 = systems.navigation.get_nav_state(conn);
var map__38542__$1 = cljs.core.__destructure_map(map__38542);
var nav_state = map__38542__$1;
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,new cljs.core.Keyword(null,"page","page",849072397));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38542__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var outward_nav_state = (((((query_params == null)) || (cljs.core.empty_QMARK_(query_params))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"campaigns","campaigns",-1931854575)], null):cljs.core.update.cljs$core$IFn$_invoke$arity$3(nav_state,new cljs.core.Keyword(null,"query-params","query-params",900640534),cljs.core.butlast));
return systems.navigation.navigate_BANG_(conn,outward_nav_state);
});
systems.navigation.get_modal_content = (function systems$navigation$get_modal_content(conn){
var content = (function (){var G__38543 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("modal","content","modal/content",-154830379),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__38544 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38543,G__38544) : datascript.core.q.call(null,G__38543,G__38544));
})();
if(cljs.core.truth_(cljs.core.not_empty(content))){
var G__38545 = cljs.core.deref(conn);
var G__38546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38547 = cljs.core.ffirst(content);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__38545,G__38546,G__38547) : datascript.core.pull.call(null,G__38545,G__38546,G__38547));
} else {
return null;
}
});
systems.navigation.set_modal_content = (function systems$navigation$set_modal_content(conn,content){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setting modal content to",content], 0));

var modal_content_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(systems.navigation.get_modal_content(conn));
var G__38548 = conn;
var G__38549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(modal_content_id)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),modal_content_id,new cljs.core.Keyword("modal","content","modal/content",-154830379),content], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("modal","content","modal/content",-154830379),content], null))], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38548,G__38549) : datascript.core.transact_BANG_.call(null,G__38548,G__38549));
});
systems.navigation.clear_modal_content = (function systems$navigation$clear_modal_content(conn){
var G__38550 = conn;
var G__38551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(systems.navigation.get_modal_content(conn))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38550,G__38551) : datascript.core.transact_BANG_.call(null,G__38550,G__38551));
});

//# sourceMappingURL=systems.navigation.js.map
