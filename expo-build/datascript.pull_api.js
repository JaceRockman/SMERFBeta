goog.provide('datascript.pull_api');



datascript.pull_api.first_seq = (function datascript$pull_api$first_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._first(xs);
}
});
datascript.pull_api.next_seq = (function datascript$pull_api$next_seq(xs){
if((xs == null)){
return null;
} else {
return cljs.core._next(xs);
}
});
datascript.pull_api.conj_seq = (function datascript$pull_api$conj_seq(xs,x){
if((xs == null)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return cljs.core._conj(xs,x);
}
});
datascript.pull_api.assoc_some_BANG_ = (function datascript$pull_api$assoc_some_BANG_(m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});
datascript.pull_api.conj_some_BANG_ = (function datascript$pull_api$conj_some_BANG_(xs,v){
if((v == null)){
return xs;
} else {
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(xs,v);
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.pull_api.Context = (function (db,visitor,__meta,__extmap,__hash){
this.db = db;
this.visitor = visitor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28947,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28956 = k28947;
var G__28956__$1 = (((G__28956 instanceof cljs.core.Keyword))?G__28956.fqn:null);
switch (G__28956__$1) {
case "db":
return self__.db;

break;
case "visitor":
return self__.visitor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28947,else__5450__auto__);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28958){
var vec__28959 = p__28958;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28959,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28959,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.Context{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db","db",993250759),self__.db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor],null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28946){
var self__ = this;
var G__28946__$1 = this;
return (new cljs.core.RecordIter((0),G__28946__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1727735959 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28948,other28949){
var self__ = this;
var this28948__$1 = this;
return (((!((other28949 == null)))) && ((((this28948__$1.constructor === other28949.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28948__$1.db,other28949.db)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28948__$1.visitor,other28949.visitor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28948__$1.__extmap,other28949.__extmap)))))))));
}));

(datascript.pull_api.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28947){
var self__ = this;
var this__5454__auto____$1 = this;
var G__28971 = k28947;
var G__28971__$1 = (((G__28971 instanceof cljs.core.Keyword))?G__28971.fqn:null);
switch (G__28971__$1) {
case "db":
case "visitor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28947);

}
}));

(datascript.pull_api.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28946){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__28972 = cljs.core.keyword_identical_QMARK_;
var expr__28973 = k__5456__auto__;
if(cljs.core.truth_((pred__28972.cljs$core$IFn$_invoke$arity$2 ? pred__28972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),expr__28973) : pred__28972.call(null,new cljs.core.Keyword(null,"db","db",993250759),expr__28973)))){
return (new datascript.pull_api.Context(G__28946,self__.visitor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__28972.cljs$core$IFn$_invoke$arity$2 ? pred__28972.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__28973) : pred__28972.call(null,new cljs.core.Keyword(null,"visitor","visitor",-1026865865),expr__28973)))){
return (new datascript.pull_api.Context(self__.db,G__28946,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.Context(self__.db,self__.visitor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28946),null));
}
}
}));

(datascript.pull_api.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"db","db",993250759),self__.db,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"visitor","visitor",-1026865865),self__.visitor,null))], null),self__.__extmap));
}));

(datascript.pull_api.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28946){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.Context(self__.db,self__.visitor,G__28946,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"visitor","visitor",613665662,null)], null);
}));

(datascript.pull_api.Context.cljs$lang$type = true);

(datascript.pull_api.Context.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/Context",null,(1),null));
}));

(datascript.pull_api.Context.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/Context");
}));

/**
 * Positional factory function for datascript.pull-api/Context.
 */
datascript.pull_api.__GT_Context = (function datascript$pull_api$__GT_Context(db,visitor){
return (new datascript.pull_api.Context(db,visitor,null,null,null));
});

/**
 * Factory function for datascript.pull-api/Context, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_Context = (function datascript$pull_api$map__GT_Context(G__28950){
var extmap__5489__auto__ = (function (){var G__28977 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28950,new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitor","visitor",-1026865865)], 0));
if(cljs.core.record_QMARK_(G__28950)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__28977);
} else {
return G__28977;
}
})();
return (new datascript.pull_api.Context(new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(G__28950),new cljs.core.Keyword(null,"visitor","visitor",-1026865865).cljs$core$IFn$_invoke$arity$1(G__28950),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.pull_api.visit = (function datascript$pull_api$visit(context,pattern,e,a,v){
var temp__5829__auto__ = context.visitor;
if((temp__5829__auto__ == null)){
return null;
} else {
var visitor = temp__5829__auto__;
return (visitor.cljs$core$IFn$_invoke$arity$4 ? visitor.cljs$core$IFn$_invoke$arity$4(pattern,e,a,v) : visitor.call(null,pattern,e,a,v));
}
});

/**
 * @interface
 */
datascript.pull_api.IFrame = function(){};

var datascript$pull_api$IFrame$_merge$dyn_29402 = (function (this$,result){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (datascript.pull_api._merge[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5498__auto__.call(null,this$,result));
} else {
var m__5496__auto__ = (datascript.pull_api._merge["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__5496__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("IFrame.-merge",this$);
}
}
});
datascript.pull_api._merge = (function datascript$pull_api$_merge(this$,result){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_merge$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_merge$arity$2(this$,result);
} else {
return datascript$pull_api$IFrame$_merge$dyn_29402(this$,result);
}
});

var datascript$pull_api$IFrame$_run$dyn_29403 = (function (this$,context){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (datascript.pull_api._run[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5498__auto__.call(null,this$,context));
} else {
var m__5496__auto__ = (datascript.pull_api._run["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$2(this$,context) : m__5496__auto__.call(null,this$,context));
} else {
throw cljs.core.missing_protocol("IFrame.-run",this$);
}
}
});
datascript.pull_api._run = (function datascript$pull_api$_run(this$,context){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_run$arity$2 == null)))))){
return this$.datascript$pull_api$IFrame$_run$arity$2(this$,context);
} else {
return datascript$pull_api$IFrame$_run$dyn_29403(this$,context);
}
});

