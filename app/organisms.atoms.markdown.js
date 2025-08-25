goog.provide('organisms.atoms.markdown');
organisms.atoms.markdown.Markdown = require("react-native-markdown-display").default;
organisms.atoms.markdown.link_click = (function organisms$atoms$markdown$link_click(conn,section,subsection){
return (function (){
return systems.navigation.navigate_BANG_(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(subsection)], null));
});
});
organisms.atoms.markdown.rules = (function organisms$atoms$markdown$rules(conn,nav_section){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"link","link",-1769163468),(function (node,children,parent,styles){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(organisms.atoms.buttons.primary_button(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.first(node.children).content,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),organisms.atoms.markdown.link_click(conn,nav_section,node.attributes.href),new cljs.core.Keyword(null,"button-variant","button-variant",-939473245),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
})], null);
});
organisms.atoms.markdown.default_markdown = (function organisms$atoms$markdown$default_markdown(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39344 = arguments.length;
var i__5770__auto___39345 = (0);
while(true){
if((i__5770__auto___39345 < len__5769__auto___39344)){
args__5775__auto__.push((arguments[i__5770__auto___39345]));

var G__39346 = (i__5770__auto___39345 + (1));
i__5770__auto___39345 = G__39346;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return organisms.atoms.markdown.default_markdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(organisms.atoms.markdown.default_markdown.cljs$core$IFn$_invoke$arity$variadic = (function (conn,input,variant){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),organisms.atoms.markdown.Markdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),organisms.atoms.markdown.rules(conn,new cljs.core.Keyword(null,"realm","realm",-635663575))], null),input], null);
}));

(organisms.atoms.markdown.default_markdown.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(organisms.atoms.markdown.default_markdown.cljs$lang$applyTo = (function (seq39341){
var G__39342 = cljs.core.first(seq39341);
var seq39341__$1 = cljs.core.next(seq39341);
var G__39343 = cljs.core.first(seq39341__$1);
var seq39341__$2 = cljs.core.next(seq39341__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39342,G__39343,seq39341__$2);
}));

organisms.atoms.markdown.realm_nav_rules = (function organisms$atoms$markdown$realm_nav_rules(conn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"link","link",-1769163468),(function (node,children,parent,styles){
var button_text = cljs.core.first(node.children).content;
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(organisms.atoms.buttons.primary_button(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),button_text,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return (entities.realms.data.interface$.set_active_subrealm_by_name.cljs$core$IFn$_invoke$arity$2 ? entities.realms.data.interface$.set_active_subrealm_by_name.cljs$core$IFn$_invoke$arity$2(conn,button_text) : entities.realms.data.interface$.set_active_subrealm_by_name.call(null,conn,button_text));
}),new cljs.core.Keyword(null,"button-variant","button-variant",-939473245),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
})], null);
});
organisms.atoms.markdown.default_realm_markdown = (function organisms$atoms$markdown$default_realm_markdown(conn,input){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),organisms.atoms.markdown.Markdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),organisms.atoms.markdown.realm_nav_rules(conn)], null),input], null);
});

//# sourceMappingURL=organisms.atoms.markdown.js.map
