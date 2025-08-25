goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__33718){
var map__33719 = p__33718;
var map__33719__$1 = cljs.core.__destructure_map(map__33719);
var m = map__33719__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33719__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__33722_33860 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33723_33861 = null;
var count__33724_33862 = (0);
var i__33725_33863 = (0);
while(true){
if((i__33725_33863 < count__33724_33862)){
var f_33864 = chunk__33723_33861.cljs$core$IIndexed$_nth$arity$2(null,i__33725_33863);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33864], 0));


var G__33865 = seq__33722_33860;
var G__33866 = chunk__33723_33861;
var G__33867 = count__33724_33862;
var G__33868 = (i__33725_33863 + (1));
seq__33722_33860 = G__33865;
chunk__33723_33861 = G__33866;
count__33724_33862 = G__33867;
i__33725_33863 = G__33868;
continue;
} else {
var temp__5804__auto___33869 = cljs.core.seq(seq__33722_33860);
if(temp__5804__auto___33869){
var seq__33722_33870__$1 = temp__5804__auto___33869;
if(cljs.core.chunked_seq_QMARK_(seq__33722_33870__$1)){
var c__5568__auto___33871 = cljs.core.chunk_first(seq__33722_33870__$1);
var G__33873 = cljs.core.chunk_rest(seq__33722_33870__$1);
var G__33874 = c__5568__auto___33871;
var G__33875 = cljs.core.count(c__5568__auto___33871);
var G__33876 = (0);
seq__33722_33860 = G__33873;
chunk__33723_33861 = G__33874;
count__33724_33862 = G__33875;
i__33725_33863 = G__33876;
continue;
} else {
var f_33877 = cljs.core.first(seq__33722_33870__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_33877], 0));


var G__33878 = cljs.core.next(seq__33722_33870__$1);
var G__33879 = null;
var G__33880 = (0);
var G__33881 = (0);
seq__33722_33860 = G__33878;
chunk__33723_33861 = G__33879;
count__33724_33862 = G__33880;
i__33725_33863 = G__33881;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_33882 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_33882], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_33882)))?cljs.core.second(arglists_33882):arglists_33882)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
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
var seq__33735_33883 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__33736_33884 = null;
var count__33737_33885 = (0);
var i__33738_33886 = (0);
while(true){
if((i__33738_33886 < count__33737_33885)){
var vec__33753_33887 = chunk__33736_33884.cljs$core$IIndexed$_nth$arity$2(null,i__33738_33886);
var name_33888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753_33887,(0),null);
var map__33756_33889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33753_33887,(1),null);
var map__33756_33890__$1 = cljs.core.__destructure_map(map__33756_33889);
var doc_33891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33756_33890__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33756_33890__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33888], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33892], 0));

if(cljs.core.truth_(doc_33891)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33891], 0));
} else {
}


var G__33895 = seq__33735_33883;
var G__33896 = chunk__33736_33884;
var G__33897 = count__33737_33885;
var G__33898 = (i__33738_33886 + (1));
seq__33735_33883 = G__33895;
chunk__33736_33884 = G__33896;
count__33737_33885 = G__33897;
i__33738_33886 = G__33898;
continue;
} else {
var temp__5804__auto___33899 = cljs.core.seq(seq__33735_33883);
if(temp__5804__auto___33899){
var seq__33735_33900__$1 = temp__5804__auto___33899;
if(cljs.core.chunked_seq_QMARK_(seq__33735_33900__$1)){
var c__5568__auto___33901 = cljs.core.chunk_first(seq__33735_33900__$1);
var G__33902 = cljs.core.chunk_rest(seq__33735_33900__$1);
var G__33903 = c__5568__auto___33901;
var G__33904 = cljs.core.count(c__5568__auto___33901);
var G__33905 = (0);
seq__33735_33883 = G__33902;
chunk__33736_33884 = G__33903;
count__33737_33885 = G__33904;
i__33738_33886 = G__33905;
continue;
} else {
var vec__33757_33906 = cljs.core.first(seq__33735_33900__$1);
var name_33907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_33906,(0),null);
var map__33760_33908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33757_33906,(1),null);
var map__33760_33909__$1 = cljs.core.__destructure_map(map__33760_33908);
var doc_33910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33760_33909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_33911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33760_33909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_33907], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_33911], 0));

if(cljs.core.truth_(doc_33910)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_33910], 0));
} else {
}


var G__33912 = cljs.core.next(seq__33735_33900__$1);
var G__33913 = null;
var G__33914 = (0);
var G__33915 = (0);
seq__33735_33883 = G__33912;
chunk__33736_33884 = G__33913;
count__33737_33885 = G__33914;
i__33738_33886 = G__33915;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__33762 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__33763 = null;
var count__33764 = (0);
var i__33765 = (0);
while(true){
if((i__33765 < count__33764)){
var role = chunk__33763.cljs$core$IIndexed$_nth$arity$2(null,i__33765);
var temp__5804__auto___33917__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___33917__$1)){
var spec_33918 = temp__5804__auto___33917__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33918)], 0));
} else {
}


var G__33919 = seq__33762;
var G__33920 = chunk__33763;
var G__33921 = count__33764;
var G__33922 = (i__33765 + (1));
seq__33762 = G__33919;
chunk__33763 = G__33920;
count__33764 = G__33921;
i__33765 = G__33922;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__33762);
if(temp__5804__auto____$1){
var seq__33762__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__33762__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33762__$1);
var G__33923 = cljs.core.chunk_rest(seq__33762__$1);
var G__33924 = c__5568__auto__;
var G__33925 = cljs.core.count(c__5568__auto__);
var G__33926 = (0);
seq__33762 = G__33923;
chunk__33763 = G__33924;
count__33764 = G__33925;
i__33765 = G__33926;
continue;
} else {
var role = cljs.core.first(seq__33762__$1);
var temp__5804__auto___33927__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___33927__$2)){
var spec_33928 = temp__5804__auto___33927__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_33928)], 0));
} else {
}


