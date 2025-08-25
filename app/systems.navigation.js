goog.provide('systems.navigation');
systems.navigation.get_nav_history = (function systems$navigation$get_nav_history(conn){
var result = cljs.core.ffirst((function (){var G__39240 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?history","?history",118325671,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),new cljs.core.Symbol(null,"?history","?history",118325671,null)], null)], null);
var G__39241 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39240,G__39241) : datascript.core.q.call(null,G__39240,G__39241));
})());
return result;
});
systems.navigation.get_main_nav_state = (function systems$navigation$get_main_nav_state(conn){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(systems.navigation.get_nav_history(conn)),/\//)));
});
systems.navigation.get_main_nav_state_list = (function systems$navigation$get_main_nav_state_list(conn){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(systems.navigation.get_nav_history(conn)),/\//);
});
systems.navigation.get_current_nav_state_title = (function systems$navigation$get_current_nav_state_title(conn){
var current_nav_state = cljs.core.last(systems.navigation.get_main_nav_state_list(conn));
return clojure.string.capitalize((cljs.core.truth_(cljs.core.re_matches(/\d+/,current_nav_state))?cljs.core.ffirst((function (){var G__39242 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?title","?title",-835622503,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?title","?title",-835622503,null)], null)], null);
var G__39243 = cljs.core.deref(conn);
var G__39244 = (current_nav_state | (0));
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39242,G__39243,G__39244) : datascript.core.q.call(null,G__39242,G__39243,G__39244));
})()):current_nav_state));
});
systems.navigation.reset_temp_state = (function systems$navigation$reset_temp_state(){
cljs.core.reset_BANG_(organisms.compounds.search_filter_sort_list.external_search_text,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(organisms.compounds.search_filter_sort_list.collapse_state,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(organisms.molecules.scroll_position_indicator.ruleset_horizontal_position,(0));

return cljs.core.reset_BANG_(organisms.molecules.scroll_position_indicator.creature_horizontal_position,(0));
});
systems.navigation.navigate_BANG_ = (function systems$navigation$navigate_BANG_(conn,keyword_url){
systems.navigation.reset_temp_state();

var url = ((cljs.core.coll_QMARK_(keyword_url))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",keyword_url)):cljs.core.name(keyword_url));
var history__$1 = systems.navigation.get_nav_history(conn);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(history__$1),url)))){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(history__$1,url)], null)], null));
} else {
return null;
}
});
systems.navigation.subnavigate = (function systems$navigation$subnavigate(conn,subsection){
var main_state = cljs.core.name(systems.navigation.get_main_nav_state(conn));
var new_state = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_state,subsection], null);
return systems.navigation.navigate_BANG_(conn,new_state);
});
systems.navigation.subsubnavigate = (function systems$navigation$subsubnavigate(conn,subsubsection){
var main_state = systems.navigation.get_main_nav_state_list(conn);
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(main_state,(2),subsubsection);
return systems.navigation.navigate_BANG_(conn,new_state);
});
systems.navigation.nav_back = (function systems$navigation$nav_back(conn){
var history__$1 = systems.navigation.get_nav_history(conn);
var updated_history = ((((1) < cljs.core.count(history__$1)))?cljs.core.rest(history__$1):history__$1);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),(1),new cljs.core.Keyword("navigator","history","navigator/history",744551073),updated_history], null)], null));
});
systems.navigation.nav_out = (function systems$navigation$nav_out(conn){
var nav_state_list = systems.navigation.get_main_nav_state_list(conn);
var navigation_collection = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(nav_state_list)))?"campaigns":cljs.core.butlast(nav_state_list));
return systems.navigation.navigate_BANG_(conn,navigation_collection);
});
systems.navigation.get_modal_content = (function systems$navigation$get_modal_content(conn){
var content = (function (){var G__39245 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?content","?content",-956653715,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("modal","content","modal/content",-154830379),new cljs.core.Symbol(null,"?content","?content",-956653715,null)], null)], null);
var G__39246 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39245,G__39246) : datascript.core.q.call(null,G__39245,G__39246));
})();
if(cljs.core.truth_(cljs.core.not_empty(content))){
var G__39247 = cljs.core.deref(conn);
var G__39248 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39249 = cljs.core.ffirst(content);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39247,G__39248,G__39249) : datascript.core.pull.call(null,G__39247,G__39248,G__39249));
} else {
return null;
}
});
systems.navigation.set_modal_content = (function systems$navigation$set_modal_content(conn,content){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["setting modal content to",content], 0));

var modal_content_id = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(systems.navigation.get_modal_content(conn));
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(modal_content_id)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),modal_content_id,new cljs.core.Keyword("modal","content","modal/content",-154830379),content], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("modal","content","modal/content",-154830379),content], null))], null));
});
systems.navigation.clear_modal_content = (function systems$navigation$clear_modal_content(conn){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(systems.navigation.get_modal_content(conn))], null)], null));
});

//# sourceMappingURL=systems.navigation.js.map
