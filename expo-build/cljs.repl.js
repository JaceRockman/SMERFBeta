goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30705){
var map__30706 = p__30705;
var map__30706__$1 = cljs.core.__destructure_map(map__30706);
var m = map__30706__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30706__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30706__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5141__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30710_31049 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30711_31050 = null;
var count__30712_31051 = (0);
var i__30713_31052 = (0);
while(true){
if((i__30713_31052 < count__30712_31051)){
var f_31053 = chunk__30711_31050.cljs$core$IIndexed$_nth$arity$2(null,i__30713_31052);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31053], 0));


var G__31054 = seq__30710_31049;
var G__31055 = chunk__30711_31050;
var G__31056 = count__30712_31051;
var G__31057 = (i__30713_31052 + (1));
seq__30710_31049 = G__31054;
chunk__30711_31050 = G__31055;
count__30712_31051 = G__31056;
i__30713_31052 = G__31057;
continue;
} else {
var temp__5825__auto___31058 = cljs.core.seq(seq__30710_31049);
if(temp__5825__auto___31058){
var seq__30710_31060__$1 = temp__5825__auto___31058;
if(cljs.core.chunked_seq_QMARK_(seq__30710_31060__$1)){
var c__5672__auto___31061 = cljs.core.chunk_first(seq__30710_31060__$1);
var G__31062 = cljs.core.chunk_rest(seq__30710_31060__$1);
var G__31063 = c__5672__auto___31061;
var G__31064 = cljs.core.count(c__5672__auto___31061);
var G__31065 = (0);
seq__30710_31049 = G__31062;
chunk__30711_31050 = G__31063;
count__30712_31051 = G__31064;
i__30713_31052 = G__31065;
continue;
} else {
var f_31066 = cljs.core.first(seq__30710_31060__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31066], 0));


var G__31067 = cljs.core.next(seq__30710_31060__$1);
var G__31068 = null;
var G__31069 = (0);
var G__31070 = (0);
seq__30710_31049 = G__31067;
chunk__30711_31050 = G__31068;
count__30712_31051 = G__31069;
i__30713_31052 = G__31070;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31071 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5141__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31071], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31071)))?cljs.core.second(arglists_31071):arglists_31071)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30782_31087 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30783_31088 = null;
var count__30784_31089 = (0);
var i__30785_31090 = (0);
while(true){
if((i__30785_31090 < count__30784_31089)){
var vec__30854_31091 = chunk__30783_31088.cljs$core$IIndexed$_nth$arity$2(null,i__30785_31090);
var name_31092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30854_31091,(0),null);
var map__30857_31093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30854_31091,(1),null);
var map__30857_31094__$1 = cljs.core.__destructure_map(map__30857_31093);
var doc_31095 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857_31094__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31096 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30857_31094__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31092], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31096], 0));

if(cljs.core.truth_(doc_31095)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31095], 0));
} else {
}


var G__31097 = seq__30782_31087;
var G__31098 = chunk__30783_31088;
var G__31099 = count__30784_31089;
var G__31100 = (i__30785_31090 + (1));
seq__30782_31087 = G__31097;
chunk__30783_31088 = G__31098;
count__30784_31089 = G__31099;
i__30785_31090 = G__31100;
continue;
} else {
var temp__5825__auto___31101 = cljs.core.seq(seq__30782_31087);
if(temp__5825__auto___31101){
var seq__30782_31102__$1 = temp__5825__auto___31101;
if(cljs.core.chunked_seq_QMARK_(seq__30782_31102__$1)){
var c__5672__auto___31103 = cljs.core.chunk_first(seq__30782_31102__$1);
var G__31104 = cljs.core.chunk_rest(seq__30782_31102__$1);
var G__31105 = c__5672__auto___31103;
var G__31106 = cljs.core.count(c__5672__auto___31103);
var G__31107 = (0);
seq__30782_31087 = G__31104;
chunk__30783_31088 = G__31105;
count__30784_31089 = G__31106;
i__30785_31090 = G__31107;
continue;
} else {
var vec__30880_31108 = cljs.core.first(seq__30782_31102__$1);
var name_31109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30880_31108,(0),null);
var map__30883_31110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30880_31108,(1),null);
var map__30883_31111__$1 = cljs.core.__destructure_map(map__30883_31110);
var doc_31112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30883_31111__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30883_31111__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31109], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31113], 0));

