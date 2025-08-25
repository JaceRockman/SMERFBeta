goog.provide('organisms.molecules.decrementor_incrementor');
organisms.molecules.decrementor_incrementor.decrementor_and_incrementor = (function organisms$molecules$decrementor_incrementor$decrementor_and_incrementor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34766 = arguments.length;
var i__5770__auto___34768 = (0);
while(true){
if((i__5770__auto___34768 < len__5769__auto___34766)){
args__5775__auto__.push((arguments[i__5770__auto___34768]));

var G__34769 = (i__5770__auto___34768 + (1));
i__5770__auto___34768 = G__34769;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return organisms.molecules.decrementor_incrementor.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(organisms.molecules.decrementor_incrementor.decrementor_and_incrementor.cljs$core$IFn$_invoke$arity$variadic = (function (label,number,dec_fn,inc_fn,p__34758){
var vec__34760 = p__34758;
var vertical_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34760,(0),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),(cljs.core.truth_(vertical_QMARK_)?null:organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic(label,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0))),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),(cljs.core.truth_(vertical_QMARK_)?new cljs.core.Keyword(null,"column","column",2078222095):new cljs.core.Keyword(null,"row","row",-570139521)),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),(10)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(cljs.core.truth_(vertical_QMARK_)?inc_fn:dec_fn)], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(vertical_QMARK_)?"^":"-"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0))], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic(number,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null)], 0)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(cljs.core.truth_(vertical_QMARK_)?dec_fn:inc_fn)], null),organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(vertical_QMARK_)?"v":"+"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0))], null)], null)], null);
}));

(organisms.molecules.decrementor_incrementor.decrementor_and_incrementor.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(organisms.molecules.decrementor_incrementor.decrementor_and_incrementor.cljs$lang$applyTo = (function (seq34749){
var G__34750 = cljs.core.first(seq34749);
var seq34749__$1 = cljs.core.next(seq34749);
var G__34751 = cljs.core.first(seq34749__$1);
var seq34749__$2 = cljs.core.next(seq34749__$1);
var G__34752 = cljs.core.first(seq34749__$2);
var seq34749__$3 = cljs.core.next(seq34749__$2);
var G__34753 = cljs.core.first(seq34749__$3);
var seq34749__$4 = cljs.core.next(seq34749__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34750,G__34751,G__34752,G__34753,seq34749__$4);
}));


//# sourceMappingURL=organisms.molecules.decrementor_incrementor.js.map
