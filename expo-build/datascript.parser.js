goog.provide('datascript.parser');




/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

var datascript$parser$ITraversable$_collect$dyn_29744 = (function (_,pred,acc){
var x__5497__auto__ = (((_ == null))?null:_);
var m__5498__auto__ = (datascript.parser._collect[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5498__auto__.call(null,_,pred,acc));
} else {
var m__5496__auto__ = (datascript.parser._collect["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__5496__auto__.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
});
datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
return datascript$parser$ITraversable$_collect$dyn_29744(_,pred,acc);
}
});

var datascript$parser$ITraversable$_collect_vars$dyn_29745 = (function (_,acc){
var x__5497__auto__ = (((_ == null))?null:_);
var m__5498__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5498__auto__.call(null,_,acc));
} else {
var m__5496__auto__ = (datascript.parser._collect_vars["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__5496__auto__.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
});
datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
return datascript$parser$ITraversable$_collect_vars$dyn_29745(_,acc);
}
});

var datascript$parser$ITraversable$_postwalk$dyn_29750 = (function (_,f){
var x__5497__auto__ = (((_ == null))?null:_);
var m__5498__auto__ = (datascript.parser._postwalk[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5498__auto__.call(null,_,f));
} else {
var m__5496__auto__ = (datascript.parser._postwalk["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__5496__auto__.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
});
datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((((!((_ == null)))) && ((!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
return datascript$parser$ITraversable$_postwalk$dyn_29750(_,f);
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size)));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28220_SHARP_,p2__28219_SHARP_){
var temp__5823__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__28219_SHARP_) : parse_el.call(null,p2__28219_SHARP_));
if(cljs.core.truth_(temp__5823__auto__)){
var parsed = temp__5823__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__28220_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var G__28223 = arguments.length;
switch (G__28223) {
case 2:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2 = (function (pred,form){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form,cljs.core.PersistentVector.EMPTY);
}));

(datascript.parser.collect.cljs$core$IFn$_invoke$arity$3 = (function (pred,form,acc){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc);
} else {
if(datascript.db.seqable_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred,form__$1,acc__$1);
}),acc,form);
} else {
return acc;

}
}
}
}));

(datascript.parser.collect.cljs$lang$maxFixedArity = 3);

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__5141__auto__ = cljs.core.empty_QMARK_(coll);
if(or__5141__auto__){
return or__5141__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__28288 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28288) : f.call(null,G__28288));
} else {
if(cljs.core.map_QMARK_(form)){
var G__28296 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__28299){
var vec__28301 = p__28299;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28301,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28301,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28296) : f.call(null,G__28296));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__28320 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28275_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__28275_SHARP_,f) : datascript.parser.postwalk.call(null,p1__28275_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28320) : f.call(null,G__28320));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__28328 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__28276_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__28276_SHARP_,f) : datascript.parser.postwalk.call(null,p1__28276_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28328) : f.call(null,G__28328));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__5141__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28353,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28363 = k28353;
switch (G__28363) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28353,else__5450__auto__);

}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28365){
var vec__28366 = p__28365;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28366,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28366,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Placeholder{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28352){
var self__ = this;
var G__28352__$1 = this;
return (new cljs.core.RecordIter((0),G__28352__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-528488587 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28354,other28355){
var self__ = this;
var this28354__$1 = this;
return (((!((other28355 == null)))) && ((((this28354__$1.constructor === other28355.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28354__$1.__extmap,other28355.__extmap)))));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28353){
var self__ = this;
var this__5454__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k28353);
}));

(datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28352){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28371 = cljs.core.keyword_identical_QMARK_;
var expr__28372 = k__5456__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28352),null));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28352){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Placeholder(G__28352,self__.__extmap,self__.__hash));
}));

(datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28349){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28350,acc28351){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28351;
}));

(datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28351){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28351;
}));

(datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.Placeholder.cljs$lang$type = true);

(datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Placeholder",null,(1),null));
}));

(datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Placeholder");
}));

/**
 * Positional factory function for datascript.parser/Placeholder.
 */
datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

/**
 * Factory function for datascript.parser/Placeholder, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__28356){
var extmap__5489__auto__ = (function (){var G__28382 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28356);
if(cljs.core.record_QMARK_(G__28356)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28382);
} else {
return G__28382;
}
})();
return (new datascript.parser.Placeholder(null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28387,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28398 = k28387;
var G__28398__$1 = (((G__28398 instanceof cljs.core.Keyword))?G__28398.fqn:null);
switch (G__28398__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28387,else__5450__auto__);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28402){
var vec__28403 = p__28402;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28403,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28403,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Variable{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28386){
var self__ = this;
var G__28386__$1 = this;
return (new cljs.core.RecordIter((0),G__28386__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (736891289 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28388,other28389){
var self__ = this;
var this28388__$1 = this;
return (((!((other28389 == null)))) && ((((this28388__$1.constructor === other28389.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28388__$1.symbol,other28389.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28388__$1.__extmap,other28389.__extmap)))))));
}));

(datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28387){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28432 = k28387;
var G__28432__$1 = (((G__28432 instanceof cljs.core.Keyword))?G__28432.fqn:null);
switch (G__28432__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28387);

}
}));

(datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28386){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28434 = cljs.core.keyword_identical_QMARK_;
var expr__28435 = k__5456__auto__;
if(cljs.core.truth_((pred__28434.cljs$core$IFn$_invoke$arity$2 ? pred__28434.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28435) : pred__28434.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28435)))){
return (new datascript.parser.Variable(G__28386,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28386),null));
}
}));

(datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28386){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__28386,self__.__extmap,self__.__hash));
}));

(datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28383){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f28383),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28384,acc28385){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28384,self__.symbol,acc28385);
}));

(datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28385){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28385,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc28385,self__.symbol));
}));

(datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.Variable.cljs$lang$type = true);

(datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Variable",null,(1),null));
}));

(datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Variable");
}));

/**
 * Positional factory function for datascript.parser/Variable.
 */
datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/Variable, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__28392){
var extmap__5489__auto__ = (function (){var G__28452 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28392,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__28392)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28452);
} else {
return G__28452;
}
})();
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__28392),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28460,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28479 = k28460;
var G__28479__$1 = (((G__28479 instanceof cljs.core.Keyword))?G__28479.fqn:null);
switch (G__28479__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28460,else__5450__auto__);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28490){
var vec__28492 = p__28490;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28492,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28492,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.SrcVar{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28459){
var self__ = this;
var G__28459__$1 = this;
return (new cljs.core.RecordIter((0),G__28459__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1648766309 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28461,other28462){
var self__ = this;
var this28461__$1 = this;
return (((!((other28462 == null)))) && ((((this28461__$1.constructor === other28462.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28461__$1.symbol,other28462.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28461__$1.__extmap,other28462.__extmap)))))));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28460){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28528 = k28460;
var G__28528__$1 = (((G__28528 instanceof cljs.core.Keyword))?G__28528.fqn:null);
switch (G__28528__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28460);

}
}));

(datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28459){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28530 = cljs.core.keyword_identical_QMARK_;
var expr__28531 = k__5456__auto__;
if(cljs.core.truth_((pred__28530.cljs$core$IFn$_invoke$arity$2 ? pred__28530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28531) : pred__28530.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28531)))){
return (new datascript.parser.SrcVar(G__28459,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28459),null));
}
}));

(datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28459){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__28459,self__.__extmap,self__.__hash));
}));

(datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28456){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f28456),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28457,acc28458){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28457,self__.symbol,acc28458);
}));

(datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28458){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28458,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc28458,self__.symbol));
}));

(datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.SrcVar.cljs$lang$type = true);

(datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/SrcVar",null,(1),null));
}));

(datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/SrcVar");
}));

/**
 * Positional factory function for datascript.parser/SrcVar.
 */
datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/SrcVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__28471){
var extmap__5489__auto__ = (function (){var G__28549 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28471,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__28471)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28549);
} else {
return G__28549;
}
})();
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__28471),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28557,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28562 = k28557;
switch (G__28562) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28557,else__5450__auto__);

}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28570){
var vec__28572 = p__28570;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28572,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28556){
var self__ = this;
var G__28556__$1 = this;
return (new cljs.core.RecordIter((0),G__28556__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-350962559 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28558,other28559){
var self__ = this;
var this28558__$1 = this;
return (((!((other28559 == null)))) && ((((this28558__$1.constructor === other28559.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28558__$1.__extmap,other28559.__extmap)))));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28557){
var self__ = this;
var this__5454__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k28557);
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28556){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28612 = cljs.core.keyword_identical_QMARK_;
var expr__28613 = k__5456__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28556),null));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28556){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__28556,self__.__extmap,self__.__hash));
}));

(datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28553){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28554,acc28555){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28555;
}));

(datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28555){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28555;
}));

(datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.DefaultSrc.cljs$lang$type = true);

(datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/DefaultSrc",null,(1),null));
}));

(datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/DefaultSrc");
}));

/**
 * Positional factory function for datascript.parser/DefaultSrc.
 */
datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

/**
 * Factory function for datascript.parser/DefaultSrc, taking a map of keywords to field values.
 */
datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__28560){
var extmap__5489__auto__ = (function (){var G__28634 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28560);
if(cljs.core.record_QMARK_(G__28560)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28634);
} else {
return G__28634;
}
})();
return (new datascript.parser.DefaultSrc(null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28640,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28653 = k28640;
switch (G__28653) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28640,else__5450__auto__);

}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28655){
var vec__28656 = p__28655;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28656,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.RulesVar{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28639){
var self__ = this;
var G__28639__$1 = this;
return (new cljs.core.RecordIter((0),G__28639__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1504050517 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28641,other28642){
var self__ = this;
var this28641__$1 = this;
return (((!((other28642 == null)))) && ((((this28641__$1.constructor === other28642.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28641__$1.__extmap,other28642.__extmap)))));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28640){
var self__ = this;
var this__5454__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k28640);
}));

(datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28639){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28669 = cljs.core.keyword_identical_QMARK_;
var expr__28670 = k__5456__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28639),null));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28639){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.RulesVar(G__28639,self__.__extmap,self__.__hash));
}));

(datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28636){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28637,acc28638){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28638;
}));

(datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28638){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28638;
}));

(datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.RulesVar.cljs$lang$type = true);

(datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/RulesVar",null,(1),null));
}));

(datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/RulesVar");
}));

/**
 * Positional factory function for datascript.parser/RulesVar.
 */
datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

