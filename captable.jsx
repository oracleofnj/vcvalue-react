import React from 'react';
import ReactDOM from 'react-dom';

const CapTableEntry = ({seriesName, shareCount, prefPerShare=NaN}) => (
  <tr>
    <th>{seriesName}</th>
    <td>{shareCount}</td>
    <td>{isNaN(prefPerShare) ? '' : prefPerShare}</td>
  </tr>
);

$(document).ready(function() {
  ReactDOM.render(<CapTableEntry seriesName="Common" shareCount={36000000} />, document.getElementById('cap-table-root'));
});
