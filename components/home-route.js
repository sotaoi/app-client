"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeRoute = void 0;
const components_1 = require("@sotaoi/client/components");
const home_view_1 = require("@app/client/components/home-view");
class HomeRoute extends components_1.RouteCpComponent {
    display({ params }) {
        return this.extendedView(home_view_1.HomeView, {});
    }
}
exports.HomeRoute = HomeRoute;
