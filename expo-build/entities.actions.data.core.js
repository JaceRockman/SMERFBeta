goog.provide('entities.actions.data.core');
entities.actions.data.core.example_actions = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Physical Health Check",(13),"resilience-value",(0),"Endurance",(0),(13),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Spiritual Health Check",(14),"resilience-value",(0),"Perseverance",(0),(14),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Mental Health Check",(15),"resilience-value",(0),"Comprehension",(0),(15),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("action","target-number","action/target-number",-84058687),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Keyword("action","description","action/description",-1748671578),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067)],[(0),(1),"action",cljs.core.PersistentVector.EMPTY,"",(0),"Social Health Check",(16),"resilience-value",(0),"Connections",(0),(16),(0),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)])], null);
entities.actions.data.core.get_all_actions = (function entities$actions$data$core$get_all_actions(conn){
var action_eids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__30513 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("action","skill","action/skill",-596796714)], null)], null);
var G__30514 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__30513,G__30514) : datascript.core.q.call(null,G__30513,G__30514));
})());
var G__30517 = cljs.core.deref(conn);
var G__30518 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30519 = action_eids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__30517,G__30518,G__30519) : datascript.core.pull_many.call(null,G__30517,G__30518,G__30519));
});
entities.actions.data.core.get_action_data = (function entities$actions$data$core$get_action_data(conn,action_id){
var G__30528 = cljs.core.deref(conn);
var G__30529 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30530 = action_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__30528,G__30529,G__30530) : datascript.core.pull.call(null,G__30528,G__30529,G__30530));
});
entities.actions.data.core.get_splinters = (function entities$actions$data$core$get_splinters(conn,action_id){
return cljs.core.ffirst((function (){var G__30533 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?splinters","?splinters",409653506,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),new cljs.core.Symbol(null,"?splinters","?splinters",409653506,null)], null)], null);
var G__30534 = cljs.core.deref(conn);
var G__30535 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30533,G__30534,G__30535) : datascript.core.q.call(null,G__30533,G__30534,G__30535));
})());
});
entities.actions.data.core.reset_combinations = (function entities$actions$data$core$reset_combinations(conn,action_id){
var splinters = entities.actions.data.core.get_splinters(conn,action_id);
var G__30539 = conn;
var G__30540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(splinters,(0)))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30539,G__30540) : datascript.core.transact_BANG_.call(null,G__30539,G__30540));
});
entities.actions.data.core.reset_splinters = (function entities$actions$data$core$reset_splinters(conn,action_id){
var G__30550 = conn;
var G__30551 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),(1)], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30550,G__30551) : datascript.core.transact_BANG_.call(null,G__30550,G__30551));
});
entities.actions.data.core.get_selected_skill = (function entities$actions$data$core$get_selected_skill(conn,action_id){
return cljs.core.ffirst((function (){var G__30552 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?skill","?skill",1333631864,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","skill","action/skill",-596796714),new cljs.core.Symbol(null,"?skill","?skill",1333631864,null)], null)], null);
var G__30553 = cljs.core.deref(conn);
var G__30554 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30552,G__30553,G__30554) : datascript.core.q.call(null,G__30552,G__30553,G__30554));
})());
});
entities.actions.data.core.set_selected_skill = (function entities$actions$data$core$set_selected_skill(conn,action_id,skill){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30565 = conn;
var G__30566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","skill","action/skill",-596796714),skill], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30565,G__30566) : datascript.core.transact_BANG_.call(null,G__30565,G__30566));
});
entities.actions.data.core.get_selected_ability = (function entities$actions$data$core$get_selected_ability(conn,action_id){
return cljs.core.ffirst((function (){var G__30569 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?ability","?ability",951063982,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","ability","action/ability",1638929170),new cljs.core.Symbol(null,"?ability","?ability",951063982,null)], null)], null);
var G__30570 = cljs.core.deref(conn);
var G__30571 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30569,G__30570,G__30571) : datascript.core.q.call(null,G__30569,G__30570,G__30571));
})());
});
entities.actions.data.core.set_selected_ability = (function entities$actions$data$core$set_selected_ability(conn,action_id,ability){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30582 = conn;
var G__30583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","ability","action/ability",1638929170),ability], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30582,G__30583) : datascript.core.transact_BANG_.call(null,G__30582,G__30583));
});
entities.actions.data.core.get_selected_skill_domain = (function entities$actions$data$core$get_selected_skill_domain(conn,action_id){
return cljs.core.ffirst((function (){var G__30586 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domain","?domain",25870125,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),new cljs.core.Symbol(null,"?domain","?domain",25870125,null)], null)], null);
var G__30587 = cljs.core.deref(conn);
var G__30588 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30586,G__30587,G__30588) : datascript.core.q.call(null,G__30586,G__30587,G__30588));
})());
});
entities.actions.data.core.set_selected_skill_domain = (function entities$actions$data$core$set_selected_skill_domain(conn,action_id,domain_id){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30591 = conn;
var G__30592 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074),domain_id], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30591,G__30592) : datascript.core.transact_BANG_.call(null,G__30591,G__30592));
});
entities.actions.data.core.get_selected_ability_domain = (function entities$actions$data$core$get_selected_ability_domain(conn,action_id){
return cljs.core.ffirst((function (){var G__30595 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domain","?domain",25870125,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),new cljs.core.Symbol(null,"?domain","?domain",25870125,null)], null)], null);
var G__30596 = cljs.core.deref(conn);
var G__30597 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30595,G__30596,G__30597) : datascript.core.q.call(null,G__30595,G__30596,G__30597));
})());
});
entities.actions.data.core.set_selected_ability_domain = (function entities$actions$data$core$set_selected_ability_domain(conn,action_id,domain_id){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30606 = conn;
var G__30607 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167),domain_id], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30606,G__30607) : datascript.core.transact_BANG_.call(null,G__30606,G__30607));
});
entities.actions.data.core.get_selected_resources = (function entities$actions$data$core$get_selected_resources(conn,action_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__30609 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?resources","?resources",408081919,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","resources","action/resources",-1107023515),new cljs.core.Symbol(null,"?resources","?resources",408081919,null)], null)], null);
var G__30610 = cljs.core.deref(conn);
var G__30611 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30609,G__30610,G__30611) : datascript.core.q.call(null,G__30609,G__30610,G__30611));
})());
});
entities.actions.data.core.toggle_resource_selection = (function entities$actions$data$core$toggle_resource_selection(conn,resource_id,action_id){
var selected_resources = (function (){var or__5141__auto__ = entities.actions.data.core.get_selected_resources(conn,action_id);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(cljs.core.some((function (p1__30614_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(resource_id,p1__30614_SHARP_);
}),selected_resources))){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30617 = conn;
var G__30618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),action_id,new cljs.core.Keyword("action","resources","action/resources",-1107023515),resource_id], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30617,G__30618) : datascript.core.transact_BANG_.call(null,G__30617,G__30618));
} else {
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30621 = conn;
var G__30622 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","resources","action/resources",-1107023515),cljs.core.cons(resource_id,selected_resources)], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30621,G__30622) : datascript.core.transact_BANG_.call(null,G__30621,G__30622));
}
});
entities.actions.data.core.get_dice_penalties = (function entities$actions$data$core$get_dice_penalties(conn,action_id){
return cljs.core.ffirst((function (){var G__30624 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__30625 = cljs.core.deref(conn);
var G__30626 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30624,G__30625,G__30626) : datascript.core.q.call(null,G__30624,G__30625,G__30626));
})());
});
entities.actions.data.core.update_dice_penalties = (function entities$actions$data$core$update_dice_penalties(conn,action_id,update_fn){
var current_dice_penalty = entities.actions.data.core.get_dice_penalties(conn,action_id);
var updated_dice_penalty = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_dice_penalty) : update_fn.call(null,current_dice_penalty));
if(((0) <= updated_dice_penalty)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30634 = conn;
var G__30635 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","dice-penalty","action/dice-penalty",-1740248232),updated_dice_penalty], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30634,G__30635) : datascript.core.transact_BANG_.call(null,G__30634,G__30635));
} else {
return null;
}
});
entities.actions.data.core.get_dice_bonuses = (function entities$actions$data$core$get_dice_bonuses(conn,action_id){
return cljs.core.ffirst((function (){var G__30644 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__30645 = cljs.core.deref(conn);
var G__30646 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30644,G__30645,G__30646) : datascript.core.q.call(null,G__30644,G__30645,G__30646));
})());
});
entities.actions.data.core.update_dice_bonuses = (function entities$actions$data$core$update_dice_bonuses(conn,action_id,update_fn){
var current_dice_bonus = entities.actions.data.core.get_dice_bonuses(conn,action_id);
var updated_dice_bonus = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_dice_bonus) : update_fn.call(null,current_dice_bonus));
if(((0) <= updated_dice_bonus)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30655 = conn;
var G__30656 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","dice-bonus","action/dice-bonus",-1491367800),updated_dice_bonus], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30655,G__30656) : datascript.core.transact_BANG_.call(null,G__30655,G__30656));
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
return cljs.core.ffirst((function (){var G__30660 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__30661 = cljs.core.deref(conn);
var G__30662 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30660,G__30661,G__30662) : datascript.core.q.call(null,G__30660,G__30661,G__30662));
})());
});
entities.actions.data.core.update_flat_penalties = (function entities$actions$data$core$update_flat_penalties(conn,action_id,update_fn){
var current_flat_penalty = entities.actions.data.core.get_flat_penalties(conn,action_id);
var updated_flat_penalty = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_flat_penalty) : update_fn.call(null,current_flat_penalty));
if(((0) <= updated_flat_penalty)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30670 = conn;
var G__30671 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","flat-penalty","action/flat-penalty",-554918826),updated_flat_penalty], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30670,G__30671) : datascript.core.transact_BANG_.call(null,G__30670,G__30671));
} else {
return null;
}
});
entities.actions.data.core.get_flat_bonuses = (function entities$actions$data$core$get_flat_bonuses(conn,action_id){
return cljs.core.ffirst((function (){var G__30672 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),new cljs.core.Symbol(null,"?penalties","?penalties",2103515164,null)], null)], null);
var G__30673 = cljs.core.deref(conn);
var G__30674 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30672,G__30673,G__30674) : datascript.core.q.call(null,G__30672,G__30673,G__30674));
})());
});
entities.actions.data.core.update_flat_bonuses = (function entities$actions$data$core$update_flat_bonuses(conn,action_id,update_fn){
var current_flat_bonus = entities.actions.data.core.get_flat_bonuses(conn,action_id);
var updated_flat_bonus = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(current_flat_bonus) : update_fn.call(null,current_flat_bonus));
if(((0) <= updated_flat_bonus)){
entities.actions.data.core.reset_splinters(conn,action_id);

entities.actions.data.core.reset_combinations(conn,action_id);

var G__30675 = conn;
var G__30676 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","flat-bonus","action/flat-bonus",-1071628229),updated_flat_bonus], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30675,G__30676) : datascript.core.transact_BANG_.call(null,G__30675,G__30676));
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
var G__30681_30738 = conn;
var G__30682_30739 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022),updated_splinters], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30681_30738,G__30682_30739) : datascript.core.transact_BANG_.call(null,G__30681_30738,G__30682_30739));

