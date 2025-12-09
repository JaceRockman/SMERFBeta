goog.provide('entities.creatures.data.core');
entities.creatures.data.core.get_all_creature_ids = (function entities$creatures$data$core$get_all_creature_ids(conn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__38624 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"creature"], null)], null);
var G__38625 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38624,G__38625) : datascript.core.q.call(null,G__38624,G__38625));
})());
});
entities.creatures.data.core.get_all_creatures = (function entities$creatures$data$core$get_all_creatures(conn){
var temp__5825__auto__ = entities.creatures.data.core.get_all_creature_ids(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var realm_ids = temp__5825__auto__;
var G__38627 = cljs.core.deref(conn);
var G__38628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38629 = realm_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__38627,G__38628,G__38629) : datascript.core.pull_many.call(null,G__38627,G__38628,G__38629));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature_id = (function entities$creatures$data$core$get_active_creature_id(conn){
var map__38638 = systems.navigation.get_nav_state(conn);
var map__38638__$1 = cljs.core.__destructure_map(map__38638);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38638__$1,new cljs.core.Keyword(null,"page","page",849072397));
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38638__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"creatures","creatures",761416150),page)) && (((0) < cljs.core.count(query_params))))){
return (cljs.core.first(query_params) | (0));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature = (function entities$creatures$data$core$get_active_creature(conn){
var temp__5825__auto__ = entities.creatures.data.core.get_active_creature_id(conn);
if(cljs.core.truth_(temp__5825__auto__)){
var active_creature_id = temp__5825__auto__;
var G__38643 = cljs.core.deref(conn);
var G__38644 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38645 = active_creature_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__38643,G__38644,G__38645) : datascript.core.pull.call(null,G__38643,G__38644,G__38645));
} else {
return null;
}
});
entities.creatures.data.core.get_active_creature_tracker = (function entities$creatures$data$core$get_active_creature_tracker(conn){
var result = cljs.core.ffirst((function (){var G__38646 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("active","creature","active/creature",-1884108750)], null)], null);
var G__38647 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38646,G__38647) : datascript.core.q.call(null,G__38646,G__38647));
})());
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0));

return result;
});
entities.creatures.data.core.set_active_creature = (function entities$creatures$data$core$set_active_creature(conn,creature_id){
var G__38650_38811 = conn;
var G__38651_38812 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),creature_id,new cljs.core.Keyword("active","creature","active/creature",-1884108750),creature_id], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38650_38811,G__38651_38812) : datascript.core.transact_BANG_.call(null,G__38650_38811,G__38651_38812));

return systems.navigation.subnavigate_BANG_(conn,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"creatures","creatures",761416150),new cljs.core.Keyword(null,"query-params","query-params",900640534),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [creature_id], null)], null));
});
entities.creatures.data.core.creature_races = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","elf","race/elf",1764040817),new cljs.core.Keyword("race","title","race/title",628819200),"Elf"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","human","race/human",-830670885),new cljs.core.Keyword("race","title","race/title",628819200),"Human"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","ident","db/ident",-737096),new cljs.core.Keyword("race","dwarf","race/dwarf",-1643443259),new cljs.core.Keyword("race","title","race/title",628819200),"Dwarf"], null)], null);
entities.creatures.data.core.get_creature_races = (function entities$creatures$data$core$get_creature_races(conn,creature_data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("race","title","race/title",628819200),(function (){var G__38661 = cljs.core.deref(conn);
var G__38662 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("race","title","race/title",628819200)], null);
var G__38663 = new cljs.core.Keyword("creature","races","creature/races",1734009382).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__38661,G__38662,G__38663) : datascript.core.pull_many.call(null,G__38661,G__38662,G__38663));
})());
});
entities.creatures.data.core.get_creature_domains = (function entities$creatures$data$core$get_creature_domains(conn,creature_data){
var G__38668 = cljs.core.deref(conn);
var G__38669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38670 = new cljs.core.Keyword("creature","domains","creature/domains",-996719930).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__38668,G__38669,G__38670) : datascript.core.pull_many.call(null,G__38668,G__38669,G__38670));
});
entities.creatures.data.core.get_domain_damage = (function entities$creatures$data$core$get_domain_damage(conn,domain_id,wound_type){
return cljs.core.ffirst((function (){var G__38672 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?wound-quantity","?wound-quantity",-820879161,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"?key","?key",1400522271,null),new cljs.core.Symbol(null,"?wound-quantity","?wound-quantity",-820879161,null)], null)], null);
var G__38673 = cljs.core.deref(conn);
var G__38674 = domain_id;
var G__38675 = wound_type;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$4 ? datascript.core.q.cljs$core$IFn$_invoke$arity$4(G__38672,G__38673,G__38674,G__38675) : datascript.core.q.call(null,G__38672,G__38673,G__38674,G__38675));
})());
});
entities.creatures.data.core.unshown_severity_QMARK_ = (function entities$creatures$data$core$unshown_severity_QMARK_(wound_tiers,wound_severity){
var G__38689 = wound_tiers;
switch (G__38689) {
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38689))));

}
});
entities.creatures.data.core.rebalance_wounds = (function entities$creatures$data$core$rebalance_wounds(conn,domain_id,p__38708){
var map__38709 = p__38708;
var map__38709__$1 = cljs.core.__destructure_map(map__38709);
var minor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709__$1,"minor");
var moderate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709__$1,"moderate");
var major = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38709__$1,"major");
var wound_tiers = new cljs.core.Keyword("ruleset","wound-tiers","ruleset/wound-tiers",1088565804).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
var G__38713 = wound_tiers;
switch (G__38713) {
case (3):
return null;

break;
case (2):
if(((0) < major)){
var G__38718_38815 = conn;
var G__38719_38816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536),(major - (1))], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38718_38815,G__38719_38816) : datascript.core.transact_BANG_.call(null,G__38718_38815,G__38719_38816));