var datascript$pull_api$IFrame$_str$dyn_29404 = (function (this$){
var x__5497__auto__ = (((this$ == null))?null:this$);
var m__5498__auto__ = (datascript.pull_api._str[goog.typeOf(x__5497__auto__)]);
if((!((m__5498__auto__ == null)))){
return (m__5498__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5498__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5498__auto__.call(null,this$));
} else {
var m__5496__auto__ = (datascript.pull_api._str["_"]);
if((!((m__5496__auto__ == null)))){
return (m__5496__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5496__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5496__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFrame.-str",this$);
}
}
});
datascript.pull_api._str = (function datascript$pull_api$_str(this$){
if((((!((this$ == null)))) && ((!((this$.datascript$pull_api$IFrame$_str$arity$1 == null)))))){
return this$.datascript$pull_api$IFrame$_str$arity$1(this$);
} else {
return datascript$pull_api$IFrame$_str$dyn_29404(this$);
}
});

datascript.pull_api.attr_str = (function datascript$pull_api$attr_str(attr){
var or__5141__auto__ = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(attr);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(attr);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.ResultFrame = (function (value,datoms,__meta,__extmap,__hash){
this.value = value;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k28985,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__28989 = k28985;
var G__28989__$1 = (((G__28989 instanceof cljs.core.Keyword))?G__28989.fqn:null);
switch (G__28989__$1) {
case "value":
return self__.value;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28985,else__5450__auto__);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__28996){
var vec__28997 = p__28996;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28997,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28997,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.ResultFrame{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28984){
var self__ = this;
var G__28984__$1 = this;
return (new cljs.core.RecordIter((0),G__28984__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (836381841 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28986,other28987){
var self__ = this;
var this28986__$1 = this;
return (((!((other28987 == null)))) && ((((this28986__$1.constructor === other28987.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28986__$1.value,other28987.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28986__$1.datoms,other28987.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28986__$1.__extmap,other28987.__extmap)))))))));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k28985){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29004 = k28985;
var G__29004__$1 = (((G__29004 instanceof cljs.core.Keyword))?G__29004.fqn:null);
switch (G__29004__$1) {
case "value":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k28985);

}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__28984){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29005 = cljs.core.keyword_identical_QMARK_;
var expr__29006 = k__5456__auto__;
if(cljs.core.truth_((pred__29005.cljs$core$IFn$_invoke$arity$2 ? pred__29005.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__29006) : pred__29005.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__29006)))){
return (new datascript.pull_api.ResultFrame(G__28984,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29005.cljs$core$IFn$_invoke$arity$2 ? pred__29005.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29006) : pred__29005.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29006)))){
return (new datascript.pull_api.ResultFrame(self__.value,G__28984,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__28984),null));
}
}
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__28984){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.ResultFrame(self__.value,self__.datoms,G__28984,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ResultFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.ResultFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.ResultFrame.prototype.datascript$pull_api$IFrame$_str$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (""+"ResultFrame<value="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.value)+">");
}));

(datascript.pull_api.ResultFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.ResultFrame.cljs$lang$type = true);

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ResultFrame",null,(1),null));
}));

(datascript.pull_api.ResultFrame.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/ResultFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ResultFrame.
 */
datascript.pull_api.__GT_ResultFrame = (function datascript$pull_api$__GT_ResultFrame(value,datoms){
return (new datascript.pull_api.ResultFrame(value,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ResultFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ResultFrame = (function datascript$pull_api$map__GT_ResultFrame(G__28988){
var extmap__5489__auto__ = (function (){var G__29009 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28988,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__28988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29009);
} else {
return G__29009;
}
})();
return (new datascript.pull_api.ResultFrame(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__28988),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__28988),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalAttrFrame = (function (acc,attr,datoms,__meta,__extmap,__hash){
this.acc = acc;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29019,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29028 = k29019;
var G__29028__$1 = (((G__29028 instanceof cljs.core.Keyword))?G__29028.fqn:null);
switch (G__29028__$1) {
case "acc":
return self__.acc;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29019,else__5450__auto__);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29030){
var vec__29034 = p__29030;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29034,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.MultivalAttrFrame{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29018){
var self__ = this;
var G__29018__$1 = this;
return (new cljs.core.RecordIter((0),G__29018__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1829867699 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29020,other29021){
var self__ = this;
var this29020__$1 = this;
return (((!((other29021 == null)))) && ((((this29020__$1.constructor === other29021.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29020__$1.acc,other29021.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29020__$1.attr,other29021.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29020__$1.datoms,other29021.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29020__$1.__extmap,other29021.__extmap)))))))))));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29019){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29038 = k29019;
var G__29038__$1 = (((G__29038 instanceof cljs.core.Keyword))?G__29038.fqn:null);
switch (G__29038__$1) {
case "acc":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29019);

}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29018){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29040 = cljs.core.keyword_identical_QMARK_;
var expr__29041 = k__5456__auto__;
if(cljs.core.truth_((pred__29040.cljs$core$IFn$_invoke$arity$2 ? pred__29040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__29041) : pred__29040.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__29041)))){
return (new datascript.pull_api.MultivalAttrFrame(G__29018,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29040.cljs$core$IFn$_invoke$arity$2 ? pred__29040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29041) : pred__29040.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29041)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,G__29018,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29040.cljs$core$IFn$_invoke$arity$2 ? pred__29040.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29041) : pred__29040.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29041)))){
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,G__29018,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29018),null));
}
}
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29018){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.MultivalAttrFrame(self__.acc,self__.attr,self__.datoms,G__29018,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var datoms__$1 = self__.datoms;
while(true){
var datom = datascript.pull_api.first_seq(datoms__$1);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1)),(function (){var or__5141__auto__ = datoms__$1;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5139__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5139__auto__)){
return (((cljs.core.count(acc__$1) >= self__.attr.limit)) && (true));
} else {
return and__5139__auto__;
}
})())){
var datoms__$2 = datoms__$1;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$2);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(acc__$1),(function (){var or__5141__auto__ = datoms__$2;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__29423 = datascript.pull_api.next_seq(datoms__$2);
datoms__$2 = G__29423;
continue;
}
break;
}
} else {
var G__29424 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datom.v);
var G__29425 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__29424;
datoms__$1 = G__29425;
continue;

}
}
break;
}
}));

