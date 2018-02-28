webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/layers.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerActions; });
var LayerActions = {
    SET_BACKGROUND_LAYERS: 'SET_BACKGROUND_LAYERS',
    SELECT_BACKGROUND_LAYER: 'SELECT_BACKGROUND_LAYER',
    ADD_LAYERS: 'ADD_LAYERS',
    SET_EXTENT: 'SET_EXTENT',
    ADD_FEATURE: 'ADD_FEATURE',
    ADD_FEATURE_LIST: 'ADD_FEATURE_LIST',
    SET_PROJECTION_SYSTEM: 'SET_PROJECTION_SYSTEM'
};


/***/ }),

/***/ "./src/app/actions/toolbox.action.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolBoxActions; });
var ToolBoxActions = {
    SELECT_ACTION: 'SELECT_ACTION',
    SELECT_LAYERS: 'SELECT_LAYERS',
    SELECT_BBOX: 'SELECT_BBOX',
    SET_SELECTION_TYPE: 'SET_SELECTION_TYPE'
};


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_reducers_root_reducer__ = __webpack_require__("./src/app/reducers/root.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__ = __webpack_require__("./src/app/components/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_map_map_component__ = __webpack_require__("./src/app/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_layer_service__ = __webpack_require__("./src/app/services/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_toolbox_toolbox_component__ = __webpack_require__("./src/app/components/toolbox/toolbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_toolbox_toolboxaction_toolboxaction_component__ = __webpack_require__("./src/app/components/toolbox/toolboxaction/toolboxaction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_sidebar_layerselection_layerselection_component__ = __webpack_require__("./src/app/components/sidebar/layerselection/layerselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_sidebar_draw_draw_component__ = __webpack_require__("./src/app/components/sidebar/draw/draw.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var routes = [
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */]
    },
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
        pathMatch: 'full'
    },
];
var AppModule = /** @class */ (function () {
    function AppModule(ngRedux) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_5__app_reducers_root_reducer__["b" /* rootReducer */], __WEBPACK_IMPORTED_MODULE_5__app_reducers_root_reducer__["a" /* INITIAL_STATE */]);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__components_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_map_map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_toolbox_toolbox_component__["a" /* ActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_toolbox_toolboxaction_toolboxaction_component__["a" /* ToolboxActionComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_sidebar_layerselection_layerselection_component__["a" /* LayerselectionComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_sidebar_draw_draw_component__["a" /* DrawComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__services_layer_service__["a" /* LayerService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgRedux"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-map *ngIf=\"(layers | async).backgroundLayers.length > 0\" [interaction]=\"(ui | async).activeSelection\" [backgroundLayers]=\"(layers | async).backgroundLayers\" [layers]=\"(layers | async).layers\" [extent]=\"[-46.933594,16.636192,85.781250,72.867930]\" [viewExtent]=\"(layers | async ).extent\" [features]=\"features\"></app-map>\n\n<div class=\"sidebar\">\n  <app-sidebar *ngIf=\"(ui | async).activeAction\" [action]=\"(ui | async).activeAction\"></app-sidebar>\n  <app-toolbox></app-toolbox>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  position: absolute;\n  top: 2rem;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_layers_action__ = __webpack_require__("./src/app/actions/layers.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_layer_service__ = __webpack_require__("./src/app/services/layer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MainComponent = /** @class */ (function () {
    function MainComponent(ngRedux, layerService) {
        this.ngRedux = ngRedux;
        this.layerService = layerService;
        this.features = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        var layers = this.layerService.getLayers();
        this.layers.subscribe(function (state) {
            _this.features = [];
            state.features.forEach(function (feature) { _this.features = _this.features.concat(feature.features); });
        });
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions_layers_action__["a" /* LayerActions */].SET_BACKGROUND_LAYERS, body: layers,
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "layers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], MainComponent.prototype, "ui", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/components/main/main.component.html"),
            styles: [__webpack_require__("./src/app/components/main/main.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["j" /* trigger */])('sidebarOpen', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('open', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'translate3d(0, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* state */])('close', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* style */])({
                        transform: 'translate3d(100%, 0, 0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('open => close', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* transition */])('close => open', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('400ms ease-in-out'))
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_3__services_layer_service__["a" /* LayerService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\">\n</div>\n"

/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers__ = __webpack_require__("./node_modules/openlayers/dist/ol-debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__ = __webpack_require__("./src/app/actions/layers.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapComponent = /** @class */ (function () {
    function MapComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.zoom = this.zoom || 4;
        this.initMap();
    };
    MapComponent.prototype.ngOnChanges = function (changes) {
        var newLayers = [];
        if (changes.layers && !changes.layers.isFirstChange()) {
            changes.layers.currentValue.forEach(function (layerInfo) {
                var hit = changes.layers.previousValue.find(function (prevLayerInfo) { return prevLayerInfo.url === layerInfo.url; });
                if (!hit) {
                    newLayers.push(layerInfo);
                }
            });
            this.addLayers(newLayers);
        }
        if (changes.interaction && !changes.interaction.isFirstChange()) {
            this.removeInteraction(changes.interaction.previousValue);
            this.addInteraction(changes.interaction.currentValue);
        }
        if (changes.viewExten && !changes.viewExtent.isFirstChange()) {
            this.zoomToExtent(this.viewExtent);
        }
        if (changes.features && !changes.features.isFirstChange()) {
            this.vectorLayer.getSource().clear();
            this.vectorLayer.getSource().addFeatures(this.features);
        }
    };
    MapComponent.prototype.initMap = function () {
        var extent = __WEBPACK_IMPORTED_MODULE_1_openlayers__["proj"].transformExtent(this.extent, /* WGS84 */ 'EPSG:4326', /* MERCATOR */ 'EPSG:3857');
        var center = __WEBPACK_IMPORTED_MODULE_1_openlayers__["extent"].getCenter(extent);
        this.vectorLayer = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["layer"].Vector({
            source: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["source"].Vector({ features: this.features, wrapX: false }),
            zIndex: 99
        });
        this.map = new __WEBPACK_IMPORTED_MODULE_1_openlayers__["Map"]({
            layers: [this.vectorLayer],
            controls: __WEBPACK_IMPORTED_MODULE_1_openlayers__["control"].defaults({
                attribution: false,
                rotate: false
            }).extend([
                new __WEBPACK_IMPORTED_MODULE_1_openlayers__["control"].ZoomToExtent({
                    extent: extent
                }),
                new __WEBPACK_IMPORTED_MODULE_1_openlayers__["control"].ScaleLine()
            ]),
            view: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["View"]({
                projection: 'EPSG:3857',
                center: center,
                zoom: this.zoom
            }),
            target: 'map'
        });
        this.setBackgroundLayers();
        this.initInteractions();
    };
    MapComponent.prototype.setBackgroundLayers = function () {
        var _this = this;
        this.backgroundLayers.forEach(function (layer) {
            _this.map.addLayer(layer.layer);
        });
    };
    MapComponent.prototype.initInteractions = function () {
        var _this = this;
        this.interactions = [];
        this.interactions.push({
            type: 'bbox',
            interaction: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw({
                source: this.vectorLayer.getSource(),
                type: 'Circle',
                geometryFunction: __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw.createBox()
            })
        });
        this.interactions.push({
            type: 'polygon',
            interaction: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw({
                source: this.vectorLayer.getSource(),
                type: 'Polygon'
            })
        });
        this.interactions.push({
            type: 'point',
            interaction: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw({
                source: this.vectorLayer.getSource(),
                type: 'Point'
            })
        });
        this.interactions.push({
            type: 'circle',
            interaction: new __WEBPACK_IMPORTED_MODULE_1_openlayers__["interaction"].Draw({
                source: this.vectorLayer.getSource(),
                type: 'Circle'
            })
        });
        this.interactions.forEach(function (interaction) {
            interaction.interaction.on('drawend', function (feature) {
                _this.drawEnd(feature.feature);
            });
        });
    };
    MapComponent.prototype.drawEnd = function (feature) {
        console.log(feature);
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__["a" /* LayerActions */].ADD_FEATURE,
            body: {
                feature: feature,
                type: this.interaction
            }
        });
    };
    MapComponent.prototype.removeInteraction = function (type) {
        if (type !== null && type !== '') {
            var interaction = this.interactions.find(function (interaction) { return interaction.type === type; });
            if (interaction)
                this.map.removeInteraction(interaction.interaction);
        }
    };
    MapComponent.prototype.addInteraction = function (type) {
        if (type !== null && type !== '') {
            var interaction = this.interactions.find(function (interaction) { return interaction.type === type; });
            if (interaction)
                this.map.addInteraction(interaction.interaction);
        }
    };
    MapComponent.prototype.zoomToExtent = function (extent) {
        if (extent != null)
            this.map.getView().fit(extent, this.map.getSize());
    };
    MapComponent.prototype.addLayers = function (layers) {
        var _this = this;
        layers.forEach(function (layerInfo) {
            layerInfo.layers.forEach(function (layer) {
                _this.map.addLayer(layer.layer);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "extent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "zoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "backgroundLayers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "layers", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "viewExtent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MapComponent.prototype, "interaction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], MapComponent.prototype, "features", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("./src/app/components/map/map.component.html"),
            styles: [__webpack_require__("./src/app/components/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/draw/draw.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group actionlist\">\n  <button type=\"button\" class=\"btn btn-primary {{drawAction === 'bbox' ? 'active' : ''}}\" (click)=\"setDrawAction('bbox')\"><i class=\"fa fa-square-o\"></i></button>\n  <button type=\"button\" class=\"btn btn-primary {{drawAction === 'polygon' ? 'active' : ''}}\" (click)=\"setDrawAction('polygon')\"><i class=\"fa fa-star-o\"></i></button>\n  <button type=\"button\" class=\"btn btn-primary {{drawAction === 'circle' ? 'active' : ''}}\" (click)=\"setDrawAction('circle')\"><i class=\"fa fa-circle-o\"></i></button>\n  <button type=\"button\" class=\"btn btn-primary {{drawAction === 'point' ? 'active' : ''}}\" (click)=\"setDrawAction('point')\"><i class=\"fa fa-map-marker\"></i></button>\n  <button type=\"button\" class=\"btn btn-primary {{drawAction === 'custom' ? 'active' : ''}}\" (click)=\"setDrawAction('custom')\"><i class=\"fa fa-pencil-square-o\"></i></button>\n\n</div>\n\n<div class=\"projection\">\n  <i class=\"fa fa-globe\"></i><select (change)=\"selectProjectionSystem($event.target.value)\"><option value=\"EPSG:3857\">EPSG:3857</option><option value=\"EPSG:4326\">EPSG:4326</option></select>\n</div>\n\n<div *ngIf=\"drawAction == 'bbox'\">\n  <h1>Bounding box</h1>\n  <div *ngIf=\"featureList['bbox']\">\n    <div *ngFor=\"let feature of featureList['bbox']\" class=\"featureInfo\">\n      <h2>Feature</h2>\n      <h3>Bounding box</h3>\n      <p>{{getBoundingBox(feature)}}</p>\n      <h3>GeoJSON</h3>\n      <p>\n        {{formatFeatureGeometry(feature)}}\n      </p>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"drawAction == 'polygon'\">\n  <h1>Polygon</h1>\n  <div *ngIf=\"featureList['polygon']\">\n    <div *ngFor=\"let feature of featureList['polygon']\" class=\"featureInfo\">\n      <h2>Feature</h2>\n      <h3>GeoJSON</h3>\n      <p>\n        {{formatFeatureGeometry(feature)}}\n      </p>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"drawAction == 'point'\">\n  <h1>Point</h1>\n  <div *ngIf=\"featureList['point']\">\n    <div *ngFor=\"let feature of featureList['point']\" class=\"featureInfo\">\n      <h2>Feature</h2>\n      <h3>GeoJSON</h3>\n      <p>\n        {{formatFeatureGeometry(feature)}}\n      </p>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"drawAction == 'circle'\">\n  <h1>Circle</h1>\n  <div *ngIf=\"featureList['circle']\">\n    <div *ngFor=\"let feature of featureList['circle']\" class=\"featureInfo\">\n      <h2>Feature</h2>\n      <h3>GeoJSON</h3>\n      <p>\n        {{formatFeatureGeometry(feature)}}\n      </p>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"drawAction == 'custom'\">\n  <h1>Custom GeoJSON</h1>\n  <div>\n    <div class=\"featureInfo\">\n      <textarea (change)=\"addFeature($event.target.value)\"></textarea>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/draw/draw.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 1.5rem; }\n\nh2 {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem; }\n\nh3 {\n  font-size: 0.9rem;\n  margin-bottom: 1rem; }\n\n.featureInfo {\n  margin: 0.5rem 0;\n  background-color: rgba(230, 230, 230, 0.2);\n  border: 1px solid rgba(230, 230, 230, 0.5);\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  word-wrap: break-word; }\n\n.projection {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-bottom: 1.5rem; }\n\n.projection i {\n  margin-right: 0.5rem;\n  font-size: 1.5rem; }\n\n.btn-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-bottom: 1.5rem; }\n\n.btn-group button {\n  background-color: white;\n  border: 1px solid rgba(230, 230, 230, 0.5);\n  color: rgba(90, 90, 90, 0.9);\n  padding: .5rem 1.5rem;\n  cursor: pointer; }\n\n.btn-group button:not(:last-child) {\n  border-right: none; }\n\n.btn-group button:first-child {\n  border-bottom-left-radius: .5rem;\n  border-top-left-radius: .5rem; }\n\n.btn-group button:last-child {\n  border-bottom-right-radius: .5rem;\n  border-top-right-radius: .5rem; }\n\n.btn-group:after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.btn-group button:hover {\n  background-color: rgba(230, 230, 230, 0.2);\n  color: rgba(90, 90, 90, 0.9); }\n\n.btn-group button.active {\n  background-color: rgba(90, 90, 90, 0.9);\n  color: white; }\n\ntextarea {\n  width: 100%;\n  height: 57rem;\n  border: none; }\n"

/***/ }),

/***/ "./src/app/components/sidebar/draw/draw.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_toolbox_action__ = __webpack_require__("./src/app/actions/toolbox.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers__ = __webpack_require__("./node_modules/openlayers/dist/ol-debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_layers_action__ = __webpack_require__("./src/app/actions/layers.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DrawComponent = /** @class */ (function () {
    function DrawComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    DrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crs = 'EPSG:3857';
        this.featureList = [];
        this.layers.subscribe(function (state) {
            _this.crs = state.crs;
            state.features.forEach(function (featureInfo) {
                _this.featureList[featureInfo.type] = featureInfo.features;
            });
        });
    };
    DrawComponent.prototype.setDrawAction = function (action) {
        this.drawAction = (this.drawAction === action ? "" : action);
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions_toolbox_action__["a" /* ToolBoxActions */].SET_SELECTION_TYPE,
            body: {
                selection: this.drawAction
            }
        });
    };
    DrawComponent.prototype.formatFeatureGeometry = function (feature) {
        var formatter = new __WEBPACK_IMPORTED_MODULE_4_openlayers__["format"].GeoJSON();
        return formatter.writeFeature(feature, {
            featureProjection: 'EPSG:3857',
            dataProjection: this.crs
        });
    };
    DrawComponent.prototype.getBoundingBox = function (feature) {
        return __WEBPACK_IMPORTED_MODULE_4_openlayers__["proj"].transformExtent(feature.getGeometry().getExtent(), 'EPSG:3857', this.crs);
    };
    DrawComponent.prototype.selectProjectionSystem = function (crs) {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_5__actions_layers_action__["a" /* LayerActions */].SET_PROJECTION_SYSTEM,
            body: {
                crs: crs
            }
        });
    };
    DrawComponent.prototype.addFeature = function (feature) {
        var featureList = (new __WEBPACK_IMPORTED_MODULE_4_openlayers__["format"].GeoJSON()).readFeatures(feature, {
            featureProjection: 'EPSG:3857',
            dataProjection: this.crs
        });
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_5__actions_layers_action__["a" /* LayerActions */].ADD_FEATURE_LIST,
            body: {
                features: featureList,
                type: 'custom'
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], DrawComponent.prototype, "layers", void 0);
    DrawComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-draw',
            template: __webpack_require__("./src/app/components/sidebar/draw/draw.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/draw/draw.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]])
    ], DrawComponent);
    return DrawComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/layerselection/layerselection.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Select layers</h1>\n\n<h2>Background layer</h2>\n<select (change)=\"selectBackgroundLayer($event.target.value)\">\n  <option *ngFor=\"let layer of backgroundLayers\">{{layer.name}}</option>\n</select>\n\n<h2>External source:</h2>\n<input type=\"text\" placeholder=\"Capabilities URL\" (change)=\"loadExternalSource($event.target)\">\n<div *ngIf=\"status != ''\" class=\"status {{status.indexOf('error') >= 0 ? 'error' : ''}}\">\n  <div class=\"statusIcon\">\n    <i *ngIf=\"status.indexOf('Loading') >= 0\" class=\"fa fa-circle-o-notch fa-spin\"></i><i *ngIf=\"status.indexOf('error') >= 0\" class=\"fa fa-exclamation-circle\"></i>\n  </div>\n  <div class=\"statusText\">\n    {{status}}\n  </div>\n</div>\n<div *ngFor=\"let info of layerInfo\" class=\"externalSource\">\n  <h3>{{info.url}}</h3>\n  <div *ngFor=\"let layer of info.layers\" class=\"layerInfo\" (click)=\"toggleLayer(layer.layer)\"><div class=\"toggle\"><input type=\"checkbox\" [checked]=\"layer.layer.getVisible()\"></div><span class=\"info\"><span class=\"title\">{{layer.name}}</span><br/><span class=\"description\">{{layer.description}}</span></span></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/layerselection/layerselection.component.scss":
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin-bottom: 1.5rem; }\n\nh2 {\n  font-size: 1rem;\n  margin-bottom: 1rem;\n  margin-top: 1rem; }\n\nh3 {\n  font-size: 0.9rem;\n  margin-bottom: 1rem; }\n\n.externalSource {\n  margin: 0.5rem 0;\n  background-color: rgba(230, 230, 230, 0.2);\n  border: 1px solid rgba(230, 230, 230, 0.5);\n  padding: 0.5rem;\n  border-radius: 0.25rem; }\n\n.layerInfo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  padding: 0.5rem;\n  border-radius: 0.25rem; }\n\n.layerInfo:hover {\n  background-color: rgba(90, 90, 90, 0.9);\n  color: white;\n  cursor: pointer; }\n\n.description {\n  font-size: 0.7rem; }\n\n.info {\n  margin-left: 1rem; }\n\n.toggle {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.status {\n  padding: .75rem 1.25rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0.5rem 0;\n  background-color: rgba(230, 230, 230, 0.2);\n  border: 1px solid rgba(230, 230, 230, 0.5);\n  border-radius: 0.25rem; }\n\n.statusIcon {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.statusText {\n  margin-left: 1rem; }\n\n.error {\n  color: #d54057;\n  background-color: #f2dede;\n  border: 1px solid #ebcccc;\n  border-radius: 0.25rem; }\n"

/***/ }),

/***/ "./src/app/components/sidebar/layerselection/layerselection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerselectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__ = __webpack_require__("./src/app/actions/layers.action.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_layer_service__ = __webpack_require__("./src/app/services/layer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LayerselectionComponent = /** @class */ (function () {
    function LayerselectionComponent(ngRedux, layerService) {
        this.ngRedux = ngRedux;
        this.layerService = layerService;
    }
    LayerselectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.status = '';
        this.layers.subscribe(function (state) {
            _this.backgroundLayers = state.backgroundLayers;
            _this.layerInfo = state.layers;
        });
    };
    LayerselectionComponent.prototype.selectBackgroundLayer = function (layer) {
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__["a" /* LayerActions */].SELECT_BACKGROUND_LAYER,
            body: layer
        });
    };
    LayerselectionComponent.prototype.loadExternalSource = function (event) {
        var _this = this;
        this.status = "Loading external source";
        var url = event.value;
        this.layerService.loadExternalLayers(url).subscribe(function (layers) {
            _this.status = "";
            _this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__["a" /* LayerActions */].ADD_LAYERS,
                body: {
                    url: url,
                    layers: layers
                }
            });
            console.log("layers", layers);
        }, function (error) {
            _this.status = "An error occurred - " + error.message;
        });
        event.value = "";
    };
    LayerselectionComponent.prototype.toggleLayer = function (layer) {
        layer.setVisible(!layer.getVisible());
        if (layer.getVisible()) {
            this.ngRedux.dispatch({
                type: __WEBPACK_IMPORTED_MODULE_3__actions_layers_action__["a" /* LayerActions */].SET_EXTENT,
                body: {
                    extent: layer.getExtent()
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], LayerselectionComponent.prototype, "layers", void 0);
    LayerselectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layerselection',
            template: __webpack_require__("./src/app/components/sidebar/layerselection/layerselection.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/layerselection/layerselection.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_redux_store_lib_src_components_ng_redux__["NgRedux"], __WEBPACK_IMPORTED_MODULE_4__services_layer_service__["a" /* LayerService */]])
    ], LayerselectionComponent);
    return LayerselectionComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <app-layerselection *ngIf=\"action === 'SELECT_LAYERS'\"></app-layerselection>\n  <app-draw *ngIf=\"action === 'DRAW'\"></app-draw>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 40rem;\n  height: 75rem;\n  padding: 2rem;\n  background-color: white;\n  color: rgba(90, 90, 90, 0.9);\n  overflow: auto; }\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidebarComponent.prototype, "action", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbox/toolbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolboxaction *ngFor=\"let action of actions\" [icon]=\"action.icon\" [action]=\"action.id\" [isActive]=\"action.id === activeAction\"></app-toolboxaction>\n"

/***/ }),

/***/ "./src/app/components/toolbox/toolbox.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n"

/***/ }),

/***/ "./src/app/components/toolbox/toolbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_toolboxactions_config__ = __webpack_require__("./src/app/config/toolboxactions.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionsComponent = /** @class */ (function () {
    function ActionsComponent() {
    }
    ActionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actions = __WEBPACK_IMPORTED_MODULE_2__config_toolboxactions_config__["a" /* TOOLBOX_ACTIONS */];
        this.ui.subscribe(function (state) {
            _this.activeAction = state.activeAction;
            console.log(_this.activeAction);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])(),
        __metadata("design:type", Object)
    ], ActionsComponent.prototype, "ui", void 0);
    ActionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolbox',
            template: __webpack_require__("./src/app/components/toolbox/toolbox.component.html"),
            styles: [__webpack_require__("./src/app/components/toolbox/toolbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionsComponent);
    return ActionsComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbox/toolboxaction/toolboxaction.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"selectAction()\" class=\"{{isActive? 'active' : ''}}\">\n  <i class=\"fa {{icon}} \" aria-hidden=\"true\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/components/toolbox/toolboxaction/toolboxaction.component.scss":
/***/ (function(module, exports) {

module.exports = "div {\n  background-color: rgba(90, 90, 90, 0.9);\n  color: white;\n  -webkit-border-top-right-radius: 0.5rem;\n  -webkit-border-bottom-right-radius: 0.5rem;\n  -moz-border-radius-topright: 0.5rem;\n  -moz-border-radius-bottomright: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n  padding: 1rem;\n  cursor: pointer;\n  -webkit-box-shadow: 4px 4px 5px rgba(100, 100, 100, 0.2);\n          box-shadow: 4px 4px 5px rgba(100, 100, 100, 0.2);\n  margin-bottom: 0.2rem; }\n\n.active {\n  background-color: white;\n  color: rgba(90, 90, 90, 0.9); }\n\ni {\n  font-size: 1.5rem; }\n"

/***/ }),

/***/ "./src/app/components/toolbox/toolboxaction/toolboxaction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxActionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__ = __webpack_require__("./node_modules/@angular-redux/store/lib/src/components/ng-redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_toolbox_action__ = __webpack_require__("./src/app/actions/toolbox.action.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolboxActionComponent = /** @class */ (function () {
    function ToolboxActionComponent(ngRedux) {
        this.ngRedux = ngRedux;
    }
    ToolboxActionComponent.prototype.ngOnInit = function () {
    };
    ToolboxActionComponent.prototype.selectAction = function () {
        var action = this.isActive ? '' : this.action;
        this.ngRedux.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_2__actions_toolbox_action__["a" /* ToolBoxActions */].SELECT_ACTION,
            body: {
                action: action
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToolboxActionComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToolboxActionComponent.prototype, "action", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ToolboxActionComponent.prototype, "isActive", void 0);
    ToolboxActionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-toolboxaction',
            template: __webpack_require__("./src/app/components/toolbox/toolboxaction/toolboxaction.component.html"),
            styles: [__webpack_require__("./src/app/components/toolbox/toolboxaction/toolboxaction.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store_lib_src_components_ng_redux__["NgRedux"]])
    ], ToolboxActionComponent);
    return ToolboxActionComponent;
}());



/***/ }),

/***/ "./src/app/config/backgroundlayers.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKGROUND_LAYERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers__ = __webpack_require__("./node_modules/openlayers/dist/ol-debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_openlayers__);

var mapbox_access_token = 'pk.eyJ1IjoiYnJhbWphbnNzZW4iLCJhIjoiY2o4dnlpdGt5MTZrbTMzcnB2amJxcmRzdyJ9.WQfT2IF5Ij15-jTxbgMWRw';
var BACKGROUND_LAYERS = [
    {
        'name': 'Open Street Map',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].OSM(),
            visible: true
        })
    },
    {
        'name': 'Mapbox Streets',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
    {
        'name': 'Mapbox Light',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.light/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
    {
        'name': 'Mapbox Dark',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
    {
        'name': 'Mapbox Satellite',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
    {
        'name': 'Mapbox Streets Satellite',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.streets-satellite/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
    {
        'name': 'Mapbox Outdoors',
        'layer': new __WEBPACK_IMPORTED_MODULE_0_openlayers__["layer"].Tile({
            source: new __WEBPACK_IMPORTED_MODULE_0_openlayers__["source"].XYZ({
                url: "https://api.mapbox.com/v4/mapbox.outdoors/{z}/{x}/{y}@2x.png?access_token=" + mapbox_access_token,
            }),
            visible: false
        })
    },
];


/***/ }),

/***/ "./src/app/config/toolboxactions.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOOLBOX_ACTIONS; });
var TOOLBOX_ACTIONS = [
    {
        id: 'SELECT_LAYERS',
        text: 'Select layers to display',
        icon: 'fa-map-o'
    },
    {
        id: 'DRAW',
        text: 'Draw a geometry on the map',
        icon: 'fa-pencil'
    }
];


/***/ }),