var G__38720_38817 = conn;
var G__38721_38818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate + (1))], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38720_38817,G__38721_38818) : datascript.core.transact_BANG_.call(null,G__38720_38817,G__38721_38818));

var G__38722 = conn;
var G__38723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),(minor + (1))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38722,G__38723) : datascript.core.transact_BANG_.call(null,G__38722,G__38723));
} else {
return null;
}

break;
case (1):
if(((0) < major)){
var G__38725_38819 = conn;
var G__38726_38820 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536),(major - (1))], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38725_38819,G__38726_38820) : datascript.core.transact_BANG_.call(null,G__38725_38819,G__38726_38820));

var G__38729_38821 = conn;
var G__38730_38822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate + (1))], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38729_38821,G__38730_38822) : datascript.core.transact_BANG_.call(null,G__38729_38821,G__38730_38822));

var G__38733 = conn;
var G__38734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),(minor + (1))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38733,G__38734) : datascript.core.transact_BANG_.call(null,G__38733,G__38734));
} else {
if(((0) < moderate)){
var G__38736_38823 = conn;
var G__38737_38824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270),(moderate - (1))], null)], null);
(datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38736_38823,G__38737_38824) : datascript.core.transact_BANG_.call(null,G__38736_38823,G__38737_38824));

