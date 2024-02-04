"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var details_component_1 = require("./details/details.component");
var routeConfig = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        data: { title: 'Home Page' }
    },
    {
        path: 'details/:id',
        component: details_component_1.DetailsComponent,
        data: { title: 'Details Page' }
    }
];
exports.default = routeConfig;
