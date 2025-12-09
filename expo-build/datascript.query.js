goog.provide('datascript.query');
datascript.query._STAR_query_cache_STAR_ = datascript.lru.cache((100));




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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29747,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29753 = k29747;
var G__29753__$1 = (((G__29753 instanceof cljs.core.Keyword))?G__29753.fqn:null);
switch (G__29753__$1) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29747,else__5450__auto__);

}
}));

(datascript.query.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29754){
var vec__29755 = p__29754;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29755,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29755,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.query.Context{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29746){
var self__ = this;
var G__29746__$1 = this;
return (new cljs.core.RecordIter((0),G__29746__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1014232958 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29748,other29749){
var self__ = this;
var this29748__$1 = this;
return (((!((other29749 == null)))) && ((((this29748__$1.constructor === other29749.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29748__$1.rels,other29749.rels)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29748__$1.sources,other29749.sources)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29748__$1.rules,other29749.rules)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29748__$1.__extmap,other29749.__extmap)))))))))));
}));

(datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29747){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29760 = k29747;
var G__29760__$1 = (((G__29760 instanceof cljs.core.Keyword))?G__29760.fqn:null);
switch (G__29760__$1) {
case "rels":
case "sources":
case "rules":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29747);

}
}));

(datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29746){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29761 = cljs.core.keyword_identical_QMARK_;
var expr__29762 = k__5456__auto__;
if(cljs.core.truth_((pred__29761.cljs$core$IFn$_invoke$arity$2 ? pred__29761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rels","rels",1770187185),expr__29762) : pred__29761.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__29762)))){
return (new datascript.query.Context(G__29746,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29761.cljs$core$IFn$_invoke$arity$2 ? pred__29761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424),expr__29762) : pred__29761.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__29762)))){
return (new datascript.query.Context(self__.rels,G__29746,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29761.cljs$core$IFn$_invoke$arity$2 ? pred__29761.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366),expr__29762) : pred__29761.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__29762)))){
return (new datascript.query.Context(self__.rels,self__.sources,G__29746,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29746),null));
}
}
}
}));

(datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules,null))], null),self__.__extmap));
}));

(datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29746){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__29746,self__.__extmap,self__.__hash));
}));

(datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rels","rels",-884248584,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"rules","rules",-1455523403,null)], null);
}));

(datascript.query.Context.cljs$lang$type = true);

(datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.query/Context",null,(1),null));
}));

(datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.query/Context");
}));

/**
 * Positional factory function for datascript.query/Context.
 */
datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

/**
 * Factory function for datascript.query/Context, taking a map of keywords to field values.
 */
datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__29751){
var extmap__5489__auto__ = (function (){var G__29765 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29751,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366)], 0));
if(cljs.core.record_QMARK_(G__29751)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29765);
} else {
return G__29765;
}
})();
return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__29751),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__29751),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__29751),null,cljs.core.not_empty(extmap__5489__auto__),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29768,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29772 = k29768;
var G__29772__$1 = (((G__29772 instanceof cljs.core.Keyword))?G__29772.fqn:null);
switch (G__29772__$1) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29768,else__5450__auto__);

}
}));

(datascript.query.Relation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29774){
var vec__29775 = p__29774;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29775,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.query.Relation{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29767){
var self__ = this;
var G__29767__$1 = this;
return (new cljs.core.RecordIter((0),G__29767__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1107093117 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29769,other29770){
var self__ = this;
var this29769__$1 = this;
return (((!((other29770 == null)))) && ((((this29769__$1.constructor === other29770.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29769__$1.attrs,other29770.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29769__$1.tuples,other29770.tuples)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29769__$1.__extmap,other29770.__extmap)))))))));
}));

(datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29768){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29780 = k29768;
var G__29780__$1 = (((G__29780 instanceof cljs.core.Keyword))?G__29780.fqn:null);
switch (G__29780__$1) {
case "attrs":
case "tuples":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29768);

}
}));

(datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29767){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29781 = cljs.core.keyword_identical_QMARK_;
var expr__29782 = k__5456__auto__;
if(cljs.core.truth_((pred__29781.cljs$core$IFn$_invoke$arity$2 ? pred__29781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29782) : pred__29781.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29782)))){
return (new datascript.query.Relation(G__29767,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29781.cljs$core$IFn$_invoke$arity$2 ? pred__29781.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__29782) : pred__29781.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__29782)))){
return (new datascript.query.Relation(self__.attrs,G__29767,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29767),null));
}
}
}));

(datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples,null))], null),self__.__extmap));
}));

(datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29767){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__29767,self__.__extmap,self__.__hash));
}));

(datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"tuples","tuples",964498888,null)], null);
}));

(datascript.query.Relation.cljs$lang$type = true);

(datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.query/Relation",null,(1),null));
}));

(datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.query/Relation");
}));

/**
 * Positional factory function for datascript.query/Relation.
 */
datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

/**
 * Factory function for datascript.query/Relation, taking a map of keywords to field values.
 */
datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__29771){
var extmap__5489__auto__ = (function (){var G__29785 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29771,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tuples","tuples",-676032639)], 0));
if(cljs.core.record_QMARK_(G__29771)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29785);
} else {
return G__29785;
}
})();
return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__29771),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__29771),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.same_keys_QMARK_ = (function datascript$query$same_keys_QMARK_(a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(a),cljs.core.count(b))) && (((cljs.core.every_QMARK_((function (p1__29786_SHARP_){
return cljs.core.contains_QMARK_(b,p1__29786_SHARP_);
}),cljs.core.keys(a))) && (cljs.core.every_QMARK_((function (p1__29787_SHARP_){
return cljs.core.contains_QMARK_(a,p1__29787_SHARP_);
}),cljs.core.keys(b))))));
});
datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),new cljs.core.Symbol(null,"*","*",345799209,null))){
return ((cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__29790){
var vec__29791 = p__29790;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29791,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29791,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form))));
} else {
return ((cljs.core.sequential_QMARK_(form)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__29794){
var vec__29795 = p__29794;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29795,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form))))));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return (((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym)))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return (((form instanceof cljs.core.Keyword)) || (typeof form === 'string'));
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return ((((cljs.core.sequential_QMARK_(form)) || (me.tonsky.persistent_sorted_set.arrays.array_QMARK_(form)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(form))) && (datascript.query.attr_QMARK_(cljs.core.first(form))))));
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = me.tonsky.persistent_sorted_set.arrays.make_array((l1 + l2));
var n__5740__auto___30172 = l1;
var i_30173 = (0);
while(true){
if((i_30173 < n__5740__auto___30172)){
(res[i_30173] = (t1[(idxs1[i_30173])]));

var G__30174 = (i_30173 + (1));
i_30173 = G__30174;
continue;
} else {
}
break;
}

