import * as vcvc from './vcv-consts.js';

let appState;
let listeners = [];

function fullRoundDetails(summary) {
  let res = {};
  res.invAmt = summary.invAmt;
  res.preMoney = summary.preMoney;
  res.pariPassu = summary.pariPassu;
  res.postMoneyValue = summary.valuation + (summary.preMoney ? summary.invAmt : 0);
  res.percentOwnership = res.invAmt / res.postMoneyValue;
  return res;
}

function reducer(state, action) {
  switch (action.type) {
    case vcvc.ACTION_INIT:
      return [{seriesName:"Common",shareCount:36000000}];
    case vcvc.ACTION_ADD_FINANCING:
      return [...state, fullRoundDetails(action.newRound)];
    default:
      return state;
  }
}

const getState = () => (appState);
const dispatch = (action) => {
  appState = reducer(appState, action);
  listeners.forEach(listener => listener());
};
const subscribe = (listener) => {
  listeners.push(listener);
};

dispatch({type: vcvc.ACTION_INIT});

module.exports = {
  getState: getState,
  dispatch: dispatch,
  subscribe: subscribe,
}
