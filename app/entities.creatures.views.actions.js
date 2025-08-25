goog.provide('entities.creatures.views.actions');
entities.creatures.views.actions.actions = (function entities$creatures$views$actions$actions(conn,p__39748,domains,resources){
var map__39749 = p__39748;
var map__39749__$1 = cljs.core.__destructure_map(map__39749);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,new cljs.core.Keyword("db","id","db/id",-1388397098));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,new cljs.core.Keyword("creature","actions","creature/actions",-65901997));
var action_details = (entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1 ? entities.actions.data.interface$.get_all_actions.cljs$core$IFn$_invoke$arity$1(conn) : entities.actions.data.interface$.get_all_actions.call(null,conn));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),entities.actions.views.action_list(conn,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"creature-id","creature-id",2009156475),id,new cljs.core.Keyword(null,"actions","actions",-812656882),action_details,new cljs.core.Keyword(null,"domains","domains",1410387719),domains,new cljs.core.Keyword(null,"resources","resources",1632806811),resources,new cljs.core.Keyword(null,"header","header",119441134),"Actions"], null))], null);
});

//# sourceMappingURL=entities.creatures.views.actions.js.map
