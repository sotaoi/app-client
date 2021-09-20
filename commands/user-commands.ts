import { ActionConclusion } from '@sotaoi/omni/transactions';
import { Action } from '@sotaoi/client/action';
import { store } from '@sotaoi/client/store';

const removeUserCommand = async (uuid: string, role: null | string): Promise<ActionConclusion> => {
  return Action.remove(store().getAccessToken(), role, 'user', uuid);
};

export { removeUserCommand };
