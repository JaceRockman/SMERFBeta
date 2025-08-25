goog.provide('organisms.environments.modals');
organisms.environments.modals.modal_content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
organisms.environments.modals.hide_modal_content = (function organisms$environments$modals$hide_modal_content(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.environments.modals.modal_content,(function (content){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"display?","display?",-1189123617),false);
}));
});
organisms.environments.modals.show_modal_content = (function organisms$environments$modals$show_modal_content(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(organisms.environments.modals.modal_content,(function (content){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(content,new cljs.core.Keyword(null,"display?","display?",-1189123617),true);
}));
});
organisms.environments.modals.example_schema = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","number","example/number",2122130080),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","long","db.type/long",700514073),new cljs.core.Keyword("db.attr","preds","db.attr/preds",1528185167),(function (p1__39251_SHARP_){
return ((cljs.core.int_QMARK_((p1__39251_SHARP_ | (0)))) && (((((0) < (p1__39251_SHARP_ | (0)))) && (((p1__39251_SHARP_ | (0)) < (5))))));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","string","example/string",-129036216),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","string","db.type/string",1432572808),new cljs.core.Keyword("db.attr","preds","db.attr/preds",1528185167),(function (p1__39252_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("asdf",p1__39252_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","boolean","example/boolean",1019416322),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","boolean","db.type/boolean",-645454270)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("example","ref","example/ref",-37792023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null)], null);
organisms.environments.modals.new_item_modal = (function organisms$environments$modals$new_item_modal(schema){
var new_item_modal_content = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39261){
var vec__39262 = p__39261;
var schema_element_title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39262,(0),null);
var schema_element = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39262,(1),null);
var G__39268 = new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(schema_element);
var G__39268__$1 = (((G__39268 instanceof cljs.core.Keyword))?G__39268.fqn:null);
switch (G__39268__$1) {
case "db.type/long":
return organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$3(schema_element_title,schema_element_title,new cljs.core.Keyword("db.attr","preds","db.attr/preds",1528185167).cljs$core$IFn$_invoke$arity$1(schema_element));

break;
case "db.type/string":
return organisms.atoms.text_input.default_text_input.cljs$core$IFn$_invoke$arity$3(schema_element_title,schema_element_title,new cljs.core.Keyword("db.attr","preds","db.attr/preds",1528185167).cljs$core$IFn$_invoke$arity$1(schema_element));

break;
case "db.type/boolean":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Toggle!"], null);

break;
case "db.type/ref":
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),"Ref!"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39268__$1)].join('')));

}
}),schema));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View], null),new_item_modal_content));
});
organisms.environments.modals.example_new_item_modal = (function organisms$environments$modals$example_new_item_modal(){
return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),organisms.environments.modals.new_item_modal,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [organisms.environments.modals.example_schema], null),new cljs.core.Keyword(null,"display?","display?",-1189123617),true], null));
});
organisms.environments.modals.modal = (function organisms$environments$modals$modal(){
if(cljs.core.truth_(new cljs.core.Keyword(null,"display?","display?",-1189123617).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)))){
var content = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)));
var save_button = (cljs.core.truth_(new cljs.core.Keyword(null,"save-fn","save-fn",383840986).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-fn","save-fn",383840986).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)),new cljs.core.Keyword(null,"save-args","save-args",1563115312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content))):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.6)",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"flex-end","flex-end",297207970)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(100),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)))){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)),new cljs.core.Keyword(null,"close-args","close-args",-1655947613).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.environments.modals.modal_content)));
} else {
}

return cljs.core.reset_BANG_(organisms.environments.modals.modal_content,null);
})], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"border-width","border-width",-1512605390),(2),new cljs.core.Keyword(null,"border-color","border-color",-2059162761),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80%"], null)], null),content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"right","right",-452581833),(5),new cljs.core.Keyword(null,"top","top",-1856271961),(5)], null)], null),save_button], null)], null)], null);
} else {
return null;
}
});

//# sourceMappingURL=organisms.environments.modals.js.map
