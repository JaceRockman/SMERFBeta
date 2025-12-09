goog.provide('datascript.conn');

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {extend_clj.core.IAtom3}
 * @implements {cljs.core.ILookup}
*/
datascript.conn.Conn = (function (atom,validator,watches,meta){
this.atom = atom;
this.validator = validator;
this.watches = watches;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 98306;
this.cljs$lang$protocol_mask$partition0$ = 6455552;
});
(datascript.conn.Conn.prototype.equiv = (function (other__23341__auto__){
var self__ = this;
var this__23340__auto__ = this;
return this__23340__auto__.cljs$core$IEquiv$_equiv$arity$2(null,other__23341__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this__23340__auto__,oldv__23351__auto__,newv__23343__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
var seq__26460 = cljs.core.seq(self__.watches);
var chunk__26461 = null;
var count__26462 = (0);
var i__26463 = (0);
while(true){
if((i__26463 < count__26462)){
var vec__26477 = chunk__26461.cljs$core$IIndexed$_nth$arity$2(null,i__26463);
var k__23352__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(0),null);
var f__23344__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26477,(1),null);
(f__23344__auto__.cljs$core$IFn$_invoke$arity$4 ? f__23344__auto__.cljs$core$IFn$_invoke$arity$4(k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__) : f__23344__auto__.call(null,k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__));


var G__26902 = seq__26460;
var G__26903 = chunk__26461;
var G__26904 = count__26462;
var G__26905 = (i__26463 + (1));
seq__26460 = G__26902;
chunk__26461 = G__26903;
count__26462 = G__26904;
i__26463 = G__26905;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26460);
if(temp__5825__auto__){
var seq__26460__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26460__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__26460__$1);
var G__26910 = cljs.core.chunk_rest(seq__26460__$1);
var G__26911 = c__5672__auto__;
var G__26912 = cljs.core.count(c__5672__auto__);
var G__26913 = (0);
seq__26460 = G__26910;
chunk__26461 = G__26911;
count__26462 = G__26912;
i__26463 = G__26913;
continue;
} else {
var vec__26486 = cljs.core.first(seq__26460__$1);
var k__23352__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,(0),null);
var f__23344__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26486,(1),null);
(f__23344__auto__.cljs$core$IFn$_invoke$arity$4 ? f__23344__auto__.cljs$core$IFn$_invoke$arity$4(k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__) : f__23344__auto__.call(null,k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__));


var G__26918 = cljs.core.next(seq__26460__$1);
var G__26919 = null;
var G__26920 = (0);
var G__26921 = (0);
seq__26460 = G__26918;
chunk__26461 = G__26919;
count__26462 = G__26920;
i__26463 = G__26921;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this__23340__auto__,key__23353__auto__,f__23344__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
(this__23340__auto____$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,key__23353__auto__,f__23344__auto__));

return this__23340__auto____$1;
}));

(datascript.conn.Conn.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this__23340__auto__,key__23353__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return (this__23340__auto____$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,key__23353__auto__));
}));

(datascript.conn.Conn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o__23342__auto__,other__23341__auto__){
var self__ = this;
var o__23342__auto____$1 = this;
return (o__23342__auto____$1 === other__23341__auto__);
}));

(datascript.conn.Conn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__23340__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return goog.getUid(this__23340__auto____$1);
}));

(datascript.conn.Conn.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this__23340__auto__,newv__23343__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__23340__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,cljs.core.constantly(newv__23343__auto__),cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this__23340__auto__,f__23344__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__23340__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__23344__auto__,cljs.core.List.EMPTY),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this__23340__auto__,f__23344__auto__,a__23345__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__23340__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__23344__auto__,(new cljs.core.List(null,a__23345__auto__,null,(1),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this__23340__auto__,f__23344__auto__,a__23345__auto__,b__23349__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__23340__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__23344__auto__,(new cljs.core.List(null,a__23345__auto__,(new cljs.core.List(null,b__23349__auto__,null,(1),null)),(2),null))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this__23340__auto__,f__23344__auto__,a__23345__auto__,b__23349__auto__,xs__23350__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this__23340__auto____$1.extend_clj$core$IAtom3$swap_STAR_$arity$3(null,f__23344__auto__,cljs.core.cons(a__23345__auto__,cljs.core.cons(b__23349__auto__,xs__23350__auto__))),(1));
}));

