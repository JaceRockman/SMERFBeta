goog.provide('entities.actions.data.core');
entities.actions.data.core.example_actions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Physical Health Check",(13),"resilience-value",(0),"Endurance",(0),(13),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Spiritual Health Check",(14),"resilience-value",(0),"Perseverance",(0),(14),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Mental Health Check",(15),"resilience-value",(0),"Comprehension",(0),(15),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Social Health Check",(16),"resilience-value",(0),"Connections",(0),(16),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)])], null);
entities.actions.data.core.get_all_actions = (function entities$actions$data$core$get_all_actions(conn){
var action_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39415 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("action","skill","action/skill",-596796714)], null)], null);
var G__39416 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39415,G__39416) : datascript.core.q.call(null,G__39415,G__39416));
})());
var G__39419 = cljs.core.deref(conn);
var G__39420 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39421 = action_eids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39419,G__39420,G__39421) : datascript.core.pull_many.call(null,G__39419,G__39420,G__39421));
});
entities.actions.data.core.get_action_data = (function entities$actions$data$core$get_action_data(conn,action_id){
var G__39424 = cljs.core.deref(conn);
var G__39425 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39426 = action_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39424,G__39425,G__39426) : datascript.core.pull.call(null,G__39424,G__39425,G__39426));
});
entities.actions.data.core.get_splinters = (function entities$actions$data$core$get_splinters(conn,action_id){
return cljs.core.ffirst((function (){var G__39429 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?splinters","?splinters",409653506,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Symbol(null,"?splinters","?splinters",409653506,null)], null)], null);
var G__39430 = cljs.core.deref(conn);
var G__39431 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39429,G__39430,G__39431) : datascript.core.q.call(null,G__39429,G__39430,G__39431));
})());
});
entities.actions.data.core.reset_combinations = (function entities$actions$data$core$reset_combinations(conn,action_id){
var splinters = entities.actions.data.core.get_splinters(conn,action_id);
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(splinters,(0)))], null)], null));
});
entities.actions.data.core.reset_splinters = (function entities$actions$data$core$reset_splinters(conn,action_id){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),(1)], null)], null));
});
entities.actions.data.core.get_selected_skill = (function entities$actions$data$core$get_selected_skill(conn,action_id){
return cljs.core.ffirst((function (){var G__39437 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?skill","?skill",1333631864,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Symbol(null,"?skill","?skill",1333631864,null)], null)], null);
var G__39438 = cljs.core.deref(conn);
var G__39439 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39437,G__39438,G__39439) : datascript.core.q.call(null,G__39437,G__39438,G__39439));
})());
});
entities.actions.data.core.set_selected_skill = (function entities$actions$data$core$set_selected_skill(conn,action_id,skill){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","skill","action/skill",-596796714),skill], null)], null));
});
entities.actions.data.core.get_selected_ability = (function entities$actions$data$core$get_selected_ability(conn,action_id){
return cljs.core.ffirst((function (){var G__39449 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ability","?ability",951063982,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Symbol(null,"?ability","?ability",951063982,null)], null)], null);
var G__39450 = cljs.core.deref(conn);
var G__39451 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39449,G__39450,G__39451) : datascript.core.q.call(null,G__39449,G__39450,G__39451));
})());
});
entities.actions.data.core.set_selected_ability = (function entities$actions$data$core$set_selected_ability(conn,action_id,ability){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","ability","action/ability",1638929170),ability], null)], null));
});
entities.actions.data.core.get_selected_skill_domain = (function entities$actions$data$core$get_selected_skill_domain(conn,action_id){
return cljs.core.ffirst((function (){var G__39469 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domain","?domain",25870125,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Symbol(null,"?domain","?domain",25870125,null)], null)], null);
var G__39470 = cljs.core.deref(conn);
var G__39471 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39469,G__39470,G__39471) : datascript.core.q.call(null,G__39469,G__39470,G__39471));
})());
});
entities.actions.data.core.set_selected_skill_domain = (function entities$actions$data$core$set_selected_skill_domain(conn,action_id,domain_id){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),domain_id], null)], null));
});
entities.actions.data.core.get_selected_ability_domain = (function entities$actions$data$core$get_selected_ability_domain(conn,action_id){
return cljs.core.ffirst((function (){var G__39486 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domain","?domain",25870125,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Symbol(null,"?domain","?domain",25870125,null)], null)], null);
var G__39487 = cljs.core.deref(conn);
var G__39488 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39486,G__39487,G__39488) : datascript.core.q.call(null,G__39486,G__39487,G__39488));
})());
});
entities.actions.data.core.set_selected_ability_domain = (function entities$actions$data$core$set_selected_ability_domain(conn,action_id,domain_id){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),domain_id], null)], null));
});
entities.actions.data.core.get_selected_resources = (function entities$actions$data$core$get_selected_resources(conn,action_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39495 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?resources","?resources",408081919,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Symbol(null,"?resources","?resources",408081919,null)], null)], null);
var G__39496 = cljs.core.deref(conn);
var G__39497 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39495,G__39496,G__39497) : datascript.core.q.call(null,G__39495,G__39496,G__39497));
})());
});
entities.actions.data.core.toggle_resource_selection = (function entities$actions$data$core$toggle_resource_selection(conn,resource_id,action_id){
var selected_resources = (function (){var or__5045__auto__ = entities.actions.data.core.get_selected_resources(conn,action_id);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(cljs.core.some((function (p1__39498_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,p1__39498_SHARP_);
}),selected_resources))){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),action_id,new cljs.core.Keyword("action","resources","action/resources",-1107023515),resource_id], null)], null));
} else {
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","resources","action/resources",-1107023515),cljs.core.cons(resource_id,selected_resources)], null)], null));
}
});
entities.actions.data.core.get_dice_penalties = (function entities$actions$data$core$get_dice_penalties(conn,action_id){
return cljs.core.ffirst((function (){var G__39505 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__39506 = cljs.core.deref(conn);
var G__39507 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39505,G__39506,G__39507) : datascript.core.q.call(null,G__39505,G__39506,G__39507));
})());
});
entities.actions.data.core.update_dice_penalties = (function entities$actions$data$core$update_dice_penalties(conn,action_id,update_fn){
var current_dice_penalty = entities.actions.data.core.get_dice_penalties(conn,action_id);
var updated_dice_penalty = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_dice_penalty) : update_fn.call(null,current_dice_penalty));
if(((0) <= updated_dice_penalty)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),updated_dice_penalty], null)], null));
} else {
return null;
}
});
entities.actions.data.core.get_dice_bonuses = (function entities$actions$data$core$get_dice_bonuses(conn,action_id){
return cljs.core.ffirst((function (){var G__39510 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__39511 = cljs.core.deref(conn);
var G__39512 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39510,G__39511,G__39512) : datascript.core.q.call(null,G__39510,G__39511,G__39512));
})());
});
entities.actions.data.core.update_dice_bonuses = (function entities$actions$data$core$update_dice_bonuses(conn,action_id,update_fn){
var current_dice_bonus = entities.actions.data.core.get_dice_bonuses(conn,action_id);
var updated_dice_bonus = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_dice_bonus) : update_fn.call(null,current_dice_bonus));
if(((0) <= updated_dice_bonus)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),updated_dice_bonus], null)], null));
} else {
return null;
}
});
entities.actions.data.core.get_dice_modifier = (function entities$actions$data$core$get_dice_modifier(conn,action_id){
var penalties = entities.actions.data.core.get_dice_penalties(conn,action_id);
var bonuses = entities.actions.data.core.get_dice_bonuses(conn,action_id);
return (bonuses - penalties);
});
entities.actions.data.core.get_flat_penalties = (function entities$actions$data$core$get_flat_penalties(conn,action_id){
return cljs.core.ffirst((function (){var G__39513 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__39514 = cljs.core.deref(conn);
var G__39515 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39513,G__39514,G__39515) : datascript.core.q.call(null,G__39513,G__39514,G__39515));
})());
});
entities.actions.data.core.update_flat_penalties = (function entities$actions$data$core$update_flat_penalties(conn,action_id,update_fn){
var current_flat_penalty = entities.actions.data.core.get_flat_penalties(conn,action_id);
var updated_flat_penalty = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_flat_penalty) : update_fn.call(null,current_flat_penalty));
if(((0) <= updated_flat_penalty)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),updated_flat_penalty], null)], null));
} else {
return null;
}
});
entities.actions.data.core.get_flat_bonuses = (function entities$actions$data$core$get_flat_bonuses(conn,action_id){
return cljs.core.ffirst((function (){var G__39517 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__39518 = cljs.core.deref(conn);
var G__39519 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39517,G__39518,G__39519) : datascript.core.q.call(null,G__39517,G__39518,G__39519));
})());
});
entities.actions.data.core.update_flat_bonuses = (function entities$actions$data$core$update_flat_bonuses(conn,action_id,update_fn){
var current_flat_bonus = entities.actions.data.core.get_flat_bonuses(conn,action_id);
var updated_flat_bonus = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_flat_bonus) : update_fn.call(null,current_flat_bonus));
if(((0) <= updated_flat_bonus)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),updated_flat_bonus], null)], null));
} else {
return null;
}
});
entities.actions.data.core.get_flat_modifier = (function entities$actions$data$core$get_flat_modifier(conn,action_id){
var penalties = entities.actions.data.core.get_flat_penalties(conn,action_id);
var bonuses = entities.actions.data.core.get_flat_bonuses(conn,action_id);
return (bonuses - penalties);
});
entities.actions.data.core.update_splinters = (function entities$actions$data$core$update_splinters(conn,action_id,update_fn){
var current_splinters = entities.actions.data.core.get_splinters(conn,action_id);
var updated_splinters = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_splinters) : update_fn.call(null,current_splinters));
var max_splinters = new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1((entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.core.get_calculated_action_pool_info.call(null,conn,action_id)));
if(((((1) <= updated_splinters)) && ((updated_splinters <= max_splinters)))){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),updated_splinters], null)], null));

