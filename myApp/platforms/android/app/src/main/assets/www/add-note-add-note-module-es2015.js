(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-note-add-note-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-title>Ajouter une nouvelle note</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <ion-item lines=\"full\">\n        <ion-label position=\"floating\" >Entrer ici un titre</ion-label>\n        <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.required\">\n          title is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.minlength\">\n            title should be min 2 chars long.\n        </span>\n        <ion-item lines=\"full\">\n            <ion-label position=\"floating\" >Entrer ici une description</ion-label>\n            <ion-input type=\"text\" formControlName=\"content\" required></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.content.errors?.required\">\n            content is required.\n            </span>\n            <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.content.errors?.minlength\">\n                content should be min 2 chars long.\n          </span>\n      <ion-item lines=\"full\">\n        <ion-item>\n          <ion-label>Choisir une catégorie</ion-label>\n          <ion-select value=\"Brown\" formControlName=\"category\">\n            <ion-item *ngFor=\"let cr of classrooms\">\n              <ion-select-option value=\"{{cr.id}}&&&{{cr.name}}\">{{cr.name}}</ion-select-option>\n            </ion-item>\n          </ion-select>\n        </ion-item>\n      </ion-item>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.category.errors?.required\">\n        category is required.\n      </span>\n      <!-- Checkboxes -->\n      <!-- <ion-list lines=\"full\">\n        <ion-list-header>\n          <ion-label>Subjects</ion-label>\n        </ion-list-header>\n        <ion-item>\n          <ion-label>History</ion-label>\n          <ion-checkbox></ion-checkbox>\n        </ion-item>\n      </ion-list> -->\n      <ion-row>\n        <ion-col>\n          <ion-button [disabled]=\"!ionicForm.valid\" type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"saveNote()\">Enregistrer</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-content>\n  \n  ");

/***/ }),

/***/ "./src/app/add-note/add-note-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-note/add-note-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AddNotePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageRoutingModule", function() { return AddNotePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-note.page */ "./src/app/add-note/add-note.page.ts");




const routes = [
    {
        path: '',
        component: _add_note_page__WEBPACK_IMPORTED_MODULE_3__["AddNotePage"]
    }
];
let AddNotePageRoutingModule = class AddNotePageRoutingModule {
};
AddNotePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddNotePageRoutingModule);



/***/ }),

/***/ "./src/app/add-note/add-note.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.module.ts ***!
  \*********************************************/
/*! exports provided: AddNotePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePageModule", function() { return AddNotePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-note-routing.module */ "./src/app/add-note/add-note-routing.module.ts");
/* harmony import */ var _add_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-note.page */ "./src/app/add-note/add-note.page.ts");







let AddNotePageModule = class AddNotePageModule {
};
AddNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_note_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNotePageRoutingModule"]
        ],
        declarations: [_add_note_page__WEBPACK_IMPORTED_MODULE_6__["AddNotePage"]]
    })
], AddNotePageModule);



/***/ }),

/***/ "./src/app/add-note/add-note.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-note/add-note.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1ub3RlL2FkZC1ub3RlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/add-note/add-note.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-note/add-note.page.ts ***!
  \*******************************************/
/*! exports provided: AddNotePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNotePage", function() { return AddNotePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AddNotePage = class AddNotePage {
    constructor(api, formBuilder, loadingController, router) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.router = router;
        this.isSubmitted = false;
        console.log(api);
    }
    createNewTask() {
        console.log(this.ionicForm.value);
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([])
            // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            // dob: [this.defaultDate],
            // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
        });
        this.getClassrooms();
    }
    getClassrooms() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Loading'
            });
            yield loading.present();
            yield this.api.getClassroom()
                .subscribe(res => {
                console.log(res);
                this.classrooms = res;
                loading.dismiss();
            }, err => {
                console.log(err);
                loading.dismiss();
            });
        });
    }
    get errorControl() {
        return this.ionicForm.controls;
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
        }
        else {
            console.log(this.ionicForm.value);
        }
    }
    saveNote() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.category = this.ionicForm.value.category.split('&&&');
            this.note = {
                "title": this.ionicForm.value["title"],
                "content": this.ionicForm.value["content"],
                "category": {
                    "id": Number(this.category[0]),
                    "name": this.category[1],
                },
            };
            console.log("grr", this.note);
            yield this.api.postNote(this.note)
                .subscribe(res => {
                this.router.navigate(['/notes']);
            }, (err) => {
                console.log(err);
            });
        });
    }
};
AddNotePage.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]),] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AddNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-note',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-note.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-note/add-note.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-note.page.scss */ "./src/app/add-note/add-note.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]))),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], AddNotePage);



/***/ })

}]);
//# sourceMappingURL=add-note-add-note-module-es2015.js.map