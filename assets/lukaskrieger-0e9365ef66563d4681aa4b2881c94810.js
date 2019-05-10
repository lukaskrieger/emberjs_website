"use strict"
define("lukaskrieger/app",["exports","lukaskrieger/resolver","ember-load-initializers","lukaskrieger/config/environment"],function(e,t,a,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var i=Ember.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:t.default});(0,a.default)(i,r.default.modulePrefix)
var l=i
e.default=l}),define("lukaskrieger/helpers/app-version",["exports","lukaskrieger/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,a){function r(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.default.APP.version,l=r.versionOnly||r.hideSha,n=r.shaOnly||r.hideVersion,o=null
return l&&(r.showExtended&&(o=i.match(a.versionExtendedRegExp)),o||(o=i.match(a.versionRegExp))),n&&(o=i.match(a.shaRegExp)),o?o[0]:i}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=r,e.default=void 0
var i=Ember.Helper.helper(r)
e.default=i}),define("lukaskrieger/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("lukaskrieger/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("lukaskrieger/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","lukaskrieger/config/environment"],function(e,t,a){var r,i
Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a.default.APP&&(r=a.default.APP.name,i=a.default.APP.version)
var l={name:"App Version",initialize:(0,t.default)(r,i)}
e.default=l}),define("lukaskrieger/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=a}),define("lukaskrieger/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var r={name:"ember-data",initialize:t.default}
e.default=r}),define("lukaskrieger/initializers/export-application-global",["exports","lukaskrieger/config/environment"],function(e,t){function a(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var a
if("undefined"!=typeof window)a=window
else if("undefined"!=typeof global)a=global
else{if("undefined"==typeof self)return
a=self}var r,i=t.default.exportApplicationGlobal
r="string"==typeof i?i:Ember.String.classify(t.default.modulePrefix),a[r]||(a[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete a[r]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=a,e.default=void 0
var r={name:"export-application-global",initialize:a}
e.default=r}),define("lukaskrieger/instance-initializers/ember-data",["exports","ember-data/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a={name:"ember-data",initialize:t.default}
e.default=a}),define("lukaskrieger/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=t.default
e.default=a}),define("lukaskrieger/router",["exports","lukaskrieger/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var a=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
a.map(function(){this.route("welcome",{path:"/"}),this.route("about"),this.route("404",{path:"/*"})})
var r=a
e.default=r}),define("lukaskrieger/routes/404",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("lukaskrieger/routes/about",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("lukaskrieger/routes/welcome",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.Route.extend({})
e.default=t}),define("lukaskrieger/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("lukaskrieger/templates/404",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"KmnVo6bR",block:'{"symbols":[],"statements":[[7,"h1"],[9],[0,"404 error"],[10],[0,"\\n\\n"],[7,"p"],[9],[0,"Whoops! This route does not exist. Try another!"],[10],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"lukaskrieger/templates/404.hbs"}})
e.default=t}),define("lukaskrieger/templates/about",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"vzWnbzZp",block:'{"symbols":[],"statements":[[1,[23,"outlet"],false]],"hasEval":false}',meta:{moduleName:"lukaskrieger/templates/about.hbs"}})
e.default=t}),define("lukaskrieger/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"Pu4VBtxh",block:'{"symbols":[],"statements":[[7,"header"],[11,"class","site-header"],[9],[0,"\\n\\n  "],[7,"div"],[11,"class","branding"],[9],[0,"\\n    Lukas Krieger\\n  "],[10],[0,"\\n\\n  "],[7,"nav"],[11,"class","site-navigation"],[9],[0,"\\n    "],[7,"ul"],[11,"class","menu"],[9],[0,"\\n      "],[7,"li"],[9],[0,"\\n"],[4,"link-to",["welcome"],null,{"statements":[[0,"          "],[7,"span"],[9],[0,"Home"],[10],[0,"\\n"]],"parameters":[]},null],[0,"      "],[10],[0,"\\n      "],[7,"li"],[9],[0,"\\n"],[4,"link-to",["about"],null,{"statements":[[0,"          "],[7,"span"],[9],[0,"About"],[10],[0,"\\n"]],"parameters":[]},null],[0,"      "],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n\\n"],[10],[0,"\\n\\n"],[7,"div"],[11,"class","outlet"],[9],[0,"\\n  "],[1,[23,"outlet"],false],[0,"\\n"],[10],[0,"\\n\\n"],[7,"footer"],[11,"class","site-footer"],[9],[0,"I\'m the Footer for Lukas Krieger"],[10]],"hasEval":false}',meta:{moduleName:"lukaskrieger/templates/application.hbs"}})
e.default=t}),define("lukaskrieger/templates/welcome",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"+cBqwMCk",block:'{"symbols":[],"statements":[[7,"h1"],[9],[0,"Welcome"],[10],[0,"\\n\\nTest 1"]],"hasEval":false}',meta:{moduleName:"lukaskrieger/templates/welcome.hbs"}})
e.default=t}),define("lukaskrieger/config/environment",[],function(){try{var e="lukaskrieger/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),a={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(r){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("lukaskrieger/app").default.create({name:"lukaskrieger",version:"0.0.0+820211b0"})
