goog.provide('entities.views_library');
entities.views_library.no_page = (function entities$views_library$no_page(conn,props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Page not Found"], null)], null);
});
entities.views_library.account = (function entities$views_library$account(conn,props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Account Stuff"], null)], null);
});
entities.views_library.asset_library = (function entities$views_library$asset_library(conn,props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Text,"Asset Library"], null)], null);
});
entities.views_library.campaign = (function entities$views_library$campaign(conn,props){
return entities.campaigns.views.campaign(conn,props);
});
entities.views_library.realm = (function entities$views_library$realm(conn,props){
return entities.realms.views.realm(conn,props);
});
entities.views_library.rules = (function entities$views_library$rules(conn,props){
return entities.rulesets.views.rules(conn,props);
});
entities.views_library.creatures = (function entities$views_library$creatures(conn,props){
return entities.creatures.views.main.creatures_page(conn,props);
});
entities.views_library.resources = (function entities$views_library$resources(conn,props){
return entities.resources.views.resources(conn,props);
});
entities.views_library.actions = (function entities$views_library$actions(conn,props){
return entities.actions.views.actions(conn,props);
});

//# sourceMappingURL=entities.views_library.js.map