(datascript.pull_api.MultivalAttrFrame.prototype.datascript$pull_api$IFrame$_str$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (""+"MultivalAttrFrame<attr="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.pull_api.attr_str(self__.attr))+">");
}));

(datascript.pull_api.MultivalAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalAttrFrame.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/MultivalAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalAttrFrame.
 */
datascript.pull_api.__GT_MultivalAttrFrame = (function datascript$pull_api$__GT_MultivalAttrFrame(acc,attr,datoms){
return (new datascript.pull_api.MultivalAttrFrame(acc,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalAttrFrame = (function datascript$pull_api$map__GT_MultivalAttrFrame(G__29022){
var extmap__5489__auto__ = (function (){var G__29043 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29022,new cljs.core.Keyword(null,"acc","acc",838566312),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__29022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29043);
} else {
return G__29043;
}
})();
return (new datascript.pull_api.MultivalAttrFrame(new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__29022),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__29022),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__29022),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.MultivalRefAttrFrame = (function (seen,recursion_limits,acc,pattern,attr,datoms,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.datoms = datoms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29050,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29060 = k29050;
var G__29060__$1 = (((G__29060 instanceof cljs.core.Keyword))?G__29060.fqn:null);
switch (G__29060__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "datoms":
return self__.datoms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29050,else__5450__auto__);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29066){
var vec__29067 = p__29066;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29067,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.MultivalRefAttrFrame{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29049){
var self__ = this;
var G__29049__$1 = this;
return (new cljs.core.RecordIter((0),G__29049__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1769511936 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29051,other29052){
var self__ = this;
var this29051__$1 = this;
return (((!((other29052 == null)))) && ((((this29051__$1.constructor === other29052.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.seen,other29052.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.recursion_limits,other29052.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.acc,other29052.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.pattern,other29052.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.attr,other29052.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.datoms,other29052.datoms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29051__$1.__extmap,other29052.__extmap)))))))))))))))));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29050){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29095 = k29050;
var G__29095__$1 = (((G__29095 instanceof cljs.core.Keyword))?G__29095.fqn:null);
switch (G__29095__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "datoms":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29050);

}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29049){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29098 = cljs.core.keyword_identical_QMARK_;
var expr__29099 = k__5456__auto__;
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(G__29049,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,G__29049,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,G__29049,self__.pattern,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,G__29049,self__.attr,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__29049,self__.datoms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29098.cljs$core$IFn$_invoke$arity$2 ? pred__29098.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29099) : pred__29098.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29099)))){
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__29049,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29049),null));
}
}
}
}
}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null))], null),self__.__extmap));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29049){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.datoms,G__29049,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,datascript.pull_api.conj_some_BANG_(self__.acc,result.value),self__.pattern,self__.attr,datascript.pull_api.next_seq(self__.datoms),null,null,null));
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var datom = datascript.pull_api.first_seq(self__.datoms);
if((((datom == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.not_empty(cljs.core.persistent_BANG_(self__.acc)),(function (){var or__5141__auto__ = self__.datoms;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
if(cljs.core.truth_((function (){var and__5139__auto__ = self__.attr.limit;
if(cljs.core.truth_(and__5139__auto__)){
return (((cljs.core.count(self__.acc) >= self__.attr.limit)) && (true));
} else {
return and__5139__auto__;
}
})())){
var datoms__$1 = self__.datoms;
while(true){
var datom__$1 = datascript.pull_api.first_seq(datoms__$1);
if((((datom__$1 == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(datom__$1.a,self__.attr.name)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.persistent_BANG_(self__.acc),(function (){var or__5141__auto__ = datoms__$1;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return cljs.core.List.EMPTY;
}
})(),null,null,null))], null);
} else {
var G__29443 = datascript.pull_api.next_seq(datoms__$1);
datoms__$1 = G__29443;
continue;
}
break;
}
} else {
var id = (cljs.core.truth_(self__.attr.reverse_QMARK_)?datom.e:datom.v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,(datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id) : datascript.pull_api.ref_frame.call(null,context,self__.seen,self__.recursion_limits,self__.pattern,self__.attr,id))], null);

}
}
}));

(datascript.pull_api.MultivalRefAttrFrame.prototype.datascript$pull_api$IFrame$_str$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (""+"MultivalAttrFrame<attr="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.pull_api.attr_str(self__.attr))+">");
}));

(datascript.pull_api.MultivalRefAttrFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null)], null);
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$type = true);

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/MultivalRefAttrFrame",null,(1),null));
}));

(datascript.pull_api.MultivalRefAttrFrame.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/MultivalRefAttrFrame");
}));

/**
 * Positional factory function for datascript.pull-api/MultivalRefAttrFrame.
 */
datascript.pull_api.__GT_MultivalRefAttrFrame = (function datascript$pull_api$__GT_MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms){
return (new datascript.pull_api.MultivalRefAttrFrame(seen,recursion_limits,acc,pattern,attr,datoms,null,null,null));
});

