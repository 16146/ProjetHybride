(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notes-notes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>Liste des notes</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-row>\n          <ion-col>\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\" [routerLink]=\"['/add-note']\">Ajouter une nouvelle note</ion-button>\n          </ion-col>\n      </ion-row>\n    <ion-searchbar showCancelButton=\"never\" (ionChange)=\"filterList($event)\"></ion-searchbar>\n    <ion-list>\n      <ion-item *ngFor=\"let cr of notes\" >\n          <ion-item-sliding>\n        <ion-nav-link routerLink=\"/notes/{{cr.id}}\" href=\"#\">\n          <h5>\n            <ion-icon size=\"large\" name=\"reorder-three-outline\" slot=\"start\">\n        </ion-icon>&nbsp;&nbsp;{{cr.title}}\n      </h5>\n    </ion-nav-link>\n        <div class=\"item-note\" slot=\"end\">\n          <ion-item-options>\n          <button ion-button color=\"light\" routerLink=\"/notes/{{cr.id}}/edit\">Editer</button>\n          &nbsp;\n          <button ion-button color=\"light\" (click)=\"delete(cr.id)\">Supprimer</button>\n        </ion-item-options>\n        </div>\n      </ion-item-sliding>\n      </ion-item>\n    </ion-list>\n    <!--\n      <div *ngIf=\"selectedItem\" padding>\n        You navigated here from <b>{{selectedItem.title }}</b>\n      </div>\n    -->\n  </ion-content>\n  ");

/***/ }),

/***/ "./src/app/notes/notes-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/notes/notes-routing.module.ts ***!
  \***********************************************/
/*! exports provided: NotesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageRoutingModule", function() { return NotesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes.page */ "./src/app/notes/notes.page.ts");




const routes = [
    {
        path: '',
        component: _notes_page__WEBPACK_IMPORTED_MODULE_3__["NotesPage"]
    }
];
let NotesPageRoutingModule = class NotesPageRoutingModule {
};
NotesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NotesPageRoutingModule);



/***/ }),

/***/ "./src/app/notes/notes.module.ts":
/*!***************************************!*\
  !*** ./src/app/notes/notes.module.ts ***!
  \***************************************/
/*! exports provided: NotesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notes-routing.module */ "./src/app/notes/notes-routing.module.ts");
/* harmony import */ var _notes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notes.page */ "./src/app/notes/notes.page.ts");







let NotesPageModule = class NotesPageModule {
};
NotesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _notes_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotesPageRoutingModule"]
        ],
        declarations: [_notes_page__WEBPACK_IMPORTED_MODULE_6__["NotesPage"]]
    })
], NotesPageModule);



/***/ }),

/***/ "./src/app/notes/notes.page.scss":
/*!***************************************!*\
  !*** ./src/app/notes/notes.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 ion-icon, h2 ion-icon, h3 ion-icon, h4 ion-icon, h5 ion-icon {\n  vertical-align: middle;\n  padding-bottom: 3px;\n}\n\nion-label ion-icon {\n  margin-bottom: -3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90ZXMvQzpcXFVzZXJzXFxtYWxla1xcT25lRHJpdmVcXEJ1cmVhdVxcVUVNb2JpbGVBcHBcXFByb2pldEh5YnJpZGVcXFByb2pldEh5YnJpZGVcXG15QXBwL3NyY1xcYXBwXFxub3Rlc1xcbm90ZXMucGFnZS5zY3NzIiwic3JjL2FwcC9ub3Rlcy9ub3Rlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FDQU47O0FES0k7RUFDRSxtQkFBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvbm90ZXMvbm90ZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsIGgyLCBoMywgaDQsIGg1IHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDNweDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICAgIH1cclxuICB9IiwiaDEgaW9uLWljb24sIGgyIGlvbi1pY29uLCBoMyBpb24taWNvbiwgaDQgaW9uLWljb24sIGg1IGlvbi1pY29uIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbn1cblxuaW9uLWxhYmVsIGlvbi1pY29uIHtcbiAgbWFyZ2luLWJvdHRvbTogLTNweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/notes/notes.page.ts":
/*!*************************************!*\
  !*** ./src/app/notes/notes.page.ts ***!
  \*************************************/
/*! exports provided: NotesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let NotesPage = class NotesPage {
    constructor(api, loadingController) {
        this.api = api;
        this.loadingController = loadingController;
        this.isSubmitted = false;
        console.log(api);
        this.getNotes();
    }
    ngOnInit() {
        this.getNotes();
    }
    getNotes() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getNotes()
                .subscribe(res => {
                console.log(res);
                this.preservednotes = res;
                this.notes = res;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    delete(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Deleting'
            });
            yield loading.present();
            yield this.api.deleteNote(id)
                .subscribe(res => {
                loading.dismiss();
                this.getNotes();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    ionViewWillEnter() {
        this.api.getNotes().subscribe(res => this.notes = res);
    }
    filterList(evt) {
        const val = evt.detail.value;
        this.notes = this.preservednotes;
        if (val && val.trim() !== '') {
            this.notes = this.notes.filter(term => {
                return term.title.toLowerCase().indexOf(val.trim().toLowerCase()) > -1;
            });
        }
        if (val.trim() == '') {
            this.notes = this.preservednotes;
        }
    }
};
NotesPage.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]),] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
NotesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notes.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notes/notes.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notes.page.scss */ "./src/app/notes/notes.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], NotesPage);



/***/ })

}]);
//# sourceMappingURL=notes-notes-module-es2015.js.map