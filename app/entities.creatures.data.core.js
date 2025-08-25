goog.provide('entities.creatures.data.core');
entities.creatures.data.core.get_all_creature_ids = (function entities$creatures$data$core$get_all_creature_ids(conn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39347 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"creature"], null)], null);
var G__39348 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39347,G__39348) : datascript.core.q.call(null,G__39347,G__39348));
})());
});
entities.creatures.data.core.get_all_creatures = (function entities$creatures$data$core$get_all_creatures(conn){
var temp__5804__auto__ = entities.creatures.data.core.get_all_creature_ids(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var realm_ids = temp__5804__auto__;
var G__39349 = cljs.core.deref(conn);
var G__39350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39351 = realm_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39349,G__39350,G__39351) : datascript.core.pull_many.call(null,G__39349,G__39350,G__39351));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature_id = (function entities$creatures$data$core$get_active_creature_id(conn){
var nav_state = systems.navigation.get_main_nav_state_list(conn);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("creatures",cljs.core.first(nav_state))) && (((1) < cljs.core.count(nav_state))))){
return (cljs.core.second(nav_state) | (0));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature = (function entities$creatures$data$core$get_active_creature(conn){
var temp__5804__auto__ = entities.creatures.data.core.get_active_creature_id(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_creature_id = temp__5804__auto__;
var G__39352 = cljs.core.deref(conn);
var G__39353 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39354 = active_creature_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39352,G__39353,G__39354) : datascript.core.pull.call(null,G__39352,G__39353,G__39354));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature_tracker = (function entities$creatures$data$core$get_active_creature_tracker(conn){
return cljs.core.ffirst((function (){var G__39355 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("active","creature","active/creature",-1884108750)], null)], null);
var G__39356 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39355,G__39356) : datascript.core.q.call(null,G__39355,G__39356));
})());
});
entities.creatures.data.core.set_active_creature = (function entities$creatures$data$core$set_active_creature(conn,creature_id){
var temp__5802__auto___39427 = entities.creatures.data.core.get_active_creature_tracker(conn);
if(cljs.core.truth_(temp__5802__auto___39427)){
var active_creature_tracker_39428 = temp__5802__auto___39427;
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),active_creature_tracker_39428,new cljs.core.Keyword("active","creature","active/creature",-1884108750),creature_id], null)], null));
} else {
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("active","creature","active/creature",-1884108750),creature_id], null)], null));
}

return systems.navigation.subnavigate(conn,creature_id);
});
entities.creatures.data.core.creature_races = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","elf","race/elf",1764040817),new cljs.core.Keyword("race","title","race/title",628819200),"Elf"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","human","race/human",-830670885),new cljs.core.Keyword("race","title","race/title",628819200),"Human"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","dwarf","race/dwarf",-1643443259),new cljs.core.Keyword("race","title","race/title",628819200),"Dwarf"], null)], null);
entities.creatures.data.core.get_creature_races = (function entities$creatures$data$core$get_creature_races(conn,creature_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("race","title","race/title",628819200),(function (){var G__39357 = cljs.core.deref(conn);
var G__39358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("race","title","race/title",628819200)], null);
var G__39359 = new cljs.core.Keyword("creature","races","creature/races",1734009382).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39357,G__39358,G__39359) : datascript.core.pull_many.call(null,G__39357,G__39358,G__39359));
})());
});
entities.creatures.data.core.get_creature_domains = (function entities$creatures$data$core$get_creature_domains(conn,creature_data){
var G__39360 = cljs.core.deref(conn);
var G__39361 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39362 = new cljs.core.Keyword("creature","domains","creature/domains",-996719930).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39360,G__39361,G__39362) : datascript.core.pull_many.call(null,G__39360,G__39361,G__39362));
});
entities.creatures.data.core.get_domain_damage = (function entities$creatures$data$core$get_domain_damage(conn,domain_id,wound_type){
return cljs.core.ffirst((function (){var G__39363 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?wound-quantity","?wound-quantity",-820879161,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Symbol(null,"?wound-quantity","?wound-quantity",-820879161,null)], null)], null);
var G__39364 = cljs.core.deref(conn);
var G__39365 = domain_id;
var G__39366 = wound_type;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__39363,G__39364,G__39365,G__39366) : datascript.core.q.call(null,G__39363,G__39364,G__39365,G__39366));
})());
});
entities.creatures.data.core.unshown_severity_QMARK_ = (function entities$creatures$data$core$unshown_severity_QMARK_(wound_tiers,wound_severity){
var G__39367 = wound_tiers;
switch (G__39367) {
case (3):
return false;

break;
case (2):
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(wound_severity),"major");

break;
case (1):
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(wound_severity),"minor")));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39367)].join('')));

}
});
entities.creatures.data.core.rebalance_wounds = (function entities$creatures$data$core$rebalance_wounds(conn,domain_id,p__39368){
var map__39369 = p__39368;
var map__39369__$1 = cljs.core.__destructure_map(map__39369);
var minor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,"minor");
var moderate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,"moderate");
var major = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39369__$1,"major");
var wound_tiers = new cljs.core.Keyword("ruleset","wound-tiers","ruleset/wound-tiers",1088565804).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
var G__39370 = wound_tiers;
switch (G__39370) {
case (3):
return null;

break;
case (2):
if(((0) < major)){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536),(major - (1))], null)], null));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate + (1))], null)], null));

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),(minor + (1))], null)], null));
} else {
return null;
}

