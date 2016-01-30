require('expose?$!expose?jQuery!jquery');
require('bootstrap-loader');
import React from 'react';
import ReactDOM from 'react-dom';
import * as vcvc from './vcv-consts.js';
import * as capTableView from './captable-view.jsx';
import * as capTableStore from './captable-store.js';
import * as capTableActions from './captable-actions.js';

function render() {
  ReactDOM.render(<capTableView.CapTable seriesList={capTableStore.getState()} />, document.getElementById('cap-table-root'));
  console.log(capTableStore.getState());
};

function addFinancing(e) {
  capTableStore.dispatch(capTableActions.newRound(
    $('#investment-amount').val(),
    $('#valuation').val(),
    $('#financing-form input[name=pre-or-post]:checked').val(),
    $('#financing-form input[name=liquidation-preference-type]:checked').val()
  ));
  e.preventDefault();
}

capTableStore.subscribe(render);

$(document).ready(function() {
  $('#financing-form').submit(addFinancing);
  render();
});
