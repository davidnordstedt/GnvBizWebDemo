/// <reference path="../../app/app.ts" />
var app;
(function (app) {
    var products;
    (function (products) {
        var gainesvilleServiceList;
        (function (gainesvilleServiceList) {
            var GainesvilleServiceListCtrl = (function () {
                function GainesvilleServiceListCtrl(dataAccessService) {
                    var _this = this;
                    this.dataAccessService = dataAccessService;
                    this.title = "Services List";
                    this.showImage = false;
                    this.services = [];
                    this.categories = [];
                    var servicesResource = dataAccessService.getGainesvilleServices();
                    servicesResource.query(function (data) {
                        _this.AllServices = data;
                        //var _ = new lodash();//('lodash');
                        _this.categories = _.uniq(_.map(_this.AllServices, function (c) { return c.business_category; }));
                        _this.categories.push('All');
                        console.log(_this.categories);
                        //_.keys(services, 'business_category');
                    });
                }
                GainesvilleServiceListCtrl.prototype.toggleImage = function () {
                    this.showImage = !this.showImage;
                };
                GainesvilleServiceListCtrl.prototype.selectCategory = function (category) {
                    this.services = _.filter(this.AllServices, function (service) {
                        if (category == 'All')
                            return true;
                        else
                            return service.business_category == category;
                    });
                };
                GainesvilleServiceListCtrl.$inject = ["dataAccessService"];
                GainesvilleServiceListCtrl.$inject2 = ["_"];
                return GainesvilleServiceListCtrl;
            })();
            angular
                .module("productManagement")
                .controller("GainesvilleServiceListCtrl", GainesvilleServiceListCtrl);
        })(gainesvilleServiceList = products.gainesvilleServiceList || (products.gainesvilleServiceList = {}));
    })(products = app.products || (app.products = {}));
})(app || (app = {}));
