(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2733:function(module,exports,__webpack_require__){__webpack_require__(1122),__webpack_require__(1123),__webpack_require__(1124),__webpack_require__(1125),__webpack_require__(1126),__webpack_require__(1127),__webpack_require__(1128),__webpack_require__(1129),__webpack_require__(1130),__webpack_require__(1131),__webpack_require__(1132),__webpack_require__(1133),__webpack_require__(1134),__webpack_require__(1135),__webpack_require__(1136),__webpack_require__(1137),__webpack_require__(1138),__webpack_require__(1139),__webpack_require__(1140),__webpack_require__(1141),__webpack_require__(1142),__webpack_require__(1143),__webpack_require__(1144),__webpack_require__(1145),__webpack_require__(1146),__webpack_require__(1147),__webpack_require__(1148),__webpack_require__(1149),__webpack_require__(1150),__webpack_require__(1151),__webpack_require__(1152),__webpack_require__(1153),__webpack_require__(1154),__webpack_require__(1155),__webpack_require__(1156),__webpack_require__(1157),__webpack_require__(1158),__webpack_require__(1159),__webpack_require__(1160),__webpack_require__(1161),__webpack_require__(1162),__webpack_require__(1163),__webpack_require__(1164),__webpack_require__(1165),__webpack_require__(1166),__webpack_require__(1167),__webpack_require__(1168),__webpack_require__(1169),__webpack_require__(1170),__webpack_require__(1171),__webpack_require__(1172),__webpack_require__(1173),__webpack_require__(1174),__webpack_require__(1175),__webpack_require__(1176),__webpack_require__(1177),__webpack_require__(1178),__webpack_require__(1179),__webpack_require__(1180),__webpack_require__(1181),__webpack_require__(1182),__webpack_require__(1183),__webpack_require__(1184),__webpack_require__(1185),__webpack_require__(1186),__webpack_require__(1187),__webpack_require__(1188),__webpack_require__(1189),__webpack_require__(1190),__webpack_require__(1191),__webpack_require__(1192),__webpack_require__(1193),__webpack_require__(1194),__webpack_require__(1195),__webpack_require__(1196),__webpack_require__(1197),__webpack_require__(1198),__webpack_require__(1199),__webpack_require__(1200),__webpack_require__(1201),__webpack_require__(1202),__webpack_require__(1203),__webpack_require__(1204),__webpack_require__(1205),__webpack_require__(1206),__webpack_require__(1207),__webpack_require__(1208),__webpack_require__(1209),__webpack_require__(1210),__webpack_require__(1211),__webpack_require__(1212),__webpack_require__(1213),__webpack_require__(1214),__webpack_require__(1215),__webpack_require__(1216),__webpack_require__(1217),__webpack_require__(1218),__webpack_require__(1219),__webpack_require__(1220),__webpack_require__(446),__webpack_require__(1221),__webpack_require__(649),__webpack_require__(1222),__webpack_require__(650),__webpack_require__(1223),__webpack_require__(1224),__webpack_require__(1225),__webpack_require__(1226),__webpack_require__(1227),__webpack_require__(651),__webpack_require__(652),__webpack_require__(653),__webpack_require__(1228),__webpack_require__(1229),__webpack_require__(1230),__webpack_require__(1231),__webpack_require__(1232),__webpack_require__(1233),__webpack_require__(1234),__webpack_require__(1235),__webpack_require__(1236),__webpack_require__(1237),__webpack_require__(1238),__webpack_require__(1239),__webpack_require__(1240),__webpack_require__(1241),__webpack_require__(1242),__webpack_require__(1243),__webpack_require__(1244),__webpack_require__(1245),__webpack_require__(1246),__webpack_require__(1247),__webpack_require__(1248),__webpack_require__(1249),__webpack_require__(1250),__webpack_require__(1251),__webpack_require__(1252),__webpack_require__(1253),module.exports=__webpack_require__(115)},"dashboard/mixins/ComponentBindingMixin":function(module,exports,__webpack_require__){"use strict";__webpack_require__(2733),Object.defineProperty(exports,"__esModule",{value:!0});var _mvc2=_interopRequireDefault(__webpack_require__("splunkjs/mvc")),_underscore2=_interopRequireDefault(__webpack_require__("require/underscore"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var ComponentBindingMixin={bindToComponentSetting:function(settingName,fn,fnContext){var _this=this;this.listenTo(this.settings,"change:"+settingName,function(model,newComponentNames){_this.binding&&_this.binding.dispose(),_this.binding=_this.bindToComponent(newComponentNames,fn,fnContext)},this);var initialComponentNames=this.settings.get(settingName);this.binding=this.bindToComponent(initialComponentNames,fn,fnContext)},bindToComponent:function(id,fn,fnContext){var _this2=this;if(!fn)throw new Error("callback function is required");var splunkjsRegistry=this.registry||_mvc2.default.Components,ids=(_underscore2.default.isArray(id)?id:[id]).filter(_underscore2.default.identity),onComponentChange=function(registry,changedComponent){var allComponents=ids.map(function(cid){return registry.get(cid)}).filter(_underscore2.default.identity);fn.call(fnContext,allComponents,changedComponent)},ret={dispose:function(){_underscore2.default.each(ids,function(cid){_this2.stopListening(splunkjsRegistry,"change:"+cid,onComponentChange)},_this2)}};return 0===ids.length?fn.call(fnContext,[],null):(_underscore2.default.each(ids,function(cid){_this2.listenTo(splunkjsRegistry,"change:"+cid,onComponentChange)},this),_underscore2.default.defer(function(){_this2._removed||_underscore2.default.each(ids,function(cid){onComponentChange(splunkjsRegistry,splunkjsRegistry.get(cid))},_this2)})),ret}};exports.default=ComponentBindingMixin,module.exports=exports.default},"mixins/viewlogging":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[__webpack_require__("require/underscore"),__webpack_require__("require/backbone"),__webpack_require__("shim/splunk.logger"),__webpack_require__("shim/splunk.util")],void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(_,Backbone,SplunkLogger,splunkUtils){var logMode=splunkUtils.getConfigValue("JS_LOGGER_MODE","None"),logLevel=splunkUtils.getConfigValue("JS_LOGGER_LEVEL","INFO"),shouldAttachLogging="None"!==logMode&&"DEBUG"===logLevel,domEventBlacklist=["mousemove","scroll"],logger=null;return{delegateEvents:function(events){if(!shouldAttachLogging)return Backbone.View.prototype.delegateEvents.call(this,events);if(!(events=events||_.result(this,"events")))return Backbone.View.prototype.delegateEvents.call(this,events);var wrappedEvents={};return _(events).each(function(handler,eventName){var normalizedHandler=_.isFunction(handler)?handler:this[handler];if(_.isFunction(normalizedHandler)&&-1===_(domEventBlacklist).indexOf(eventName)){var viewId=this.moduleId+"/"+this.cid;wrappedEvents[eventName]=function(){logger||(logger=SplunkLogger.getLogger("viewlogging.js")),logger.debug("view "+viewId+" is handling event "+eventName.replace(/\s+/g," ")),normalizedHandler.apply(this,arguments)}}else wrappedEvents[eventName]=handler},this),Backbone.View.prototype.delegateEvents.call(this,wrappedEvents)}}}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"splunkjs/mvc/basesplunkview":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){var _=__webpack_require__("require/underscore"),mvc=__webpack_require__("splunkjs/mvc/mvc"),console=__webpack_require__("util/console"),Backbone=__webpack_require__("require/backbone"),Settings=__webpack_require__("splunkjs/mvc/settings"),viewloggingmixin=__webpack_require__("mixins/viewlogging"),ComponentBindingMixin=__webpack_require__("dashboard/mixins/ComponentBindingMixin"),BaseSplunkView=Backbone.View.extend({_numConfigureCalls:0,omitFromSettings:[],_uniqueIdPrefix:"view_",constructor:function(options,settingsOptions){settingsOptions=settingsOptions||{},(options=options||{}).settingsOptions=_.extend(options.settingsOptions||{},settingsOptions),this._removed=!1;var id=options.id;void 0===id&&options.name&&(id=options.name,console.warn("Use of 'name' to specify the ID of a Splunk model is deprecated.")),void 0===id&&(id=_.uniqueId(this._uniqueIdPrefix||"view_")),this.name=this.id=options.name=options.id=id,this.options=_.extend({},this.options,options),this.registry=this.options.settingsOptions.registry||this.options.settingsOptions._tokenRegistry||mvc.Components;var returned=Backbone.View.prototype.constructor.apply(this,arguments);return 0==this._numConfigureCalls&&this.configure(),this.registry.registerInstance(this.id,this,{replace:settingsOptions.replace}),returned},configure:function(){if(this._numConfigureCalls++,1<this._numConfigureCalls)throw new Error("BaseSplunkView.configure() called multiple times.");var settings=this.options.settings;if(settings&&settings instanceof Settings)return this.settings=settings,this;var localOmitFromSettings=(this.omitFromSettings||[]).concat(["model","collection","el","attributes","className","tagName","events","settingsOptions"]),settingsAttributes=_.omit(this.options,localOmitFromSettings),settingsOptions=this.options.settingsOptions;return this.settings=new Settings(settingsAttributes,_.extend({},settingsOptions,{_tokenRegistry:this.registry})),this},initialize:function(){Backbone.View.prototype.initialize.apply(this,arguments)},remove:function(){return this._removed=!0,this.settings.dispose(),Backbone.View.prototype.remove.apply(this,arguments),this.registry.getInstance(this.id)===this&&this.registry.revokeInstance(this.id),this},dispose:function(){this.remove()},setElement:function(){return Backbone.View.prototype.setElement.apply(this,arguments),this.$el.addClass("splunk-view"),this.className&&this.$el.addClass(this.className),this.$el.attr("id")||this.$el.attr("id",this.id),this.moduleId&&this.$el.attr("data-view",this.moduleId),this}});return _.extend(BaseSplunkView.prototype,ComponentBindingMixin,viewloggingmixin),BaseSplunkView}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"splunkjs/mvc/debugger":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){var _=__webpack_require__("require/underscore"),Backbone=__webpack_require__("require/backbone"),BaseManager=__webpack_require__("splunkjs/mvc/basemanager"),BaseSplunkView=__webpack_require__("splunkjs/mvc/basesplunkview"),BaseTokenModel=__webpack_require__("splunkjs/mvc/basetokenmodel"),SearchModels=__webpack_require__("splunkjs/mvc/searchmodel"),console=window.console,indent=function(count){for(var str="",i=0;i<count;i++)str+="    ";return str},warn=function(msg){return"WARNING: "+msg},categoryEnum={MANAGER:"manager",VIEW:"view",NAMESPACE:"namespace",UNKNOWN:"unknown"};return Backbone.Model.extend({ready:!1,initialize:function(){this.registry=this.get("registry"),this.registry?console.log("The Splunkjs debugger is running. For help, enter 'splunkjs.mvc.Debugger.help()'"):console.log("splunk.mvc debugging interface could not find the registry")},isReady:function(){return this.ready},getDebugData:function(){var that=this,components=[],registeredComponentKeys=that.registry.getInstanceNames();_.each(registeredComponentKeys,function(elementID){var registryElement=that.registry.getInstance(elementID),type=that._getComponentType(registryElement),category=that._getComponentCategory(registryElement),validOptions=[],elementMetaData={id:elementID,category:category,type:type,warnings:[]};if(category===categoryEnum.VIEW){var managerid=null,settings={};validOptions=that._getValidViewOptions(registryElement),registryElement.settings&&(managerid=registryElement.settings.get("managerid")||null,settings=_.clone(registryElement.settings.attributes),_.each(_.keys(settings),function(key){if(!_.contains(validOptions,key)){var partOne=key.split(".")[0];"mapping"!==partOne&&"charting"!==partOne&&elementMetaData.warnings.push(warn(key+" is not a recognized setting."))}})),elementMetaData.managerid=managerid,elementMetaData.settings=settings,elementMetaData.el=registryElement.el||"no element set"}if(category===categoryEnum.NAMESPACE&&(elementMetaData.tokens=[],_.each(registryElement.attributes,function(value,key){var tokenData={name:key,value:value,listenerIds:[]};elementMetaData.tokens.push(tokenData)})),category===categoryEnum.MANAGER){if(validOptions=that._getValidManagerOptions(registryElement),registryElement.attributes){var attributes=_.clone(registryElement.attributes);_.each(_.keys(attributes),function(key){_.contains(validOptions,key)||elementMetaData.warnings.push(warn(key+" is not a recognized attribute"))})}elementMetaData.attributes=registryElement.attributes,elementMetaData.query=registryElement.query,elementMetaData.search=registryElement.search}category!==categoryEnum.NAMESPACE&&(elementMetaData.bindings=that._getComponentBindings(elementID)),components.push(elementMetaData)});var managers=_.where(components,{category:categoryEnum.MANAGER}),views=_.where(components,{category:categoryEnum.VIEW}),namespaces=_.where(components,{category:categoryEnum.NAMESPACE});return _.each(managers,function(manager){manager.viewIds=_.pluck(_.where(views,{managerid:manager.id}),"id"),manager.viewIds.length<1&&manager.warnings.push(warn("no views bound to search manager."))}),_.each(views,function(view){view.managerid&&(_.contains(_.pluck(managers,"id"),view.managerid)||view.warnings.push(warn(view.managerid+" is not a registered manager.")))}),_.each(namespaces,function(namespace){_.each(namespace.tokens,function(token){var listeners=_.filter(_.union(managers,views),function(item){return _.some(item.bindings,function(binding){if(binding&&binding.observes&&0<binding.observes.length)return _.some(binding.observes,function(observes){return observes.namespace===namespace.id&&observes.name===token.name})})});token.listenerIds=_.pluck(listeners,"id")})}),components},_getValidViewOptions:function(element){var options=["id","name","managerid","manager","app","el","data"];return element.constructor.prototype.options&&(options=_.union(options,_.keys(element.constructor.prototype.options))),options},_getValidManagerOptions:function(element){return _.union(["app","id","owner","name","data"],_.keys(element.constructor.prototype.defaults)||[],SearchModels.SearchSettingsModel.ALLOWED_ATTRIBUTES)},_getComponentType:function(component){var type="Unknown type";if(component.moduleId){var name=component.moduleId.split("/").pop();0<name.length&&(type=name)}return type},_getComponentCategory:function(component){var category=categoryEnum.UNKNOWN;return component instanceof BaseSplunkView?category=categoryEnum.VIEW:component instanceof BaseManager?category=categoryEnum.MANAGER:component instanceof BaseTokenModel&&(category=categoryEnum.NAMESPACE),category},_getComponentTokenBoundProperties:function(componentId){var bindings=this._getComponentBindings(componentId);return _.keys(bindings)},_getComponentBindings:function(componentId){var component=this.registry.getInstance(componentId),bindings={};return component&&component.settings&&(bindings=_.extend(bindings,_.clone(component.settings._bindings))),bindings},createError:function(message){return message},printViewInfo:function(){var views=this.getInfoForViews();console.log("Views:"),_.each(views,function(view){console.log(indent(1)+"ID: "+view.id),console.log(indent(2)+"Type: "+view.type),console.log(indent(2)+"Manager: "+view.managerid),console.log(indent(2)+"Element: ",view.el),console.log(indent(2)+"Settings: "),_.each(_.keys(view.settings),function(key){var tokenInfo="",binding=view.bindings[key];binding&&binding.observes&&0<binding.observes.length&&(tokenInfo=" [bound: "+JSON.stringify(binding.template)+", resolved: "+JSON.stringify(binding.computeValue(!0))+"]");console.log(indent(3)+key+": "+JSON.stringify(view.settings[key])+tokenInfo)}),0<view.warnings.length&&(console.log(indent(2)+"WARNINGS: "),_.each(view.warnings,function(warning){console.log(indent(3)+warning)}))})},printSearchManagerInfo:function(){var managers=this.getInfoForManagers();console.log("Search Managers:"),_.each(managers,function(manager){if(console.log(indent(1)+"ID: "+manager.id),console.log(indent(2)+"Type: "+manager.type),manager.attributes){console.log(indent(2)+"Attributes: ");var propertiesToSkip=SearchModels.SearchSettingsModel.ALLOWED_ATTRIBUTES;_.each(manager.attributes,function(value,key){_.contains(propertiesToSkip,key)||console.log(indent(3)+key+": "+JSON.stringify(value))})}manager.settings&&manager.settings.attributes&&(console.log(indent(2)+"Search Properties: "),_.each(manager.settings.attributes,function(value,key){var tokenInfo="",binding=manager.bindings[key];binding&&binding.observes&&0<binding.observes.length&&(tokenInfo=" [bound: "+JSON.stringify(binding.template)+", resolved: "+JSON.stringify(binding.computeValue(!0))+"]");console.log(indent(3)+key+": "+JSON.stringify(value)+tokenInfo)})),console.log(indent(2)+"Views bound to manager: "),_.each(manager.viewIds,function(id){console.log(indent(3)+id)}),0<manager.warnings.length&&(console.log(indent(2)+"WARNINGS: "),_.each(manager.warnings,function(warning){console.log(indent(3)+warning)}))})},printTokenNamespaceInfo:function(){var namespaces=this.getInfoForNamespaces();console.log("Token Namespaces:"),_.each(namespaces,function(namespace){console.log(indent(1)+"ID: "+namespace.id),console.log(indent(2)+"Type: "+namespace.type),console.log(indent(2)+"Tokens: "),_.each(namespace.tokens,function(token){console.log(indent(3)+token.name+": "),console.log(indent(4)+"value: "+JSON.stringify(token.value)),console.log(indent(4)+"listeners: "+token.listenerIds.join(", "))})})},printComponentInfo:function(){this.printViewInfo(),this.printSearchManagerInfo(),this.printTokenNamespaceInfo()},printWarnings:function(){var components=this.getDebugData();console.log("WARNINGS:"),_.each(components,function(item){0<item.warnings.length&&(console.log(indent(1),"ID: "+item.id+": "),_.each(item.warnings,function(warning){console.log(indent(2)+warning)}))})},_getInfoForComponents:function(ctype){var components=this.getDebugData();return void 0!==ctype?_.where(components,{category:categoryEnum[ctype]}):components},getInfoForViews:function(){return this._getInfoForComponents("VIEW")},getInfoForManagers:function(){return this._getInfoForComponents("MANAGER")},getInfoForNamespaces:function(){return this._getInfoForComponents("NAMESPACE")},help:function(){console.log("Splunkjs Debugger Commands"),console.log(indent(1)+"- printWarnings(): Prints all warnings to the console."),console.log(indent(1)+"- printComponentInfo(): Prints all debug info and warnings to the console by component."),console.log(indent(1)+"- printViewInfo(): Prints debug info for all Splunk views."),console.log(indent(1)+"- printSearchManagerInfo(): Prints debug info for all Splunk search managers."),console.log(indent(1)+"- printTokenNamespaceInfo(): Prints debug info for Splunk token namespaces."),console.log(indent(1)+"- getDebugData(): Returns all debug metadata for components and namespaces."),console.log(indent(1)+"- getInfoForViews(): Returns debug metadata for all Splunk views."),console.log(indent(1)+"- getInfoForManagers(): Returns debug metadata for all Splunk managers."),console.log(indent(1)+"- getInfoForNamespaces(): Returns debug metadata for all Splunk token namespaces.")}})}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"splunkjs/mvc/settings":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_RESULT__;void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(require,exports,module){return __webpack_require__("splunkjs/mvc/tokenawaremodel").extend({sync:function(){return!1}})}.call(exports,__webpack_require__,exports,module))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}}]);