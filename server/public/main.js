(self["webpackChunkspellio"] = self["webpackChunkspellio"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _pages_settings_selection_settings_selection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/settings-selection/settings-selection.component */ 7806);
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/game/game.component */ 270);




function AppComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "settings-selection", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onLevelSelected", function AppComponent_ng_container_6_Template_settings_selection_onLevelSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onSetLevel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "game", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onResetDifficulty", function AppComponent_ng_container_7_Template_game_onResetDifficulty_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.levelSelected = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("level", ctx_r1.levelSelected);
} }
const _c0 = function (a0) { return { "small": a0 }; };
class AppComponent {
    constructor() {
        this.levelSelected = '';
    }
    ngOnInit() {
    }
    onSetLevel(difficulty) {
        this.levelSelected = difficulty;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 5, consts: [[1, "app"], [1, "heading", 3, "ngClass"], [4, "ngIf"], [3, "onLevelSelected"], [3, "level", "onResetDifficulty"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Spellio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Test your English!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_ng_container_6_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_ng_container_7_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx.levelSelected));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.levelSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.levelSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pages_settings_selection_settings_selection_component__WEBPACK_IMPORTED_MODULE_0__.SettingsSelectionComponent, _pages_game_game_component__WEBPACK_IMPORTED_MODULE_1__.GameComponent], styles: [".app[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: rgba(238, 238, 238, 0.212);\n  padding-bottom: 20px;\n  margin-bottom: 20px;\n}\n.app[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  font-size: 4.875rem;\n  letter-spacing: 1px;\n  text-shadow: 1px 2px 0 #ccc;\n  margin-bottom: 8px;\n}\n.app[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2.8125rem;\n  font-family: Londrina-Light, cursive;\n}\n.app[_ngcontent-%COMP%]   .heading.small[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n}\n.app[_ngcontent-%COMP%]   .heading.small[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFFUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVRO0VBQ0ksb0JBQUE7RUFDQSxvQ0FBQTtBQUFaO0FBR1k7RUFDSSxpQkFBQTtBQURoQjtBQUdZO0VBQ0ksaUJBQUE7QUFEaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnMnO1xyXG4uYXBwIHtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDIzOCwgMjM4LCAwLjIxMik7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHJlbSg3OHB4KTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAycHggMCAjY2NjO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHJlbSg0NXB4KTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IExvbmRyaW5hLUxpZ2h0LCBjdXJzaXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnNtYWxsIHtcclxuICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _pages_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/game/game.component */ 270);
/* harmony import */ var _pages_settings_selection_settings_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/settings-selection/settings-selection.component */ 7806);
/* harmony import */ var _cmps_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cmps/keyboard/keyboard.component */ 6683);
/* harmony import */ var _directives_keyboard_click_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/keyboard-click.directive */ 9915);
/* harmony import */ var _cmps_score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cmps/score/score.component */ 3745);
/* harmony import */ var _pages_ending_screen_ending_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/ending-screen/ending-screen.component */ 2692);
/* harmony import */ var _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/leaderboards/leaderboards.component */ 9464);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _pages_game_game_component__WEBPACK_IMPORTED_MODULE_2__.GameComponent,
        _pages_settings_selection_settings_selection_component__WEBPACK_IMPORTED_MODULE_3__.SettingsSelectionComponent,
        _cmps_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_4__.KeyboardComponent,
        _directives_keyboard_click_directive__WEBPACK_IMPORTED_MODULE_5__.KeyboardClickDirective,
        _cmps_score_score_component__WEBPACK_IMPORTED_MODULE_6__.ScoreComponent,
        _pages_ending_screen_ending_screen_component__WEBPACK_IMPORTED_MODULE_7__.EndingScreenComponent,
        _pages_leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_8__.LeaderboardsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule] }); })();


/***/ }),

/***/ 6683:
/*!*****************************************************!*\
  !*** ./src/app/cmps/keyboard/keyboard.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardComponent": () => (/* binding */ KeyboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _directives_keyboard_click_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives/keyboard-click.directive */ 9915);


