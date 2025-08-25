goog.provide('entities.campaigns.data.core');
entities.campaigns.data.core.init_campaigns = (function entities$campaigns$data$core$init_campaigns(example_realms,example_rulesets,example_creatures,example_domains,example_resources){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("campaign","creatures","campaign/creatures",-1787082010),new cljs.core.Keyword("campaign","realms","campaign/realms",1843267464),new cljs.core.Keyword("campaign","default-ruleset","campaign/default-ruleset",879574379),new cljs.core.Keyword("campaign","resources","campaign/resources",1772725931),new cljs.core.Keyword("campaign","rulesets","campaign/rulesets",1761844621),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340),new cljs.core.Keyword("campaign","domains","campaign/domains",1538117143)],["campaign",example_creatures,example_realms,cljs.core.first(example_rulesets),example_resources,example_rulesets,"Fantasy",cljs.core.first(example_rulesets),example_domains]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign",new cljs.core.Keyword(null,"title","title",636505583),"Science Fiction"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign",new cljs.core.Keyword(null,"title","title",636505583),"Lovecraftian Horror"], null)], null);
});
entities.campaigns.data.core.get_ids_for_all_campaigns = (function entities$campaigns$data$core$get_ids_for_all_campaigns(conn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39088 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"campaign"], null)], null);
var G__39089 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39088,G__39089) : datascript.core.q.call(null,G__39088,G__39089));
})());
});
entities.campaigns.data.core.get_all_campaigns = (function entities$campaigns$data$core$get_all_campaigns(var_args){
var G__39121 = arguments.length;
switch (G__39121) {
case 1:
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$1 = (function (conn){
return entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
}));

(entities.campaigns.data.core.get_all_campaigns.cljs$core$IFn$_invoke$arity$2 = (function (conn,pull_pattern){
var G__39136 = cljs.core.deref(conn);
var G__39137 = pull_pattern;
var G__39138 = entities.campaigns.data.core.get_ids_for_all_campaigns(conn);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39136,G__39137,G__39138) : datascript.core.pull_many.call(null,G__39136,G__39137,G__39138));
}));

(entities.campaigns.data.core.get_all_campaigns.cljs$lang$maxFixedArity = 2);

entities.campaigns.data.core.get_campaign_details = (function entities$campaigns$data$core$get_campaign_details(var_args){
var G__39146 = arguments.length;
switch (G__39146) {
case 2:
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2 = (function (conn,campaign_id){
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3(conn,campaign_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null));
}));

(entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$3 = (function (conn,campaign_id,pull_pattern){
var G__39165 = cljs.core.deref(conn);
var G__39166 = pull_pattern;
var G__39167 = campaign_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39165,G__39166,G__39167) : datascript.core.pull.call(null,G__39165,G__39166,G__39167));
}));

(entities.campaigns.data.core.get_campaign_details.cljs$lang$maxFixedArity = 3);

entities.campaigns.data.core.get_campaign_titles = (function entities$campaigns$data$core$get_campaign_titles(conn){
var G__39186 = cljs.core.deref(conn);
var G__39187 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"title","title",636505583)], null)], null);
var G__39188 = entities.campaigns.data.core.get_ids_for_all_campaigns(conn);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39186,G__39187,G__39188) : datascript.core.pull_many.call(null,G__39186,G__39187,G__39188));
});
entities.campaigns.data.core.get_active_campaign = (function entities$campaigns$data$core$get_active_campaign(conn){
var active_campaign_id = (function (){var G__39193 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?campaign","?campaign",-1946356173,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("active","campaign","active/campaign",-659970928),new cljs.core.Symbol(null,"?campaign","?campaign",-1946356173,null)], null)], null);
var G__39194 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39193,G__39194) : datascript.core.q.call(null,G__39193,G__39194));
})();
if(cljs.core.empty_QMARK_(active_campaign_id)){
return null;
} else {
return entities.campaigns.data.core.get_campaign_details.cljs$core$IFn$_invoke$arity$2(conn,cljs.core.ffirst(active_campaign_id));
}
});
entities.campaigns.data.core.get_active_campaign_realms = (function entities$campaigns$data$core$get_active_campaign_realms(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39203 = cljs.core.deref(conn);
var G__39204 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39205 = new cljs.core.Keyword("campaign","realms","campaign/realms",1843267464).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39203,G__39204,G__39205) : datascript.core.pull_many.call(null,G__39203,G__39204,G__39205));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_rulesets = (function entities$campaigns$data$core$get_active_campaign_rulesets(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39209 = cljs.core.deref(conn);
var G__39210 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39211 = new cljs.core.Keyword("campaign","rulesets","campaign/rulesets",1761844621).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39209,G__39210,G__39211) : datascript.core.pull_many.call(null,G__39209,G__39210,G__39211));
} else {
return null;
}
});
entities.campaigns.data.core.get_campaign_active_ruleset = (function entities$campaigns$data$core$get_campaign_active_ruleset(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39217 = cljs.core.deref(conn);
var G__39218 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39219 = new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39217,G__39218,G__39219) : datascript.core.pull.call(null,G__39217,G__39218,G__39219));
} else {
return null;
}
});
entities.campaigns.data.core.set_campaign_active_ruleset = (function entities$campaigns$data$core$set_campaign_active_ruleset(conn,ruleset_id){
var temp__5804__auto__ = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entities.campaigns.data.core.get_active_campaign(conn));
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_id = temp__5804__auto__;
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),active_campaign_id,new cljs.core.Keyword("campaign","active-ruleset","campaign/active-ruleset",904284340),ruleset_id], null)], null));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_creatures = (function entities$campaigns$data$core$get_active_campaign_creatures(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39229 = cljs.core.deref(conn);
var G__39230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39231 = new cljs.core.Keyword("campaign","creatures","campaign/creatures",-1787082010).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39229,G__39230,G__39231) : datascript.core.pull_many.call(null,G__39229,G__39230,G__39231));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_default_domains = (function entities$campaigns$data$core$get_active_campaign_default_domains(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39232 = cljs.core.deref(conn);
var G__39233 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39234 = new cljs.core.Keyword("campaign","domains","campaign/domains",1538117143).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39232,G__39233,G__39234) : datascript.core.pull_many.call(null,G__39232,G__39233,G__39234));
} else {
return null;
}
});
entities.campaigns.data.core.get_active_campaign_resources = (function entities$campaigns$data$core$get_active_campaign_resources(conn){
var temp__5804__auto__ = entities.campaigns.data.core.get_active_campaign(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_campaign_data = temp__5804__auto__;
var G__39235 = cljs.core.deref(conn);
var G__39236 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39237 = new cljs.core.Keyword("campaign","resources","campaign/resources",1772725931).cljs$core$IFn$_invoke$arity$1(active_campaign_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39235,G__39236,G__39237) : datascript.core.pull_many.call(null,G__39235,G__39236,G__39237));
} else {
return null;
}
});
entities.campaigns.data.core.set_active_campaign = (function entities$campaigns$data$core$set_active_campaign(conn,campaign_id){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("active","campaign","active/campaign",-659970928),campaign_id], null)], null));
});

//# sourceMappingURL=entities.campaigns.data.core.js.map