/**
 * Factory function for datascript.pull-api/MultivalRefAttrFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_MultivalRefAttrFrame = (function datascript$pull_api$map__GT_MultivalRefAttrFrame(G__29057){
var extmap__5489__auto__ = (function (){var G__29125 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29057,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"datoms","datoms",-290874434)], 0));
if(cljs.core.record_QMARK_(G__29057)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29125);
} else {
return G__29125;
}
})();
return (new datascript.pull_api.MultivalRefAttrFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__29057),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__29057),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__29057),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29057),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__29057),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__29057),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.AttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.datoms = datoms;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29135,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29143 = k29135;
var G__29143__$1 = (((G__29143 instanceof cljs.core.Keyword))?G__29143.fqn:null);
switch (G__29143__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "datoms":
return self__.datoms;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29135,else__5450__auto__);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29144){
var vec__29145 = p__29144;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29145,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29145,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.AttrsFrame{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29134){
var self__ = this;
var G__29134__$1 = this;
return (new cljs.core.RecordIter((0),G__29134__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (1127179791 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29136,other29137){
var self__ = this;
var this29136__$1 = this;
return (((!((other29137 == null)))) && ((((this29136__$1.constructor === other29137.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.seen,other29137.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.recursion_limits,other29137.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.acc,other29137.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.pattern,other29137.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.attr,other29137.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.attrs,other29137.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.datoms,other29137.datoms)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.id,other29137.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29136__$1.__extmap,other29137.__extmap)))))))))))))))))))));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29135){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29177 = k29135;
var G__29177__$1 = (((G__29177 instanceof cljs.core.Keyword))?G__29177.fqn:null);
switch (G__29177__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "datoms":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29135);

}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29134){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29182 = cljs.core.keyword_identical_QMARK_;
var expr__29183 = k__5456__auto__;
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(G__29134,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,G__29134,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,G__29134,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__29134,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__29134,self__.attrs,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__29134,self__.datoms,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__29134,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29182.cljs$core$IFn$_invoke$arity$2 ? pred__29182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__29183) : pred__29182.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__29183)))){
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,G__29134,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29134),null));
}
}
}
}
}
}
}
}
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"datoms","datoms",-290874434),self__.datoms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29134){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.datoms,self__.id,G__29134,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.AttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,(function (){var G__29193 = result.value;
var fexpr__29192 = self__.attr.xform;
return (fexpr__29192.cljs$core$IFn$_invoke$arity$1 ? fexpr__29192.cljs$core$IFn$_invoke$arity$1(G__29193) : fexpr__29192.call(null,G__29193));
})()),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),cljs.core.not_empty((function (){var or__5141__auto__ = result.datoms;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return datascript.pull_api.next_seq(self__.datoms);
}
})()),self__.id,null,null,null));
}));

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
var datoms__$1 = self__.datoms;
while(true){
if((((datoms__$1 == null)) && ((((attr__$1 == null)) && (true))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29227 = self__.seen;
var G__29228 = self__.recursion_limits;
var G__29229 = acc__$1;
var G__29230 = self__.pattern;
var G__29231 = datascript.pull_api.first_seq(self__.pattern.reverse_attrs);
var G__29232 = datascript.pull_api.next_seq(self__.pattern.reverse_attrs);
var G__29233 = self__.id;
return (datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7 ? datascript.pull_api.__GT_ReverseAttrsFrame.cljs$core$IFn$_invoke$arity$7(G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,G__29233) : datascript.pull_api.__GT_ReverseAttrsFrame.call(null,G__29227,G__29228,G__29229,G__29230,G__29231,G__29232,G__29233));
})()], null);
} else {
if((((!((attr__$1 == null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("db","id","db/id",-1388397098),attr__$1.name)) && (true))))){
var G__29457 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var fexpr__29234 = attr__$1.xform;
return (fexpr__29234.cljs$core$IFn$_invoke$arity$1 ? fexpr__29234.cljs$core$IFn$_invoke$arity$1(self__.id) : fexpr__29234.call(null,self__.id));
})());
var G__29458 = datascript.pull_api.first_seq(attrs__$1);
var G__29459 = datascript.pull_api.next_seq(attrs__$1);
var G__29460 = datoms__$1;
acc__$1 = G__29457;
attr__$1 = G__29458;
attrs__$1 = G__29459;
datoms__$1 = G__29460;
continue;
} else {
var datom = datascript.pull_api.first_seq(datoms__$1);
var cmp = (cljs.core.truth_((function (){var and__5139__auto__ = datom;
if(cljs.core.truth_(and__5139__auto__)){
return attr__$1;
} else {
return and__5139__auto__;
}
})())?cljs.core.compare(attr__$1.name,datom.a):null);
var attr_ahead_QMARK_ = (function (){var or__5141__auto__ = (attr__$1 == null);
if(or__5141__auto__){
return or__5141__auto__;
} else {
var and__5139__auto__ = cmp;
if(cljs.core.truth_(and__5139__auto__)){
return (cmp > (0));
} else {
return and__5139__auto__;
}
}
})();
var datom_ahead_QMARK_ = (function (){var or__5141__auto__ = (datom == null);
if(or__5141__auto__){
return or__5141__auto__;
} else {
var and__5139__auto__ = cmp;
if(cljs.core.truth_(and__5139__auto__)){
return (cmp < (0));
} else {
return and__5139__auto__;
}
}
})();
if(cljs.core.truth_((function (){var and__5139__auto__ = self__.pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = (!((datom == null)));
if(and__5139__auto____$1){
var and__5139__auto____$2 = attr_ahead_QMARK_;
if(cljs.core.truth_(and__5139__auto____$2)){
return true;
} else {
return and__5139__auto____$2;
}
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
var datom_attr = datascript.lru._get(datascript.db.unfiltered_db(context.db).pull_attrs,datom.a,((function (acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1){
return (function (){
return datascript.pull_parser.parse_attr_name(context.db,datom.a);
});})(acc__$1,attr__$1,attrs__$1,datoms__$1,datom,cmp,attr_ahead_QMARK_,datom_ahead_QMARK_,this$__$1))
);
var G__29462 = acc__$1;
var G__29463 = datom_attr;
var G__29464 = (cljs.core.truth_(attr__$1)?datascript.pull_api.conj_seq(attrs__$1,attr__$1):null);
var G__29465 = datoms__$1;
acc__$1 = G__29462;
attr__$1 = G__29463;
attrs__$1 = G__29464;
datoms__$1 = G__29465;
continue;
} else {
if(cljs.core.truth_(attr_ahead_QMARK_)){
var G__29466 = acc__$1;
var G__29467 = attr__$1;
var G__29468 = attrs__$1;
var G__29469 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__29466;
attr__$1 = G__29467;
attrs__$1 = G__29468;
datoms__$1 = G__29469;
continue;
} else {
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","attr","db.pull/attr",-533298746),self__.id,attr__$1.name,null);

if(cljs.core.truth_((function (){var and__5139__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return (((attr__$1 == null)) && (true));
} else {
return and__5139__auto__;
}
})())){
var G__29473 = acc__$1;
var G__29474 = datascript.pull_api.first_seq(attrs__$1);
var G__29475 = datascript.pull_api.next_seq(attrs__$1);
var G__29476 = datoms__$1;
acc__$1 = G__29473;
attr__$1 = G__29474;
attrs__$1 = G__29475;
datoms__$1 = G__29476;
continue;
} else {
if(cljs.core.truth_((function (){var and__5139__auto__ = datom_ahead_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return (((!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)))) && (true));
} else {
return and__5139__auto__;
}
})())){
var G__29481 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__29482 = datascript.pull_api.first_seq(attrs__$1);
var G__29483 = datascript.pull_api.next_seq(attrs__$1);
var G__29484 = datoms__$1;
acc__$1 = G__29481;
attr__$1 = G__29482;
attrs__$1 = G__29483;
datoms__$1 = G__29484;
continue;
} else {
if(cljs.core.truth_(datom_ahead_QMARK_)){
var temp__5827__auto__ = (function (){var fexpr__29240 = attr__$1.xform;
return (fexpr__29240.cljs$core$IFn$_invoke$arity$1 ? fexpr__29240.cljs$core$IFn$_invoke$arity$1(null) : fexpr__29240.call(null,null));
})();
if((temp__5827__auto__ == null)){
var G__29485 = acc__$1;
var G__29486 = datascript.pull_api.first_seq(attrs__$1);
var G__29487 = datascript.pull_api.next_seq(attrs__$1);
var G__29488 = datoms__$1;
acc__$1 = G__29485;
attr__$1 = G__29486;
attrs__$1 = G__29487;
datoms__$1 = G__29488;
continue;
} else {
var value = temp__5827__auto__;
var G__29489 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,value);
var G__29490 = datascript.pull_api.first_seq(attrs__$1);
var G__29491 = datascript.pull_api.next_seq(attrs__$1);
var G__29492 = datoms__$1;
acc__$1 = G__29489;
attr__$1 = G__29490;
attrs__$1 = G__29491;
datoms__$1 = G__29492;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__5139__auto__ = attr__$1.multival_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
var and__5139__auto____$1 = attr__$1.ref_QMARK_;
if(cljs.core.truth_(and__5139__auto____$1)){
return true;
} else {
return and__5139__auto____$1;
}
} else {
return and__5139__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.multival_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalAttrFrame(cljs.core.transient$(cljs.core.PersistentVector.EMPTY),attr__$1,datoms__$1,null,null,null))], null);
} else {
if(cljs.core.truth_(attr__$1.ref_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.AttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,datoms__$1,self__.id,null,null,null)),(function (){var G__29241 = context;
var G__29242 = self__.seen;
var G__29243 = self__.recursion_limits;
var G__29244 = self__.pattern;
var G__29245 = attr__$1;
var G__29246 = datom.v;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__29241,G__29242,G__29243,G__29244,G__29245,G__29246) : datascript.pull_api.ref_frame.call(null,G__29241,G__29242,G__29243,G__29244,G__29245,G__29246));
})()], null);
} else {
var G__29494 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,(function (){var G__29248 = datom.v;
var fexpr__29247 = attr__$1.xform;
return (fexpr__29247.cljs$core$IFn$_invoke$arity$1 ? fexpr__29247.cljs$core$IFn$_invoke$arity$1(G__29248) : fexpr__29247.call(null,G__29248));
})());
var G__29495 = datascript.pull_api.first_seq(attrs__$1);
var G__29496 = datascript.pull_api.next_seq(attrs__$1);
var G__29497 = datascript.pull_api.next_seq(datoms__$1);
acc__$1 = G__29494;
attr__$1 = G__29495;
attrs__$1 = G__29496;
datoms__$1 = G__29497;
continue;

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

(datascript.pull_api.AttrsFrame.prototype.datascript$pull_api$IFrame$_str$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (""+"AttrsFrame<id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)+", attr="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.pull_api.attr_str(self__.attr))+", attrs="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.pull_api.attr_str,self__.attrs)))+">");
}));

(datascript.pull_api.AttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),cljs.core.with_meta(new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullPattern","PullPattern",1378528189,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"datoms","datoms",1349657093,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.AttrsFrame.cljs$lang$type = true);

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/AttrsFrame",null,(1),null));
}));

(datascript.pull_api.AttrsFrame.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/AttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/AttrsFrame.
 */
