# jQuery asTabs

The powerful jQuery plugin that creates a tab. <a href="http://amazingsurge.github.io/jquery-asTabs/">Project page and demos</a><br />
Download: <a href="https://github.com/amazingSurge/jquery-asTabs/archive/master.zip">jquery-asTabs-master.zip</a>

***

## Features

* **History support** — asTabs can handle browser's back and forward buttons
* **AJAXed asTabs support** — ajax load content support
* **Keyboard navigation support** — use `Arrow left/right` to navigate
* **Lightweight size** — 1 kb gzipped

## Dependencies
* <a href="http://jquery.com/" target="_blank">jQuery 1.83+</a>

## Usage

Import this libraries:
* jQuery
* jquery-asTabs.min.js

And CSS:
* jquery-asTabs.css - desirable if you have not yet connected one


Create base html element:
```html
<ul class="demo asTabs">
    <li>tab1</li>
    <li>tab2</li>
    <li>tab3</li>
</ul>
<div class="panes">
    <div>panes</div>
    <div>panle2</div>
    <div>panle3</div>
</div>
```

Initialize asTabs:
```javascript
$(".demo").asTabs({panes: '.panes'});
```

Or initialize asTabs with custom settings:
```javascript
$(".demo").asTabs({
        namespace: 'asTabs',  // namespace for css class
        panes: '.panes',
        skin: null,         // set custom skin
        initialIndex: 0,    // set initial index when first open
        effect: 'fade',     // set transition effect
        ajax: false,        // open ajax load function
        cached: false,      // if true, cach ajax load content after first loaded
        history: false,     // open history state function
        keyboard: false,    // keyboard navigation
        event: 'click'      // change index use 'click' or 'mouseover'
});
```

the most important thing is you should set panes value to let plugin find his panes content




## Settings

<table>
    <thead>
        <tr>
            <th>Property</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>panes</td>
            <td>'.panes'</td>
            <td>compulsory property, specify the content to asTabs</td>
        </tr>
        <tr>
            <td>namespace</td>
            <td>"asTabs"</td>
            <td>Optional property, set a namspace for css class, for example, we have <code>.asTabs_active</code> class for active effect, if namespace set to 'as-asTabs', then it will be <code>.as-asTabs_active</code></td>
        </tr>
        <tr>
            <td>skin</td>
            <td>null</td>
            <td>Optional property, set transition effect, it works after you load   specified skin file</td>
        </tr>
        <tr>
            <td>initialIndex</td>
            <td>0</td>
            <td>Optional property, set initial index when asTabs initilize</td>
        </tr>
        <tr>
            <td>effect</td>
            <td>'none'</td>
            <td>Optional property, set transition effect, you can use <code>'fade'</code>, more effects are coming</td>
        </tr>
        <tr>
            <td>ajax</td>
            <td>false</td>
            <td>Optional property, if true, it will load content with ajax, the url attached in tab list element's <code>data-href</code> </td>
        </tr>
        <tr>
            <td>cached</td>
            <td>false</td>
            <td>Optional property, it works only when ajax is set to true, if true, asTabs will cach loaded content</td>
        </tr>
        <tr>
            <td>history</td>
            <td>false</td>
            <td>Optional property, if true, use history state function</td>
        </tr>
        <tr>
            <td>keyboard</td>
            <td>false</td>
            <td>Optional property, if true , open keyboard navigation function</td>
        </tr>
        <tr>
            <td>event</td>
            <td>'click'</td>
            <td>Optional property, the way to active asTabs index, optioal 'mouseover'</td>
        </tr>  
        <tr>
            <td>onInit</td>
            <td>null</td>
            <td>Optional property, callback, call when asTabs is initilized</td>
        </tr> 
        <tr>
            <td>onActive</td>
            <td>null</td>
            <td>Optional property, callback, call when tab is actived</td>
        </tr> 
        <tr>
            <td>onAfterAcitve</td>
            <td>null</td>
            <td>Optional property, callback, call after tab is actived</td>
        </tr>   
    </tbody>
</table>

## Public methods

jquery asTabs has different methods , we can use it as below :
```javascript
// active index
$(".demo").asTabs("active", index);

// get all asTabs element
$(".demo").asTabs("getasTabs");

// get all panes element
$(".demo").asTabs("getPanes");

// get current index, start from 0
$(".demo").asTabs("getIndex");

// get current pane element
$(".demo").asTabs("getCurrentPane");

// get current tab elemnt
$(".demo").asTabs("getCurrentTab");

// goto the next tab, the last will goto the first
$(".demo").asTabs("next");

// goto the prevous tab, the first will goto the last
$(".demo").asTabs("prev");

// remove asTabs Dom element and unbound all events
$(".demo").asTabs("destroy");
```

## Event / Callback

* <code>asTabs::init</code>: trigger when asTabs initilize
* <code>asTabs::active</code>: trigger when asTabs is selected
* <code>asTabs::afterActive</code>:  trigger after acitve

how to use event:
```javascript
$(document).on('asTabs::init', function(event,instance) {
    // instance means current asTabs instance 
    // some stuff
});
```

## Browser support
jquery-asTabs is verified to work in Internet Explorer 7+, Firefox 2+, Opera 9+, Google Chrome and Safari browsers. Should also work in many others.

Mobile browsers (like Opera mini, Chrome mobile, Safari mobile, Android browser and others) is coming soon.

## Changes

| Version | Notes                                                            |
|---------|------------------------------------------------------------------|
|   0.2.x | ([compare][compare-1.2]) add history function                    |
|   0.1.x | ([compare][compare-1.1]) add keyboard function                   |
|     ... | ...                                                              |

[compare-1.2]: https://github.com/amazingSurge/jquery-asTabs/compare/v1.2.0...v1.3.0
[compare-1.1]: https://github.com/amazingSurge/jquery-asTabs/compare/v1.1.0...v1.2.0

## Author
[amazingSurge](http://amazingSurge.com)

## License
jQuery-asTabs plugin is released under the <a href="https://github.com/amazingSurge/jquery-asTabs/blob/master/LICENCE.GPL" target="_blank">GPL licence</a>.


