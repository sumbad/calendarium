# ![calendarium](https://cdn.rawgit.com/sumbad/calendarium/master/docs/images/main.PNG)


**calendarium** is a [React](http://facebook.github.io/react/) component for a datetime picker or just a calendar on your page.

**Notice:** From 0.3.3 version you have to explicitly import/connect the file dist/calendarium.css in your project.

**Notice:** This is currently a 0.x version. What this actually means is that it works in our project but we're too busy to write tests to be sure that it'll work in your project, too.


## Install

### npm

```
npm install calendarium --save
```

### browser bundle

The browser bundle exposes a global `Calendarium` variable and expects to find a global `React` (>= 0.14.0) variable to work with.

* [calendarium.js](https://npmcdn.com/calendarium) (compressed version)



## Usage

There are several approaches to use **calendarium**:

### browser bundle

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/calendarium.css"/>
    <script src="http://fb.me/react-0.14.0.js"></script>
    <script src="http://fb.me/react-dom-0.14.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://npmcdn.com/calendarium@0.2.7"></script>
</head>
<body>
    <div id="example"></div>
    <script type="text/babel">
    
      var DatePicker = Calendarium.DatePicker;
      
      ReactDOM.render(
        <DatePicker id="myCDP1"/>,
        document.getElementById('example')
      );
    </script>
</body>
</html>
```


### webpack + ES5 (withowt JSX)

```javascript    
var React = require('react');
var ReactDOM = require('react-dom');
require ('calendarium/dist/calendarium.css');

var DatePicker = require('calendarium').DatePicker;

var myCDP1 = React.createElement(DatePicker, { id: "myCDP1" });

ReactDOM.render(
    myCDP1, 
    document.getElementById('datepicker')
);
```


### webpack + ES2015 or TypeScript

```javascript    
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DatePicker} from 'calendarium';
import 'calendarium/dist/calendarium.css';


ReactDOM.render(<DatePicker id="myCDP1"/>, document.getElementById('datepicker'));
```



## Change language (now are English and Russian)

### browser bundle
You can just set new parameters with `Calendarium.DateUtilities.loadLocale` method:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="/calendarium.css"/>
    <script src="http://fb.me/react-0.14.0.js"></script>
    <script src="http://fb.me/react-dom-0.14.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://npmcdn.com/calendarium@0.2.7"></script>
</head>
<body>
    <div id="example"></div>
    <script type="text/babel">
          Calendarium.DateUtilities.loadLocale({
            "name": "ru",
            "format": "dd.MM.YYYY HH:mm",
            "close": "Закрыть",
            "now": "Сейчас",
            "months": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "week": [
                {"name":"Пн", "class":"weekday"},
                {"name":"Вт", "class":"weekday"},
                {"name":"Ср", "class":"weekday"},
                {"name":"Чт", "class":"weekday"},
                {"name":"Пт", "class":"weekday"},
                {"name":"Сб", "class":"weekend"},
                {"name":"Вс", "class":"weekend"}
            ]
        });
    
      var DatePicker = Calendarium.DatePicker;
      
      ReactDOM.render(
        <DatePicker id="myCDP1"/>,
        document.getElementById('example')
      );
    </script>
</body>
</html>
```


### webpack + ES2015 or TypeScript

```javascript    
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'calendarium/dist/calendarium.css';
import * as Calendarium from 'calendarium';
const ru = require('calendarium/dist/locale/ru.json');


Calendarium.DateUtilities.loadLocale(ru);

let DatePicker = Calendarium.DatePicker;

ReactDOM.render(<DatePicker id="myCDP1"/>, document.getElementById('datepicker'));
```