break;
case (1):
if(((0) < major)){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536),(major - (1))], null)], null));

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate + (1))], null)], null));

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),(minor + (1))], null)], null));
} else {
if(((0) < moderate)){
datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate - (1))], null)], null));

return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),((minor + (1)) + (1))], null)], null));
} else {
return null;
}
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39370)].join('')));

}
});
entities.creatures.data.core.get_wound_values = (function entities$creatures$data$core$get_wound_values(conn,domain_id){
return new cljs.core.PersistentArrayMap(null, 3, ["minor",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967)),"moderate",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270)),"major",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536))], null);
});
entities.creatures.data.core.update_wound_value = (function entities$creatures$data$core$update_wound_value(conn,domain_id,wound_severity,update_fn){
var wound_type_keyword = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["domain/",clojure.string.lower_case(wound_severity),"-wounds"].join(''));
var wound_values = entities.creatures.data.core.get_wound_values(conn,domain_id);
var new_wound_value = (function (){var G__39371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,clojure.string.lower_case(wound_severity));
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__39371) : update_fn.call(null,G__39371));
})();
if(((0) <= new_wound_value)){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,wound_type_keyword,new_wound_value])], null));
} else {
return entities.creatures.data.core.rebalance_wounds(conn,domain_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wound_values,clojure.string.lower_case(wound_severity),new_wound_value));
}
});
entities.creatures.data.core.get_creature_domain_damage = (function entities$creatures$data$core$get_creature_domain_damage(conn,domain_id,wound_severity){
var wound_tiers = new cljs.core.Keyword("ruleset","wound-tiers","ruleset/wound-tiers",1088565804).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
var wound_values = entities.creatures.data.core.get_wound_values(conn,domain_id);
var wound_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,wound_severity);
var G__39372 = wound_tiers;
switch (G__39372) {
case (3):
return wound_value;

break;
case (2):
return (wound_value + cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,"major"));

break;
case (1):
return ((wound_value + ((3) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,"major"))) + ((2) * cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,"moderate")));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39372)].join('')));

}
});
entities.creatures.data.core.get_creature_domain_damage_total = (function entities$creatures$data$core$get_creature_domain_damage_total(conn,domain_id){
return ((entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967)) + ((2) * entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270)))) + ((3) * entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536))));
});
entities.creatures.data.core.get_creature_resources = (function entities$creatures$data$core$get_creature_resources(conn,creature_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39373 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?resources","?resources",408081919,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword("creature","resources","creature/resources",-53329058),new cljs.core.Symbol(null,"?resources","?resources",408081919,null)], null)], null);
var G__39374 = cljs.core.deref(conn);
var G__39375 = creature_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39373,G__39374,G__39375) : datascript.core.q.call(null,G__39373,G__39374,G__39375));
})());
});
entities.creatures.data.core.get_creature_resources_from_data = (function entities$creatures$data$core$get_creature_resources_from_data(conn,creature_data){
var G__39376 = cljs.core.deref(conn);
var G__39377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39378 = new cljs.core.Keyword("creature","resources","creature/resources",-53329058).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39376,G__39377,G__39378) : datascript.core.pull_many.call(null,G__39376,G__39377,G__39378));
});
entities.creatures.data.core.get_creature_resource_resources = (function entities$creatures$data$core$get_creature_resource_resources(conn,creature_data){
var creature_resources = entities.creatures.data.core.get_creature_resources_from_data(conn,creature_data);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),creature_resources);
});
entities.creatures.data.core.get_creature_actions = (function entities$creatures$data$core$get_creature_actions(conn,creature_id){
var G__39379 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?actions","?actions",1105736404,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword("creature","actions","creature/actions",-65901997),new cljs.core.Symbol(null,"?actions","?actions",1105736404,null)], null)], null);
var G__39380 = cljs.core.deref(conn);
var G__39381 = creature_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39379,G__39380,G__39381) : datascript.core.q.call(null,G__39379,G__39380,G__39381));
});
entities.creatures.data.core.example_creatures = (function entities$creatures$data$core$example_creatures(default_domain_entities,example_resources,default_actions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("creature","gender","creature/gender",969047776),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.Keyword("creature","experience","creature/experience",-1131174582),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("creature","portrait","creature/portrait",870623728),new cljs.core.Keyword("creature","damage","creature/damage",106859025),new cljs.core.Keyword("creature","actions","creature/actions",-65901997),new cljs.core.Keyword("creature","notes","creature/notes",2055749814),new cljs.core.Keyword("creature","rolls","creature/rolls",-2010410342),new cljs.core.Keyword("creature","resources","creature/resources",-53329058),new cljs.core.Keyword("creature","description","creature/description",1448821151)],["Male","creature",default_domain_entities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("race","elf","race/elf",1764040817),new cljs.core.Keyword("race","human","race/human",-830670885)], null),(0),"Aleksander","https://i.pinimg.com/originals/d8/30/bc/d830bc587482ed8af3639903c5d406b4.png",cljs.core.PersistentVector.EMPTY,default_actions,"Notes about Aleksander",cljs.core.PersistentVector.EMPTY,example_resources,"Aleksander is a really cool dude."]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("creature","gender","creature/gender",969047776),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.Keyword("creature","experience","creature/experience",-1131174582),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("creature","damage","creature/damage",106859025),new cljs.core.Keyword("creature","actions","creature/actions",-65901997),new cljs.core.Keyword("creature","notes","creature/notes",2055749814),new cljs.core.Keyword("creature","rolls","creature/rolls",-2010410342),new cljs.core.Keyword("creature","resources","creature/resources",-53329058),new cljs.core.Keyword("creature","description","creature/description",1448821151)],["Female","creature",default_domain_entities,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("race","elf","race/elf",1764040817)], null),(0),"Eilonwey",cljs.core.PersistentVector.EMPTY,default_actions,"Notes about Eilonwey",cljs.core.PersistentVector.EMPTY,example_resources,"Eilonwey is a badass."]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.Keyword("creature","experience","creature/experience",-1131174582),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("creature","damage","creature/damage",106859025),new cljs.core.Keyword("creature","actions","creature/actions",-65901997),new cljs.core.Keyword("creature","notes","creature/notes",2055749814),new cljs.core.Keyword("creature","rolls","creature/rolls",-2010410342),new cljs.core.Keyword("creature","resources","creature/resources",-53329058),new cljs.core.Keyword("creature","description","creature/description",1448821151)],["creature",default_domain_entities,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("race","dwarf","race/dwarf",-1643443259)], null),(0),"Durflag",cljs.core.PersistentVector.EMPTY,default_actions,"Notes about Durflag",cljs.core.PersistentVector.EMPTY,example_resources,"Durflag is a badass as well."])], null);
});
/**
 * A transaction schema for a new creature
 */