var n__5740__auto___30175 = l2;
var i_30176 = (0);
while(true){
if((i_30176 < n__5740__auto___30175)){
(res[(l1 + i_30176)] = (t2[(idxs2[i_30176])]));

var G__30177 = (i_30176 + (1));
i_30176 = G__30177;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel_STAR_ = (function datascript$query$sum_rel_STAR_(attrs_a,tuples_a,attrs_b,tuples_b){
var idxb__GT_idxa = cljs.core.vec((function (){var iter__5627__auto__ = (function datascript$query$sum_rel_STAR__$_iter__29800(s__29801){
return (new cljs.core.LazySeq(null,(function (){
var s__29801__$1 = s__29801;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29801__$1);
if(temp__5825__auto__){
var s__29801__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29801__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__29801__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__29803 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__29802 = (0);
while(true){
if((i__29802 < size__5626__auto__)){
var vec__29805 = cljs.core._nth(c__5625__auto__,i__29802);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29805,(1),null);
cljs.core.chunk_append(b__29803,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null));

var G__30178 = (i__29802 + (1));
i__29802 = G__30178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29803),datascript$query$sum_rel_STAR__$_iter__29800(cljs.core.chunk_rest(s__29801__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29803),null);
}
} else {
var vec__29808 = cljs.core.first(s__29801__$2);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29808,(0),null);
var idx_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29808,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx_b,(attrs_a.cljs$core$IFn$_invoke$arity$1 ? attrs_a.cljs$core$IFn$_invoke$arity$1(sym) : attrs_a.call(null,sym))], null),datascript$query$sum_rel_STAR__$_iter__29800(cljs.core.rest(s__29801__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(attrs_b);
})());
var tlen = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.vals(attrs_a)) + (1));
var tuples_SINGLEQUOTE_ = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,tuple_b){
var tuple_SINGLEQUOTE_ = me.tonsky.persistent_sorted_set.arrays.make_array(tlen);
var seq__29811_30179 = cljs.core.seq(idxb__GT_idxa);
var chunk__29812_30180 = null;
var count__29813_30181 = (0);
var i__29814_30182 = (0);
while(true){
if((i__29814_30182 < count__29813_30181)){
var vec__29821_30183 = chunk__29812_30180.cljs$core$IIndexed$_nth$arity$2(null,i__29814_30182);
var idx_b_30184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821_30183,(0),null);
var idx_a_30185 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29821_30183,(1),null);
(tuple_SINGLEQUOTE_[idx_a_30185] = (tuple_b[idx_b_30184]));


var G__30188 = seq__29811_30179;
var G__30189 = chunk__29812_30180;
var G__30190 = count__29813_30181;
var G__30191 = (i__29814_30182 + (1));
seq__29811_30179 = G__30188;
chunk__29812_30180 = G__30189;
count__29813_30181 = G__30190;
i__29814_30182 = G__30191;
continue;
} else {
var temp__5825__auto___30192 = cljs.core.seq(seq__29811_30179);
if(temp__5825__auto___30192){
var seq__29811_30193__$1 = temp__5825__auto___30192;
if(cljs.core.chunked_seq_QMARK_(seq__29811_30193__$1)){
var c__5672__auto___30194 = cljs.core.chunk_first(seq__29811_30193__$1);
var G__30195 = cljs.core.chunk_rest(seq__29811_30193__$1);
var G__30196 = c__5672__auto___30194;
var G__30197 = cljs.core.count(c__5672__auto___30194);
var G__30198 = (0);
seq__29811_30179 = G__30195;
chunk__29812_30180 = G__30196;
count__29813_30181 = G__30197;
i__29814_30182 = G__30198;
continue;
} else {
var vec__29825_30199 = cljs.core.first(seq__29811_30193__$1);
var idx_b_30200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825_30199,(0),null);
var idx_a_30201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29825_30199,(1),null);
(tuple_SINGLEQUOTE_[idx_a_30201] = (tuple_b[idx_b_30200]));


var G__30202 = cljs.core.next(seq__29811_30193__$1);
var G__30203 = null;
var G__30204 = (0);
var G__30205 = (0);
seq__29811_30179 = G__30202;
chunk__29812_30180 = G__30203;
count__29813_30181 = G__30204;
i__29814_30182 = G__30205;
continue;
}
} else {
}
}
break;
}

return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,tuple_SINGLEQUOTE_);
}),cljs.core.transient$(cljs.core.vec(tuples_a)),tuples_b));
return (new datascript.query.Relation(attrs_a,tuples_SINGLEQUOTE_,null,null,null));
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
var map__29828 = a;
var map__29828__$1 = cljs.core.__destructure_map(map__29828);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29828__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29828__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__29829 = b;
var map__29829__$1 = cljs.core.__destructure_map(map__29829);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29829__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29829__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs_a,attrs_b)){
return (new datascript.query.Relation(attrs_a,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(tuples_a),tuples_b),null,null,null));
} else {
if(cljs.core.empty_QMARK_(tuples_a)){
return b;
} else {
if(cljs.core.empty_QMARK_(tuples_b)){
return a;
} else {
if((!(datascript.query.same_keys_QMARK_(attrs_a,attrs_b)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Can\u2019t sum relations with different attrs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_a], 0)))+" and "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs_b], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429)], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,cljs.core.vals(attrs_a))){
return datascript.query.sum_rel_STAR_(attrs_a,tuples_a,attrs_b,tuples_b);
} else {
var number_attrs = cljs.core.zipmap(cljs.core.keys(attrs_a),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var G__29831 = datascript.query.sum_rel_STAR_(number_attrs,cljs.core.PersistentVector.EMPTY,attrs_a,tuples_a);
var G__29832 = b;
return (datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2 ? datascript.query.sum_rel.cljs$core$IFn$_invoke$arity$2(G__29831,G__29832) : datascript.query.sum_rel.call(null,G__29831,G__29832));

}
}
}
}
}
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var G__29834 = arguments.length;
switch (G__29834) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array((0))], null),null,null,null));
}));

(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
}),acc,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2));
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
}));

(datascript.query.prod_rel.cljs$lang$maxFixedArity = 2);

datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(rules):rules);
datascript.parser.parse_rules(rules__$1);

return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

var datascript$query$IBinding$in__GT_rel$dyn_30207 = (function (binding,value){
var x__5497__auto__ = (((binding == null))?null:binding);
var m__5498__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5498__auto__.call(null,binding,value));
} else {
var m__5496__auto__ = (datascript.query.in__GT_rel["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__5496__auto__.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
});
datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((((!((binding == null)))) && ((!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
return datascript$query$IBinding$in__GT_rel$dyn_30207(binding,value);
}
});

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
}));

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
}));

(datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot bind value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))+" to collection "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29838_SHARP_){
return datascript.query.in__GT_rel(binding__$1.binding,p1__29838_SHARP_);
}),coll));

}
}
}));

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if((!(datascript.db.seqable_QMARK_(coll)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Cannot bind value "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))+" to tuple "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(binding__$1.bindings))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Not enough elements in a collection "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll], 0)))+" to bind tuple "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([datascript.parser.source(binding__$1)], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","binding","query/binding",698240489),new cljs.core.Keyword(null,"value","value",305978217),coll,new cljs.core.Keyword(null,"binding","binding",539932593),datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__29839_SHARP_,p2__29840_SHARP_){
return datascript.query.in__GT_rel(p1__29839_SHARP_,p2__29840_SHARP_);
}),binding__$1.bindings,coll));

}
}
}));
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__29843){
var vec__29844 = p__29843;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29844,(1),null);
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null)),value);
} else {
if((((binding instanceof datascript.parser.BindScalar)) && ((new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules(value));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
var cb = cljs.core.count(bindings);
var cv = cljs.core.count(values);
if((cb < cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Extra inputs passed, expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29847_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29847_SHARP_));
}),bindings)], 0)))+", got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
if((cb > cv)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Too few inputs passed, expected: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29848_SHARP_){
return new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__29848_SHARP_));
}),bindings)], 0)))+", got: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cv], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","inputs","query/inputs",1042810394),new cljs.core.Keyword(null,"expected","expected",1583670997),bindings,new cljs.core.Keyword(null,"got","got",-1674745710),values], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));

}
}
});
/**
 * List of symbols in current pattern that might potentiall be resolved to refs
 */
datascript.query._STAR_lookup_attrs_STAR_ = null;
/**
 * Default pattern source. Lookup refs, patterns, rules will be resolved with it
 */
