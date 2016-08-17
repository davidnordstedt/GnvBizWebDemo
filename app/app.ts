// <reference path="../../app/app.ts" />
namespace app{
    var main = angular.module("productManagement", 
                                ["ngRoute",
                                "common.services"
                                // "lodash"
                                ]);
                                // , "productResourceMock"])

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider) {

        $routeProvider
            .when("/productList",
                {
                    templateUrl: "/app/products/productListView.html",
                    controller: "ProductListCtrl as vm"
                })
            .when("/productDetail/:productId",
                {
                    templateUrl: "/app/products/productDetailView.html",
                    controller: "ProductDetailCtrl as vm"
                })
            .when("/gainesvilleServices",
                {
                    templateUrl: "/app/products/gainesvilleServiceListView.html",
                    controller: "GainesvilleServiceListCtrl as vm"
                })
            .otherwise("/gainesvilleServices");
    }
}