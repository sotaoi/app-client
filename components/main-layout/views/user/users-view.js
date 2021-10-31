"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersView = void 0;
const react_1 = __importDefault(require("react"));
const router_1 = require("@sotaoi/client/router");
const components_1 = require("@sotaoi/client/components");
const artifacts_1 = require("@sotaoi/omni/artifacts");
const user_queries_1 = require("@app/client/queries/user-queries");
class UsersView extends components_1.ViewComponent {
    promises() {
        return {
            users: user_queries_1.getAllUsersQuery(),
        };
    }
    web({ results, props }) {
        const users = results.users.records;
        const userList = users.map((user) => ({
            record: user,
            ref: new artifacts_1.RecordRef('user', user.uuid),
        }));
        return (react_1.default.createElement("section", null,
            react_1.default.createElement("h3", null, "Users displayed here"),
            userList.map((user) => {
                return (react_1.default.createElement(router_1.Link, { key: user.record.uuid, to: `/user/view/${user.record.uuid}` },
                    react_1.default.createElement("section", { style: { margin: '30px' } },
                        react_1.default.createElement("p", null,
                            "uuid: ",
                            user.record.uuid),
                        "email: ",
                        user.record.email)));
            })));
    }
    mobile() {
        return null;
    }
    electron() {
        return null;
    }
}
exports.UsersView = UsersView;