/**
 * Factory function for datascript.parser/RulesVar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__28647){
var extmap__5489__auto__ = (function (){var G__28681 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28647);
if(cljs.core.record_QMARK_(G__28647)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28681);
} else {
return G__28681;
}
})();
return (new datascript.parser.RulesVar(null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28690,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28700 = k28690;
var G__28700__$1 = (((G__28700 instanceof cljs.core.Keyword))?G__28700.fqn:null);
switch (G__28700__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28690,else__5450__auto__);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28702){
var vec__28703 = p__28702;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28703,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Constant{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28689){
var self__ = this;
var G__28689__$1 = this;
return (new cljs.core.RecordIter((0),G__28689__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-812884714 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28691,other28692){
var self__ = this;
var this28691__$1 = this;
return (((!((other28692 == null)))) && ((((this28691__$1.constructor === other28692.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.value,other28692.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28691__$1.__extmap,other28692.__extmap)))))));
}));

(datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28690){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28719 = k28690;
var G__28719__$1 = (((G__28719 instanceof cljs.core.Keyword))?G__28719.fqn:null);
switch (G__28719__$1) {
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28690);

}
}));

(datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28689){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28723 = cljs.core.keyword_identical_QMARK_;
var expr__28724 = k__5456__auto__;
if(cljs.core.truth_((pred__28723.cljs$core$IFn$_invoke$arity$2 ? pred__28723.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__28724) : pred__28723.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__28724)))){
return (new datascript.parser.Constant(G__28689,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28689),null));
}
}));

(datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28689){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__28689,self__.__extmap,self__.__hash));
}));

(datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28686){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f28686),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28687,acc28688){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28687,self__.value,acc28688);
}));

(datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28688){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28688,self__.value) : datascript.parser.collect_vars_acc.call(null,acc28688,self__.value));
}));

(datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(datascript.parser.Constant.cljs$lang$type = true);

(datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Constant",null,(1),null));
}));

(datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Constant");
}));

/**
 * Positional factory function for datascript.parser/Constant.
 */
datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

/**
 * Factory function for datascript.parser/Constant, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__28693){
var extmap__5489__auto__ = (function (){var G__28734 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28693,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__28693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28734);
} else {
return G__28734;
}
})();
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__28693),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28743,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28749 = k28743;
var G__28749__$1 = (((G__28749 instanceof cljs.core.Keyword))?G__28749.fqn:null);
switch (G__28749__$1) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28743,else__5450__auto__);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28754){
var vec__28755 = p__28754;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28755,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28755,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28742){
var self__ = this;
var G__28742__$1 = this;
return (new cljs.core.RecordIter((0),G__28742__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1509921913 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28744,other28745){
var self__ = this;
var this28744__$1 = this;
return (((!((other28745 == null)))) && ((((this28744__$1.constructor === other28745.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28744__$1.symbol,other28745.symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28744__$1.__extmap,other28745.__extmap)))))));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28743){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28758 = k28743;
var G__28758__$1 = (((G__28758 instanceof cljs.core.Keyword))?G__28758.fqn:null);
switch (G__28758__$1) {
case "symbol":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28743);

}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28742){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28759 = cljs.core.keyword_identical_QMARK_;
var expr__28760 = k__5456__auto__;
if(cljs.core.truth_((pred__28759.cljs$core$IFn$_invoke$arity$2 ? pred__28759.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28760) : pred__28759.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__28760)))){
return (new datascript.parser.PlainSymbol(G__28742,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28742),null));
}
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol,null))], null),self__.__extmap));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28742){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__28742,self__.__extmap,self__.__hash));
}));

(datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28739){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f28739),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28740,acc28741){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28740,self__.symbol,acc28741);
}));

(datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28741){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28741,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc28741,self__.symbol));
}));

(datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
}));

(datascript.parser.PlainSymbol.cljs$lang$type = true);

(datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/PlainSymbol",null,(1),null));
}));

(datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/PlainSymbol");
}));

/**
 * Positional factory function for datascript.parser/PlainSymbol.
 */
datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

/**
 * Factory function for datascript.parser/PlainSymbol, taking a map of keywords to field values.
 */
datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__28747){
var extmap__5489__auto__ = (function (){var G__28768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28747,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
if(cljs.core.record_QMARK_(G__28747)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28768);
} else {
return G__28768;
}
})();
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__28747),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_var_required = (function datascript$parser$parse_var_required(form){
var or__5141__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse var, expected symbol starting with ?, got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-var","parser/rule-var",-1584354459),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$")))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if((((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?")))){
return null;
} else {
return (new datascript.parser.Constant(form,null,null,null));
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if((((form instanceof cljs.core.Symbol)) && (((cljs.core.not(datascript.parser.parse_variable(form))) && (((cljs.core.not(datascript.parser.parse_src_var(form))) && (((cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form))))))))))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__5141__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28804,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28815 = k28804;
var G__28815__$1 = (((G__28815 instanceof cljs.core.Keyword))?G__28815.fqn:null);
switch (G__28815__$1) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28804,else__5450__auto__);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28823){
var vec__28824 = p__28823;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28824,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.RuleVars{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28803){
var self__ = this;
var G__28803__$1 = this;
return (new cljs.core.RecordIter((0),G__28803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (892963297 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28805,other28806){
var self__ = this;
var this28805__$1 = this;
return (((!((other28806 == null)))) && ((((this28805__$1.constructor === other28806.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28805__$1.required,other28806.required)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28805__$1.free,other28806.free)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28805__$1.__extmap,other28806.__extmap)))))))));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28804){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28840 = k28804;
var G__28840__$1 = (((G__28840 instanceof cljs.core.Keyword))?G__28840.fqn:null);
switch (G__28840__$1) {
case "required":
case "free":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28804);

}
}));

(datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28803){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28841 = cljs.core.keyword_identical_QMARK_;
var expr__28842 = k__5456__auto__;
if(cljs.core.truth_((pred__28841.cljs$core$IFn$_invoke$arity$2 ? pred__28841.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"required","required",1807647006),expr__28842) : pred__28841.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__28842)))){
return (new datascript.parser.RuleVars(G__28803,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28841.cljs$core$IFn$_invoke$arity$2 ? pred__28841.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"free","free",801364328),expr__28842) : pred__28841.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__28842)))){
return (new datascript.parser.RuleVars(self__.required,G__28803,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28803),null));
}
}
}));

(datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"free","free",801364328),self__.free,null))], null),self__.__extmap));
}));

(datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28803){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__28803,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28800){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f28800),datascript.parser.postwalk(self__.free,f28800),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28801,acc28802){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28801,self__.free,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28801,self__.required,acc28802));
}));

(datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28802){
var self__ = this;
var ___26593__auto____$1 = this;
var G__28844 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28802,self__.required) : datascript.parser.collect_vars_acc.call(null,acc28802,self__.required));
var G__28845 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__28844,G__28845) : datascript.parser.collect_vars_acc.call(null,G__28844,G__28845));
}));

(datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
}));

(datascript.parser.RuleVars.cljs$lang$type = true);

(datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleVars",null,(1),null));
}));

(datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/RuleVars");
}));

/**
 * Positional factory function for datascript.parser/RuleVars.
 */
datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleVars, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__28807){
var extmap__5489__auto__ = (function (){var G__28848 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28807,new cljs.core.Keyword(null,"required","required",1807647006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"free","free",801364328)], 0));
if(cljs.core.record_QMARK_(G__28807)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28848);
} else {
return G__28848;
}
})();
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__28807),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__28807),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__28854 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28854,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_var_required,rest);
if(((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Rule variables should be distinct"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null):null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars)));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28871,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28876 = k28871;
switch (G__28876) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28871,else__5450__auto__);

}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28877){
var vec__28878 = p__28877;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28878,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28878,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28870){
var self__ = this;
var G__28870__$1 = this;
return (new cljs.core.RecordIter((0),G__28870__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-890522983 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28872,other28873){
var self__ = this;
var this28872__$1 = this;
return (((!((other28873 == null)))) && ((((this28872__$1.constructor === other28873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28872__$1.__extmap,other28873.__extmap)))));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28871){
var self__ = this;
var this__5454__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k28871);
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28870){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28896 = cljs.core.keyword_identical_QMARK_;
var expr__28897 = k__5456__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28870),null));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28870){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__28870,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28867){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28868,acc28869){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28869;
}));

(datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28869){
var self__ = this;
var ___26593__auto____$1 = this;
return acc28869;
}));

(datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(datascript.parser.BindIgnore.cljs$lang$type = true);

(datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/BindIgnore",null,(1),null));
}));

(datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/BindIgnore");
}));

/**
 * Positional factory function for datascript.parser/BindIgnore.
 */
datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

/**
 * Factory function for datascript.parser/BindIgnore, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__28875){
var extmap__5489__auto__ = (function (){var G__28910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__28875);
if(cljs.core.record_QMARK_(G__28875)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28910);
} else {
return G__28910;
}
})();
return (new datascript.parser.BindIgnore(null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28915,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28924 = k28915;
var G__28924__$1 = (((G__28924 instanceof cljs.core.Keyword))?G__28924.fqn:null);
switch (G__28924__$1) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28915,else__5450__auto__);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28926){
var vec__28927 = p__28926;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28927,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.BindScalar{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28914){
var self__ = this;
var G__28914__$1 = this;
return (new cljs.core.RecordIter((0),G__28914__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1522792445 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28916,other28917){
var self__ = this;
var this28916__$1 = this;
return (((!((other28917 == null)))) && ((((this28916__$1.constructor === other28917.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28916__$1.variable,other28917.variable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28916__$1.__extmap,other28917.__extmap)))))));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28915){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28937 = k28915;
var G__28937__$1 = (((G__28937 instanceof cljs.core.Keyword))?G__28937.fqn:null);
switch (G__28937__$1) {
case "variable":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28915);

}
}));

(datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28914){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28938 = cljs.core.keyword_identical_QMARK_;
var expr__28939 = k__5456__auto__;
if(cljs.core.truth_((pred__28938.cljs$core$IFn$_invoke$arity$2 ? pred__28938.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__28939) : pred__28938.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__28939)))){
return (new datascript.parser.BindScalar(G__28914,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28914),null));
}
}));

(datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null))], null),self__.__extmap));
}));

(datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28914){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__28914,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28911){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f28911),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28912,acc28913){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28912,self__.variable,acc28913);
}));

(datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28913){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28913,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc28913,self__.variable));
}));

(datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
}));

(datascript.parser.BindScalar.cljs$lang$type = true);

(datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/BindScalar",null,(1),null));
}));

(datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/BindScalar");
}));

/**
 * Positional factory function for datascript.parser/BindScalar.
 */
datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

