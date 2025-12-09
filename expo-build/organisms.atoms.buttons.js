goog.provide('organisms.atoms.buttons');
organisms.atoms.buttons.test_button = (function organisms$atoms$buttons$test_button(p__29044){
var map__29045 = p__29044;
var map__29045__$1 = cljs.core.__destructure_map(map__29045);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"button-style","button-style",314949943));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29045__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),button_style,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),text_style], null),text], null)], null);
});
organisms.atoms.buttons.primary_button_style = (function organisms$atoms$buttons$primary_button_style(var_args){
var args__5881__auto__ = [];
var len__5875__auto___29116 = arguments.length;
var i__5876__auto___29117 = (0);
while(true){
if((i__5876__auto___29117 < len__5875__auto___29116)){
args__5881__auto__.push((arguments[i__5876__auto___29117]));

var G__29118 = (i__5876__auto___29117 + (1));
i__5876__auto___29117 = G__29118;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__29061){
var vec__29062 = p__29061;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29062,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(15),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"primary-200","primary-200",388530047).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(24)], null);
var G__29065 = variant;
var G__29065__$1 = (((G__29065 instanceof cljs.core.Keyword))?G__29065.fqn:null);
switch (G__29065__$1) {
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
(organisms.atoms.buttons.primary_button_style.cljs$lang$applyTo = (function (seq29058){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29058));
}));

organisms.atoms.buttons.primary_button_text_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-100","primary-100",-1658947400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null);
organisms.atoms.buttons.primary_button = (function organisms$atoms$buttons$primary_button(p__29071){
var map__29072 = p__29071;
var map__29072__$1 = cljs.core.__destructure_map(map__29072);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29072__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29072__$1,new cljs.core.Keyword(null,"text-style-variant","text-style-variant",1181195324));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29072__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29072__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29072__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.primary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.primary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.secondary_button_style = (function organisms$atoms$buttons$secondary_button_style(var_args){
var args__5881__auto__ = [];
var len__5875__auto___29126 = arguments.length;
var i__5876__auto___29127 = (0);
while(true){
if((i__5876__auto___29127 < len__5875__auto___29126)){
args__5881__auto__.push((arguments[i__5876__auto___29127]));

var G__29128 = (i__5876__auto___29127 + (1));
i__5876__auto___29127 = G__29128;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__29078){
var vec__29079 = p__29078;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29079,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"primary-200","primary-200",388530047).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(5),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18)], null);
var G__29082 = variant;
var G__29082__$1 = (((G__29082 instanceof cljs.core.Keyword))?G__29082.fqn:null);
switch (G__29082__$1) {
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
(organisms.atoms.buttons.secondary_button_style.cljs$lang$applyTo = (function (seq29077){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29077));
}));

organisms.atoms.buttons.secondary_button_text_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.buttons.secondary_button = (function organisms$atoms$buttons$secondary_button(p__29083){
var map__29084 = p__29083;
var map__29084__$1 = cljs.core.__destructure_map(map__29084);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.secondary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.secondary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.tertiary_button_style = (function organisms$atoms$buttons$tertiary_button_style(var_args){
var args__5881__auto__ = [];
var len__5875__auto___29130 = arguments.length;
var i__5876__auto___29131 = (0);
while(true){
if((i__5876__auto___29131 < len__5875__auto___29130)){
args__5881__auto__.push((arguments[i__5876__auto___29131]));

var G__29132 = (i__5876__auto___29131 + (1));
i__5876__auto___29131 = G__29132;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((0) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((0)),(0),null)):null);
return organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic(argseq__5882__auto__);
});

(organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic = (function (p__29087){
var vec__29088 = p__29087;
var variant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29088,(0),null);
var base_button_style = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(200, 200, 200, 0.05)",new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"fit-content","fit-content",450803144),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(3),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null);
var G__29091 = variant;
var G__29091__$1 = (((G__29091 instanceof cljs.core.Keyword))?G__29091.fqn:null);
switch (G__29091__$1) {
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
(organisms.atoms.buttons.tertiary_button_style.cljs$lang$applyTo = (function (seq29085){
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29085));
}));

organisms.atoms.buttons.tertiary_button_text_style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
organisms.atoms.buttons.tertiary_button = (function organisms$atoms$buttons$tertiary_button(p__29096){
var map__29097 = p__29096;
var map__29097__$1 = cljs.core.__destructure_map(map__29097);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var button_variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"button-variant","button-variant",-939473245));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29097__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return organisms.atoms.buttons.test_button(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),organisms.atoms.buttons.tertiary_button_text_style,new cljs.core.Keyword(null,"button-style","button-style",314949943),organisms.atoms.buttons.tertiary_button_style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([button_variant], 0)),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null));
});
organisms.atoms.buttons.button = (function organisms$atoms$buttons$button(p__29103,text){
var map__29104 = p__29103;
var map__29104__$1 = cljs.core.__destructure_map(map__29104);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_press = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29104__$1,new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return cljs.core.List.EMPTY;
}));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var disabled_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"disabled-style","disabled-style",-1938321590));
var disabled_text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29104__$1,new cljs.core.Keyword(null,"disabled-text-style","disabled-text-style",1412905220));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"pressable-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__29105 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"padding","padding",1660304693),(6),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),(999),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
var G__29105__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__29105,style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__29105__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#aaaaaa"], null),disabled_style], 0));
} else {
return G__29105__$1;
}
})(),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),on_press,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),(""+"text-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)),new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__29107 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(18),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null);
var G__29107__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__29107,text_style], 0))
;
if(cljs.core.truth_(disabled_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__29107__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null),disabled_text_style], 0));
} else {
return G__29107__$1;
}
})()], null),text], null)], null);
});

//# sourceMappingURL=organisms.atoms.buttons.js.map