if(cljs.core.truth_(doc_31112)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31112], 0));
} else {
}


var G__31114 = cljs.core.next(seq__30782_31102__$1);
var G__31115 = null;
var G__31116 = (0);
var G__31117 = (0);
seq__30782_31087 = G__31114;
chunk__30783_31088 = G__31115;
count__30784_31089 = G__31116;
i__30785_31090 = G__31117;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5825__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5825__auto__)){
var fnspec = temp__5825__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__30910 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30911 = null;
var count__30912 = (0);
var i__30913 = (0);
while(true){
if((i__30913 < count__30912)){
var role = chunk__30911.cljs$core$IIndexed$_nth$arity$2(null,i__30913);
var temp__5825__auto___31118__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___31118__$1)){
var spec_31120 = temp__5825__auto___31118__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_31120)], 0));
} else {
}


var G__31121 = seq__30910;
var G__31122 = chunk__30911;
var G__31123 = count__30912;
var G__31124 = (i__30913 + (1));
seq__30910 = G__31121;
chunk__30911 = G__31122;
count__30912 = G__31123;
i__30913 = G__31124;
continue;
} else {
var temp__5825__auto____$1 = cljs.core.seq(seq__30910);
if(temp__5825__auto____$1){
var seq__30910__$1 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30910__$1)){
var c__5672__auto__ = cljs.core.chunk_first(seq__30910__$1);
var G__31128 = cljs.core.chunk_rest(seq__30910__$1);
var G__31129 = c__5672__auto__;
var G__31130 = cljs.core.count(c__5672__auto__);
var G__31131 = (0);
seq__30910 = G__31128;
chunk__30911 = G__31129;
count__30912 = G__31130;
i__30913 = G__31131;
continue;
} else {
var role = cljs.core.first(seq__30910__$1);
var temp__5825__auto___31132__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5825__auto___31132__$2)){
var spec_31133 = temp__5825__auto___31132__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_31133)], 0));
} else {
}