var G__33929 = cljs.core.next(seq__33762__$1);
var G__33930 = null;
var G__33931 = (0);
var G__33932 = (0);
seq__33762 = G__33929;
chunk__33763 = G__33930;
count__33764 = G__33931;
i__33765 = G__33932;
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
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__33934 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__33935 = cljs.core.ex_cause(t);
via = G__33934;
t = G__33935;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
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
var map__33771 = datafied_throwable;
var map__33771__$1 = cljs.core.__destructure_map(map__33771);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33771__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33771__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33771__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__33772 = cljs.core.last(via);
var map__33772__$1 = cljs.core.__destructure_map(map__33772);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33772__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33772__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33772__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__33773 = data;
var map__33773__$1 = cljs.core.__destructure_map(map__33773);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33773__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__33774 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__33774__$1 = cljs.core.__destructure_map(map__33774);
var top_data = map__33774__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33774__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__33778 = phase;
var G__33778__$1 = (((G__33778 instanceof cljs.core.Keyword))?G__33778.fqn:null);
switch (G__33778__$1) {
case "read-source":
var map__33779 = data;
var map__33779__$1 = cljs.core.__destructure_map(map__33779);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33779__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33779__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__33780 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__33780__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33780,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33780);
var G__33780__$2 = (cljs.core.truth_((function (){var fexpr__33786 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33786.cljs$core$IFn$_invoke$arity$1 ? fexpr__33786.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33786.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33780__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33780__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33780__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33780__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__33787 = top_data;
var G__33787__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33787,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__33787);
var G__33787__$2 = (cljs.core.truth_((function (){var fexpr__33788 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33788.cljs$core$IFn$_invoke$arity$1 ? fexpr__33788.cljs$core$IFn$_invoke$arity$1(source) : fexpr__33788.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__33787__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__33787__$1);
var G__33787__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33787__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33787__$2);
var G__33787__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33787__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33787__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33787__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33787__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__33789 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33789,(3),null);
var G__33792 = top_data;
var G__33792__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33792,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__33792);
var G__33792__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33792__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__33792__$1);
var G__33792__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33792__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__33792__$2);
var G__33792__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33792__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__33792__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33792__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__33792__$4;
}

break;
case "execution":
var vec__33793 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33793,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33793,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33793,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33793,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__33770_SHARP_){
var or__5045__auto__ = (p1__33770_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__33796 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__33796.cljs$core$IFn$_invoke$arity$1 ? fexpr__33796.cljs$core$IFn$_invoke$arity$1(p1__33770_SHARP_) : fexpr__33796.call(null,p1__33770_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__33801 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__33801__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33801,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__33801);
var G__33801__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33801__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__33801__$1);
var G__33801__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33801__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__33801__$2);
var G__33801__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33801__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__33801__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33801__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__33801__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33778__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__33807){
var map__33808 = p__33807;
var map__33808__$1 = cljs.core.__destructure_map(map__33808);
var triage_data = map__33808__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33808__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__33810 = phase;
var G__33810__$1 = (((G__33810 instanceof cljs.core.Keyword))?G__33810.fqn:null);
switch (G__33810__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__33811 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__33812 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33813 = loc;
var G__33814 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33817_33958 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33818_33959 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33819_33960 = true;
var _STAR_print_fn_STAR__temp_val__33820_33961 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33819_33960);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33820_33961);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33804_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33804_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33818_33959);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33817_33958);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33811,G__33812,G__33813,G__33814) : format.call(null,G__33811,G__33812,G__33813,G__33814));

break;
case "macroexpansion":
var G__33823 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__33824 = cause_type;
var G__33825 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33826 = loc;
var G__33827 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33823,G__33824,G__33825,G__33826,G__33827) : format.call(null,G__33823,G__33824,G__33825,G__33826,G__33827));

break;
case "compile-syntax-check":
var G__33828 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__33829 = cause_type;
var G__33830 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33831 = loc;
var G__33832 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33828,G__33829,G__33830,G__33831,G__33832) : format.call(null,G__33828,G__33829,G__33830,G__33831,G__33832));

break;
case "compilation":
var G__33833 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__33834 = cause_type;
var G__33835 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33836 = loc;
var G__33837 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33833,G__33834,G__33835,G__33836,G__33837) : format.call(null,G__33833,G__33834,G__33835,G__33836,G__33837));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__33839 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__33840 = symbol;
var G__33841 = loc;
var G__33842 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__33843_33970 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__33844_33971 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__33845_33972 = true;
var _STAR_print_fn_STAR__temp_val__33846_33973 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__33845_33972);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__33846_33973);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33805_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__33805_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__33844_33971);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__33843_33970);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__33839,G__33840,G__33841,G__33842) : format.call(null,G__33839,G__33840,G__33841,G__33842));
} else {
var G__33849 = "Execution error%s at %s(%s).\n%s\n";
var G__33850 = cause_type;
var G__33851 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__33852 = loc;
var G__33853 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__33849,G__33850,G__33851,G__33852,G__33853) : format.call(null,G__33849,G__33850,G__33851,G__33852,G__33853));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33810__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