datascript.pull_api.__GT_AttrsFrame = (function datascript$pull_api$__GT_AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id){
return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,datoms,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/AttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_AttrsFrame = (function datascript$pull_api$map__GT_AttrsFrame(G__29138){
var extmap__5489__auto__ = (function (){var G__29253 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29138,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"datoms","datoms",-290874434),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__29138)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29253);
} else {
return G__29253;
}
})();
return (new datascript.pull_api.AttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"datoms","datoms",-290874434).cljs$core$IFn$_invoke$arity$1(G__29138),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__29138),null,cljs.core.not_empty(extmap__5489__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {datascript.pull_api.IFrame}
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
datascript.pull_api.ReverseAttrsFrame = (function (seen,recursion_limits,acc,pattern,attr,attrs,id,__meta,__extmap,__hash){
this.seen = seen;
this.recursion_limits = recursion_limits;
this.acc = acc;
this.pattern = pattern;
this.attr = attr;
this.attrs = attrs;
this.id = id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5447__auto__,k__5448__auto__){
var self__ = this;
var this__5447__auto____$1 = this;
return this__5447__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5448__auto__,null);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5449__auto__,k29255,else__5450__auto__){
var self__ = this;
var this__5449__auto____$1 = this;
var G__29259 = k29255;
var G__29259__$1 = (((G__29259 instanceof cljs.core.Keyword))?G__29259.fqn:null);
switch (G__29259__$1) {
case "seen":
return self__.seen;

break;
case "recursion-limits":
return self__.recursion_limits;

break;
case "acc":
return self__.acc;

break;
case "pattern":
return self__.pattern;

break;
case "attr":
return self__.attr;

break;
case "attrs":
return self__.attrs;

break;
case "id":
return self__.id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29255,else__5450__auto__);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5467__auto__,f__5468__auto__,init__5469__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5470__auto__,p__29260){
var vec__29261 = p__29260;
var k__5471__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29261,(0),null);
var v__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29261,(1),null);
return (f__5468__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5468__auto__.cljs$core$IFn$_invoke$arity$3(ret__5470__auto__,k__5471__auto__,v__5472__auto__) : f__5468__auto__.call(null,ret__5470__auto__,k__5471__auto__,v__5472__auto__));
}),init__5469__auto__,this__5467__auto____$1);
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5462__auto__,writer__5463__auto__,opts__5464__auto__){
var self__ = this;
var this__5462__auto____$1 = this;
var pr_pair__5465__auto__ = (function (keyval__5466__auto__){
return cljs.core.pr_sequential_writer(writer__5463__auto__,cljs.core.pr_writer,""," ","",opts__5464__auto__,keyval__5466__auto__);
});
return cljs.core.pr_sequential_writer(writer__5463__auto__,pr_pair__5465__auto__,"#datascript.pull-api.ReverseAttrsFrame{",", ","}",opts__5464__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"id","id",-1388402092),self__.id],null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29254){
var self__ = this;
var G__29254__$1 = this;
return (new cljs.core.RecordIter((0),G__29254__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seen","seen",-518999789),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5445__auto__){
var self__ = this;
var this__5445__auto____$1 = this;
return self__.__meta;
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5442__auto__){
var self__ = this;
var this__5442__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5451__auto__){
var self__ = this;
var this__5451__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
var h__5250__auto__ = self__.__hash;
if((!((h__5250__auto__ == null)))){
return h__5250__auto__;
} else {
var h__5250__auto____$1 = (function (coll__5444__auto__){
return (470210558 ^ cljs.core.hash_unordered_coll(coll__5444__auto__));
})(this__5443__auto____$1);
(self__.__hash = h__5250__auto____$1);

return h__5250__auto____$1;
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29256,other29257){
var self__ = this;
var this29256__$1 = this;
return (((!((other29257 == null)))) && ((((this29256__$1.constructor === other29257.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.seen,other29257.seen)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.recursion_limits,other29257.recursion_limits)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.acc,other29257.acc)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.pattern,other29257.pattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.attr,other29257.attr)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.attrs,other29257.attrs)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.id,other29257.id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29256__$1.__extmap,other29257.__extmap)))))))))))))))))));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5457__auto__,k__5458__auto__){
var self__ = this;
var this__5457__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"acc","acc",838566312),null,new cljs.core.Keyword(null,"seen","seen",-518999789),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null,new cljs.core.Keyword(null,"attr","attr",-604132353),null], null), null),k__5458__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5457__auto____$1),self__.__meta),k__5458__auto__);
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5458__auto__)),null));
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5454__auto__,k29255){
var self__ = this;
var this__5454__auto____$1 = this;
var G__29278 = k29255;
var G__29278__$1 = (((G__29278 instanceof cljs.core.Keyword))?G__29278.fqn:null);
switch (G__29278__$1) {
case "seen":
case "recursion-limits":
case "acc":
case "pattern":
case "attr":
case "attrs":
case "id":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29255);

}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5455__auto__,k__5456__auto__,G__29254){
var self__ = this;
var this__5455__auto____$1 = this;
var pred__29279 = cljs.core.keyword_identical_QMARK_;
var expr__29280 = k__5456__auto__;
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"seen","seen",-518999789),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(G__29254,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,G__29254,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"acc","acc",838566312),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"acc","acc",838566312),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,G__29254,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,G__29254,self__.attr,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"attr","attr",-604132353),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,G__29254,self__.attrs,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,G__29254,self__.id,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29279.cljs$core$IFn$_invoke$arity$2 ? pred__29279.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),expr__29280) : pred__29279.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),expr__29280)))){
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,G__29254,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5456__auto__,G__29254),null));
}
}
}
}
}
}
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5460__auto__){
var self__ = this;
var this__5460__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seen","seen",-518999789),self__.seen,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),self__.recursion_limits,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"acc","acc",838566312),self__.acc,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attr","attr",-604132353),self__.attr,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,null))], null),self__.__extmap));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5446__auto__,G__29254){
var self__ = this;
var this__5446__auto____$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,self__.acc,self__.pattern,self__.attr,self__.attrs,self__.id,G__29254,self__.__extmap,self__.__hash));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5452__auto__,entry__5453__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5453__auto__)){
return this__5452__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5453__auto__,(0)),cljs.core._nth(entry__5453__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5452__auto____$1,entry__5453__auto__);
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$ = cljs.core.PROTOCOL_SENTINEL);

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_merge$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
return (new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,datascript.pull_api.assoc_some_BANG_(self__.acc,self__.attr.as,(function (){var G__29287 = result.value;
var fexpr__29286 = self__.attr.xform;
return (fexpr__29286.cljs$core$IFn$_invoke$arity$1 ? fexpr__29286.cljs$core$IFn$_invoke$arity$1(G__29287) : fexpr__29286.call(null,G__29287));
})()),self__.pattern,datascript.pull_api.first_seq(self__.attrs),datascript.pull_api.next_seq(self__.attrs),self__.id,null,null,null));
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_run$arity$2 = (function (this$,context){
var self__ = this;
var this$__$1 = this;
var acc__$1 = self__.acc;
var attr__$1 = self__.attr;
var attrs__$1 = self__.attrs;
while(true){
if((attr__$1 == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ResultFrame(cljs.core.not_empty(cljs.core.persistent_BANG_(acc__$1)),null,null,null,null))], null);
} else {
var name = attr__$1.name;
var db = context.db;
var datoms = (((db instanceof datascript.db.DB))?me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.avet,datascript.db.datom.cljs$core$IFn$_invoke$arity$4((0),name,self__.id,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4((2147483647),name,self__.id,(2147483647))):datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,name,self__.id], null)));
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","reverse","db.pull/reverse",1999788297),null,name,self__.id);

