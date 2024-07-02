(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\op035c\Learning\web development\angular\recipe-book\src\main.ts */"zUnb");


/***/ }),

/***/ "06mJ":
/*!***************************************************!*\
  !*** ./src/app/shared/service/recepie.service.ts ***!
  \***************************************************/
/*! exports provided: RecepieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecepieService", function() { return RecepieService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shopping_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping.service */ "PCX2");



class RecepieService {
    constructor(shoppingService) {
        this.shoppingService = shoppingService;
        this.recepieSelected = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.recepieAdded = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        // private recepies:Recepie[] = [
        //   new Recepie(
        //     "Idly",
        //     "A famous south indian dish",
        //     "data:image/jpeg;base64,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",
        //   [
        //     new Ingredients('maavu', 2),
        //     new Ingredients('salt', 1)
        //   ]),
        //   new Recepie(
        //     "Dosa",
        //     "A dosa is a thin pancake or crepe originating from South India.",
        //      "https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900",
        //     [
        //     new Ingredients('maavu', 2),
        //     new Ingredients('salt', 1)
        //     ]),
        //   new Recepie(
        //     "Noodles",
        //     "A japanese food which is favourite for everyone",
        //      "https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900",
        //     [
        //     new Ingredients('noodles packet', 2),
        //     new Ingredients('flavour', 1)
        //     ])
        // ];
        this.recepies = [];
    }
    getRecepie() {
        return this.recepies.slice();
    }
    fetchRecepie(recepie) {
        this.recepies = recepie;
        this.recepieAdded.next(this.recepies);
    }
    getRecipeById(i) {
        return this.recepies[i];
    }
    addRecepieIngredients(data) {
        this.shoppingService.onAddRecepieIngredients(data);
    }
    updateRecepie(id, recepie) {
        this.recepies[id] = recepie;
        this.recepieAdded.next(this.recepies);
    }
    addRecepie(recepie) {
        this.recepies.push(recepie);
        this.recepieAdded.next(this.recepies);
    }
    deleteRecepie(id) {
        this.recepies.splice(id, 1);
        this.recepieAdded.next(this.recepies);
    }
}
RecepieService.ɵfac = function RecepieService_Factory(t) { return new (t || RecepieService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shopping_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingService"])); };
RecepieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RecepieService, factory: RecepieService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3V6w":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DropdownDirective {
    constructor() { }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(); };
DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "appDropdown", ""]] });


/***/ }),

