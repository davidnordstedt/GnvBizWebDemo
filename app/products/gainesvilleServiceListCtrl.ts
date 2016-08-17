/// <reference path="../../app/app.ts" />
namespace app.products.gainesvilleServiceList {

    interface IGainesvilleServiceListModel {
        title: string;
        showImage: boolean;
        categories: string[];
        AllServices: app.domain.IGainesvilleService[];
        services: app.domain.IGainesvilleService[];
        toggleImage(): void;
        selectCategory(category: string): void;
    }

    class GainesvilleServiceListCtrl implements IGainesvilleServiceListModel {
        title: string;
        showImage: boolean;
        categories: string[];
        AllServices: app.domain.IGainesvilleService[];
        services: domain.IGainesvilleService[];

        static $inject = ["dataAccessService"];
        static $inject2 = ["_"];
        constructor(private dataAccessService: app.common.DataAccessService){
            this.title = "Services List";
            this.showImage = false;
            this.services = [];
            this.categories = [];

            var servicesResource = dataAccessService.getGainesvilleServices();
            servicesResource.query((data: app.domain.IGainesvilleService[]) => {
                this.AllServices = data;
                 //var _ = new lodash();//('lodash');
                 this.categories = _.uniq(_.map(this.AllServices, function(c) { return c.business_category; }));
                 this.categories.push('All');
                 console.log(this.categories);
                 //_.keys(services, 'business_category');
            });
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }

        selectCategory(category: string) {
            this.services = _.filter(this.AllServices, function(service) {
                if(category == 'All')
                    return true;
                else
                    return service.business_category == category;
            }) 
        }
    } 
angular
    .module("productManagement")
    .controller("GainesvilleServiceListCtrl",
        GainesvilleServiceListCtrl);

}

