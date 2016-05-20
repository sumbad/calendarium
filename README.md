# calendarium

**calendarium** is a [React](http://facebook.github.io/react/) component for a datetime picker or just a calendar on your page.

**Notice:** This is currently a 0.x version. What this actually means is that it works in our project but we're too busy to write tests to be sure that it'll work in your project, too.


## Install

### npm

```
npm install calendarium --save
```

### Browser bundle

The browser bundle exposes a global `Calendarium` variable and expects to find a global `React` (>= 0.14.0) variable to work with.

* [calendarium.js](https://npmcdn.com/calendarium@0.2.4) (compressed version)



## Usage

There are several approaches to use **calendarium**:

### with browser bundle

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="http://fb.me/react-0.14.0.js"></script>
    <script src="http://fb.me/react-dom-0.14.0.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://npmcdn.com/calendarium@0.2.4"></script>
</head>
<body>
    <div id="example"></div>
    <script type="text/babel">
    
      var DatePicker = Calendarium.DatePicker;
      
      ReactDOM.render(
        <DatePicker id={getUniqueIdentifier()}/>,
        document.getElementById('example')
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

    </script>
</body>
</html>
```


