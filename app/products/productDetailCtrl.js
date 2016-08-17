var app;
(function (app) {
    var products;
    (function (products) {
        var productDetail;
        (function (productDetail) {
            var ProductDetailCtrl = (function () {
                function ProductDetailCtrl(dataAccessService, $routeParams) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.$routeParams = $routeParams;
                    this.title = "Product Detail";
                    console.log($routeParams);
                    console.log("dataAccessService: " + dataAccessService);
                    //var id = 1;
                    var id = $routeParams.productId;
                    var productResource = dataAccessService.getProductResource();
                    productResource.get({ productId: id }, function (data) {
                        _this.product = data;
                    });
                }
                ProductDetailCtrl.$inject = ["dataAccessService", "$routeParams"];
                return ProductDetailCtrl;
            })();
            angular
                .module("productManagement")
                .controller("ProductDetailCtrl", ProductDetailCtrl);
        })(productDetail = products.productDetail || (products.productDetail = {}));
    })(products = app.products || (app.products = {}));
})(app || (app = {}));