var G__38740 = conn;
var G__38741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967),((minor + (1)) + (1))], null)], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38740,G__38741) : datascript.core.transact_BANG_.call(null,G__38740,G__38741));
} else {
return null;
}
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38713))));

}
});
entities.creatures.data.core.get_wound_values = (function entities$creatures$data$core$get_wound_values(conn,domain_id){
return new cljs.core.PersistentArrayMap(null, 3, ["minor",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967)),"moderate",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270)),"major",entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536))], null);
});
entities.creatures.data.core.update_wound_value = (function entities$creatures$data$core$update_wound_value(conn,domain_id,wound_severity,update_fn){
var wound_type_keyword = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+"domain/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(wound_severity))+"-wounds"));
var wound_values = entities.creatures.data.core.get_wound_values(conn,domain_id);
var new_wound_value = (function (){var G__38748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,clojure.string.lower_case(wound_severity));
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__38748) : update_fn.call(null,G__38748));
})();
if(((0) <= new_wound_value)){
var G__38750 = conn;
var G__38751 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),domain_id,wound_type_keyword,new_wound_value])], null);
return (datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 ? datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2(G__38750,G__38751) : datascript.core.transact_BANG_.call(null,G__38750,G__38751));
} else {
return entities.creatures.data.core.rebalance_wounds(conn,domain_id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(wound_values,clojure.string.lower_case(wound_severity),new_wound_value));
}
});
entities.creatures.data.core.get_creature_domain_damage = (function entities$creatures$data$core$get_creature_domain_damage(conn,domain_id,wound_severity){
var wound_tiers = new cljs.core.Keyword("ruleset","wound-tiers","ruleset/wound-tiers",1088565804).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
var wound_values = entities.creatures.data.core.get_wound_values(conn,domain_id);
var wound_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(wound_values,wound_severity);
var G__38755 = wound_tiers;
switch (G__38755) {
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
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38755))));

}
});
entities.creatures.data.core.get_creature_domain_damage_total = (function entities$creatures$data$core$get_creature_domain_damage_total(conn,domain_id){
return ((entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967)) + ((2) * entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270)))) + ((3) * entities.creatures.data.core.get_domain_damage(conn,domain_id,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536))));
});
entities.creatures.data.core.get_creature_resources = (function entities$creatures$data$core$get_creature_resources(conn,creature_id){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__38766 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?resources","?resources",408081919,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword("creature","resources","creature/resources",-53329058),new cljs.core.Symbol(null,"?resources","?resources",408081919,null)], null)], null);
var G__38767 = cljs.core.deref(conn);
var G__38768 = creature_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__38766,G__38767,G__38768) : datascript.core.q.call(null,G__38766,G__38767,G__38768));
})());
});
entities.creatures.data.core.get_creature_resources_from_data = (function entities$creatures$data$core$get_creature_resources_from_data(conn,creature_data){
var G__38775 = cljs.core.deref(conn);
var G__38776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38777 = new cljs.core.Keyword("creature","resources","creature/resources",-53329058).cljs$core$IFn$_invoke$arity$1(creature_data);
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__38775,G__38776,G__38777) : datascript.core.pull_many.call(null,G__38775,G__38776,G__38777));
});
entities.creatures.data.core.get_creature_resource_resources = (function entities$creatures$data$core$get_creature_resource_resources(conn,creature_data){
var creature_resources = entities.creatures.data.core.get_creature_resources_from_data(conn,creature_data);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("creature-resource","resource","creature-resource/resource",-3690952),creature_resources);
});
entities.creatures.data.core.get_creature_actions = (function entities$creatures$data$core$get_creature_actions(conn,creature_id){
var G__38781 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?actions","?actions",1105736404,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?creature-id","?creature-id",941295225,null),new cljs.core.Keyword("creature","actions","creature/actions",-65901997),new cljs.core.Symbol(null,"?actions","?actions",1105736404,null)], null)], null);
var G__38782 = cljs.core.deref(conn);
var G__38783 = creature_id;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__38781,G__38782,G__38783) : datascript.core.q.call(null,G__38781,G__38782,G__38783));
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
return cljs.core.ffirst((function (){var G__38784 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("creature","name","creature/name",-110764950),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null)], null);
var G__38785 = cljs.core.deref(conn);
var G__38786 = creature_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__38784,G__38785,G__38786) : datascript.core.q.call(null,G__38784,G__38785,G__38786));
})());
});
entities.creatures.data.core.creature_info = (function entities$creatures$data$core$creature_info(conn,creature_name){
var G__38787 = cljs.core.deref(conn);
var G__38788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38789 = entities.creatures.data.core.creature_eid_by_name(conn,creature_name);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__38787,G__38788,G__38789) : datascript.core.pull.call(null,G__38787,G__38788,G__38789));
});
entities.creatures.data.core.creature_domains = (function entities$creatures$data$core$creature_domains(conn,creature_data){
var conn_STAR_ = (function (){var G__38790 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__38793){
var vec__38794 = p__38793;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38794,(1),null);
return (datascript.core.datom.cljs$core$IFn$_invoke$arity$3 ? datascript.core.datom.cljs$core$IFn$_invoke$arity$3((1),k,v) : datascript.core.datom.call(null,(1),k,v));
}),creature_data));
return (datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 ? datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1(G__38790) : datascript.core.conn_from_datoms.call(null,G__38790));
})();
var creature_domains = cljs.core.ffirst((function (){var G__38797 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?domains","?domains",-1883674720,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("creature","domains","creature/domains",-996719930),new cljs.core.Symbol(null,"?domains","?domains",-1883674720,null)], null)], null);
var G__38798 = cljs.core.deref(conn_STAR_);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38797,G__38798) : datascript.core.q.call(null,G__38797,G__38798));
})());
var domains_data = (function (){var G__38799 = cljs.core.deref(conn);
var G__38800 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38801 = cljs.core.first(creature_domains);
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__38799,G__38800,G__38801) : datascript.core.pull.call(null,G__38799,G__38800,G__38801));
})();
return domains_data;
});
entities.creatures.data.core.all_creatures = (function entities$creatures$data$core$all_creatures(conn){
var G__38802 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("creature","name","creature/name",-110764950)], null)], null);
var G__38803 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__38802,G__38803) : datascript.core.q.call(null,G__38802,G__38803));
});
entities.creatures.data.core.get_creature_by_id = (function entities$creatures$data$core$get_creature_by_id(conn,creature_id){
var G__38804 = cljs.core.deref(conn);
var G__38805 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__38806 = creature_id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__38804,G__38805,G__38806) : datascript.core.pull.call(null,G__38804,G__38805,G__38806));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__38807 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null))], null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?eid","?eid",1087837141,null),new cljs.core.Keyword("creature","name","creature/name",-110764950),new cljs.core.Symbol(null,"?creature-name","?creature-name",226136379,null)], null)], null)], null);
var G__38808 = cljs.core.deref(conn);
var G__38809 = pattern;
var G__38810 = creature_name;
return (q.cljs$core$IFn$_invoke$arity$4 ? q.cljs$core$IFn$_invoke$arity$4(G__38807,G__38808,G__38809,G__38810) : q.call(null,G__38807,G__38808,G__38809,G__38810));
})());
});

//# sourceMappingURL=entities.creatures.data.core.js.map