if(((cljs.core.empty_QMARK_(datoms)) && ((((!((new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1) == null)))) && (true))))){
var G__29509 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc__$1,attr__$1.as,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(attr__$1));
var G__29510 = datascript.pull_api.first_seq(attrs__$1);
var G__29511 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__29509;
attr__$1 = G__29510;
attrs__$1 = G__29511;
continue;
} else {
if(cljs.core.empty_QMARK_(datoms)){
var G__29516 = acc__$1;
var G__29517 = datascript.pull_api.first_seq(attrs__$1);
var G__29518 = datascript.pull_api.next_seq(attrs__$1);
acc__$1 = G__29516;
attr__$1 = G__29517;
attrs__$1 = G__29518;
continue;
} else {
if(cljs.core.truth_(attr__$1.component_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(function (){var G__29305 = context;
var G__29306 = self__.seen;
var G__29307 = self__.recursion_limits;
var G__29308 = self__.pattern;
var G__29309 = attr__$1;
var G__29310 = datascript.pull_api.first_seq(datoms).e;
return (datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6 ? datascript.pull_api.ref_frame.cljs$core$IFn$_invoke$arity$6(G__29305,G__29306,G__29307,G__29308,G__29309,G__29310) : datascript.pull_api.ref_frame.call(null,G__29305,G__29306,G__29307,G__29308,G__29309,G__29310));
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.pull_api.ReverseAttrsFrame(self__.seen,self__.recursion_limits,acc__$1,self__.pattern,attr__$1,attrs__$1,self__.id,null,null,null)),(new datascript.pull_api.MultivalRefAttrFrame(self__.seen,self__.recursion_limits,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),self__.pattern,attr__$1,datoms,null,null,null))], null);

}
}
}
}
break;
}
}));

