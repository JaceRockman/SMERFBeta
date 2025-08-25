goog.provide('expo.root');
if((typeof expo !== 'undefined') && (typeof expo.root !== 'undefined') && (typeof expo.root.root_ref !== 'undefined')){
} else {
expo.root.root_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof expo !== 'undefined') && (typeof expo.root !== 'undefined') && (typeof expo.root.root_component_ref !== 'undefined')){
} else {
expo.root.root_component_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
expo.root.render_root = (function expo$root$render_root(root){
var first_call_QMARK_ = (cljs.core.deref(expo.root.root_ref) == null);
cljs.core.reset_BANG_(expo.root.root_ref,root);

if((!(first_call_QMARK_))){
var temp__5804__auto__ = cljs.core.deref(expo.root.root_component_ref);
if(cljs.core.truth_(temp__5804__auto__)){
var root__$1 = temp__5804__auto__;
return root__$1.forceUpdate();
} else {
return null;
}
} else {
var Root = shadow.js.shim.module$create_react_class(({"componentDidMount": (function (){
var this$ = this;
return cljs.core.reset_BANG_(expo.root.root_component_ref,this$);
}), "componentWillUnmount": (function (){
return cljs.core.reset_BANG_(expo.root.root_component_ref,null);
}), "render": (function (){
var body = cljs.core.deref(expo.root.root_ref);
if(cljs.core.fn_QMARK_(body)){
return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
} else {
return body;
}
})}));
return shadow.js.shim.module$expo.registerRootComponent(Root);
}
});

//# sourceMappingURL=expo.root.js.map