(datascript.conn.Conn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__23340__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return self__.meta;
}));

(datascript.conn.Conn.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this__23340__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return this__23340__auto____$1.extend_clj$core$IAtom3$deref_impl$arity$1(null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$validate$arity$3 = (function (this__23340__auto__,validator__23358__auto__,value__23359__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
if((!((validator__23358__auto__ == null)))){
if(cljs.core.truth_((validator__23358__auto__.cljs$core$IFn$_invoke$arity$1 ? validator__23358__auto__.cljs$core$IFn$_invoke$arity$1(value__23359__auto__) : validator__23358__auto__.call(null,value__23359__auto__)))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid reference state",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value__23359__auto__], null));
}
} else {
return null;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$notify_watches$arity$3 = (function (this__23340__auto__,oldv__23351__auto__,newv__23343__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
var seq__26542 = cljs.core.seq(self__.watches);
var chunk__26543 = null;
var count__26544 = (0);
var i__26545 = (0);
while(true){
if((i__26545 < count__26544)){
var vec__26575 = chunk__26543.cljs$core$IIndexed$_nth$arity$2(null,i__26545);
var k__23352__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26575,(0),null);
var w__23362__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26575,(1),null);
(w__23362__auto__.cljs$core$IFn$_invoke$arity$4 ? w__23362__auto__.cljs$core$IFn$_invoke$arity$4(k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__) : w__23362__auto__.call(null,k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__));


var G__26957 = seq__26542;
var G__26958 = chunk__26543;
var G__26959 = count__26544;
var G__26960 = (i__26545 + (1));
seq__26542 = G__26957;
chunk__26543 = G__26958;
count__26544 = G__26959;
i__26545 = G__26960;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__26542);
if(temp__5825__auto__){
var seq__26542__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26542__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__26542__$1);
var G__26962 = cljs.core.chunk_rest(seq__26542__$1);
var G__26963 = c__5672__auto__;
var G__26964 = cljs.core.count(c__5672__auto__);
var G__26965 = (0);
seq__26542 = G__26962;
chunk__26543 = G__26963;
count__26544 = G__26964;
i__26545 = G__26965;
continue;
} else {
var vec__26583 = cljs.core.first(seq__26542__$1);
var k__23352__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583,(0),null);
var w__23362__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26583,(1),null);
(w__23362__auto__.cljs$core$IFn$_invoke$arity$4 ? w__23362__auto__.cljs$core$IFn$_invoke$arity$4(k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__) : w__23362__auto__.call(null,k__23352__auto__,this__23340__auto____$1,oldv__23351__auto__,newv__23343__auto__));


var G__26967 = cljs.core.next(seq__26542__$1);
var G__26968 = null;
var G__26969 = (0);
var G__26970 = (0);
seq__26542 = G__26967;
chunk__26543 = G__26968;
count__26544 = G__26969;
i__26545 = G__26970;
continue;
}
} else {
return null;
}
}
break;
}
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$swap_STAR_$arity$3 = (function (this__23340__auto__,f__23344__auto__,args__23363__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
var oldv__23351__auto__ = cljs.core.deref(this__23340__auto____$1);
var newv__23343__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f__23344__auto__,oldv__23351__auto__,args__23363__auto__);
this__23340__auto____$1.extend_clj$core$IAtom3$validate$arity$3(null,self__.validator,newv__23343__auto__);

this__23340__auto____$1.extend_clj$core$IAtom3$compare_and_set_impl$arity$3(null,oldv__23351__auto__,newv__23343__auto__);

this__23340__auto____$1.extend_clj$core$IAtom3$notify_watches$arity$3(null,oldv__23351__auto__,newv__23343__auto__);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [oldv__23351__auto__,newv__23343__auto__], null);
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$deref_impl$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.atom));
}));

(datascript.conn.Conn.prototype.extend_clj$core$IAtom3$compare_and_set_impl$arity$3 = (function (this$,oldv,newv){
var self__ = this;
var this$__$1 = this;
return cljs.core.compare_and_set_BANG_(self__.atom,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),oldv),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.atom),new cljs.core.Keyword(null,"db","db",993250759),newv));
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__23340__auto__,k__23352__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
return this__23340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__23352__auto__,null);
}));

