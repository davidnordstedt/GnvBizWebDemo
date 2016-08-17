/// <reference path="../../app/app.ts" />
var app;
(function (app) {
    var products;
    (function (products) {
        var productList;
        (function (productList) {
            var ProductListCtrl = (function () {
                function ProductListCtrl(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.title = "Product List";
                    this.showImage = false;
                    this.products = [];
                    var productResource = dataAccessService.getProductResource();
                    productResource.query(function (data) {
                        _this.products = data;
                    });
                }
                ProductListCtrl.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                //lodashianTest: string = _.chunk(['a', 'b', 'c', 'd'], 2);
                ProductListCtrl.$inject = ["dataAccessService"];
                return ProductListCtrl;
            })();
            angular
                .module("productManagement")
                .controller("ProductListCtrl", ProductListCtrl);
        })(productList = products.productList || (products.productList = {}));
    })(products = app.products || (app.products = {}));
})(app || (app = {}));
