import { APP_UPGRADE_DOWNLOADED, SET_ACTIVE_NOTIF } from '../actions/notifs';

// Default state for this reducer
const defaultState = {
  visibility: {},
  activeNotif: null,
};

export default function fileLoader(state = defaultState, action) {
  switch (action.type) {
  case APP_UPGRADE_DOWNLOADED:
    return displayAppUpgradeNotif(state, action);
  case SET_ACTIVE_NOTIF:
    return setActiveNotif(state, action);
  default:
    return state;
  }
}

function displayAppUpgradeNotif(state) {
  const newState = { ...state };

  newState.visibility.appUpgrade = true;
  return newState;
}

function setActiveNotif(state, action) {
  const newState = { ...state };

  newState.activeNotif = action.payload.notif;
  return newState;
}
