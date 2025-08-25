goog.provide('entities.creatures.views.stats');
entities.creatures.views.stats.section_divider = (function entities$creatures$views$stats$section_divider(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),"80%",new cljs.core.Keyword(null,"height","height",1025178622),(2),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null)], null);
});
entities.creatures.views.stats.stats_section_style = (function entities$creatures$views$stats$stats_section_style(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null);
});
entities.creatures.views.stats.skill = (function entities$creatures$views$stats$skill(title,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,value], null)], null);
});
entities.creatures.views.stats.ability = (function entities$creatures$views$stats$ability(title,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('')], null)], null);
});
entities.creatures.views.stats.skillbility_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(10)], null);
entities.creatures.views.stats.skillbility = (function entities$creatures$views$stats$skillbility(title,skill_value,ability_value){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"25%",new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(function (){var G__39528 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(skill_value),"d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ability_value)].join(''),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title,"button pressed"], 0));
})], null);
return (organisms.library.tertiary_button.cljs$core$IFn$_invoke$arity$1 ? organisms.library.tertiary_button.cljs$core$IFn$_invoke$arity$1(G__39528) : organisms.library.tertiary_button.call(null,G__39528));
})()], null);
});
entities.creatures.views.stats.damage_severity_tracker = (function entities$creatures$views$stats$damage_severity_tracker(conn,domain_id,p__39529){
var map__39530 = p__39529;
var map__39530__$1 = cljs.core.__destructure_map(map__39530);
var severity_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,new cljs.core.Keyword(null,"severity-title","severity-title",419871891));
var damage_quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,new cljs.core.Keyword(null,"damage-quantity","damage-quantity",-256397950));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),(function (){var G__39531 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(severity_title)," Wounds"].join('');
var G__39532 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39531,G__39532) : organisms.library.default_text.call(null,G__39531,G__39532));
})(),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null),(function (){var G__39533 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null),new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.creatures.data.interface$.update_wound_value.cljs$core$IFn$_invoke$arity$4 ? entities.creatures.data.interface$.update_wound_value.cljs$core$IFn$_invoke$arity$4(conn,domain_id,severity_title,cljs.core.dec) : entities.creatures.data.interface$.update_wound_value.call(null,conn,domain_id,severity_title,cljs.core.dec));
})], null);
var G__39534 = "-";
return (organisms.library.button.cljs$core$IFn$_invoke$arity$2 ? organisms.library.button.cljs$core$IFn$_invoke$arity$2(G__39533,G__39534) : organisms.library.button.call(null,G__39533,G__39534));
})(),(function (){var G__39535 = damage_quantity;
var G__39536 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39535,G__39536) : organisms.library.default_text.call(null,G__39535,G__39536));
})(),(function (){var G__39541 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(2),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"inherit","inherit",-1840815422)], null),new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.creatures.data.interface$.update_wound_value.cljs$core$IFn$_invoke$arity$4 ? entities.creatures.data.interface$.update_wound_value.cljs$core$IFn$_invoke$arity$4(conn,domain_id,severity_title,cljs.core.inc) : entities.creatures.data.interface$.update_wound_value.call(null,conn,domain_id,severity_title,cljs.core.inc));
})], null);
var G__39542 = "+";
return (organisms.library.button.cljs$core$IFn$_invoke$arity$2 ? organisms.library.button.cljs$core$IFn$_invoke$arity$2(G__39541,G__39542) : organisms.library.button.call(null,G__39541,G__39542));
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null)], null)], null)], null);
});
entities.creatures.views.stats.domain_damage_modal = (function entities$creatures$views$stats$domain_damage_modal(conn,domain_id){
var stat_granularity = new cljs.core.Keyword("ruleset","stat-granularity","ruleset/stat-granularity",-1772995702).cljs$core$IFn$_invoke$arity$1((entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(20),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(20),new cljs.core.Keyword(null,"gap","gap",80255254),(20)], null)], null),entities.creatures.views.stats.damage_severity_tracker(conn,domain_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"severity-title","severity-title",419871891),"Minor",new cljs.core.Keyword(null,"damage-quantity","damage-quantity",-256397950),(entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3 ? entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3(conn,domain_id,"minor") : entities.creatures.data.interface$.get_creature_domain_damage.call(null,conn,domain_id,"minor"))], null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat_granularity,"skillbility")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat_granularity,"stats"))))?entities.creatures.views.stats.damage_severity_tracker(conn,domain_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"severity-title","severity-title",419871891),"Moderate",new cljs.core.Keyword(null,"damage-quantity","damage-quantity",-256397950),(entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3 ? entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3(conn,domain_id,"moderate") : entities.creatures.data.interface$.get_creature_domain_damage.call(null,conn,domain_id,"moderate"))], null)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(stat_granularity,"stats"))?entities.creatures.views.stats.damage_severity_tracker(conn,domain_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"severity-title","severity-title",419871891),"Major",new cljs.core.Keyword(null,"damage-quantity","damage-quantity",-256397950),(entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3 ? entities.creatures.data.interface$.get_creature_domain_damage.cljs$core$IFn$_invoke$arity$3(conn,domain_id,"major") : entities.creatures.data.interface$.get_creature_domain_damage.call(null,conn,domain_id,"major"))], null)):null)], null);
});
entities.creatures.views.stats.domain_damage = (function entities$creatures$views$stats$domain_damage(conn,domain_id){
var update_damage_fn = (function (){
return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display?","display?",-1189123617),true,new cljs.core.Keyword(null,"fn","fn",-1175266204),entities.creatures.views.stats.domain_damage_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn,domain_id], null)], null));
});
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(function (){var G__39549 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"none","none",1333468478)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),update_damage_fn], null);
var G__39550 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((entities.creatures.data.interface$.get_creature_domain_damage_total.cljs$core$IFn$_invoke$arity$2 ? entities.creatures.data.interface$.get_creature_domain_damage_total.cljs$core$IFn$_invoke$arity$2(conn,domain_id) : entities.creatures.data.interface$.get_creature_domain_damage_total.call(null,conn,domain_id)));
return (organisms.library.button.cljs$core$IFn$_invoke$arity$2 ? organisms.library.button.cljs$core$IFn$_invoke$arity$2(G__39549,G__39550) : organisms.library.button.call(null,G__39549,G__39550));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),(-6)], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),update_damage_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(12)], null)], null)], null)], null);
});
entities.creatures.views.stats.selected_ability = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
entities.creatures.views.stats.selected_skill = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
entities.creatures.views.stats.domain_stat = (function entities$creatures$views$stats$domain_stat(conn,domain_details,p__39554){
var map__39555 = p__39554;
var map__39555__$1 = cljs.core.__destructure_map(map__39555);
var damage_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,new cljs.core.Keyword(null,"damage-hidden?","damage-hidden?",-2100240093));
var row_style_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,new cljs.core.Keyword(null,"row-style-override","row-style-override",-1184003089));
var row_press_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39555__$1,new cljs.core.Keyword(null,"row-press-override","row-press-override",297881763));
var flex_vals = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1),(1)], null);
var derive_item = (function (domain_title){
var map__39562 = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__39552_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domain_title,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__39552_SHARP_));
}),domain_details));
var map__39562__$1 = cljs.core.__destructure_map(map__39562);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var initiation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816));
var reaction_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","reaction-value","domain/reaction-value",223816699));
var continuation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","continuation-value","domain/continuation-value",1678611752));
var dominance_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813));
var competence_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","competence-value","domain/competence-value",2089669119));
var resilience_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","resilience-value","domain/resilience-value",1699276006));
var minor_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),domain_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816),new cljs.core.Keyword(null,"quality","quality",147850199),cljs.math.round((((initiation_value + reaction_value) + continuation_value) / (3))),new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813),new cljs.core.Keyword(null,"power","power",-937852079),((2) * cljs.math.round((((cljs.core.quot(dominance_value,(2)) + cljs.core.quot(competence_value,(2))) + cljs.core.quot(resilience_value,(2))) / (3))))], null);
});
var physical_item = derive_item("Physical");
var spiritual_item = derive_item("Spiritual");
var mental_item = derive_item("Mental");
var social_item = derive_item("Social");
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),entities.creatures.views.stats.stats_section_style()], null),(function (){var G__39567 = "Stats";
var G__39568 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39567,G__39568) : organisms.library.default_text.call(null,G__39567,G__39568));
})(),(function (){var G__39569 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [physical_item,spiritual_item,mental_item,social_item], null),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Quality","Power",(cljs.core.truth_(damage_hidden_QMARK_)?null:"Damage")], null)),new cljs.core.Keyword(null,"flex-vals","flex-vals",1874330255),flex_vals,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (item){
var row_style = (cljs.core.truth_(row_style_override)?(row_style_override.cljs$core$IFn$_invoke$arity$1 ? row_style_override.cljs$core$IFn$_invoke$arity$1(item) : row_style_override.call(null,item)):null);
var row_press = (cljs.core.truth_(row_press_override)?(row_press_override.cljs$core$IFn$_invoke$arity$1 ? row_press_override.cljs$core$IFn$_invoke$arity$1(item) : row_press_override.call(null,item)):null);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__5045__auto__ = row_style;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){var or__5045__auto__ = row_press;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (){
return null;
});
}
})()], null),(function (){var G__39570 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item);
var G__39571 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39570,G__39571) : organisms.library.default_text.call(null,G__39570,G__39571));
})(),(function (){var G__39572 = new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(item);
var G__39573 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39572,G__39573) : organisms.library.default_text.call(null,G__39572,G__39573));
})(),(function (){var G__39574 = ["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(item))].join('');
var G__39575 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(2))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39574,G__39575) : organisms.library.default_text.call(null,G__39574,G__39575));
})(),(cljs.core.truth_(damage_hidden_QMARK_)?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(3))], null)], null),entities.creatures.views.stats.domain_damage(conn,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877).cljs$core$IFn$_invoke$arity$1(item))], null))], null);
})], null);
return (organisms.library.flat_list.cljs$core$IFn$_invoke$arity$1 ? organisms.library.flat_list.cljs$core$IFn$_invoke$arity$1(G__39569) : organisms.library.flat_list.call(null,G__39569));
})()], null);
});
entities.creatures.views.stats.skillbility_stat = (function entities$creatures$views$stats$skillbility_stat(conn,p__39576,p__39577){
var map__39578 = p__39576;
var map__39578__$1 = cljs.core.__destructure_map(map__39578);
var continuation_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","continuation-title","domain/continuation-title",878596352));
var moderate_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270));
var reaction_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","reaction-title","domain/reaction-title",-343567387));
var resilience_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","resilience-value","domain/resilience-value",1699276006));
var continuation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","continuation-value","domain/continuation-value",1678611752));
var dominance_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword(null,"title","title",636505583));
var initiation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816));
var competence_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","competence-title","domain/competence-title",-1910630060));
var initiation_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","initiation-title","domain/initiation-title",917948948));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var major_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536));
var dominance_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","dominance-title","domain/dominance-title",-714914279));
var reaction_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","reaction-value","domain/reaction-value",223816699));
var resilience_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","resilience-title","domain/resilience-title",-1529002980));
var competence_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","competence-value","domain/competence-value",2089669119));
var minor_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967));
var map__39579 = p__39577;
var map__39579__$1 = cljs.core.__destructure_map(map__39579);
var damage_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"damage-hidden?","damage-hidden?",-2100240093));
var row_style_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"row-style-override","row-style-override",-1184003089));
var row_press_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,new cljs.core.Keyword(null,"row-press-override","row-press-override",297881763));
var flex_vals = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1),(1)], null);
var initiation_item = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),initiation_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816),new cljs.core.Keyword(null,"quality","quality",147850199),initiation_value,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813),new cljs.core.Keyword(null,"power","power",-937852079),dominance_value], null);
var reaction_item = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),reaction_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","reaction-value","domain/reaction-value",223816699),new cljs.core.Keyword(null,"quality","quality",147850199),reaction_value,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","competence-value","domain/competence-value",2089669119),new cljs.core.Keyword(null,"power","power",-937852079),competence_value], null);
var continuation_item = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),continuation_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","continuation-value","domain/continuation-value",1678611752),new cljs.core.Keyword(null,"quality","quality",147850199),continuation_value,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","resilience-value","domain/resilience-value",1699276006),new cljs.core.Keyword(null,"power","power",-937852079),resilience_value], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 10px 0px 10px"], null)], null),(function (){var G__39584 = title;
var G__39585 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39584,G__39585) : organisms.library.default_text.call(null,G__39584,G__39585));
})(),(function (){var G__39586 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [initiation_item,reaction_item,continuation_item], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Quality","Power"], null),new cljs.core.Keyword(null,"flex-vals","flex-vals",1874330255),flex_vals,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (item){
var row_style = (cljs.core.truth_(row_style_override)?(row_style_override.cljs$core$IFn$_invoke$arity$1 ? row_style_override.cljs$core$IFn$_invoke$arity$1(item) : row_style_override.call(null,item)):null);
var row_press = (cljs.core.truth_(row_press_override)?(row_press_override.cljs$core$IFn$_invoke$arity$1 ? row_press_override.cljs$core$IFn$_invoke$arity$1(item) : row_press_override.call(null,item)):null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__5045__auto__ = row_style;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){var or__5045__auto__ = row_press;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (){
return null;
});
}
})()], null),(function (){var G__39587 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item);
var G__39588 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39587,G__39588) : organisms.library.default_text.call(null,G__39587,G__39588));
})(),(function (){var G__39589 = new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(item);
var G__39590 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39589,G__39590) : organisms.library.default_text.call(null,G__39589,G__39590));
})(),(function (){var G__39591 = ["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"power","power",-937852079).cljs$core$IFn$_invoke$arity$1(item))].join('');
var G__39592 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39591,G__39592) : organisms.library.default_text.call(null,G__39591,G__39592));
})()], null);
})], null);
return (organisms.library.flat_list.cljs$core$IFn$_invoke$arity$1 ? organisms.library.flat_list.cljs$core$IFn$_invoke$arity$1(G__39586) : organisms.library.flat_list.call(null,G__39586));
})(),(cljs.core.truth_(damage_hidden_QMARK_)?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Damage: ",entities.creatures.views.stats.domain_damage(conn,id)], null))], null);
});
entities.creatures.views.stats.skill_and_ability_stat = (function entities$creatures$views$stats$skill_and_ability_stat(conn,p__39593,p__39594){
var map__39595 = p__39593;
var map__39595__$1 = cljs.core.__destructure_map(map__39595);
var continuation_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","continuation-title","domain/continuation-title",878596352));
var moderate_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","moderate-wounds","domain/moderate-wounds",-19434270));
var reaction_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","reaction-title","domain/reaction-title",-343567387));
var resilience_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","resilience-value","domain/resilience-value",1699276006));
var continuation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","continuation-value","domain/continuation-value",1678611752));
var dominance_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword(null,"title","title",636505583));
var initiation_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816));
var competence_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","competence-title","domain/competence-title",-1910630060));
var initiation_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","initiation-title","domain/initiation-title",917948948));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var major_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","major-wounds","domain/major-wounds",-1879598536));
var dominance_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","dominance-title","domain/dominance-title",-714914279));
var reaction_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","reaction-value","domain/reaction-value",223816699));
var resilience_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","resilience-title","domain/resilience-title",-1529002980));
var competence_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","competence-value","domain/competence-value",2089669119));
var minor_wounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39595__$1,new cljs.core.Keyword("domain","minor-wounds","domain/minor-wounds",661715967));
var map__39596 = p__39594;
var map__39596__$1 = cljs.core.__destructure_map(map__39596);
var damage_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"damage-hidden?","damage-hidden?",-2100240093));
var row_press_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"row-press-override","row-press-override",297881763));
var row_style_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39596__$1,new cljs.core.Keyword(null,"row-style-override","row-style-override",-1184003089));
var flex_vals = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(2)], null);
var initiation_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),initiation_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","initiation-value","domain/initiation-value",-1934304816),new cljs.core.Keyword(null,"value","value",305978217),initiation_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"skill","skill",155065636)], null);
var reaction_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),reaction_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","reaction-value","domain/reaction-value",223816699),new cljs.core.Keyword(null,"value","value",305978217),reaction_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"skill","skill",155065636)], null);
var continuation_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),continuation_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"quality-key","quality-key",1953930891),new cljs.core.Keyword("domain","continuation-value","domain/continuation-value",1678611752),new cljs.core.Keyword(null,"value","value",305978217),continuation_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"skill","skill",155065636)], null);
var skill_section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Skills",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [initiation_item,reaction_item,continuation_item], null)], null);
var dominance_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),dominance_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","dominance-value","domain/dominance-value",-561793813),new cljs.core.Keyword(null,"value","value",305978217),dominance_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ability","ability",1440715336)], null);
var competence_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),competence_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","competence-value","domain/competence-value",2089669119),new cljs.core.Keyword(null,"value","value",305978217),competence_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ability","ability",1440715336)], null);
var resilience_item = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),resilience_title,new cljs.core.Keyword(null,"domain-id","domain-id",-373492877),id,new cljs.core.Keyword(null,"power-key","power-key",-403308292),new cljs.core.Keyword("domain","resilience-value","domain/resilience-value",1699276006),new cljs.core.Keyword(null,"value","value",305978217),resilience_value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ability","ability",1440715336)], null);
var ability_section = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Abilities",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dominance_item,competence_item,resilience_item], null)], null);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 10px 0px 10px"], null)], null),(function (){var G__39597 = title;
var G__39598 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(28)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39597,G__39598) : organisms.library.default_text.call(null,G__39597,G__39598));
})(),(function (){var G__39599 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [skill_section,ability_section], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Title","Value"], null),new cljs.core.Keyword(null,"flex-vals","flex-vals",1874330255),flex_vals,new cljs.core.Keyword(null,"item-format-fn","item-format-fn",-1806627887),(function (item){
var row_style = (cljs.core.truth_(row_style_override)?(row_style_override.cljs$core$IFn$_invoke$arity$1 ? row_style_override.cljs$core$IFn$_invoke$arity$1(item) : row_style_override.call(null,item)):null);
var row_press = (cljs.core.truth_(row_press_override)?(row_press_override.cljs$core$IFn$_invoke$arity$1 ? row_press_override.cljs$core$IFn$_invoke$arity$1(item) : row_press_override.call(null,item)):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var or__5045__auto__ = row_style;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521)], null);
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){var or__5045__auto__ = row_press;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)], 0));
});
}
})()], null),(function (){var G__39600 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(item);
var G__39601 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(0))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39600,G__39601) : organisms.library.default_text.call(null,G__39600,G__39601));
})(),(function (){var G__39602 = [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ability",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item)))?"d":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item))].join('');
var G__39603 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flex_vals,(1))], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39602,G__39603) : organisms.library.default_text.call(null,G__39602,G__39603));
})()], null);
})], null);
return (organisms.library.section_list.cljs$core$IFn$_invoke$arity$1 ? organisms.library.section_list.cljs$core$IFn$_invoke$arity$1(G__39599) : organisms.library.section_list.call(null,G__39599));
})(),(cljs.core.truth_(damage_hidden_QMARK_)?null:new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Damage: ",entities.creatures.views.stats.domain_damage(conn,id)], null))], null);
});
entities.creatures.views.stats.stats = (function entities$creatures$views$stats$stats(conn,domains,p__39604){
var map__39605 = p__39604;
var map__39605__$1 = cljs.core.__destructure_map(map__39605);
var options = map__39605__$1;
var damage_hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39605__$1,new cljs.core.Keyword(null,"damage-hidden?","damage-hidden?",-2100240093));
var row_press_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39605__$1,new cljs.core.Keyword(null,"row-press-override","row-press-override",297881763));
var row_style_override = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39605__$1,new cljs.core.Keyword(null,"row-style-override","row-style-override",-1184003089));
var ruleset = (entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1 ? entities.campaigns.data.interface$.get_campaign_active_ruleset.cljs$core$IFn$_invoke$arity$1(conn) : entities.campaigns.data.interface$.get_campaign_active_ruleset.call(null,conn));
var G__39606 = (function (){var or__5045__auto__ = new cljs.core.Keyword("ruleset","stat-granularity","ruleset/stat-granularity",-1772995702).cljs$core$IFn$_invoke$arity$1(ruleset);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "skillbility";
}
})();
switch (G__39606) {
case "domain":
return entities.creatures.views.stats.domain_stat(conn,domains,options);

break;
case "skillbility":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),entities.creatures.views.stats.stats_section_style()], null),(function (){var G__39607 = "Stats";
var G__39608 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39607,G__39608) : organisms.library.default_text.call(null,G__39607,G__39608));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$4(entities.creatures.views.stats.skillbility_stat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(conn),domains,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(options))], null);

break;
case "stats":
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.ScrollView,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),entities.creatures.views.stats.stats_section_style()], null),(function (){var G__39609 = "Stats";
var G__39610 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(32)], null);
return (organisms.library.default_text.cljs$core$IFn$_invoke$arity$2 ? organisms.library.default_text.cljs$core$IFn$_invoke$arity$2(G__39609,G__39610) : organisms.library.default_text.call(null,G__39609,G__39610));
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$4(entities.creatures.views.stats.skill_and_ability_stat,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(conn),domains,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(options))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39606)].join('')));

}
});

//# sourceMappingURL=entities.creatures.views.stats.js.map
