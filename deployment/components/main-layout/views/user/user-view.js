"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserView = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("@sotaoi/client/components");
const user_queries_1 = require("@app/client/queries/user-queries");
const router_1 = require("@sotaoi/client/router");
const artifacts_1 = require("@sotaoi/omni/artifacts");
class UserView extends components_1.ViewComponent {
    promises(props) {
        props.uuid && this.refresh('user', new artifacts_1.RecordRef('user', props.uuid), '/user/list/all');
        return {
            user: user_queries_1.getUser(),
        };
    }
    web({ results, props }) {
        const user = results.user.record;
        const avatar = this.asset(user.avatar);
        const background = this.assets(user.gallery);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("main", { className: 'profile-page' },
                react_1.default.createElement("section", { className: 'relative block', style: { height: '500px' } },
                    react_1.default.createElement("div", { className: 'absolute top-0 w-full h-full max-h-50 bg-center bg-cover', style: {
                            backgroundImage: `url(${background})`,
                        } },
                        react_1.default.createElement("span", { id: 'blackOverlay', className: 'w-full h-full absolute opacity-20 bg-black' }))),
                react_1.default.createElement("section", { className: 'relative py-16 bg-gray-300' },
                    react_1.default.createElement("div", { className: 'container mx-auto px-4' },
                        react_1.default.createElement("div", { className: 'relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64' },
                            react_1.default.createElement("div", { className: 'px-4' },
                                react_1.default.createElement("div", { className: 'flex flex-wrap justify-center' },
                                    react_1.default.createElement("div", { className: 'w-full lg:w-12/12 px-4 lg:order-7 flex justify-center' },
                                        react_1.default.createElement("div", { className: 'relative' }, avatar && (react_1.default.createElement("img", { alt: '...', src: `${avatar}`, className: 'shadow-xl rounded-full h-auto w-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16', style: { maxWidth: '150px' } })))),
                                    react_1.default.createElement("div", { className: 'w-full lg:w-10/12 px-4 lg:order-3 lg:text-right lg:self-center' })),
                                react_1.default.createElement("div", { className: 'text-center mt-12' },
                                    react_1.default.createElement("br", null),
                                    react_1.default.createElement(router_1.Link, { to: `/user/edit/${user.uuid}` },
                                        react_1.default.createElement("button", { type: 'button', className: 'bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded', style: { marginBottom: 20, marginTop: 20 } }, "Update")),
                                    react_1.default.createElement("br", null),
                                    react_1.default.createElement("h3", { className: 'text-4xl font-semibold leading-normal mb-6 text-gray-800' }, user.email),
                                    react_1.default.createElement("div", { className: 'text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase' },
                                        react_1.default.createElement("i", { className: 'fas fa-map-marker-alt mr-2 text-lg text-gray-500' }),
                                        "Current city"),
                                    react_1.default.createElement("div", { className: 'mb-2 text-gray-700 mt-10' },
                                        react_1.default.createElement("i", { className: 'fas fa-briefcase mr-2 text-lg text-gray-500' }),
                                        "user"),
                                    react_1.default.createElement("div", { className: 'mb-2 text-gray-700' },
                                        react_1.default.createElement("i", { className: 'fas fa-university mr-2 text-lg text-gray-500' }),
                                        "Working at")),
                                react_1.default.createElement("div", { className: 'mt-10 py-10 border-t border-gray-300 text-center' },
                                    react_1.default.createElement("div", { className: 'flex flex-wrap justify-center' },
                                        react_1.default.createElement("div", { className: 'w-full lg:w-9/12 px-4' },
                                            react_1.default.createElement("p", { className: 'mb-4 text-lg leading-relaxed text-gray-800' }, "Bio Section"),
                                            react_1.default.createElement("a", { className: 'font-normal text-pink-500', onClick: (e) => e.preventDefault() }, "Show more")))))))))));
    }
    mobile() {
        return null;
    }
    electron() {
        return null;
    }
}
exports.UserView = UserView;
