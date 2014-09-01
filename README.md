# jQuery asProgress
A jQuery plugin that animate the progress bar.

## Usage

Import this libraries:
* jQuery
* jquery-asProgress.js

And CSS:
* progress.css 

Create base html element:
```html
    <div class="progress" role="progressbar" data-goal="100" aria-valuemin="0" data-step="2" aria-valuemax="100">
        <div class="progress__meter"><span class="progress__label"></span></div>
    </div>
```

Initialize progress:
```javascript
$(".progress").asProgress({
    namespace: 'progress'
});
```

## Settings

```javascript
{
    namespace: 'asProgress',
    min: 0,
    max: 100,
    goal: 100,
    step: 1,
    speed: 50, // refresh speed
    delay: 300,
    label: function(n) {
        var percentage = this.getPercentage(n);
        return percentage;
    },
    onStart: function(){},
    onStop: function(){},
    onUpdate: function(){},
    onReset: function(){}
}
```

## Public methods

jquery asProgress has different methods , we can use it as below :
```javascript
$(".progress").asProgress("start");
$(".progress").asProgress("stop");
$(".progress").asProgress("done");
$(".progress").asProgress("go", 50);
$(".progress").asProgress("go", '50%');
$(".progress").asProgress("reset");
```
## Event

* <code>asProgress::start</code>
* <code>asProgress::stop</code>
* <code>asProgress::done</code>
* <code>asProgress::update</code>
* <code>asProgress::reset</code>

## Author
[amazingSurge](http://amazingSurge.com)

## License
jQuery-asProgress plugin is released under the <a href="https://github.com/amazingSurge/jquery-asProgress/blob/master/LICENCE.GPL" target="_blank">GPL licence</a>.