class KeyboardComponent {
    constructor() { }
}
KeyboardComponent.ɵfac = function KeyboardComponent_Factory(t) { return new (t || KeyboardComponent)(); };
KeyboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KeyboardComponent, selectors: [["keyboard"]], decls: 95, vars: 0, consts: [[1, "keyboard-base"], [1, "key", "tab"], ["keyboardClick", "", 1, "key", "q"], ["keyboardClick", "", 1, "key", "w"], ["keyboardClick", "", 1, "key", "e"], ["keyboardClick", "", 1, "key", "r"], ["keyboardClick", "", 1, "key", "t"], ["keyboardClick", "", 1, "key", "y"], ["keyboardClick", "", 1, "key", "u"], ["keyboardClick", "", 1, "key", "i"], ["keyboardClick", "", 1, "key", "o"], ["keyboardClick", "", 1, "key", "p"], ["keyboardClick", "", 1, "key", "["], ["keyboardClick", "", 1, "key", "]"], ["keyboardClick", "", 1, "key", "\\"], ["keyboardClick", "", 1, "key", "capslock"], ["keyboardClick", "", 1, "key", "a"], ["keyboardClick", "", 1, "key", "s"], ["keyboardClick", "", 1, "key", "d"], ["keyboardClick", "", 1, "key", "f"], ["keyboardClick", "", 1, "key", "g"], ["keyboardClick", "", 1, "key", "h"], ["keyboardClick", "", 1, "key", "j"], ["keyboardClick", "", 1, "key", "k"], ["keyboardClick", "", 1, "key", "l"], ["keyboardClick", "", 1, "key", ";"], ["keyboardClick", "", 1, "key", "'"], ["keyboardClick", "", 1, "key", "backspace"], ["keyboardClick", "", 1, "key", "shift", "lshift"], ["keyboardClick", "", 1, "key", "z"], ["keyboardClick", "", 1, "key", "x"], ["keyboardClick", "", 1, "key", "c"], ["keyboardClick", "", 1, "key", "v"], ["keyboardClick", "", 1, "key", "b"], ["keyboardClick", "", 1, "key", "n"], ["keyboardClick", "", 1, "key", "m"], ["keyboardClick", "", 1, "key", ","], ["keyboardClick", "", 1, "key", "."], ["keyboardClick", "", 1, "key", "/"], ["keyboardClick", "", 1, "key", "shift", "rshift"], ["keyboardClick", "", 1, "key", "control", "lctrl"], ["keyboardClick", "", 1, "key", "lalt"], ["keyboardClick", "", 1, "key", "command"], ["keyboardClick", "", 1, "key", "space"], ["keyboardClick", "", 1, "key", "ralt"], ["keyboardClick", "", 1, "key", "control", "rctrl"], ["keyboardClick", "", 1, "key", "fn"]], template: function KeyboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Q");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "W");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "R");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Y");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "U");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "I");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "O");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "[");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "]");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\\");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "CapsLk");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "J");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, ";");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Shift");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "N");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Shift");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Ctrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Cmd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Cmd");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Ctrl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Fn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_directives_keyboard_click_directive__WEBPACK_IMPORTED_MODULE_0__.KeyboardClickDirective], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n}\n@media screen and (max-width: 760px) {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n.keyboard-base[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1085px;\n  padding: 20px;\n  background-color: #305B88;\n  color: #333;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  border-radius: 10px;\n  display: grid;\n  grid-template-columns: repeat(30, minmax(10px, 30px));\n  grid-template-rows: repeat(4, 60px);\n  grid-gap: 5px;\n}\n.key[_ngcontent-%COMP%] {\n  background-color: #f3f3f3;\n  border: 2px solid black;\n  border-radius: 5px;\n  grid-column: span 2;\n  font-size: 20px;\n  text-align: center;\n  padding-top: 17px;\n  cursor: pointer;\n}\n.key[_ngcontent-%COMP%]:hover {\n  border: 1px solid #eeeeee;\n}\n.key[_ngcontent-%COMP%]:active {\n  box-shadow: inset 0 0 50px #ddd, 0 0 2px #888;\n}\n.key.active[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 50px #b4b3b3, 0 0 2px #b4b3b3;\n}\n.delete[_ngcontent-%COMP%] {\n  grid-column: span 4;\n}\n.tab[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.\\[_ngcontent-%COMP%]  {\n  grid-column: span 3;\n}\n.capslock[_ngcontent-%COMP%] {\n  grid-column: span 4;\n}\n.backspace[_ngcontent-%COMP%] {\n  grid-column: span 4;\n}\n.lshift[_ngcontent-%COMP%] {\n  grid-column: span 5;\n}\n.rshift[_ngcontent-%COMP%] {\n  grid-column: span 5;\n}\n.lctrl[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.command[_ngcontent-%COMP%] {\n  grid-column: span 3;\n}\n.space[_ngcontent-%COMP%] {\n  grid-column: span 13;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtleWJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNKO0FBQ0k7RUFMSjtJQU1RLGFBQUE7RUFFTjtBQUNGO0FBQUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxREFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtBQUdKO0FBQUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBRkk7RUFDSSx5QkFBQTtBQUlSO0FBREk7RUFDSSw2Q0FBQTtBQUdSO0FBREk7RUFDSSxtREFBQTtBQUdSO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBQ0E7RUFDSSxtQkFBQTtBQUVKO0FBRUE7RUFDSSxvQkFBQTtBQUNKIiwiZmlsZSI6ImtleWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4ua2V5Ym9hcmQtYmFzZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTA4NXB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDVCODg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMzAsIG1pbm1heCgxMHB4LCAzMHB4KSk7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCA2MHB4KTtcclxuICAgIGdyaWQtZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5rZXkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNTBweCAjZGRkLCAwIDAgMnB4ICM4ODg7XHJcbiAgICB9XHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDUwcHggI2I0YjNiMywgMCAwIDJweCAjYjRiM2IzO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XHJcbn1cclxuXHJcbi50YWIge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxufVxyXG5cclxuLlxcIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDM7XHJcbn1cclxuXHJcbi5jYXBzbG9jayB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiA0O1xyXG59XHJcblxyXG4uYmFja3NwYWNlIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDQ7XHJcbn1cclxuXHJcbi5sc2hpZnQge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gNTtcclxufVxyXG5cclxuLnJzaGlmdCB7XHJcbiAgICBncmlkLWNvbHVtbjogc3BhbiA1O1xyXG59XHJcblxyXG4ubGN0cmwge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxufVxyXG5cclxuLmNvbW1hbmQge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMztcclxuICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNwYWNlIHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEzO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3745:
/*!***********************************************!*\
  !*** ./src/app/cmps/score/score.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScoreComponent": () => (/* binding */ ScoreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



class ScoreComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.score = 0;
        this.animatedScore = null;
    }
    updateScore(action, guessStartTime) {
        let scoreToAdd = 0;
        let guessEndTime = Date.now();
        if (action === 'add') {
            if (!guessStartTime)
                return;
            scoreToAdd = this.gameService.calculateScore(guessStartTime, guessEndTime);
        }
        else if (action === 'lower') {
            scoreToAdd = this.gameService.calculateScore(null, null);
        }
        this.animatedScore = scoreToAdd;
        setTimeout(() => {
            this.animatedScore = null;
        }, 750);
        this.score += scoreToAdd;
    }
    get scoreValue() {
        return this.score;
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
ScoreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["score"]], decls: 7, vars: 3, consts: [[1, "score-container", "flex", "align-center"], [1, "score-txt"], [3, "ngClass"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Score: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.score);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("ngClass", "animated-added-score ", ctx.animatedScore && "swipe", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.animatedScore);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  right: 0;\n}\n@media screen and (max-width: 760px) {\n  [_nghost-%COMP%] {\n    position: static;\n  }\n}\n.score-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.score-container[_ngcontent-%COMP%]   .score-txt[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  padding: 8px 20px;\n  padding-right: 0;\n}\n@media screen and (max-width: 760px) {\n  .score-container[_ngcontent-%COMP%]   .score-txt[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.score-container[_ngcontent-%COMP%]   .animated-added-score[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  position: absolute;\n  top: 100px;\n  right: 0;\n  transition: all 0.3s;\n}\n.score-container[_ngcontent-%COMP%]   .animated-added-score.swipe[_ngcontent-%COMP%] {\n  animation: slideup 0.3s both;\n}\n@keyframes slideup {\n  0% {\n    top: 100px;\n  }\n  100% {\n    opacity: 0.2;\n    top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FBREo7QUFHSTtFQUpKO0lBS1EsZ0JBQUE7RUFBTjtBQUNGO0FBR0E7RUFDSSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNRO0VBTEo7SUFNUSxlQUFBO0VBRVY7QUFDRjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBRUEsb0JBQUE7QUFDUjtBQUNRO0VBQ0ksNEJBQUE7QUFDWjtBQUlBO0VBQ0k7SUFDSSxVQUFBO0VBRE47RUFHRTtJQUNJLFlBQUE7SUFDQSxTQUFBO0VBRE47QUFDRiIsImZpbGUiOiJzY29yZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2NvcmUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5zY29yZS10eHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDIwcHgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYW5pbWF0ZWQtYWRkZWQtc2NvcmUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDIwcHgpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG5cclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcbiAgICAgICAgJi5zd2lwZSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogc2xpZGV1cCAwLjNzIGJvdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRldXAge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9915:
/*!********************************************************!*\
  !*** ./src/app/directives/keyboard-click.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyboardClickDirective": () => (/* binding */ KeyboardClickDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/game.service */ 1397);


class KeyboardClickDirective {
    constructor(el, gameService) {
        this.gameService = gameService;
        this.gameService.clickedLetter$.subscribe(letterData => {
            const classes = Array.from(el.nativeElement.classList);
            if (classes.includes(letterData.letter)) {
                el.nativeElement.classList.add('active');
                this.timeoutId = setTimeout(() => {
                    el.nativeElement.classList.remove('active');
                }, 200);
            }
        });
    }
    onClick(elBtn) {
        const letter = elBtn.classList[1];
        this.gameService.setClickedLetter({ letter, origin: 'v-keyboard' });
    }
}
KeyboardClickDirective.ɵfac = function KeyboardClickDirective_Factory(t) { return new (t || KeyboardClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
KeyboardClickDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: KeyboardClickDirective, selectors: [["", "keyboardClick", ""]], hostBindings: function KeyboardClickDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KeyboardClickDirective_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } } });


/***/ }),

