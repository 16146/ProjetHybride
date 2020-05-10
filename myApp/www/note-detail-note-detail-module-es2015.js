(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["note-detail-note-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-detail/note-detail.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/note-detail/note-detail.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title><strong>{{note.title}}</strong></ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n      <!-- <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"danger\" expand=\"block\" [routerLink]=\"['/add-note']\">Ajouter une nouvelle note</ion-button>\n            </ion-col>\n        </ion-row> -->\n        <ion-list>\n            <ion-item><ion-icon name=\"document-text-outline\" slot=\"start\">\n\n            </ion-icon><ion-row><ion-col><strong>Description</strong> : {{note.content}}</ion-col>\n            </ion-row>\n          </ion-item>\n            <ion-item><ion-icon name=\"calendar-outline\" slot=\"start\">\n\n            </ion-icon><ion-row><ion-col><strong>Date</strong> : {{note.date}}</ion-col>\n            </ion-row>\n          </ion-item>\n            <ion-item><ion-icon name=\"bookmark\" slot=\"start\">\n\n            </ion-icon><ion-row><ion-col><strong>Catégorie(s)</strong> : {{note.category}}</ion-col>\n            </ion-row>\n          </ion-item>\n            \n\n          </ion-list>\n  </ion-content>\n");

/***/ }),

/***/ "./src/app/note-detail/note-detail-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/note-detail/note-detail-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NoteDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailPageRoutingModule", function() { return NoteDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _note_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-detail.page */ "./src/app/note-detail/note-detail.page.ts");




const routes = [
    {
        path: '',
        component: _note_detail_page__WEBPACK_IMPORTED_MODULE_3__["NoteDetailPage"]
    }
];
let NoteDetailPageRoutingModule = class NoteDetailPageRoutingModule {
};
NoteDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NoteDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/note-detail/note-detail.module.ts":
/*!***************************************************!*\
  !*** ./src/app/note-detail/note-detail.module.ts ***!
  \***************************************************/
/*! exports provided: NoteDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailPageModule", function() { return NoteDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _note_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./note-detail-routing.module */ "./src/app/note-detail/note-detail-routing.module.ts");
/* harmony import */ var _note_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./note-detail.page */ "./src/app/note-detail/note-detail.page.ts");







let NoteDetailPageModule = class NoteDetailPageModule {
};
NoteDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _note_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["NoteDetailPageRoutingModule"]
        ],
        declarations: [_note_detail_page__WEBPACK_IMPORTED_MODULE_6__["NoteDetailPage"]]
    })
], NoteDetailPageModule);



/***/ }),

/***/ "./src/app/note-detail/note-detail.page.scss":
/*!***************************************************!*\
  !*** ./src/app/note-detail/note-detail.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGUtZGV0YWlsL25vdGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/note-detail/note-detail.page.ts":
/*!*************************************************!*\
  !*** ./src/app/note-detail/note-detail.page.ts ***!
  \*************************************************/
/*! exports provided: NoteDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDetailPage", function() { return NoteDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let NoteDetailPage = class NoteDetailPage {
    constructor(api, loadingController, route, router) {
        this.api = api;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.note = {};
        this.getNote(this.route.snapshot.paramMap.get('id'));
    }
    ngOnInit() {
        this.getNote(this.route.snapshot.paramMap.get('id'));
    }
    getNote(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getNoteById(id).subscribe(res => {
                this.note = {
                    "id": res.id,
                    "title": res.title,
                    "content": res.content,
                    "category": res.category.name,
                    "date": res.date,
                };
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
};
NoteDetailPage.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]),] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NoteDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-note-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./note-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/note-detail/note-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./note-detail.page.scss */ "./src/app/note-detail/note-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], NoteDetailPage);



/***/ })

}]);
//# sourceMappingURL=note-detail-note-detail-module-es2015.js.map