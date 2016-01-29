require('expose?$!expose?jQuery!jquery');
require('bootstrap-loader');
import React from 'react';
import ReactDOM from 'react-dom';
import * as captable from './captable.jsx';

$(document).ready(function() {
  ReactDOM.render(<captable.CapTable seriesList={[{seriesName:"Common",shareCount:36000000}]} />, document.getElementById('cap-table-root'));
});