entities.creatures.data.core.new_creature_defaults = (function entities$creatures$data$core$new_creature_defaults(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("creature","id","creature/id",1371426325),cljs.core.random_uuid(),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),"Domains"], null);
});
entities.creatures.data.core.creature_eid_by_name = (function entities$creatures$data$core$creature_eid_by_name(conn,creature_name){
return cljs.core.ffirst((function (){var G__39382 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("creature","name","creature/name",-110764950),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null)], null);
var G__39383 = cljs.core.deref(conn);
var G__39384 = creature_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39382,G__39383,G__39384) : datascript.core.q.call(null,G__39382,G__39383,G__39384));
})());
});
entities.creatures.data.core.creature_info = (function entities$creatures$data$core$creature_info(conn,creature_name){
var G__39385 = cljs.core.deref(conn);
var G__39386 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39387 = entities.creatures.data.core.creature_eid_by_name(conn,creature_name);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39385,G__39386,G__39387) : datascript.core.pull.call(null,G__39385,G__39386,G__39387));
});
entities.creatures.data.core.creature_domains = (function entities$creatures$data$core$creature_domains(conn,creature_data){
var conn_STAR_ = datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39388){
var vec__39389 = p__39388;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39389,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39389,(1),null);
return (datascript.core.datom.cljs$core$IFn$_invoke$arity$3 ? datascript.core.datom.cljs$core$IFn$_invoke$arity$3((1),k,v) : datascript.core.datom.call(null,(1),k,v));
}),creature_data)));
var creature_domains = cljs.core.ffirst((function (){var G__39392 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domains","?domains",-1883674720,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.Symbol(null,"?domains","?domains",-1883674720,null)], null)], null);
var G__39393 = cljs.core.deref(conn_STAR_);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39392,G__39393) : datascript.core.q.call(null,G__39392,G__39393));
})());
var domains_data = (function (){var G__39394 = cljs.core.deref(conn);
var G__39395 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39396 = cljs.core.first(creature_domains);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39394,G__39395,G__39396) : datascript.core.pull.call(null,G__39394,G__39395,G__39396));
})();
return domains_data;
});
entities.creatures.data.core.all_creatures = (function entities$creatures$data$core$all_creatures(conn){
var G__39397 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("creature","name","creature/name",-110764950)], null)], null);
var G__39398 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39397,G__39398) : datascript.core.q.call(null,G__39397,G__39398));
});
entities.creatures.data.core.get_creature_by_id = (function entities$creatures$data$core$get_creature_by_id(conn,creature_id){
var G__39399 = cljs.core.deref(conn);
var G__39400 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39401 = creature_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39399,G__39400,G__39401) : datascript.core.pull.call(null,G__39399,G__39400,G__39401));
});
entities.creatures.data.core.pull_full_creature = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Keyword("creature","race","creature/race",-622475031),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("domain","name","domain/name",1022338285)], null)], null)], null);
entities.creatures.data.core.pull_creature_name = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("creature","name","creature/name",-110764950)], null);
/**
 * Returns creature information for all creature's with a given name
 * 
 *   Arguments:
 * - db connection
 * - Pull Pattern for a creature entity
 * - A String that matches on the :creature/name value
 *   Returns:
 * - creature entity data structured with the given pull pattern
 */
entities.creatures.data.core.get_creature_by_name = (function entities$creatures$data$core$get_creature_by_name(q,conn,pattern,creature_name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39410 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null))], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("creature","name","creature/name",-110764950),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null)], null)], null);
var G__39411 = cljs.core.deref(conn);
var G__39412 = pattern;
var G__39413 = creature_name;
return (q.cljs$core$IFn$_invoke$arity$4 ? q.cljs$core$IFn$_invoke$arity$4(G__39410,G__39411,G__39412,G__39413) : q.call(null,G__39410,G__39411,G__39412,G__39413));
})());
});

//# sourceMappingURL=entities.creatures.data.core.js.map