(datascript.conn.Conn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__23340__auto__,k__23352__auto__,not_found__23356__auto__){
var self__ = this;
var this__23340__auto____$1 = this;
var G__26607 = k__23352__auto__;
var G__26607__$1 = (((G__26607 instanceof cljs.core.Keyword))?G__26607.fqn:null);
switch (G__26607__$1) {
case "atom":
return self__.atom;

break;
default:
return not_found__23356__auto__;

}
}));

(datascript.conn.Conn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"atom","atom",1243487874,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null)], null);
}));

(datascript.conn.Conn.cljs$lang$type = true);

(datascript.conn.Conn.cljs$lang$ctorStr = "datascript.conn/Conn");

(datascript.conn.Conn.cljs$lang$ctorPrWriter = (function (this__5433__auto__,writer__5434__auto__,opt__5435__auto__){
return cljs.core._write(writer__5434__auto__,"datascript.conn/Conn");
}));

/**
 * Positional factory function for datascript.conn/Conn.
 */
datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(atom,validator,watches,meta){
return (new datascript.conn.Conn(atom,validator,watches,meta));
});


datascript.conn.__GT_Conn = (function datascript$conn$__GT_Conn(var_args){
var G__26656 = arguments.length;
switch (G__26656) {
case 1:
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5900__auto__ = [];
var len__5875__auto___26981 = arguments.length;
var i__5876__auto___26982 = (0);
while(true){
if((i__5876__auto___26982 < len__5875__auto___26981)){
args_arr__5900__auto__.push((arguments[i__5876__auto___26982]));

var G__26984 = (i__5876__auto___26982 + (1));
i__5876__auto___26982 = G__26984;
continue;
} else {
}
break;
}

var argseq__5901__auto__ = ((((1) < args_arr__5900__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5900__auto__.slice((1)),(0),null)):null);
return datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5901__auto__);

}
});

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 = (function (atom){
return (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$variadic = (function (atom,rest__23365__auto__){
var opts__23366__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,rest__23365__auto__);
var ref__23367__auto__ = (new datascript.conn.Conn(atom,null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY));
var temp__5829__auto___26989 = new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(opts__23366__auto__);
if((temp__5829__auto___26989 == null)){
} else {
var validator__23358__auto___26990 = temp__5829__auto___26989;
ref__23367__auto__.extend_clj$core$IAtom3$validate$arity$3(null,validator__23358__auto___26990,cljs.core.deref(ref__23367__auto__));

(ref__23367__auto__.validator = validator__23358__auto___26990);
}

var temp__5829__auto___26992 = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(opts__23366__auto__);
if((temp__5829__auto___26992 == null)){
} else {
var meta__23369__auto___26996 = temp__5829__auto___26992;
cljs.core.reset_meta_BANG_(ref__23367__auto__,meta__23369__auto___26996);
}

return ref__23367__auto__;
}));

/** @this {Function} */
(datascript.conn.__GT_Conn.cljs$lang$applyTo = (function (seq26638){
var G__26639 = cljs.core.first(seq26638);
var seq26638__$1 = cljs.core.next(seq26638);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26639,seq26638__$1);
}));

(datascript.conn.__GT_Conn.cljs$lang$maxFixedArity = (1));


datascript.conn.make_conn = (function datascript$conn$make_conn(opts){
var G__26688 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(opts);
return (datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1 ? datascript.conn.__GT_Conn.cljs$core$IFn$_invoke$arity$1(G__26688) : datascript.conn.__GT_Conn.call(null,G__26688));
});
datascript.conn.with$ = (function datascript$conn$with(var_args){
var G__26702 = arguments.length;
switch (G__26702) {
case 2:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
}));

(datascript.conn.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if((db instanceof datascript.db.FilteredDB)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data(datascript.db.__GT_TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,tx_meta),tx_data);
}
}));

(datascript.conn.with$.cljs$lang$maxFixedArity = 3);

/**
 * Applies transaction to an immutable db value, returning new immutable db value. Same as `(:db-after (with db tx-data))`.
 */