datascript.query._STAR_implicit_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if(cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr)){
if(cljs.core.int_QMARK_(idx)){
var idx__$1 = (idx | (0));
return (function datascript$query$getter_fn_$_contained_int_getter_fn(tuple){
var eid = (tuple[idx__$1]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
} else {
return (function datascript$query$getter_fn_$_contained_getter_fn(tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
if(me.tonsky.persistent_sorted_set.arrays.array_QMARK_(eid)){
return datascript.db.entid(datascript.query._STAR_implicit_source_STAR_,eid);
} else {
return eid;

}
}
}
});
}
} else {
if(cljs.core.int_QMARK_(idx)){
var idx__$1 = (idx | (0));
return (function datascript$query$getter_fn_$_int_getter(tuple){
return (tuple[idx__$1]);
});
} else {
return (function datascript$query$getter_fn_$_getter(tuple){
return (tuple[idx]);
});
}
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(attrs,common_attrs){
var n = cljs.core.count(common_attrs);
if((n === (1))){
return datascript.query.getter_fn(attrs,cljs.core.first(common_attrs));
} else {
var getters_arr = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(common_attrs);
var i = (0);
while(true){
if((i < n)){
(getters_arr[i] = datascript.query.getter_fn(attrs,(getters_arr[i])));

var G__30210 = (i + (1));
i = G__30210;
continue;
} else {
return ((function (i,getters_arr,n){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters_arr.map(((function (i,getters_arr,n){
return (function (p1__29852_SHARP_){
return (p1__29852_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__29852_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__29852_SHARP_.call(null,tuple));
});})(i,getters_arr,n))
));
});
;})(i,getters_arr,n))
}
break;
}
}
});
datascript.query._group_by = (function datascript$query$_group_by(f,init__$1,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,init__$1),x));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
return datascript.query._group_by(key_fn,cljs.core.List.EMPTY,tuples);
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.persistent_BANG_(cljs.core.reduce_kv((function datascript$query$hash_join_$_keeper(vec,k,_){
if(cljs.core.truth_((attrs1.cljs$core$IFn$_invoke$arity$1 ? attrs1.cljs$core$IFn$_invoke$arity$1(k) : attrs1.call(null,k)))){
return vec;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(vec,k);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attrs2));
var keep_idxs1 = cljs.core.to_array(cljs.core.vals(attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1(attrs2),keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(attrs1,common_attrs);
var key_fn2 = datascript.query.tuple_key_fn(attrs2,common_attrs);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function datascript$query$hash_join_$_outer(acc,tuple2){
var key = key_fn2(tuple2);
var temp__5827__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if((temp__5827__auto__ == null)){
return acc;
} else {
var tuples1__$1 = temp__5827__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function datascript$query$hash_join_$_outer_$_inner(acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
}),acc,tuples1__$1);
}
}),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.subtract_rel = (function datascript$query$subtract_rel(a,b){
var map__29858 = a;
var map__29858__$1 = cljs.core.__destructure_map(map__29858);
var attrs_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29858__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var map__29859 = b;
var map__29859__$1 = cljs.core.__destructure_map(map__29859);
var attrs_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29859__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var tuples_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29859__$1,new cljs.core.Keyword(null,"tuples","tuples",-676032639));
var attrs = cljs.core.vec(datascript.query.intersect_keys(attrs_a,attrs_b));
var key_fn_b = datascript.query.tuple_key_fn(attrs_b,attrs);
var hash = datascript.query.hash_attrs(key_fn_b,tuples_b);
var key_fn_a = datascript.query.tuple_key_fn(attrs_a,attrs);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.filterv((function (p1__29856_SHARP_){
return ((function (){var G__29860 = key_fn_a(p1__29856_SHARP_);
return (hash.cljs$core$IFn$_invoke$arity$1 ? hash.cljs$core$IFn$_invoke$arity$1(G__29860) : hash.call(null,G__29860));
})() == null);
}),tuples_a));
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__29861_SHARP_){
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__29861_SHARP_),sym)){
return p1__29861_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.substitute_constant = (function datascript$query$substitute_constant(context,pattern_el){
if(datascript.query.free_var_QMARK_(pattern_el)){
var temp__5829__auto__ = datascript.query.rel_with_attr(context,pattern_el);
if((temp__5829__auto__ == null)){
return null;
} else {
var rel = temp__5829__auto__;
var temp__5829__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5829__auto____$1 == null)){
return null;
} else {
var tuple = temp__5829__auto____$1;
if((cljs.core.fnext(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)) == null)){
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),pattern_el);
return (tuple[idx]);
} else {
return null;
}
}
}
} else {
return null;
}
});
datascript.query.substitute_constants = (function datascript$query$substitute_constants(context,pattern){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29863_SHARP_){
var or__5141__auto__ = datascript.query.substitute_constant(context,p1__29863_SHARP_);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return p1__29863_SHARP_;
}
}),pattern);
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__29866 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29866,(3),null);
var e_SINGLEQUOTE_ = ((((datascript.query.lookup_ref_QMARK_(e)) || (datascript.query.attr_QMARK_(e))))?datascript.db.entid_strict(source,e):e);
var v_SINGLEQUOTE_ = (cljs.core.truth_((function (){var and__5139__auto__ = v;
if(cljs.core.truth_(and__5139__auto__)){
return ((datascript.query.attr_QMARK_(a)) && (((datascript.db.ref_QMARK_(source,a)) && (((datascript.query.lookup_ref_QMARK_(v)) || (datascript.query.attr_QMARK_(v)))))));
} else {
return and__5139__auto__;
}
})())?datascript.db.entid_strict(source,v):v);
var tx_SINGLEQUOTE_ = ((datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [e_SINGLEQUOTE_,a,v_SINGLEQUOTE_,tx_SINGLEQUOTE_], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(context,db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29869_SHARP_){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29869_SHARP_,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (datascript.query.free_var_QMARK_(p1__29869_SHARP_)))){
return null;
} else {
return p1__29869_SHARP_;
}
}),datascript.query.resolve_pattern_lookup_refs(db,datascript.query.substitute_constants(context,pattern)));
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29871){
var vec__29872 = p__29871;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29872,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29872,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__5139__auto__ = tuple__$1;
if(cljs.core.truth_(and__5139__auto__)){
return pattern__$1;
} else {
return and__5139__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (((datascript.query.free_var_QMARK_(p)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p)))))){
var G__30215 = cljs.core.next(tuple__$1);
var G__30216 = cljs.core.next(pattern__$1);
tuple__$1 = G__30215;
pattern__$1 = G__30216;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(context,coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29876_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__29876_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__29877){
var vec__29878 = p__29877;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29878,(1),null);
return datascript.query.free_var_QMARK_(s);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(datascript.query.source_QMARK_(cljs.core.first(clause))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(context,source,pattern){
if((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(context,source,pattern);
} else {
return datascript.query.lookup_pattern_coll(context,source,pattern);
}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__5827__auto__ = cljs.core.first(rels__$1);
if((temp__5827__auto__ == null)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
} else {
var rel = temp__5827__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))){
var G__30217 = cljs.core.next(rels__$1);
var G__30218 = datascript.query.hash_join(rel,new_rel__$1);
var G__30219 = acc;
rels__$1 = G__30217;
new_rel__$1 = G__30218;
acc = G__30219;
continue;
} else {
var G__30220 = cljs.core.next(rels__$1);
var G__30221 = new_rel__$1;
var G__30222 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__30220;
new_rel__$1 = G__30221;
acc = G__30222;
continue;
}
}
break;
}
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__5829__auto__ = datascript.query.rel_with_attr(context,sym);
if((temp__5829__auto__ == null)){
return null;
} else {
var rel = temp__5829__auto__;
var temp__5829__auto____$1 = cljs.core.first(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
if((temp__5829__auto____$1 == null)){
return null;
} else {
var tuple = temp__5829__auto____$1;
return (tuple[(function (){var fexpr__29884 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
return (fexpr__29884.cljs$core$IFn$_invoke$arity$1 ? fexpr__29884.cljs$core$IFn$_invoke$arity$1(sym) : fexpr__29884.call(null,sym));
})()]);
}
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return cljs.core.some((function (p1__29886_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__29886_SHARP_);
}),attrs);
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29887_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__29887_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),(function (p1__29888_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__29888_SHARP_);
})),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context);
var attrs = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var tuples_args = me.tonsky.persistent_sorted_set.arrays.make_array(len);
var n__5740__auto___30223 = len;
var i_30224 = (0);
while(true){
if((i_30224 < n__5740__auto___30223)){
var arg_30225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_30224);
if((arg_30225 instanceof cljs.core.Symbol)){
var temp__5827__auto___30226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_30225);
if((temp__5827__auto___30226 == null)){
(tuples_args[i_30224] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_30225));
} else {
var source_30227 = temp__5827__auto___30226;
(static_args[i_30224] = source_30227);
}
} else {
(static_args[i_30224] = arg_30225);
}

