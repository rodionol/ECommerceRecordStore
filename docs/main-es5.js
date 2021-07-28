function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddProductAddProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-product container-fluid background\">\n    <div class=\"container\">\n        <div class=\"flex heading-container\">\n            <h1 class=\"page-heading\">Sell your records, we collect them!</h1>\n            <p class=\"subheading\">\n                Trying to refresh your record collection? Sell us your old records. Fill out this form to get an assessment. \n            </p>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                 <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n                   <div id=\"user-data\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <label for=\"recordTitle\">Title</label>\n                                <input type=\"text\" id=\"recordTitle\" name=\"recordTitle\" class=\"form-control\"  \n                                        class=\"form-control\" ngModel required #title=\"ngModel\">\n                                <span class=\"help-block\" *ngIf=\"false\">Record Title is required</span>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <label for=\"desiredPrice\">Desired price</label>\n                                <input type=\"text\" id=\"desiredPrice\" name=\"desiredPrice\" class=\"form-control\"  \n                                    ngModel required #price=\"ngModel\">\n                                <span class=\"help-block\" *ngIf=\"false\">Desired price is required</span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <label for=\"artist\">Artist</label>\n                                <input type=\"text\" id=\"artist\" name=\"artist\" class=\"form-control\"  \n                                    ngModel required #artist=\"ngModel\">\n                                <span class=\"help-block\" *ngIf=\"false\">Artist is required</span>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <label for=\"condition\">Condition</label>\n                                <input type=\"text\" id=\"condition\" name=\"condition\" class=\"form-control\"     \n                                        class=\"form-control\" ngModel required #condition=\"ngModel\">\n                                <span class=\"help-block\" *ngIf=\"false\">Condition is required</span>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <label for=\"yearReleased\">Year released</label>\n                                <input type=\"text\" id=\"yearReleased\" name=\"yearReleased\" \n                                        class=\"form-control\" ngModel required #year=\"ngModel\" />\n                                <span class=\"help-block\" *ngIf=\"false\">Year is required</span>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <label for=\"genre\">Genre</label>\n                                <input type=\"text\" id=\"genre\" name=\"genre\" \n                                        class=\"form-control\" ngModel required #genre=\"ngModel\" />\n                                <span class=\"help-block\" *ngIf=\"false\">Genre is required</span>\n                            </div>\n                        </div>\n\n                        <!-- <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <input type=\"file\" class=\"file-input\" (change)=\"onFileSelected($event)\" #fileUpload>\n                                \n\n                                <div class=\"file-upload\">\n\n                     \n                                 \n                                     <button color=\"primary\" class=\"upload-btn\"\n                                       (click)=\"fileUpload.click()\">\n                        \n                                         Upload your image here\n                                     </button>\n                                 </div>\n\n                            </div>\n                        </div> -->\n                        \n                        <div class=\"row\">\n                            <div class=\"col-lg-12 cta-buttons\">\n                                <button (click)=\"clearForm(f)\" type=\"button\" class=\"clear-button\">Clear form</button>\n                                <button class=\"primary\" type=\"submit\">Submit</button>\n                                <!-- <span class=\"message\" [ngClass]=\"{'error':(submitted)}\" *ngIf=\"!clearBtnClicked\">{{msg}}</span> -->\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n  <nav class=\"navbar navbar-default fixed-top\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <a class=\"navbar-brand vie-logo\" href=\"#\"><img class=\"logo\" src=\"assets/vie-logo.png\" alt=\"Vie Records Logo\" /></a>\n        <a class=\"hamburger-menu\" (click)=\"mobileMenuOpenClose(true)\" href=\"#\">\n          <img src=\"assets/icons/hamburger-menu.svg\" alt=\"\" #hammenuimg />\n        </a>\n      </div>\n      <div class=\"mobile-menu\" #mobilemenu>\n        <h3 class=\"mobile-nav-title\">Select a Page</h3>\n        <ul class=\"nav navbar-nav\">\n          <li><a class=\"nav-link\" href=\"#/home\">Home</a></li>\n          <li><a class=\"nav-link\" href=\"#/addProduct\">Trade Records</a></li>\n          <li><a class=\"nav-link\" href=\"#/searchProduct\">Search Product</a></li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n<main class=\"main-content\">\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</main>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer-custom\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <p>Quick Links</p>\n        <ul id=\"footer-list\">\n          <li><a href=\"#/searchProduct\">Search Product</a></li>\n          <li><a href=\"#/addProduct\">Trade Records</a></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-4\">\n        <p>Payment Options</p>\n        <div id=\"payment-icons\" style=\"margin-bottom: 16px;\">\n          <a id=\"amex\" href=\"#\" aria-label=\"Amex\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"38.787\" height=\"30.152\" viewBox=\"0 0 38.787 30.152\">\n              <path id=\"Icon_awesome-cc-amex\" data-name=\"Icon awesome-cc-amex\" d=\"M21.88,11.39c0-1.1-.949-1.238-1.844-1.238l-2.632-.02V14.8h1.1V13.106h1.211c1.238,0,.976.693,1,1.689h1.117v-.909c0-.619-.1-1.016-.74-1.238a1.325,1.325,0,0,0,.787-1.259ZM19.9,12.15H18.508v-1.03h1.413c.343,0,.72.067.72.5s-.357.532-.74.532Zm-1.124,6.024H15.23l-1.413,1.535-1.38-1.535H7.961l-.007,4.664h4.4L13.79,21.29l1.373,1.548H17.33l.007-1.568c1.272,0,3.318.31,3.318-1.568,0-1.164-.828-1.528-1.878-1.528Zm-6.986,3.682H9.058v-.929H11.5v-.949H9.058v-.841h2.807l1.2,1.36Zm4.429.552-1.7-1.891,1.7-1.844Zm2.544-2.086H17.337V19.137h1.447c.377,0,.686.155.686.565,0,.431-.31.619-.707.619Zm-2.127-9.2v-.983H12.9V14.8h3.735V13.84H14.019v-.929h2.544v-.949H14.019v-.841Zm22.129,6.165h-.013Zm-13.1,2.147c0-1.1-.949-1.259-1.824-1.259H21.193l-.007,4.664H22.3l.007-1.7H23.5c.74,0,1,.135,1,.929l-.007.774H25.6l.007-.929c0-.6-.121-1.016-.74-1.238a1.332,1.332,0,0,0,.8-1.238Zm-1.965.754H22.311v-1.05h1.413c.343,0,.72.067.72.5,0,.464-.363.552-.74.552ZM12.074,14.8V10.138H10.216L8.89,13.3,7.43,10.138H5.606V14.56L3.715,10.138H2.066l-2,4.664h1.2l.431-1.03H4.024l.431,1.03H6.73V11.154L8.345,14.8h.983l1.615-3.648V14.8ZM2.1,12.8l.754-1.858L3.627,12.8ZM34.23,23.5v-.3c-.727.377-.262.3-10.547.3,0-1.7.007-1.609,0-1.7-.114-.007-.215-.007-.633-.007,0,1.2-.007.458-.007,1.7H20.379c0-.814.007-1.03.007-1.965a4.36,4.36,0,0,1-2.309.417c0,.989-.007.559-.007,1.548H14.779c-.343-.384-.182-.209-1.036-1.171-.215.236-.861.936-1.084,1.171H7.14V17.286h5.593c.337.377.188.209,1.043,1.158.215-.236.821-.9,1.057-1.158h3.9a3.214,3.214,0,0,1,1.635.377v-.377c3.655,0,4.328-.094,5.095.343v-.343H30.73v.35c.767-.464,1.319-.35,4.368-.35v.337c.693-.4,1.117-.35,3.655-.337V5.481A3.231,3.231,0,0,0,35.522,2.25H3.217A3.231,3.231,0,0,0-.014,5.481v7.39c.633-1.474,1.326-3.1,1.555-3.628H4.213c.289.68.108.249.606,1.42V9.243h3.1c.2.417.747,1.615.936,2.019.39-.915.68-1.609.848-2.019H16.63c0-.007.774,0,.781,0,2.941.013,3.607-.054,4.334.357V9.243h2.685v.626A3.219,3.219,0,0,1,26.5,9.243h1.858c0,.034.128.02.155.02H30.69c.283.66.175.4.592,1.386V9.263H34.2c.33.538-.067-.121.754,1.238V9.263h2.685v6.192h-2.8c-.363-.606-.094-.148-.888-1.474v1.474H30.394c-.431-1-.007-.02-.444-1.03H28.671c-.283.673-.148.35-.431,1.03h-1.8a3.129,3.129,0,0,1-2-.6v.6H19.962c-.02-.936-.007-1.669-.007-1.669a4.8,4.8,0,0,0-.66-.013v1.689h-9.12v-.767c-.168.377-.182.4-.343.767H7.847c-.269-.6-.2-.431-.343-.767v.767H3.943c-.283-.68-.148-.357-.431-1.03H2.22c-.283.673-.148.35-.431,1.03H0v13.71A3.231,3.231,0,0,0,3.23,32.4H35.543a3.231,3.231,0,0,0,3.231-3.231V23.087C37.918,23.646,36.572,23.5,34.23,23.5Zm2.443-4.341H38.7v-.983H36.485a1.413,1.413,0,0,0-1.6,1.393c0,2.221,2.874.861,2.874,1.844,0,.343-.289.431-.565.431H35.038l-.007,1h2.154a1.764,1.764,0,0,0,1.514-.6V20.5c-.707-.929-2.645-.087-2.645-.909,0-.39.31-.437.619-.437Zm-3.836,2.679H30.67l-.007,1H32.83c1,0,1.763-.377,1.763-1.481,0-2.234-2.887-.754-2.887-1.77,0-.377.33-.431.619-.431h2.046v-.983H32.137a1.4,1.4,0,0,0-1.582,1.393c0,2.221,2.874.841,2.874,1.844-.007.363-.316.431-.592.431ZM30,19.137v-.962H26.282l-.007,4.664H29.99L30,21.876l-2.6-.02v-.929H29.95v-.949H27.406v-.841Zm-3.789-7.276c-.02.013-.094.148-.094.512,0,.4.061.518.074.532a.53.53,0,0,0,.229.034l.491-1.137c-.074,0-.141-.007-.209-.007C26.322,11.794,26.228,11.841,26.207,11.861Zm1.373-.707h-.007Zm-1.09-1.023c-1.582,0-2.288.808-2.288,2.376,0,1.494.686,2.288,2.221,2.288h1.292l.431-1.03h2.309L30.9,14.8h2.268V11.3l2.1,3.493h1.588V10.151H35.718v3.237l-1.959-3.237h-1.7v4.4l-1.878-4.4H28.509L26.928,13.82h-.5c-.9,0-1.084-.545-1.084-1.339,0-1.6,1.057-1.346,2.228-1.326V10.131Zm2.833.814.754,1.858H28.543Zm-6.8-.808V14.8h1.137V10.138Z\" transform=\"translate(0.014 -2.25)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"discover\" href=\"#\" aria-label=\"Discover\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"45.248\" height=\"30.165\" viewBox=\"0 0 45.248 30.165\">\n              <path id=\"Icon_metro-discover\" data-name=\"Icon metro-discover\" d=\"M8.718,23.035a2.139,2.139,0,0,1-.707,1.65,2.557,2.557,0,0,1-1.748.511H5.929V20.874h.334a2.449,2.449,0,0,1,1.748.53,2.042,2.042,0,0,1,.707,1.63ZM43.6,21.758q0,1.021-1.257,1.021h-.373V20.8h.393q1.237,0,1.237.962ZM10.033,23.035a3.084,3.084,0,0,0-.982-2.366,3.572,3.572,0,0,0-2.533-.913H4.652v6.54H6.518a3.5,3.5,0,0,0,2.337-.746,3.162,3.162,0,0,0,1.178-2.514Zm.589,3.26H11.9v-6.54H10.622Zm6.284-1.983a1.719,1.719,0,0,0-.4-1.218,3.892,3.892,0,0,0-1.483-.825,2.568,2.568,0,0,1-.776-.373.568.568,0,0,1-.206-.452.633.633,0,0,1,.265-.52,1.071,1.071,0,0,1,.678-.206,1.379,1.379,0,0,1,1.041.53l.668-.864a2.775,2.775,0,0,0-1.925-.727,2.071,2.071,0,0,0-1.453.54,1.729,1.729,0,0,0-.589,1.326,1.594,1.594,0,0,0,.354,1.09,2.976,2.976,0,0,0,1.257.717,4.424,4.424,0,0,1,.884.373.747.747,0,0,1,.373.668.877.877,0,0,1-.275.658.976.976,0,0,1-.707.265,1.479,1.479,0,0,1-1.394-.864l-.825.786a2.631,2.631,0,0,0,2.258,1.257,2.265,2.265,0,0,0,1.63-.6,2.059,2.059,0,0,0,.628-1.561Zm5.46,1.767V24.566a2.159,2.159,0,0,1-1.532.727,2.106,2.106,0,0,1-1.581-.638,2.405,2.405,0,0,1,0-3.221,2.007,2.007,0,0,1,1.522-.658,2.233,2.233,0,0,1,1.591.746V20.01a3.486,3.486,0,0,0-1.571-.393,3.388,3.388,0,0,0-2.465.992,3.425,3.425,0,0,0-.01,4.851,3.355,3.355,0,0,0,2.455.992,3.59,3.59,0,0,0,1.591-.373ZM46.561,37.94V27.591q-1.277.786-2.838,1.65t-4.664,2.3q-3.1,1.434-6.471,2.7t-8.2,2.641q-4.831,1.375-9.9,2.317H45.3a1.274,1.274,0,0,0,1.257-1.257ZM29.849,23.074a3.554,3.554,0,1,0-1.041,2.514A3.425,3.425,0,0,0,29.849,23.074Zm2.985,3.4,2.828-6.716H34.267l-1.767,4.4-1.748-4.4H29.358l2.789,6.716h.687Zm3.4-.177h3.614v-1.1H37.508V23.427h2.258v-1.1H37.508V20.874h2.337V19.755H36.231Zm7.679,0h1.571l-2.062-2.749A1.7,1.7,0,0,0,44.912,21.7a1.768,1.768,0,0,0-.609-1.434,2.584,2.584,0,0,0-1.709-.511h-1.9v6.54h1.277V23.683h.177Zm3.908-13.374v24.9a2.556,2.556,0,0,1-.756,1.866,2.484,2.484,0,0,1-1.836.766H5.163a2.484,2.484,0,0,1-1.836-.766,2.556,2.556,0,0,1-.756-1.866v-24.9a2.556,2.556,0,0,1,.756-1.866,2.484,2.484,0,0,1,1.836-.766H45.226a2.484,2.484,0,0,1,1.836.766,2.556,2.556,0,0,1,.756,1.866Z\" transform=\"translate(-2.571 -10.289)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"mastercard\" href=\"#\" aria-label=\"MasterCard\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"50.866\" height=\"30.469\" viewBox=\"0 0 50.866 30.469\">\n              <path id=\"Icon_payment-mastercard-alt\" data-name=\"Icon payment-mastercard-alt\" d=\"M55.986,31.584a15.232,15.232,0,0,0-2.015-7.68,17.5,17.5,0,0,0-5.54-5.54,16.173,16.173,0,0,0-7.68-2.015A14.53,14.53,0,0,0,31.56,19.5a15.31,15.31,0,0,1,4.784,7.932H34.959a14.5,14.5,0,0,0-4.406-7.177,14.486,14.486,0,0,0-4.406,7.177H24.761A15.3,15.3,0,0,1,29.545,19.5a14.54,14.54,0,0,0-9.191-3.147,16.164,16.164,0,0,0-7.68,2.015,17.47,17.47,0,0,0-5.54,5.54,15.646,15.646,0,0,0,0,15.36,17.452,17.452,0,0,0,5.54,5.54,16.145,16.145,0,0,0,7.68,2.015,14.531,14.531,0,0,0,9.191-3.147,15.868,15.868,0,0,1-4.659-7.3h1.385a15.322,15.322,0,0,0,4.281,6.547,15.344,15.344,0,0,0,4.281-6.547h1.385a15.906,15.906,0,0,1-4.659,7.3,14.519,14.519,0,0,0,9.191,3.147,16.15,16.15,0,0,0,7.68-2.015,17.476,17.476,0,0,0,5.54-5.54,15.234,15.234,0,0,0,2.015-7.68ZM11.793,27.933h2.392l-1.259,7.3H11.416l.881-5.54-2.015,5.54H9.149v-5.54l-1.007,5.54H6.631l1.259-7.3h2.266v4.533Zm7.05,3.022a5.971,5.971,0,0,1-.126,1.133c-.084.588-.17,1.133-.252,1.637a8.43,8.43,0,0,1-.252,1.133v.378H16.955v-.629a1.823,1.823,0,0,1-1.637.756,1.359,1.359,0,0,1-1.007-.378,2.038,2.038,0,0,1-.378-1.259,1.968,1.968,0,0,1,.629-1.637,3.583,3.583,0,0,1,2.14-.629h.629V31.08c0-.335-.336-.5-1.007-.5a7.072,7.072,0,0,0-1.637.252c.082-.335.168-.756.252-1.259a5.131,5.131,0,0,1,1.763-.378q2.141,0,2.141,1.763Zm-1.762,1.637H16.7c-.84,0-1.259.3-1.259.881,0,.421.168.629.5.629a.852.852,0,0,0,.756-.378A1.539,1.539,0,0,0,17.081,32.591Zm6.169-3.274L23,30.7a3.876,3.876,0,0,0-1.133-.126c-.5,0-.756.169-.756.5a.505.505,0,0,0,.126.378l.5.252a1.863,1.863,0,0,1,1.133,1.637q0,2.015-2.392,2.015a7.438,7.438,0,0,1-1.637-.126c.082-.335.168-.8.252-1.385a6.822,6.822,0,0,0,1.385.252c.586,0,.881-.168.881-.5a.522.522,0,0,0-.126-.378,1.609,1.609,0,0,0-.629-.378,1.7,1.7,0,0,1-1.133-1.637q0-2.012,2.266-2.015a5.866,5.866,0,0,1,1.512.127Zm2.392,0H26.4l-.126,1.511h-.881a4.753,4.753,0,0,1-.126,1.133,3.935,3.935,0,0,1-.063.5.993.993,0,0,1-.189.5v.5a.444.444,0,0,0,.5.5,1.113,1.113,0,0,0,.5-.126l-.252,1.385a3.813,3.813,0,0,1-1.133.126A1.112,1.112,0,0,1,23.376,34.1a5.9,5.9,0,0,1,.252-1.637l.629-4.029h1.511l-.125.882Zm5.666,2.015a7.941,7.941,0,0,1-.126,1.511H28.035a1.215,1.215,0,0,0,.252.881,1.539,1.539,0,0,0,1.133.378,3.336,3.336,0,0,0,1.637-.5l-.252,1.511a4.448,4.448,0,0,1-1.637.252,2.337,2.337,0,0,1-2.644-2.644A3.762,3.762,0,0,1,27.28,30.2a2.281,2.281,0,0,1,1.888-1.007,2.22,2.22,0,0,1,1.637.629,2.065,2.065,0,0,1,.5,1.511Zm-3.148.252h1.763v-.378l-.126-.252a.373.373,0,0,0-.126-.252.355.355,0,0,1-.252-.126h-.252q-.755,0-1.007,1.007Zm7.051-2.266a9.381,9.381,0,0,0-.629,1.763c-.336-.082-.629.126-.881.629a24.786,24.786,0,0,0-.629,3.525H31.435l.126-.378q.5-3.523.756-5.54h1.511L33.7,30.2a1.609,1.609,0,0,1,.756-.756.548.548,0,0,1,.755-.126ZM40.5,28.184l-.252,1.511a3.137,3.137,0,0,0-1.385-.378,1.689,1.689,0,0,0-1.511.756,3.226,3.226,0,0,0-.5,2.015,1.736,1.736,0,0,0,.378,1.259,1.192,1.192,0,0,0,1.007.5,3.139,3.139,0,0,0,1.385-.378l-.252,1.637a3.128,3.128,0,0,1-1.385.252,2.519,2.519,0,0,1-2.015-.881,3.079,3.079,0,0,1-.756-2.266,4.868,4.868,0,0,1,1.007-3.147,2.89,2.89,0,0,1,2.518-1.259,6.063,6.063,0,0,1,1.762.378Zm4.533,2.77a3.953,3.953,0,0,1-.063.5,3.744,3.744,0,0,0-.063.629c-.084.421-.17.988-.252,1.7a8.9,8.9,0,0,1-.252,1.448H43.144v-.629a1.823,1.823,0,0,1-1.637.756,1.359,1.359,0,0,1-1.007-.378,2.038,2.038,0,0,1-.378-1.259,1.969,1.969,0,0,1,.629-1.637,3.378,3.378,0,0,1,2.015-.629H43.4a.518.518,0,0,0,.126-.378c0-.335-.336-.5-1.007-.5a7.072,7.072,0,0,0-1.637.252,4.081,4.081,0,0,1,.252-1.259,5.131,5.131,0,0,1,1.763-.378q2.139,0,2.139,1.763Zm-1.762,1.637h-.378c-.84,0-1.259.3-1.259.881,0,.421.168.629.5.629a.852.852,0,0,0,.756-.378A1.539,1.539,0,0,0,43.269,32.591Zm5.665-3.274a3.354,3.354,0,0,0-.629,1.763c-.336-.082-.629.126-.881.629a25.37,25.37,0,0,0-.629,3.525H45.158l.126-.378q.5-2.752.756-5.54H47.55a2.833,2.833,0,0,1-.126.881,1.609,1.609,0,0,1,.756-.756.9.9,0,0,1,.755-.126Zm3.9-1.385h1.637l-1.259,7.3H51.7l.126-.5a1.676,1.676,0,0,1-1.385.629,1.475,1.475,0,0,1-1.385-.629,3,3,0,0,1-.629-1.763,3.873,3.873,0,0,1,.881-2.644,1.974,1.974,0,0,1,1.763-1.007,2.175,2.175,0,0,1,1.511.756l.252-2.141Zm-.629,3.9c0-.756-.3-1.133-.881-1.133a1.062,1.062,0,0,0-.881.629,2.662,2.662,0,0,0-.252,1.385q0,1.133.756,1.133a1.091,1.091,0,0,0,.881-.5,2.5,2.5,0,0,0,.377-1.511Z\" transform=\"translate(-5.12 -16.35)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"paypal\" href=\"#\" aria-label=\"PayPal\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"54\" height=\"14.39\" viewBox=\"0 0 54 14.39\">\n              <path id=\"Icon_payment-paypal\" data-name=\"Icon payment-paypal\" d=\"M32.317,23.837H30.3a.584.584,0,0,0-.483.256L27.024,28.2l-1.182-3.947a.585.585,0,0,0-.559-.416H23.3a.35.35,0,0,0-.332.463l2.226,6.535L23.1,33.789a.35.35,0,0,0,.286.552H25.4a.587.587,0,0,0,.48-.251l6.723-9.7a.35.35,0,0,0-.288-.55ZM18.8,27.752a2.243,2.243,0,0,1-2.27,1.921,1.559,1.559,0,0,1-1.666-1.956,2.25,2.25,0,0,1,2.254-1.935,1.694,1.694,0,0,1,1.341.548,1.732,1.732,0,0,1,.341,1.422Zm2.8-3.915H19.594a.35.35,0,0,0-.346.3l-.088.562-.14-.2a2.865,2.865,0,0,0-2.377-.843,4.625,4.625,0,0,0-4.49,4.046,3.8,3.8,0,0,0,.749,3.09,3.146,3.146,0,0,0,2.533,1.022,3.851,3.851,0,0,0,2.785-1.15l-.09.559a.35.35,0,0,0,.346.4h1.811a.583.583,0,0,0,.577-.492l1.088-6.885a.35.35,0,0,0-.346-.4Zm-12.07.048c-.229,1.508-1.381,1.508-2.495,1.508H6.406l.444-2.815a.35.35,0,0,1,.346-.3h.291c.758,0,1.474,0,1.844.431a1.4,1.4,0,0,1,.2,1.171Zm-.484-3.934H4.85a.583.583,0,0,0-.577.493l-1.7,10.77a.35.35,0,0,0,.346.4H4.927a.583.583,0,0,0,.576-.492l.458-2.906a.583.583,0,0,1,.576-.493H7.866c2.767,0,4.364-1.339,4.781-3.993a3.234,3.234,0,0,0-.536-2.71,3.894,3.894,0,0,0-3.061-1.074Zm44.884.3L52.211,31.215a.35.35,0,0,0,.346.4H54.29a.583.583,0,0,0,.576-.493l1.7-10.77a.35.35,0,0,0-.346-.4H54.28a.35.35,0,0,0-.346.3Zm-5.174,7.5a2.243,2.243,0,0,1-2.27,1.921,1.559,1.559,0,0,1-1.666-1.956,2.25,2.25,0,0,1,2.254-1.935,1.694,1.694,0,0,1,1.341.548,1.732,1.732,0,0,1,.341,1.422Zm2.8-3.915H49.552a.35.35,0,0,0-.346.3l-.088.562-.141-.2a2.863,2.863,0,0,0-2.376-.843,4.625,4.625,0,0,0-4.49,4.046,3.8,3.8,0,0,0,.749,3.09,3.147,3.147,0,0,0,2.533,1.022,3.851,3.851,0,0,0,2.785-1.15l-.09.559a.35.35,0,0,0,.346.4h1.811a.583.583,0,0,0,.577-.492l1.088-6.886a.35.35,0,0,0-.346-.4Zm-12.07.048c-.229,1.508-1.381,1.508-2.495,1.508h-.633l.444-2.815a.35.35,0,0,1,.346-.3h.291c.758,0,1.474,0,1.844.431a1.4,1.4,0,0,1,.2,1.171Zm-.484-3.934h-4.2a.583.583,0,0,0-.577.493l-1.7,10.77a.35.35,0,0,0,.346.4h2.155a.409.409,0,0,0,.4-.344l.482-3.054a.583.583,0,0,1,.576-.493h1.329c2.767,0,4.364-1.339,4.781-3.993a3.234,3.234,0,0,0-.536-2.71,3.894,3.894,0,0,0-3.061-1.074Z\" transform=\"translate(-2.571 -19.952)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"visa\" href=\"#\" aria-label=\"Amex\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"46.949\" height=\"14.39\" viewBox=\"0 0 46.949 14.39\">\n              <path id=\"Icon_simple-visa\" data-name=\"Icon simple-visa\" d=\"M34.126,13.072a9.764,9.764,0,0,0-3.4-.589c-3.756,0-6.407,1.894-6.426,4.607-.023,2,1.886,3.118,3.328,3.787,1.481.685,1.976,1.115,1.972,1.731-.01.933-1.184,1.356-2.273,1.356a8.041,8.041,0,0,1-3.582-.734l-.468-.217-.53,3.126A12.712,12.712,0,0,0,27,26.873c3.993,0,6.6-1.88,6.634-4.771.031-1.59-1-2.8-3.171-3.791-1.318-.646-2.14-1.078-2.14-1.733,0-.579.7-1.2,2.169-1.2a6.964,6.964,0,0,1,2.846.534l.352.158.53-3.02-.092.02Zm9.748-.333H40.94a1.9,1.9,0,0,0-2,1.156L33.3,26.677h3.993l.8-2.093,4.871,0c.119.489.469,2.089.469,2.089h3.519ZM18.9,12.622h3.8L20.321,26.568h-3.8L18.9,12.618ZM9.235,20.308l.4,1.937,3.719-9.505h4.028L11.389,26.658H7.371L4.085,14.87a.778.778,0,0,0-.352-.464A16.063,16.063,0,0,0,0,13.023l.049-.293H6.174A1.592,1.592,0,0,1,7.9,13.911l1.334,6.4ZM39.181,21.73l1.516-3.9c-.02.039.313-.806.5-1.33l.26,1.2.878,4.024H39.181v0Z\" transform=\"translate(0 -12.483)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a> \n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <p>Social</p>\n        <div id=\"social-icons\">\n          <a id=\"facebook\" href=\"#\" aria-label=\"Facebook\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18.021\" height=\"33.647\" viewBox=\"0 0 18.021 33.647\">\n              <path id=\"Icon_awesome-facebook-f\" data-name=\"Icon awesome-facebook-f\" d=\"M18.449,18.926l.934-6.089H13.541V8.886c0-1.666.816-3.29,3.433-3.29H19.63V.411A32.393,32.393,0,0,0,14.915,0C10.1,0,6.958,2.917,6.958,8.2v4.641H1.609v6.089H6.958V33.647h6.583V18.926Z\" transform=\"translate(-1.609)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"instagram\" href=\"#\" aria-label=\"Instagram\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32.845\" height=\"32.838\" viewBox=\"0 0 32.845 32.838\">\n              <path id=\"Icon_awesome-instagram\" data-name=\"Icon awesome-instagram\" d=\"M16.421,10.237a8.419,8.419,0,1,0,8.419,8.419A8.406,8.406,0,0,0,16.421,10.237Zm0,13.893a5.474,5.474,0,1,1,5.474-5.474A5.484,5.484,0,0,1,16.421,24.13ZM27.148,9.893a1.964,1.964,0,1,1-1.964-1.964A1.959,1.959,0,0,1,27.148,9.893Zm5.576,1.993a9.718,9.718,0,0,0-2.653-6.88,9.782,9.782,0,0,0-6.88-2.653C20.48,2.2,12.354,2.2,9.643,2.353A9.768,9.768,0,0,0,2.763,5,9.75,9.75,0,0,0,.11,11.879c-.154,2.711-.154,10.837,0,13.548a9.718,9.718,0,0,0,2.653,6.88,9.794,9.794,0,0,0,6.88,2.653c2.711.154,10.837.154,13.548,0a9.718,9.718,0,0,0,6.88-2.653,9.782,9.782,0,0,0,2.653-6.88c.154-2.711.154-10.83,0-13.541Zm-3.5,16.45A5.542,5.542,0,0,1,26.1,31.458c-2.162.857-7.291.659-9.68.659s-7.525.191-9.68-.659A5.542,5.542,0,0,1,3.62,28.336c-.857-2.162-.659-7.291-.659-9.68s-.191-7.525.659-9.68A5.542,5.542,0,0,1,6.741,5.856C8.9,5,14.032,5.2,16.421,5.2s7.525-.191,9.68.659a5.542,5.542,0,0,1,3.121,3.121c.857,2.162.659,7.291.659,9.68S30.079,26.182,29.222,28.336Z\" transform=\"translate(0.005 -2.238)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"twitter\" href=\"#\" aria-label=\"Twitter\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"36\" height=\"29.239\" viewBox=\"0 0 36 29.239\">\n              <path id=\"Icon_awesome-twitter\" data-name=\"Icon awesome-twitter\" d=\"M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z\" transform=\"translate(0 -3.381)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n          <a id=\"youtube\" href=\"#\" aria-label=\"YouTube\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"46.361\" height=\"32.597\" viewBox=\"0 0 46.361 32.597\">\n              <path id=\"Icon_awesome-youtube\" data-name=\"Icon awesome-youtube\" d=\"M46.442,9.6a5.825,5.825,0,0,0-4.1-4.125C38.728,4.5,24.23,4.5,24.23,4.5s-14.5,0-18.113.975A5.825,5.825,0,0,0,2.019,9.6C1.05,13.239,1.05,20.832,1.05,20.832s0,7.592.969,11.231a5.738,5.738,0,0,0,4.1,4.059c3.615.975,18.113.975,18.113.975s14.5,0,18.113-.975a5.738,5.738,0,0,0,4.1-4.059c.969-3.639.969-11.231.969-11.231s0-7.592-.969-11.231ZM19.489,27.725V13.938l12.117,6.893L19.489,27.725Z\" transform=\"translate(-1.05 -4.5)\" fill=\"#bd53c7\"/>\n            </svg>\n          </a>\n        </div>                              \n      </div>\n    </div>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid banner\">\n  <img class=\"banner-image\" src=\"assets/images/records_only.svg\" />\n  <div class=\"banner-text\">\n    <h1>Vie.\n    <br>Discover the best quality sounds</h1>\n    <a href=\"#/searchProduct\">\n      <span>Start exploring sounds</span>\n      <span class=\"icon\"></span>\n    </a>\n  </div>\n</div>\n<div class=\"container\">\n  <app-music-player></app-music-player>\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/music-category/music-category.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-category/music-category.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicCategoryMusicCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul>\n    <li *ngFor=\"let genre of genres\" (click)=\"filterMusic(genre.name)\">\n        <a [routerLink]=\"\"> <!-- link should call a function to sort results-->\n            <span>{{ genre.name }}</span>\n        </a>\n    </li>\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMusicPlayerMusicPlayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid recordplayer-container\">\n    <div class=\"vinyl-record-title-container\">\n        <h2 class=\"current-record-title\">{{featuredRecords[activeTrack].recordTitle}}</h2>\n        <div class=\"current-record-subtitle\">{{featuredRecords[activeTrack].artist}}</div>\n        <div class=\"vinyl-record\" #recordplayer></div>\n    </div>\n        \n    <div class=\"play-buttons\">\n\n        <audio id=\"heartbeat\" #audio src=\"../../assets/audio/record0.mp3\" preload=\"auto\">\n            Your browser does not support the <code>audio</code> element.\n        </audio>\n\n        <h3 class=\"recordplayer-title\">New Release</h3>\n        <ol #listofrecords>\n            <li>\n            <div [attr.tabindex]= \"activeTrack == 0 ? -1 : 0\" class=\"music-card\" [ngClass]=\"{'active': activeTrack == 0}\" (click)=\"playRecord(0)\" (keyup.enter)=\"playRecord(0)\">\n                <div class=\"flex-row\">\n                    {{featuredRecords[0].recordTitle}}    <button id=\"btn0\" class=\"play\" aria-label=\"play/pause button\"></button>\n                </div>\n                <div class=\"track-progress flex-row\">\n                    \n                    <div class=\"total-track-duration\">\n                        <div class=\"percent-played track-zero\" #percentplayed></div>\n                    </div>\n\n                </div>\n            </div>\n            </li>\n            <li>\n            <div [attr.tabindex]= \"activeTrack == 1 ? -1 : 0\" class=\"music-card\" [ngClass]=\"{'active': activeTrack == 1}\" (click)=\"playRecord(1)\" (keyup.enter)=\"playRecord(1)\">\n                <div class=\"flex-row\">\n                    {{featuredRecords[1].recordTitle}}<button id=\"btn1\" class=\"play\" aria-label=\"play/pause button\"></button>\n                </div>\n            <div class=\"track-progress flex-row\">\n                \n                <div class=\"total-track-duration\">\n                    <div class=\"percent-played track-one\"></div>\n                </div>\n\n            </div>\n            </div>\n            </li>\n            <li>\n            <div [attr.tabindex]= \"activeTrack == 2 ? -1 : 0\" class=\"music-card\" [ngClass]=\"{'active': activeTrack == 2}\" (click)=\"playRecord(2)\"  (keyup.enter)=\"playRecord(2)\">\n                <div class=\"flex-row\">\n                    {{featuredRecords[2].recordTitle}}<button id=\"btn2\" class=\"play\" aria-label=\"play/pause button\"></button>\n                </div>\n                <div class=\"track-progress flex-row\">\n                    \n                    <div class=\"total-track-duration\">\n                        <div class=\"percent-played track-one\"></div>\n                    </div>\n\n                </div>\n            </div>\n            </li>\n            <li>\n            <div [attr.tabindex]= \"activeTrack == 3 ? -1 : 0\" class=\"music-card\" [ngClass]=\"{'active': activeTrack == 3}\" (click)=\"playRecord(3)\" (keyup.enter)=\"playRecord(3)\">\n                <div class=\"flex-row\">  \n                    {{featuredRecords[3].recordTitle}}<button id=\"btn3\" class=\"play\" aria-label=\"play/pause button\"></button>\n                </div>\n                <div class=\"track-progress flex-row\">\n                \n                    <div class=\"total-track-duration\">\n                        <div class=\"percent-played track-one\"></div>\n                    </div>\n                \n                </div>\n            </div>\n            </li>\n            <li>\n            <div [attr.tabindex]= \"activeTrack == 4 ? -1 : 0\" class=\"music-card\" [ngClass]=\"{'active': activeTrack == 4}\" (click)=\"playRecord(4)\" (keyup.enter)=\"playRecord(4)\">\n                <div class=\"flex-row\">\n                    {{featuredRecords[4].recordTitle}}<button id=\"btn4\" class=\"play\" aria-label=\"play/pause button\"></button>\n                </div>\n                <div class=\"track-progress flex-row\">\n                    \n                    <div class=\"total-track-duration\">\n                        <div class=\"percent-played track-one\"></div>\n                    </div>\n\n                </div>\n            </div>\n            </li>\n        </ol>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaginatorPaginatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav aria-label=\"Page navigation example\">\n    <ul class=\"pagination justify-content-center\">\n      <li class=\"page-item disabled\">\n        <a class=\"page-link\" href=\"#\" tabindex=\"-1\">Previous</a>\n      </li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" href=\"#\">Next</a>\n      </li>\n    </ul>\n  </nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/search-product.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/search-product.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSearchProductSearchProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"sr-only\">Search and Sort Records</h1>\n<div class=\"container\">\n\n    <div class=\"row search-field\">\n        <!-- <div>\n            <label>Product ID:</label>\n            <input type=\"text\" name=\"productId\" class=\"form-control\"\n                [(ngModel)]=\"productId\" #productIdField>\n        </div> -->\n        <!-- <div> -->\n            <!-- <label >Product Description:</label> -->\n            <input type=\"text\" name=\"searchField\" class=\"form-control\" (keyup.enter)=\"search()\"\n                placeholder=\"Type in an artist or a record to search\" aria-label=\"Type in an artist or a record to search\" #searchField>\n        <!-- </div> -->\n        <!-- <div>\n            <button (click)=\"search()\" type=\"submit\" id=\"submit\" class=\"search primary\" value=\"Search\" [disabled]=\"isDisabled\">Search</button>\n            <button (click)=\"clear()\" class=\"clear secondary\">Clear</button>\n        </div> -->\n    </div>\n\n    <div class=\"row\" >\n        <music-category (filterRequest)=\"filter($event)\"></music-category>\n    </div>\n   \n\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2>Total results: <span>{{foundProducts.length}}</span></h2>\n        </div>\n\n        <div class=\"col sort-results\">\n            <form>\n                <select (click)=\"sortByPrice($event)\" (keyup.enter)=\"sortByPrice($event)\" name=\"music-filter\" aria-label=\"Music filter\" id=\"music-filter\">\n                    <option value=\"0\">None</option>\n                    <option value=\"1\">Price high to low</option>\n                    <option value=\"2\">Price low to high</option>\n                </select>\n            </form>\n        </div>\n    </div>\n\n    <!-- found search results (factor out in separate component?) -->\n    <div class=\"record-tiles\" *ngIf=\"foundProducts.length > 0\">\n        <div class=\"record-tile\" *ngFor=\"let prod of foundProducts\">\n            <img src=\"{{prod.productImageUrl}}\" alt=\"{{prod.recordTitle}} cover art\" />\n            <h3>{{prod.recordTitle}}</h3>\n            <div>{{prod.artist}}</div>\n            <div>{{prod.year}}</div>\n            <div>{{prod.price.toLocaleString(\"en-US\", {\n                style: \"currency\",\n                currency: \"USD\"\n              }) }}</div>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"foundProducts.length == 0\">\n        <p>no result</p>\n    </div>\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tile/tile.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tile/tile.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTileTileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row\">\n        <div id=\"{{tile.id}}\" class=\"col-sm\" *ngFor=\"let tile of tiles\">\n            <img style=\"margin-bottom: 20px;\" src=\"{{tile.productImageUrl}}\"/>\n            <h6>{{tile.recordTitle}}</h6>\n            <div>{{tile.artist}}</div>\n            <div>{{tile.year}}</div>\n            <div>{{tile.price}}</div>\n            <br style=\"margin-bottom: 60px;\"/>\n        </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/add-product/add-product.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/add-product/add-product.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddProductAddProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-product {\n  border: 1px solid transparent;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  top: 0;\n  z-index: 0;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.add-product .heading-container {\n  flex-direction: column;\n}\n.add-product .heading-container .page-heading {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.add-product .heading-container .subheading {\n  color: #352543;\n  margin-bottom: 32px;\n}\n.add-product .container {\n  background-color: white;\n  margin-top: 70px;\n  padding: 40px 48px;\n  border-radius: 12px;\n}\n.add-product .container .flex {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n}\n.add-product .container .flex h1 {\n  color: #352543;\n  padding-top: 0px;\n}\n.add-product .container .row {\n  margin-bottom: 28px;\n}\n.add-product .container .row:last-child {\n  margin-bottom: 0;\n}\n.add-product .container .row div.cta-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.add-product .container .row div.cta-buttons button {\n  padding: 0 32px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.add-product .container .row div.cta-buttons button.primary {\n  height: 49px;\n  border-radius: 0;\n  border: 2px solid #852C7D;\n  background-color: #852C7D;\n  color: white;\n}\n.add-product .container .row div.cta-buttons button.primary:hover {\n  border: 2px solid #BD53C7;\n  background-color: #BD53C7;\n}\n.add-product .container .row div.cta-buttons button.clear-button {\n  background-color: white;\n  cursor: pointer;\n  height: 49px;\n  border: 2px solid #852C7D;\n  border-radius: 0;\n  color: #852C7D;\n}\n.add-product .container .row div.cta-buttons button.clear-button:hover {\n  color: #BD53C7;\n  border: 2px solid #BD53C7;\n}\n.add-product .container .row div label {\n  margin-bottom: 0;\n  margin-top: 8px;\n  color: #352543;\n}\n.add-product .container .row div input {\n  border: none;\n  border-bottom: 1px solid #63477C;\n  border-radius: 0;\n  box-sizing: border-box;\n}\n.add-product .container .row div input.error-field {\n  border-bottom: 1px solid red;\n}\n.add-product .container .row div input.file-input {\n  display: none;\n}\n.add-product .container .row div.file-upload {\n  border: 2px dashed #852c7d;\n  padding: 24px;\n  margin: 20px 0;\n}\n.add-product .container .row div.file-upload .upload-btn {\n  width: 100%;\n  border-radius: 4px;\n  background-color: #f8edf9;\n  color: #352543;\n  padding: 20px;\n  height: 100px;\n  border: none;\n  cursor: pointer;\n}\n.add-product .container .row div.file-upload .upload-btn:hover {\n  color: #852C7D;\n}\n.add-product .container .row .message {\n  display: inline-block;\n  margin-left: 16px;\n}\n.add-product .container .row .message.error {\n  color: red;\n}\n.add-product .container .row .help-block {\n  font-size: 12px;\n  color: red;\n  display: inline-block;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDREo7QURFSTtFQUNJLHNCQUFBO0FDQVI7QURDUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDWjtBRENRO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FDQ1o7QURFSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FDQ1o7QURBWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBRENRO0VBQ0ksbUJBQUE7QUNDWjtBREFZO0VBQ0ksZ0JBQUE7QUNFaEI7QURDZ0I7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNDcEI7QURBb0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDRXhCO0FERHdCO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHNUI7QURGNEI7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FDSWhDO0FERHdCO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRzVCO0FERjRCO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FDSWhDO0FER2dCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0RwQjtBREdnQjtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNEcEI7QURFb0I7RUFDSSw0QkFBQTtBQ0F4QjtBREVvQjtFQUNJLGFBQUE7QUNBeEI7QURHZ0I7RUFDSSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDRHBCO0FERW9CO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0F4QjtBREN3QjtFQUNJLGNBQUE7QUNDNUI7QURJWTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNGaEI7QURHZ0I7RUFDSSxVQUFBO0FDRHBCO0FESVk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNGaEIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvZHVjdC9hZGQtcHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFkZC1wcm9kdWN0IHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9hZGRfcHJvZHVjdF9iZy5wbmdcIik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5wYWdlLWhlYWRpbmcge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdWJoZWFkaW5nIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzUyNTQzO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggNDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgLmZsZXgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM1MjU0MztcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgICAgJi5jdGEtYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLnByaW1hcnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM4NTJDN0Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg1MkM3RDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNCRDUzQzc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJi5jbGVhci1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzg1MkM3RDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODUyQzdEO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0JENTNDNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI0JENTNDNztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM1MjU0M1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MzQ3N0M7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICYuZXJyb3ItZmllbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmZpbGUtaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmZpbGUtdXBsb2FkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggZGFzaGVkICM4NTJjN2Q7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgICAgICAgICAudXBsb2FkLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGVkZjk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM1MjU0MztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NTJDN0Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVzc2FnZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICYuZXJyb3Ige1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWxwLWJsb2NrIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSAgICBcbn1cblxuXG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkgeyBcbi8vICAgICBiYWNrZ3JvdW5kIHtcbi8vICAgICAgIGxlZnQ6IDUwJTtcbi8vICAgICAgIG1hcmdpbi1sZWZ0OiAtNTEycHg7ICAgXG4vLyAgICAgfVxuLy8gfSIsIi5hZGQtcHJvZHVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmFkZC1wcm9kdWN0IC5oZWFkaW5nLWNvbnRhaW5lciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWRkLXByb2R1Y3QgLmhlYWRpbmctY29udGFpbmVyIC5wYWdlLWhlYWRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hZGQtcHJvZHVjdCAuaGVhZGluZy1jb250YWluZXIgLnN1YmhlYWRpbmcge1xuICBjb2xvcjogIzM1MjU0MztcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG4gIHBhZGRpbmc6IDQwcHggNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAuZmxleCBoMSB7XG4gIGNvbG9yOiAjMzUyNTQzO1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuLmFkZC1wcm9kdWN0IC5jb250YWluZXIgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmFkZC1wcm9kdWN0IC5jb250YWluZXIgLnJvdyBkaXYuY3RhLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93IGRpdi5jdGEtYnV0dG9ucyBidXR0b24ge1xuICBwYWRkaW5nOiAwIDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2LmN0YS1idXR0b25zIGJ1dHRvbi5wcmltYXJ5IHtcbiAgaGVpZ2h0OiA0OXB4O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjODUyQzdEO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUyQzdEO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93IGRpdi5jdGEtYnV0dG9ucyBidXR0b24ucHJpbWFyeTpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNCRDUzQzc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93IGRpdi5jdGEtYnV0dG9ucyBidXR0b24uY2xlYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA0OXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjODUyQzdEO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBjb2xvcjogIzg1MkM3RDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2LmN0YS1idXR0b25zIGJ1dHRvbi5jbGVhci1idXR0b246aG92ZXIge1xuICBjb2xvcjogI0JENTNDNztcbiAgYm9yZGVyOiAycHggc29saWQgI0JENTNDNztcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2IGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzM1MjU0Mztcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzYzNDc3QztcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2IGlucHV0LmVycm9yLWZpZWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2IGlucHV0LmZpbGUtaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmFkZC1wcm9kdWN0IC5jb250YWluZXIgLnJvdyBkaXYuZmlsZS11cGxvYWQge1xuICBib3JkZXI6IDJweCBkYXNoZWQgIzg1MmM3ZDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93IGRpdi5maWxlLXVwbG9hZCAudXBsb2FkLWJ0biB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGVkZjk7XG4gIGNvbG9yOiAjMzUyNTQzO1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgZGl2LmZpbGUtdXBsb2FkIC51cGxvYWQtYnRuOmhvdmVyIHtcbiAgY29sb3I6ICM4NTJDN0Q7XG59XG4uYWRkLXByb2R1Y3QgLmNvbnRhaW5lciAucm93IC5tZXNzYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5hZGQtcHJvZHVjdCAuY29udGFpbmVyIC5yb3cgLm1lc3NhZ2UuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufVxuLmFkZC1wcm9kdWN0IC5jb250YWluZXIgLnJvdyAuaGVscC1ibG9jayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/add-product/add-product.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/add-product/add-product.component.ts ***!
    \******************************************************/

  /*! exports provided: AddProductComponent */

  /***/
  function srcAppAddProductAddProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductComponent", function () {
      return AddProductComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/product.service.ts");

    var AddProductComponent = /*#__PURE__*/function () {
      function AddProductComponent(http, router, route, productService) {
        _classCallCheck(this, AddProductComponent);

        this.http = http;
        this.router = router;
        this.route = route;
        this.productService = productService;
        this.submitted = false;
      }

      _createClass(AddProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "clearForm",
        value: function clearForm(myForm) {
          myForm.reset();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(myForm) {
          this.submitted = true;

          if (myForm.valid) {
            if (confirm('You are about to submit this entry.\n Are you sure?')) {
              this.productService.create(myForm.value);
              this.msg = "Submission successful";
              this.submitted = false;
              myForm.reset();
            }
          } else {
            this.msg = "Entry is not completed.";
          }
        }
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          console.log('onfileselected fired');
          var file = event.target.files[0];
          console.log(file);
          console.log(this.fileUpload); // if (file) {
          //     this.fileName = file.name;
          //     const formData = new FormData();
          //     formData.append("thumbnail", file);
          //     const upload$ = this.http.post("/api/thumbnail-upload", formData);
          //     upload$.subscribe();
          // }
        }
      }]);

      return AddProductComponent;
    }();

    AddProductComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileUpload', {
      "static": false
    })], AddProductComponent.prototype, "fileUpload", void 0);
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-product/add-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product.component.scss */
      "./src/app/add-product/add-product.component.scss"))["default"]]
    })], AddProductComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/add-product/add-product.component.ts");
    /* harmony import */


    var _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-product/search-product.component */
    "./src/app/search-product/search-product.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'addProduct',
      component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_4__["AddProductComponent"]
    }, {
      path: 'searchProduct',
      component: _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_5__["SearchProductComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "nav {\n  background-color: #34072E;\n  z-index: 1;\n  box-shadow: 0 6px 6px -6px;\n}\n\nnav .container {\n  justify-content: flex-start;\n}\n\nnav a {\n  color: white;\n}\n\nnav a:hover {\n  color: white;\n  text-decoration: underline;\n}\n\nnav ul {\n  flex-direction: row;\n}\n\nnav ul li {\n  margin-left: 24px;\n}\n\nnav.navbar .container .navbar-header a.hamburger-menu {\n  display: none;\n}\n\nnav.navbar .container .mobile-nav-title {\n  display: none;\n}\n\n.logo {\n  height: 32px;\n  width: 32px;\n}\n\n.main-content {\n  padding-top: 60px;\n  box-sizing: border-box;\n  background-color: #101A27;\n}\n\nfooter {\n  background-color: #192032;\n  color: #ffffff;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  padding: 4px;\n}\n\nfooter span {\n  margin-right: 48px;\n}\n\n@media screen and (max-width: 500px) {\n  nav.navbar {\n    margin: 0;\n    padding: 18px 20px 22px;\n    height: 60px;\n  }\n  nav.navbar .container {\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n  }\n  nav.navbar .container .navbar-header {\n    width: 100%;\n  }\n  nav.navbar .container .navbar-header .navbar-brand.vie-logo {\n    display: none;\n  }\n  nav.navbar .container .navbar-header a.hamburger-menu {\n    display: inline;\n  }\n  nav.navbar .container .mobile-menu {\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: #000000;\n    position: fixed;\n    top: 60px;\n  }\n  nav.navbar .container .mobile-menu .mobile-nav-title {\n    display: block;\n    color: white;\n    text-transform: uppercase;\n    margin-left: 16px;\n    margin-right: 16px;\n    margin-top: 48px;\n    margin-bottom: 20px;\n    font-family: Museo, sans-serif;\n    font-size: 1rem;\n    font-weight: 100;\n  }\n  nav.navbar .container .mobile-menu.open {\n    display: block;\n  }\n  nav.navbar .container .mobile-menu ul {\n    flex-direction: column;\n    background-color: #000000;\n  }\n  nav.navbar .container .mobile-menu ul li {\n    background-image: url('arrow-icon.svg');\n    background-repeat: no-repeat;\n    background-position: right center;\n    background-size: 20px 20px;\n    margin: 0 16px;\n  }\n  nav.navbar .container .mobile-menu ul li a {\n    font-size: 1.5rem;\n    font-weight: lighter;\n    padding: 20px 0;\n    font-family: \"Helvetica Neue\", sans-serif;\n    font-size: 1.75rem;\n    font-weight: 300;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRE1ZO0VBQ0ksYUFBQTtBQ0hoQjs7QURNUTtFQUNJLGFBQUE7QUNKWjs7QURTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNOSjs7QURTQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7QUNOSjs7QURTQTtFQUVJO0lBQ0ksU0FBQTtJQUNBLHVCQUFBO0lBQ0EsWUFBQTtFQ1BOO0VEUU07SUFDSSxTQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0VDTlY7RURPVTtJQUNJLFdBQUE7RUNMZDtFRE1jO0lBQ0ksYUFBQTtFQ0psQjtFRE1jO0lBQ0ksZUFBQTtFQ0psQjtFRFVVO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxlQUFBO0lBQ0EsU0FBQTtFQ1JkO0VEU2M7SUFDSSxjQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw4QkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQ1BsQjtFRFNjO0lBQ0ksY0FBQTtFQ1BsQjtFRFNjO0lBQ0ksc0JBQUE7SUFFQSx5QkFBQTtFQ1JsQjtFRFNrQjtJQUNJLHVDQUFBO0lBQ0EsNEJBQUE7SUFDQSxpQ0FBQTtJQUNBLDBCQUFBO0lBQ0EsY0FBQTtFQ1B0QjtFRFFzQjtJQUNJLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0lBQ0EseUNBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VDTjFCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDA3MkU7O1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNoYWRvdzogMCA2cHggNnB4IC02cHggO1xufVxuXG5uYXYgLmNvbnRhaW5lciB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG5uYXYgYSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5uYXYgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5uYXYgdWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbm5hdiB1bCBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cblxubmF2Lm5hdmJhciB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgICAgIGEuaGFtYnVyZ2VyLW1lbnUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm1vYmlsZS1uYXYtdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxvZ28ge1xuICAgIGhlaWdodDogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxQTI3O1xufVxuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTIwMzI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNHB4O1xufVxuXG5mb290ZXIgc3BhbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuXG4gICAgbmF2Lm5hdmJhciB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMThweCAyMHB4IDIycHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5uYXZiYXItaGVhZGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAubmF2YmFyLWJyYW5kLnZpZS1sb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYS5oYW1idXJnZXItbWVudSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1vYmlsZS1tZW51IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDYwcHg7XG4gICAgICAgICAgICAgICAgLm1vYmlsZS1uYXYtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTXVzZW8sIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5vcGVuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheTogbm9uZTsgICAgXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1pY29uLnN2ZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIm5hdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDA3MkU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDZweCAtNnB4O1xufVxuXG5uYXYgLmNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxubmF2IGEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubmF2IHVsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxubmF2IHVsIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbm5hdi5uYXZiYXIgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlciBhLmhhbWJ1cmdlci1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm5hdi5uYXZiYXIgLmNvbnRhaW5lciAubW9iaWxlLW5hdi10aXRsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICB3aWR0aDogMzJweDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxQTI3O1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyMDMyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuZm9vdGVyIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDQ4cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIG5hdi5uYXZiYXIge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxOHB4IDIwcHggMjJweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIG5hdi5uYXZiYXIgLmNvbnRhaW5lciAubmF2YmFyLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQudmllLWxvZ28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIC5uYXZiYXItaGVhZGVyIGEuaGFtYnVyZ2VyLW1lbnUge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICBuYXYubmF2YmFyIC5jb250YWluZXIgLm1vYmlsZS1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDYwcHg7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIC5tb2JpbGUtbWVudSAubW9iaWxlLW5hdi10aXRsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDQ4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LWZhbWlseTogTXVzZW8sIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIC5tb2JpbGUtbWVudS5vcGVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBuYXYubmF2YmFyIC5jb250YWluZXIgLm1vYmlsZS1tZW51IHVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgbmF2Lm5hdmJhciAuY29udGFpbmVyIC5tb2JpbGUtbWVudSB1bCBsaSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ljb25zL2Fycm93LWljb24uc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuICAgIG1hcmdpbjogMCAxNnB4O1xuICB9XG4gIG5hdi5uYXZiYXIgLmNvbnRhaW5lciAubW9iaWxlLW1lbnUgdWwgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Vie Record Store';
        this.isClosed = true;
      }

      _createClass(AppComponent, [{
        key: "mobileMenuOpenClose",
        value: function mobileMenuOpenClose(isClosed) {
          console.log(this.isClosed);

          if (this.isClosed) {
            this.hammenuimg.nativeElement.setAttribute('src', 'assets/icons/close-icon.svg');
            this.mobilemenu.nativeElement.classList.add('open');
            this.isClosed = false;
          } else {
            this.hammenuimg.nativeElement.setAttribute('src', 'assets/icons/hamburger-menu.svg');
            this.mobilemenu.nativeElement.classList.remove('open');
            this.isClosed = true;
          }
        }
      }]);

      return AppComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('hammenuimg', {
      "static": false
    })], AppComponent.prototype, "hammenuimg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mobilemenu', {
      "static": false
    })], AppComponent.prototype, "mobilemenu", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-product/add-product.component */
    "./src/app/add-product/add-product.component.ts");
    /* harmony import */


    var _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-product/search-product.component */
    "./src/app/search-product/search-product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _music_category_music_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./music-category/music-category.component */
    "./src/app/music-category/music-category.component.ts");
    /* harmony import */


    var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./music-player/music-player.component */
    "./src/app/music-player/music-player.component.ts");
    /* harmony import */


    var _tile_tile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./tile/tile.component */
    "./src/app/tile/tile.component.ts");
    /* harmony import */


    var _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./paginator/paginator.component */
    "./src/app/paginator/paginator.component.ts"); // import { Ng2SearchPipeModule } from 'ng2-search-filter';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_5__["AddProductComponent"], _search_product_search_product_component__WEBPACK_IMPORTED_MODULE_6__["SearchProductComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _music_category_music_category_component__WEBPACK_IMPORTED_MODULE_15__["MusicCategoryComponent"], _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_16__["MusicPlayerComponent"], _tile_tile_component__WEBPACK_IMPORTED_MODULE_17__["TileComponent"], _paginator_paginator_component__WEBPACK_IMPORTED_MODULE_18__["PaginatorComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_13__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_14__["InMemoryDataService"], {
        dataEncapsulation: false
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/footer/footer.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container-fluid {\n  max-width: 1024px;\n}\n\n.footer-custom {\n  background-color: #000000;\n  color: white;\n  margin-top: 40px;\n  padding: 40px 0px;\n}\n\nul {\n  color: #BD53C7;\n  text-decoration: none;\n  list-style: none;\n  padding: 0;\n}\n\na {\n  color: #BD53C7;\n}\n\nsvg {\n  display: inline-block;\n  margin-right: 20px;\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbn1cblxuLmZvb3Rlci1jdXN0b217XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGNvbG9yOndoaXRlO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBwYWRkaW5nOiA0MHB4IDBweDtcbn1cblxudWwge1xuICBjb2xvcjogI0JENTNDNztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hIHtcbiAgY29sb3I6ICNCRDUzQzc7XG59XG5cbnN2ZyB7XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMnB4O1xufSIsIi5jb250YWluZXItZmx1aWQge1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbn1cblxuLmZvb3Rlci1jdXN0b20ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xufVxuXG51bCB7XG4gIGNvbG9yOiAjQkQ1M0M3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmEge1xuICBjb2xvcjogI0JENTNDNztcbn1cblxuc3ZnIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAzMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.scss":
  /*!******************************************!*\
    !*** ./src/app/home/home.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sr-only {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.container-fluid {\n  padding: 0px;\n  margin: 0px;\n  background-color: #34072e;\n}\n\n.container-fluid.banner {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-image: url('bg_lines.svg');\n  background-size: cover;\n  background-position: center;\n  height: 313px;\n  background-repeat: no-repeat;\n}\n\n.container-fluid.banner img.banner-image {\n  width: 250px;\n  margin-right: 48px;\n}\n\n.banner-text {\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.banner-text h1 {\n  font-size: 2rem;\n  margin-bottom: 24px;\n}\n\n.banner-text a {\n  background-color: #852C7D;\n  color: white;\n  border: none;\n  padding: 0;\n  width: 250px;\n  height: 40px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.banner-text a span {\n  margin: auto;\n}\n\n.banner-text a span.icon {\n  background-color: #BD53C7;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  background-image: url(\"/assets/icons/chevron-button.svg\");\n  background-repeat: no-repeat;\n  background-position: center center;\n}\n\n.banner-text a:hover {\n  border-bottom: 5px;\n  border-top: 5px;\n  height: 48px;\n  background-color: #BD53C7;\n  text-decoration: none;\n}\n\n.banner-text a:hover span.icon {\n  width: 48px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNKRjs7QURPQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FDSkY7O0FES0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURhQTtFQUdFLFlBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ2JGOztBRGNFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDWko7O0FEY0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDWko7O0FEYUk7RUFDRSxZQUFBO0FDWE47O0FEYUk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtBQ1hOOztBRGFJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUNYTjs7QURZTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Itb25seSB7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBsZWZ0Oi0xMDAwMHB4O1xuICB0b3A6YXV0bztcbiAgd2lkdGg6MXB4O1xuICBoZWlnaHQ6MXB4O1xuICBvdmVyZmxvdzpoaWRkZW47XG59XG5cbi8vIGJvZHkge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUyNTQzO1xuLy8gICBjb2xvcjogI2ZmZmZmZjtcbi8vIH1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBhZGRpbmc6IDBweDsgXG4gIG1hcmdpbjogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQwNzJlO1xufVxuXG4uY29udGFpbmVyLWZsdWlkLmJhbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35zcmMvYXNzZXRzL2ltYWdlcy9iZ19saW5lcy5zdmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDMxM3B4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBpbWcuYmFubmVyLWltYWdlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xuICB9XG59XG5cbi8vIGltZyB7XG4vLyAgIG1hcmdpbjogYXV0bztcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyB9XG5cbi5iYW5uZXItdGV4dCB7XG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLy8gcmlnaHQ6IDI0cHg7XG4gIGNvbG9yOndoaXRlO1xuICAvLyBoZWlnaHQ6IDE1NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMi4wcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIH1cbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg1MkM3RDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBzcGFuIHtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgc3Bhbi5pY29uIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ljb25zL2NoZXZyb24tYnV0dG9uLnN2ZycpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgfVxuICAgICY6aG92ZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4O1xuICAgICAgYm9yZGVyLXRvcDogNXB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0JENTNDNztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHNwYW4uaWNvbiB7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiLnNyLW9ubHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMDAwMHB4O1xuICB0b3A6IGF1dG87XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MDcyZTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZC5iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1hZ2VzL2JnX2xpbmVzLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDMxM3B4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmNvbnRhaW5lci1mbHVpZC5iYW5uZXIgaW1nLmJhbm5lci1pbWFnZSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA0OHB4O1xufVxuXG4uYmFubmVyLXRleHQge1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmJhbm5lci10ZXh0IGgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmJhbm5lci10ZXh0IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODUyQzdEO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5iYW5uZXItdGV4dCBhIHNwYW4ge1xuICBtYXJnaW46IGF1dG87XG59XG4uYmFubmVyLXRleHQgYSBzcGFuLmljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQ1M0M3O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pY29ucy9jaGV2cm9uLWJ1dHRvbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG59XG4uYmFubmVyLXRleHQgYTpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDVweDtcbiAgYm9yZGVyLXRvcDogNXB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5iYW5uZXItdGV4dCBhOmhvdmVyIHNwYW4uaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InMemoryDataService = /*#__PURE__*/function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var products = [{
            id: 1,
            productImageUrl: "/assets/images/A-Big-Orange.png",
            recordTitle: "A Big Orange",
            artist: "Aubrey",
            year: "2020",
            price: "$21.00"
          }, {
            id: 2,
            productImageUrl: "/assets/images/day-after-tmr.png",
            recordTitle: "Day After Tomorrow",
            artist: "Funky Monkey ",
            year: "2021",
            price: "$17.50"
          }, {
            id: 3,
            productImageUrl: "/assets/images/hot-air-balloon.png",
            recordTitle: "Hot Air Balloon",
            artist: "The Dramatic Duo",
            year: "2021",
            price: "$18.50"
          }, {
            id: 4,
            productImageUrl: "/assets/images/leaving-town.png",
            recordTitle: "Leaving Town",
            artist: "Tobi",
            year: "2020",
            price: "$15.00"
          }, {
            id: 5,
            productImageUrl: "/assets/images/freaking-out-remix.png",
            recordTitle: "Freaking Out (Remix)",
            artist: "Icy Volcano",
            year: "2021",
            price: "$22.00"
          }, {
            id: 6,
            productImageUrl: "/assets/images/mending-a-broken-heart.png",
            recordTitle: "Mending A Broken Heart",
            artist: "Icy Volcano",
            year: "2020",
            price: "$18.50"
          }, {
            id: 7,
            productImageUrl: "/assets/images/yes-yes.png",
            recordTitle: "Yes, Yes",
            artist: "Vinci",
            year: "2019",
            price: "$14.00"
          }, {
            id: 8,
            productImageUrl: "/assets/images/light-out.png",
            recordTitle: "Light Out",
            artist: "Dance House",
            year: "2019",
            price: "$14.00"
          }];
          return {
            products: products
          };
        } // Overrides the genId method to ensure that a product always has an id.
        // If the products array is empty,
        // the method below returns the initial number (11).
        // if the heroes array is not empty, the method below returns the highest
        // prod id + 1.

      }, {
        key: "genId",
        value: function genId(products) {
          return products.length > 0 ? Math.max.apply(Math, _toConsumableArray(products.map(function (prod) {
            return prod.id;
          }))) + 1 : 11;
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InMemoryDataService);
    /***/
  },

  /***/
  "./src/app/mock-products.ts":
  /*!**********************************!*\
    !*** ./src/app/mock-products.ts ***!
    \**********************************/

  /*! exports provided: PRODUCTS */

  /***/
  function srcAppMockProductsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PRODUCTS", function () {
      return PRODUCTS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PRODUCTS = [{
      id: 1,
      productImageUrl: "/assets/images/A-Big-Orange.png",
      recordTitle: "A Big Orange",
      artist: "Aubrey",
      year: "2020",
      price: 21.00,
      genre: "house"
    }, {
      id: 2,
      productImageUrl: "/assets/images/day-after-tmr.png",
      recordTitle: "Day After Tomorrow",
      artist: "Funky Monkey ",
      year: "2021",
      price: 17.50,
      genre: "rock"
    }, {
      id: 3,
      productImageUrl: "/assets/images/hot-air-balloon.png",
      recordTitle: "Hot Air Balloon",
      artist: "The Dramatic Duo",
      year: "2021",
      price: 18.50,
      genre: "classical"
    }, {
      id: 4,
      productImageUrl: "/assets/images/leaving-town.png",
      recordTitle: "Leaving Town",
      artist: "Tobi",
      year: "2020",
      price: 15.00,
      genre: "folk"
    }, {
      id: 5,
      productImageUrl: "/assets/images/freaking-out-remix.png",
      recordTitle: "Freaking Out (Remix)",
      artist: "Icy Volcano",
      year: "2021",
      price: 22.00,
      genre: "house"
    }, {
      id: 6,
      productImageUrl: "/assets/images/mending-a-broken-heart.png",
      recordTitle: "Mending A Broken Heart",
      artist: "Icy Volcano",
      year: "2020",
      price: 18.50,
      genre: "jazz"
    }, {
      id: 7,
      productImageUrl: "/assets/images/yes-yes.png",
      recordTitle: "Yes, Yes",
      artist: "Vinci",
      year: "2019",
      price: 14.00,
      genre: "rock"
    }, {
      id: 8,
      productImageUrl: "/assets/images/light-out.png",
      recordTitle: "Light Out",
      artist: "Dance House",
      year: "2019",
      price: 14.00,
      genre: "hip hop"
    }];
    /***/
  },

  /***/
  "./src/app/music-category/music-category.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/music-category/music-category.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicCategoryMusicCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ul {\n  list-style: none;\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  width: auto;\n  font-family: sans-serif;\n  margin-top: 48px;\n  margin-bottom: 72px;\n  justify-content: space-evenly;\n}\n@media screen and (max-width: 1140px) {\n  ul {\n    width: 100%;\n  }\n}\nul li {\n  list-style: none;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 150px;\n  height: 150px;\n  margin: 4px;\n  background: black;\n  outline: none;\n  transition: 0.5s ease-in-out;\n}\nul li:first-child {\n  margin-left: 0;\n}\nul li:hover {\n  background: #34072E;\n}\nul li:hover a span {\n  border-bottom: 4px solid #BD53C7;\n  transition: 0.5s ease-in-out;\n  text-decoration: none;\n}\nul li a {\n  display: block;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nul li a:hover {\n  text-decoration: none;\n}\nul li a span {\n  display: inline-block;\n  padding: 3px;\n  color: white;\n  text-decoration: none;\n  padding-bottom: 4px;\n  border-bottom: 4px solid #852C7D;\n}\nul li a span:hover {\n  border-bottom: 4px solid #BD53C7;\n  transition: 0.5s ease-in-out;\n}\n.category-selected {\n  background: #34072E;\n}\n.category-selected a span {\n  border-bottom: 4px solid #BD53C7;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL211c2ljLWNhdGVnb3J5L211c2ljLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tdXNpYy1jYXRlZ29yeS9tdXNpYy1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0o7QURBSTtFQVZKO0lBV1EsV0FBQTtFQ0dOO0FBQ0Y7QURBQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtBQ0dKO0FERkk7RUFDSSxjQUFBO0FDSVI7QURDQTtFQUNJLG1CQUFBO0FDRUo7QURESTtFQUNJLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQ0dSO0FEQ0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDSSxxQkFBQTtBQ0dSO0FEQ0E7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDRUo7QURDQTtFQUNJLGdDQUFBO0VBQ0EsNEJBQUE7QUNFSjtBRENBO0VBQ0ksbUJBQUE7QUNFSjtBRERJO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvbXVzaWMtY2F0ZWdvcnkvbXVzaWMtY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogNDhweDtcbiAgICBtYXJnaW4tYm90dG9tOiA3MnB4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExNDBweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogNHB4O1xuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG5cbnVsIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzQwNzJFO1xuICAgIGEgc3BhbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjQkQ1M0M3O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG51bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxufVxuXG51bCBsaSBhIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjNweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM4NTJDN0Q7XG59XG5cbnVsIGxpIGEgc3Bhbjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNCRDUzQzc7XG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcbiAgfVxuXG4uY2F0ZWdvcnktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQ6ICMzNDA3MkU7XG4gICAgYSBzcGFuIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNCRDUzQzc7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG59XG5cbiIsInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiBhdXRvO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNzJweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTQwcHgpIHtcbiAgdWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiA0cHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxudWwgbGk6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMzQwNzJFO1xufVxudWwgbGk6aG92ZXIgYSBzcGFuIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNCRDUzQzc7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnVsIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIGEgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM4NTJDN0Q7XG59XG5cbnVsIGxpIGEgc3Bhbjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjQkQ1M0M3O1xuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uY2F0ZWdvcnktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMzQwNzJFO1xufVxuLmNhdGVnb3J5LXNlbGVjdGVkIGEgc3BhbiB7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCAjQkQ1M0M3O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/music-category/music-category.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/music-category/music-category.component.ts ***!
    \************************************************************/

  /*! exports provided: MusicCategoryComponent */

  /***/
  function srcAppMusicCategoryMusicCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicCategoryComponent", function () {
      return MusicCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MusicCategoryComponent = /*#__PURE__*/function () {
      function MusicCategoryComponent() {
        _classCallCheck(this, MusicCategoryComponent);

        this.genres = [{
          "name": "Rock"
        }, {
          "name": "Jazz"
        }, {
          "name": "Classical"
        }, {
          "name": "House"
        }, {
          "name": "Folk"
        }, {
          "name": "Hip Hop"
        }, {
          "name": "All"
        }];
        this.filterRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MusicCategoryComponent, [{
        key: "filterMusic",
        value: function filterMusic(category) {
          console.log("filter music", category);
          this.filterRequest.emit(category);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MusicCategoryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MusicCategoryComponent.prototype, "filterRequest", void 0);
    MusicCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'music-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./music-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/music-category/music-category.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./music-category.component.scss */
      "./src/app/music-category/music-category.component.scss"))["default"]]
    })], MusicCategoryComponent);
    /***/
  },

  /***/
  "./src/app/music-player/music-player.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/music-player/music-player.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMusicPlayerMusicPlayerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes spinrecord {\n  /* 0%   {background-color:red; left:0px; top:0px;} */\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes spinrecord {\n  /* 0%   {background-color:red; left:0px; top:0px;} */\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.recordplayer-container {\n  display: flex;\n  flex-flow: wrap;\n  justify-content: center;\n  padding-top: 56px;\n}\n.recordplayer-container .vinyl-record-title-container {\n  width: 50%;\n  background-color: #080d13;\n  padding: 20px 52px;\n  border-right: 0.25px solid grey;\n}\n.recordplayer-container .vinyl-record-title-container .current-record-title {\n  text-align: center;\n  color: #FFF;\n  font-size: 1.5rem;\n}\n.recordplayer-container .vinyl-record-title-container .current-record-subtitle {\n  text-align: center;\n  color: #FFF;\n  margin-bottom: 40px;\n}\n.recordplayer-container .vinyl-record-title-container .vinyl-record {\n  background-image: url('vinyl_record.png');\n  background-repeat: no-repeat;\n  width: 235px;\n  height: 235px;\n  background-size: 235px 235px;\n  margin: 0 auto 16px;\n}\n.recordplayer-container .vinyl-record-title-container .vinyl-record.spinning {\n  -webkit-animation: 2s linear infinite spinrecord;\n          animation: 2s linear infinite spinrecord;\n}\n.recordplayer-container .play-buttons {\n  width: 50%;\n  text-align: center;\n  background-color: #080d13;\n}\n.recordplayer-container .play-buttons .recordplayer-title {\n  background-color: #000;\n  margin: 0;\n  padding: 16px;\n  text-align: left;\n  color: #BD53C7;\n  text-transform: uppercase;\n  font-size: 1.2rem;\n  font-weight: normal;\n  border-bottom: 0.25px solid grey;\n}\n.recordplayer-container ol {\n  margin: 0;\n  text-align: left;\n  counter-reset: li;\n  /* Initiate a counter */\n  margin-left: 0;\n  /* Remove the default left margin */\n  padding-left: 0;\n  /* Remove the default left padding */\n}\n.recordplayer-container ol > li {\n  padding: 0;\n  position: relative;\n  /* Create a positioning context */\n  margin-bottom: 8px;\n  /*padding:4px 8px; */\n  /* Add some spacing around the content */\n  list-style: none;\n  /* Disable the normal item numbering */\n}\n.recordplayer-container ol > li:before {\n  content: counter(li);\n  /* Use the counter as content */\n  counter-increment: li;\n  /* Increment the counter by 1 */\n  /* Position and style the number */\n  position: absolute;\n  top: 2px;\n  left: 24px;\n  box-sizing: border-box;\n  /* Some space between the number and the content in browsers that support\n     generated content but not positioning it (Camino 2 is one example) */\n  margin-right: 8px;\n  padding: 4px;\n  color: #fff;\n  font-size: 1.8em;\n  text-align: center;\n}\n.recordplayer-container ol > li:last-child {\n  margin-bottom: 0;\n}\n.recordplayer-container ol > li .music-card {\n  background-color: #070b11;\n  color: white;\n  padding: 16px 32px;\n  min-width: 360px;\n  cursor: pointer;\n  border-bottom: 0.25px solid grey;\n}\n.recordplayer-container ol > li .music-card button, .recordplayer-container ol > li .music-card button.play {\n  display: none;\n}\n.recordplayer-container ol > li .music-card.active {\n  background-color: #222a3d;\n}\n.recordplayer-container ol > li .music-card.active button {\n  background-color: transparent;\n  color: white;\n  border: none;\n  background-image: url('pause.svg');\n  background-size: 16px 16px;\n  background-position: center;\n  width: 24px;\n  height: 24px;\n  background-repeat: no-repeat;\n  float: right;\n  margin-left: 16px;\n  margin-top: 4px;\n  display: block;\n}\n.recordplayer-container ol > li .music-card.active button.play {\n  background-image: url('play.svg');\n}\n.recordplayer-container ol > li .music-card.active button:focus {\n  outline: none;\n}\n.recordplayer-container ol > li .music-card.active .flex-row.track-progress {\n  display: flex;\n}\n.recordplayer-container ol > li .music-card > .flex-row:first-child {\n  padding-left: 24px;\n}\n.recordplayer-container ol > li .music-card > .flex-row.track-progress {\n  display: none;\n  margin-top: 16px;\n}\n.recordplayer-container ol > li .music-card > .flex-row.track-progress .total-track-duration {\n  background-color: black;\n  width: 100%;\n  height: 8px;\n  box-sizing: border-box;\n  border: 2px;\n  border-radius: 4px;\n}\n.recordplayer-container ol > li .music-card > .flex-row.track-progress .total-track-duration .percent-played {\n  background-color: #BD53C7;\n  width: 0%;\n  height: 4px;\n  border-radius: 4px;\n  border: 2px solid black;\n  box-sizing: content-box;\n}\n@media only screen and (max-width: 500px) {\n  .container-fluid.recordplayer-container {\n    padding: 0;\n  }\n  .container-fluid.recordplayer-container .vinyl-record-title-container {\n    width: 100%;\n  }\n  .container-fluid.recordplayer-container .vinyl-record-title-container .vinyl-record {\n    margin: 0 auto 16px;\n  }\n  .container-fluid.recordplayer-container .play-buttons {\n    width: 100%;\n    padding: 0 20px 24px;\n  }\n  .container-fluid.recordplayer-container .play-buttons ol > li .music-card {\n    padding: 16px 20px;\n  }\n  .container-fluid.recordplayer-container .play-buttons ol > li .music-card .total-track-duration {\n    height: 18px;\n    border: 8px;\n    border-radius: 9px;\n  }\n  .container-fluid.recordplayer-container .play-buttons ol > li .music-card .total-track-duration .percent-played {\n    height: 8px;\n    border: 5px solid black;\n    border-radius: 9px;\n  }\n  .container-fluid.recordplayer-container .play-buttons ol > li:before {\n    left: 16px;\n  }\n}\n@media only screen and (max-width: 360px) {\n  .recordplayer-container ol > li .music-card {\n    min-width: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL211c2ljLXBsYXllci9tdXNpYy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL211c2ljLXBsYXllci9tdXNpYy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvREFBQTtFQUNBO0lBQU0sd0JBQUE7RUNFUjtFRERFO0lBQU0seUJBQUE7RUNJUjtFREhFO0lBQU0seUJBQUE7RUNNUjtFRExFO0lBQU0seUJBQUE7RUNRUjtBQUNGO0FEZEE7RUFDSSxvREFBQTtFQUNBO0lBQU0sd0JBQUE7RUNFUjtFRERFO0lBQU0seUJBQUE7RUNJUjtFREhFO0lBQU0seUJBQUE7RUNNUjtFRExFO0lBQU0seUJBQUE7RUNRUjtBQUNGO0FETkE7RUFHSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNNSjtBRExJO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQ09SO0FETFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ09aO0FETFE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ09aO0FETFE7RUFDSSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FDT1o7QUROWTtFQUNJLGdEQUFBO1VBQUEsd0NBQUE7QUNRaEI7QURKSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDTVI7QURMUTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ09aO0FESkk7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUFrQix1QkFBQTtFQUNsQixjQUFBO0VBQWUsbUNBQUE7RUFDZixlQUFBO0VBQWdCLG9DQUFBO0FDU3hCO0FEUlE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFBbUIsaUNBQUE7RUFDbkIsa0JBQUE7RUFDQSxvQkFBQTtFQUFzQix3Q0FBQTtFQUN0QixnQkFBQTtFQUFpQixzQ0FBQTtBQ2E3QjtBRFpZO0VBQ0ksb0JBQUE7RUFBcUIsK0JBQUE7RUFDckIscUJBQUE7RUFBc0IsK0JBQUE7RUFDdEIsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBR0Esc0JBQUE7RUFDQTt5RUFBQTtFQUVBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDZ0JoQjtBRGRZO0VBQ0ksZ0JBQUE7QUNnQmhCO0FEZFk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDZ0JoQjtBRGZnQjtFQUNJLGFBQUE7QUNpQnBCO0FEZmdCO0VBQ0kseUJBQUE7QUNpQnBCO0FEaEJvQjtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNrQnhCO0FEakJ3QjtFQUNJLGlDQUFBO0FDbUI1QjtBRGpCd0I7RUFDSSxhQUFBO0FDbUI1QjtBRGhCb0I7RUFDSSxhQUFBO0FDa0J4QjtBRGRvQjtFQUNJLGtCQUFBO0FDZ0J4QjtBRGRvQjtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2dCeEI7QURmd0I7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNpQjVCO0FEaEI0QjtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUNrQmhDO0FEUkE7RUFHTTtJQUNFLFVBQUE7RUNTTjtFRFJNO0lBQ0UsV0FBQTtFQ1VSO0VEVFE7SUFDRSxtQkFBQTtFQ1dWO0VEUk07SUFDSSxXQUFBO0lBQ0Esb0JBQUE7RUNVVjtFRFJjO0lBQ0ksa0JBQUE7RUNVbEI7RURUa0I7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VDV3RCO0VEVnNCO0lBQ0ksV0FBQTtJQUNBLHVCQUFBO0lBQ0Esa0JBQUE7RUNZMUI7RURSYztJQUNJLFVBQUE7RUNVbEI7QUFDRjtBREZBO0VBRUk7SUFDRSxZQUFBO0VDR0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXBsYXllci9tdXNpYy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNwaW5yZWNvcmQge1xuICAgIC8qIDAlICAge2JhY2tncm91bmQtY29sb3I6cmVkOyBsZWZ0OjBweDsgdG9wOjBweDt9ICovXG4gICAgMjUlICB7dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO31cbiAgICA1MCUgIHt0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO31cbiAgICA3NSUgIHt0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO31cbiAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO31cbn1cblxuLnJlY29yZHBsYXllci1jb250YWluZXJ7XG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDU5LDU5LDkzKTtcbiAgICAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3ZGVnLCByZ2JhKDU5LDU5LDkzLDEpIDAlLCByZ2JhKDE2LDI2LDM5LDEpIDEwMCUpOyBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNTZweDtcbiAgICAudmlueWwtcmVjb3JkLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwODBkMTM7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggNTJweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwLjI1cHggc29saWQgZ3JleTtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgICAgLmN1cnJlbnQtcmVjb3JkLXRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmN1cnJlbnQtcmVjb3JkLXN1YnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgfVxuICAgICAgICAudmlueWwtcmVjb3JkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2VzL3ZpbnlsX3JlY29yZC5wbmcpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOiAyMzVweDtcbiAgICAgICAgICAgIGhlaWdodDogMjM1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIzNXB4IDIzNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICAgICAgICAgICYuc3Bpbm5pbmcge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMnMgbGluZWFyIGluZmluaXRlIHNwaW5yZWNvcmQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gICAgICAgIFxuICAgIH1cbiAgICAucGxheS1idXR0b25zIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwZDEzO1xuICAgICAgICAucmVjb3JkcGxheWVyLXRpdGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiAjQkQ1M0M3O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMjVweCBzb2xpZCBncmV5O1xuICAgICAgICB9XG4gICAgfVxuICAgIG9sIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb3VudGVyLXJlc2V0OmxpOyAvKiBJbml0aWF0ZSBhIGNvdW50ZXIgKi9cbiAgICAgICAgbWFyZ2luLWxlZnQ6MDsgLyogUmVtb3ZlIHRoZSBkZWZhdWx0IGxlZnQgbWFyZ2luICovXG4gICAgICAgIHBhZGRpbmctbGVmdDowOyAvKiBSZW1vdmUgdGhlIGRlZmF1bHQgbGVmdCBwYWRkaW5nICovXG4gICAgICAgICY+bGkge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlOyAvKiBDcmVhdGUgYSBwb3NpdGlvbmluZyBjb250ZXh0ICovXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgICAgICAvKnBhZGRpbmc6NHB4IDhweDsgKi8gLyogQWRkIHNvbWUgc3BhY2luZyBhcm91bmQgdGhlIGNvbnRlbnQgKi9cbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6bm9uZTsgLyogRGlzYWJsZSB0aGUgbm9ybWFsIGl0ZW0gbnVtYmVyaW5nICovXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDpjb3VudGVyKGxpKTsgLyogVXNlIHRoZSBjb3VudGVyIGFzIGNvbnRlbnQgKi9cbiAgICAgICAgICAgICAgICBjb3VudGVyLWluY3JlbWVudDpsaTsgLyogSW5jcmVtZW50IHRoZSBjb3VudGVyIGJ5IDEgKi9cbiAgICAgICAgICAgICAgICAvKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIG51bWJlciAqL1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgICAgICAgICAgICAgIC8qIFNvbWUgc3BhY2UgYmV0d2VlbiB0aGUgbnVtYmVyIGFuZCB0aGUgY29udGVudCBpbiBicm93c2VycyB0aGF0IHN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgY29udGVudCBidXQgbm90IHBvc2l0aW9uaW5nIGl0IChDYW1pbm8gMiBpcyBvbmUgZXhhbXBsZSkgKi9cbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6OHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6NHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tdXNpYy1jYXJkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDcwYjExO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzNjBweDsgXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAuMjVweCBzb2xpZCBncmV5O1xuICAgICAgICAgICAgICAgIGJ1dHRvbiwgYnV0dG9uLnBsYXkge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYTNkO1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ljb25zL3BhdXNlLnN2Zyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE2cHggMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7ICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAmLnBsYXkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvcGxheS5zdmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJjpmb2N1cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZmxleC1yb3cudHJhY2stcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJiA+IC5mbGV4LXJvdyB7XG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYudHJhY2stcHJvZ3Jlc3Mge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAudG90YWwtdHJhY2stZHVyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wZXJjZW50LXBsYXllZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIFxuICAgIC5jb250YWluZXItZmx1aWQge1xuICAgICAgJi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgLnZpbnlsLXJlY29yZC10aXRsZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC52aW55bC1yZWNvcmQge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBsYXktYnV0dG9ucyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweCAyNHB4O1xuICAgICAgICAgICAgb2wgPiBsaSB7IFxuICAgICAgICAgICAgICAgIC5tdXNpYy1jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAudG90YWwtdHJhY2stZHVyYXRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAucGVyY2VudC1wbGF5ZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIFxuICB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcblxuICAgIC5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGkgLm11c2ljLWNhcmQge1xuICAgICAgbWluLXdpZHRoOiAwO1xuICAgIH1cbiAgXG59IiwiQGtleWZyYW1lcyBzcGlucmVjb3JkIHtcbiAgLyogMCUgICB7YmFja2dyb3VuZC1jb2xvcjpyZWQ7IGxlZnQ6MHB4OyB0b3A6MHB4O30gKi9cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1NnB4O1xufVxuLnJlY29yZHBsYXllci1jb250YWluZXIgLnZpbnlsLXJlY29yZC10aXRsZS1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwZDEzO1xuICBwYWRkaW5nOiAyMHB4IDUycHg7XG4gIGJvcmRlci1yaWdodDogMC4yNXB4IHNvbGlkIGdyZXk7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciAudmlueWwtcmVjb3JkLXRpdGxlLWNvbnRhaW5lciAuY3VycmVudC1yZWNvcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC52aW55bC1yZWNvcmQtdGl0bGUtY29udGFpbmVyIC5jdXJyZW50LXJlY29yZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNGRkY7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciAudmlueWwtcmVjb3JkLXRpdGxlLWNvbnRhaW5lciAudmlueWwtcmVjb3JkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvdmlueWxfcmVjb3JkLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAyMzVweDtcbiAgaGVpZ2h0OiAyMzVweDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMzVweCAyMzVweDtcbiAgbWFyZ2luOiAwIGF1dG8gMTZweDtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC52aW55bC1yZWNvcmQtdGl0bGUtY29udGFpbmVyIC52aW55bC1yZWNvcmQuc3Bpbm5pbmcge1xuICBhbmltYXRpb246IDJzIGxpbmVhciBpbmZpbml0ZSBzcGlucmVjb3JkO1xufVxuLnJlY29yZHBsYXllci1jb250YWluZXIgLnBsYXktYnV0dG9ucyB7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MGQxMztcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC5wbGF5LWJ1dHRvbnMgLnJlY29yZHBsYXllci10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNCRDUzQzc7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItYm90dG9tOiAwLjI1cHggc29saWQgZ3JleTtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sIHtcbiAgbWFyZ2luOiAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb3VudGVyLXJlc2V0OiBsaTtcbiAgLyogSW5pdGlhdGUgYSBjb3VudGVyICovXG4gIG1hcmdpbi1sZWZ0OiAwO1xuICAvKiBSZW1vdmUgdGhlIGRlZmF1bHQgbGVmdCBtYXJnaW4gKi9cbiAgcGFkZGluZy1sZWZ0OiAwO1xuICAvKiBSZW1vdmUgdGhlIGRlZmF1bHQgbGVmdCBwYWRkaW5nICovXG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIHtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBDcmVhdGUgYSBwb3NpdGlvbmluZyBjb250ZXh0ICovXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgLypwYWRkaW5nOjRweCA4cHg7ICovXG4gIC8qIEFkZCBzb21lIHNwYWNpbmcgYXJvdW5kIHRoZSBjb250ZW50ICovXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIC8qIERpc2FibGUgdGhlIG5vcm1hbCBpdGVtIG51bWJlcmluZyAqL1xufVxuLnJlY29yZHBsYXllci1jb250YWluZXIgb2wgPiBsaTpiZWZvcmUge1xuICBjb250ZW50OiBjb3VudGVyKGxpKTtcbiAgLyogVXNlIHRoZSBjb3VudGVyIGFzIGNvbnRlbnQgKi9cbiAgY291bnRlci1pbmNyZW1lbnQ6IGxpO1xuICAvKiBJbmNyZW1lbnQgdGhlIGNvdW50ZXIgYnkgMSAqL1xuICAvKiBQb3NpdGlvbiBhbmQgc3R5bGUgdGhlIG51bWJlciAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAyNHB4O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogU29tZSBzcGFjZSBiZXR3ZWVuIHRoZSBudW1iZXIgYW5kIHRoZSBjb250ZW50IGluIGJyb3dzZXJzIHRoYXQgc3VwcG9ydFxuICAgICBnZW5lcmF0ZWQgY29udGVudCBidXQgbm90IHBvc2l0aW9uaW5nIGl0IChDYW1pbm8gMiBpcyBvbmUgZXhhbXBsZSkgKi9cbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3MGIxMTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gIG1pbi13aWR0aDogMzYwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMC4yNXB4IHNvbGlkIGdyZXk7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkIGJ1dHRvbiwgLnJlY29yZHBsYXllci1jb250YWluZXIgb2wgPiBsaSAubXVzaWMtY2FyZCBidXR0b24ucGxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjJhM2Q7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkLmFjdGl2ZSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaWNvbnMvcGF1c2Uuc3ZnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxNnB4IDE2cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGkgLm11c2ljLWNhcmQuYWN0aXZlIGJ1dHRvbi5wbGF5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pY29ucy9wbGF5LnN2Zyk7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkLmFjdGl2ZSBidXR0b246Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnJlY29yZHBsYXllci1jb250YWluZXIgb2wgPiBsaSAubXVzaWMtY2FyZC5hY3RpdmUgLmZsZXgtcm93LnRyYWNrLXByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGkgLm11c2ljLWNhcmQgPiAuZmxleC1yb3c6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG4ucmVjb3JkcGxheWVyLWNvbnRhaW5lciBvbCA+IGxpIC5tdXNpYy1jYXJkID4gLmZsZXgtcm93LnRyYWNrLXByb2dyZXNzIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGkgLm11c2ljLWNhcmQgPiAuZmxleC1yb3cudHJhY2stcHJvZ3Jlc3MgLnRvdGFsLXRyYWNrLWR1cmF0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yZWNvcmRwbGF5ZXItY29udGFpbmVyIG9sID4gbGkgLm11c2ljLWNhcmQgPiAuZmxleC1yb3cudHJhY2stcHJvZ3Jlc3MgLnRvdGFsLXRyYWNrLWR1cmF0aW9uIC5wZXJjZW50LXBsYXllZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDUzQzc7XG4gIHdpZHRoOiAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5jb250YWluZXItZmx1aWQucmVjb3JkcGxheWVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkLnJlY29yZHBsYXllci1jb250YWluZXIgLnZpbnlsLXJlY29yZC10aXRsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jb250YWluZXItZmx1aWQucmVjb3JkcGxheWVyLWNvbnRhaW5lciAudmlueWwtcmVjb3JkLXRpdGxlLWNvbnRhaW5lciAudmlueWwtcmVjb3JkIHtcbiAgICBtYXJnaW46IDAgYXV0byAxNnB4O1xuICB9XG4gIC5jb250YWluZXItZmx1aWQucmVjb3JkcGxheWVyLWNvbnRhaW5lciAucGxheS1idXR0b25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjRweDtcbiAgfVxuICAuY29udGFpbmVyLWZsdWlkLnJlY29yZHBsYXllci1jb250YWluZXIgLnBsYXktYnV0dG9ucyBvbCA+IGxpIC5tdXNpYy1jYXJkIHtcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZC5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC5wbGF5LWJ1dHRvbnMgb2wgPiBsaSAubXVzaWMtY2FyZCAudG90YWwtdHJhY2stZHVyYXRpb24ge1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXI6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZC5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC5wbGF5LWJ1dHRvbnMgb2wgPiBsaSAubXVzaWMtY2FyZCAudG90YWwtdHJhY2stZHVyYXRpb24gLnBlcmNlbnQtcGxheWVkIHtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZC5yZWNvcmRwbGF5ZXItY29udGFpbmVyIC5wbGF5LWJ1dHRvbnMgb2wgPiBsaTpiZWZvcmUge1xuICAgIGxlZnQ6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnJlY29yZHBsYXllci1jb250YWluZXIgb2wgPiBsaSAubXVzaWMtY2FyZCB7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/music-player/music-player.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/music-player/music-player.component.ts ***!
    \********************************************************/

  /*! exports provided: MusicPlayerComponent */

  /***/
  function srcAppMusicPlayerMusicPlayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function () {
      return MusicPlayerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MusicPlayerComponent = /*#__PURE__*/function () {
      function MusicPlayerComponent() {
        _classCallCheck(this, MusicPlayerComponent);

        this.featuredRecords = [{
          id: 9001,
          productImageUrl: '',
          recordTitle: 'Let\s fall in love for the night',
          artist: 'Finneas',
          year: '',
          price: 0.00,
          genre: ''
        }, {
          id: 9002,
          productImageUrl: '',
          recordTitle: 'Someone you love',
          artist: 'Lewis Capaldi',
          year: '',
          price: 0.00,
          genre: ''
        }, {
          id: 9003,
          productImageUrl: '',
          recordTitle: 'Lovely',
          artist: 'Billie Eilish, Khalid',
          year: '',
          price: 0.00,
          genre: ''
        }, {
          id: 9004,
          productImageUrl: '',
          recordTitle: 'Como Los 90\'s (Bachata Version)',
          artist: 'Kewin Cosmos',
          year: '',
          price: 0.00,
          genre: ''
        }, {
          id: 9005,
          productImageUrl: '',
          recordTitle: 'Hang On Little Tomato',
          artist: 'Pink Martini',
          year: '',
          price: 0.00,
          genre: ''
        }];
        this.activeTrack = 0;
      }

      _createClass(MusicPlayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "setTabindex",
        value: function setTabindex(track) {
          var allcards = this.listofrecords.nativeElement.querySelectorAll('li>.music-card');
          allcards[track].setAttribute('tabindex', 0);
        }
      }, {
        key: "getTrack",
        value: function getTrack(track) {
          return this.listofrecords.nativeElement.querySelectorAll('li>.music-card')[track];
        }
      }, {
        key: "getButton",
        value: function getButton(track) {
          return this.listofrecords.nativeElement.querySelectorAll('.music-card button')[track];
        }
      }, {
        key: "switchTrack",
        value: function switchTrack(track) {
          this.activeTrack = track;
          this.setTabindex(track);
          this.audio.nativeElement.setAttribute('src', '../../assets/audio/record' + track + '.mp3');
        }
      }, {
        key: "Play",
        value: function Play(track) {
          var _this = this;

          this.playTrack = setInterval(function () {
            var totalTrack = _this.audio.nativeElement.duration;
            var playedTrack = _this.audio.nativeElement.currentTime;
            var percentPlayed = playedTrack / totalTrack * 100;
            _this.getTrack(track).querySelectorAll('.percent-played')[0].style = "width: " + percentPlayed + "%;";
          }, 500);
          this.getButton(track).classList.remove('play');
          this.audio.nativeElement.play();
        }
      }, {
        key: "Pause",
        value: function Pause(track) {
          this.getButton(track).classList.add('play');
          this.audio.nativeElement.pause();
          clearInterval(this.playTrack);
        }
      }, {
        key: "playRecord",
        value: function playRecord(track) {
          var currentTrack = this.getTrack(track);

          if (!currentTrack.classList.contains('active')) {
            this.switchTrack(track);

            if (!this.recordplayer.nativeElement.classList.contains("spinning")) {
              this.recordplayer.nativeElement.classList.add("spinning");
              this.Play(track);
            } else {
              this.switchTrack(track);
              this.Play(track);
            }
          } else {
            if (!this.recordplayer.nativeElement.classList.contains("spinning")) {
              this.recordplayer.nativeElement.classList.add("spinning");
              this.Play(track);
            } else {
              this.recordplayer.nativeElement.classList.remove("spinning");
              this.Pause(track);
            }
          }
        }
      }]);

      return MusicPlayerComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("recordplayer", {
      "static": true
    })], MusicPlayerComponent.prototype, "recordplayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("audio", {
      "static": true
    })], MusicPlayerComponent.prototype, "audio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("percentplayed", {
      "static": true
    })], MusicPlayerComponent.prototype, "percentplayed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("listofrecords", {
      "static": true
    })], MusicPlayerComponent.prototype, "listofrecords", void 0);
    MusicPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-music-player',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./music-player.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/music-player/music-player.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./music-player.component.scss */
      "./src/app/music-player/music-player.component.scss"))["default"]]
    })], MusicPlayerComponent);
    /***/
  },

  /***/
  "./src/app/paginator/paginator.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/paginator/paginator.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaginatorPaginatorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".paginator {\n  border: none;\n  margin: 0px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRvci9wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnaW5hdG9yIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbn0iLCIucGFnaW5hdG9yIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDBweCAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/paginator/paginator.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/paginator/paginator.component.ts ***!
    \**************************************************/

  /*! exports provided: PaginatorComponent */

  /***/
  function srcAppPaginatorPaginatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function () {
      return PaginatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PaginatorComponent = /*#__PURE__*/function () {
      function PaginatorComponent() {
        _classCallCheck(this, PaginatorComponent);
      }

      _createClass(PaginatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaginatorComponent;
    }();

    PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-paginator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./paginator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/paginator/paginator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./paginator.component.scss */
      "./src/app/paginator/paginator.component.scss"))["default"]]
    })], PaginatorComponent);
    /***/
  },

  /***/
  "./src/app/product.service.ts":
  /*!************************************!*\
    !*** ./src/app/product.service.ts ***!
    \************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _mock_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mock-products */
    "./src/app/mock-products.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { Console } from 'console';


    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpClient) {
        _classCallCheck(this, ProductService);

        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.productsUrl = 'api/products'; // URL to web api

        this.allProducts = _mock_products__WEBPACK_IMPORTED_MODULE_4__["PRODUCTS"];
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // public getProducts() {
      //   // return this.httpClient.get(`${this.baseUrl+'products'}`);
      //   return PRODUCTS;
      // }


      _createClass(ProductService, [{
        key: "getProducts",
        value: function getProducts() {
          return this.httpClient.get(this.productsUrl);
        }
        /** GET product by id. Will 404 if id not found */

      }, {
        key: "getProductById",
        value: function getProductById(id) {
          var url = "".concat(this.productsUrl, "/").concat(id);
          console.log(url);
          return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
            return console.log("fetched product id=".concat(id));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError("getProduct id=".concat(id))));
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            console.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
          };
        } // public getProductsDescription(productDescriptionEnglish: string) {
        //   return this.httpClient.get(`${this.baseUrl+'product/productDescriptionEnglish/' + productDescriptionEnglish}`);
        // }

      }, {
        key: "search",
        value: function search(desc) {//create array of search workd
          // loop through array
          // pass each word to getProductBySearchTerm()
        }
        /** GET product by description. Will 404 if id not found */

      }, {
        key: "getProductBySearchTerm",
        value: function getProductBySearchTerm(desc) {
          var foundProduct; // let descLettersArray = [];
          // for (let d = 0; d < desc.length; d++) {
          //   descLettersArray.push(desc.charAt(d));
          // }
          // console.log('array: ', descLettersArray);

          this.allProducts.forEach(function (product) {
            if (desc.trim().toLowerCase() == product.recordTitle.toLowerCase() || desc.trim() == product.artist.toLowerCase()) {
              console.log('product found:', product);
              foundProduct = product;
            }
          });

          if (foundProduct == null) {
            return;
          }

          var url = "".concat(this.productsUrl, "/").concat(foundProduct.id);
          return this.httpClient.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_) {
            return console.log("fetched product desc=".concat(desc));
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError("getProduct desc=".concat(desc))));
        }
      }, {
        key: "getProductIdDescription",
        value: function getProductIdDescription(productId, productDescriptionEnglish) {
          return this.httpClient.get("".concat(this.baseUrl + 'product/' + productId + '/productIdAndProductDescriptionEnglish/' + productDescriptionEnglish));
        }
      }, {
        key: "create",
        value: function create(product) {
          //http://localhost:8080/products-ut-wo-db/rest/product/create
          this.httpClient.post("".concat(this.baseUrl, "product/create"), product).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            return console.log('Could not create product.');
          });
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/search-product/search-product.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/search-product/search-product.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSearchProductSearchProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sr-only {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.container input.form-control {\n  border-radius: 19px;\n  padding-left: 48px;\n  background-image: url('search.svg');\n  background-repeat: no-repeat;\n  background-position: 16px center;\n}\n\n.container .search-field {\n  padding-top: 48px;\n}\n\n.container .row, .container .record-tiles {\n  display: flex;\n  flex-flow: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.container .row:first-child, .container .row :nth-child(2), .container .row :nth-child(3), .container .row :nth-child(4), .container .record-tiles:first-child, .container .record-tiles :nth-child(2), .container .record-tiles :nth-child(3), .container .record-tiles :nth-child(4) {\n  margin-top: 0;\n}\n\n.container .row h2, .container .record-tiles h2 {\n  font-size: 1rem;\n  line-height: 1.5;\n  font-weight: 400;\n}\n\n.container .row div, .container .record-tiles div {\n  display: flex;\n  flex-direction: column;\n  align-items: baseline center;\n}\n\n.container .row div:last-child, .container .record-tiles div:last-child {\n  margin-right: 0;\n  padding-right: 0;\n}\n\n.container .row div.record-tile, .container .record-tiles div.record-tile {\n  margin-top: 60px;\n}\n\n.container .row div.record-tile:first-child, .container .row div.record-tile:nth-child(2), .container .row div.record-tile:nth-child(3), .container .row div.record-tile:nth-child(4), .container .record-tiles div.record-tile:first-child, .container .record-tiles div.record-tile:nth-child(2), .container .record-tiles div.record-tile:nth-child(3), .container .record-tiles div.record-tile:nth-child(4) {\n  margin-top: 0;\n}\n\n.container .row div.record-tile h3, .container .record-tiles div.record-tile h3 {\n  font-size: 1rem;\n}\n\n.container .row div.record-tile img, .container .record-tiles div.record-tile img {\n  height: 250px;\n  width: 250px;\n  margin-bottom: 20px;\n}\n\n.container .row div label, .container .record-tiles div label {\n  white-space: nowrap;\n  margin-right: 16px;\n  margin-bottom: 0;\n  align-self: flex-end;\n  color: #868686;\n}\n\n.container .row div input, .container .record-tiles div input {\n  border: none;\n  border-bottom: 1px solid #852C7D;\n  border-radius: 0;\n}\n\n.container .row div button, .container .record-tiles div button {\n  padding: 0 32px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.container .row div button.primary, .container .record-tiles div button.primary {\n  margin-right: 16px;\n  background-color: #852C7D;\n  color: white;\n  border: #852C7D;\n}\n\n.container .row div button.primary:hover, .container .record-tiles div button.primary:hover {\n  margin-right: 16px;\n  background-color: #BD53C7;\n  color: white;\n  border: #BD53C7;\n}\n\n.container .row div button.primary:disabled, .container .record-tiles div button.primary:disabled {\n  background-color: gainsboro;\n  border: 1px solid #868686;\n  color: #868686;\n}\n\n.container .row div button.secondary, .container .record-tiles div button.secondary {\n  color: #852C7D;\n  border: 1px solid #852C7D;\n  background-color: white;\n}\n\n.container .row div button.secondary:hover, .container .record-tiles div button.secondary:hover {\n  color: #BD53C7;\n  border: 1px solid #BD53C7;\n  background-color: white;\n}\n\n.container .sort-results {\n  justify-content: flex-end;\n}\n\n.container .sort-results form {\n  text-align: right;\n}\n\nselect {\n  margin-bottom: 16px;\n  font-family: \"Helvetica Neue\", sans-serif;\n  background-color: #852C7D;\n  color: white;\n  border: none;\n  padding: 8px;\n  cursor: pointer;\n}\n\nselect:hover {\n  background-color: #BD53C7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL3NlYXJjaC1wcm9kdWN0L3NlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zZWFyY2gtcHJvZHVjdC9zZWFyY2gtcHJvZHVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FESUk7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FDRFI7O0FESUk7RUFDSSxpQkFBQTtBQ0ZSOztBREtJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNIUjs7QURLUTtFQUNJLGFBQUE7QUNIWjs7QURNUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSlo7O0FETVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ0paOztBRE1ZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDSmhCOztBRE1ZO0VBZUksZ0JBQUE7QUNsQmhCOztBRElnQjtFQUNJLGFBQUE7QUNGcEI7O0FETWdCO0VBQ0ksZUFBQTtBQ0pwQjs7QURNZ0I7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSnBCOztBRFVZO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDUmhCOztBRFVZO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUNSaEI7O0FEVVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNSaEI7O0FEU2dCO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUHBCOztBRFFvQjtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ054Qjs7QURRb0I7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ054Qjs7QURTZ0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ1BwQjs7QURRb0I7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQ054Qjs7QURZSTtFQUNJLHlCQUFBO0FDVlI7O0FEV1E7RUFDSSxpQkFBQTtBQ1RaOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRFlJO0VBQ0kseUJBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wcm9kdWN0L3NlYXJjaC1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNyLW9ubHkge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGxlZnQ6LTEwMDAwcHg7XG4gICAgdG9wOmF1dG87XG4gICAgd2lkdGg6MXB4O1xuICAgIGhlaWdodDoxcHg7XG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICAvLyBwYWRkaW5nOiAzMnB4IDBweDtcbiAgICBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ljb25zL3NlYXJjaC5zdmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTZweCBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1maWVsZCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0OHB4O1xuICAgIH1cblxuICAgIC5yb3csIC5yZWNvcmQtdGlsZXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC8vID5kaXYge1xuICAgICAgICAmOmZpcnN0LWNoaWxkLCA6bnRoLWNoaWxkKDIpLCA6bnRoLWNoaWxkKDMpLCA6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmUgY2VudGVyO1xuICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucmVjb3JkLXRpbGUge1xuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQsICY6bnRoLWNoaWxkKDIpLCAmOm50aC1jaGlsZCgzKSwgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODY4Njg2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQjODUyQzdEO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICYucHJpbWFyeSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojODUyQzdEO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjojODUyQzdEO1xuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6I0JENTNDNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjojQkQ1M0M3O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg2ODY4NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODY4Njg2O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuc2Vjb25kYXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6Izg1MkM3RDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQjODUyQzdEO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0JENTNDNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkI0JENTNDNztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5zb3J0LXJlc3VsdHMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5zZWxlY3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM4NTJDN0Q7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQ1M0M3O1xuICAgIH1cbn1cbiIsIi5zci1vbmx5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAwMDBweDtcbiAgdG9wOiBhdXRvO1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbnRhaW5lciBpbnB1dC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItcmFkaXVzOiAxOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9zZWFyY2guc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNnB4IGNlbnRlcjtcbn1cbi5jb250YWluZXIgLnNlYXJjaC1maWVsZCB7XG4gIHBhZGRpbmctdG9wOiA0OHB4O1xufVxuLmNvbnRhaW5lciAucm93LCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY29udGFpbmVyIC5yb3c6Zmlyc3QtY2hpbGQsIC5jb250YWluZXIgLnJvdyA6bnRoLWNoaWxkKDIpLCAuY29udGFpbmVyIC5yb3cgOm50aC1jaGlsZCgzKSwgLmNvbnRhaW5lciAucm93IDpudGgtY2hpbGQoNCksIC5jb250YWluZXIgLnJlY29yZC10aWxlczpmaXJzdC1jaGlsZCwgLmNvbnRhaW5lciAucmVjb3JkLXRpbGVzIDpudGgtY2hpbGQoMiksIC5jb250YWluZXIgLnJlY29yZC10aWxlcyA6bnRoLWNoaWxkKDMpLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgOm50aC1jaGlsZCg0KSB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG4uY29udGFpbmVyIC5yb3cgaDIsIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBoMiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYsIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgY2VudGVyO1xufVxuLmNvbnRhaW5lciAucm93IGRpdjpsYXN0LWNoaWxkLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uY29udGFpbmVyIC5yb3cgZGl2LnJlY29yZC10aWxlLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2LnJlY29yZC10aWxlIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYucmVjb3JkLXRpbGU6Zmlyc3QtY2hpbGQsIC5jb250YWluZXIgLnJvdyBkaXYucmVjb3JkLXRpbGU6bnRoLWNoaWxkKDIpLCAuY29udGFpbmVyIC5yb3cgZGl2LnJlY29yZC10aWxlOm50aC1jaGlsZCgzKSwgLmNvbnRhaW5lciAucm93IGRpdi5yZWNvcmQtdGlsZTpudGgtY2hpbGQoNCksIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYucmVjb3JkLXRpbGU6Zmlyc3QtY2hpbGQsIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYucmVjb3JkLXRpbGU6bnRoLWNoaWxkKDIpLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2LnJlY29yZC10aWxlOm50aC1jaGlsZCgzKSwgLmNvbnRhaW5lciAucmVjb3JkLXRpbGVzIGRpdi5yZWNvcmQtdGlsZTpudGgtY2hpbGQoNCkge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmNvbnRhaW5lciAucm93IGRpdi5yZWNvcmQtdGlsZSBoMywgLmNvbnRhaW5lciAucmVjb3JkLXRpbGVzIGRpdi5yZWNvcmQtdGlsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYucmVjb3JkLXRpbGUgaW1nLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2LnJlY29yZC10aWxlIGltZyB7XG4gIGhlaWdodDogMjUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYgbGFiZWwsIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYgbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBjb2xvcjogIzg2ODY4Njtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYgaW5wdXQsIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYgaW5wdXQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjODUyQzdEO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmNvbnRhaW5lciAucm93IGRpdiBidXR0b24sIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYgYnV0dG9uIHtcbiAgcGFkZGluZzogMCAzMnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYgYnV0dG9uLnByaW1hcnksIC5jb250YWluZXIgLnJlY29yZC10aWxlcyBkaXYgYnV0dG9uLnByaW1hcnkge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTJDN0Q7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAjODUyQzdEO1xufVxuLmNvbnRhaW5lciAucm93IGRpdiBidXR0b24ucHJpbWFyeTpob3ZlciwgLmNvbnRhaW5lciAucmVjb3JkLXRpbGVzIGRpdiBidXR0b24ucHJpbWFyeTpob3ZlciB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JENTNDNztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6ICNCRDUzQzc7XG59XG4uY29udGFpbmVyIC5yb3cgZGl2IGJ1dHRvbi5wcmltYXJ5OmRpc2FibGVkLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2IGJ1dHRvbi5wcmltYXJ5OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xuICBib3JkZXI6IDFweCBzb2xpZCAjODY4Njg2O1xuICBjb2xvcjogIzg2ODY4Njtcbn1cbi5jb250YWluZXIgLnJvdyBkaXYgYnV0dG9uLnNlY29uZGFyeSwgLmNvbnRhaW5lciAucmVjb3JkLXRpbGVzIGRpdiBidXR0b24uc2Vjb25kYXJ5IHtcbiAgY29sb3I6ICM4NTJDN0Q7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4NTJDN0Q7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAucm93IGRpdiBidXR0b24uc2Vjb25kYXJ5OmhvdmVyLCAuY29udGFpbmVyIC5yZWNvcmQtdGlsZXMgZGl2IGJ1dHRvbi5zZWNvbmRhcnk6aG92ZXIge1xuICBjb2xvcjogI0JENTNDNztcbiAgYm9yZGVyOiAxcHggc29saWQgI0JENTNDNztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY29udGFpbmVyIC5zb3J0LXJlc3VsdHMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmNvbnRhaW5lciAuc29ydC1yZXN1bHRzIGZvcm0ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuc2VsZWN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1MkM3RDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuc2VsZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JENTNDNztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/search-product/search-product.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/search-product/search-product.component.ts ***!
    \************************************************************/

  /*! exports provided: SearchProductComponent */

  /***/
  function srcAppSearchProductSearchProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductComponent", function () {
      return SearchProductComponent;
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


    var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product.service */
    "./src/app/product.service.ts");
    /* harmony import */


    var _mock_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mock-products */
    "./src/app/mock-products.ts"); // import {MatProgressSpinnerModule} from '@angular/material';


    var SearchProductComponent = /*#__PURE__*/function () {
      function SearchProductComponent(productService) {
        _classCallCheck(this, SearchProductComponent);

        this.productService = productService; // let result: Array<string>

        this.products = [];
        this.foundProducts = [];
      }

      _createClass(SearchProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isDisabled = false;
          this.foundProducts = _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"];
        }
      }, {
        key: "isValidField",
        value: function isValidField(field) {
          return field != null && field != "";
        }
      }, {
        key: "search",
        value: function search() {
          var _this2 = this;

          this.isDisabled = true;
          this.foundProducts = []; // this.productService.getProductBySearchTerm(this.searchField.nativeElement.value).subscribe((data:Product) => {  
          //   console.log('data:', data);
          //   if(data != null){
          //     this.foundProducts.push(data);
          //   }
          //   // console.log('DATA:', data);
          //   console.log(this.foundProducts);  
          // });

          var searchField = this.searchField.nativeElement.value;

          _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"].forEach(function (element) {
            // check artists
            if (element.artist.toLowerCase() == searchField.toLowerCase()) {
              _this2.foundProducts.push(element);
            } // check albums


            if (element.recordTitle.toLowerCase() == searchField.toLowerCase()) {
              _this2.foundProducts.push(element);
            }
          });
        }
      }, {
        key: "filter",
        value: function filter(category) {
          var _this3 = this;

          console.log('category: ', category);
          this.foundProducts = []; // clear old search data

          _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"].forEach(function (product) {
            if (product.genre.toLowerCase() == category.toLowerCase()) {
              _this3.foundProducts.push(product);
            } else if (category.toLowerCase() == "all") {
              _this3.foundProducts = _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"];
            }
          });
        }
      }, {
        key: "sortByPrice",
        value: function sortByPrice(event) {
          var selectedIndex = event.path[0].options.selectedIndex;

          switch (selectedIndex) {
            case 1:
              this.foundProducts = _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"]; // clear old search data
              // outer pass

              for (var i = 0; i < this.foundProducts.length; i++) {
                // inner pass
                for (var j = 0; j < this.foundProducts.length - i - 1; j++) {
                  // value comparison (desc)
                  if (this.foundProducts[j].price < this.foundProducts[j + 1].price) {
                    console.log('j ', this.foundProducts[j + 1], ', j+1: ', this.foundProducts[j + 1]); // swap

                    var temp = this.foundProducts[j];
                    this.foundProducts[j] = this.foundProducts[j + 1];
                    this.foundProducts[j + 1] = temp;
                  }
                }
              }

              break;

            case 2:
              console.log('low to high');
              this.foundProducts = _mock_products__WEBPACK_IMPORTED_MODULE_3__["PRODUCTS"]; // clear old search data
              // outer pass

              for (var _i = 0; _i < this.foundProducts.length; _i++) {
                // inner pass
                for (var _j = 0; _j < this.foundProducts.length - _i - 1; _j++) {
                  // value comparison (asc)
                  if (this.foundProducts[_j].price > this.foundProducts[_j + 1].price) {
                    console.log('j ', this.foundProducts[_j + 1], ', j+1: ', this.foundProducts[_j + 1]); // swap

                    var _temp = this.foundProducts[_j];
                    this.foundProducts[_j] = this.foundProducts[_j + 1];
                    this.foundProducts[_j + 1] = _temp;
                  }
                }
              }

              break;

            default:
              console.log('none');
              break;
          }
        }
      }]);

      return SearchProductComponent;
    }();

    SearchProductComponent.ctorParameters = function () {
      return [{
        type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchField', {
      "static": false
    })], SearchProductComponent.prototype, "searchField", void 0);
    SearchProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/search-product/search-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-product.component.scss */
      "./src/app/search-product/search-product.component.scss"))["default"]]
    })], SearchProductComponent);
    /***/
  },

  /***/
  "./src/app/tile/tile.component.scss":
  /*!******************************************!*\
    !*** ./src/app/tile/tile.component.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppTileTileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\n  height: 250px;\n  width: 250px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5kaS9Xb3Jrc3BhY2UtVVQtQW5ndWxhcjgvZ3JvdXAtcHJvamVjdC9FQ29tbWVyY2VSZWNvcmRTdG9yZS9zcmMvYXBwL3RpbGUvdGlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuIiwiaW1nIHtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tile/tile.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tile/tile.component.ts ***!
    \****************************************/

  /*! exports provided: TileComponent */

  /***/
  function srcAppTileTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileComponent", function () {
      return TileComponent;
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


    var _mock_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mock-products */
    "./src/app/mock-products.ts");

    var TileComponent = /*#__PURE__*/function () {
      function TileComponent() {
        _classCallCheck(this, TileComponent);

        this.tiles = _mock_products__WEBPACK_IMPORTED_MODULE_2__["PRODUCTS"];
      }

      _createClass(TileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TileComponent;
    }();

    TileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'tile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tile/tile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tile.component.scss */
      "./src/app/tile/tile.component.scss"))["default"]]
    })], TileComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // baseUrl: 'http://localhost:8080/products-ut-wo-db/rest'
      // baseUrl: 'http://localhost:8081/products-ut-wo-db/rest/'
      // baseUrl: 'http://ec2-18-189-3-205.us-east-2.compute.amazonaws.com:8080/products-ut-wo-db/rest/'
      // baseUrl: 'http://ec2-3-15-210-133.us-east-2.compute.amazonaws.com/products/rest' // lidia ec2 - now defunkt
      baseUrl: 'http://ec2-3-128-189-36.us-east-2.compute.amazonaws.com:8080/products-ut-wo-db/rest/products'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/dandi/Workspace-UT-Angular8/group-project/ECommerceRecordStore/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map