return entities.actions.data.core.reset_combinations(conn,action_id);
} else {
return null;
}
});
entities.actions.data.core.update_combinations = (function entities$actions$data$core$update_combinations(conn,action_id,index,update_fn){
var current_combinations = cljs.core.vec(cljs.core.ffirst((function (){var G__39520 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?combinations","?combinations",1504317289,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),new cljs.core.Symbol(null,"?combinations","?combinations",1504317289,null)], null)], null);
var G__39521 = cljs.core.deref(conn);
var G__39522 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39520,G__39521,G__39522) : datascript.core.q.call(null,G__39520,G__39521,G__39522));
})()));
var dice_pool_to_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"dice-pools","dice-pools",302237510).cljs$core$IFn$_invoke$arity$1((entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.core.get_calculated_action_pool_info.call(null,conn,action_id)))),index);
var min_combination = ((-1) * cljs.core.first(dice_pool_to_update));
var max_combination = (cljs.core.first(dice_pool_to_update) / (2));
var updated_combination = (function (){var G__39523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_combinations,index);
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__39523) : update_fn.call(null,G__39523));
})();
if((((min_combination <= updated_combination)) && ((updated_combination <= max_combination)))){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_combinations,index,updated_combination)], null)], null));
} else {
return null;
}
});
entities.actions.data.core.divide_evenly = (function entities$actions$data$core$divide_evenly(n,m){
var q = cljs.core.quot(n,m);
var r = cljs.core.rem(n,m);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((m - r),q),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(r,(q + (1))));
});
entities.actions.data.core.apply_combination = (function entities$actions$data$core$apply_combination(p__39524,combination){
var vec__39525 = p__39524;
var dice_quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39525,(0),null);
var dice_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39525,(1),null);
var dice_mod = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39525,(2),null);
if((((combination == null)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),combination)) || ((((dice_quantity < ((-1) * combination))) || ((cljs.core.quot(dice_quantity,(2)) < combination)))))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_quantity,dice_size,dice_mod], null)], null);
} else {
if(((0) < combination)){
var new_quantities = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dice_quantity - ((2) * combination)),combination], null);
var new_dice_sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_size,(dice_size + (2))], null);
var new_mods = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),dice_mod], null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (qty,size,mod){
if(((0) < qty)){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[qty,size,mod],null));
} else {
return null;
}
}),new_quantities,new_dice_sizes,new_mods));
} else {
var number_of_splits = ((-1) * combination);
var new_quantities = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dice_quantity - number_of_splits),((2) * number_of_splits)], null);
var new_dice_sizes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dice_size,(dice_size - (2))], null);
var new_mods = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),dice_mod], null);
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (qty,size,mod){
if(((0) < qty)){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[qty,size,mod],null));
} else {
return null;
}
}),new_quantities,new_dice_sizes,new_mods));
}
}
});
entities.actions.data.core.format_dice_pool_text = (function entities$actions$data$core$format_dice_pool_text(pool){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" + ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39537){
var vec__39538 = p__39537;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(1),null);
var modifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39538,(2),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),((((0) > modifier))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),modifier))?null:((((0) < modifier))?[" +",cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)].join(''):null
)))].join('');
}),pool));
});
entities.actions.data.core.format_dice_pools_text = (function entities$actions$data$core$format_dice_pools_text(pools){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(entities.actions.data.core.format_dice_pool_text,pools);
});
entities.actions.data.core.format_dice_pool_icons = (function entities$actions$data$core$format_dice_pool_icons(pool){
var total_modifier = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pool));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39543){
var vec__39544 = p__39543;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39544,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39544,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39544,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dice_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.MaterialCommunityIcons,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(5),new cljs.core.Keyword(null,"name","name",1843675177),["dice-d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)].join(''),new cljs.core.Keyword(null,"size","size",1098693007),(24),new cljs.core.Keyword(null,"color","color",1011675173),((((0) > quantity))?new cljs.core.Keyword(null,"black","black",1294279647):new cljs.core.Keyword(null,"white","white",-483998618))], null)], null);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(quantity),size))], null);
}),pool),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),total_modifier))))?(function (){var G__39547 = ((((0) > total_modifier))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_modifier)].join(''):((((0) < total_modifier))?[" +",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_modifier)].join(''):null
));
var G__39548 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),null], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39547,G__39548) : organisms.library.default_text.call(null,G__39547,G__39548));
})():null));
});
entities.actions.data.core.format_dice_pools_icons = (function entities$actions$data$core$format_dice_pools_icons(pools){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(entities.actions.data.core.format_dice_pool_icons,pools);
});
entities.actions.data.core.calc_quantity_and_size = (function entities$actions$data$core$calc_quantity_and_size(quantity,size){
var size_level_diff = ((size / (2)) - (2));
var quantity_level_diff = (quantity - (1));
var total_diff = (size_level_diff + quantity_level_diff);
if(((0) > total_diff)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [quantity_level_diff,(4)], null);
} else {
var new_quantity = (function (){var x__5130__auto__ = quantity;
var y__5131__auto__ = (1);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})();
var new_size = ((((1) > quantity))?(size - ((2) * ((1) - quantity))):size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_quantity,new_size], null);
}
});
entities.actions.data.core.get_calculated_action_pool_info = (function entities$actions$data$core$get_calculated_action_pool_info(conn,action_id){
var map__39553 = entities.actions.data.core.get_action_data(conn,action_id);
var map__39553__$1 = cljs.core.__destructure_map(map__39553);
var action_data = map__39553__$1;
var skill_domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074));
var skill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","skill","action/skill",-596796714));
var ability_domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167));
var ability = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","ability","action/ability",1638929170));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","resources","action/resources",-1107023515));
var splinters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022));
var combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39553__$1,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067));
var ruleset_stat_granularity = new cljs.core.Keyword("ruleset","stat-granularity","ruleset/stat-granularity",-1772995702).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
if(((cljs.core.integer_QMARK_(skill_domain)) && (cljs.core.integer_QMARK_(ability_domain)))){
var skill_domain_data = (function (){var G__39559 = cljs.core.deref(conn);
var G__39560 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39561 = skill_domain;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39559,G__39560,G__39561) : datascript.core.pull.call(null,G__39559,G__39560,G__39561));
})();
var ability_domain_data = (function (){var G__39563 = cljs.core.deref(conn);
var G__39564 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39565 = ability_domain;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39563,G__39564,G__39565) : datascript.core.pull.call(null,G__39563,G__39564,G__39565));
})();
var skill_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("domain",ruleset_stat_granularity))?(entities.rulesets.data.interface$.get_simple_domain_skill_value.cljs$core$IFn$_invoke$arity$2 ? entities.rulesets.data.interface$.get_simple_domain_skill_value.cljs$core$IFn$_invoke$arity$2(conn,skill_domain) : entities.rulesets.data.interface$.get_simple_domain_skill_value.call(null,conn,skill_domain)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(skill_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["domain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(skill)].join(''))));
var ability_value = (function (){var G__39566 = ruleset_stat_granularity;
switch (G__39566) {
case "domain":
return (entities.rulesets.data.interface$.get_simple_domain_ability_value.cljs$core$IFn$_invoke$arity$2 ? entities.rulesets.data.interface$.get_simple_domain_ability_value.cljs$core$IFn$_invoke$arity$2(conn,skill_domain) : entities.rulesets.data.interface$.get_simple_domain_ability_value.call(null,conn,skill_domain));

break;
case "skillbility":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(skill_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["domain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability)].join('')));

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ability_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["domain/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability)].join('')));

}
})();
var resource_dice_mod = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437),resources));
var resource_flat_mod = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423),resources));
var dice_mod = entities.actions.data.core.get_dice_modifier(conn,action_id);
var flat_mod = entities.actions.data.core.get_flat_modifier(conn,action_id);
var dice_quantity = ((skill_value + resource_dice_mod) + dice_mod);
var vec__39556 = entities.actions.data.core.calc_quantity_and_size(dice_quantity,ability_value);
var base_dice_quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39556,(0),null);
var base_dice_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39556,(1),null);
var base_dice_mod = (flat_mod + resource_flat_mod);
var splintered_quantities = entities.actions.data.core.divide_evenly(base_dice_quantity,splinters);
var splintered_mods = entities.actions.data.core.divide_evenly(base_dice_mod,splinters);
var dice_pools = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,splintered_quantities,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(base_dice_size),splintered_mods);
var combined_dice_pools = cljs.core.map.cljs$core$IFn$_invoke$arity$3(entities.actions.data.core.apply_combination,dice_pools,combinations);
var formatted_dice_pools = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39551_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__39551_SHARP_);
}),entities.actions.data.core.format_dice_pools_text(combined_dice_pools))));
var formatted_dice_pools_icons = entities.actions.data.core.format_dice_pools_icons(combined_dice_pools);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"resource-dice-mod","resource-dice-mod",-1773892702),new cljs.core.Keyword(null,"formatted-dice-pools","formatted-dice-pools",269294468),new cljs.core.Keyword(null,"dice-pools","dice-pools",302237510),new cljs.core.Keyword(null,"splinter-sizes","splinter-sizes",456495818),new cljs.core.Keyword(null,"formatted-dice-pools-icons","formatted-dice-pools-icons",454961232),new cljs.core.Keyword(null,"modifier-flat-mod","modifier-flat-mod",922539440),new cljs.core.Keyword(null,"power","power",-937852079),new cljs.core.Keyword(null,"bonus","bonus",-1684391149),new cljs.core.Keyword(null,"resource-flat-mod","resource-flat-mod",-944816811),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.Keyword(null,"stat-quality","stat-quality",411492825),new cljs.core.Keyword(null,"stat-power","stat-power",-1650620551),new cljs.core.Keyword(null,"splinter-bonuses","splinter-bonuses",-1292156838),new cljs.core.Keyword(null,"modifier-dice-mod","modifier-dice-mod",-653949221),new cljs.core.Keyword(null,"combined-dice-pools","combined-dice-pools",-253428740)],[resource_dice_mod,formatted_dice_pools,dice_pools,splintered_quantities,formatted_dice_pools_icons,flat_mod,base_dice_size,base_dice_mod,resource_flat_mod,base_dice_quantity,skill_value,ability_value,splintered_mods,dice_mod,combined_dice_pools]);
} else {
return null;
}
});
entities.actions.data.core.get_dice_pools = (function entities$actions$data$core$get_dice_pools(conn,action_id){
return new cljs.core.Keyword(null,"dice-pools","dice-pools",302237510).cljs$core$IFn$_invoke$arity$1(entities.actions.data.core.get_calculated_action_pool_info(conn,action_id));
});
entities.actions.data.core.get_combined_dice_pools = (function entities$actions$data$core$get_combined_dice_pools(conn,action_id){
return new cljs.core.Keyword(null,"combined-dice-pools","combined-dice-pools",-253428740).cljs$core$IFn$_invoke$arity$1(entities.actions.data.core.get_calculated_action_pool_info(conn,action_id));
});
entities.actions.data.core.get_fully_formatted_roll = (function entities$actions$data$core$get_fully_formatted_roll(conn,action_id){
return new cljs.core.Keyword(null,"formatted-dice-pools","formatted-dice-pools",269294468).cljs$core$IFn$_invoke$arity$1(entities.actions.data.core.get_calculated_action_pool_info(conn,action_id));
});
entities.actions.data.core.roll_dice_pool = (function entities$actions$data$core$roll_dice_pool(pool){
var rolls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39580){
var vec__39581 = p__39580;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39581,(2),null);
var rolls = cljs.core.take.cljs$core$IFn$_invoke$arity$2(quantity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return (cljs.core.rand_int(size) + (1));
})));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rolls","rolls",598605463),rolls,new cljs.core.Keyword(null,"highest","highest",-410038656),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,rolls)], null);
}),pool);
var all_rolls = cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"highest","highest",-410038656),rolls));
var bonus = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pool));
var final_result = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,all_rolls) + bonus);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rolls","rolls",598605463),rolls,new cljs.core.Keyword(null,"bonus","bonus",-1684391149),bonus,new cljs.core.Keyword(null,"result","result",1415092211),final_result], null);
});

//# sourceMappingURL=entities.actions.data.core.js.map
