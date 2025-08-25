goog.provide('organisms.atoms.text');
organisms.atoms.text.default_text_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null);
organisms.atoms.text.view_header_text_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.text.view_header_text = (function organisms$atoms$text$view_header_text(p__34570){
var map__34571 = p__34570;
var map__34571__$1 = cljs.core.__destructure_map(map__34571);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34571__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34571__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.view_header_text_style,style], 0))], null),text], null);
});
organisms.atoms.text.default_text = (function organisms$atoms$text$default_text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34623 = arguments.length;
var i__5770__auto___34624 = (0);
while(true){
if((i__5770__auto___34624 < len__5769__auto___34623)){
args__5775__auto__.push((arguments[i__5770__auto___34624]));

var G__34625 = (i__5770__auto___34624 + (1));
i__5770__auto___34624 = G__34625;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__34589){
var vec__34590 = p__34589;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34590,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.default_text_style,style], 0))], null),text], null);
}));

(organisms.atoms.text.default_text.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(organisms.atoms.text.default_text.cljs$lang$applyTo = (function (seq34580){
var G__34581 = cljs.core.first(seq34580);
var seq34580__$1 = cljs.core.next(seq34580);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34581,seq34580__$1);
}));

organisms.atoms.text.inverted_text = (function organisms$atoms$text$inverted_text(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34629 = arguments.length;
var i__5770__auto___34630 = (0);
while(true){
if((i__5770__auto___34630 < len__5769__auto___34629)){
args__5775__auto__.push((arguments[i__5770__auto___34630]));

var G__34631 = (i__5770__auto___34630 + (1));
i__5770__auto___34630 = G__34631;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return organisms.atoms.text.inverted_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(organisms.atoms.text.inverted_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__34608){
var vec__34609 = p__34608;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34609,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.default_text_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),style], 0))], null),text], null);
}));

(organisms.atoms.text.inverted_text.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(organisms.atoms.text.inverted_text.cljs$lang$applyTo = (function (seq34601){
var G__34602 = cljs.core.first(seq34601);
var seq34601__$1 = cljs.core.next(seq34601);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34602,seq34601__$1);
}));


//# sourceMappingURL=organisms.atoms.text.js.map
