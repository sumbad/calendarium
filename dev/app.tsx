import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import * as Calendarium from '../dist/calendarium';
import '../dist/calendarium.css';
let Calendarium = require('../src/calendarium');
const ru = require('../dist/locale/ru.json');


Calendarium.DateUtilities.loadLocale(ru);

let DatePicker = Calendarium.DatePicker;

ReactDOM.render(<DatePicker id={getUniqueIdentifier() }/>, document.getElementById('datepicker'));


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