/***/ 2692:
/*!****************************************************************!*\
  !*** ./src/app/pages/ending-screen/ending-screen.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EndingScreenComponent": () => (/* binding */ EndingScreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../leaderboards/leaderboards.component */ 9464);




function EndingScreenComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r0.user$)) == null ? null : tmp_0_0.username, ",");
} }
class EndingScreenComponent {
    constructor(gameService) {
        this.gameService = gameService;
    }
    ngOnInit() {
        this.user$ = this.gameService.currUser$;
    }
}
EndingScreenComponent.ɵfac = function EndingScreenComponent_Factory(t) { return new (t || EndingScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
EndingScreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EndingScreenComponent, selectors: [["ending-screen"]], inputs: { endingScore: "endingScore" }, decls: 6, vars: 2, consts: [[1, "ending-screen", "flex", "column", "align-center"], [4, "ngIf"]], template: function EndingScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Good job, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, EndingScreenComponent_span_3_Template, 3, 3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "leaderboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.user$);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" you scored ", ctx.endingScore, " points! \uD83E\uDD73");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _leaderboards_leaderboards_component__WEBPACK_IMPORTED_MODULE_1__.LeaderboardsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe], styles: [".ending-screen[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 2.5rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuZGluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURSIiwiZmlsZSI6ImVuZGluZy1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9mdW5jdGlvbnNcIjtcclxuLmVuZGluZy1zY3JlZW4ge1xyXG4gICAgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogcmVtKDQwcHgpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 270:
/*!**********************************************!*\
  !*** ./src/app/pages/game/game.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! random-words */ 2519);
/* harmony import */ var random_words__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(random_words__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/word.service */ 8122);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ending_screen_ending_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ending-screen/ending-screen.component */ 2692);
/* harmony import */ var _cmps_score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/score/score.component */ 3745);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _cmps_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/keyboard/keyboard.component */ 6683);

// @ts-ignore












