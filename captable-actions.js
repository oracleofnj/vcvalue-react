import * as vcvc from './vcv-consts.js';

export function newRound(investmentAmount, valuation, preRadio, pariRadio) {
  return {
    type: vcvc.ACTION_ADD_FINANCING,
    newRound: {
      invAmt: 1e6 * parseInt(investmentAmount, 10),
      valuation: 1e6 * parseInt(valuation, 10),
      preMoney: preRadio === 'pre',
      pariPassu: pariRadio === 'pari',
    }
  };
}