return entities.actions.data.core.reset_combinations(conn,action_id);
} else {
return null;
}
});
entities.actions.data.core.update_combinations = (function entities$actions$data$core$update_combinations(conn,action_id,index,update_fn){
var current_combinations = cljs.core.vec(cljs.core.ffirst((function (){var G__30686 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?combinations","?combinations",1504317289,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?action-id","?action-id",-1774337860,null),new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),new cljs.core.Symbol(null,"?combinations","?combinations",1504317289,null)], null)], null);
var G__30687 = cljs.core.deref(conn);
var G__30688 = action_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__30686,G__30687,G__30688) : datascript.core.q.call(null,G__30686,G__30687,G__30688));
})()));
var dice_pool_to_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(new cljs.core.Keyword(null,"dice-pools","dice-pools",302237510).cljs$core$IFn$_invoke$arity$1((entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2 ? entities.actions.data.core.get_calculated_action_pool_info.cljs$core$IFn$_invoke$arity$2(conn,action_id) : entities.actions.data.core.get_calculated_action_pool_info.call(null,conn,action_id)))),index);
var min_combination = ((-1) * cljs.core.first(dice_pool_to_update));
var max_combination = (cljs.core.first(dice_pool_to_update) / (2));
var updated_combination = (function (){var G__30689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_combinations,index);
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__30689) : update_fn.call(null,G__30689));
})();
if((((min_combination <= updated_combination)) && ((updated_combination <= max_combination)))){
var G__30690 = conn;
var G__30691 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),action_id,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_combinations,index,updated_combination)], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__30690,G__30691) : datascript.core.transact_BANG_.call(null,G__30690,G__30691));
} else {
return null;
}
});
entities.actions.data.core.divide_evenly = (function entities$actions$data$core$divide_evenly(n,m){
var q = cljs.core.quot(n,m);
var r = cljs.core.rem(n,m);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((m - r),q),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(r,(q + (1))));
});
entities.actions.data.core.apply_combination = (function entities$actions$data$core$apply_combination(p__30692,combination){
var vec__30693 = p__30692;
var dice_quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30693,(0),null);
var dice_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30693,(1),null);
var dice_mod = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30693,(2),null);
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
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" + ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30698){
var vec__30701 = p__30698;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30701,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30701,(1),null);
var modifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30701,(2),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(quantity)+"d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((0) > modifier))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),modifier))?null:((((0) < modifier))?(""+" +"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(modifier)):null
)))));
}),pool));
});
entities.actions.data.core.format_dice_pools_text = (function entities$actions$data$core$format_dice_pools_text(pools){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(entities.actions.data.core.format_dice_pool_text,pools);
});
entities.actions.data.core.format_dice_pool_icons = (function entities$actions$data$core$format_dice_pool_icons(pool){
var total_modifier = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pool));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__30711){
var vec__30712 = p__30711;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (dice_size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.MaterialCommunityIcons,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(5),new cljs.core.Keyword(null,"name","name",1843675177),(""+"dice-d"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(dice_size)),new cljs.core.Keyword(null,"size","size",1098693007),(24),new cljs.core.Keyword(null,"color","color",1011675173),((((0) > quantity))?new cljs.core.Keyword(null,"black","black",1294279647):new cljs.core.Keyword(null,"white","white",-483998618))], null)], null);
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.abs(quantity),size))], null);
}),pool),(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),total_modifier))))?(function (){var G__30715 = ((((0) > total_modifier))?(""+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_modifier)):((((0) < total_modifier))?(""+" +"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(total_modifier)):null
));
var G__30716 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),null], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__30715,G__30716) : organisms.library.default_text.call(null,G__30715,G__30716));
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
var new_quantity = cljs.core.max.cljs$core$IFn$_invoke$arity$2(quantity,(1));
var new_size = ((((1) > quantity))?(size - ((2) * ((1) - quantity))):size);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_quantity,new_size], null);
}
});
entities.actions.data.core.get_calculated_action_pool_info = (function entities$actions$data$core$get_calculated_action_pool_info(conn,action_id){
var map__30718 = entities.actions.data.core.get_action_data(conn,action_id);
var map__30718__$1 = cljs.core.__destructure_map(map__30718);
var action_data = map__30718__$1;
var skill_domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","skill-domain","action/skill-domain",1362734074));
var skill = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","skill","action/skill",-596796714));
var ability_domain = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","ability-domain","action/ability-domain",-1801401167));
var ability = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","ability","action/ability",1638929170));
var resources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","resources","action/resources",-1107023515));
var splinters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","splinters","action/splinters",-1043913022));
var combinations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30718__$1,new cljs.core.Keyword("action","combinations","action/combinations",-1479768067));
var ruleset_stat_granularity = new cljs.core.Keyword("ruleset","stat-granularity","ruleset/stat-granularity",-1772995702).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
if(((cljs.core.integer_QMARK_(skill_domain)) && (cljs.core.integer_QMARK_(ability_domain)))){
var skill_domain_data = (function (){var G__30722 = cljs.core.deref(conn);
var G__30723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30724 = skill_domain;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__30722,G__30723,G__30724) : datascript.core.pull.call(null,G__30722,G__30723,G__30724));
})();
var ability_domain_data = (function (){var G__30725 = cljs.core.deref(conn);
var G__30726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30727 = ability_domain;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__30725,G__30726,G__30727) : datascript.core.pull.call(null,G__30725,G__30726,G__30727));
})();
var skill_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("domain",ruleset_stat_granularity))?(entities.rulesets.data.interface$.get_simple_domain_skill_value.cljs$core$IFn$_invoke$arity$2 ? entities.rulesets.data.interface$.get_simple_domain_skill_value.cljs$core$IFn$_invoke$arity$2(conn,skill_domain) : entities.rulesets.data.interface$.get_simple_domain_skill_value.call(null,conn,skill_domain)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(skill_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"domain/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(skill)))));
var ability_value = (function (){var G__30728 = ruleset_stat_granularity;
switch (G__30728) {
case "domain":
return (entities.rulesets.data.interface$.get_simple_domain_ability_value.cljs$core$IFn$_invoke$arity$2 ? entities.rulesets.data.interface$.get_simple_domain_ability_value.cljs$core$IFn$_invoke$arity$2(conn,skill_domain) : entities.rulesets.data.interface$.get_simple_domain_ability_value.call(null,conn,skill_domain));

break;
case "skillbility":
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(skill_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"domain/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability))));

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(ability_domain_data,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"domain/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability))));

}
})();
var resource_dice_mod = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("resource","quality-value","resource/quality-value",-1702050437),resources));
var resource_flat_mod = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("resource","power-value","resource/power-value",-1448641423),resources));
var dice_mod = entities.actions.data.core.get_dice_modifier(conn,action_id);
var flat_mod = entities.actions.data.core.get_flat_modifier(conn,action_id);
var dice_quantity = ((skill_value + resource_dice_mod) + dice_mod);
var vec__30719 = entities.actions.data.core.calc_quantity_and_size(dice_quantity,ability_value);
var base_dice_quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30719,(0),null);
var base_dice_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30719,(1),null);
var base_dice_mod = (flat_mod + resource_flat_mod);
var splintered_quantities = entities.actions.data.core.divide_evenly(base_dice_quantity,splinters);
var splintered_mods = entities.actions.data.core.divide_evenly(base_dice_mod,splinters);
var dice_pools = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,splintered_quantities,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(base_dice_size),splintered_mods);
var combined_dice_pools = cljs.core.map.cljs$core$IFn$_invoke$arity$3(entities.actions.data.core.apply_combination,dice_pools,combinations);
var formatted_dice_pools = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30717_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__30717_SHARP_);
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
var rolls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30729){
var vec__30730 = p__30729;
var quantity = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(0),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30730,(2),null);
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
