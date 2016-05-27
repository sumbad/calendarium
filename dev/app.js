require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');

var DatePicker = require('../src/Datepicker').DatePicker;
// var DatePicker = require('../dist/calendarium').DatePicker;


//ReactDOM.render(<DatePicker id={getUniqueIdentifier() }/>, document.getElementById('datepicker'));
var myCDP1 = React.createElement(DatePicker, { id: getUniqueIdentifier() });

ReactDOM.render(
    myCDP1, 
    document.getElementById('datepicker')
);


/**
 * Get an unique identifier for datepicker, we can use any different id
 * 
 * @return string
 */
function getUniqueIdentifier() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};