/***/ "4Kj8":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/spinner/spinner.component.ts ***!
  \****************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 4, vars: 0, consts: [[1, "lds-ellipsis"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ellipsis[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 33px;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: cadetblue;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n  left: 8px;\n  animation: lds-ellipsis1 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  left: 8px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n  left: 32px;\n  animation: lds-ellipsis2 0.6s infinite;\n}\n\n.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) {\n  left: 56px;\n  animation: lds-ellipsis3 0.6s infinite;\n}\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(24px, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbURBQUE7QUFFRjs7QUFBQTtFQUNFLFNBQUE7RUFDQSxzQ0FBQTtBQUdGOztBQURBO0VBQ0UsU0FBQTtFQUNBLHNDQUFBO0FBSUY7O0FBRkE7RUFDRSxVQUFBO0VBQ0Esc0NBQUE7QUFLRjs7QUFIQTtFQUNFLFVBQUE7RUFDQSxzQ0FBQTtBQU1GOztBQUpBO0VBQ0U7SUFDRSxtQkFBQTtFQU9GO0VBTEE7SUFDRSxtQkFBQTtFQU9GO0FBQ0Y7O0FBTEE7RUFDRTtJQUNFLG1CQUFBO0VBT0Y7RUFMQTtJQUNFLG1CQUFBO0VBT0Y7QUFDRjs7QUFMQTtFQUNFO0lBQ0UsMEJBQUE7RUFPRjtFQUxBO0lBQ0UsNkJBQUE7RUFPRjtBQUNGIiwiZmlsZSI6InNwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGRzLWVsbGlwc2lzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG4ubGRzLWVsbGlwc2lzIGRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzNweDtcclxuICB3aWR0aDogMTNweDtcclxuICBoZWlnaHQ6IDEzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMSwgMSwgMCk7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICBsZWZ0OiA4cHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMxIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICBsZWZ0OiA4cHg7XHJcbiAgYW5pbWF0aW9uOiBsZHMtZWxsaXBzaXMyIDAuNnMgaW5maW5pdGU7XHJcbn1cclxuLmxkcy1lbGxpcHNpcyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICBsZWZ0OiAzMnB4O1xyXG4gIGFuaW1hdGlvbjogbGRzLWVsbGlwc2lzMiAwLjZzIGluZmluaXRlO1xyXG59XHJcbi5sZHMtZWxsaXBzaXMgZGl2Om50aC1jaGlsZCg0KSB7XHJcbiAgbGVmdDogNTZweDtcclxuICBhbmltYXRpb246IGxkcy1lbGxpcHNpczMgMC42cyBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGxkcy1lbGxpcHNpczEge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtZWxsaXBzaXMzIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbGRzLWVsbGlwc2lzMiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjRweCwgMCk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "8puP":
/*!***********************************************************!*\
  !*** ./src/app/shared/error-page/error-page.component.ts ***!
  \***********************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
        this.title = 'Page not found';
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 2, vars: 1, template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "Da3E":
/*!************************************************!*\
  !*** ./src/app/shared/service/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _auth_model_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../auth/model/user.model */ "EHUZ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    signUp(email, password) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbs_IRJXVv8K-BcJk5rgXoxFSr5urnQ58', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn);
        }));
    }
    signIn(email, password) {
        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbs_IRJXVv8K-BcJk5rgXoxFSr5urnQ58', {
            email: email,
            password: password,
            returnSecureToken: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this.handleAuthentication(res.email, res.localId, res.idToken, +res.expiresIn);
        }));
    }
    autoLogIn() {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        if (!userData) {
            return;
        }
        const loggedUser = new _auth_model_user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"](userData.email, userData.id, userData._token, new Date(userData._tokennExpirationDate));
        if (loggedUser.token) {
            this.user.next(loggedUser);
        }
        const expirationDuration = new Date(userData._tokennExpirationDate).getTime() - new Date().getTime();
        this.autoLogOut(expirationDuration);
    }
    logOut() {
        this.user.next(null);
        localStorage.removeItem('userData');
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
        }
        console.log(this.expirationTimer);
    }
    autoLogOut(expirationTime) {
        this.expirationTimer = setTimeout(() => {
            this.logOut();
        }, expirationTime);
    }
    handleError(errorRes) {
        let errorMessage = "An Unknown error occured";
        if (!errorRes.error || !errorRes.error.error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "This email  is already exist";
                break;
            default:
                errorMessage = errorRes.error.error.message;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    handleAuthentication(email, id, token, expiresIn) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new _auth_model_user_model__WEBPACK_IMPORTED_MODULE_0__["UserModel"](email, id, token, expirationDate);
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
        this.autoLogOut(expiresIn * 1000);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EHUZ":
/*!******************************************!*\
  !*** ./src/app/auth/model/user.model.ts ***!
  \******************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
class UserModel {
    constructor(email, id, _token, _tokennExpirationDate) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokennExpirationDate = _tokennExpirationDate;
    }
    get token() {
        if (!this._tokennExpirationDate || new Date() > this._tokennExpirationDate) {
            // return null;
        }
        return this._token;
    }
}


/***/ }),

/***/ "EiSp":
/*!*********************************************!*\
  !*** ./src/app/shared/ingredients.model.ts ***!
  \*********************************************/
/*! exports provided: Ingredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredients", function() { return Ingredients; });
class Ingredients {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


/***/ }),

/***/ "FYjP":
/*!************************************************************!*\
  !*** ./src/app/shared/components/alert/alert.component.ts ***!
  \************************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


//import * as $ from 'c:/Users/1818306/Learning/web development/angular/Recepie-book/node_modules/jquery';
class AlertComponent {
    constructor() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClose() {
        this.close.emit();
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], inputs: { message: "message" }, outputs: { close: "close" }, decls: 7, vars: 1, consts: [[1, "backdrop", 3, "click"], ["id", "myModal", 1, "modal-box"], [2, "text-align", "right"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_0_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_div_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
    } }, styles: [".backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: o;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 50;\n}\n\n.modal-box[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30vh;\n  left: 30vw;\n  width: 45vw;\n  z-index: 100;\n  padding: 16px;\n  background: white;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtBQUNKIiwiZmlsZSI6ImFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IG87XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogNTA7XHJcbn1cclxuXHJcbi5tb2RhbC1ib3gge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzB2dztcclxuICAgIHdpZHRoOiA0NXZ3O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsMC4yNSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "LS6v":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/alert/alert.component */ "FYjP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/spinner/spinner.component */ "4Kj8");







