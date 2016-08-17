namespace app.common {
    interface IDataAccessService {
        getProductResource() : ng.resource.IResourceClass<IProductResource>;
        getGainesvilleServices() : ng.resource.IResourceClass<IProductResource>;
    }

    interface IProductResource extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService 
        implements IDataAccessService {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        public getProductResource() : ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }

        public getGainesvilleServices() : ng.resource.IResourceClass<IProductResource> {
            // return this.$resource("http://data.cityofgainesville.org/resource/pp75-zh6w.json");
            return this.$resource('http://data.cityofgainesville.org/resource/pp75-zh6w.json');
            //return this.$resource("/api/gainesvilleServices");
        }
    }

    angular
        .module("common.services")
        .service("dataAccessService",
        DataAccessService);
}