(datascript.pull_api.ReverseAttrsFrame.prototype.datascript$pull_api$IFrame$_str$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (""+"ReverseAttrsFrame<id="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)+", attr="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.pull_api.attr_str(self__.attr))+", attrs="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.pull_api.attr_str,self__.attrs)))+">");
}));

(datascript.pull_api.ReverseAttrsFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seen","seen",1121531738,null),new cljs.core.Symbol(null,"recursion-limits","recursion-limits",-891577955,null),new cljs.core.Symbol(null,"acc","acc",-1815869457,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null),cljs.core.with_meta(new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"PullAttr","PullAttr",1557473458,null)], null)),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"id","id",252129435,null)], null);
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$type = true);

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrSeq = (function (this__5493__auto__){
return (new cljs.core.List(null,"datascript.pull-api/ReverseAttrsFrame",null,(1),null));
}));

(datascript.pull_api.ReverseAttrsFrame.cljs$lang$ctorPrWriter = (function (this__5493__auto__,writer__5494__auto__){
return cljs.core._write(writer__5494__auto__,"datascript.pull-api/ReverseAttrsFrame");
}));

/**
 * Positional factory function for datascript.pull-api/ReverseAttrsFrame.
 */
datascript.pull_api.__GT_ReverseAttrsFrame = (function datascript$pull_api$__GT_ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id){
return (new datascript.pull_api.ReverseAttrsFrame(seen,recursion_limits,acc,pattern,attr,attrs,id,null,null,null));
});

/**
 * Factory function for datascript.pull-api/ReverseAttrsFrame, taking a map of keywords to field values.
 */
datascript.pull_api.map__GT_ReverseAttrsFrame = (function datascript$pull_api$map__GT_ReverseAttrsFrame(G__29258){
var extmap__5489__auto__ = (function (){var G__29324 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29258,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814),new cljs.core.Keyword(null,"acc","acc",838566312),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"id","id",-1388402092)], 0));
if(cljs.core.record_QMARK_(G__29258)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29324);
} else {
return G__29324;
}
})();
return (new datascript.pull_api.ReverseAttrsFrame(new cljs.core.Keyword(null,"seen","seen",-518999789).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"recursion-limits","recursion-limits",1762857814).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"acc","acc",838566312).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__29258),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(G__29258),null,cljs.core.not_empty(extmap__5489__auto__),null));
});

datascript.pull_api.auto_expanding_QMARK_ = (function datascript$pull_api$auto_expanding_QMARK_(attr){
var or__5141__auto__ = attr.recursive_QMARK_;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var and__5139__auto__ = attr.component_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return attr.pattern.wildcard_QMARK_;
} else {
return and__5139__auto__;
}
}
});
datascript.pull_api.ref_frame = (function datascript$pull_api$ref_frame(context,seen,recursion_limits,pattern,attr,id){
if(cljs.core.not(datascript.pull_api.auto_expanding_QMARK_(attr))){
var G__29332 = context;
var G__29333 = seen;
var G__29334 = recursion_limits;
var G__29335 = attr.pattern;
var G__29336 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__29332,G__29333,G__29334,G__29335,G__29336) : datascript.pull_api.attrs_frame.call(null,G__29332,G__29333,G__29334,G__29335,G__29336));
} else {
if(cljs.core.truth_((seen.cljs$core$IFn$_invoke$arity$1 ? seen.cljs$core$IFn$_invoke$arity$1(id) : seen.call(null,id)))){
return (new datascript.pull_api.ResultFrame(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),id], null),null,null,null,null));
} else {
var lim = (recursion_limits.cljs$core$IFn$_invoke$arity$1 ? recursion_limits.cljs$core$IFn$_invoke$arity$1(attr) : recursion_limits.call(null,attr));
if(cljs.core.truth_((function (){var and__5139__auto__ = lim;
if(cljs.core.truth_(and__5139__auto__)){
return (((lim <= (0))) && (true));
} else {
return and__5139__auto__;
}
})())){
return (new datascript.pull_api.ResultFrame(null,null,null,null,null));
} else {
var seen_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,id);
var recursion_limits_SINGLEQUOTE_ = (cljs.core.truth_(lim)?cljs.core.update.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,cljs.core.dec):(cljs.core.truth_(attr.recursion_limit)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(recursion_limits,attr,(attr.recursion_limit - (1))):recursion_limits
));
var G__29340 = context;
var G__29341 = seen_SINGLEQUOTE_;
var G__29342 = recursion_limits_SINGLEQUOTE_;
var G__29343 = (cljs.core.truth_(attr.recursive_QMARK_)?pattern:attr.pattern);
var G__29344 = id;
return (datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5 ? datascript.pull_api.attrs_frame.cljs$core$IFn$_invoke$arity$5(G__29340,G__29341,G__29342,G__29343,G__29344) : datascript.pull_api.attrs_frame.call(null,G__29340,G__29341,G__29342,G__29343,G__29344));

}
}
}
});
datascript.pull_api.attrs_frame = (function datascript$pull_api$attrs_frame(context,seen,recursion_limits,pattern,id){
var db = context.db;
var datoms = (function (){if(cljs.core.truth_((function (){var and__5139__auto__ = pattern.wildcard_QMARK_;
if(cljs.core.truth_(and__5139__auto__)){
return (((db instanceof datascript.db.DB)) && (true));
} else {
return and__5139__auto__;
}
})())){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,null,null,(2147483647)));
} else {
if(cljs.core.truth_(pattern.wildcard_QMARK_)){
return datascript.db._search(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
} else {
if((pattern.first_attr == null)){
return null;
} else {
var from = pattern.first_attr.name;
var to = pattern.last_attr.name;
if((db instanceof datascript.db.DB)){
return me.tonsky.persistent_sorted_set.slice.cljs$core$IFn$_invoke$arity$3(db.eavt,datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,from,null,(536870912)),datascript.db.datom.cljs$core$IFn$_invoke$arity$4(id,to,null,(2147483647)));
} else {
return datascript.db._seek_datoms(db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),id,null,null,null);

}
}
}
}
})();
if(cljs.core.truth_(pattern.wildcard_QMARK_)){
datascript.pull_api.visit(context,new cljs.core.Keyword("db.pull","wildcard","db.pull/wildcard",116316031),id,null,null);
} else {
}

