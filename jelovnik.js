var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { Salata } from '/salata.js';
import { Filter } from '/filter.js';
import { salate } from '/data.js';

var Jelovnik = function Jelovnik() {
  var _React$useState = React.useState('sve'),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filter = _React$useState2[0],
      setFilter = _React$useState2[1];

  var saladList = null;
  var useFilter = function useFilter(e) {
    e.preventDefault();
    var target = e.target;
    if (target.classList.contains('filter-kremaste')) {
      setFilter('kremasta');
    } else if (target.classList.contains('filter-lisnate')) {
      setFilter('lisnata');
    } else if (target.classList.contains('filter-vegeterijanske')) {
      setFilter('vegeterijanska');
    } else if (target.classList.contains('filter-veganske')) {
      setFilter('veganska');
    } else {
      setFilter('sve');
    }
  };

  if (filter === 'sve') {
    saladList = salate.map(function (salata, index) {
      return React.createElement(Salata, {
        key: salata.id,
        ime: salata.ime,
        sastav: salata.sastav,
        dresing: salata.dresing,
        kalorije: salata.kalorije,
        cena: salata.cena,
        img: salata.img,
        altImg: salata.altImg,
        hr: salate.length - (index + 1)
      });
    });
  } else {
    var filteredList = salate.filter(function (salata) {
      return salata.filter.includes(filter);
    });
    saladList = filteredList.map(function (salata, index) {
      return React.createElement(Salata, {
        key: salata.id,
        ime: salata.ime,
        sastav: salata.sastav,
        dresing: salata.dresing,
        kalorije: salata.kalorije,
        cena: salata.cena,
        img: salata.img,
        altImg: salata.altImg,
        hr: filteredList.length - (index + 1)
      });
    });
  }

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { className: 'my-4' },
      'Jelovnik'
    ),
    React.createElement(Filter, { useFilter: useFilter, filter: filter }),
    saladList
  );
};

var e = React.createElement;
var domContainer = document.querySelector('#jelovnik');
ReactDOM.render(e(Jelovnik), domContainer);