/**
 * Factory function for datascript.parser/BindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__28918){
var extmap__5489__auto__ = (function (){var G__28962 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28918,new cljs.core.Keyword(null,"variable","variable",-281346492));
if(cljs.core.record_QMARK_(G__28918)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28962);
} else {
return G__28962;
}
})();
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__28918),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28968,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28978 = k28968;
var G__28978__$1 = (((G__28978 instanceof cljs.core.Keyword))?G__28978.fqn:null);
switch (G__28978__$1) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28968,else__5450__auto__);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28980){
var vec__28981 = p__28980;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28981,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.BindTuple{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28967){
var self__ = this;
var G__28967__$1 = this;
return (new cljs.core.RecordIter((0),G__28967__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1637239347 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28969,other28970){
var self__ = this;
var this28969__$1 = this;
return (((!((other28970 == null)))) && ((((this28969__$1.constructor === other28970.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28969__$1.bindings,other28970.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28969__$1.__extmap,other28970.__extmap)))))));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28968){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29000 = k28968;
var G__29000__$1 = (((G__29000 instanceof cljs.core.Keyword))?G__29000.fqn:null);
switch (G__29000__$1) {
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28968);

}
}));

(datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28967){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29001 = cljs.core.keyword_identical_QMARK_;
var expr__29002 = k__5456__auto__;
if(cljs.core.truth_((pred__29001.cljs$core$IFn$_invoke$arity$2 ? pred__29001.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__29002) : pred__29001.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__29002)))){
return (new datascript.parser.BindTuple(G__28967,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28967),null));
}
}));

(datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28967){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__28967,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f28964){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f28964),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred28965,acc28966){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred28965,self__.bindings,acc28966);
}));

(datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc28966){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc28966,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc28966,self__.bindings));
}));

(datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(datascript.parser.BindTuple.cljs$lang$type = true);

(datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/BindTuple",null,(1),null));
}));

(datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/BindTuple");
}));

/**
 * Positional factory function for datascript.parser/BindTuple.
 */
datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

/**
 * Factory function for datascript.parser/BindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__28975){
var extmap__5489__auto__ = (function (){var G__29008 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28975,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
if(cljs.core.record_QMARK_(G__28975)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29008);
} else {
return G__29008;
}
})();
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__28975),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29014,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29023 = k29014;
var G__29023__$1 = (((G__29023 instanceof cljs.core.Keyword))?G__29023.fqn:null);
switch (G__29023__$1) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29014,else__5450__auto__);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29024){
var vec__29025 = p__29024;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29025,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.BindColl{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29013){
var self__ = this;
var G__29013__$1 = this;
return (new cljs.core.RecordIter((0),G__29013__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1930368089 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29015,other29016){
var self__ = this;
var this29015__$1 = this;
return (((!((other29016 == null)))) && ((((this29015__$1.constructor === other29016.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29015__$1.binding,other29016.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29015__$1.__extmap,other29016.__extmap)))))));
}));

(datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29014){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29029 = k29014;
var G__29029__$1 = (((G__29029 instanceof cljs.core.Keyword))?G__29029.fqn:null);
switch (G__29029__$1) {
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29014);

}
}));

(datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29013){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29031 = cljs.core.keyword_identical_QMARK_;
var expr__29032 = k__5456__auto__;
if(cljs.core.truth_((pred__29031.cljs$core$IFn$_invoke$arity$2 ? pred__29031.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__29032) : pred__29031.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__29032)))){
return (new datascript.parser.BindColl(G__29013,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29013),null));
}
}));

(datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29013){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__29013,self__.__extmap,self__.__hash));
}));

(datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29010){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f29010),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29011,acc29012){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29011,self__.binding,acc29012);
}));

(datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29012){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29012,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc29012,self__.binding));
}));

(datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.BindColl.cljs$lang$type = true);

(datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/BindColl",null,(1),null));
}));

(datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/BindColl");
}));

/**
 * Positional factory function for datascript.parser/BindColl.
 */
datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

/**
 * Factory function for datascript.parser/BindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__29017){
var extmap__5489__auto__ = (function (){var G__29037 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29017,new cljs.core.Keyword(null,"binding","binding",539932593));
if(cljs.core.record_QMARK_(G__29017)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29037);
} else {
return G__29037;
}
})();
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__29017),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__5825__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__5825__auto__)){
var var$ = temp__5825__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(((datascript.parser.of_size_QMARK_(form,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,"...","...",-1926939749,null))))){
var temp__5823__auto__ = (function (){var G__29039 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__29039) : datascript.parser.parse_binding.call(null,G__29039));
})();
if(cljs.core.truth_(temp__5823__auto__)){
var sub_bind = temp__5823__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse collection binding"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__5141__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__5825__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__5825__auto__)){
var sub_bindings = temp__5825__auto__;
if((!(cljs.core.empty_QMARK_(sub_bindings)))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Tuple binding cannot be empty"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(((datascript.parser.of_size_QMARK_(form,(1))) && (cljs.core.sequential_QMARK_(cljs.core.first(form))))){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__5141__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
var or__5141__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__5141__auto____$3)){
return or__5141__auto____$3;
} else {
var or__5141__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__5141__auto____$4)){
return or__5141__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

var datascript$parser$IFindVars$_find_vars$dyn_29849 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (datascript.parser._find_vars[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (datascript.parser._find_vars["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
});
datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
return datascript$parser$IFindVars$_find_vars$dyn_29849(this$);
}
});

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29054,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29070 = k29054;
var G__29070__$1 = (((G__29070 instanceof cljs.core.Keyword))?G__29070.fqn:null);
switch (G__29070__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29054,else__5450__auto__);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29073){
var vec__29074 = p__29073;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29074,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Aggregate{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29053){
var self__ = this;
var G__29053__$1 = this;
return (new cljs.core.RecordIter((0),G__29053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-91097383 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29055,other29056){
var self__ = this;
var this29055__$1 = this;
return (((!((other29056 == null)))) && ((((this29055__$1.constructor === other29056.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29055__$1.fn,other29056.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29055__$1.args,other29056.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29055__$1.__extmap,other29056.__extmap)))))))));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29054){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29086 = k29054;
var G__29086__$1 = (((G__29086 instanceof cljs.core.Keyword))?G__29086.fqn:null);
switch (G__29086__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29054);

}
}));

(datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29053){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29092 = cljs.core.keyword_identical_QMARK_;
var expr__29093 = k__5456__auto__;
if(cljs.core.truth_((pred__29092.cljs$core$IFn$_invoke$arity$2 ? pred__29092.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29093) : pred__29092.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29093)))){
return (new datascript.parser.Aggregate(G__29053,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29092.cljs$core$IFn$_invoke$arity$2 ? pred__29092.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__29093) : pred__29092.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29093)))){
return (new datascript.parser.Aggregate(self__.fn,G__29053,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29053),null));
}
}
}));

(datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29053){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__29053,self__.__extmap,self__.__hash));
}));

(datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29046){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f29046),datascript.parser.postwalk(self__.args,f29046),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29047,acc29048){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29047,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29047,self__.fn,acc29048));
}));

(datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29048){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29101 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29048,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc29048,self__.fn));
var G__29102 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29101,G__29102) : datascript.parser.collect_vars_acc.call(null,G__29101,G__29102));
}));

(datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Aggregate.cljs$lang$type = true);

(datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Aggregate",null,(1),null));
}));

(datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Aggregate");
}));

/**
 * Positional factory function for datascript.parser/Aggregate.
 */
datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Aggregate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__29059){
var extmap__5489__auto__ = (function (){var G__29106 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29059,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__29059)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29106);
} else {
return G__29106;
}
})();
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29059),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29059),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29112,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29119 = k29112;
var G__29119__$1 = (((G__29119 instanceof cljs.core.Keyword))?G__29119.fqn:null);
switch (G__29119__$1) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29112,else__5450__auto__);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29121){
var vec__29122 = p__29121;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29122,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Pull{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29111){
var self__ = this;
var G__29111__$1 = this;
return (new cljs.core.RecordIter((0),G__29111__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-2108867663 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29113,other29114){
var self__ = this;
var this29113__$1 = this;
return (((!((other29114 == null)))) && ((((this29113__$1.constructor === other29114.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29113__$1.source,other29114.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29113__$1.variable,other29114.variable)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29113__$1.pattern,other29114.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29113__$1.__extmap,other29114.__extmap)))))))))));
}));

(datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29112){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29139 = k29112;
var G__29139__$1 = (((G__29139 instanceof cljs.core.Keyword))?G__29139.fqn:null);
switch (G__29139__$1) {
case "source":
case "variable":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29112);

}
}));

(datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29111){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29140 = cljs.core.keyword_identical_QMARK_;
var expr__29141 = k__5456__auto__;
if(cljs.core.truth_((pred__29140.cljs$core$IFn$_invoke$arity$2 ? pred__29140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__29141) : pred__29140.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29141)))){
return (new datascript.parser.Pull(G__29111,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29140.cljs$core$IFn$_invoke$arity$2 ? pred__29140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variable","variable",-281346492),expr__29141) : pred__29140.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__29141)))){
return (new datascript.parser.Pull(self__.source,G__29111,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29140.cljs$core$IFn$_invoke$arity$2 ? pred__29140.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29141) : pred__29140.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29141)))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__29111,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29111),null));
}
}
}
}));

(datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29111){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__29111,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29108){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f29108),datascript.parser.postwalk(self__.variable,f29108),datascript.parser.postwalk(self__.pattern,f29108),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29109,acc29110){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29109,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29109,self__.variable,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29109,self__.source,acc29110)));
}));

(datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29110){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29148 = (function (){var G__29150 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29110,self__.source) : datascript.parser.collect_vars_acc.call(null,acc29110,self__.source));
var G__29151 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29150,G__29151) : datascript.parser.collect_vars_acc.call(null,G__29150,G__29151));
})();
var G__29149 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29148,G__29149) : datascript.parser.collect_vars_acc.call(null,G__29148,G__29149));
}));

(datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pull.cljs$lang$type = true);

(datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Pull",null,(1),null));
}));

(datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Pull");
}));

/**
 * Positional factory function for datascript.parser/Pull.
 */
datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pull, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__29115){
var extmap__5489__auto__ = (function (){var G__29152 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29115,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__29115)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29152);
} else {
return G__29152;
}
})();
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29115),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__29115),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29115),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

var datascript$parser$IFindElements$find_elements$dyn_29855 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (datascript.parser.find_elements[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (datascript.parser.find_elements["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
});
datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
return datascript$parser$IFindElements$find_elements$dyn_29855(this$);
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29157,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29181 = k29157;
var G__29181__$1 = (((G__29181 instanceof cljs.core.Keyword))?G__29181.fqn:null);
switch (G__29181__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29157,else__5450__auto__);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29185){
var vec__29186 = p__29185;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29186,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.FindRel{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29156){
var self__ = this;
var G__29156__$1 = this;
return (new cljs.core.RecordIter((0),G__29156__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (744809563 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29158,other29159){
var self__ = this;
var this29158__$1 = this;
return (((!((other29159 == null)))) && ((((this29158__$1.constructor === other29159.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29158__$1.elements,other29159.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29158__$1.__extmap,other29159.__extmap)))))));
}));

(datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29157){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29202 = k29157;
var G__29202__$1 = (((G__29202 instanceof cljs.core.Keyword))?G__29202.fqn:null);
switch (G__29202__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29157);

}
}));

(datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29156){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29206 = cljs.core.keyword_identical_QMARK_;
var expr__29207 = k__5456__auto__;
if(cljs.core.truth_((pred__29206.cljs$core$IFn$_invoke$arity$2 ? pred__29206.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__29207) : pred__29206.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__29207)))){
return (new datascript.parser.FindRel(G__29156,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29156),null));
}
}));

(datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29156){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__29156,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29153){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f29153),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29154,acc29155){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29154,self__.elements,acc29155);
}));

(datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29155){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29155,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc29155,self__.elements));
}));

(datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindRel.cljs$lang$type = true);

(datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/FindRel",null,(1),null));
}));

(datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/FindRel");
}));

/**
 * Positional factory function for datascript.parser/FindRel.
 */
datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindRel, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__29161){
var extmap__5489__auto__ = (function (){var G__29210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29161,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__29161)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29210);
} else {
return G__29210;
}
})();
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__29161),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29223,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29235 = k29223;
var G__29235__$1 = (((G__29235 instanceof cljs.core.Keyword))?G__29235.fqn:null);
switch (G__29235__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29223,else__5450__auto__);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29236){
var vec__29237 = p__29236;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29237,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.FindColl{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29222){
var self__ = this;
var G__29222__$1 = this;
return (new cljs.core.RecordIter((0),G__29222__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (124241361 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29224,other29225){
var self__ = this;
var this29224__$1 = this;
return (((!((other29225 == null)))) && ((((this29224__$1.constructor === other29225.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29224__$1.element,other29225.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29224__$1.__extmap,other29225.__extmap)))))));
}));

(datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29223){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29249 = k29223;
var G__29249__$1 = (((G__29249 instanceof cljs.core.Keyword))?G__29249.fqn:null);
switch (G__29249__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29223);

}
}));

(datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29222){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29250 = cljs.core.keyword_identical_QMARK_;
var expr__29251 = k__5456__auto__;
if(cljs.core.truth_((pred__29250.cljs$core$IFn$_invoke$arity$2 ? pred__29250.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__29251) : pred__29250.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__29251)))){
return (new datascript.parser.FindColl(G__29222,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29222),null));
}
}));

(datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29222){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__29222,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29219){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f29219),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29220,acc29221){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29220,self__.element,acc29221);
}));

(datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29221){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29221,self__.element) : datascript.parser.collect_vars_acc.call(null,acc29221,self__.element));
}));

(datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindColl.cljs$lang$type = true);

(datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/FindColl",null,(1),null));
}));

(datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/FindColl");
}));

/**
 * Positional factory function for datascript.parser/FindColl.
 */
datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindColl, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__29226){
var extmap__5489__auto__ = (function (){var G__29264 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29226,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__29226)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29264);
} else {
return G__29264;
}
})();
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__29226),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29269,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29273 = k29269;
var G__29273__$1 = (((G__29273 instanceof cljs.core.Keyword))?G__29273.fqn:null);
switch (G__29273__$1) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29269,else__5450__auto__);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29274){
var vec__29275 = p__29274;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29275,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.FindScalar{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29268){
var self__ = this;
var G__29268__$1 = this;
return (new cljs.core.RecordIter((0),G__29268__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-661542332 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29270,other29271){
var self__ = this;
var this29270__$1 = this;
return (((!((other29271 == null)))) && ((((this29270__$1.constructor === other29271.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29270__$1.element,other29271.element)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29270__$1.__extmap,other29271.__extmap)))))));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29269){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29282 = k29269;
var G__29282__$1 = (((G__29282 instanceof cljs.core.Keyword))?G__29282.fqn:null);
switch (G__29282__$1) {
case "element":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29269);

}
}));

(datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29268){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29283 = cljs.core.keyword_identical_QMARK_;
var expr__29284 = k__5456__auto__;
if(cljs.core.truth_((pred__29283.cljs$core$IFn$_invoke$arity$2 ? pred__29283.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"element","element",1974019749),expr__29284) : pred__29283.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__29284)))){
return (new datascript.parser.FindScalar(G__29268,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29268),null));
}
}));

(datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"element","element",1974019749),self__.element,null))], null),self__.__extmap));
}));

(datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29268){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__29268,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29265){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f29265),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29266,acc29267){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29266,self__.element,acc29267);
}));

(datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29267){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29267,self__.element) : datascript.parser.collect_vars_acc.call(null,acc29267,self__.element));
}));

(datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
}));

(datascript.parser.FindScalar.cljs$lang$type = true);

(datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/FindScalar",null,(1),null));
}));

(datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/FindScalar");
}));

/**
 * Positional factory function for datascript.parser/FindScalar.
 */
datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

/**
 * Factory function for datascript.parser/FindScalar, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__29272){
var extmap__5489__auto__ = (function (){var G__29289 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29272,new cljs.core.Keyword(null,"element","element",1974019749));
if(cljs.core.record_QMARK_(G__29272)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29289);
} else {
return G__29289;
}
})();
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__29272),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29300,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29304 = k29300;
var G__29304__$1 = (((G__29304 instanceof cljs.core.Keyword))?G__29304.fqn:null);
switch (G__29304__$1) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29300,else__5450__auto__);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29311){
var vec__29312 = p__29311;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29312,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.FindTuple{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29299){
var self__ = this;
var G__29299__$1 = this;
return (new cljs.core.RecordIter((0),G__29299__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (681530371 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29301,other29302){
var self__ = this;
var this29301__$1 = this;
return (((!((other29302 == null)))) && ((((this29301__$1.constructor === other29302.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29301__$1.elements,other29302.elements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29301__$1.__extmap,other29302.__extmap)))))));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29300){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29325 = k29300;
var G__29325__$1 = (((G__29325 instanceof cljs.core.Keyword))?G__29325.fqn:null);
switch (G__29325__$1) {
case "elements":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29300);

}
}));

(datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29299){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29326 = cljs.core.keyword_identical_QMARK_;
var expr__29327 = k__5456__auto__;
if(cljs.core.truth_((pred__29326.cljs$core$IFn$_invoke$arity$2 ? pred__29326.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"elements","elements",657646735),expr__29327) : pred__29326.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__29327)))){
return (new datascript.parser.FindTuple(G__29299,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29299),null));
}
}));

(datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements,null))], null),self__.__extmap));
}));

(datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29299){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__29299,self__.__extmap,self__.__hash));
}));

(datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29296){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f29296),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29297,acc29298){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29297,self__.elements,acc29298);
}));

(datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29298){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29298,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc29298,self__.elements));
}));

(datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
}));

(datascript.parser.FindTuple.cljs$lang$type = true);

(datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/FindTuple",null,(1),null));
}));

(datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/FindTuple");
}));

/**
 * Positional factory function for datascript.parser/FindTuple.
 */
datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

/**
 * Factory function for datascript.parser/FindTuple, taking a map of keywords to field values.
 */
datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__29303){
var extmap__5489__auto__ = (function (){var G__29345 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29303,new cljs.core.Keyword(null,"elements","elements",657646735));
if(cljs.core.record_QMARK_(G__29303)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29345);
} else {
return G__29345;
}
})();
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__29303),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if(((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2))))){
var vec__29346 = form;
var seq__29347 = cljs.core.seq(vec__29346);
var first__29348 = cljs.core.first(seq__29347);
var seq__29347__$1 = cljs.core.next(seq__29347);
var fn = first__29348;
var args = seq__29347__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5139__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
return args_STAR_;
} else {
return and__5139__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null))))){
if((cljs.core.count(form) >= (3))){
var vec__29349 = form;
var seq__29350 = cljs.core.seq(vec__29349);
var first__29351 = cljs.core.first(seq__29350);
var seq__29350__$1 = cljs.core.next(seq__29350);
var _ = first__29351;
var first__29351__$1 = cljs.core.first(seq__29350__$1);
var seq__29350__$2 = cljs.core.next(seq__29350__$1);
var fn = first__29351__$1;
var args = seq__29350__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__5139__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
return args_STAR_;
} else {
return and__5139__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),new cljs.core.Symbol(null,"pull","pull",779986722,null))))){
if(((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4))))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__29355 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29355,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29355,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__5141__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__5139__auto__ = src_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__5139__auto____$1)){
return pattern_STAR_;
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__5141__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__29364 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__29364 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__29364,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
if(((cljs.core.sequential_QMARK_(inner)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),new cljs.core.Symbol(null,"...","...",-1926939749,null))))))){
var G__29367 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__29367 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__29367,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if(((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),new cljs.core.Symbol(null,".",".",1975675962,null))))))){
var G__29371 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__29371 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__29371,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1))))){
var inner = cljs.core.first(form);
var G__29373 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__29373 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__29373,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__5141__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
var or__5141__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__5141__auto____$3)){
return or__5141__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.ReturnMap = (function (type,symbols,__meta,__extmap,__hash){
this.type = type;
this.symbols = symbols;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29381,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29386 = k29381;
var G__29386__$1 = (((G__29386 instanceof cljs.core.Keyword))?G__29386.fqn:null);
switch (G__29386__$1) {
case "type":
return self__.type;

break;
case "symbols":
return self__.symbols;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29381,else__5450__auto__);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29387){
var vec__29388 = p__29387;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29388,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29388,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.ReturnMap{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols],null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29380){
var self__ = this;
var G__29380__$1 = this;
return (new cljs.core.RecordIter((0),G__29380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"symbols","symbols",1211743)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-2025547471 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29382,other29383){
var self__ = this;
var this29382__$1 = this;
return (((!((other29383 == null)))) && ((((this29382__$1.constructor === other29383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29382__$1.type,other29383.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29382__$1.symbols,other29383.symbols)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29382__$1.__extmap,other29383.__extmap)))))))));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"symbols","symbols",1211743),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29381){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29392 = k29381;
var G__29392__$1 = (((G__29392 instanceof cljs.core.Keyword))?G__29392.fqn:null);
switch (G__29392__$1) {
case "type":
case "symbols":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29381);

}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29380){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29393 = cljs.core.keyword_identical_QMARK_;
var expr__29394 = k__5456__auto__;
if(cljs.core.truth_((pred__29393.cljs$core$IFn$_invoke$arity$2 ? pred__29393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__29394) : pred__29393.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__29394)))){
return (new datascript.parser.ReturnMap(G__29380,self__.symbols,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29393.cljs$core$IFn$_invoke$arity$2 ? pred__29393.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__29394) : pred__29393.call(null,new cljs.core.Keyword(null,"symbols","symbols",1211743),expr__29394)))){
return (new datascript.parser.ReturnMap(self__.type,G__29380,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29380),null));
}
}
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"symbols","symbols",1211743),self__.symbols,null))], null),self__.__extmap));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29380){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.ReturnMap(self__.type,self__.symbols,G__29380,self__.__extmap,self__.__hash));
}));

(datascript.parser.ReturnMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29377){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.ReturnMap(datascript.parser.postwalk(self__.type,f29377),datascript.parser.postwalk(self__.symbols,f29377),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29378,acc29379){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29378,self__.symbols,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29378,self__.type,acc29379));
}));

(datascript.parser.ReturnMap.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29379){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29399 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29379,self__.type) : datascript.parser.collect_vars_acc.call(null,acc29379,self__.type));
var G__29400 = self__.symbols;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29399,G__29400) : datascript.parser.collect_vars_acc.call(null,G__29399,G__29400));
}));

(datascript.parser.ReturnMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"symbols","symbols",1641743270,null)], null);
}));

(datascript.parser.ReturnMap.cljs$lang$type = true);

(datascript.parser.ReturnMap.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/ReturnMap",null,(1),null));
}));

(datascript.parser.ReturnMap.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/ReturnMap");
}));

