require('./app.less');

var React = require('react');
var ReactDOM = require('react-dom');

var DatePicker = require('../src/Datepicker').DatePicker;

//console.log(Calendarium);

//import {DatePicker} from '../src/DatePicker';

//ReactDOM.render(<DatePicker id={getUniqueIdentifier() }/>, document.getElementById('datepicker'));

var comp = React.createElement(DatePicker, { id: getUniqueIdentifier() });

ReactDOM.render(
    comp, 
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






// var Hello = React.createClass({
//   displayName: 'Hello',
//   render: function() {
//     return React.createElement("div", null, "Hello ", this.props.name);
//   }
// });


// ReactDOM.render(
//   React.createElement(Hello, {name: "World"}),
//   document.getElementById('datepicker')
// );




