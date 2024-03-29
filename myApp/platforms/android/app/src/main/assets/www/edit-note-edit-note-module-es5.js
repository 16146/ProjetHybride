function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-note-edit-note-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-note/edit-note.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-note/edit-note.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditNoteEditNotePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Editer la note </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\" >Entrer ici un titre</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.required\">\n            title is required.\n          </span>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.title.errors?.minlength\">\n              title should be min 2 chars long.\n          </span>\n          <ion-item lines=\"full\">\n              <ion-label position=\"floating\" >Entrer ici une description</ion-label>\n              <ion-input type=\"text\" formControlName=\"content\" required></ion-input>\n          </ion-item>\n          <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.content.errors?.required\">\n              content is required.\n              </span>\n              <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.content.errors?.minlength\">\n                  content should be min 2 chars long.\n            </span>\n        <ion-item lines=\"full\">\n          <ion-item>\n            <ion-label value=\"cr.name\">Choisir une catégorie</ion-label>\n            <ion-select  formControlName=\"category\" >\n              <ion-item *ngFor=\"let cr of classrooms\">\n                <ion-select-option value=\"{{cr.id}}&&&{{cr.name}}\">{{cr.name}}</ion-select-option>\n              </ion-item>\n            </ion-select>\n          </ion-item>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.category.errors?.required\">\n          category is required.\n        </span>\n        <!-- Checkboxes -->\n        <!-- <ion-list lines=\"full\">\n          <ion-list-header>\n            <ion-label>Subjects</ion-label>\n          </ion-list-header>\n          <ion-item>\n            <ion-label>History</ion-label>\n            <ion-checkbox></ion-checkbox>\n          </ion-item>\n        </ion-list> -->\n        <ion-row>\n          <ion-col>\n            <ion-button [disabled]=\"!ionicForm.valid\" type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"updateNote()\">Enregistrer</ion-button>\n          </ion-col>\n        </ion-row>\n      </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/edit-note/edit-note-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/edit-note/edit-note-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditNotePageRoutingModule */

  /***/
  function srcAppEditNoteEditNoteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNotePageRoutingModule", function () {
      return EditNotePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_note_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-note.page */
    "./src/app/edit-note/edit-note.page.ts");

    var routes = [{
      path: '',
      component: _edit_note_page__WEBPACK_IMPORTED_MODULE_3__["EditNotePage"]
    }];

    var EditNotePageRoutingModule = function EditNotePageRoutingModule() {
      _classCallCheck(this, EditNotePageRoutingModule);
    };

    EditNotePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditNotePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit-note/edit-note.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/edit-note/edit-note.module.ts ***!
    \***********************************************/

  /*! exports provided: EditNotePageModule */

  /***/
  function srcAppEditNoteEditNoteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNotePageModule", function () {
      return EditNotePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_note_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-note-routing.module */
    "./src/app/edit-note/edit-note-routing.module.ts");
    /* harmony import */


    var _edit_note_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-note.page */
    "./src/app/edit-note/edit-note.page.ts");

    var EditNotePageModule = function EditNotePageModule() {
      _classCallCheck(this, EditNotePageModule);
    };

    EditNotePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _edit_note_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditNotePageRoutingModule"]],
      declarations: [_edit_note_page__WEBPACK_IMPORTED_MODULE_6__["EditNotePage"]]
    })], EditNotePageModule);
    /***/
  },

  /***/
  "./src/app/edit-note/edit-note.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/edit-note/edit-note.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditNoteEditNotePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtbm90ZS9lZGl0LW5vdGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/edit-note/edit-note.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/edit-note/edit-note.page.ts ***!
    \*********************************************/

  /*! exports provided: EditNotePage */

  /***/
  function srcAppEditNoteEditNotePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditNotePage", function () {
      return EditNotePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../rest-api.service */
    "./src/app/rest-api.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EditNotePage = /*#__PURE__*/function () {
      function EditNotePage(api, formBuilder, loadingController, route, router) {
        _classCallCheck(this, EditNotePage);

        this.api = api;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.isSubmitted = false;
        console.log(api);
      }

      _createClass(EditNotePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ionicForm = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            content: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]],
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]([]) // email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            // dob: [this.defaultDate],
            // mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]

          });
          this.getNote(this.route.snapshot.paramMap.get('id'));
          this.getClassrooms();
        }
      }, {
        key: "getNote",
        value: function getNote(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    _context.next = 7;
                    return this.api.getNoteById(id).subscribe(function (res) {
                      _this.ionicForm.controls["title"].setValue(res.title);

                      _this.ionicForm.controls["content"].setValue(res.content);

                      _this.ionicForm.controls["category"].setValue(res.category);

                      console.log(_this.ionicForm);
                      _this.note = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getClassrooms",
        value: function getClassrooms() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    _context2.next = 7;
                    return this.api.getClassroom().subscribe(function (res) {
                      console.log(res);
                      _this2.classrooms = res;
                      loading.dismiss();
                    }, function (err) {
                      console.log(err);
                      loading.dismiss();
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.isSubmitted = true;

          if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            return false;
          } else {
            console.log(this.ionicForm.value);
          }
        }
      }, {
        key: "createCategory",
        value: function createCategory() {
          return this.formBuilder.group({
            student_name: ''
          });
        }
      }, {
        key: "updateNote",
        value: function updateNote() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.category = this.ionicForm.value.category.split('&&&');
                    this.note = {
                      "title": this.ionicForm.value["title"],
                      "content": this.ionicForm.value["content"],
                      "category": {
                        "id": Number(this.category[0]),
                        "name": this.category[1]
                      }
                    };
                    console.log(this.note);
                    _context3.next = 5;
                    return this.api.updateNote(this.route.snapshot.paramMap.get('id'), this.note).subscribe(function (res) {
                      _this3.router.navigate(['/notes']);
                    }, function (err) {
                      console.log(err);
                    });

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.ionicForm.controls;
        }
      }]);

      return EditNotePage;
    }();

    EditNotePage.ctorParameters = function () {
      return [{
        type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"];
          })]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    EditNotePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-note',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-note.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-note/edit-note.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-note.page.scss */
      "./src/app/edit-note/edit-note.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"];
    }))), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], EditNotePage);
    /***/
  }
}]);
//# sourceMappingURL=edit-note-edit-note-module-es5.js.map