var G__30228 = (i_30224 + (1));
i_30224 = G__30228;
continue;
} else {
}
break;
}

if((f === cljs.core.vector)){
return (function (tuple){
var args__$1 = me.tonsky.persistent_sorted_set.arrays.aclone(static_args);
var n__5740__auto___30229 = len;
var i_30230 = (0);
while(true){
if((i_30230 < n__5740__auto___30229)){
var temp__5829__auto___30231 = (tuples_args[i_30230]);
if((temp__5829__auto___30231 == null)){
} else {
var tuple_idx_30232 = temp__5829__auto___30231;
var v_30233 = (tuple[tuple_idx_30232]);
(args__$1[i_30230] = v_30233);
}

var G__30234 = (i_30230 + (1));
i_30230 = G__30234;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});
} else {
return (function (tuple){
var n__5740__auto___30235 = len;
var i_30236 = (0);
while(true){
if((i_30236 < n__5740__auto___30235)){
var temp__5829__auto___30237 = (tuples_args[i_30236]);
if((temp__5829__auto___30237 == null)){
} else {
var tuple_idx_30238 = temp__5829__auto___30237;
var v_30239 = (tuple[tuple_idx_30238]);
(static_args[i_30236] = v_30239);
}

var G__30240 = (i_30236 + (1));
i_30236 = G__30240;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
}
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__29890 = clause;
var vec__29893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29890,(0),null);
var seq__29894 = cljs.core.seq(vec__29893);
var first__29895 = cljs.core.first(seq__29894);
var seq__29894__$1 = cljs.core.next(seq__29894);
var f = first__29895;
var args = seq__29894__$1;
var pred = (function (){var or__5141__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown predicate '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__29896 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29896,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29896,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),(function (p1__29889_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__29889_SHARP_);
}));
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__29900 = clause;
var vec__29903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(0),null);
var seq__29904 = cljs.core.seq(vec__29903);
var first__29905 = cljs.core.first(seq__29904);
var seq__29904__$1 = cljs.core.next(seq__29904);
var f = first__29905;
var args = seq__29904__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29900,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__5141__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.query_fns,f);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var or__5141__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__5141__auto____$1)){
return or__5141__auto____$1;
} else {
var or__5141__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__5141__auto____$2)){
return or__5141__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown function '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f], 0)))+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause,new cljs.core.Keyword(null,"var","var",-769682797),f], null));
} else {
return null;
}
}
}
}
})();
var vec__29906 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29906,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29906,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__5627__auto__ = (function datascript$query$bind_by_fn_$_iter__29910(s__29911){
return (new cljs.core.LazySeq(null,(function (){
var s__29911__$1 = s__29911;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29911__$1);
if(temp__5825__auto__){
var s__29911__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29911__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__29911__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__29913 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__29912 = (0);
while(true){
if((i__29912 < size__5626__auto__)){
var tuple = cljs.core._nth(c__5625__auto__,i__29912);
var val = tuple_fn(tuple);
if((!((val == null)))){
cljs.core.chunk_append(b__29913,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,datascript.query.collapse_rels(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null))], null),datascript.query.in__GT_rel(binding,val))));

var G__30243 = (i__29912 + (1));
i__29912 = G__30243;
continue;
} else {
var G__30244 = (i__29912 + (1));
i__29912 = G__30244;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29913),datascript$query$bind_by_fn_$_iter__29910(cljs.core.chunk_rest(s__29911__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29913),null);
}
} else {
var tuple = cljs.core.first(s__29911__$2);
var val = tuple_fn(tuple);
if((!((val == null)))){
return cljs.core.cons(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,datascript.query.collapse_rels(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null))], null),datascript.query.in__GT_rel(binding,val))),datascript$query$bind_by_fn_$_iter__29910(cljs.core.rest(s__29911__$2)));
} else {
var G__30245 = cljs.core.rest(s__29911__$2);
s__29911__$1 = G__30245;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.Keyword(null,"tuples","tuples",-676032639),cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
if((!(cljs.core.sequential_QMARK_(clause)))){
return false;
} else {
var head = ((datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause));
if((!((head instanceof cljs.core.Symbol)))){
return false;
} else {
if(datascript.query.free_var_QMARK_(head)){
return false;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"and","and",668631710,null),null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),null,new cljs.core.Symbol(null,"or","or",1876275696,null),null,new cljs.core.Symbol(null,"_","_",-1201019570,null),null], null), null),head)){
return false;
} else {
if((!(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),head)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Unknown rule '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0)))+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clause], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),clause], null));
} else {
return true;

}
}
}
}
}
});
datascript.query.rule_seqid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__29918 = clause;
var seq__29919 = cljs.core.seq(vec__29918);
var first__29920 = cljs.core.first(seq__29919);
var seq__29919__$1 = cljs.core.next(seq__29919);
var rule = first__29920;
var call_args = seq__29919__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__5627__auto__ = (function datascript$query$expand_rule_$_iter__29921(s__29922){
return (new cljs.core.LazySeq(null,(function (){
var s__29922__$1 = s__29922;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29922__$1);
if(temp__5825__auto__){
var s__29922__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29922__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__29922__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__29924 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__29923 = (0);
while(true){
if((i__29923 < size__5626__auto__)){
var branch = cljs.core._nth(c__5625__auto__,i__29923);
var vec__29925 = branch;
var seq__29926 = cljs.core.seq(vec__29925);
var first__29927 = cljs.core.first(seq__29926);
var seq__29926__$1 = cljs.core.next(seq__29926);
var vec__29928 = first__29927;
var seq__29929 = cljs.core.seq(vec__29928);
var first__29930 = cljs.core.first(seq__29929);
var seq__29929__$1 = cljs.core.next(seq__29929);
var _ = first__29930;
var rule_args = seq__29929__$1;
var clauses = seq__29926__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__29924,clojure.walk.postwalk(((function (i__29923,vec__29925,seq__29926,first__29927,seq__29926__$1,vec__29928,seq__29929,first__29930,seq__29929__$1,_,rule_args,clauses,replacements,branch,c__5625__auto__,size__5626__auto__,b__29924,s__29922__$2,temp__5825__auto__,vec__29918,seq__29919,first__29920,seq__29919__$1,rule,call_args,seqid,branches){
return (function (p1__29917_SHARP_){
if(datascript.query.free_var_QMARK_(p1__29917_SHARP_)){
var x__24292__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__29917_SHARP_) : replacements.call(null,p1__29917_SHARP_));
if((x__24292__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__29917_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
} else {
return x__24292__auto__;
}
} else {
return p1__29917_SHARP_;
}
});})(i__29923,vec__29925,seq__29926,first__29927,seq__29926__$1,vec__29928,seq__29929,first__29930,seq__29929__$1,_,rule_args,clauses,replacements,branch,c__5625__auto__,size__5626__auto__,b__29924,s__29922__$2,temp__5825__auto__,vec__29918,seq__29919,first__29920,seq__29919__$1,rule,call_args,seqid,branches))
,clauses));

var G__30250 = (i__29923 + (1));
i__29923 = G__30250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29924),datascript$query$expand_rule_$_iter__29921(cljs.core.chunk_rest(s__29922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29924),null);
}
} else {
var branch = cljs.core.first(s__29922__$2);
var vec__29932 = branch;
var seq__29933 = cljs.core.seq(vec__29932);
var first__29934 = cljs.core.first(seq__29933);
var seq__29933__$1 = cljs.core.next(seq__29933);
var vec__29935 = first__29934;
var seq__29936 = cljs.core.seq(vec__29935);
var first__29937 = cljs.core.first(seq__29936);
var seq__29936__$1 = cljs.core.next(seq__29936);
var _ = first__29937;
var rule_args = seq__29936__$1;
var clauses = seq__29933__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__29932,seq__29933,first__29934,seq__29933__$1,vec__29935,seq__29936,first__29937,seq__29936__$1,_,rule_args,clauses,replacements,branch,s__29922__$2,temp__5825__auto__,vec__29918,seq__29919,first__29920,seq__29919__$1,rule,call_args,seqid,branches){
return (function (p1__29917_SHARP_){
if(datascript.query.free_var_QMARK_(p1__29917_SHARP_)){
var x__24292__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__29917_SHARP_) : replacements.call(null,p1__29917_SHARP_));
if((x__24292__auto__ == null)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__29917_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
} else {
return x__24292__auto__;
}
} else {
return p1__29917_SHARP_;
}
});})(vec__29932,seq__29933,first__29934,seq__29933__$1,vec__29935,seq__29936,first__29937,seq__29936__$1,_,rule_args,clauses,replacements,branch,s__29922__$2,temp__5825__auto__,vec__29918,seq__29919,first__29920,seq__29919__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__29921(cljs.core.rest(s__29922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__29939){
var vec__29940 = p__29939;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29940,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__29943 = rule_clause;
var seq__29944 = cljs.core.seq(vec__29943);
var first__29945 = cljs.core.first(seq__29944);
var seq__29944__$1 = cljs.core.next(seq__29944);
var rule = first__29945;
var call_args = seq__29944__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__5627__auto__ = (function datascript$query$rule_gen_guards_$_iter__29946(s__29947){
return (new cljs.core.LazySeq(null,(function (){
var s__29947__$1 = s__29947;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__29947__$1);
if(temp__5825__auto__){
var s__29947__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29947__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__29947__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__29949 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__29948 = (0);
while(true){
if((i__29948 < size__5626__auto__)){
var prev_args = cljs.core._nth(c__5625__auto__,i__29948);
var vec__29950 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29950,(1),null);
cljs.core.chunk_append(b__29949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null));

var G__30263 = (i__29948 + (1));
i__29948 = G__30263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29949),datascript$query$rule_gen_guards_$_iter__29946(cljs.core.chunk_rest(s__29947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29949),null);
}
} else {
var prev_args = cljs.core.first(s__29947__$2);
var vec__29954 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29954,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__29946(cljs.core.rest(s__29947__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
clojure.walk.postwalk((function (p1__29957_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__29957_SHARP_) : pred.call(null,p1__29957_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__29957_SHARP_);
} else {
}

return p1__29957_SHARP_;
}),form);

return cljs.core.deref(res);
});
datascript.query.collect_vars = (function datascript$query$collect_vars(clause){
return cljs.core.set(datascript.query.walk_collect(clause,datascript.query.free_var_QMARK_));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = datascript.query.collect_vars(clauses);
var pred = (function (p__29959){
var vec__29960 = p__29959;
var vec__29963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29960,(0),null);
var seq__29964 = cljs.core.seq(vec__29963);
var first__29965 = cljs.core.first(seq__29964);
var seq__29964__$1 = cljs.core.next(seq__29964);
var _ = first__29965;
var vars = seq__29964__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});
var empty_rels_QMARK_ = (function (context__$1){
return cljs.core.some((function (p1__29966_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__29966_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});
var stack = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null),null,(1),null));
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__5827__auto__ = cljs.core.first(stack);
if((temp__5827__auto__ == null)){
return rel;
} else {
var frame = temp__5827__auto__;
var vec__29988 = cljs.core.split_with(((function (stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29967_SHARP_){
return (!(datascript.query.rule_QMARK_(context,p1__29967_SHARP_)));
});})(stack,rel,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(0),null);
var vec__29991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29988,(1),null);
var seq__29992 = cljs.core.seq(vec__29991);
var first__29993 = cljs.core.first(seq__29992);
var seq__29992__$1 = cljs.core.next(seq__29992);
var rule_clause = first__29993;
var next_clauses = seq__29992__$1;
if((rule_clause == null)){
var context__$1 = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = datascript.util.distinct_by(cljs.core.vec,(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs)));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__30266 = cljs.core.next(stack);
var G__30267 = datascript.query.sum_rel(rel,new_rel);
stack = G__30266;
rel = G__30267;
continue;
} else {
var vec__29994 = rule_clause;
var seq__29995 = cljs.core.seq(vec__29994);
var first__29996 = cljs.core.first(seq__29995);
var seq__29995__$1 = cljs.core.next(seq__29995);
var rule = first__29996;
var call_args = seq__29995__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));
var vec__29997 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29997,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29997,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29968_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__29968_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__30268 = cljs.core.next(stack);
var G__30269 = rel;
stack = G__30268;
rel = G__30269;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__30270 = cljs.core.next(stack);
var G__30271 = rel;
stack = G__30270;
rel = G__30271;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__30273 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__5627__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__30001(s__30002){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__30002__$1 = s__30002;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30002__$1);
if(temp__5825__auto__){
var s__30002__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30002__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__30002__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__30004 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__30003 = (0);
while(true){
if((i__30003 < size__5626__auto__)){
var branch = cljs.core._nth(c__5625__auto__,i__30003);
cljs.core.chunk_append(b__30004,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.util.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));

var G__30279 = (i__30003 + (1));
i__30003 = G__30279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30004),datascript$query$solve_rule_$_iter__30001(cljs.core.chunk_rest(s__30002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30004),null);
}
} else {
var branch = cljs.core.first(s__30002__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.util.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,next_clauses], 0)),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),datascript$query$solve_rule_$_iter__30001(cljs.core.rest(s__30002__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29994,seq__29995,first__29996,seq__29995__$1,rule,call_args,guards,vec__29997,active_gs,pending_gs,vec__29988,clauses,vec__29991,seq__29992,first__29993,seq__29992__$1,rule_clause,next_clauses,frame,temp__5827__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__5627__auto__(branches);
})(),cljs.core.next(stack));
var G__30274 = rel;
stack = G__30273;
rel = G__30274;
continue;
}
}
}
}
break;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__30005 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30005,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30005,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30005,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30005,(3),null);
var G__30008 = cljs.core.PersistentHashSet.EMPTY;
var G__30008__$1 = ((datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30008,e):G__30008);
var G__30008__$2 = ((datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30008__$1,tx):G__30008__$1);
if(((datascript.query.free_var_QMARK_(v)) && ((((!(datascript.query.free_var_QMARK_(a)))) && (datascript.db.ref_QMARK_(source,a)))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__30008__$2,v);
} else {
return G__30008__$2;
}
});
datascript.query.limit_rel = (function datascript$query$limit_rel(rel,vars){
var temp__5829__auto__ = cljs.core.not_empty(cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),vars));
if((temp__5829__auto__ == null)){
return null;
} else {
var attrs_SINGLEQUOTE_ = temp__5829__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(rel,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs_SINGLEQUOTE_);
}
});
datascript.query.limit_context = (function datascript$query$limit_context(context,vars){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__30010_SHARP_){
return datascript.query.limit_rel(p1__30010_SHARP_,vars);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));
});
datascript.query.bound_vars = (function datascript$query$bound_vars(context){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30011_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__30011_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)));
});
datascript.query.check_bound = (function datascript$query$check_bound(bound,vars,form){
if(clojure.set.subset_QMARK_(vars,bound)){
return null;
} else {
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),bound);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Insufficient bindings: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing], 0)))+" not bound in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing], null));
}
});
datascript.query.check_free_same = (function datascript$query$check_free_same(bound,branches,form){
var free = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30013_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(datascript.query.collect_vars(p1__30013_SHARP_),bound);
}),branches);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,free))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"All clauses in 'or' must use same set of free vars, had "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([free], 0)))+" in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),free], null));
}
});
datascript.query.check_free_subset = (function datascript$query$check_free_subset(bound,vars,branches){
var free = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(bound,vars));
var seq__30015 = cljs.core.seq(branches);
var chunk__30016 = null;
var count__30017 = (0);
var i__30018 = (0);
while(true){
if((i__30018 < count__30017)){
var branch = chunk__30016.cljs$core$IIndexed$_nth$arity$2(null,i__30018);
var temp__5829__auto___30280 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___30280 == null)){
} else {
var missing_30281 = temp__5829__auto___30280;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"All clauses in 'or' must use same set of free vars, had "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_30281], 0)))+" not bound in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_30281], null));
}


