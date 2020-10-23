export var Filter = function Filter(props) {
  return React.createElement(
    'div',
    { className: 'filter' },
    React.createElement(
      'ul',
      { className: 'nav nav-tabs' },
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          {
            className: 'filter-sve nav-link' + ' ' + (props.filter === 'sve' ? 'active' : ''),
            href: '#',
            onClick: props.useFilter },
          'Sve Salate'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          {
            className: 'filter-kremaste nav-link' + ' ' + (props.filter === 'kremasta' ? 'active' : ''),
            href: '#',
            onClick: props.useFilter },
          'Kremaste'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          {
            className: 'filter-lisnate nav-link' + ' ' + (props.filter === 'lisnata' ? 'active' : ''),
            href: '#',
            onClick: props.useFilter },
          'Lisnate'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          {
            className: 'filter-vegeterijanske nav-link' + ' ' + (props.filter === 'vegeterijanska' ? 'active' : ''),
            href: '#',
            onClick: props.useFilter },
          'Vegeterijanske'
        )
      ),
      React.createElement(
        'li',
        { className: 'nav-item' },
        React.createElement(
          'a',
          {
            className: 'filter-veganske nav-link' + ' ' + (props.filter === 'veganska' ? 'active' : ''),
            href: '#',
            onClick: props.useFilter },
          'Veganske'
        )
      )
    )
  );
};