datascript.conn.db_with = (function datascript$conn$db_with(db,tx_data){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.conn.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
datascript.conn.conn_QMARK_ = (function datascript$conn$conn_QMARK_(conn){
var and__5139__auto__ = (((!((conn == null))))?(((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$))))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__5139__auto__){
var temp__5827__auto__ = cljs.core.deref(conn);
if((temp__5827__auto__ == null)){
return true;
} else {
var db = temp__5827__auto__;
return datascript.db.db_QMARK_(db);
}
} else {
return and__5139__auto__;
}
});
datascript.conn.conn_from_db = (function datascript$conn$conn_from_db(db){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__5827__auto__ = datascript.storage.storage(db);
if((temp__5827__auto__ == null)){
return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
} else {
var storage = temp__5827__auto__;
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

return datascript.conn.make_conn(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], null));
}
});
datascript.conn.conn_from_datoms = (function datascript$conn$conn_from_datoms(var_args){
var G__26748 = arguments.length;
switch (G__26748) {
case 1:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.conn_from_datoms.cljs$core$IFn$_invoke$arity$3 = (function (datoms,schema,opts){
return datascript.conn.conn_from_db(datascript.db.init_db(datoms,schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.conn_from_datoms.cljs$lang$maxFixedArity = 3);

datascript.conn.create_conn = (function datascript$conn$create_conn(var_args){
var G__26767 = arguments.length;
switch (G__26767) {
case 0:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.conn.conn_from_db(datascript.db.empty_db(null,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,cljs.core.PersistentArrayMap.EMPTY));
}));

(datascript.conn.create_conn.cljs$core$IFn$_invoke$arity$2 = (function (schema,opts){
return datascript.conn.conn_from_db(datascript.db.empty_db(schema,datascript.storage.maybe_adapt_storage(opts)));
}));

(datascript.conn.create_conn.cljs$lang$maxFixedArity = 2);

datascript.conn._transact_BANG_ = (function datascript$conn$_transact_BANG_(conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var _STAR_report = cljs.core.volatile_BANG_(null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,(function (db){
var r = datascript.conn.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
cljs.core.vreset_BANG_(_STAR_report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
}));

return cljs.core.deref(_STAR_report);
});
datascript.conn.transact_BANG_ = (function datascript$conn$transact_BANG_(var_args){
var G__26779 = arguments.length;
switch (G__26779) {
case 2:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
}));

(datascript.conn.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.conn._transact_BANG_(conn,tx_data,tx_meta);
var seq__26783_27038 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__26784_27039 = null;
var count__26785_27040 = (0);
var i__26786_27041 = (0);
while(true){
if((i__26786_27041 < count__26785_27040)){
var vec__26809_27044 = chunk__26784_27039.cljs$core$IIndexed$_nth$arity$2(null,i__26786_27041);
var __27045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26809_27044,(0),null);
var callback_27046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26809_27044,(1),null);
(callback_27046.cljs$core$IFn$_invoke$arity$1 ? callback_27046.cljs$core$IFn$_invoke$arity$1(report) : callback_27046.call(null,report));


var G__27048 = seq__26783_27038;
var G__27049 = chunk__26784_27039;
var G__27050 = count__26785_27040;
var G__27051 = (i__26786_27041 + (1));
seq__26783_27038 = G__27048;
chunk__26784_27039 = G__27049;
count__26785_27040 = G__27050;
i__26786_27041 = G__27051;
continue;
} else {
var temp__5825__auto___27052 = cljs.core.seq(seq__26783_27038);
if(temp__5825__auto___27052){
var seq__26783_27053__$1 = temp__5825__auto___27052;
if(cljs.core.chunked_seq_QMARK_(seq__26783_27053__$1)){
var c__5672__auto___27054 = cljs.core.chunk_first(seq__26783_27053__$1);
var G__27055 = cljs.core.chunk_rest(seq__26783_27053__$1);
var G__27056 = c__5672__auto___27054;
var G__27057 = cljs.core.count(c__5672__auto___27054);
var G__27058 = (0);
seq__26783_27038 = G__27055;
chunk__26784_27039 = G__27056;
count__26785_27040 = G__27057;
i__26786_27041 = G__27058;
continue;
} else {
var vec__26816_27059 = cljs.core.first(seq__26783_27053__$1);
var __27060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816_27059,(0),null);
var callback_27061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26816_27059,(1),null);
(callback_27061.cljs$core$IFn$_invoke$arity$1 ? callback_27061.cljs$core$IFn$_invoke$arity$1(report) : callback_27061.call(null,report));


var G__27062 = cljs.core.next(seq__26783_27053__$1);
var G__27063 = null;
var G__27064 = (0);
var G__27065 = (0);
seq__26783_27038 = G__27062;
chunk__26784_27039 = G__27063;
count__26785_27040 = G__27064;
i__26786_27041 = G__27065;
continue;
}
} else {
}
}
break;
}

return report;
}));

(datascript.conn.transact_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_conn_BANG_ = (function datascript$conn$reset_conn_BANG_(var_args){
var G__26829 = arguments.length;
switch (G__26829) {
case 2:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
}));

(datascript.conn.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var db_before = cljs.core.deref(conn);
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db_before,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(db_before)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26822_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26822_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.db._datoms(db_before,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)):null),datascript.db._datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,null,null,null)),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
if(cljs.core.truth_(datascript.storage.storage(db_before))){
datascript.storage.store.cljs$core$IFn$_invoke$arity$1(db);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.assoc,new cljs.core.Keyword(null,"db","db",993250759),db,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tx-tail","tx-tail",1116487556),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"db-last-stored","db-last-stored",-2068760702),db], 0));
} else {
cljs.core.reset_BANG_(conn,db);
}

