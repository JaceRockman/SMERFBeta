goog.provide('entities.realms.data.core');
entities.realms.data.core.get_all_realm_ids = (function entities$realms$data$core$get_all_realm_ids(conn){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (){var G__39253 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"realm"], null)], null);
var G__39254 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39253,G__39254) : datascript.core.q.call(null,G__39253,G__39254));
})());
});
entities.realms.data.core.get_all_realms = (function entities$realms$data$core$get_all_realms(conn){
var temp__5804__auto__ = entities.realms.data.core.get_all_realm_ids(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var realm_ids = temp__5804__auto__;
var G__39257 = cljs.core.deref(conn);
var G__39258 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39259 = realm_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39257,G__39258,G__39259) : datascript.core.pull_many.call(null,G__39257,G__39258,G__39259));
} else {
return null;
}
});
entities.realms.data.core.recursively_get_parent_entities = (function entities$realms$data$core$recursively_get_parent_entities(var_args){
var G__39270 = arguments.length;
switch (G__39270) {
case 2:
return entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$2 = (function (conn,id){
var parent_entities = (function (){var G__39274 = cljs.core.deref(conn);
var G__39275 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","_children-entities","realm/_children-entities",-707069175)], null);
var G__39276 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39274,G__39275,G__39276) : datascript.core.pull.call(null,G__39274,G__39275,G__39276));
})();
var parents = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent_entities,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","_children-entities","realm/_children-entities",-707069175),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
if((parents == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
} else {
return entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parents], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parents], null));
}
}));

(entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$3 = (function (conn,old_ids,new_ids){
var new_parents = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__39260_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__39260_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","_children-entities","realm/_children-entities",-707069175),new cljs.core.Keyword("db","id","db/id",-1388397098)], null));
}),(function (){var G__39280 = cljs.core.deref(conn);
var G__39281 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","_children-entities","realm/_children-entities",-707069175)], null);
var G__39282 = new_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39280,G__39281,G__39282) : datascript.core.pull_many.call(null,G__39280,G__39281,G__39282));
})()));
if(cljs.core.empty_QMARK_(new_parents)){
return old_ids;
} else {
return entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(old_ids,new_parents)),new_parents);
}
}));

(entities.realms.data.core.recursively_get_parent_entities.cljs$lang$maxFixedArity = 3);

entities.realms.data.core.recursively_get_children_entities = (function entities$realms$data$core$recursively_get_children_entities(var_args){
var G__39289 = arguments.length;
switch (G__39289) {
case 2:
return entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$2 = (function (conn,id){
var children_entities = (function (){var G__39292 = cljs.core.deref(conn);
var G__39293 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849)], null);
var G__39294 = id;
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39292,G__39293,G__39294) : datascript.core.pull.call(null,G__39292,G__39293,G__39294));
})();
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849).cljs$core$IFn$_invoke$arity$1(children_entities));
if(cljs.core.empty_QMARK_(children)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
} else {
return entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(id,children)),children);
}
}));

(entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$3 = (function (conn,old_ids,new_ids){
var new_children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),cljs.core.flatten((function (){var G__39297 = cljs.core.deref(conn);
var G__39298 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849)], null);
var G__39299 = new_ids;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39297,G__39298,G__39299) : datascript.core.pull_many.call(null,G__39297,G__39298,G__39299));
})())))));
if(cljs.core.empty_QMARK_(new_children)){
return old_ids;
} else {
return entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(old_ids,new_children)),new_children);
}
}));

(entities.realms.data.core.recursively_get_children_entities.cljs$lang$maxFixedArity = 3);

