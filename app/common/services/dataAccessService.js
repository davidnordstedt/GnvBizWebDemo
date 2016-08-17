var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            DataAccessService.prototype.getGainesvilleServices = function () {
                // return this.$resource("http://data.cityofgainesville.org/resource/pp75-zh6w.json");
                return this.$resource('http://data.cityofgainesville.org/resource/pp75-zh6w.json');
                //return this.$resource("/api/gainesvilleServices");
            };
            DataAccessService.$inject = ["$resource"];
            return DataAccessService;
        })();
        common.DataAccessService = DataAccessService;
        angular
            .module("common.services")
            .service("dataAccessService", DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