var seq__26844_27073 = cljs.core.seq(new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn))));
var chunk__26845_27074 = null;
var count__26846_27075 = (0);
var i__26847_27076 = (0);
while(true){
if((i__26847_27076 < count__26846_27075)){
var vec__26858_27080 = chunk__26845_27074.cljs$core$IIndexed$_nth$arity$2(null,i__26847_27076);
var __27081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27080,(0),null);
var callback_27082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26858_27080,(1),null);
(callback_27082.cljs$core$IFn$_invoke$arity$1 ? callback_27082.cljs$core$IFn$_invoke$arity$1(report) : callback_27082.call(null,report));


var G__27083 = seq__26844_27073;
var G__27084 = chunk__26845_27074;
var G__27085 = count__26846_27075;
var G__27086 = (i__26847_27076 + (1));
seq__26844_27073 = G__27083;
chunk__26845_27074 = G__27084;
count__26846_27075 = G__27085;
i__26847_27076 = G__27086;
continue;
} else {
var temp__5825__auto___27087 = cljs.core.seq(seq__26844_27073);
if(temp__5825__auto___27087){
var seq__26844_27088__$1 = temp__5825__auto___27087;
if(cljs.core.chunked_seq_QMARK_(seq__26844_27088__$1)){
var c__5672__auto___27089 = cljs.core.chunk_first(seq__26844_27088__$1);
var G__27090 = cljs.core.chunk_rest(seq__26844_27088__$1);
var G__27091 = c__5672__auto___27089;
var G__27092 = cljs.core.count(c__5672__auto___27089);
var G__27093 = (0);
seq__26844_27073 = G__27090;
chunk__26845_27074 = G__27091;
count__26846_27075 = G__27092;
i__26847_27076 = G__27093;
continue;
} else {
var vec__26866_27094 = cljs.core.first(seq__26844_27088__$1);
var __27095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866_27094,(0),null);
var callback_27096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866_27094,(1),null);
(callback_27096.cljs$core$IFn$_invoke$arity$1 ? callback_27096.cljs$core$IFn$_invoke$arity$1(report) : callback_27096.call(null,report));


var G__27098 = cljs.core.next(seq__26844_27088__$1);
var G__27099 = null;
var G__27100 = (0);
var G__27101 = (0);
seq__26844_27073 = G__27098;
chunk__26845_27074 = G__27099;
count__26846_27075 = G__27100;
i__26847_27076 = G__27101;
continue;
}
} else {
}
}
break;
}

return db;
}));

(datascript.conn.reset_conn_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.reset_schema_BANG_ = (function datascript$conn$reset_schema_BANG_(conn,schema){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var db = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(conn,datascript.db.with_schema,schema);
return db;
});
datascript.conn.listen_BANG_ = (function datascript$conn$listen_BANG_(var_args){
var G__26877 = arguments.length;
switch (G__26877) {
case 2:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
}));

(datascript.conn.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key,callback], 0));

return key;
}));

(datascript.conn.listen_BANG_.cljs$lang$maxFixedArity = 3);

datascript.conn.unlisten_BANG_ = (function datascript$conn$unlisten_BANG_(conn,key){
if(datascript.conn.conn_QMARK_(conn)){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"atom","atom",-397043653).cljs$core$IFn$_invoke$arity$1(conn),cljs.core.update,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
});

//# sourceMappingURL=datascript.conn.js.map