const _c0 = ["score"];
const _c1 = ["guessInput"];
function GameComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GameComponent_section_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r3.onStartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GameComponent_section_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.onResetDifficulty.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Change Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r0.isFirstTime ? "I am ready" : "Play again");
} }
function GameComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ending-screen", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("endingScore", ctx_r1.endingScore);
} }
function GameComponent_section_3_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GameComponent_section_3_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r15.onGetHint(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function GameComponent_section_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c2 = function (a0) { return { "filled": a0 }; };
function GameComponent_section_3_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "span", 22);
} if (rf & 2) {
    const idx_r18 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMapInterpolate1"]("word-remaining word-", idx_r18 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](4, _c2, ctx_r10.currWordNum >= idx_r18 + 1));
} }
function GameComponent_section_3_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.error);
} }
function GameComponent_section_3_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.hint);
} }
const _c3 = function () { return []; };
const _c4 = function (a0) { return { "wrong": a0 }; };
function GameComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GameComponent_section_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r19.playWordSound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Play word again");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, GameComponent_section_3_button_4_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, GameComponent_section_3_ng_template_5_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function GameComponent_section_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r21.onResetDifficulty.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Change Difficulty");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "score", null, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, GameComponent_section_3_span_12_Template, 1, 6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, GameComponent_section_3_span_13_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, GameComponent_section_3_span_14_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function GameComponent_section_3_Template_form_ngSubmit_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r22.onWordSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function GameComponent_section_3_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r23.userInput = $event; })("keydown", function GameComponent_section_3_Template_input_keydown_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r24.onUserInput($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Guess");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "keyboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.isLoadingHint)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c3).constructor(ctx_r2.totalWords));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.hint);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](8, _c4, ctx_r2.isWrongGuess))("ngModel", ctx_r2.userInput);
} }
class GameComponent {
    constructor(wordService, gameService) {
        this.wordService = wordService;
        this.gameService = gameService;
        this.wordsRemaining = 3;
        this.totalWords = this.wordsRemaining;
        this.currWordNum = 0;
        this.isGameOn = false;
        this.isFirstTime = true;
        this.isWrongGuess = false;
        this.isLoadingHint = false;
        this.randomWord = '';
        this.userInput = '';
        this.subs$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        this.error = '';
        this.hint = '';
        this.startGuessTime = null;
        this.onResetDifficulty = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    }
    set input(element) {
        if (element) {
            element.nativeElement.focus();
        }
    }
    ngOnInit() {
        this.initLetterSub();
    }
    ngOnDestroy() {
        this.subs$.next(true);
        this.subs$.unsubscribe();
    }
    onStartGame() {
        this.isGameOn = true;
        this.isFirstTime = false;
        this.wordsRemaining = this.wordService.getLevelWordsCount(this.level);
        this.currWordNum = 0;
        this.totalWords = this.wordsRemaining;
        this.generateAndPlayRandomWord();
    }
    generateAndPlayRandomWord() {
        this.randomWord = random_words__WEBPACK_IMPORTED_MODULE_0___default()();
        this.wordService.textToSpeech(this.randomWord)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.subs$))
            .subscribe(() => {
            this.startGuessTime = Date.now();
            this.playWordSound();
        });
    }
    playWordSound() {
        const audio = new Audio(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.audioURL}/${this.randomWord}.mp3`);
        audio.play();
    }
    onUserInput(ev) {
        this.gameService.setClickedLetter({ letter: ev.key.toLowerCase(), origin: 'input' });
    }
    onWordSubmit(ev) {
        ev.preventDefault();
        this.userInput = this.userInput.toLowerCase();
        if (this.userInput === this.randomWord) {
            this.onCorrectSpelling();
        }
        else {
            this.onWrongSpelling();
        }
    }
    onCorrectSpelling() {
        var _a;
        (_a = this.scoreCmp) === null || _a === void 0 ? void 0 : _a.updateScore('add', this.startGuessTime);
        if (this.wordsRemaining > 0) {
            this.wordsRemaining--;
            this.currWordNum++;
            this.hint = '';
            this.error = '';
            if (this.wordsRemaining <= 0) {
                this.onGameOver();
            }
            else {
                this.generateAndPlayRandomWord();
            }
            this.userInput = '';
        }
    }
    onWrongSpelling() {
        var _a;
        this.isWrongGuess = true;
        const errorSound = new Audio('../../../assets/sounds/error.wav');
        errorSound.play();
        (_a = this.scoreCmp) === null || _a === void 0 ? void 0 : _a.updateScore('lower', null);
        setTimeout(() => {
            this.isWrongGuess = false;
        }, 1000);
    }
    onGameOver() {
        var _a;
        this.endingScore = (_a = this.scoreCmp) === null || _a === void 0 ? void 0 : _a.scoreValue;
        this.isGameOn = false;
        this.gameService.updateLeaderboard(this.endingScore || 0, this.level).subscribe();
    }
    handleLetter(letterData) {
        if (!this.isGameOn)
            return;
        const { letter, origin } = letterData;
        if (origin === 'input')
            return;
        if (letter === 'backspace')
            this.userInput = this.userInput.slice(0, this.userInput.length - 1);
        if (letter.length > 1)
            return;
        this.userInput += letter;
    }
    onGetHint() {
        if (this.hint)
            return;
        this.isLoadingHint = true;
        this.wordService.getWordDefinition(this.randomWord)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.subs$))
            .subscribe(definition => {
            this.isLoadingHint = false;
            this.hint = definition;
        }, err => {
            this.error = err;
        });
    }
    initLetterSub() {
        this.gameService.clickedLetter$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.subs$))
            .subscribe(letterData => {
            this.handleLetter(letterData);
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_word_service__WEBPACK_IMPORTED_MODULE_2__.WordService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__.GameService)); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.scoreCmp = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { level: "level" }, outputs: { onResetDifficulty: "onResetDifficulty" }, decls: 4, vars: 3, consts: [[1, "game-app"], ["class", "pre-game-screen flex justify-center", 4, "ngIf"], ["class", "ending-screen", 4, "ngIf"], ["class", "game-container flex column align-center", 4, "ngIf"], [1, "pre-game-screen", "flex", "justify-center"], [1, "regular-btn", 3, "click"], [1, "ending-screen"], [3, "endingScore"], [1, "game-container", "flex", "column", "align-center"], [1, "actions", "flex", "justify-center"], ["class", "regular-btn", 3, "click", 4, "ngIf", "ngIfElse"], ["showSpinner", ""], ["score", ""], [1, "progress-count-container", "flex"], [3, "class", "ngClass", 4, "ngFor", "ngForOf"], ["class", "error", 4, "ngIf"], ["class", "hint", 4, "ngIf"], [1, "flex", "column", "align-center", 3, "ngSubmit"], ["type", "text", "name", "user-input", "autocomplete", "off", "placeholder", "Start typing...", 3, "ngClass", "ngModel", "ngModelChange", "keydown"], ["guessInput", "", "keyboardInput", ""], [1, "regular-btn", "flex"], ["src", "../../../assets/img/spinner.svg", 1, "spinner"], [3, "ngClass"], [1, "error"], [1, "hint"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, GameComponent_section_1_Template, 5, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, GameComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, GameComponent_section_3_Template, 22, 10, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isGameOn);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isGameOn && ctx.endingScore);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isGameOn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _ending_screen_ending_screen_component__WEBPACK_IMPORTED_MODULE_4__.EndingScreenComponent, _cmps_score_score_component__WEBPACK_IMPORTED_MODULE_5__.ScoreComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, _cmps_keyboard_keyboard_component__WEBPACK_IMPORTED_MODULE_6__.KeyboardComponent], styles: [".game-app[_ngcontent-%COMP%] {\n  max-width: 1085px;\n  margin: 0 auto;\n}\n.game-app[_ngcontent-%COMP%]   .pre-game-screen[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 20px;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 8px;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n@media screen and (max-width: 430px) {\n  .game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    min-width: 161.65px;\n    margin-left: 0 !important;\n  }\n  .game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-of-type) {\n    margin-bottom: 5px;\n  }\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .progress-count-container[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .progress-count-container[_ngcontent-%COMP%]   .word-remaining[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 3rem;\n  height: 3rem;\n  padding-top: 0;\n  margin: 0.5rem;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  background: #d9d2d2;\n  box-shadow: inset 0 0rem 0 #c4beb8, 0 0.2rem 0 #979693;\n  font-size: 1.5rem;\n  text-transform: uppercase;\n  color: #00000000;\n  transition: background 200ms, padding-top 500ms, box-shadow 500ms;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .progress-count-container[_ngcontent-%COMP%]   .word-remaining.filled[_ngcontent-%COMP%] {\n  background: #55d055;\n  box-shadow: inset 0 0rem 0 #429142, 0 0.2rem 0 #328432;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%], .game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  text-align: center;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  max-width: 100%;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: Londrina-Black, cursive;\n  max-width: 460px;\n  font-size: 3.125rem;\n  outline: none;\n  color: #fff;\n  text-shadow: 1px 2px 0 #f04882;\n  letter-spacing: 1.8px;\n  border: none;\n  text-align: center;\n  background: none;\n  overflow: hidden;\n  max-width: 100%;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  text-align: center;\n  -webkit-text-fill-color: white;\n  -webkit-text-stroke-color: white;\n  opacity: 0.5;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input.wrong[_ngcontent-%COMP%] {\n  position: relative;\n  animation: shake 0.3s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\n  background: url('error-icon.png') 95% 50% no-repeat;\n  background-size: 25px 25px;\n}\n.game-app[_ngcontent-%COMP%]   .game-container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Londrina, cursive;\n  background-color: #ff754a;\n  border: none;\n  border-radius: 3px;\n  font-size: 1.875rem;\n  padding: 10px 20px;\n  cursor: pointer;\n  color: #fff;\n  transition: 0.3s;\n  margin: 10px 0;\n  width: 36%;\n}\n@keyframes shake {\n  0%, 100% {\n    transform: translate3d(0, 0, 0);\n  }\n  33% {\n    transform: translate3d(-6px, 0, 0);\n  }\n  66% {\n    transform: translate3d(6px, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQ0VBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHWTtFQUNJLGlCQUFBO0FBRGhCO0FBS0k7RUFDSSxrQkFBQTtBQUhSO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBSVk7RUFDSSxnQkFBQTtBQUZoQjtBQUlZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFGaEI7QUFJWTtFQVRKO0lBVVEsc0JBQUE7SUFDQSxtQkFBQTtFQURkO0VBR2M7SUFDSSxtQkFBQTtJQUNBLHlCQUFBO0VBRGxCO0VBRWtCO0lBQ0ksa0JBQUE7RUFBdEI7QUFDRjtBQUlRO0VBQ0ksbUJBQUE7QUFGWjtBQUdZO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUVBQUE7QUFEaEI7QUFHZ0I7RUFDSSxtQkFBQTtFQUNBLHNEQUFBO0FBRHBCO0FBTVE7O0VBRUksbUJBQUE7RUFDQSxrQkFBQTtBQUpaO0FBT1E7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFMWjtBQU1ZO0VEcEVSLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUM0RFksZUFBQTtBQU1oQjtBQUxnQjtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFPcEI7QUFMZ0I7RUFDSSxrQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtBQU9wQjtBQUpZO0VEdkVSLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUNnRVksVUFBQTtBQWVoQjtBQVRBO0VBQ0k7SUFFSSwrQkFBQTtFQVdOO0VBUkU7SUFDSSxrQ0FBQTtFQVVOO0VBUEU7SUFDSSxpQ0FBQTtFQVNOO0FBQ0YiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJyZWFrcG9pbnQgbWl4aW5zICovXHJcbkBpbXBvcnQgXCIuLi9zZXR1cC9mdW5jdGlvbnNcIjtcclxuXHJcbkBtaXhpbiBpbnB1dCB7XHJcbiAgICBmb250LWZhbWlseTogTG9uZHJpbmEtQmxhY2ssIGN1cnNpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDQ2MHB4O1xyXG4gICAgZm9udC1zaXplOiByZW0oNTBweCk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDJweCAwICNmMDQ4ODI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS44cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5AbWl4aW4gZ2FtZS1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IExvbmRyaW5hLCBjdXJzaXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzU0YTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDMwcHgpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG4uZ2FtZS1hcHAge1xyXG4gICAgbWF4LXdpZHRoOiAxMDg1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC5wcmUtZ2FtZS1zY3JlZW4ge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICYgPiAqOm5vdCg6Zmlyc3Qtb2YtdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTYxLjY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2dyZXNzLWNvdW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIC53b3JkLXJlbWFpbmluZyB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDlkMmQyO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwcmVtIDAgI2M0YmViOCwgMCAwLjJyZW0gMCAjOTc5NjkzO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDAwMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMsIHBhZGRpbmctdG9wIDUwMG1zLCBib3gtc2hhZG93IDUwMG1zO1xyXG5cclxuICAgICAgICAgICAgICAgICYuZmlsbGVkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTVkMDU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMHJlbSAwICM0MjkxNDIsIDAgMC4ycmVtIDAgIzMyODQzMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLFxyXG4gICAgICAgIC5oaW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgaW5wdXQ7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYud3Jvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IHNoYWtlIDAuM3MgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpIGJvdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9lcnJvci1pY29uLnBuZ1wiKSA5NSUgNTAlIG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI1cHggMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgZ2FtZS1idG47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzYlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcclxuICAgIDAlLFxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAzMyUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTZweCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgNjYlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDZweCwgMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9464:
/*!**************************************************************!*\
  !*** ./src/app/pages/leaderboards/leaderboards.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardsComponent": () => (/* binding */ LeaderboardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function LeaderboardsComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 5);
} }
function LeaderboardsComponent_ng_container_10_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userScore_r4 = ctx.$implicit;
    const idx_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", idx_r5 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", userScore_r4.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, userScore_r4.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](userScore_r4.score);
} }
function LeaderboardsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LeaderboardsComponent_ng_container_10_li_5_Template, 9, 6, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 1, ctx_r2.leaderboardScores$));
} }
class LeaderboardsComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.selectedLvl = 'medium';
    }
    ngOnInit() {
        this.onFetchLeaderboardScores();
    }
    onFetchLeaderboardScores(lvl = 'medium') {
        this.selectedLvl = lvl;
        this.leaderboardScores$ = this.gameService.getLeaderboardScores(lvl);
    }
}
LeaderboardsComponent.ɵfac = function LeaderboardsComponent_Factory(t) { return new (t || LeaderboardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
LeaderboardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeaderboardsComponent, selectors: [["leaderboards"]], decls: 12, vars: 7, consts: [[1, "leaderboard", "flex", "column", "align-center"], [1, "levels", "flex"], [3, "ngClass", "click"], ["loading", ""], [4, "ngIf", "ngIfElse"], ["src", "../../../assets/img/spinner.svg", "alt", "", 1, "spinner"], [1, "trophy-container"], ["src", "../../../assets/img/trophy.png", "alt", ""], [1, "leaderboard-container", "flex", "column", "align-center"], ["class", "flex", 4, "ngFor", "ngForOf"], [1, "flex"], [1, "user-score", "flex", "space-around"], [1, "position"], [1, "username", 3, "title"], [1, "score"]], template: function LeaderboardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeaderboardsComponent_Template_button_click_2_listener() { return ctx.onFetchLeaderboardScores("easy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Easy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeaderboardsComponent_Template_button_click_4_listener() { return ctx.onFetchLeaderboardScores("medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeaderboardsComponent_Template_button_click_6_listener() { return ctx.onFetchLeaderboardScores("hard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Hard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LeaderboardsComponent_ng_template_8_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LeaderboardsComponent_ng_container_10_Template, 7, 3, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.selectedLvl === "easy" ? "highlighted-option" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.selectedLvl === "medium" ? "highlighted-option" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.selectedLvl === "hard" ? "highlighted-option" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, ctx.leaderboardScores$))("ngIfElse", _r0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe], styles: [".leaderboard[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%] {\n  max-width: 980px;\n  background-color: rgba(238, 238, 238, 0.212);\n  border-radius: 25px;\n  padding: 5px;\n  margin-bottom: 10px;\n}\n.leaderboard[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  width: 120px;\n  text-align: center;\n  background-color: transparent;\n  color: #fff;\n  font-size: 1.25rem;\n  padding: 10px;\n  transition: border 0.3s;\n  letter-spacing: 0.8px;\n  border: 2px solid transparent;\n  transition: border 0.3s;\n}\n@media screen and (max-width: 496px) {\n  .leaderboard[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 105px;\n  }\n}\n.leaderboard[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   button.highlighted-option[_ngcontent-%COMP%] {\n  border: 2px solid #f04882;\n}\n.leaderboard[_ngcontent-%COMP%]   .trophy-container[_ngcontent-%COMP%] {\n  width: 120px;\n  margin-bottom: 15px;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%] {\n  width: 490px;\n}\n@media screen and (max-width: 496px) {\n  .leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.5625rem;\n  border-radius: 3px;\n  padding: 5px;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type {\n  background-color: #fec107;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2) {\n  background-color: silver;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(3) {\n  background-color: #ac7d18;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-bottom: 5px;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  width: 45px;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  width: 120px;\n  text-align: center;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.leaderboard[_ngcontent-%COMP%]   .leaderboard-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .user-score[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  width: 55px;\n}\n.leaderboard[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlcmJvYXJkcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURSO0FBRVE7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0FBQVo7QUFFWTtFQWJKO0lBY1EsWUFBQTtFQUNkO0FBQ0Y7QUFBWTtFQUNJLHlCQUFBO0FBRWhCO0FBRUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVJO0VBQ0ksWUFBQTtBQUFSO0FBRVE7RUFISjtJQUlRLFVBQUE7RUFDVjtBQUNGO0FBQ1E7RUFDSSxXQUFBO0FBQ1o7QUFDWTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ2hCO0FBQWdCO0VBQ0kseUJBQUE7QUFFcEI7QUFBZ0I7RUFDSSx3QkFBQTtBQUVwQjtBQUFnQjtFQUNJLHlCQUFBO0FBRXBCO0FBQWdCO0VBQ0ksa0JBQUE7QUFFcEI7QUFBZ0I7RUFDSSxXQUFBO0FBRXBCO0FBRW9CO0VBQ0ksV0FBQTtBQUF4QjtBQUVvQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUF4QjtBQUVvQjtFQUNJLFdBQUE7QUFBeEI7QUFNSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSlIiLCJmaWxlIjoibGVhZGVyYm9hcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvc2V0dXAvZnVuY3Rpb25zXCI7XHJcbi5sZWFkZXJib2FyZCB7XHJcbiAgICAubGV2ZWxzIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk4MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMC4yMTIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiByZW0oMjBweCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjNzO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4zcztcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5oaWdobGlnaHRlZC1vcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YwNDg4MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50cm9waHktY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC5sZWFkZXJib2FyZC1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0OTBweDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk2cHgpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IHJlbSgyNXB4KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYzEwNztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYzdkMTg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJiA+ICoge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC51c2VyLXNjb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAucG9zaXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnVzZXJuYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2NvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3Bpbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 7806:
/*!**************************************************************************!*\
  !*** ./src/app/pages/settings-selection/settings-selection.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsSelectionComponent": () => (/* binding */ SettingsSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/game.service */ 1397);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);





function SettingsSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Enter your name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SettingsSelectionComponent_div_1_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSaveUsername(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
const _c1 = function (a0) { return { "show": a0 }; };
class SettingsSelectionComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.onLevelSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.levelDescription = '';
        this.currHoveredLevel = '';
    }
    ngOnInit() {
        this.currUserSub = this.gameService.currUser$.subscribe(user => this.user = user);
    }
    ngOnDestroy() {
        var _a;
        (_a = this.currUserSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    onSaveUsername(username) {
        if (!username)
            return;
        this.gameService.setCurrUsername(username);
    }
    onLevelSelect(difficulty) {
        if (!this.user)
            return;
        this.onLevelSelected.emit(difficulty);
    }
    setLevelDescription(level) {
        if (level === 'easy') {
            this.levelDescription = 'Spell 3 words';
            this.currHoveredLevel = 'easy';
        }
        else if (level === 'medium') {
            this.levelDescription = 'Spell 5 words';
            this.currHoveredLevel = 'medium';
        }
        else if (level === 'hard') {
            this.levelDescription = 'Spell 10 words';
            this.currHoveredLevel = 'hard';
        }
        else {
            this.levelDescription = '';
            this.currHoveredLevel = '';
        }
    }
}
SettingsSelectionComponent.ɵfac = function SettingsSelectionComponent_Factory(t) { return new (t || SettingsSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_0__.GameService)); };
SettingsSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SettingsSelectionComponent, selectors: [["settings-selection"]], outputs: { onLevelSelected: "onLevelSelected" }, decls: 18, vars: 19, consts: [[1, "settings", "flex", "column", "align-center"], ["class", "username", 4, "ngIf"], [1, "levels-container", 3, "ngClass"], [1, "levels", "flex"], [1, "regular-btn", 3, "disabled", "mouseenter", "mouseleave", "click"], [1, "description", "level-description-easy", 3, "ngClass"], [1, "description", "level-description-medium", 3, "ngClass"], [1, "description", "level-description-hard", 3, "ngClass"], [1, "username"], [1, "flex", "column", 3, "ngSubmit"], ["type", "text", "required", ""], ["usernameInput", ""]], template: function SettingsSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SettingsSelectionComponent_div_1_Template, 8, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Select Difficulty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SettingsSelectionComponent_Template_button_mouseenter_6_listener() { return ctx.setLevelDescription("easy"); })("mouseleave", function SettingsSelectionComponent_Template_button_mouseleave_6_listener() { return ctx.setLevelDescription(""); })("click", function SettingsSelectionComponent_Template_button_click_6_listener() { return ctx.onLevelSelect("easy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Easy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SettingsSelectionComponent_Template_button_mouseenter_10_listener() { return ctx.setLevelDescription("medium"); })("mouseleave", function SettingsSelectionComponent_Template_button_mouseleave_10_listener() { return ctx.setLevelDescription(""); })("click", function SettingsSelectionComponent_Template_button_click_10_listener() { return ctx.onLevelSelect("medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Medium ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function SettingsSelectionComponent_Template_button_mouseenter_14_listener() { return ctx.setLevelDescription("hard"); })("mouseleave", function SettingsSelectionComponent_Template_button_mouseleave_14_listener() { return ctx.setLevelDescription(""); })("click", function SettingsSelectionComponent_Template_button_click_14_listener() { return ctx.onLevelSelect("hard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Hard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, !ctx.user));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c1, ctx.currHoveredLevel === "easy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.levelDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c1, ctx.currHoveredLevel === "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.levelDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.currHoveredLevel === "hard"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.levelDescription, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  max-width: 1140px;\n  margin: 0 auto;\n}\n.settings[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  font-family: Londrina-Light, cursive;\n  text-align: center;\n}\n.settings[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 496px) {\n  .settings[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n}\n.settings[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font-family: Londrina-Black, cursive;\n  max-width: 460px;\n  font-size: 3.125rem;\n  outline: none;\n  color: #fff;\n  text-shadow: 1px 2px 0 #f04882;\n  letter-spacing: 1.8px;\n  border: none;\n  text-align: center;\n  background: none;\n  overflow: hidden;\n  border-bottom: 3px solid #f04882;\n}\n.settings[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: Londrina, cursive;\n  background-color: #ff754a;\n  border: none;\n  border-radius: 3px;\n  font-size: 1.875rem;\n  padding: 10px 20px;\n  cursor: pointer;\n  color: #fff;\n  transition: 0.3s;\n  margin: 10px 0;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%] {\n  transition: opacity 0.3s;\n}\n.settings[_ngcontent-%COMP%]   .levels-container.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 30px;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50px;\n  left: -50%;\n  visibility: hidden;\n  opacity: 0;\n  max-height: 0;\n  max-width: 0;\n  font-size: 1.125rem;\n  border-radius: 3px;\n  transition: opacity 0.3s;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .description.show[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  background-color: #f3ca40;\n  color: #333;\n  width: 200px;\n  padding: 20px;\n  max-height: initial;\n  max-width: initial;\n}\n.settings[_ngcontent-%COMP%]   .levels-container[_ngcontent-%COMP%]   .levels[_ngcontent-%COMP%]   .level-description-medium[_ngcontent-%COMP%] {\n  left: -30%;\n}\n@media screen and (max-width: 496px) {\n  .settings[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFzc2V0c1xcc3R5bGVzXFxzZXR1cFxcX21peGlucy5zY3NzIiwic2V0dGluZ3Mtc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FDRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBRFI7QUFJSTtFQUNJLG1CQUFBO0FBRlI7QUFHUTtFQUZKO0lBR1EsVUFBQTtFQUFWO0FBQ0Y7QUFDUTtFRGpCSixvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VDU1EsZ0NBQUE7QUFXWjtBQVRRO0VEUkosOEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ29CSjtBQWpCSTtFQUNJLHdCQUFBO0FBbUJSO0FBbEJRO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFvQlo7QUFsQlE7RUFDSSxrQkFBQTtBQW9CWjtBQWpCWTtFQUNJLGtCQUFBO0FBbUJoQjtBQWpCZ0I7RUFDSSxpQkFBQTtBQW1CcEI7QUFoQlk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUE7QUFpQmhCO0FBZmdCO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBaUJwQjtBQWRZO0VBQ0ksVUFBQTtBQWdCaEI7QUFaSTtFQXBFSjtJQXFFUSxVQUFBO0VBZU47QUFDRiIsImZpbGUiOiJzZXR0aW5ncy1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCcmVha3BvaW50IG1peGlucyAqL1xyXG5AaW1wb3J0IFwiLi4vc2V0dXAvZnVuY3Rpb25zXCI7XHJcblxyXG5AbWl4aW4gaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6IExvbmRyaW5hLUJsYWNrLCBjdXJzaXZlO1xyXG4gICAgbWF4LXdpZHRoOiA0NjBweDtcclxuICAgIGZvbnQtc2l6ZTogcmVtKDUwcHgpO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAycHggMCAjZjA0ODgyO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuQG1peGluIGdhbWUtYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMb25kcmluYSwgY3Vyc2l2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc1NGE7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LXNpemU6IHJlbSgzMHB4KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3NldHVwL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy9zZXR1cC9taXhpbnNcIjtcclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnNldHRpbmdzIHtcclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IHJlbSgzNnB4KTtcclxuICAgICAgICBmb250LWZhbWlseTogTG9uZHJpbmEtTGlnaHQsIGN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0OTZweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGlucHV0O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2YwNDg4MjtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZ2FtZS1idG47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxldmVscy1jb250YWluZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuICAgICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sZXZlbHMge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC01MCU7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogcmVtKDE4cHgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG5cclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcclxuXHJcbiAgICAgICAgICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNjYTQwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sZXZlbC1kZXNjcmlwdGlvbi1tZWRpdW0ge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTMwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ5NnB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1397:
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameService": () => (/* binding */ GameService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 2230);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ 7241);







class GameService {
    constructor(utilService, http) {
        this.utilService = utilService;
        this.http = http;
        this._clickedLetter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({ letter: '', origin: '' });
        this.clickedLetter$ = this._clickedLetter$.asObservable();
        this._currUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this.getUserFromStorage());
        this.currUser$ = this._currUser$.asObservable();
    }
    setClickedLetter(letterData) {
        this._clickedLetter$.next(letterData);
    }
    setCurrUsername(username) {
        const user = {
            userId: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)(),
            username,
        };
        this._currUser$.next(user);
        this.utilService.saveToStorage('user', user);
    }
    calculateScore(startTime, endTime) {
        if (!startTime || !endTime) {
            return -100;
        }
        const diff = endTime - startTime;
        const diffInSeconds = +((diff % 60000) / 1000).toFixed(0);
        switch (true) {
            case (diffInSeconds <= 2):
                return 500;
            case (diffInSeconds <= 5):
                return 350;
            case (diffInSeconds > 5):
                return 100;
            default:
                return 0;
        }
    }
    getLeaderboardScores(level = 'hard') {
        const httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams()
            .set('level', level);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.leaderboardsURL, { params: httpParams });
    }
    updateLeaderboard(score, level) {
        let currUser = this._currUser$.value;
        if (!currUser) {
            currUser = {
                userId: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.default)(),
                username: 'Guest',
            };
        }
        const userWithScore = Object.assign(Object.assign({}, currUser), { score, level });
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.leaderboardsURL, userWithScore, { withCredentials: true });
    }
    getUserFromStorage() {
        let user = this.utilService.loadFromStorage('user');
        if (!user)
            return null;
        return user;
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_util_service__WEBPACK_IMPORTED_MODULE_1__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
GameService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7241:
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilService": () => (/* binding */ UtilService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class UtilService {
    constructor() { }
    saveToStorage(key, val) {
        const str = JSON.stringify(val);
        localStorage.setItem(key, str);
    }
    loadFromStorage(key) {
        const str = localStorage.getItem(key);
        if (!str)
            return;
        return JSON.parse(str);
    }
}
UtilService.ɵfac = function UtilService_Factory(t) { return new (t || UtilService)(); };
UtilService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilService, factory: UtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8122:
/*!******************************************!*\
  !*** ./src/app/services/word.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordService": () => (/* binding */ WordService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5871);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7859);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8293);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);






class WordService {
    constructor(http) {
        this.http = http;
    }
    textToSpeech(txt) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('text', txt);
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.speechURL, { params: httpParams, responseType: 'text' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(3), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Failed to fetch sound')));
    }
    getWordDefinition(word) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.dictionaryURL}/${word}`).
            pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((data) => {
            const definition = data[0].meanings[0].definitions[0].definition;
            if (!definition)
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Couldn\'t get a hint for this word');
            return definition;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.retry)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((err) => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Couldn\'t get a hint for this word');
        }));
    }
    getLevelWordsCount(level) {
        switch (level) {
            case 'easy':
                return 3;
            case 'medium':
                return 5;
            case 'hard':
                return 10;
            default:
                return 3;
        }
    }
}
WordService.ɵfac = function WordService_Factory(t) { return new (t || WordService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WordService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: WordService, factory: WordService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    leaderboardsURL: '//localhost:3030/api/leaderboard',
    speechURL: '//localhost:3030/api/tts',
    audioURL: '//localhost:3030/audio',
    dictionaryURL: 'https://api.dictionaryapi.dev/api/v2/entries/en'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map