function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-category-edit-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-category/edit-category.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-category/edit-category.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditCategoryEditCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Edit catégorie</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <form [formGroup]=\"ionicForm\">\n      <ion-item>\n        <ion-label position=\"floating\" value=\"category\">Modifier le nom de la catégorie </ion-label>\n        <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n      </ion-item>\n      <ion-button shape=\"round\" color=\"primary\" expand=\"block\" [disabled]=\"!ionicForm.valid\" (click)=\"updateCategory()\">Mettre à jour</ion-button>\n    </form>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/edit-category/edit-category-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/edit-category/edit-category-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: EditCategoryPageRoutingModule */

  /***/
  function srcAppEditCategoryEditCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCategoryPageRoutingModule", function () {
      return EditCategoryPageRoutingModule;
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


    var _edit_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-category.page */
    "./src/app/edit-category/edit-category.page.ts");

    var routes = [{
      path: '',
      component: _edit_category_page__WEBPACK_IMPORTED_MODULE_3__["EditCategoryPage"]
    }];

    var EditCategoryPageRoutingModule = function EditCategoryPageRoutingModule() {
      _classCallCheck(this, EditCategoryPageRoutingModule);
    };

    EditCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit-category/edit-category.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/edit-category/edit-category.module.ts ***!
    \*******************************************************/

  /*! exports provided: EditCategoryPageModule */

  /***/
  function srcAppEditCategoryEditCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCategoryPageModule", function () {
      return EditCategoryPageModule;
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


    var _edit_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-category-routing.module */
    "./src/app/edit-category/edit-category-routing.module.ts");
    /* harmony import */


    var _edit_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-category.page */
    "./src/app/edit-category/edit-category.page.ts");

    var EditCategoryPageModule = function EditCategoryPageModule() {
      _classCallCheck(this, EditCategoryPageModule);
    };

    EditCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _edit_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCategoryPageRoutingModule"]],
      declarations: [_edit_category_page__WEBPACK_IMPORTED_MODULE_6__["EditCategoryPage"]]
    })], EditCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/edit-category/edit-category.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/edit-category/edit-category.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditCategoryEditCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtY2F0ZWdvcnkvZWRpdC1jYXRlZ29yeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/edit-category/edit-category.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/edit-category/edit-category.page.ts ***!
    \*****************************************************/

  /*! exports provided: EditCategoryPage */

  /***/
  function srcAppEditCategoryEditCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCategoryPage", function () {
      return EditCategoryPage;
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

    var EditCategoryPage = /*#__PURE__*/function () {
      function EditCategoryPage(api, formBuilder, loadingController, route, router) {
        _classCallCheck(this, EditCategoryPage);

        this.api = api;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.route = route;
        this.router = router;
        this.isSubmitted = false;
        console.log(api);
      }

      _createClass(EditCategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ionicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2)]]
          });
          this.getClassroom(this.route.snapshot.paramMap.get('id'));
        }
      }, {
        key: "getClassroom",
        value: function getClassroom(id) {
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
                    return this.api.getClassroomById(id).subscribe(function (res) {
                      _this.ionicForm.controls['name'].setValue(res.name);

                      console.log(_this.ionicForm);
                      _this.category = res;
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
        key: "updateCategory",
        value: function updateCategory() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.updateClassroom(this.route.snapshot.paramMap.get('id'), this.ionicForm.value).subscribe(function (res) {
                      _this2.router.navigate(['/categories']);
                    }, function (err) {
                      console.log(err);
                    });

                  case 2:
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

      return EditCategoryPage;
    }();

    EditCategoryPage.ctorParameters = function () {
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

    EditCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-category/edit-category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-category.page.scss */
      "./src/app/edit-category/edit-category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
      return _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"];
    }))), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], EditCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-category-edit-category-module-es5.js.map