goog.provide('organisms.atoms.markdown');
organisms.atoms.markdown.Markdown = require("react-native-markdown-display").default;
organisms.atoms.markdown.link_click = (function organisms$atoms$markdown$link_click(conn,section,subsection){
return (function (){
return systems.navigation.navigate_BANG_(conn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,subsection], null));
});
});
organisms.atoms.markdown.rules = (function organisms$atoms$markdown$rules(conn,nav_section){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"link","link",-1769163468),(function (node,children,parent,styles){
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(organisms.atoms.buttons.primary_button(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.first(node.children).content,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),organisms.atoms.markdown.link_click(conn,nav_section,node.attributes.href),new cljs.core.Keyword(null,"button-variant","button-variant",-939473245),new cljs.core.Keyword(null,"small","small",2133478704)], null)));
})], null);
});
organisms.atoms.markdown.default_markdown = (function organisms$atoms$markdown$default_markdown(var_args){
var args__5881__auto__ = [];
var len__5875__auto___38610 = arguments.length;
var i__5876__auto___38611 = (0);
while(true){
if((i__5876__auto___38611 < len__5875__auto___38610)){
args__5881__auto__.push((arguments[i__5876__auto___38611]));

var G__38614 = (i__5876__auto___38611 + (1));
i__5876__auto___38611 = G__38614;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((2) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((2)),(0),null)):null);
return organisms.atoms.markdown.default_markdown.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5882__auto__);
});

(organisms.atoms.markdown.default_markdown.cljs$core$IFn$_invoke$arity$variadic = (function (conn,input,variant){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),organisms.atoms.markdown.Markdown,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(20),new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),(20)], null)], null),new cljs.core.Keyword(null,"rules","rules",1198912366),organisms.atoms.markdown.rules(conn,new cljs.core.Keyword(null,"realm","realm",-635663575))], null),input], null);
}));

(organisms.atoms.markdown.default_markdown.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(organisms.atoms.markdown.default_markdown.cljs$lang$applyTo = (function (seq38591){
var G__38592 = cljs.core.first(seq38591);
var seq38591__$1 = cljs.core.next(seq38591);
var G__38593 = cljs.core.first(seq38591__$1);
var seq38591__$2 = cljs.core.next(seq38591__$1);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38592,G__38593,seq38591__$2);
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