function AuthComponent_app_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function AuthComponent_app_alert_0_Template_app_alert_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r0.errorMessage);
} }
function AuthComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmitForm(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_form_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.isLoginMode ? "Log in" : "sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Switch to ", ctx_r1.isLoginMode ? "sign up" : "log In", "");
} }
function AuthComponent_app_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
} }
class AuthComponent {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
        this.isLoginMode = true;
        this.showLoading = false;
        this.showAlert = false;
        this.errorMessage = null;
    }
    ngOnInit() {
    }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmitForm(data) {
        this.showLoading = true;
        const email = data.value.email;
        const password = data.value.password;
        if (this.isLoginMode) {
            this.authService.signIn(email, password).subscribe(res => {
                console.log(res);
                this.route.navigate(['recipes']);
                this.showLoading = false;
            }, err => {
                this.errorMessage = err;
                this.showLoading = false;
            });
        }
        else {
            this.authService.signUp(email, password).subscribe(response => {
                this.showLoading = false;
                this.route.navigate(['recipes']);
                console.log(response);
            }, errorMesage => {
                this.showLoading = false;
                this.showAlert = true;
                this.errorMessage = errorMesage;
            });
        }
        data.reset();
    }
    onClose() {
        this.errorMessage = null;
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 6, vars: 3, consts: [[3, "message", "close", 4, "ngIf"], [1, "row", 2, "margin-left", "20%"], [1, "col-12"], [3, "ngSubmit", 4, "ngIf"], [2, "text-align", "center", "margin-top", "20%"], [4, "ngIf"], [3, "message", "close"], [3, "ngSubmit"], ["authForm", "ngForm"], [1, "row", "mt-4"], [1, "from-group"], ["for", "email", 1, "form-label"], [1, "col-sm-6"], ["type", "email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "form-control"], [1, "form-group"], ["for", "", 1, "form-lable"], ["type", "password", "name", "password", "ngModel", "", "required", "", "minlength", "7", 1, "form-control"], [1, "row"], [1, "col-12", "mt-4"], ["type", "submit", 1, "btn", "btn-primary", "me-3", 3, "disabled"], ["type", "button", 1, "btn", "btn-primary", "me-3", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AuthComponent_app_alert_0_Template, 1, 1, "app-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AuthComponent_form_3_Template, 20, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthComponent_app_spinner_5_Template, 1, 0, "app-spinner", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_4__["AlertComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "Nnf/":
/*!**************************************************!*\
  !*** ./src/app/auth/auth-interceptor.service.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/service/auth.service */ "Da3E");




class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["exhaustMap"])(user => {
            if (!user) {
                return next.handle(req);
            }
            const modifiedReq = req.clone({
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auth', user.token)
            });
            return next.handle(modifiedReq);
        }));
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "PCX2":
/*!****************************************************!*\
  !*** ./src/app/shared/service/shopping.service.ts ***!
  \****************************************************/
/*! exports provided: ShoppingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingService", function() { return ShoppingService; });
/* harmony import */ var _ingredients_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ingredients.model */ "EiSp");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ShoppingService {
    constructor() {
        this.ingrideientsAdded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.itemClick = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ingridients = [
            new _ingredients_model__WEBPACK_IMPORTED_MODULE_0__["Ingredients"]("Apples", 10),
            new _ingredients_model__WEBPACK_IMPORTED_MODULE_0__["Ingredients"]("Tomato", 5),
            new _ingredients_model__WEBPACK_IMPORTED_MODULE_0__["Ingredients"]("Onion", 7)
        ];
    }
    getIngrideints() {
        return this.ingridients;
    }
    getSelectedIngridients(i) {
        return this.ingridients[i];
    }
    onAddIngridients(data) {
        this.ingridients.push(data);
    }
    onAddRecepieIngredients(data) {
        this.ingridients.push(...data);
    }
    updateIngridient(i, ing) {
        this.ingridients[i] = ing;
    }
    deleteIngridient(i) {
        return this.ingridients.splice(i, 1);
    }
}
ShoppingService.ɵfac = function ShoppingService_Factory(t) { return new (t || ShoppingService)(); };
ShoppingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShoppingService, factory: ShoppingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/service/auth.service */ "Da3E");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'shopping-hub';
    }
    ngOnInit() {
        this.authService.autoLogIn();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md-12"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_service_recepie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/service/recepie.service */ "06mJ");
/* harmony import */ var _shared_service_shopping_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/service/shopping.service */ "PCX2");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/dropdown.directive */ "3V6w");
/* harmony import */ var _shared_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/error-page/error-page.component */ "8puP");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/spinner/spinner.component */ "4Kj8");
/* harmony import */ var _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-interceptor.service */ "Nnf/");
/* harmony import */ var _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/alert/alert.component */ "FYjP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_shared_service_shopping_service__WEBPACK_IMPORTED_MODULE_5__["ShoppingService"], _shared_service_recepie_service__WEBPACK_IMPORTED_MODULE_4__["RecepieService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_7__["DropdownDirective"],
        _shared_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_8__["ErrorPageComponent"],
        _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
        _shared_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_11__["SpinnerComponent"],
        _shared_components_alert_alert_component__WEBPACK_IMPORTED_MODULE_13__["AlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_service_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/service/data-storage.service */ "v8J6");
/* harmony import */ var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/service/auth.service */ "Da3E");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function HeaderComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Recepies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ul_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_17_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Manage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_17_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onStoreRecepie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ul_17_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onFetchData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Fetch data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(dataStorageService, authService, router) {
        this.dataStorageService = dataStorageService;
        this.authService = authService;
        this.router = router;
        this.isAuthenticated = false;
    }
    ngOnInit() {
        this.authSubscription = this.authService.user.subscribe(user => {
            this.isAuthenticated = !!user;
            console.log(this.isAuthenticated);
        });
    }
    onStoreRecepie() {
        this.dataStorageService.storeRecepie();
    }
    onFetchData() {
        this.dataStorageService.fetchStorage().subscribe();
    }
    onLogout() {
        this.authService.logOut();
        this.router.navigate(['/auth']);
    }
    ngOnDestroy() {
        this.authSubscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 18, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["class", "nav-link ", "aria-current", "page", "routerLinkActive", "active", "routerLink", "/recipes", 4, "ngIf"], ["routerLinkActive", "active", "routerLink", "/shopping", 1, "nav-link"], ["class", "nav-link", "routerLinkActive", "active", "routerLink", "/auth", 4, "ngIf"], [1, "profile"], ["class", "navbar-nav", 4, "ngIf"], ["aria-current", "page", "routerLinkActive", "active", "routerLink", "/recipes", 1, "nav-link"], ["routerLinkActive", "active", "routerLink", "/auth", 1, "nav-link"], [1, "nav-link", 2, "cursor", "pointer", 3, "click"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Recepie Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_a_10_Template, 2, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "shopping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_a_15_Template, 2, 0, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_ul_17_Template, 14, 0, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAuthenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuthenticated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: [".profile[_ngcontent-%COMP%] {\n  position: relative;\n  left: 73%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICAgIGxlZnQ6NzMlO1xyXG59Il19 */"] });


/***/ }),

/***/ "v8J6":
/*!********************************************************!*\
  !*** ./src/app/shared/service/data-storage.service.ts ***!
  \********************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _recepie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recepie.service */ "06mJ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "Da3E");





class DataStorageService {
    constructor(http, recepieService, authService) {
        this.http = http;
        this.recepieService = recepieService;
        this.authService = authService;
    }
    storeRecepie() {
        const recepie = this.recepieService.getRecepie();
        this.http.put('https://recepie-book-5e4a9-default-rtdb.firebaseio.com/recepies.json', recepie).
            subscribe(response => {
        });
    }
    fetchStorage() {
        return this.http.get('https://recepie-book-5e4a9-default-rtdb.firebaseio.com/recepies.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(recepies => {
            return recepies.map(recepie => {
                return Object.assign(Object.assign({}, recepie), { ingredients: recepie.ingredients ? recepie.ingredients : [] });
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(recepies => {
            this.recepieService.fetchRecepie(recepies);
        }));
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_recepie_service__WEBPACK_IMPORTED_MODULE_3__["RecepieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.component */ "LS6v");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_1__["AuthComponent"] },
    { path: 'recipes', loadChildren: () => __webpack_require__.e(/*! import() | recepies-recepie-module */ "recepies-recepie-module").then(__webpack_require__.bind(null, /*! ./recepies/recepie.module */ "XniH")).then(m => m.RecepieModule) },
    { path: 'shopping', loadChildren: () => __webpack_require__.e(/*! import() | cart-cart-module */ "cart-cart-module").then(__webpack_require__.bind(null, /*! ./cart/cart.module */ "v35Q")).then(m => m.CartModule) }
    //{path: '**', component: ErrorPageComponent}
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map