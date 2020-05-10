function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-category-add-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-category/add-category.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-category/add-category.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddCategoryAddCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ajouter une nouvelle catégorie</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\" >Entrer ici une nouvelle catégorie</ion-label>\n      <ion-input type=\"text\" formControlName=\"name\" required></ion-input>\n    </ion-item>\n    <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n      category is required.\n      </span>\n      <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n        category should be min 2 chars long.\n      </span>\n    <!-- Checkboxes -->\n    <!-- <ion-list lines=\"full\">\n      <ion-list-header>\n        <ion-label>Subjects</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>History</ion-label>\n        <ion-checkbox></ion-checkbox>\n      </ion-item>\n    </ion-list> -->\n    <ion-row>\n      <ion-col>\n        <ion-button [disabled]=\"!ionicForm.valid\" type=\"submit\" color=\"danger\" expand=\"block\" (click)=\"saveCategory()\">Enregistrer</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n\n";
    /***/
  },

  /***/
  "./src/app/add-category/add-category-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/add-category/add-category-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AddCategoryPageRoutingModule */

  /***/
  function srcAppAddCategoryAddCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPageRoutingModule", function () {
      return AddCategoryPageRoutingModule;
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


    var _add_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-category.page */
    "./src/app/add-category/add-category.page.ts");

    var routes = [{
      path: '',
      component: _add_category_page__WEBPACK_IMPORTED_MODULE_3__["AddCategoryPage"]
    }];

    var AddCategoryPageRoutingModule = function AddCategoryPageRoutingModule() {
      _classCallCheck(this, AddCategoryPageRoutingModule);
    };

    AddCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-category/add-category.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-category/add-category.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddCategoryPageModule */

  /***/
  function srcAppAddCategoryAddCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function () {
      return AddCategoryPageModule;
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


    var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-category-routing.module */
    "./src/app/add-category/add-category-routing.module.ts");
    /* harmony import */


    var _add_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category.page */
    "./src/app/add-category/add-category.page.ts");

    var AddCategoryPageModule = function AddCategoryPageModule() {
      _classCallCheck(this, AddCategoryPageModule);
    };

    AddCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPageRoutingModule"]],
      declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_6__["AddCategoryPage"]]
    })], AddCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/add-category/add-category.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/add-category/add-category.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddCategoryAddCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/add-category/add-category.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/add-category/add-category.page.ts ***!
    \***************************************************/

  /*! exports provided: AddCategoryPage */

  /***/
  function srcAppAddCategoryAddCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function () {
      return AddCategoryPage;
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

    var AddCategoryPage = /*#__PURE__*/function () {
      function AddCategoryPage(api, formBuilder, loadingController, router) {
        _classCallCheck(this, AddCategoryPage);

        this.api = api;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.router = router;
        this.isSubmitted = false;
        console.log(api);
      }

      _createClass(AddCategoryPage, [{
        key: "createNewTask",
        value: function createNewTask() {
          console.log(this.ionicForm.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ionicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]]
          });
          this.getClassrooms();
        }
      }, {
        key: "getClassrooms",
        value: function getClassrooms() {
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
                    return this.api.getClassroom().subscribe(function (res) {
                      console.log(res);
                      _this.classrooms = res;
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
        key: "addBlankStudent",
        value: function addBlankStudent() {
          this.categories = this.ionicForm.get('category');
          this.categories.push(this.createCategory());
        }
      }, {
        key: "saveCategory",
        value: function saveCategory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log(this.ionicForm.value);
                    _context2.next = 3;
                    return this.api.postClassroom(this.ionicForm.value).subscribe(function (res) {
                      _this2.router.navigate(['/categories']);
                    }, function (err) {
                      console.log(err);
                    });

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.ionicForm.controls;
        }
      }]);

      return AddCategoryPage;
    }();

    AddCategoryPage.ctorParameters = function () {
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AddCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-category/add-category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.page.scss */
      "./src/app/add-category/add-category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"];
    }))), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], AddCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=add-category-add-category-module-es5.js.map