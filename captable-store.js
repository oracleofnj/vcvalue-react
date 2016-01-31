import * as vcvc from './vcv-consts.js';

let ctState;
let listeners = [];

function existingShares(state) {
  return state.reduce((a,b) => a + b.shareCount, 0);
}

function addRound(state, summary) {
  let res = {};
  res.invAmt = summary.invAmt;
  res.preMoney = summary.preMoney;
  res.prefType = summary.pariPassu ? vcvc.LPTYPE_PARI : vcvc.LPTYPE_STACKED;
  res.postMoneyValue = summary.valuation + (summary.preMoney ? summary.invAmt : 0);
  res.percentOwnership = res.invAmt / res.postMoneyValue;
  res.shareCount = res.percentOwnership * existingShares(state) / (1 - res.percentOwnership);
  res.prefPerShare = res.invAmt * summary.prefMultiple / res.shareCount;
  return [...state, res];
}

function reducer(state, action) {
  switch (action.type) {
    case vcvc.ACTION_INIT:
      return [{seriesName:"Common",shareCount:756000000}];
    case vcvc.ACTION_ADD_FINANCING:
      return addRound(state, action.newRound);
    default:
      return state;
  }
}

const getState = () => (ctState);
const dispatch = (action) => {
  ctState = reducer(ctState, action);
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