/**
 * Positional factory function for datascript.parser/ReturnMap.
 */
datascript.parser.__GT_ReturnMap = (function datascript$parser$__GT_ReturnMap(type,symbols){
return (new datascript.parser.ReturnMap(type,symbols,null,null,null));
});

/**
 * Factory function for datascript.parser/ReturnMap, taking a map of keywords to field values.
 */
datascript.parser.map__GT_ReturnMap = (function datascript$parser$map__GT_ReturnMap(G__29384){
var extmap__5489__auto__ = (function (){var G__29401 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29384,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbols","symbols",1211743)], 0));
if(cljs.core.record_QMARK_(G__29384)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29401);
} else {
return G__29401;
}
})();
return (new datascript.parser.ReturnMap(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__29384),new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(G__29384),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_return_map = (function datascript$parser$parse_return_map(type,form){
if((((!(cljs.core.empty_QMARK_(form)))) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,form)))){
var G__29405 = type;
var G__29405__$1 = (((G__29405 instanceof cljs.core.Keyword))?G__29405.fqn:null);
switch (G__29405__$1) {
case "keys":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,form),null,null,null));

break;
case "syms":
return (new datascript.parser.ReturnMap(type,cljs.core.vec(form),null,null,null));

break;
case "strs":
return (new datascript.parser.ReturnMap(type,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.str,form),null,null,null));

break;
default:
return null;

}
} else {
return null;
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__5141__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse :with clause, expected [ variable+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__5823__auto__ = (function (){var or__5141__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var var$ = temp__5823__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__5141__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29412,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29416 = k29412;
var G__29416__$1 = (((G__29416 instanceof cljs.core.Keyword))?G__29416.fqn:null);
switch (G__29416__$1) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29412,else__5450__auto__);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29418){
var vec__29419 = p__29418;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29419,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Pattern{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29411){
var self__ = this;
var G__29411__$1 = this;
return (new cljs.core.RecordIter((0),G__29411__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (575220587 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29413,other29414){
var self__ = this;
var this29413__$1 = this;
return (((!((other29414 == null)))) && ((((this29413__$1.constructor === other29414.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29413__$1.source,other29414.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29413__$1.pattern,other29414.pattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29413__$1.__extmap,other29414.__extmap)))))))));
}));

(datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29412){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29426 = k29412;
var G__29426__$1 = (((G__29426 instanceof cljs.core.Keyword))?G__29426.fqn:null);
switch (G__29426__$1) {
case "source":
case "pattern":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29412);

}
}));

(datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29411){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29427 = cljs.core.keyword_identical_QMARK_;
var expr__29428 = k__5456__auto__;
if(cljs.core.truth_((pred__29427.cljs$core$IFn$_invoke$arity$2 ? pred__29427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__29428) : pred__29427.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29428)))){
return (new datascript.parser.Pattern(G__29411,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29427.cljs$core$IFn$_invoke$arity$2 ? pred__29427.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29428) : pred__29427.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29428)))){
return (new datascript.parser.Pattern(self__.source,G__29411,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29411),null));
}
}
}));

(datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null))], null),self__.__extmap));
}));

(datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29411){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__29411,self__.__extmap,self__.__hash));
}));

(datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29407){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f29407),datascript.parser.postwalk(self__.pattern,f29407),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29408,acc29409){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29408,self__.pattern,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29408,self__.source,acc29409));
}));

(datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29409){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29431 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29409,self__.source) : datascript.parser.collect_vars_acc.call(null,acc29409,self__.source));
var G__29432 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29431,G__29432) : datascript.parser.collect_vars_acc.call(null,G__29431,G__29432));
}));

(datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
}));

(datascript.parser.Pattern.cljs$lang$type = true);

(datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Pattern",null,(1),null));
}));

(datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Pattern");
}));

/**
 * Positional factory function for datascript.parser/Pattern.
 */
datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

/**
 * Factory function for datascript.parser/Pattern, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__29415){
var extmap__5489__auto__ = (function (){var G__29434 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29415,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pattern","pattern",242135423)], 0));
if(cljs.core.record_QMARK_(G__29415)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29434);
} else {
return G__29434;
}
})();
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29415),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29415),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29439,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29444 = k29439;
var G__29444__$1 = (((G__29444 instanceof cljs.core.Keyword))?G__29444.fqn:null);
switch (G__29444__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29439,else__5450__auto__);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29445){
var vec__29446 = p__29445;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29446,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Predicate{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29438){
var self__ = this;
var G__29438__$1 = this;
return (new cljs.core.RecordIter((0),G__29438__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-1523376880 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29440,other29441){
var self__ = this;
var this29440__$1 = this;
return (((!((other29441 == null)))) && ((((this29440__$1.constructor === other29441.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29440__$1.fn,other29441.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29440__$1.args,other29441.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29440__$1.__extmap,other29441.__extmap)))))))));
}));

(datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29439){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29450 = k29439;
var G__29450__$1 = (((G__29450 instanceof cljs.core.Keyword))?G__29450.fqn:null);
switch (G__29450__$1) {
case "fn":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29439);

}
}));

(datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29438){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29452 = cljs.core.keyword_identical_QMARK_;
var expr__29453 = k__5456__auto__;
if(cljs.core.truth_((pred__29452.cljs$core$IFn$_invoke$arity$2 ? pred__29452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29453) : pred__29452.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29453)))){
return (new datascript.parser.Predicate(G__29438,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29452.cljs$core$IFn$_invoke$arity$2 ? pred__29452.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__29453) : pred__29452.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29453)))){
return (new datascript.parser.Predicate(self__.fn,G__29438,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29438),null));
}
}
}));

(datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29438){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__29438,self__.__extmap,self__.__hash));
}));

(datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29435){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f29435),datascript.parser.postwalk(self__.args,f29435),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29436,acc29437){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29436,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29436,self__.fn,acc29437));
}));

(datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29437){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29455 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29437,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc29437,self__.fn));
var G__29456 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29455,G__29456) : datascript.parser.collect_vars_acc.call(null,G__29455,G__29456));
}));

(datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.Predicate.cljs$lang$type = true);

(datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Predicate",null,(1),null));
}));

(datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Predicate");
}));

/**
 * Positional factory function for datascript.parser/Predicate.
 */
datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

/**
 * Factory function for datascript.parser/Predicate, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__29442){
var extmap__5489__auto__ = (function (){var G__29461 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29442,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__29442)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29461);
} else {
return G__29461;
}
})();
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29442),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29442),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29478,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29498 = k29478;
var G__29498__$1 = (((G__29498 instanceof cljs.core.Keyword))?G__29498.fqn:null);
switch (G__29498__$1) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29478,else__5450__auto__);

}
}));

(datascript.parser.Function.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29499){
var vec__29500 = p__29499;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29500,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Function{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29477){
var self__ = this;
var G__29477__$1 = this;
return (new cljs.core.RecordIter((0),G__29477__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (589494199 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29479,other29480){
var self__ = this;
var this29479__$1 = this;
return (((!((other29480 == null)))) && ((((this29479__$1.constructor === other29480.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29479__$1.fn,other29480.fn)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29479__$1.args,other29480.args)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29479__$1.binding,other29480.binding)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29479__$1.__extmap,other29480.__extmap)))))))))));
}));

(datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29478){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29505 = k29478;
var G__29505__$1 = (((G__29505 instanceof cljs.core.Keyword))?G__29505.fqn:null);
switch (G__29505__$1) {
case "fn":
case "args":
case "binding":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29478);

}
}));

(datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29477){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29506 = cljs.core.keyword_identical_QMARK_;
var expr__29507 = k__5456__auto__;
if(cljs.core.truth_((pred__29506.cljs$core$IFn$_invoke$arity$2 ? pred__29506.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29507) : pred__29506.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__29507)))){
return (new datascript.parser.Function(G__29477,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29506.cljs$core$IFn$_invoke$arity$2 ? pred__29506.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__29507) : pred__29506.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29507)))){
return (new datascript.parser.Function(self__.fn,G__29477,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29506.cljs$core$IFn$_invoke$arity$2 ? pred__29506.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"binding","binding",539932593),expr__29507) : pred__29506.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__29507)))){
return (new datascript.parser.Function(self__.fn,self__.args,G__29477,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29477),null));
}
}
}
}));

(datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding,null))], null),self__.__extmap));
}));

(datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29477){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__29477,self__.__extmap,self__.__hash));
}));

(datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29470){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f29470),datascript.parser.postwalk(self__.args,f29470),datascript.parser.postwalk(self__.binding,f29470),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29471,acc29472){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29471,self__.binding,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29471,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29471,self__.fn,acc29472)));
}));

(datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29472){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29512 = (function (){var G__29514 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29472,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc29472,self__.fn));
var G__29515 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29514,G__29515) : datascript.parser.collect_vars_acc.call(null,G__29514,G__29515));
})();
var G__29513 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29512,G__29513) : datascript.parser.collect_vars_acc.call(null,G__29512,G__29513));
}));

(datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
}));

(datascript.parser.Function.cljs$lang$type = true);

(datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Function",null,(1),null));
}));

(datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Function");
}));

/**
 * Positional factory function for datascript.parser/Function.
 */
datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

/**
 * Factory function for datascript.parser/Function, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__29493){
var extmap__5489__auto__ = (function (){var G__29519 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29493,new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], 0));
if(cljs.core.record_QMARK_(G__29493)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29519);
} else {
return G__29519;
}
})();
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__29493),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29493),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__29493),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29524,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29528 = k29524;
var G__29528__$1 = (((G__29528 instanceof cljs.core.Keyword))?G__29528.fqn:null);
switch (G__29528__$1) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29524,else__5450__auto__);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29530){
var vec__29531 = p__29530;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29531,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29531,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29523){
var self__ = this;
var G__29523__$1 = this;
return (new cljs.core.RecordIter((0),G__29523__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-444662011 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29525,other29526){
var self__ = this;
var this29525__$1 = this;
return (((!((other29526 == null)))) && ((((this29525__$1.constructor === other29526.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29525__$1.source,other29526.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29525__$1.name,other29526.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29525__$1.args,other29526.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29525__$1.__extmap,other29526.__extmap)))))))))));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29524){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29538 = k29524;
var G__29538__$1 = (((G__29538 instanceof cljs.core.Keyword))?G__29538.fqn:null);
switch (G__29538__$1) {
case "source":
case "name":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29524);

}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29523){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29539 = cljs.core.keyword_identical_QMARK_;
var expr__29540 = k__5456__auto__;
if(cljs.core.truth_((pred__29539.cljs$core$IFn$_invoke$arity$2 ? pred__29539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__29540) : pred__29539.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29540)))){
return (new datascript.parser.RuleExpr(G__29523,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29539.cljs$core$IFn$_invoke$arity$2 ? pred__29539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__29540) : pred__29539.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29540)))){
return (new datascript.parser.RuleExpr(self__.source,G__29523,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29539.cljs$core$IFn$_invoke$arity$2 ? pred__29539.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__29540) : pred__29539.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__29540)))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__29523,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29523),null));
}
}
}
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29523){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__29523,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29520){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f29520),datascript.parser.postwalk(self__.name,f29520),datascript.parser.postwalk(self__.args,f29520),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29521,acc29522){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29521,self__.args,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29521,self__.name,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29521,self__.source,acc29522)));
}));

(datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29522){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29542 = (function (){var G__29544 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29522,self__.source) : datascript.parser.collect_vars_acc.call(null,acc29522,self__.source));
var G__29545 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29544,G__29545) : datascript.parser.collect_vars_acc.call(null,G__29544,G__29545));
})();
var G__29543 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29542,G__29543) : datascript.parser.collect_vars_acc.call(null,G__29542,G__29543));
}));

(datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(datascript.parser.RuleExpr.cljs$lang$type = true);

(datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleExpr",null,(1),null));
}));

(datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/RuleExpr");
}));

/**
 * Positional factory function for datascript.parser/RuleExpr.
 */
datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleExpr, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__29527){
var extmap__5489__auto__ = (function (){var G__29546 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29527,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__29527)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29546);
} else {
return G__29546;
}
})();
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29527),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29527),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__29527),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29551,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29555 = k29551;
var G__29555__$1 = (((G__29555 instanceof cljs.core.Keyword))?G__29555.fqn:null);
switch (G__29555__$1) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29551,else__5450__auto__);

}
}));

(datascript.parser.Not.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29556){
var vec__29557 = p__29556;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29557,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Not{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29550){
var self__ = this;
var G__29550__$1 = this;
return (new cljs.core.RecordIter((0),G__29550__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1394671061 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29552,other29553){
var self__ = this;
var this29552__$1 = this;
return (((!((other29553 == null)))) && ((((this29552__$1.constructor === other29553.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29552__$1.source,other29553.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29552__$1.vars,other29553.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29552__$1.clauses,other29553.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29552__$1.__extmap,other29553.__extmap)))))))))));
}));

(datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29551){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29560 = k29551;
var G__29560__$1 = (((G__29560 instanceof cljs.core.Keyword))?G__29560.fqn:null);
switch (G__29560__$1) {
case "source":
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29551);

}
}));

(datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29550){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29561 = cljs.core.keyword_identical_QMARK_;
var expr__29562 = k__5456__auto__;
if(cljs.core.truth_((pred__29561.cljs$core$IFn$_invoke$arity$2 ? pred__29561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__29562) : pred__29561.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29562)))){
return (new datascript.parser.Not(G__29550,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29561.cljs$core$IFn$_invoke$arity$2 ? pred__29561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29562) : pred__29561.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29562)))){
return (new datascript.parser.Not(self__.source,G__29550,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29561.cljs$core$IFn$_invoke$arity$2 ? pred__29561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29562) : pred__29561.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29562)))){
return (new datascript.parser.Not(self__.source,self__.vars,G__29550,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29550),null));
}
}
}
}));

(datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29550){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__29550,self__.__extmap,self__.__hash));
}));

(datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29547){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f29547),datascript.parser.postwalk(self__.vars,f29547),datascript.parser.postwalk(self__.clauses,f29547),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29548,acc29549){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29548,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29548,self__.vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29548,self__.source,acc29549)));
}));

(datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29549){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29564 = (function (){var G__29566 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29549,self__.source) : datascript.parser.collect_vars_acc.call(null,acc29549,self__.source));
var G__29567 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29566,G__29567) : datascript.parser.collect_vars_acc.call(null,G__29566,G__29567));
})();
var G__29565 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29564,G__29565) : datascript.parser.collect_vars_acc.call(null,G__29564,G__29565));
}));

(datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Not.cljs$lang$type = true);

(datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Not",null,(1),null));
}));

(datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Not");
}));

/**
 * Positional factory function for datascript.parser/Not.
 */
datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Not, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__29554){
var extmap__5489__auto__ = (function (){var G__29568 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29554,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__29554)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29568);
} else {
return G__29568;
}
})();
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29554),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__29554),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29554),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29573,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29577 = k29573;
var G__29577__$1 = (((G__29577 instanceof cljs.core.Keyword))?G__29577.fqn:null);
switch (G__29577__$1) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29573,else__5450__auto__);

}
}));

(datascript.parser.Or.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29578){
var vec__29579 = p__29578;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29579,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29579,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Or{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29572){
var self__ = this;
var G__29572__$1 = this;
return (new cljs.core.RecordIter((0),G__29572__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1461934571 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29574,other29575){
var self__ = this;
var this29574__$1 = this;
return (((!((other29575 == null)))) && ((((this29574__$1.constructor === other29575.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29574__$1.source,other29575.source)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29574__$1.rule_vars,other29575.rule_vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29574__$1.clauses,other29575.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29574__$1.__extmap,other29575.__extmap)))))))))));
}));

(datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29573){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29582 = k29573;
var G__29582__$1 = (((G__29582 instanceof cljs.core.Keyword))?G__29582.fqn:null);
switch (G__29582__$1) {
case "source":
case "rule-vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29573);

}
}));

(datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29572){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29583 = cljs.core.keyword_identical_QMARK_;
var expr__29584 = k__5456__auto__;
if(cljs.core.truth_((pred__29583.cljs$core$IFn$_invoke$arity$2 ? pred__29583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"source","source",-433931539),expr__29584) : pred__29583.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__29584)))){
return (new datascript.parser.Or(G__29572,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29583.cljs$core$IFn$_invoke$arity$2 ? pred__29583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__29584) : pred__29583.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__29584)))){
return (new datascript.parser.Or(self__.source,G__29572,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29583.cljs$core$IFn$_invoke$arity$2 ? pred__29583.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29584) : pred__29583.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29584)))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__29572,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29572),null));
}
}
}
}));

(datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"source","source",-433931539),self__.source,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29572){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__29572,self__.__extmap,self__.__hash));
}));

(datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29569){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f29569),datascript.parser.postwalk(self__.rule_vars,f29569),datascript.parser.postwalk(self__.clauses,f29569),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29570,acc29571){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29570,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29570,self__.rule_vars,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29570,self__.source,acc29571)));
}));

(datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29571){
var self__ = this;
var ___26593__auto____$1 = this;
var G__29586 = (function (){var G__29588 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29571,self__.source) : datascript.parser.collect_vars_acc.call(null,acc29571,self__.source));
var G__29589 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29588,G__29589) : datascript.parser.collect_vars_acc.call(null,G__29588,G__29589));
})();
var G__29587 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29586,G__29587) : datascript.parser.collect_vars_acc.call(null,G__29586,G__29587));
}));

(datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.Or.cljs$lang$type = true);

(datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Or",null,(1),null));
}));

(datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Or");
}));

/**
 * Positional factory function for datascript.parser/Or.
 */
datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/Or, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__29576){
var extmap__5489__auto__ = (function (){var G__29590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29576,new cljs.core.Keyword(null,"source","source",-433931539),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__29576)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29590);
} else {
return G__29590;
}
})();
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__29576),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__29576),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29576),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29595,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29599 = k29595;
var G__29599__$1 = (((G__29599 instanceof cljs.core.Keyword))?G__29599.fqn:null);
switch (G__29599__$1) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29595,else__5450__auto__);

}
}));

(datascript.parser.And.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29600){
var vec__29601 = p__29600;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29601,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29601,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.And{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29594){
var self__ = this;
var G__29594__$1 = this;
return (new cljs.core.RecordIter((0),G__29594__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-131856804 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29596,other29597){
var self__ = this;
var this29596__$1 = this;
return (((!((other29597 == null)))) && ((((this29596__$1.constructor === other29597.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29596__$1.clauses,other29597.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29596__$1.__extmap,other29597.__extmap)))))));
}));

(datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29595){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29604 = k29595;
var G__29604__$1 = (((G__29604 instanceof cljs.core.Keyword))?G__29604.fqn:null);
switch (G__29604__$1) {
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29595);

}
}));

(datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29594){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29605 = cljs.core.keyword_identical_QMARK_;
var expr__29606 = k__5456__auto__;
if(cljs.core.truth_((pred__29605.cljs$core$IFn$_invoke$arity$2 ? pred__29605.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29606) : pred__29605.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29606)))){
return (new datascript.parser.And(G__29594,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29594),null));
}
}));

(datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29594){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__29594,self__.__extmap,self__.__hash));
}));

(datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29591){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f29591),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29592,acc29593){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29592,self__.clauses,acc29593);
}));

(datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29593){
var self__ = this;
var ___26593__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc29593,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc29593,self__.clauses));
}));

(datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.And.cljs$lang$type = true);

(datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/And",null,(1),null));
}));

(datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/And");
}));

/**
 * Positional factory function for datascript.parser/And.
 */
datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/And, taking a map of keywords to field values.
 */
datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__29598){
var extmap__5489__auto__ = (function (){var G__29608 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29598,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
if(cljs.core.record_QMARK_(G__29598)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29608);
} else {
return G__29608;
}
})();
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29598),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__5141__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__5823__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__5823__auto__)){
var source_STAR_ = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29609 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29609,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29609,(1),null);
var temp__5825__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__5825__auto____$1)){
var pattern_STAR_ = temp__5825__auto____$1;
if((!(cljs.core.empty_QMARK_(pattern_STAR_)))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Pattern could not be empty"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__29612 = form;
var seq__29613 = cljs.core.seq(vec__29612);
var first__29614 = cljs.core.first(seq__29613);
var seq__29613__$1 = cljs.core.next(seq__29613);
var fn = first__29614;
var args = seq__29613__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__5141__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__5139__auto__ = fn_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
return args_STAR_;
} else {
return and__5139__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(datascript.parser.of_size_QMARK_(form,(1))){
var temp__5825__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29615 = temp__5825__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29615,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29615,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(datascript.parser.of_size_QMARK_(form,(2))){
var vec__29618 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29618,(1),null);
var temp__5825__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29621 = temp__5825__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29621,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29621,(1),null);
var temp__5825__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__5825__auto____$1)){
var binding_STAR_ = temp__5825__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29624 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29624,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29624,(1),null);
var vec__29627 = next_form;
var seq__29628 = cljs.core.seq(vec__29627);
var first__29629 = cljs.core.first(seq__29628);
var seq__29628__$1 = cljs.core.next(seq__29628);
var name = first__29629;
var args = seq__29628__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"rule-expr requires at least one argument"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,form.vars);
} else {
if((form instanceof datascript.parser.Or)){
var G__29630 = acc;
var G__29631 = form.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__29630,G__29631) : datascript.parser.collect_vars_acc.call(null,G__29630,G__29631));
} else {
if((((!((form == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$))))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(required,free,form){
if(((cljs.core.empty_QMARK_(required)) && (cljs.core.empty_QMARK_(free)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Join variables should not be empty"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29633 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29633,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29633,(1),null);
var vec__29636 = next_form;
var seq__29637 = cljs.core.seq(vec__29636);
var first__29638 = cljs.core.first(seq__29637);
var seq__29637__$1 = cljs.core.next(seq__29637);
var sym = first__29638;
var clauses = seq__29637__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__5823__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__5823__auto__)){
var clauses_STAR_ = temp__5823__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29639 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29639,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29639,(1),null);
var vec__29642 = next_form;
var seq__29643 = cljs.core.seq(vec__29642);
var first__29644 = cljs.core.first(seq__29643);
var seq__29643__$1 = cljs.core.next(seq__29643);
var sym = first__29644;
var first__29644__$1 = cljs.core.first(seq__29643__$1);
var seq__29643__$2 = cljs.core.next(seq__29643__$1);
var vars = first__29644__$1;
var clauses = seq__29643__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__5139__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
return clauses_STAR_;
} else {
return and__5139__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__29645 = clause;
var map__29645__$1 = cljs.core.__destructure_map(map__29645);
var map__29646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29645__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__29646__$1 = cljs.core.__destructure_map(map__29646);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29646__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29646__$1,new cljs.core.Keyword(null,"free","free",801364328));
datascript.parser.validate_join_vars(required,free,form);

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if(((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first(form))))){
var clauses_STAR_ = (function (){var G__29647 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__29647) : datascript.parser.parse_clauses.call(null,G__29647));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse 'and' clause, expected [ 'and' clause+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29648 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29648,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29648,(1),null);
var vec__29651 = next_form;
var seq__29652 = cljs.core.seq(vec__29651);
var first__29653 = cljs.core.first(seq__29652);
var seq__29652__$1 = cljs.core.next(seq__29652);
var sym = first__29653;
var clauses = seq__29652__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__5823__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__5823__auto__)){
var clauses_STAR_ = temp__5823__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__5825__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__29654 = temp__5825__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29654,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29654,(1),null);
var vec__29657 = next_form;
var seq__29658 = cljs.core.seq(vec__29657);
var first__29659 = cljs.core.first(seq__29658);
var seq__29658__$1 = cljs.core.next(seq__29658);
var sym = first__29659;
var first__29659__$1 = cljs.core.first(seq__29658__$1);
var seq__29658__$2 = cljs.core.next(seq__29658__$1);
var vars = first__29659__$1;
var clauses = seq__29658__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__5139__auto__ = vars_STAR_;
if(cljs.core.truth_(and__5139__auto__)){
return clauses_STAR_;
} else {
return and__5139__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__5141__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
var or__5141__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__5141__auto____$3)){
return or__5141__auto____$3;
} else {
var or__5141__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__5141__auto____$4)){
return or__5141__auto____$4;
} else {
var or__5141__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__5141__auto____$5)){
return or__5141__auto____$5;
} else {
var or__5141__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__5141__auto____$6)){
return or__5141__auto____$6;
} else {
var or__5141__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__5141__auto____$7)){
return or__5141__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__5141__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse :where clause, expected [clause+]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29665,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29669 = k29665;
var G__29669__$1 = (((G__29669 instanceof cljs.core.Keyword))?G__29669.fqn:null);
switch (G__29669__$1) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29665,else__5450__auto__);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29670){
var vec__29671 = p__29670;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29671,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29664){
var self__ = this;
var G__29664__$1 = this;
return (new cljs.core.RecordIter((0),G__29664__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1024755006 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29666,other29667){
var self__ = this;
var this29666__$1 = this;
return (((!((other29667 == null)))) && ((((this29666__$1.constructor === other29667.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29666__$1.vars,other29667.vars)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29666__$1.clauses,other29667.clauses)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29666__$1.__extmap,other29667.__extmap)))))))));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29665){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29674 = k29665;
var G__29674__$1 = (((G__29674 instanceof cljs.core.Keyword))?G__29674.fqn:null);
switch (G__29674__$1) {
case "vars":
case "clauses":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29665);

}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29664){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29675 = cljs.core.keyword_identical_QMARK_;
var expr__29676 = k__5456__auto__;
if(cljs.core.truth_((pred__29675.cljs$core$IFn$_invoke$arity$2 ? pred__29675.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29676) : pred__29675.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__29676)))){
return (new datascript.parser.RuleBranch(G__29664,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29675.cljs$core$IFn$_invoke$arity$2 ? pred__29675.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29676) : pred__29675.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__29676)))){
return (new datascript.parser.RuleBranch(self__.vars,G__29664,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29664),null));
}
}
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses,null))], null),self__.__extmap));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29664){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__29664,self__.__extmap,self__.__hash));
}));

(datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29661){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f29661),datascript.parser.postwalk(self__.clauses,f29661),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29662,acc29663){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29662,self__.clauses,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29662,self__.vars,acc29663));
}));

(datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29663){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc29663,self__.vars),self__.clauses);
}));

(datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
}));

(datascript.parser.RuleBranch.cljs$lang$type = true);

(datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/RuleBranch",null,(1),null));
}));

(datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/RuleBranch");
}));

/**
 * Positional factory function for datascript.parser/RuleBranch.
 */
datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

/**
 * Factory function for datascript.parser/RuleBranch, taking a map of keywords to field values.
 */
datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__29668){
var extmap__5489__auto__ = (function (){var G__29678 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29668,new cljs.core.Keyword(null,"vars","vars",-2046957217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clauses","clauses",1454841241)], 0));
if(cljs.core.record_QMARK_(G__29668)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29678);
} else {
return G__29678;
}
})();
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__29668),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__29668),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29683,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29687 = k29683;
var G__29687__$1 = (((G__29687 instanceof cljs.core.Keyword))?G__29687.fqn:null);
switch (G__29687__$1) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29683,else__5450__auto__);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29688){
var vec__29689 = p__29688;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29689,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29689,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Rule{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29682){
var self__ = this;
var G__29682__$1 = this;
return (new cljs.core.RecordIter((0),G__29682__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (-900273052 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29684,other29685){
var self__ = this;
var this29684__$1 = this;
return (((!((other29685 == null)))) && ((((this29684__$1.constructor === other29685.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29684__$1.name,other29685.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29684__$1.branches,other29685.branches)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29684__$1.__extmap,other29685.__extmap)))))))));
}));

(datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29683){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29692 = k29683;
var G__29692__$1 = (((G__29692 instanceof cljs.core.Keyword))?G__29692.fqn:null);
switch (G__29692__$1) {
case "name":
case "branches":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29683);

}
}));

(datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29682){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29693 = cljs.core.keyword_identical_QMARK_;
var expr__29694 = k__5456__auto__;
if(cljs.core.truth_((pred__29693.cljs$core$IFn$_invoke$arity$2 ? pred__29693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),expr__29694) : pred__29693.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__29694)))){
return (new datascript.parser.Rule(G__29682,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29693.cljs$core$IFn$_invoke$arity$2 ? pred__29693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__29694) : pred__29693.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__29694)))){
return (new datascript.parser.Rule(self__.name,G__29682,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29682),null));
}
}
}));

(datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches,null))], null),self__.__extmap));
}));

(datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29682){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__29682,self__.__extmap,self__.__hash));
}));

(datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29679){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f29679),datascript.parser.postwalk(self__.branches,f29679),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29680,acc29681){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29680,self__.branches,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29680,self__.name,acc29681));
}));

(datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29681){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc29681,self__.name),self__.branches);
}));

(datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
}));

(datascript.parser.Rule.cljs$lang$type = true);

(datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Rule",null,(1),null));
}));

(datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Rule");
}));

/**
 * Positional factory function for datascript.parser/Rule.
 */
datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

