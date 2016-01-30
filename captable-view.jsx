import React from 'react';
import * as vcvc from './vcv-consts.js';

var CapTableEntry = ({seriesName,
                      shareCount,
                      prefPerShare = NaN,
                      prefType = vcvc.LPTYPE_NONE,
                      invAmt = NaN,
                      postMoneyValue = NaN,
                      preMoney = NaN,
                      proceeds = NaN,
                      isConverted = vcvc.CONVERTED_UNDEF,
                      expectedValue = NaN,
                      evPerShare = NaN
                    }) => {
  return (
    <tr>
      <th>{seriesName}</th>
      <td>{shareCount}</td>
      <td>{prefType === vcvc.LPTYPE_NONE || isNaN(prefPerShare) ? '' : prefPerShare}</td>
      <td>{prefType}</td>
      <td>{isNaN(invAmt) ? 'N/A' : (invAmt / 1e6 + 'mm @ ' + (preMoney ? ((postMoneyValue - invAmt) / 1e6 + 'mm Pre') : postMoneyValue / 1e6 + 'mm Post'))}</td>
      <td>{isNaN(proceeds) ? 'N/A' : proceeds}</td>
      <td>{isConverted === vcvc.CONVERTED_UNDEF ? 'N/A' : isConverted ? 'True' : 'False'}</td>
      <td>{isNaN(expectedValue) ? 'N/A' : expectedValue}</td>
      <td>{isNaN(evPerShare) ? 'N/A' : evPerShare}</td>
    </tr>
  );
};

var CapTable = ({seriesList}) => (
  <table className="table">
      <thead>
          <tr>
              <th>Class</th>
              <th>Share Count</th>
              <th>LP/Share</th>
              <th>LP Type</th>
              <th>Deal Terms</th>
              <th>Proceeds</th>
              <th>Converted?</th>
              <th>Expected Value</th>
              <th>EV/Share</th>
          </tr>
      </thead>
      <tbody>
        {seriesList.map((entry, ix) => (
          <CapTableEntry
            key={ix}
            seriesName={entry.seriesName}
            shareCount={entry.shareCount}
            prefPerShare={entry.prefPerShare}
            prefType={entry.prefType}
            invAmt={entry.invAmt}
            postMoneyValue={entry.postMoneyValue}
            preMoney={entry.preMoney}
            proceeds={entry.proceeds}
            isConverted={entry.isConverted}
            expectedValue={entry.expectedValue}
            evPerShare={entry.evPerShare}
          />
        ))}
      </tbody>
  </table>
);

module.exports = {
  CapTable: CapTable,
}
