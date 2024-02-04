"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousingLocationComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var HousingLocationComponent = /** @class */ (function () {
    function HousingLocationComponent() {
    }
    __decorate([
        (0, core_1.Input)()
    ], HousingLocationComponent.prototype, "housingLocation", void 0);
    HousingLocationComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-housing-location',
            standalone: true,
            imports: [common_1.CommonModule, router_1.RouterModule],
            template: "\n    <section class=\"listing\">\n      <img class=\"listing-photo\" [src]=\"housingLocation.photo\" alt=\"Exterior photo of {{housingLocation.name}}\">\n      <h2 class=\"listing-heading\">{{ housingLocation.name }}</h2>\n      <p class=\"listing-location\">{{ housingLocation.city }}, {{housingLocation.state }}</p>\n      <a [routerLink]=\"['/details', housingLocation.id]\">Learn More</a>\n    </section>\n  ",
            styleUrl: './housing-location.component.css'
        })
    ], HousingLocationComponent);
    return HousingLocationComponent;
}());
exports.HousingLocationComponent = HousingLocationComponent;