var G__30282 = seq__30015;
var G__30283 = chunk__30016;
var G__30284 = count__30017;
var G__30285 = (i__30018 + (1));
seq__30015 = G__30282;
chunk__30016 = G__30283;
count__30017 = G__30284;
i__30018 = G__30285;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__30015);
if(temp__5825__auto__){
var seq__30015__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30015__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__30015__$1);
var G__30286 = cljs.core.chunk_rest(seq__30015__$1);
var G__30287 = c__5672__auto__;
var G__30288 = cljs.core.count(c__5672__auto__);
var G__30289 = (0);
seq__30015 = G__30286;
chunk__30016 = G__30287;
count__30017 = G__30288;
i__30018 = G__30289;
continue;
} else {
var branch = cljs.core.first(seq__30015__$1);
var temp__5829__auto___30293 = cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(free,datascript.query.collect_vars(branch)));
if((temp__5829__auto___30293 == null)){
} else {
var missing_30294 = temp__5829__auto___30293;
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch,bound,vars,free], 0));

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"All clauses in 'or' must use same set of free vars, had "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([missing_30294], 0)))+" not bound in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([branch], 0)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),branch,new cljs.core.Keyword(null,"vars","vars",-2046957217),missing_30294], null));
}


var G__30295 = cljs.core.next(seq__30015__$1);
var G__30296 = null;
var G__30297 = (0);
var G__30298 = (0);
seq__30015 = G__30295;
chunk__30016 = G__30296;
count__30017 = G__30297;
i__30018 = G__30298;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(var_args){
var G__30025 = arguments.length;
switch (G__30025) {
case 2:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2 = (function (context,clause){
return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,clause,clause);
}));

(datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3 = (function (context,clause,orig_clause){
while(true){
var pred__30026 = datascript.query.looks_like_QMARK_;
var expr__30027 = clause;
if(cljs.core.truth_((function (){var G__30029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null);
var G__30030 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30029,G__30030) : pred__30026.call(null,G__30029,G__30030));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__30031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null);
var G__30032 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30031,G__30032) : pred__30026.call(null,G__30031,G__30032));
})())){
datascript.query.check_bound(datascript.query.bound_vars(context),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,cljs.core.nfirst(clause)),clause);

return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__30033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.source_QMARK_,new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30034 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30033,G__30034) : pred__30026.call(null,G__30033,G__30034));
})())){
var vec__30035 = clause;
var seq__30036 = cljs.core.seq(vec__30035);
var first__30037 = cljs.core.first(seq__30036);
var seq__30036__$1 = cljs.core.next(seq__30036);
var source_sym = first__30037;
var rest = seq__30036__$1;
var _STAR_implicit_source_STAR__orig_val__30038 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__30039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__30039);

try{return datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$3(context,rest,clause);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__30038);
}} else {
if(cljs.core.truth_((function (){var G__30040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or","or",1876275696,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30041 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30040,G__30041) : pred__30026.call(null,G__30040,G__30041));
})())){
var vec__30042 = clause;
var seq__30043 = cljs.core.seq(vec__30042);
var first__30044 = cljs.core.first(seq__30043);
var seq__30043__$1 = cljs.core.next(seq__30043);
var _ = first__30044;
var branches = seq__30043__$1;
var ___$1 = datascript.query.check_free_same(datascript.query.bound_vars(context),branches,clause);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__30042,seq__30043,first__30044,seq__30043__$1,_,branches,___$1,pred__30026,expr__30027){
return (function (p1__30020_SHARP_){
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(context,p1__30020_SHARP_) : datascript.query.resolve_clause.call(null,context,p1__30020_SHARP_));
});})(context,clause,orig_clause,vec__30042,seq__30043,first__30044,seq__30043__$1,_,branches,___$1,pred__30026,expr__30027))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__30042,seq__30043,first__30044,seq__30043__$1,_,branches,___$1,contexts,pred__30026,expr__30027){
return (function (p1__30021_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__30021_SHARP_));
});})(context,clause,orig_clause,vec__30042,seq__30043,first__30044,seq__30043__$1,_,branches,___$1,contexts,pred__30026,expr__30027))
,contexts);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(contexts),new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels)], null));
} else {
if(cljs.core.truth_((function (){var G__30045 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30046 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30045,G__30046) : pred__30026.call(null,G__30045,G__30046));
})())){
var vec__30047 = clause;
var seq__30048 = cljs.core.seq(vec__30047);
var first__30049 = cljs.core.first(seq__30048);
var seq__30048__$1 = cljs.core.next(seq__30048);
var _ = first__30049;
var first__30049__$1 = cljs.core.first(seq__30048__$1);
var seq__30048__$2 = cljs.core.next(seq__30048__$1);
var vec__30050 = first__30049__$1;
var seq__30051 = cljs.core.seq(vec__30050);
var first__30052 = cljs.core.first(seq__30051);
var seq__30051__$1 = cljs.core.next(seq__30051);
var req_vars = first__30052;
var vars = seq__30051__$1;
var branches = seq__30048__$2;
var bound = datascript.query.bound_vars(context);
datascript.query.check_bound(bound,req_vars,orig_clause);

datascript.query.check_free_subset(bound,vars,branches);

var G__30302 = context;
var G__30303 = cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"or-join","or-join",591375469,null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_vars,vars),branches);
var G__30304 = clause;
context = G__30302;
clause = G__30303;
orig_clause = G__30304;
continue;
} else {
if(cljs.core.truth_((function (){var G__30053 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30054 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30053,G__30054) : pred__30026.call(null,G__30053,G__30054));
})())){
var vec__30055 = clause;
var seq__30056 = cljs.core.seq(vec__30055);
var first__30057 = cljs.core.first(seq__30056);
var seq__30056__$1 = cljs.core.next(seq__30056);
var _ = first__30057;
var first__30057__$1 = cljs.core.first(seq__30056__$1);
var seq__30056__$2 = cljs.core.next(seq__30056__$1);
var vars = first__30057__$1;
var branches = seq__30056__$2;
var vars__$1 = cljs.core.set(vars);
var ___$1 = datascript.query.check_free_subset(datascript.query.bound_vars(context),vars__$1,branches);
var join_context = datascript.query.limit_context(context,vars__$1);
var contexts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__30055,seq__30056,first__30057,seq__30056__$1,_,first__30057__$1,seq__30056__$2,vars,branches,vars__$1,___$1,join_context,pred__30026,expr__30027){
return (function (p1__30022_SHARP_){
return datascript.query.limit_context((datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(join_context,p1__30022_SHARP_) : datascript.query.resolve_clause.call(null,join_context,p1__30022_SHARP_)),vars__$1);
});})(context,clause,orig_clause,vec__30055,seq__30056,first__30057,seq__30056__$1,_,first__30057__$1,seq__30056__$2,vars,branches,vars__$1,___$1,join_context,pred__30026,expr__30027))
,branches);
var rels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (context,clause,orig_clause,vec__30055,seq__30056,first__30057,seq__30056__$1,_,first__30057__$1,seq__30056__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__30026,expr__30027){
return (function (p1__30023_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(p1__30023_SHARP_));
});})(context,clause,orig_clause,vec__30055,seq__30056,first__30057,seq__30056__$1,_,first__30057__$1,seq__30056__$2,vars,branches,vars__$1,___$1,join_context,contexts,pred__30026,expr__30027))
,contexts);
var sum_rel = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,sum_rel);
} else {
if(cljs.core.truth_((function (){var G__30058 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"and","and",668631710,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30059 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30058,G__30059) : pred__30026.call(null,G__30058,G__30059));
})())){
var vec__30060 = clause;
var seq__30061 = cljs.core.seq(vec__30060);
var first__30062 = cljs.core.first(seq__30061);
var seq__30061__$1 = cljs.core.next(seq__30061);
var _ = first__30062;
var clauses = seq__30061__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
} else {
if(cljs.core.truth_((function (){var G__30063 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30064 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30063,G__30064) : pred__30026.call(null,G__30063,G__30064));
})())){
var vec__30065 = clause;
var seq__30066 = cljs.core.seq(vec__30065);
var first__30067 = cljs.core.first(seq__30066);
var seq__30066__$1 = cljs.core.next(seq__30066);
var _ = first__30067;
var clauses = seq__30066__$1;
var bound = datascript.query.bound_vars(context);
var negation_vars = datascript.query.collect_vars(clauses);
var ___$1 = ((cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(bound,negation_vars)))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"Insufficient bindings: none of "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([negation_vars], 0)))+" is bound in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orig_clause], 0)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("query","where","query/where",-1935159429),new cljs.core.Keyword(null,"form","form",-1624062471),orig_clause], null))})():null);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var negation_context = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context_SINGLEQUOTE_,clauses);
var negation = datascript.query.subtract_rel(datascript.util.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__30068 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30069 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30068,G__30069) : pred__30026.call(null,G__30068,G__30069));
})())){
var vec__30070 = clause;
var seq__30071 = cljs.core.seq(vec__30070);
var first__30072 = cljs.core.first(seq__30071);
var seq__30071__$1 = cljs.core.next(seq__30071);
var _ = first__30072;
var first__30072__$1 = cljs.core.first(seq__30071__$1);
var seq__30071__$2 = cljs.core.next(seq__30071__$1);
var vars = first__30072__$1;
var clauses = seq__30071__$2;
var bound = datascript.query.bound_vars(context);
var ___$1 = datascript.query.check_bound(bound,vars,orig_clause);
var context_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context))], null));
var join_context = datascript.query.limit_context(context_SINGLEQUOTE_,vars);
var negation_context = datascript.query.limit_context(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,join_context,clauses),vars);
var negation = datascript.query.subtract_rel(datascript.util.single(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context_SINGLEQUOTE_)),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.hash_join,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(negation_context)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_SINGLEQUOTE_,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [negation], null));
} else {
if(cljs.core.truth_((function (){var G__30074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null);
var G__30075 = expr__30027;
return (pred__30026.cljs$core$IFn$_invoke$arity$2 ? pred__30026.cljs$core$IFn$_invoke$arity$2(G__30074,G__30075) : pred__30026.call(null,G__30074,G__30075));
})())){
var source = datascript.query._STAR_implicit_source_STAR_;
var pattern_SINGLEQUOTE_ = datascript.query.resolve_pattern_lookup_refs(source,clause);
var relation = datascript.query.lookup_pattern(context,source,pattern_SINGLEQUOTE_);
var _STAR_lookup_attrs_STAR__orig_val__30076 = datascript.query._STAR_lookup_attrs_STAR_;
var _STAR_lookup_attrs_STAR__temp_val__30077 = (((((!((source == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$))))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source)))?datascript.query.dynamic_lookup_attrs(source,pattern_SINGLEQUOTE_):datascript.query._STAR_lookup_attrs_STAR_);
(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__temp_val__30077);