entities.realms.data.core.get_realm_entity_parents = (function entities$realms$data$core$get_realm_entity_parents(conn,realm_entity_id){
var all_entities = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39301_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(realm_entity_id,p1__39301_SHARP_)));
}),entities.realms.data.core.recursively_get_parent_entities.cljs$core$IFn$_invoke$arity$2(conn,realm_entity_id));
if(cljs.core.seq(all_entities)){
var G__39302 = cljs.core.deref(conn);
var G__39303 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39304 = all_entities;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39302,G__39303,G__39304) : datascript.core.pull_many.call(null,G__39302,G__39303,G__39304));
} else {
return null;
}
});
entities.realms.data.core.get_realm_entity_children = (function entities$realms$data$core$get_realm_entity_children(conn,realm_id){
var all_entities = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39308_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(realm_id,p1__39308_SHARP_)));
}),entities.realms.data.core.recursively_get_children_entities.cljs$core$IFn$_invoke$arity$2(conn,realm_id));
if(cljs.core.seq(all_entities)){
var G__39312 = cljs.core.deref(conn);
var G__39313 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39314 = all_entities;
return (datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull_many.cljs$core$IFn$_invoke$arity$3(G__39312,G__39313,G__39314) : datascript.core.pull_many.call(null,G__39312,G__39313,G__39314));
} else {
return null;
}
});
entities.realms.data.core.get_active_realm_id = (function entities$realms$data$core$get_active_realm_id(conn){
var nav_state = systems.navigation.get_main_nav_state_list(conn);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("realms",cljs.core.first(nav_state))){
return cljs.core.first(cljs.core.rest(nav_state));
} else {
return null;
}
});
entities.realms.data.core.get_active_realm = (function entities$realms$data$core$get_active_realm(conn){
var temp__5804__auto__ = entities.realms.data.core.get_active_realm_id(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_realm_id = temp__5804__auto__;
var G__39315 = cljs.core.deref(conn);
var G__39316 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39317 = (active_realm_id | (0));
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39315,G__39316,G__39317) : datascript.core.pull.call(null,G__39315,G__39316,G__39317));
} else {
return null;
}
});
entities.realms.data.core.get_realm_id_by_name = (function entities$realms$data$core$get_realm_id_by_name(conn,realm_name){
return cljs.core.ffirst((function (){var G__39318 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?realm-name","?realm-name",-1708941404,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?realm-name","?realm-name",-1708941404,null)], null)], null);
var G__39319 = cljs.core.deref(conn);
var G__39320 = realm_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39318,G__39319,G__39320) : datascript.core.q.call(null,G__39318,G__39319,G__39320));
})());
});
entities.realms.data.core.set_active_realm = (function entities$realms$data$core$set_active_realm(conn,realm_id){
return systems.navigation.subnavigate(conn,realm_id);
});
entities.realms.data.core.get_active_subrealm_id = (function entities$realms$data$core$get_active_subrealm_id(conn){
var nav_state = systems.navigation.get_main_nav_state_list(conn);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(nav_state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("realms",cljs.core.first(nav_state))))){
return cljs.core.last(nav_state);
} else {
return null;
}
});
entities.realms.data.core.get_active_subrealm = (function entities$realms$data$core$get_active_subrealm(conn){
var temp__5804__auto__ = entities.realms.data.core.get_active_subrealm_id(conn);
if(cljs.core.truth_(temp__5804__auto__)){
var active_subrealm = temp__5804__auto__;
var G__39322 = cljs.core.deref(conn);
var G__39323 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__39324 = (active_subrealm | (0));
return (datascript.core.pull.cljs$core$IFn$_invoke$arity$3 ? datascript.core.pull.cljs$core$IFn$_invoke$arity$3(G__39322,G__39323,G__39324) : datascript.core.pull.call(null,G__39322,G__39323,G__39324));
} else {
return null;
}
});
entities.realms.data.core.get_subrealm_id_by_name = (function entities$realms$data$core$get_subrealm_id_by_name(conn,subrealm_name){
return cljs.core.ffirst((function (){var G__39325 = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"?subrealm-name","?subrealm-name",667784447,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Symbol(null,"?subrealm-name","?subrealm-name",667784447,null)], null)], null);
var G__39326 = cljs.core.deref(conn);
var G__39327 = subrealm_name;
return (datascript.core.q.cljs$core$IFn$_invoke$arity$3 ? datascript.core.q.cljs$core$IFn$_invoke$arity$3(G__39325,G__39326,G__39327) : datascript.core.q.call(null,G__39325,G__39326,G__39327));
})());
});
entities.realms.data.core.get_active_subrealm_tracker = (function entities$realms$data$core$get_active_subrealm_tracker(conn){
return cljs.core.ffirst((function (){var G__39328 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("active","subrealm","active/subrealm",-704364530)], null)], null);
var G__39329 = cljs.core.deref(conn);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__39328,G__39329) : datascript.core.q.call(null,G__39328,G__39329));
})());
});
entities.realms.data.core.set_active_subrealm = (function entities$realms$data$core$set_active_subrealm(conn,subrealm_id){
return systems.navigation.subsubnavigate(conn,subrealm_id);
});
entities.realms.data.core.set_active_subrealm_by_name = (function entities$realms$data$core$set_active_subrealm_by_name(conn,subrealm_name){
return entities.realms.data.core.set_active_subrealm(conn,entities.realms.data.core.get_subrealm_id_by_name(conn,subrealm_name));
});
entities.realms.data.core.example_empty_realm = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Nowhere"], null)], null);
entities.realms.data.core.example_fantasy_realm = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),"kalashar",new cljs.core.Keyword(null,"title","title",636505583),"Kalashar",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"realm",new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["commonlands","outwilds"], null),new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"This is Kalashar"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),"commonlands",new cljs.core.Keyword(null,"title","title",636505583),"Commonlands",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"territory",new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["humans","elves","dwarves"], null),new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"Surrounded by the fraught Outwilds, the Commonlands are home to the civilized races: Humans, Elves, and Dwarves. While each of these groups have carved out areas of this land for themself, Kairinith, often simply referred to as The Capital, is shared by all. It is here that the social engineering of the Humans meets the work ethic of the Dwarves and the elegance of the Elves. While The Capital is not free from divisive issues, it is rife with opportunity and is therefore a wellspring of new ideas, technologies, and art. Beyond the walls of The Capital, you will find that the Humans squabble over land and power, the Elves content themselves with tending their forests, and the Dwarves delve deep into their mountains seeking ever more valuable gems. War has not touched the lives of the common folk for decades while the gods continue their centuries-long slumber."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("db","id","db/id",-1388397098),"outwilds",new cljs.core.Keyword(null,"title","title",636505583),"Outwilds",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"territory",new cljs.core.Keyword("realm","children-entities","realm/children-entities",-1721912849),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goblins","humans"], null),new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"Encircling the tranquil lands of the civilized races are The Outwilds. Deadly swamps bubble and hiss in the North, jungles teem with ferocious beasts and verdure to the East just beyond the Greyiron Mountains, and eternal dark subsumes the Elderwoods if one dares travel West of the Eldari ruins. In many of the old tales, The Outwilds act as the crucible for heroes and the resting place of great treasures from forgotten ages. Many adventurers have attempted to claim their place in the annals of history by venturing into these lands. Many adventurers have died in that attempt. There is little that can be said for certain about these wild lands apart from this: death sleeps lightly there."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"humans",new cljs.core.Keyword(null,"title","title",636505583),"Humans",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"race",new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"## Religion\nIn The Four Duchies, there is a general adherence to the edicts of the four Gods and only a slightly greater deference to Ijarda. This largely stems from the farming communities in Nidia who are her most fervent worshipers. This observance manifests mostly in the rituals of birth, marriage, and death and the celebrations of the vernal equinox, which is said to be the day of Ijarda's emergence from Kalashar. Among Humans, especially those in Erstead, a far greater observance is given to King Erdith who was the first ruler of man and the uniter of the disparate tribes millenia ago. Though it has been long, it is said that the spirit of Erdith has been reborn whenever mankind was in greatest need. This is why the rulers of Erstead are known as the Regents, for they only rule while Erdith rests. The stories say that the Erdithstone, which rests above the throne in the Kairinith palace, will shine once more when the soul of the king again takes breath. This is understood to mean that when the soul of Erdith has been reborn, the stone reacts to this rebirth and that it will illuminate to herald the coming of its lord. Those who worship King Erdith as more than just a man call themselves the Sons and Daughters of Erdith. This is the source of the tradition of the Kingsday celebration, where noble children are brought to stand in the throne room to test for the presence of King Erdith\u2019s soul.\n## Society\nErstead lies in the center of The Four Duchies and is the most densely populated of the four. As a result of its relative prosperity and the protection that it is granted by being surrounded by the three other duchies, the citizens of Erstead are perceived as being pompous and out of touch with the common folk. Erstead being home to the absurdly wealthy capital city of Kairinith only serves to reinforce this view. There is a widespread respect for the royal line and a significant number of those who follow The Sons of Erdith. While King Erdith rests, as has been the case for almost 200 years, the Aemon family rules in his stead not as Kings and Queens or Dukes and Duchesses, but rather as Regents. They have all of the power of the King, though tradition dictates that they wield this power only when the Kingdom is threatened. Kleth rests in the craggy foothills of The Greyiron Mountains. Klethians are a hardy independent folk consisting primarily of mercenaries, miners, and blacksmiths. They begrudge anything they perceive as an overreach of power and thus have a particularly unwelcoming attitude towards those of Erstead often referring to them as Steadlings. Many of those in Kleth feel a greater kinship with the Dwarves of The Greyiron Mountains than with the Humans of The Four Duchies. They often work alongside the Dwarves within the common mines and large passes of the mountains which are frequently assaulted by Goblins. This relationship results in a greater adherence to the teachings of Heilm than in any of the other duchies. The current ruler, Duchess Agata Kleth, is particularly fond of Heilm and she is well liked by her citizens. Umaeria is a bountiful land where the most clever scheming merchants come out on top. There are some who say that the Guildmeisters of Umaeria collectively hold more power than even Duke Claude Umaeria himself. As Umaeria is the largest of the duchies and has the greatest gap of wealth between merchants and workers, it has historically struggled with revolts and rebellions. These are often quelled with the assistance of the Erstead military forces and the mercenaries employed by the Merchant's Guild of Umaeria. In a similar vein, there have been many skirmishes between Umaeria and the Elves of the The Elderwoods as merchants tend to \"accidentally\" overextend their logging operations into Elven territory, however, such conflict has not manifested since an accord was produced between the Elven Council and the Guildmeisters. Nidia crowns The Four Duchies and although it is a bountiful land, there is little else to draw one to these marshy lands to the North. Most of the communities are but small agrarian villages known for their warm hospitality. Since oft times little else but rumors reach these communities, visits from outsiders are times not soon forgot there is a great deal of superstition and misinformation. Particularly, any technology or sciences unfamiliar to these rural lands are considered dark omens and should it be revealed that one dabbles in these occult practices, they may quickly find that they have overstayed their welcome.\n## Economy\nThere are three main trade circuits that distribute goods throughout The Four Duchies. The Laikendall route begins near the end of the Faelfest celebrations in Laikendall, which is in the Eastern territory if Nidia. They bring a full load of crops to Kairinith and their arrival heralds the Vernefest. During this celebration, these merchants acquire luxury items and travel South to Finipor by river and then back up through Kleth to arrive in Kairinith for the next Faelfest. The Veshtapor route begins in Kairinith, departing just after Vernefest. They take their goods and travel Southwest by river to arrive in Veshtapor in late Summer. Following the Finethire Way, they travel back East towards The Crossways and then North to return to Kairinith in time for Vernefest. The Finipor route likewise begins in Kairinith, departing just after Vernefest, however, they take their goods South along the Finethire Way towards The Crossways. They continue Eastwards towards Finipor and travel upriver to arrive in Kairinith by Vernefest. If merchants who take the Veshtapor or Finipor routes are delayed and do not return to Kairinith in time for the Vernefest, they will often take a lucrative detour through Trell before returning to their route in order to get back on schedule. The most skilled and dedicated merchants will take the difficult but rewarding trip all throughout The Four Duchies. They begin with the Laikendall route travelling towards Kairinith but then they go to Veshtapor and then to The Crossways taking a detour to Trell and then back up through The Crossways, Finipor, and Kleth to arrive back in Laikendall just in time for Faelfest. In total, this trip spans the course of three years, but with the right connections and a good bit of luck, you can make a veritable fortune off of a single pass of this grand route. The combination of these routes manages to distribute crops, precious stones, metals, and lumber to the entire Four Duchies as well as bringing enchanted and luxury items from Erstead to Umaeria.\n## Politics\nWhile Dukes and Duchesses rule in Kleth, Umaeria, and Nidia, it is the Regents who rule in Erstead until the return of King Erdith. Duke Claude Umaeria is content to retain the status quo, however, the Guildmasters of Umaeria constantly seek to amend the accord with the Elves to expand their resources and influence. Duchess Agata Kleth is a fierce woman who feels more of a kinship with her Dwarven neighbors than with her fellow rulers. Over the many years of her rule, this disposition has grown only stronger as Kleth becomes more and more economically independent on the other duchies. While Regent Giles Aemon was once well loved by the citizens of Erstead, lately he has been seen as being responsible for the increases in taxes. It is now widely believed that he has lost touch with the people and many resent him for it.\n## Military\nThe Four Duchies was once a fairly militant society, but since the relationships with both the Dwarves and Elves have been relatively stable for the past few centuries, this aspect of their culture has abated. Umaeria possesses very little in the way of an official militia, though it has significant forces to call upon in ways of mercenaries and private militias employed by merchants and guilds. The mercenaries and militias are some of the most competent bowmen in The Four Duchies. Kleth has a dedicated military force that is well trained and well equipped. This is necessitated by the invading forces of Goblins that frequently make it through the passes of The Greyiron Mountains. It is often that they work side by side with the Dwarves in driving these fell creatures back. Erstead's military presence is most often occupied with policing the streets of its many cities. Most notably, Erstead employs the Kairinith University in providing training to the nobles who often serve in the upper ranks of its military."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"elves",new cljs.core.Keyword(null,"title","title",636505583),"Elves",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"race",new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"## Religion\nElves who dedicate their lives to the study and worship of Ishiq are called Seers. They are well respected in Elven society since most Elves have at least a passing faith in Ishiq. They believe that the highest form of divination is conveying visual scenes and so they consider it blasphemy to attempt to record these visions with words. The only exception they make to this tenet is that they give some credence to The Tears of Ishiq, however, they still often lament that the Eldari lacked the modern methods of preserving and projecting visual memories. This distrust of written doctrine has left the Seers with a fairly vague theology which has in turn caused many conflicts and religious upheavals throughout the Elves\u2019 long history. The most violent of these occurred some 1,000 years ago and culminated in the banning of the Seers from the Elven Council. At the time, the Seers held much more direct power in Elven society as they were permitted to hold positions on the various Elven Councils. This eventually lead to corruption on the part of both the church and the body of councils. False visions were crafted in order to suggest that Ishiq was calling for a holy war against their human neighbors. The devout followers of Ishiq were baffled by this revelation and, however, there was no other option but for the Elves to begin mobilizing their armies. Many Humans and Elves died in the ensuing years and they are remembered by the Elves as the False War. It wasn't until a young prodigious Seer named Elheim uncovered the plot and the war was quickly abandoned though it left a great rift between Humans and Elves as well as eroded the trust in the Seers for centuries to come. It is said that centuries ago, Ishiq fell into a deep slumber alongside her deific counterparts and while there is still great observance of the faith, there are now those who doubt the authority of the Seers.\n## Society\nElven society is largely cohesive as there is extensive integration between all eleven of the Realms. The greatest divide between Elves is between Eastern and Western populations. Those who reside in the Eastern Realms that border Umaeria of The Four Duchies view the border conflicts of the Humans as a great threat to the Elves while those who reside in the Western Realms that border the Eldari ruins view the treasure hunters that loot the ancient ruins as the most crucial issue at hand. Elves are most unwelcoming to Dwarves ever since the False War. Due to their great rarity, Elves are often intrigued more than disgusted when they encounter Orcs or Goblins.\n## Economy\nThe Economy of the Elves is largely self-sustained with occasional luxury items imported from The Four Duchies. Elves have developed complex methods of agriculture and woodsmithing providing all of the food and resources required for their civilization to run smoothly. The closely guarded secrets of treesinging and woodsmithing produce a wide variety of weapons, armors, and tools that are much desired by the merchants of The Four Duchies, however, Elven law forbids the sale of woodsmithed products which has lead to a thriving black market of these items in the Eastern Realms.\n## Politics\nThe Vi\u00EBr Elen is the lord or lady ruler of the Elves, however, they do not have complete authority. They answer to the three Elven Councils: Eiaven, the Council of Nobles, Fasfontan, the Council of War, and Messaram, the Council of the People. Each of these councils is presided over by a Speaker who upholds order during council meetings, votes in cases of national legislation and declarations of war, and serves as an adviser to the Vi\u00EBr Elen. National legislation can be brought to vote by any one of the Speakers or by the Vi\u00EBr Elen themself. If a piece of legislation has two Speakers who vote in favor, then it passes unless the Vi\u00EBr Elen vetoes it. If a piece of legislation has all three Speakers supporting it, then there is nothing that can prevent it from passing. Declarations of war may likewise be initiated by any one of the Speakers or the Vi\u00EBr Elen, however, in order for the declaration to pass it must have unanimous agreement. The Vi\u00EBr Elen may deem a Speaker unworthy of their post and that Speaker will be removed if their council agrees. The three Speakers and the Vi\u00EBr Elen reside in the Elven Capital City of Essevael in the Asturian Realm. Each of the eleven noble houses are given one seat on the Eiaven Council. Notably, the noble house of Asturias is granted the Speaker's seat which acts as the tie breaker when there is an even split amongst the other ten noble houses. Each of these noble houses rules over one of the Elven Realms creating laws as they see fit, just so long as those laws do not contradict any of the national legislation. The Speaker for the Fasfontan Council is also the Elven Warlord, or the Auth Arato, commanding the Elven armies in times of war and organizing the Elven guard in times of peace. Beneath the Auth Arato are the Commanders and then the Captains. Each Captain is given a single vote on the Fasfontan Council and each Commander is given five votes. The Auth Arato votes only when there is need for a tie breaker. The seats of the Messaram Council are available to any who have no noble titles and who are not actively enlisted in the military. Each one of the fifty-one seats corresponds to a major Elven City and the individual who holds the seat also serves as the Overseer for that city. The Overseer elections are held every five years and an Overseer may serve any number of terms. The Speaker of the Messaram Council is the Overseer of the Asturian Capital City, Essevael. While each of the noble houses create individual legislation for the Realm they are responsible for, the Overseers are charged with the enforcement of those laws.\n## Military\nThe Elven Military is lead by the Auth Arato who is the Speaker for the Council of Fasfontan. They command the Elven armies in times of war and organize the Elven guard in times of peace. Beneath the Auth Arato are the Commanders and then the Captains. Any citizen of an Elven Realm, common or noble, may become a Captain, however, to attain the rank of Commander or the Auth Arato you must forego any noble titles or position as an Overseer. The bulk of the Elven military force resides in the Eastern Realms patrolling the borders to deter the logging operations of Humans and attempting to crack down on the black market that is taking root."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"dwarves",new cljs.core.Keyword(null,"title","title",636505583),"Dwarves",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"race",new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"## Religion\nThe Dwarves worship Heilm first and foremost. There is a straightforward hierarchy of leadership amongst the Order of Heilm which is determined by the Crucible of Heilm. The Crucible of Heilm is a series of tournaments and competitions held every four years. Those who wish to join the ranks of the Paladins must complete the Trial of the Gauntlet, a grueling and dangerous series of tasks and challenges. Those who wish to rise in the hierarchy and attain greater status as a Paladin may partake in the competitions where they are pitted against one another. Should they manage to defeat two contenders of their own rank and one of a higher rank, they will be evaluated for their deeds throughout the past four years. Should their might and vigilance be deemed worthy, they will attain the next rank. While there are many ways to serve as a Paladin of Heilm, the most common path is as follows. First they become an Initiate where they serve minor functions during court trials of the Paladins and learn the Dwarven fighting style. Then they become a Disciple studying under a higher ranked Paladin and acting as a scribe to them. Then they become a Sentinel where they join a patrol and serve under a Warden at the borders fending off Goblins and Orcs and their ilk. Then they become a Warden and they continue to serve as a leader of a patrol at the borders. Then they become a Witness where they work alongside and Arbiter assisting them in their endeavors. Finally, they become an Arbiter themself, free to enforce the will of Heilm as they see fit. The Dwarven traditions involving Heilm have been unwavering in the face of the Gods\u2019 slumber that began centuries ago.\n## Society\nDwarves are a hardy lot living in constant struggle with the denizens of The Outwild Jungles that lay just beyond the Greyiron Mountains. They are known to be honorable and just yet willing to grant second chances. Should you befriend a Dwarf, you will have a loyal comrade who will neither betray you nor forsake you. Despite the fact that Dwarves do not often entertain Elven guests, they hold strong opinions about them. They distrust the Elves for the manipulations done by the Seers in generations past. Seers and Paladins once served side by side as leaders in the societies of Dwarves and Elves. A time came when the Seers on the Council of Elves foresaw war and conquest with mankind. In the bloody midst of war, the prophecies of this nature were discovered to be counterfeits by a young Master Elheim and the trust in the Seers was broken for many generations. With their long memories, the Dwarves still mistrust the Seers and the Elves.\n## Economy\nThe greatest economic output of the Greyiron Mountains is precious gems, metals, and stones. The Dwarven mines run deep and their forges burn hot. The various Dwarven techniques of forging and architecture are well-kept secrets and the resulting products are coveted throughout Kalashar. This includes weapons, armor, tools, trinkets, and art. Their goods are transported via barge down the rivers that flow out of the Greyiron Mountains passing through Kleth and snaking all throughout The Four Duchies. A few other notable Dwarven exports are a wide array of meads and ales and various rare herbs and types of lumber from The Outwild Jungles. The commodities that are most desired by Dwarves are honey, herbs, silk, and lumber from the Elderwoods and fish from the The Nelend Isles.\n## Politics\nThe King of the Dwarves is largely a figurehead where most of the ruling is reserved for the Arbiters. Technically, the position of King is a Paladin of Heilm one rank above the Arbiters, however, it is often the case that if a King rules well, then their next of kin will succeed them. Thus the Durfall clan has held the position for the last hundred years. Aside from public appearances, maintaining a presence at international negotiations, and organization of the Crucible of Heilm, the King's only real power is adjudicating disputes amongst Arbiters. The inauguration process takes place during the Crucible of Heilm and the heir of the Durfall clan challenges a specialized member of each rank of Paladin to compete. Those members make their vows to serve him and forfeit the competition. Thus the heir ascends to the rank of King in a single day.\n## Military\nThe bulk of the Dwarven military is comprised of Sentinels and Wardens of the Paladins of Heilm. They serve faithfully at the border to The Outwilds repelling the ever violent tribes of Goblins and Trolls. The standard militia largely defend the trade routes and act as city guards serving under Witnesses and Arbiters within the Dwarven towns and cities. Aside from the constant skirmishes with the creatures at the border, the Dwarves live a mostly peaceful existence with very little internal conflict and not much more with humans."], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),"goblins",new cljs.core.Keyword(null,"title","title",636505583),"Goblins",new cljs.core.Keyword(null,"entity-type","entity-type",-1957300125),"race",new cljs.core.Keyword("realm","entity-details","realm/entity-details",1769185843),"Ew, goblins are gross. Why would you want to learn about them?"], null)], null);
entities.realms.data.core.example_realms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(entities.realms.data.core.example_empty_realm,entities.realms.data.core.example_fantasy_realm);

//# sourceMappingURL=entities.realms.data.core.js.map
