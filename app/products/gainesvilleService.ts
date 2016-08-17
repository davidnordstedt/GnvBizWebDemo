/// <reference path="../../app/app.ts" />
namespace app.domain {

    export interface IGainesvilleService {
        building_commercial: string;
        development_plan_review: string;
        special_event: string;
        sign: string;
        wastewater_grease_sand_oil_and_lint_interceptor: string;
        occupational_license_taxes: string;
        fire_alarm_permit: string;
        site_plan: string;
        tree_removal_commercial: string;
        fire_alarm_system: string;
        water_ww_construction: string;
        change_of_use: string;
        promotional_event: string;
        business_category: string;
        business_occupational_license: string;
        zoning_verification_and_compliance: string;
        alcoholic_beverageuse_consumption: string;
        electrical: string;
        awning: string;
        plumbing: string;
        industrial_user_wastewater_discharge: string;
        overhead_banner : string;
        paving: string;
        fence_wall: string;
        pods_used_by_commercialparcel_service: string;
        tent: string;
        burglar_alarm_systems_permits_renewals: string;
        business_type: string;
        mechanical_heating_air_conditioning_refrigerationair_conditioning_harv: string;
        right_of_wayuse:  string;
        bottle_club: string;
        uf_context_area_commercial_parking_decal: string;
        seasonal_sales: string;
        fuel_tank_installation: string;
        sales_and_use_tax_permits: string;
        fire_sprinkler: string;
        reconstruction_of_driveway_curb_gutter_and_sidewalk: string;
        driveway_commercial: string;
    }

    export class GainesvilleService implements IGainesvilleService {

        constructor(public building_commercial : string,
                    public development_plan_review : string,
                    public special_event : string,
                    public sign : string,
                    public wastewater_grease_sand_oil_and_lint_interceptor : string,
                    public occupational_license_taxes : string,
                    public fire_alarm_permit : string,
                    public site_plan : string,
                    public tree_removal_commercial : string,
                    public fire_alarm_system : string,
                    public water_ww_construction : string,
                    public change_of_use : string,
                    public promotional_event : string,
                    public business_category : string,
                    public business_occupational_license : string,
                    public zoning_verification_and_compliance : string,
                    public alcoholic_beverageuse_consumption : string,
                    public electrical : string,
                    public awning : string,
                    public plumbing : string,
                    public industrial_user_wastewater_discharge : string,
                    public overhead_banner : string,
                    public paving : string,
                    public fence_wall : string,
                    public pods_used_by_commercialparcel_service : string,
                    public tent : string,
                    public burglar_alarm_systems_permits_renewals : string,
                    public business_type : string,
                    public mechanical_heating_air_conditioning_refrigerationair_conditioning_harv : string,
                    public right_of_wayuse : string,
                    public bottle_club : string,
                    public uf_context_area_commercial_parking_decal : string,
                    public seasonal_sales : string,
                    public fuel_tank_installation : string,
                    public sales_and_use_tax_permits : string,
                    public fire_sprinkler : string,
                    public reconstruction_of_driveway_curb_gutter_and_sidewalk : string,
                    public driveway_commercial : string
                    ) {
                    }
       
    }
}