try{return cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,relation);
}finally {(datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR__orig_val__30076);
}} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__30027))));
}
}
}
}
}
}
}
}
}
}
break;
}
}));

(datascript.query._resolve_clause.cljs$lang$maxFixedArity = 3);

datascript.query.short_circuit_empty_rel = (function datascript$query$short_circuit_empty_rel(context){
if(cljs.core.truth_(cljs.core.some((function (p1__30079_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__30079_SHARP_));
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.query.Relation(cljs.core.zipmap(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__30080_SHARP_){
return cljs.core.keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__30080_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)], 0)),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null))], null));
} else {
return context;
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(cljs.core.some(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,new cljs.core.Keyword(null,"tuples","tuples",-676032639)),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)))){
return context;
} else {
return datascript.query.short_circuit_empty_rel(((datascript.query.rule_QMARK_(context,clause))?((datascript.query.source_QMARK_(cljs.core.first(clause)))?(function (){var _STAR_implicit_source_STAR__orig_val__30082 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__30083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),cljs.core.first(clause));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__30083);

try{var G__30084 = context;
var G__30085 = cljs.core.next(clause);
return (datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2 ? datascript.query.resolve_clause.cljs$core$IFn$_invoke$arity$2(G__30084,G__30085) : datascript.query.resolve_clause.call(null,G__30084,G__30085));
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__30082);
}})():cljs.core.update.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.Keyword(null,"rels","rels",1770187185),datascript.query.collapse_rels,datascript.query.solve_rule(context,clause))):datascript.query._resolve_clause.cljs$core$IFn$_invoke$arity$2(context,clause)));
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
var _STAR_implicit_source_STAR__orig_val__30086 = datascript.query._STAR_implicit_source_STAR_;
var _STAR_implicit_source_STAR__temp_val__30087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Symbol(null,"$","$",-1580747756,null));
(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__temp_val__30087);

try{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
}finally {(datascript.query._STAR_implicit_source_STAR_ = _STAR_implicit_source_STAR__orig_val__30086);
}});
datascript.query._collect_tuples = (function datascript$query$_collect_tuples(acc,rel,len,copy_map){
return cljs.core.__GT_Eduction(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t1){
return cljs.core.__GT_Eduction(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (t2){
var res = cljs.core.aclone(t1);
var n__5740__auto___30306 = len;
var i_30307 = (0);
while(true){
if((i_30307 < n__5740__auto___30306)){
var temp__5829__auto___30308 = (copy_map[i_30307]);
if((temp__5829__auto___30308 == null)){
} else {
var idx_30309 = temp__5829__auto___30308;
(res[i_30307] = (t2[idx_30309]));
}

var G__30311 = (i_30307 + (1));
i_30307 = G__30311;
continue;
} else {
}
break;
}

return res;
})),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
})),cljs.core.cat),acc);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var G__30092 = arguments.length;
switch (G__30092) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [me.tonsky.persistent_sorted_set.arrays.make_array(cljs.core.count(symbols))], null),rels,symbols);
}));

(datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var rel = cljs.core.first(rels);
if((rel == null)){
return acc;
} else {
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))){
return cljs.core.PersistentVector.EMPTY;
} else {
var keep_attrs = cljs.core.select_keys(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__30313 = acc;
var G__30314 = cljs.core.next(rels);
var G__30315 = symbols;
acc = G__30313;
rels = G__30314;
symbols = G__30315;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel){
return (function (p1__30090_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__30090_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel))
,symbols));
var len = cljs.core.count(symbols);
var G__30316 = datascript.query._collect_tuples(acc,rel,len,copy_map);
var G__30317 = cljs.core.next(rels);
var G__30318 = symbols;
acc = G__30316;
rels = G__30317;
symbols = G__30318;
continue;

}
}
}
break;
}
}));

(datascript.query._collect.cljs$lang$maxFixedArity = 3);

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