var G__31134 = cljs.core.next(seq__30910__$1);
var G__31135 = null;
var G__31136 = (0);
var G__31137 = (0);
seq__30910 = G__31134;
chunk__30911 = G__31135;
count__30912 = G__31136;
i__30913 = G__31137;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30952 = datafied_throwable;
var map__30952__$1 = cljs.core.__destructure_map(map__30952);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30952__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30952__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30952__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30953 = cljs.core.last(via);
var map__30953__$1 = cljs.core.__destructure_map(map__30953);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30953__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30954 = data;
var map__30954__$1 = cljs.core.__destructure_map(map__30954);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30954__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30956 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__30956__$1 = cljs.core.__destructure_map(map__30956);
var top_data = map__30956__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30956__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__30960 = phase;
var G__30960__$1 = (((G__30960 instanceof cljs.core.Keyword))?G__30960.fqn:null);
switch (G__30960__$1) {
case "read-source":
var map__30966 = data;
var map__30966__$1 = cljs.core.__destructure_map(map__30966);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30966__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30966__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30967 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__30967__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30967,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30967);
var G__30967__$2 = (cljs.core.truth_((function (){var fexpr__30969 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30969.cljs$core$IFn$_invoke$arity$1 ? fexpr__30969.cljs$core$IFn$_invoke$arity$1(source) : fexpr__30969.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30967__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30967__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30967__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30967__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30970 = top_data;
var G__30970__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30970,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30970);
var G__30970__$2 = (cljs.core.truth_((function (){var fexpr__30972 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30972.cljs$core$IFn$_invoke$arity$1 ? fexpr__30972.cljs$core$IFn$_invoke$arity$1(source) : fexpr__30972.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30970__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30970__$1);
var G__30970__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30970__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30970__$2);
var G__30970__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30970__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30970__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30970__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30970__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30973 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30973,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30973,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30973,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30973,(3),null);
var G__30976 = top_data;
var G__30976__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30976,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30976);
var G__30976__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30976__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30976__$1);
var G__30976__$3 = (cljs.core.truth_((function (){var and__5139__auto__ = source__$1;
if(cljs.core.truth_(and__5139__auto__)){
return method;
} else {
return and__5139__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30976__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30976__$2);
var G__30976__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30976__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30976__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30976__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30976__$4;
}

break;
case "execution":
var vec__30979 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30979,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30943_SHARP_){
var or__5141__auto__ = (p1__30943_SHARP_ == null);
if(or__5141__auto__){
return or__5141__auto__;
} else {
var fexpr__30982 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30982.cljs$core$IFn$_invoke$arity$1 ? fexpr__30982.cljs$core$IFn$_invoke$arity$1(p1__30943_SHARP_) : fexpr__30982.call(null,p1__30943_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5141__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return line;
}
})();
var G__30983 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30983__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30983,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30983);
var G__30983__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30983__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30983__$1);
var G__30983__$3 = (cljs.core.truth_((function (){var or__5141__auto__ = fn;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
var and__5139__auto__ = source__$1;
if(cljs.core.truth_(and__5139__auto__)){
return method;
} else {
return and__5139__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30983__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5141__auto__ = fn;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30983__$2);
var G__30983__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30983__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30983__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30983__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30983__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30960__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30988){
var map__30990 = p__30988;
var map__30990__$1 = cljs.core.__destructure_map(map__30990);
var triage_data = map__30990__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30990__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5141__auto__ = source;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5141__auto__ = line;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5141__auto__ = class$;
if(cljs.core.truth_(or__5141__auto__)){
return or__5141__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__30994 = phase;
var G__30994__$1 = (((G__30994 instanceof cljs.core.Keyword))?G__30994.fqn:null);
switch (G__30994__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__30995 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__30996 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__30997 = loc;
var G__30998 = (cljs.core.truth_(spec)?(function (){var sb__5794__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30999_31146 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31000_31147 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31001_31148 = true;
var _STAR_print_fn_STAR__temp_val__31002_31149 = (function (x__5795__auto__){
return sb__5794__auto__.append(x__5795__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31001_31148);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31002_31149);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30984_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30984_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31000_31147);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30999_31146);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5794__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__30995,G__30996,G__30997,G__30998) : format.call(null,G__30995,G__30996,G__30997,G__30998));

break;
case "macroexpansion":
var G__31009 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31010 = cause_type;
var G__31011 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__31012 = loc;
var G__31013 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31009,G__31010,G__31011,G__31012,G__31013) : format.call(null,G__31009,G__31010,G__31011,G__31012,G__31013));

break;
case "compile-syntax-check":
var G__31015 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31016 = cause_type;
var G__31017 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__31018 = loc;
var G__31019 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31015,G__31016,G__31017,G__31018,G__31019) : format.call(null,G__31015,G__31016,G__31017,G__31018,G__31019));

break;
case "compilation":
var G__31020 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31021 = cause_type;
var G__31022 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__31023 = loc;
var G__31024 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31020,G__31021,G__31022,G__31023,G__31024) : format.call(null,G__31020,G__31021,G__31022,G__31023,G__31024));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31028 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31029 = symbol;
var G__31030 = loc;
var G__31031 = (function (){var sb__5794__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31032_31157 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31033_31158 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31034_31159 = true;
var _STAR_print_fn_STAR__temp_val__31035_31160 = (function (x__5795__auto__){
return sb__5794__auto__.append(x__5795__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31034_31159);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31035_31160);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30985_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30985_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31033_31158);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31032_31157);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5794__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31028,G__31029,G__31030,G__31031) : format.call(null,G__31028,G__31029,G__31030,G__31031));
} else {
var G__31036 = "Execution error%s at %s(%s).\n%s\n";
var G__31037 = cause_type;
var G__31038 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__31039 = loc;
var G__31040 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31036,G__31037,G__31038,G__31039,G__31040) : format.call(null,G__31036,G__31037,G__31038,G__31039,G__31040));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30994__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
