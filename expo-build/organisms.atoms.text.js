goog.provide('organisms.atoms.text');
organisms.atoms.text.default_text_style = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"100%"], null);
organisms.atoms.text.view_header_text_style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.text.view_header_text = (function organisms$atoms$text$view_header_text(p__28792){
var map__28793 = p__28792;
var map__28793__$1 = cljs.core.__destructure_map(map__28793);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28793__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.view_header_text_style,style], 0))], null),text], null);
});
organisms.atoms.text.default_text = (function organisms$atoms$text$default_text(var_args){
var args__5881__auto__ = [];
var len__5875__auto___28830 = arguments.length;
var i__5876__auto___28831 = (0);
while(true){
if((i__5876__auto___28831 < len__5875__auto___28830)){
args__5881__auto__.push((arguments[i__5876__auto___28831]));

var G__28832 = (i__5876__auto___28831 + (1));
i__5876__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(organisms.atoms.text.default_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__28808){
var vec__28809 = p__28808;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28809,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.default_text_style,style], 0))], null),text], null);
}));

(organisms.atoms.text.default_text.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(organisms.atoms.text.default_text.cljs$lang$applyTo = (function (seq28797){
var G__28798 = cljs.core.first(seq28797);
var seq28797__$1 = cljs.core.next(seq28797);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28798,seq28797__$1);
}));

organisms.atoms.text.inverted_text = (function organisms$atoms$text$inverted_text(var_args){
var args__5881__auto__ = [];
var len__5875__auto___28833 = arguments.length;
var i__5876__auto___28834 = (0);
while(true){
if((i__5876__auto___28834 < len__5875__auto___28833)){
args__5881__auto__.push((arguments[i__5876__auto___28834]));

var G__28835 = (i__5876__auto___28834 + (1));
i__5876__auto___28834 = G__28835;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return organisms.atoms.text.inverted_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(organisms.atoms.text.inverted_text.cljs$core$IFn$_invoke$arity$variadic = (function (text,p__28817){
var vec__28818 = p__28817;
var style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28818,(0),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.random_uuid(),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([organisms.atoms.text.default_text_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),style], 0))], null),text], null);
}));

(organisms.atoms.text.inverted_text.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(organisms.atoms.text.inverted_text.cljs$lang$applyTo = (function (seq28812){
var G__28813 = cljs.core.first(seq28812);
var seq28812__$1 = cljs.core.next(seq28812);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28813,seq28812__$1);
}));


//# sourceMappingURL=organisms.atoms.text.js.map
