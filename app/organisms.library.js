goog.provide('organisms.library');
organisms.library.out_button = (function organisms$library$out_button(conn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return systems.navigation.nav_out(conn);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"arrow-up","arrow-up",-1363214427),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
organisms.library.back_button = (function organisms$library$back_button(conn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5%"], null),new cljs.core.Keyword(null,"on-press","on-press",-1763585856),(function (){
return systems.navigation.nav_back(conn);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"chevron-left","chevron-left",528468611),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)], null)], null);
});
organisms.library.settings_button = (function organisms$library$settings_button(conn){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.Pressable,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"5%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$$expo$vector_icons.FontAwesome5,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"ellipsis-v","ellipsis-v",709951088),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"size","size",1098693007),(18)], null)], null)], null);
});
organisms.library.view_frame_header = (function organisms$library$view_frame_header(conn){
var title = systems.navigation.get_current_nav_state_title(conn);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"5%",new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null),organisms.library.back_button(conn),organisms.library.out_button(conn),organisms.atoms.text.view_header_text(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),title,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"90%",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette))], null)], null)),organisms.library.settings_button(conn)], null);
});
organisms.library.view_frame = (function organisms$library$view_frame(conn,content,key){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),organisms.config.screen_width(),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"surface-100","surface-100",-1361962417).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"surface-700","surface-700",-856999488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(organisms.config.palette)),new cljs.core.Keyword(null,"height","height",1025178622),organisms.config.screen_height()], null)], null),organisms.library.view_frame_header(conn),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),shadow.js.shim.module$react_native.View,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"90%",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),content], null),organisms.compounds.tab_bar.tab_bar(conn),organisms.environments.modals.modal()], null);
});
organisms.library.modal_content = organisms.environments.modals.modal_content;
organisms.library.hide_modal_content = organisms.environments.modals.hide_modal_content;
organisms.library.show_modal_content = organisms.environments.modals.show_modal_content;
organisms.library.button = organisms.atoms.buttons.button;
organisms.library.primary_button = organisms.atoms.buttons.primary_button;
organisms.library.secondary_button = organisms.atoms.buttons.secondary_button;
organisms.library.tertiary_button = organisms.atoms.buttons.tertiary_button;
organisms.library.default_text = organisms.atoms.text.default_text;
organisms.library.inverted_text = organisms.atoms.text.inverted_text;
organisms.library.view_header_text = organisms.atoms.text.view_header_text;
organisms.library.default_text_input = organisms.atoms.text_input.default_text_input;
organisms.library.text_input_map = organisms.atoms.text_input.text_input_map;
organisms.library.default_markdown = organisms.atoms.markdown.default_markdown;
organisms.library.default_realm_markdown = organisms.atoms.markdown.default_realm_markdown;
organisms.library.flat_list = organisms.molecules.lists.FlatList;
organisms.library.section_list = organisms.molecules.lists.SectionList;
organisms.library.search_filter_sort_list = organisms.compounds.search_filter_sort_list.search_filter_sort_list;
organisms.library.decrementor_and_incrementor = organisms.molecules.decrementor_incrementor.decrementor_and_incrementor;
organisms.library.scroll_position_indicator = organisms.molecules.scroll_position_indicator.scroll_position_indicator;
organisms.library.ruleset_horizontal_position = organisms.molecules.scroll_position_indicator.ruleset_horizontal_position;
organisms.library.creature_horizontal_position = organisms.molecules.scroll_position_indicator.creature_horizontal_position;
organisms.library.roll_horizontal_position = organisms.molecules.scroll_position_indicator.roll_horizontal_position;
organisms.library.indicated_scroll_view = organisms.molecules.scroll_position_indicator.indicated_scroll_view;
organisms.library.search_bar = organisms.molecules.search_bar.search_bar;

//# sourceMappingURL=organisms.library.js.map
