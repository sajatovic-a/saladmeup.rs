export var Salata = function Salata(props) {
  return React.createElement(
    'div',
    { className: 'row portfolio-item' },
    React.createElement(
      'div',
      { className: 'col-md-7 custom-salad-text' },
      React.createElement(
        'h3',
        null,
        props.ime
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'span',
          null,
          props.sastav,
          React.createElement('br', null),
          props.dresing
        )
      ),
      React.createElement('p', null),
      React.createElement(
        'p',
        null,
        props.kalorije
      ),
      React.createElement(
        'p',
        null,
        'Cena: ',
        React.createElement(
          'span',
          null,
          props.cena
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'col-md-5' },
      React.createElement('img', {
        className: 'img-fluid rounded mb-3 mb-md-0',
        src: props.img ? props.img : 'http://placehold.it/500x300',
        alt: props.altImg
      })
    ),
    props.hr ? React.createElement('hr', null) : null
  );
};