goog.provide('entities.campaigns.data.core');
entities.campaigns.data.core.init_campaigns = (function entities$campaigns$data$core$init_campaigns(example_realms,example_rulesets,example_creatures,example_domains,example_resources){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("campaign","creatures","campaign/creatures",-1787082010),new cljs.core.Keyword("campaign","realms","campaign/realms",1843267464),new cljs.core.Keyword("campaign","default-ruleset","campaign/default-ruleset",879574379),new cljs.core.Keyword("campaign","resources","campaign/resources",1772725931),new cljs.core.Keyword("campaign","rulesets","campaign/rulesets",1761844621),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340),new cljs.core.Keyword("campaign","domains","campaign/domains",1538117143)],["campaign",example_creatures,example_realms,cljs.core.first(example_rulesets),example_resources,example_rulesets,"Fantasy",cljs.core.first(example_rulesets),example_domains]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign",new cljs.core.Keyword(null,"title","title",636505583),"Science Fiction"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign",new cljs.core.Keyword(null,"title","title",636505583),"Lovecraftian Horror"], null)], null);
});
entities.campaigns.data.core.get_ids_for_all_campaigns = (function entities$campaigns$data$core$get_ids_for_all_campaigns(conn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__37348 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign"], null)], null);
var G__37349 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__37348,G__37349) : datascript.core.q.call(null,G__37348,G__37349));
})());
});
entities.campaigns.data.core.get_all_campaigns = (function entities$campaigns$data$core$get_all_campaigns(var_args){
var G__37351 = arguments.length;
switch (G__37351) {
case 1:
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$1 = (function (conn){
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
}));

(entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2 = (function (conn,pull_pattern){
var G__37352 = cljs.core.deref(conn);
var G__37353 = pull_pattern;
var G__37354 = entities.campaigns.data.core.get_ids_for_all_campaigns(conn);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37352,G__37353,G__37354) : datascript.core.pull_many.call(null,G__37352,G__37353,G__37354));
}));

(entities.campaigns.data.core.get_all_campaigns.cljs$lang$maxFixedArity = 2);

entities.campaigns.data.core.get_campaign_details = (function entities$campaigns$data$core$get_campaign_details(var_args){
var G__37356 = arguments.length;
switch (G__37356) {
case 2:
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2 = (function (conn,campaign_id){
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3(conn,campaign_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
}));

(entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3 = (function (conn,campaign_id,pull_pattern){
var G__37357 = cljs.core.deref(conn);
var G__37358 = pull_pattern;
var G__37359 = campaign_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__37357,G__37358,G__37359) : datascript.core.pull.call(null,G__37357,G__37358,G__37359));
}));

(entities.campaigns.data.core.get_campaign_details.cljs$lang$maxFixedArity = 3);

entities.campaigns.data.core.get_campaign_titles = (function entities$campaigns$data$core$get_campaign_titles(conn){
var G__37360 = cljs.core.deref(conn);
var G__37361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"title","title",636505583)], null)], null);
var G__37362 = entities.campaigns.data.core.get_ids_for_all_campaigns(conn);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37360,G__37361,G__37362) : datascript.core.pull_many.call(null,G__37360,G__37361,G__37362));
});
entities.campaigns.data.core.get_active_campaign = (function entities$campaigns$data$core$get_active_campaign(conn){
var active_campaign_id = (function (){var G__37363 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?campaign","?campaign",-1946356173,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("active","campaign","active/campaign",-659970928),new cljs.core.Symbol(null,"?campaign","?campaign",-1946356173,null)], null)], null);
var G__37364 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__37363,G__37364) : datascript.core.q.call(null,G__37363,G__37364));
})();
if(cljs.core.empty_QMARK_(active_campaign_id)){
return null;
} else {
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.ffirst(active_campaign_id));
}
});
entities.campaigns.data.core.get_active_campaign_realms = (function entities$campaigns$data$core$get_active_campaign_realms(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37365 = cljs.core.deref(conn);
var G__37366 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37367 = new cljs.core.Keyword("campaign","realms","campaign/realms",1843267464).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37365,G__37366,G__37367) : datascript.core.pull_many.call(null,G__37365,G__37366,G__37367));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_rulesets = (function entities$campaigns$data$core$get_active_campaign_rulesets(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37368 = cljs.core.deref(conn);
var G__37369 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37370 = new cljs.core.Keyword("campaign","rulesets","campaign/rulesets",1761844621).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37368,G__37369,G__37370) : datascript.core.pull_many.call(null,G__37368,G__37369,G__37370));
} else {
return null;
}
});
entities.campaigns.data.core.get_campaign_active_ruleset = (function entities$campaigns$data$core$get_campaign_active_ruleset(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37371 = cljs.core.deref(conn);
var G__37372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37373 = new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__37371,G__37372,G__37373) : datascript.core.pull.call(null,G__37371,G__37372,G__37373));
} else {
return null;
}
});
entities.campaigns.data.core.set_campaign_active_ruleset = (function entities$campaigns$data$core$set_campaign_active_ruleset(conn,ruleset_id){
var temp__5825__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entities.campaigns.data.core.get_active_campaign(conn));
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_id = temp__5825__auto__;
var G__37374 = conn;
var G__37375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),active_campaign_id,new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340),ruleset_id], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__37374,G__37375) : datascript.core.transact_BANG_.call(null,G__37374,G__37375));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_creatures = (function entities$campaigns$data$core$get_active_campaign_creatures(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37376 = cljs.core.deref(conn);
var G__37377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37378 = new cljs.core.Keyword("campaign","creatures","campaign/creatures",-1787082010).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37376,G__37377,G__37378) : datascript.core.pull_many.call(null,G__37376,G__37377,G__37378));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_default_domains = (function entities$campaigns$data$core$get_active_campaign_default_domains(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37379 = cljs.core.deref(conn);
var G__37380 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37381 = new cljs.core.Keyword("campaign","domains","campaign/domains",1538117143).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37379,G__37380,G__37381) : datascript.core.pull_many.call(null,G__37379,G__37380,G__37381));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_resources = (function entities$campaigns$data$core$get_active_campaign_resources(conn){
var temp__5825__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_campaign_data = temp__5825__auto__;
var G__37382 = cljs.core.deref(conn);
var G__37383 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__37384 = new cljs.core.Keyword("campaign","resources","campaign/resources",1772725931).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__37382,G__37383,G__37384) : datascript.core.pull_many.call(null,G__37382,G__37383,G__37384));
} else {
return null;
}
});
entities.campaigns.data.core.set_active_campaign = (function entities$campaigns$data$core$set_active_campaign(conn,campaign_id){
var G__37385 = conn;
var G__37386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("active","campaign","active/campaign",-659970928),campaign_id], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__37385,G__37386) : datascript.core.transact_BANG_.call(null,G__37385,G__37386));
});

//# sourceMappingURL=entities.campaigns.data.core.js.map
