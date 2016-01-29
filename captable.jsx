import React from 'react';

const LPTYPE_NONE = 'None'
const LPTYPE_PARI = 'Pari Passu'
const LPTYPE_STACKED = 'Stacked'

const CONVERTED_UNDEF = 'N/A'

var CapTableEntry = ({seriesName,
                      shareCount,
                      prefPerShare = NaN,
                      prefType = LPTYPE_NONE,
                      dealTerms = '',
                      proceeds = NaN,
                      isConverted = CONVERTED_UNDEF,
                      expectedValue = NaN,
                      evPerShare = NaN
                      }) => (
  <tr>
    <th>{seriesName}</th>
    <td>{shareCount}</td>
    <td>{prefType === LPTYPE_NONE || isNaN(prefPerShare) ? '' : prefPerShare}</td>
    <td>{prefType}</td>
    <td>{dealTerms}</td>
    <td>{isNaN(proceeds) ? 'N/A' : proceeds}</td>
    <td>{isConverted === CONVERTED_UNDEF ? 'N/A' : isConverted ? 'True' : 'False'}</td>
    <td>{isNaN(expectedValue) ? 'N/A' : expectedValue}</td>
    <td>{isNaN(evPerShare) ? 'N/A' : evPerShare}</td>
  </tr>
);

var CapTable = ({seriesList}) => {
  var capTableEntries = seriesList.map((entry) => (
    <CapTableEntry
      seriesName={entry.seriesName}
      shareCount={entry.shareCount}
      prefPerShare={entry.prefPerShare}
      prefType={entry.prefType}
      dealTerms={entry.dealTerms}
      proceeds={entry.proceeds}
      isConverted={entry.isConverted}
      expectedValue={entry.expectedValue}
      evPerShare={entry.evPerShare}
    />
  ));
  return (
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
          {capTableEntries}
        </tbody>
    </table>
  );
};

module.exports = {
  CapTable: CapTable,
  CapTableEntry: CapTableEntry,
}
