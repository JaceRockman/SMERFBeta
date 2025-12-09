goog.provide('organisms.config');
organisms.config.screen_height = (function organisms$config$screen_height(){
return screen.height;
});
organisms.config.screen_width = (function organisms$config$screen_width(){
return screen.width;
});
organisms.config.dark_palette = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"surface-700","surface-700",-856999488),new cljs.core.Keyword(null,"primary-400","primary-400",1657503424),new cljs.core.Keyword(null,"surface-400","surface-400",1674133347),new cljs.core.Keyword(null,"primary-000","primary-000",-1788925532),new cljs.core.Keyword(null,"surface-600","surface-600",896719945),new cljs.core.Keyword(null,"primary-500","primary-500",1802169803),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417),new cljs.core.Keyword(null,"surface-500","surface-500",-1315752688),new cljs.core.Keyword(null,"primary-100","primary-100",-1658947400),new cljs.core.Keyword(null,"primary-600","primary-600",-257776231),new cljs.core.Keyword(null,"surface-300","surface-300",1446402300),new cljs.core.Keyword(null,"surface-200","surface-200",-1840287363),new cljs.core.Keyword(null,"primary-300","primary-300",-1334808354),new cljs.core.Keyword(null,"primary-200","primary-200",388530047)],["#eeeeee","#9d79d0","#4e4e4e","#000000","#858585","#ae8fd8","#000000","#696969","#673ab7","#bfa5e0","#353535","#1e1e1e","#8c64c8","#7a4fbf"]);
organisms.config.light_palette = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"surface-700","surface-700",-856999488),"#000000",new cljs.core.Keyword(null,"surface-600","surface-600",896719945),"#1e1e1e",new cljs.core.Keyword(null,"surface-500","surface-500",-1315752688),"#353535",new cljs.core.Keyword(null,"surface-400","surface-400",1674133347),"#4e4e4e",new cljs.core.Keyword(null,"surface-300","surface-300",1446402300),"#696969",new cljs.core.Keyword(null,"surface-200","surface-200",-1840287363),"#858585",new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417),"#eeeeee"], null);
organisms.config.palette = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(organisms.config.dark_palette);

//# sourceMappingURL=organisms.config.js.map
