goog.provide('organisms.atoms.text_input');
organisms.atoms.text_input.text_input_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
organisms.atoms.text_input.text_input_error_map = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
organisms.atoms.text_input.default_text_input = (function organisms$atoms$text_input$default_text_input(var_args){
var G__34712 = arguments.length;
switch (G__34712) {
case 2:
return organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$2 = (function (label,key){
return organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$3(label,key,null);
}));

(organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$3 = (function (label,key,preds){
var text_input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.atoms.text_input.text_input_map),key);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(organisms.atoms.text_input.text_input_error_map),key);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"gap","gap",80255254),(5)], null)], null),((cljs.core.coll_QMARK_(label))?label:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.TextInput,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),text_input,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"enter-key-hint","enter-key-hint",702006351),key,new cljs.core.Keyword(null,"on-change-text","on-change-text",557439860),(function (text){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.atoms.text_input.text_input_error_map,(function (error_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error_map,key,cljs.core.not((preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(text) : preds.call(null,text))));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.atoms.text_input.text_input_map,(function (text_input_map){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(text_input_map,key,text);
}));
})], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"red","red",-969428204)], null)], null),"invalid input"], null):null)], null);
}));

(organisms.atoms.text_input.default_text_input.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=organisms.atoms.text_input.js.map