/***/ "./src/app/reducers/layer.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return l_init_state; });
/* harmony export (immutable) */ __webpack_exports__["b"] = layerReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__ = __webpack_require__("./src/app/actions/layers.action.ts");

var l_init_state = {
    backgroundLayers: [],
    layers: [],
    extent: null,
    features: [],
    crs: 'EPSG:3857'
};
function layerReducer(state, action) {
    if (state === void 0) { state = l_init_state; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].SET_BACKGROUND_LAYERS:
            console.log("LAYER REDUCER", "Setting background layers", action);
            state = Object.assign({}, state, {
                backgroundLayers: action.body
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].SELECT_BACKGROUND_LAYER:
            console.log("LAYER REDUCER", "Selecting background layers", action);
            var backgroundLayers = state.backgroundLayers.map(function (layer) {
                if (layer.layer.getVisible())
                    layer.layer.setVisible(false);
                if (layer.name == action.body)
                    layer.layer.setVisible(true);
                return layer;
            });
            state = Object.assign({}, state, {
                backgroundLayers: backgroundLayers
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].ADD_LAYERS:
            console.log("LAYER REDUCER", "Adding layers", action);
            var newLayers = state.layers.concat(action.body);
            state = Object.assign({}, state, {
                layers: newLayers
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].SET_EXTENT:
            console.log("LAYER REDUCER", "Setting extent", action);
            state = Object.assign({}, state, {
                extent: action.body.extent
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].ADD_FEATURE:
            console.log("LAYER REDUCER", "Adding feature", action);
            var feature_1 = action.body;
            var currFeatures = state.features;
            var featureList = currFeatures.find(function (featureInfo) { return featureInfo.type === feature_1.type; });
            if (featureList) {
                featureList.features.push(feature_1.feature);
            }
            else {
                currFeatures.push({
                    type: feature_1.type,
                    features: [feature_1.feature]
                });
            }
            state = Object.assign({}, state, {
                features: currFeatures
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].ADD_FEATURE_LIST:
            console.log("LAYER REDUCER", "Adding feature list", action);
            var features_1 = action.body;
            features_1.features.forEach(function (feature) {
                state = layerReducer(state, { type: __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].ADD_FEATURE, body: { type: features_1.type, feature: feature } });
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_layers_action__["a" /* LayerActions */].SET_PROJECTION_SYSTEM:
            console.log("LAYER REDUCER", "Setting projection system", action);
            var newCrs = action.body.crs;
            state = Object.assign({}, state, {
                crs: newCrs
            });
            break;
    }
    return state;
}


/***/ }),

/***/ "./src/app/reducers/root.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return INITIAL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layer_reducer__ = __webpack_require__("./src/app/reducers/layer.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_reducer__ = __webpack_require__("./src/app/reducers/ui.reducer.ts");



var INITIAL_STATE = {
    layers: __WEBPACK_IMPORTED_MODULE_0__layer_reducer__["a" /* l_init_state */],
    ui: __WEBPACK_IMPORTED_MODULE_2__ui_reducer__["a" /* u_init_state */]
};
var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    layers: __WEBPACK_IMPORTED_MODULE_0__layer_reducer__["b" /* layerReducer */],
    ui: __WEBPACK_IMPORTED_MODULE_2__ui_reducer__["b" /* uiReducer */]
});


/***/ }),

