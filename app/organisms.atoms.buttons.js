goog.provide('organisms.atoms.buttons');
organisms.atoms.buttons.test_button = (function organisms$atoms$buttons$test_button(p__34557){
var map__34558 = p__34557;
var map__34558__$1 = cljs.core.__destructure_map(map__34558);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"button-style","button-style",314949943));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34558__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),button_style,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),text_style], null),text], null)], null);
});
organisms.atoms.buttons.primary_button_style = (function organisms$atoms$buttons$primary_button_style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34665 = arguments.length;
var i__5770__auto___34666 = (0);
while(true){
if((i__5770__auto___34666 < len__5769__auto___34665)){
args__5775__auto__.push((arguments[i__5770__auto___34666]));

var G__34667 = (i__5770__auto___34666 + (1));
i__5770__auto___34666 = G__34667;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__34576){
var vec__34577 = p__34576;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34577,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"primary-200","primary-200",388530047).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
var G__34582 = variant;
var G__34582__$1 = (((G__34582 instanceof cljs.core.Keyword))?G__34582.fqn:null);
switch (G__34582__$1) {
case "small":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null)], 0));

break;
case "large":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(18),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(30)], null)], 0));

break;
default:
return base_button_style;

}
}));

(organisms.atoms.buttons.primary_button_style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(organisms.atoms.buttons.primary_button_style.cljs$lang$applyTo = (function (seq34562){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34562));
}));

organisms.atoms.buttons.primary_button_text_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-100","primary-100",-1658947400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null);
organisms.atoms.buttons.primary_button = (function organisms$atoms$buttons$primary_button(p__34588){
var map__34593 = p__34588;
var map__34593__$1 = cljs.core.__destructure_map(map__34593);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"text-style-variant","text-style-variant",1181195324));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34593__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.primary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.secondary_button_style = (function organisms$atoms$buttons$secondary_button_style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34673 = arguments.length;
var i__5770__auto___34674 = (0);
while(true){
if((i__5770__auto___34674 < len__5769__auto___34673)){
args__5775__auto__.push((arguments[i__5770__auto___34674]));

var G__34675 = (i__5770__auto___34674 + (1));
i__5770__auto___34674 = G__34675;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__34612){
var vec__34613 = p__34612;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34613,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"primary-200","primary-200",388530047).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null);
var G__34619 = variant;
var G__34619__$1 = (((G__34619 instanceof cljs.core.Keyword))?G__34619.fqn:null);
switch (G__34619__$1) {
case "small":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], 0));

break;
case "large":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], 0));

break;
default:
return base_button_style;

}
}));

(organisms.atoms.buttons.secondary_button_style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(organisms.atoms.buttons.secondary_button_style.cljs$lang$applyTo = (function (seq34603){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34603));
}));

organisms.atoms.buttons.secondary_button_text_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.buttons.secondary_button = (function organisms$atoms$buttons$secondary_button(p__34626){
var map__34627 = p__34626;
var map__34627__$1 = cljs.core.__destructure_map(map__34627);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34627__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.secondary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.tertiary_button_style = (function organisms$atoms$buttons$tertiary_button_style(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34677 = arguments.length;
var i__5770__auto___34679 = (0);
while(true){
if((i__5770__auto___34679 < len__5769__auto___34677)){
args__5775__auto__.push((arguments[i__5770__auto___34679]));

var G__34680 = (i__5770__auto___34679 + (1));
i__5770__auto___34679 = G__34680;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__34637){
var vec__34638 = p__34637;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34638,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(200, 200, 200, 0.05)",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
var G__34641 = variant;
var G__34641__$1 = (((G__34641 instanceof cljs.core.Keyword))?G__34641.fqn:null);
switch (G__34641__$1) {
case "small":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], 0));

break;
case "large":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(12),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], 0));

break;
default:
return base_button_style;

}
}));

(organisms.atoms.buttons.tertiary_button_style.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(organisms.atoms.buttons.tertiary_button_style.cljs$lang$applyTo = (function (seq34632){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34632));
}));

organisms.atoms.buttons.tertiary_button_text_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.buttons.tertiary_button = (function organisms$atoms$buttons$tertiary_button(p__34648){
var map__34649 = p__34648;
var map__34649__$1 = cljs.core.__destructure_map(map__34649);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34649__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.tertiary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.button = (function organisms$atoms$buttons$button(p__34655,text){
var map__34656 = p__34655;
var map__34656__$1 = cljs.core.__destructure_map(map__34656);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34656__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.List.EMPTY;
}));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var disabled_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"disabled-style","disabled-style",-1938321590));
var disabled_text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34656__$1,new cljs.core.Keyword(null,"disabled-text-style","disabled-text-style",1412905220));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),["pressable-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__34657 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"padding","padding",1660304693),(6),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(999),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
var G__34657__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__34657,style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__34657__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#aaaaaa"], null),disabled_style], 0));
} else {
return G__34657__$1;
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),["text-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__34658 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
var G__34658__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__34658,text_style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__34658__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),disabled_text_style], 0));
} else {
return G__34658__$1;
}
})()], null),text], null)], null);
});

//# sourceMappingURL=organisms.atoms.buttons.js.map
