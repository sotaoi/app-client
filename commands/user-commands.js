"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUserCommand = void 0;
const action_1 = require("@sotaoi/client/action");
const store_1 = require("@sotaoi/client/store");
const removeUserCommand = (uuid, role) => __awaiter(void 0, void 0, void 0, function* () {
    // return Action.remove(store().getAccessToken(), role, 'user', uuid);
    return action_1.Action.remove(store_1.store().getAccessToken(), role, 'user', uuid);
});
exports.removeUserCommand = removeUserCommand;