/***/ "./src/app/reducers/ui.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return u_init_state; });
/* harmony export (immutable) */ __webpack_exports__["b"] = uiReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_toolbox_action__ = __webpack_require__("./src/app/actions/toolbox.action.ts");

var u_init_state = {
    activeAction: '',
    activeSelection: ''
};
function uiReducer(state, action) {
    if (state === void 0) { state = u_init_state; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_toolbox_action__["a" /* ToolBoxActions */].SELECT_ACTION:
            console.log("UI REDUCER", "Selecting action", action);
            state = Object.assign({}, state, {
                activeAction: action.body.action
            });
            break;
        case __WEBPACK_IMPORTED_MODULE_0__actions_toolbox_action__["a" /* ToolBoxActions */].SET_SELECTION_TYPE:
            console.log("UI REDUCER", "Selecting selection type", action);
            state = Object.assign({}, state, {
                activeSelection: action.body.selection
            });
            break;
    }
    return state;
}


/***/ }),

/***/ "./src/app/services/layer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_backgroundlayers_config__ = __webpack_require__("./src/app/config/backgroundlayers.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers__ = __webpack_require__("./node_modules/openlayers/dist/ol-debug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_openlayers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_openlayers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LayerService = /** @class */ (function () {
    function LayerService(http) {
        this.http = http;
    }
    LayerService.prototype.getLayers = function () {
        return this.getBackgroundLayers();
    };
    LayerService.prototype.getBackgroundLayers = function () {
        return __WEBPACK_IMPORTED_MODULE_1__config_backgroundlayers_config__["a" /* BACKGROUND_LAYERS */];
    };
    LayerService.prototype.loadExternalLayers = function (url) {
        var _this = this;
        var parser = null;
        var type = '';
        if (url.toLowerCase().indexOf('wms') > 0) {
            parser = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].WMSCapabilities();
            type = 'WMS';
        }
        else if (url.toLowerCase().indexOf('wmts') > 0) {
            parser = new __WEBPACK_IMPORTED_MODULE_2_openlayers__["format"].WMTSCapabilities();
            type = 'WMTS';
        }
        return this.http.get(url, { responseType: 'text' })
            .map(function (response) {
            var result = parser.read(response);
            var layers = [];
            console.log(result);
            if (type === 'WMS') {
                layers = _this.readWMSCapabilities(result);
            }
            else if (type === 'WMTS') {
                layers = _this.readWMTSCapabilities(result);
            }
            return layers;
        });
    };
    LayerService.prototype.readWMTSCapabilities = function (capabilities) {
        var layerList = [];
        console.log("RESULT", capabilities);
        capabilities.Contents.Layer.forEach(function (layer) {
            try {
                var sourceOptions = __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].WMTS.optionsFromCapabilities(capabilities, {
                    layer: layer.Identifier,
                    matrixSet: 'EPSG:3857'
                });
                if (sourceOptions) {
                    layerList.push({
                        name: layer.Title,
                        description: layer.Abstract,
                        layer: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
                            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].WMTS((sourceOptions)),
                            visible: false
                        })
                    });
                }
                else {
                    console.error("Layer " + layer.Title + " does not support EPSG:3857");
                }
            }
            catch (e) {
                console.error("Could not create WMTS layers for " + layer.Title);
            }
        });
        return layerList;
    };
    LayerService.prototype.readWMSCapabilities = function (capabilities) {
        var getMapURL = capabilities.Capability.Request.GetMap.DCPType[0].HTTP.Get.OnlineResource;
        var layerList = [];
        capabilities.Capability.Layer.Layer.forEach(function (layer) {
            if (layer.Layer) {
                layer.Layer.forEach(function (subLayer) {
                    layerList.push({
                        name: subLayer.Name,
                        description: subLayer.Abstract,
                        layer: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
                            extent: layer.BoundingBox.find(function (bbox) { return bbox.crs === 'EPSG:3857'; }).extent,
                            source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].TileWMS({
                                url: getMapURL,
                                params: { 'LAYERS': subLayer.Name, 'TILED': true },
                            }),
                            visible: false
                        })
                    });
                });
            }
            else {
                layerList.push({
                    name: layer.Name,
                    description: layer.Abstract,
                    layer: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["layer"].Tile({
                        extent: layer.BoundingBox.find(function (bbox) { return bbox.crs === 'EPSG:3857'; }).extent,
                        source: new __WEBPACK_IMPORTED_MODULE_2_openlayers__["source"].TileWMS({
                            url: getMapURL,
                            params: { 'LAYERS': layer.Name, 'TILED': true },
                        }),
                        visible: false
                    })
                });
            }
        });
        return layerList;
    };
    LayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], LayerService);
    return LayerService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map