return (new datascript.pull_api.AttrsFrame(seen,recursion_limits,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),pattern,datascript.pull_api.first_seq(pattern.attrs),datascript.pull_api.next_seq(pattern.attrs),datoms,id,null,null,null));
});
datascript.pull_api.pull_impl = (function datascript$pull_api$pull_impl(parsed_opts,id){
var map__29354 = parsed_opts;
var map__29354__$1 = cljs.core.__destructure_map(map__29354);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29354__$1,new cljs.core.Keyword(null,"pattern","pattern",242135423));
var temp__5829__auto__ = datascript.db.entid(context.db,id);
if((temp__5829__auto__ == null)){
return null;
} else {
var eid = temp__5829__auto__;
var stack = (new cljs.core.List(null,datascript.pull_api.attrs_frame(context,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,pattern,eid),null,(1),null));
while(true){
var last = datascript.pull_api.first_seq(stack);
var stack_SINGLEQUOTE_ = datascript.pull_api.next_seq(stack);
if((!((last instanceof datascript.pull_api.ResultFrame)))){
var G__29529 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.pull_api.conj_seq,stack_SINGLEQUOTE_,datascript.pull_api._run(last,context));
stack = G__29529;
continue;
} else {
if((stack_SINGLEQUOTE_ == null)){
return last.value;
} else {
var penultimate = datascript.pull_api.first_seq(stack_SINGLEQUOTE_);
var stack_SINGLEQUOTE__SINGLEQUOTE_ = datascript.pull_api.next_seq(stack_SINGLEQUOTE_);
var G__29534 = datascript.pull_api.conj_seq(stack_SINGLEQUOTE__SINGLEQUOTE_,datascript.pull_api._merge(penultimate,last));
stack = G__29534;
continue;

}
}
break;
}
}
});
datascript.pull_api.parse_opts = (function datascript$pull_api$parse_opts(var_args){
var G__29366 = arguments.length;
switch (G__29366) {
case 2:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$2 = (function (db,pattern){
return datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,null);
}));

(datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,p__29368){
var map__29369 = p__29368;
var map__29369__$1 = cljs.core.__destructure_map(map__29369);
var visitor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29369__$1,new cljs.core.Keyword(null,"visitor","visitor",-1026865865));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",242135423),datascript.lru._get(datascript.db.unfiltered_db(db).pull_patterns,pattern,(function (){
return datascript.pull_parser.parse_pattern(db,pattern);
})),new cljs.core.Keyword(null,"context","context",-830191113),(new datascript.pull_api.Context(db,visitor,null,null,null))], null);
}));

(datascript.pull_api.parse_opts.cljs$lang$maxFixedArity = 3);

/**
 * Supported opts:
 * 
 * :visitor a fn of 4 arguments, will be called for every entity/attribute pull touches
 * 
 * (:db.pull/attr     e   a   nil) - when pulling a normal attribute, no matter if it has value or not
 * (:db.pull/wildcard e   nil nil) - when pulling every attribute on an entity
 * (:db.pull/reverse  nil a   v  ) - when pulling reverse attribute
 */
datascript.pull_api.pull = (function datascript$pull_api$pull(var_args){
var G__29372 = arguments.length;
switch (G__29372) {
case 3:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,id){
return datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4(db,pattern,id,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,id,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return datascript.pull_api.pull_impl(parsed_opts,id);
}));

(datascript.pull_api.pull.cljs$lang$maxFixedArity = 4);

datascript.pull_api.pull_many = (function datascript$pull_api$pull_many(var_args){
var G__29376 = arguments.length;
switch (G__29376) {
case 3:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$3 = (function (db,pattern,ids){
return datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4(db,pattern,ids,cljs.core.PersistentArrayMap.EMPTY);
}));

(datascript.pull_api.pull_many.cljs$core$IFn$_invoke$arity$4 = (function (db,pattern,ids,opts){
if(datascript.db.db_QMARK_(db)){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var parsed_opts = datascript.pull_api.parse_opts.cljs$core$IFn$_invoke$arity$3(db,pattern,opts);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__29374_SHARP_){
return datascript.pull_api.pull_impl(parsed_opts,p1__29374_SHARP_);
}),ids);
}));

(datascript.pull_api.pull_many.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=datascript.pull_api.js.map
