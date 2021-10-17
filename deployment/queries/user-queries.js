"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.getAllUsersQuery = void 0;
const action_1 = require("@sotaoi/client/action");
// import { RequestAbortHandler } from '@sotaoi/client/components';
const store_1 = require("@sotaoi/client/store");
const getAllUsersQuery = () => {
    // return (props: { [key: string]: any }, requestAbortHandler: RequestAbortHandler): Promise<QueryResult> =>
    return (props, requestAbortHandler) => action_1.Action.flistQuery(store_1.store().getAccessToken(), null, 'user', 'get-all', null, null, requestAbortHandler);
};
exports.getAllUsersQuery = getAllUsersQuery;
const getUser = () => {
    // return (props: { [key: string]: any }, requestAbortHandler: RequestAbortHandler): Promise<RetrieveResult> =>
    return (props, requestAbortHandler) => action_1.Action.retrieve(store_1.store().getAccessToken(), 'public', 'user', props.uuid, null, requestAbortHandler);
};
exports.getUser = getUser;