var datascript$query$IContextResolve$_context_resolve$dyn_30320 = (function (var$,context){
var x__5497__auto__ = (((var$ == null))?null:var$);
var m__5498__auto__ = (datascript.query._context_resolve[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5498__auto__.call(null,var$,context));
} else {
var m__5496__auto__ = (datascript.query._context_resolve["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__5496__auto__.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
});
datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((((!((var$ == null)))) && ((!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
return datascript$query$IContextResolve$_context_resolve$dyn_30320(var$,context);
}
});

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
}));

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),var$__$1.symbol], null));
}));

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__5141__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.built_ins.aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
}));

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
}));
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(datascript.parser.aggregate_QMARK_(element)){
var f = datascript.query._context_resolve(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30108_SHARP_){
return datascript.query._context_resolve(p1__30108_SHARP_,context);
}),cljs.core.butlast(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30109_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__30109_SHARP_,i);
}),tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__30111_SHARP_,p2__30112_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__30111_SHARP_) : pred.call(null,p1__30111_SHARP_)))){
return p2__30112_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30113_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__30113_SHARP_);
}),group_idxs);
});
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__5627__auto__ = (function datascript$query$aggregate_$_iter__30114(s__30115){
return (new cljs.core.LazySeq(null,(function (){
var s__30115__$1 = s__30115;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30115__$1);
if(temp__5825__auto__){
var s__30115__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30115__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__30115__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__30117 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__30116 = (0);
while(true){
if((i__30116 < size__5626__auto__)){
var vec__30119 = cljs.core._nth(c__5625__auto__,i__30116);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30119,(1),null);
cljs.core.chunk_append(b__30117,datascript.query._aggregate(find_elements,context,tuples));

var G__30328 = (i__30116 + (1));
i__30116 = G__30328;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30117),datascript$query$aggregate_$_iter__30114(cljs.core.chunk_rest(s__30115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30117),null);
}
} else {
var vec__30122 = cljs.core.first(s__30115__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30122,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30122,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__30114(cljs.core.rest(s__30115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(grouped);
});
datascript.query.map_STAR_ = (function datascript$query$map_STAR_(f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__30125_SHARP_,p2__30126_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__30125_SHARP_,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p2__30126_SHARP_) : f.call(null,p2__30126_SHARP_)));
}),cljs.core.empty(xs),xs);
});
datascript.query.tuples__GT_return_map = (function datascript$query$tuples__GT_return_map(return_map,tuples){
var symbols = new cljs.core.Keyword(null,"symbols","symbols",1211743).cljs$core$IFn$_invoke$arity$1(return_map);
var idxs = cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(symbols));
return datascript.query.map_STAR_((function (tuple){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,i){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(symbols,i),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,i));
}),cljs.core.PersistentArrayMap.EMPTY,idxs);
}),tuples);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

var datascript$query$IPostProcess$_post_process$dyn_30333 = (function (find,return_map,tuples){
var x__5497__auto__ = (((find == null))?null:find);
var m__5498__auto__ = (datascript.query._post_process[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5498__auto__.call(null,find,return_map,tuples));
} else {
var m__5496__auto__ = (datascript.query._post_process["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$3(find,return_map,tuples) : m__5496__auto__.call(null,find,return_map,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
});
datascript.query._post_process = (function datascript$query$_post_process(find,return_map,tuples){
if((((!((find == null)))) && ((!((find.datascript$query$IPostProcess$_post_process$arity$3 == null)))))){
return find.datascript$query$IPostProcess$_post_process$arity$3(find,return_map,tuples);
} else {
return datascript$query$IPostProcess$_post_process$dyn_30333(find,return_map,tuples);
}
});

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((return_map == null)){
return tuples;
} else {
return datascript.query.tuples__GT_return_map(return_map,tuples);
}
}));

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
}));

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
}));

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$3 = (function (_,return_map,tuples){
var ___$1 = this;
if((!((return_map == null)))){
return cljs.core.first(datascript.query.tuples__GT_return_map(return_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(tuples)], null)));
} else {
return cljs.core.first(tuples);
}
}));
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__5627__auto__ = (function datascript$query$pull_$_iter__30151(s__30152){
return (new cljs.core.LazySeq(null,(function (){
var s__30152__$1 = s__30152;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30152__$1);
if(temp__5825__auto__){
var s__30152__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30152__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__30152__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__30154 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__30153 = (0);
while(true){
if((i__30153 < size__5626__auto__)){
var find = cljs.core._nth(c__5625__auto__,i__30153);
cljs.core.chunk_append(b__30154,((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null));

var G__30342 = (i__30153 + (1));
i__30153 = G__30342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30154),datascript$query$pull_$_iter__30151(cljs.core.chunk_rest(s__30152__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30154),null);
}
} else {
var find = cljs.core.first(s__30152__$2);
return cljs.core.cons(((datascript.parser.pull_QMARK_(find))?(function (){var db = datascript.query._context_resolve(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(find),context);
var pattern = datascript.query._context_resolve(new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(find),context);
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2(db,pattern);
})():null),datascript$query$pull_$_iter__30151(cljs.core.rest(s__30152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(find_elements);
})();
var iter__5627__auto__ = (function datascript$query$pull_$_iter__30155(s__30156){
return (new cljs.core.LazySeq(null,(function (){
var s__30156__$1 = s__30156;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__30156__$1);
if(temp__5825__auto__){
var s__30156__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30156__$2)){
var c__5625__auto__ = cljs.core.chunk_first(s__30156__$2);
var size__5626__auto__ = cljs.core.count(c__5625__auto__);
var b__30158 = cljs.core.chunk_buffer(size__5626__auto__);
if((function (){var i__30157 = (0);
while(true){
if((i__30157 < size__5626__auto__)){
var tuple = cljs.core._nth(c__5625__auto__,i__30157);
cljs.core.chunk_append(b__30158,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__30157,tuple,c__5625__auto__,size__5626__auto__,b__30158,s__30156__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(i__30157,tuple,c__5625__auto__,size__5626__auto__,b__30158,s__30156__$2,temp__5825__auto__,resolved))
,resolved,tuple));

var G__30373 = (i__30157 + (1));
i__30157 = G__30373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30158),datascript$query$pull_$_iter__30155(cljs.core.chunk_rest(s__30156__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30158),null);
}
} else {
var tuple = cljs.core.first(s__30156__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__30156__$2,temp__5825__auto__,resolved){
return (function (parsed_opts,el){
if(cljs.core.truth_(parsed_opts)){
return datascript.pull_api.pull_impl(parsed_opts,el);
} else {
return el;
}
});})(tuple,s__30156__$2,temp__5825__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__30155(cljs.core.rest(s__30156__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5627__auto__(resultset);
});
datascript.query.q = (function datascript$query$q(var_args){
var args__5881__auto__ = [];
var len__5875__auto___30374 = arguments.length;
var i__5876__auto___30375 = (0);
while(true){
if((i__5876__auto___30375 < len__5875__auto___30374)){
args__5881__auto__.push((arguments[i__5876__auto___30375]));

var G__30376 = (i__5876__auto___30375 + (1));
i__5876__auto___30375 = G__30376;
continue;
} else {
}
break;
}

var argseq__5882__auto__ = ((((1) < args__5881__auto__.length))?(new cljs.core.IndexedSeq(args__5881__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5882__auto__);
});

(datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.lru._get(datascript.query._STAR_query_cache_STAR_,q,(function (){
return datascript.parser.parse_query(q);
}));
var find = new cljs.core.Keyword(null,"qfind","qfind",1529332972).cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = new cljs.core.Keyword(null,"qwith","qwith",-45809392).cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),with$));
var q__$1 = (function (){var G__30162 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__30162);
} else {
return G__30162;
}
})();
var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),new cljs.core.Keyword(null,"qin","qin",1372651151).cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__30163 = resultset;
var G__30163__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30159_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__30159_SHARP_,(0),result_arity));
}),G__30163):G__30163);
var G__30163__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__30163__$1):G__30163__$1);
var G__30163__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__30163__$2):G__30163__$2);
return datascript.query._post_process(find,new cljs.core.Keyword(null,"qreturn-map","qreturn-map",1841215994).cljs$core$IFn$_invoke$arity$1(parsed_q),G__30163__$3);

}));

(datascript.query.q.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(datascript.query.q.cljs$lang$applyTo = (function (seq30160){
var G__30161 = cljs.core.first(seq30160);
var seq30160__$1 = cljs.core.next(seq30160);
var self__5860__auto__ = this;
return self__5860__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30161,seq30160__$1);
}));


//# sourceMappingURL=datascript.query.js.map
