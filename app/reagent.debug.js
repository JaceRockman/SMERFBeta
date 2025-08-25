goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27912__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27914__i = 0, G__27914__a = new Array(arguments.length -  0);
while (G__27914__i < G__27914__a.length) {G__27914__a[G__27914__i] = arguments[G__27914__i + 0]; ++G__27914__i;}
  args = new cljs.core.IndexedSeq(G__27914__a,0,null);
} 
return G__27912__delegate.call(this,args);};
G__27912.cljs$lang$maxFixedArity = 0;
G__27912.cljs$lang$applyTo = (function (arglist__27915){
var args = cljs.core.seq(arglist__27915);
return G__27912__delegate(args);
});
G__27912.cljs$core$IFn$_invoke$arity$variadic = G__27912__delegate;
return G__27912;
})()
);

(o.error = (function() { 
var G__27916__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27916 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27918__i = 0, G__27918__a = new Array(arguments.length -  0);
while (G__27918__i < G__27918__a.length) {G__27918__a[G__27918__i] = arguments[G__27918__i + 0]; ++G__27918__i;}
  args = new cljs.core.IndexedSeq(G__27918__a,0,null);
} 
return G__27916__delegate.call(this,args);};
G__27916.cljs$lang$maxFixedArity = 0;
G__27916.cljs$lang$applyTo = (function (arglist__27919){
var args = cljs.core.seq(arglist__27919);
return G__27916__delegate(args);
});
G__27916.cljs$core$IFn$_invoke$arity$variadic = G__27916__delegate;
return G__27916;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
