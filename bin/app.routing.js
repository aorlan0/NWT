"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./components/user.component");
var about_component_1 = require("./components/about.component");
var PageNotFound_1 = require("./components/PageNotFound");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'home',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '**',
        component: PageNotFound_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map