/**
 * Factory function for datascript.parser/Rule, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__29686){
var extmap__5489__auto__ = (function (){var G__29696 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29686,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"branches","branches",-1240337268)], 0));
if(cljs.core.record_QMARK_(G__29686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29696);
} else {
return G__29696;
}
})();
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__29686),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__29686),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__29697 = form;
var seq__29698 = cljs.core.seq(vec__29697);
var first__29699 = cljs.core.first(seq__29698);
var seq__29698__$1 = cljs.core.next(seq__29698);
var head = first__29699;
var clauses = seq__29698__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__29700 = head;
var seq__29701 = cljs.core.seq(vec__29700);
var first__29702 = cljs.core.first(seq__29701);
var seq__29701__$1 = cljs.core.next(seq__29701);
var name = first__29702;
var vars = seq__29701__$1;
var name_STAR_ = (function (){var or__5141__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule name, expected plain-symbol"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__5141__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Rule branch should have clauses"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule head, expected [rule-name rule-vars], got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot parse rule, expected [rule-head clause+]"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__29703 = cljs.core.seq(cljs.core.next(branches));
var chunk__29705 = null;
var count__29706 = (0);
var i__29707 = (0);
while(true){
if((i__29707 < count__29706)){
var b = chunk__29705.cljs$core$IIndexed$_nth$arity$2(null,i__29707);
var vars_30093 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_30093))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Arity mismatch for rule '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)))+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0)))+" vs. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_30093)], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__30094 = seq__29703;
var G__30095 = chunk__29705;
var G__30096 = count__29706;
var G__30097 = (i__29707 + (1));
seq__29703 = G__30094;
chunk__29705 = G__30095;
count__29706 = G__30096;
i__29707 = G__30097;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29703);
if(temp__5825__auto__){
var seq__29703__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29703__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__29703__$1);
var G__30098 = cljs.core.chunk_rest(seq__29703__$1);
var G__30099 = c__5672__auto__;
var G__30100 = cljs.core.count(c__5672__auto__);
var G__30101 = (0);
seq__29703 = G__30098;
chunk__29705 = G__30099;
count__29706 = G__30100;
i__29707 = G__30101;
continue;
} else {
var b = cljs.core.first(seq__29703__$1);
var vars_30102 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_30102))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Arity mismatch for rule '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name)], 0)))+"': "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars0)], 0)))+" vs. "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.flatten_rule_vars(vars_30102)], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}


var G__30103 = cljs.core.next(seq__29703__$1);
var G__30104 = null;
var G__30105 = (0);
var G__30106 = (0);
seq__29703 = G__30103;
chunk__29705 = G__30104;
count__29706 = G__30105;
i__29707 = G__30106;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__5627__auto__ = (function datascript$parser$parse_rules_$_iter__29710(s__29711){
return (new cljs.core.LazySeq(null,(function (){
var s__29711__$1 = s__29711;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29711__$1);
if(temp__5825__auto__){
var s__29711__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29711__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__29711__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__29713 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__29712 = (0);
while(true){
if((i__29712 < size__5626__auto__)){
var vec__29714 = cljs.core._nth(c__5625__auto__,i__29712);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29714,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29714,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__29712,vec__29714,name,branches,c__5625__auto__,size__5626__auto__,b__29713,s__29711__$2,temp__5825__auto__){
return (function (p1__29709_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__29709_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__29709_SHARP_),null,null,null));
});})(i__29712,vec__29714,name,branches,c__5625__auto__,size__5626__auto__,b__29713,s__29711__$2,temp__5825__auto__))
,branches);
cljs.core.chunk_append(b__29713,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__30107 = (i__29712 + (1));
i__29712 = G__30107;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29713),datascript$parser$parse_rules_$_iter__29710(cljs.core.chunk_rest(s__29711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29713),null);
}
} else {
var vec__29717 = cljs.core.first(s__29711__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29717,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__29717,name,branches,s__29711__$2,temp__5825__auto__){
return (function (p1__29709_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__29709_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__29709_SHARP_),null,null,null));
});})(vec__29717,name,branches,s__29711__$2,temp__5825__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__29710(cljs.core.rest(s__29711__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (qfind,qwith,qreturn_map,qin,qwhere,__meta,__extmap,__hash){
this.qfind = qfind;
this.qwith = qwith;
this.qreturn_map = qreturn_map;
this.qin = qin;
this.qwhere = qwhere;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29724,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29728 = k29724;
var G__29728__$1 = (((G__29728 instanceof cljs.core.Keyword))?G__29728.fqn:null);
switch (G__29728__$1) {
case "qfind":
return self__.qfind;

break;
case "qwith":
return self__.qwith;

break;
case "qreturn-map":
return self__.qreturn_map;

break;
case "qin":
return self__.qin;

break;
case "qwhere":
return self__.qwhere;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29724,else__5450__auto__);

}
}));

(datascript.parser.Query.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29729){
var vec__29730 = p__29729;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29730,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29730,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.parser.Query{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere],null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29723){
var self__ = this;
var G__29723__$1 = this;
return (new cljs.core.RecordIter((0),G__29723__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (181307977 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29725,other29726){
var self__ = this;
var this29725__$1 = this;
return (((!((other29726 == null)))) && ((((this29725__$1.constructor === other29726.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.qfind,other29726.qfind)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.qwith,other29726.qwith)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.qreturn_map,other29726.qreturn_map)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.qin,other29726.qin)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.qwhere,other29726.qwhere)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29725__$1.__extmap,other29726.__extmap)))))))))))))));
}));

(datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),null,new cljs.core.Keyword(null,"qin","qin",1372651151),null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29724){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29733 = k29724;
var G__29733__$1 = (((G__29733 instanceof cljs.core.Keyword))?G__29733.fqn:null);
switch (G__29733__$1) {
case "qfind":
case "qwith":
case "qreturn-map":
case "qin":
case "qwhere":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29724);

}
}));

(datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29723){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29734 = cljs.core.keyword_identical_QMARK_;
var expr__29735 = k__5456__auto__;
if(cljs.core.truth_((pred__29734.cljs$core$IFn$_invoke$arity$2 ? pred__29734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__29735) : pred__29734.call(null,new cljs.core.Keyword(null,"qfind","qfind",1529332972),expr__29735)))){
return (new datascript.parser.Query(G__29723,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29734.cljs$core$IFn$_invoke$arity$2 ? pred__29734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__29735) : pred__29734.call(null,new cljs.core.Keyword(null,"qwith","qwith",-45809392),expr__29735)))){
return (new datascript.parser.Query(self__.qfind,G__29723,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29734.cljs$core$IFn$_invoke$arity$2 ? pred__29734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__29735) : pred__29734.call(null,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),expr__29735)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,G__29723,self__.qin,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29734.cljs$core$IFn$_invoke$arity$2 ? pred__29734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qin","qin",1372651151),expr__29735) : pred__29734.call(null,new cljs.core.Keyword(null,"qin","qin",1372651151),expr__29735)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,G__29723,self__.qwhere,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29734.cljs$core$IFn$_invoke$arity$2 ? pred__29734.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__29735) : pred__29734.call(null,new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),expr__29735)))){
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,G__29723,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29723),null));
}
}
}
}
}
}));

(datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qfind","qfind",1529332972),self__.qfind,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwith","qwith",-45809392),self__.qwith,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),self__.qreturn_map,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qin","qin",1372651151),self__.qin,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),self__.qwhere,null))], null),self__.__extmap));
}));

(datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29723){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.parser.Query(self__.qfind,self__.qwith,self__.qreturn_map,self__.qin,self__.qwhere,G__29723,self__.__extmap,self__.__hash));
}));

(datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__26590__auto__,f29720){
var self__ = this;
var this__26590__auto____$1 = this;
var new__26591__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.qfind,f29720),datascript.parser.postwalk(self__.qwith,f29720),datascript.parser.postwalk(self__.qreturn_map,f29720),datascript.parser.postwalk(self__.qin,f29720),datascript.parser.postwalk(self__.qwhere,f29720),null,null,null));
var temp__5823__auto__ = cljs.core.meta(this__26590__auto____$1);
if(cljs.core.truth_(temp__5823__auto__)){
var meta__26592__auto__ = temp__5823__auto__;
return cljs.core.with_meta(new__26591__auto__,meta__26592__auto__);
} else {
return new__26591__auto__;
}
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___26593__auto__,pred29721,acc29722){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29721,self__.qwhere,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29721,self__.qin,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29721,self__.qreturn_map,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29721,self__.qwith,datascript.parser.collect.cljs$core$IFn$_invoke$arity$3(pred29721,self__.qfind,acc29722)))));
}));

(datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___26593__auto__,acc29722){
var self__ = this;
var ___26593__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc29722,self__.qfind),self__.qwith),self__.qreturn_map),self__.qin),self__.qwhere);
}));

(datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"qfind","qfind",-1125102797,null),new cljs.core.Symbol(null,"qwith","qwith",1594722135,null),new cljs.core.Symbol(null,"qreturn-map","qreturn-map",-813219775,null),new cljs.core.Symbol(null,"qin","qin",-1281784618,null),new cljs.core.Symbol(null,"qwhere","qwhere",-4535851,null)], null);
}));

(datascript.parser.Query.cljs$lang$type = true);

(datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.parser/Query",null,(1),null));
}));

(datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.parser/Query");
}));

/**
 * Positional factory function for datascript.parser/Query.
 */
datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(qfind,qwith,qreturn_map,qin,qwhere){
return (new datascript.parser.Query(qfind,qwith,qreturn_map,qin,qwhere,null,null,null));
});

/**
 * Factory function for datascript.parser/Query, taking a map of keywords to field values.
 */
datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__29727){
var extmap__5489__auto__ = (function (){var G__29737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29727,new cljs.core.Keyword(null,"qfind","qfind",1529332972),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"qwith","qwith",-45809392),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),new cljs.core.Keyword(null,"qin","qin",1372651151),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378)], 0));
if(cljs.core.record_QMARK_(G__29727)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29737);
} else {
return G__29737;
}
})();
return (new datascript.parser.Query(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(G__29727),new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(G__29727),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(G__29727),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(G__29727),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(G__29727),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__5823__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__5823__auto__)){
var q = temp__5823__auto__;
if((q instanceof cljs.core.Keyword)){
var G__30127 = parsed;
var G__30128 = q;
var G__30129 = cljs.core.next(qs);
parsed = G__30127;
key = G__30128;
qs = G__30129;
continue;
} else {
var G__30130 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__30131 = key;
var G__30132 = cljs.core.next(qs);
parsed = G__30130;
key = G__30131;
qs = G__30132;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.explicit_input = (function datascript$parser$explicit_input(parsed){
var source = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(parsed);
if((parsed instanceof datascript.parser.Pattern)){
return source;
} else {
if((!((source == null)))){
if((!((source instanceof datascript.parser.DefaultSrc)))){
return source;
} else {
return null;
}
} else {
return null;
}
}
});
datascript.parser.default_in = (function datascript$parser$default_in(qwhere){
if((!(cljs.core.empty_QMARK_(datascript.parser.collect.cljs$core$IFn$_invoke$arity$2(datascript.parser.explicit_input,qwhere))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form,form_map){
var find_vars_30133 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_30134 = cljs.core.set(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_30135 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_30136 = cljs.core.set(datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_30137 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_30133,with_vars_30134),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_30136,in_vars_30135));
var shared_30138 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_30133,with_vars_30134);
if(cljs.core.empty_QMARK_(unknown_30137)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Query for unknown vars: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_30137)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_30137,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_(shared_30138)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+":find and :with should not use same variables: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_30138)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_30138,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var temp__5829__auto___30139 = new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q);
if((temp__5829__auto___30139 == null)){
} else {
var return_map_30140 = temp__5829__auto___30139;
if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindScalar)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_30140)], 0)))+" does not work with single-scalar :find"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if((new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q) instanceof datascript.parser.FindColl)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(return_map_30140)], 0)))+" does not work with collection :find"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}
}

var temp__5829__auto___30141 = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q));
if((temp__5829__auto___30141 == null)){
} else {
var return_symbols_30142 = temp__5829__auto___30141;
var find_elements_30143 = datascript.parser.find_elements(new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(return_symbols_30142),cljs.core.count(find_elements_30143))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Count of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q))], 0)))+" must match count of :find"),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"return-map","return-map",1620104901),cljs.core.cons(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(q)),return_symbols_30142),new cljs.core.Keyword(null,"find","find",496279456),find_elements_30143,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}

if(((1) < cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(form_map),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(form_map)], null))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Only one of :keys/:syms/:strs must be present"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

var in_vars_30144 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_30145 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__29738_SHARP_){
return (p1__29738_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_30146 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__29739_SHARP_){
return (p1__29739_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__5139__auto__ = datascript.parser.distinct_QMARK_(in_vars_30144);
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_30145);
if(cljs.core.truth_(and__5139__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_30146);
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Vars used in :in should be distinct"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_30147 = datascript.parser.collect_vars(new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_30147))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Vars used in :with should be distinct"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_30148 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__29740_SHARP_){
return (p1__29740_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_30149 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$3((function (p1__29741_SHARP_){
return (p1__29741_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_30150 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_30149,in_sources_30148);
if(cljs.core.empty_QMARK_(unknown_30150)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Where uses unknown source vars: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_30150)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_30150,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__29742_SHARP_){
return (p1__29742_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$2((function (p1__29743_SHARP_){
return (p1__29743_SHARP_ instanceof datascript.parser.RulesVar);
}),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(q));
if((((!(cljs.core.empty_QMARK_(rule_exprs)))) && (cljs.core.empty_QMARK_(rules_vars)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Missing rules var '%' in :in"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Query should be a vector or a map"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var qwhere = datascript.parser.parse_where(new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"qfind","qfind",1529332972),datascript.parser.parse_find(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"qwith","qwith",-45809392),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__5825__auto__)){
var with$ = temp__5825__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994),(function (){var or__5141__auto__ = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"keys","keys",1068423698).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.parser.parse_return_map(new cljs.core.Keyword(null,"syms","syms",-1575891762),new cljs.core.Keyword(null,"syms","syms",-1575891762).cljs$core$IFn$_invoke$arity$1(qm));
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
return datascript.parser.parse_return_map(new cljs.core.Keyword(null,"strs","strs",1175537277),new cljs.core.Keyword(null,"strs","strs",1175537277).cljs$core$IFn$_invoke$arity$1(qm));
}
}
})(),new cljs.core.Keyword(null,"qin","qin",1372651151),datascript.parser.parse_in((function (){var or__5141__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return datascript.parser.default_in(qwhere);
}
})()),new cljs.core.Keyword(null,"qwhere","qwhere",-1645067378),qwhere], null));
datascript.parser.validate_query(res,q,qm);

return res;
});

//# sourceMappingURL=datascript.parser.js.map
