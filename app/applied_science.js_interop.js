goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37743 = arguments.length;
var i__5770__auto___37744 = (0);
while(true){
if((i__5770__auto___37744 < len__5769__auto___37743)){
args__5775__auto__.push((arguments[i__5770__auto___37744]));

var G__37745 = (i__5770__auto___37744 + (1));
i__5770__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__37515_37746 = keyvals;
var vec__37517_37747 = G__37515_37746;
var seq__37518_37748 = cljs.core.seq(vec__37517_37747);
var first__37519_37749 = cljs.core.first(seq__37518_37748);
var seq__37518_37750__$1 = cljs.core.next(seq__37518_37748);
var k_37751 = first__37519_37749;
var first__37519_37752__$1 = cljs.core.first(seq__37518_37750__$1);
var seq__37518_37753__$2 = cljs.core.next(seq__37518_37750__$1);
var v_37754 = first__37519_37752__$1;
var keyvals_37755__$1 = seq__37518_37753__$2;
var G__37515_37756__$1 = G__37515_37746;
while(true){
var vec__37520_37757 = G__37515_37756__$1;
var seq__37521_37758 = cljs.core.seq(vec__37520_37757);
var first__37522_37759 = cljs.core.first(seq__37521_37758);
var seq__37521_37760__$1 = cljs.core.next(seq__37521_37758);
var k_37761__$1 = first__37522_37759;
var first__37522_37762__$1 = cljs.core.first(seq__37521_37760__$1);
var seq__37521_37763__$2 = cljs.core.next(seq__37521_37760__$1);
var v_37764__$1 = first__37522_37762__$1;
var keyvals_37765__$2 = seq__37521_37763__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_37761__$1)] = v_37764__$1);

