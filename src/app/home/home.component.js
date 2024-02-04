"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var housing_location_component_1 = require("../housing-location/housing-location.component");
var housing_service_1 = require("../housing.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        var _this = this;
        this.housingLocationList = [];
        this.housingService = (0, core_1.inject)(housing_service_1.HousingService);
        this.filteredLocationList = [];
        this.housingService.getAllHousingLocations().then(function (housingLocationList) {
            _this.housingLocationList = housingLocationList;
            _this.filteredLocationList = housingLocationList;
        });
    }
    HomeComponent.prototype.filterResults = function (text) {
        if (!text) {
            this.filteredLocationList = this.housingLocationList;
        }
        this.filteredLocationList = this.housingLocationList.filter(function (housingLocation) { return housingLocation === null || housingLocation === void 0 ? void 0 : housingLocation.city.toLowerCase().includes(text.toLowerCase()); });
    };
    HomeComponent = __decorate([
        (0, core_1.Component)({
            selector: "app-home",
            standalone: true,
            imports: [common_1.CommonModule, housing_location_component_1.HousingLocationComponent],
            template: "\n    <section>\n      <form>\n        <input type=\"text\" placeholder=\"Filter by city\" #filter>\n        <button class=\"primary\" type=\"button\" (click)=\"filterResults(filter.value)\">Search</button>\n      </form>\n    </section>\n    <section class=\"results\">\n      <app-housing-location *ngFor=\"let housingLocation of filteredLocationList\" [housingLocation]=\"housingLocation\"></app-housing-location>\n    </section>\n  ",
            styleUrl: "./home.component.css"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
