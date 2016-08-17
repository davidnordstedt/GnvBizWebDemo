namespace app.products.productDetail {

    interface IProductDetailModel {
        title: string;
        product: app.domain.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetailModel {
        title: string;
        product: app.domain.IProduct;

        static $inject = ["dataAccessService", "$routeParams"];
        constructor(private dataAccessService: app.common.DataAccessService,
                    private $routeParams: IProductParams
                    ) {
            this.title = "Product Detail";

            console.log($routeParams);
            console.log("dataAccessService: " + dataAccessService);

            //var id = 1;
            var id = $routeParams.productId;
            var productResource = dataAccessService.getProductResource();
            productResource.get({productId: id}, (data: app.domain.IProduct) => {
                this.product = data;
            });
        }
    }

    angular
        .module("productManagement")
        .controller("ProductDetailCtrl",
                    ProductDetailCtrl);
}