if(keyvals_37765__$2){
var G__37766 = keyvals_37765__$2;
G__37515_37756__$1 = G__37766;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq37510){
var G__37511 = cljs.core.first(seq37510);
var seq37510__$1 = cljs.core.next(seq37510);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37511,seq37510__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__37531 = arguments.length;
switch (G__37531) {
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj37536 = obj;
var k37537 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37539 = obj37536;
return (((!((obj37539 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37537,obj37539)));
})()){
return (obj37536[k37537]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var obj37540 = obj;
var k37541 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37542 = obj37540;
return (((!((obj37542 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37541,obj37542)));
})()){
return (obj37540[k37541]);
} else {
return not_found;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__37545 = arguments.length;
switch (G__37545) {
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj37550 = self__.obj;
var k37551 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37552 = obj37550;
return (((!((obj37552 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37551,obj37552)));
})()){
return (obj37550[k37551]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var obj37553 = self__.obj;
var k37554 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37555 = obj37553;
return (((!((obj37555 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37554,obj37555)));
})()){
return (obj37553[k37554]);
} else {
return not_found;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37778 = arguments.length;
var i__5770__auto___37779 = (0);
while(true){
if((i__5770__auto___37779 < len__5769__auto___37778)){
args__5775__auto__.push((arguments[i__5770__auto___37779]));

var G__37781 = (i__5770__auto___37779 + (1));
i__5770__auto___37779 = G__37781;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__37568 = keyvals;
var vec__37569 = G__37568;
var seq__37570 = cljs.core.seq(vec__37569);
var first__37571 = cljs.core.first(seq__37570);
var seq__37570__$1 = cljs.core.next(seq__37570);
var k = first__37571;
var first__37571__$1 = cljs.core.first(seq__37570__$1);
var seq__37570__$2 = cljs.core.next(seq__37570__$1);
var v = first__37571__$1;
var kvs = seq__37570__$2;
var G__37568__$1 = G__37568;
while(true){
var vec__37572 = G__37568__$1;
var seq__37573 = cljs.core.seq(vec__37572);
var first__37574 = cljs.core.first(seq__37573);
var seq__37573__$1 = cljs.core.next(seq__37573);
var k__$1 = first__37574;
var first__37574__$1 = cljs.core.first(seq__37573__$1);
var seq__37573__$2 = cljs.core.next(seq__37573__$1);
var v__$1 = first__37574__$1;
var kvs__$1 = seq__37573__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__37785 = kvs__$1;
G__37568__$1 = G__37785;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq37562){
var G__37563 = cljs.core.first(seq37562);
var seq37562__$1 = cljs.core.next(seq37562);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37563,seq37562__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37787 = arguments.length;
var i__5770__auto___37788 = (0);
while(true){
if((i__5770__auto___37788 < len__5769__auto___37787)){
args__5775__auto__.push((arguments[i__5770__auto___37788]));

var G__37789 = (i__5770__auto___37788 + (1));
i__5770__auto___37788 = G__37789;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq37581){
var G__37582 = cljs.core.first(seq37581);
var seq37581__$1 = cljs.core.next(seq37581);
var G__37583 = cljs.core.first(seq37581__$1);
var seq37581__$2 = cljs.core.next(seq37581__$1);
var G__37584 = cljs.core.first(seq37581__$2);
var seq37581__$3 = cljs.core.next(seq37581__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37582,G__37583,G__37584,seq37581__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37791 = arguments.length;
var i__5770__auto___37792 = (0);
while(true){
if((i__5770__auto___37792 < len__5769__auto___37791)){
args__5775__auto__.push((arguments[i__5770__auto___37792]));

var G__37793 = (i__5770__auto___37792 + (1));
i__5770__auto___37792 = G__37793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq37598){
var G__37599 = cljs.core.first(seq37598);
var seq37598__$1 = cljs.core.next(seq37598);
var G__37600 = cljs.core.first(seq37598__$1);
var seq37598__$2 = cljs.core.next(seq37598__$1);
var G__37601 = cljs.core.first(seq37598__$2);
var seq37598__$3 = cljs.core.next(seq37598__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37599,G__37600,G__37601,seq37598__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend o other)
 *   (j/extend o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__37624 = arguments.length;
switch (G__37624) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___37799 = arguments.length;
var i__5770__auto___37800 = (0);
while(true){
if((i__5770__auto___37800 < len__5769__auto___37799)){
args_arr__5794__auto__.push((arguments[i__5770__auto___37800]));

var G__37801 = (i__5770__auto___37800 + (1));
i__5770__auto___37800 = G__37801;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__37630_37802 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__37631_37803 = null;
var count__37632_37804 = (0);
var i__37633_37805 = (0);
while(true){
if((i__37633_37805 < count__37632_37804)){
var k_37806 = chunk__37631_37803.cljs$core$IIndexed$_nth$arity$2(null,i__37633_37805);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37806,applied_science.js_interop.unchecked_get(x,k_37806)], 0));


var G__37807 = seq__37630_37802;
var G__37808 = chunk__37631_37803;
var G__37809 = count__37632_37804;
var G__37810 = (i__37633_37805 + (1));
seq__37630_37802 = G__37807;
chunk__37631_37803 = G__37808;
count__37632_37804 = G__37809;
i__37633_37805 = G__37810;
continue;
} else {
var temp__5804__auto___37811 = cljs.core.seq(seq__37630_37802);
if(temp__5804__auto___37811){
var seq__37630_37812__$1 = temp__5804__auto___37811;
if(cljs.core.chunked_seq_QMARK_(seq__37630_37812__$1)){
var c__5568__auto___37813 = cljs.core.chunk_first(seq__37630_37812__$1);
var G__37814 = cljs.core.chunk_rest(seq__37630_37812__$1);
var G__37815 = c__5568__auto___37813;
var G__37816 = cljs.core.count(c__5568__auto___37813);
var G__37817 = (0);
seq__37630_37802 = G__37814;
chunk__37631_37803 = G__37815;
count__37632_37804 = G__37816;
i__37633_37805 = G__37817;
continue;
} else {
var k_37818 = cljs.core.first(seq__37630_37812__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_37818,applied_science.js_interop.unchecked_get(x,k_37818)], 0));


var G__37819 = cljs.core.next(seq__37630_37812__$1);
var G__37820 = null;
var G__37821 = (0);
var G__37822 = (0);
seq__37630_37802 = G__37819;
chunk__37631_37803 = G__37820;
count__37632_37804 = G__37821;
i__37633_37805 = G__37822;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq37621){
var G__37622 = cljs.core.first(seq37621);
var seq37621__$1 = cljs.core.next(seq37621);
var G__37623 = cljs.core.first(seq37621__$1);
var seq37621__$2 = cljs.core.next(seq37621__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37622,G__37623,seq37621__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__37642 = array;
G__37642.push(x);

return G__37642;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__37649 = array;
G__37649.unshift(x);

return G__37649;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37825 = arguments.length;
var i__5770__auto___37826 = (0);
while(true){
if((i__5770__auto___37826 < len__5769__auto___37825)){
args__5775__auto__.push((arguments[i__5770__auto___37826]));

var G__37827 = (i__5770__auto___37826 + (1));
i__5770__auto___37826 = G__37827;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj37653 = obj;
var k37654 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37655 = obj37653;
return (((!((obj37655 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37654,obj37655)));
})()){
return (obj37653[k37654]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq37650){
var G__37651 = cljs.core.first(seq37650);
var seq37650__$1 = cljs.core.next(seq37650);
var G__37652 = cljs.core.first(seq37650__$1);
var seq37650__$2 = cljs.core.next(seq37650__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37651,G__37652,seq37650__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj37659 = obj;
var k37660 = applied_science.js_interop.impl.wrap_key(k);
if((function (){var obj37661 = obj37659;
return (((!((obj37661 == null)))) && (applied_science.js_interop.impl.in_QMARK__STAR_(k37660,obj37661)));
})()){
return (obj37659[k37660]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37830 = arguments.length;
var i__5770__auto___37831 = (0);
while(true){
if((i__5770__auto___37831 < len__5769__auto___37830)){
args__5775__auto__.push((arguments[i__5770__auto___37831]));

var G__37832 = (i__5770__auto___37831 + (1));
i__5770__auto___37831 = G__37832;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq37663){
var G__37664 = cljs.core.first(seq37663);
var seq37663__$1 = cljs.core.next(seq37663);
var G__37665 = cljs.core.first(seq37663__$1);
var seq37663__$2 = cljs.core.next(seq37663__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37664,G__37665,seq37663__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37834 = arguments.length;
var i__5770__auto___37835 = (0);
while(true){
if((i__5770__auto___37835 < len__5769__auto___37834)){
args__5775__auto__.push((arguments[i__5770__auto___37835]));

var G__37836 = (i__5770__auto___37835 + (1));
i__5770__auto___37835 = G__37836;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__37685_37837 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__37686_37838 = null;
var count__37687_37839 = (0);
var i__37688_37840 = (0);
while(true){
if((i__37688_37840 < count__37687_37839)){
var vec__37711_37841 = chunk__37686_37838.cljs$core$IIndexed$_nth$arity$2(null,i__37688_37840);
var k_37842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711_37841,(0),null);
var v_37843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37711_37841,(1),null);
var obj37714_37845 = obj;
var obj37715_37846 = (((!((obj37714_37845 == null))))?obj37714_37845:({}));
(obj37715_37846[applied_science.js_interop.impl.wrap_key(k_37842)] = v_37843);



var G__37847 = seq__37685_37837;
var G__37848 = chunk__37686_37838;
var G__37849 = count__37687_37839;
var G__37850 = (i__37688_37840 + (1));
seq__37685_37837 = G__37847;
chunk__37686_37838 = G__37848;
count__37687_37839 = G__37849;
i__37688_37840 = G__37850;
continue;
} else {
var temp__5804__auto___37851 = cljs.core.seq(seq__37685_37837);
if(temp__5804__auto___37851){
var seq__37685_37852__$1 = temp__5804__auto___37851;
if(cljs.core.chunked_seq_QMARK_(seq__37685_37852__$1)){
var c__5568__auto___37853 = cljs.core.chunk_first(seq__37685_37852__$1);
var G__37854 = cljs.core.chunk_rest(seq__37685_37852__$1);
var G__37855 = c__5568__auto___37853;
var G__37856 = cljs.core.count(c__5568__auto___37853);
var G__37857 = (0);
seq__37685_37837 = G__37854;
chunk__37686_37838 = G__37855;
count__37687_37839 = G__37856;
i__37688_37840 = G__37857;
continue;
} else {
var vec__37726_37858 = cljs.core.first(seq__37685_37852__$1);
var k_37859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726_37858,(0),null);
var v_37860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37726_37858,(1),null);
var obj37729_37861 = obj;
var obj37730_37862 = (((!((obj37729_37861 == null))))?obj37729_37861:({}));
(obj37730_37862[applied_science.js_interop.impl.wrap_key(k_37859)] = v_37860);



var G__37863 = cljs.core.next(seq__37685_37852__$1);
var G__37864 = null;
var G__37865 = (0);
var G__37866 = (0);
seq__37685_37837 = G__37863;
chunk__37686_37838 = G__37864;
count__37687_37839 = G__37865;
i__37688_37840 = G__37866;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq37678){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37678));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
