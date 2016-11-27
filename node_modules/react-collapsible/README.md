# React Responsive Collapsible Section Component (Collapsible)

React component to wrap content in Collapsible element with trigger to open and close.

![Alt text](example/img/example.gif)

It's like an accordion, but where any number of sections can be open at the same time.

## New in version 1.2.0
* `overflowWhenOpen` props added to allow setting of the CSS overflow property when Collapsible is open.

### 1.1.0 Notes
* `lazyRender` props added to allow lazy-loading of Collapsible content.

### 1.0.0 Notes
* Trigger can now be a React Element as well as a string.


## Installation
Installation can be achieved via NPM.
```
npm install react-collapsible
```

Alternatively just download the `Collapsible.js` file form the `src` folder and include it in your project in your chosen way.

## Usage
Collapsible can receive any HTML elements or React component as it's children. Collapsible will wrap the contents, as well as generate a trigger element which will control showing and hiding.

### ES6
```javascript

import React from 'react';
import Collapsible from 'react-collapsible';

var App = React.createClass({

  render: function() {
    return(

      <Collapsible trigger="Start here">
        <p>This is the collapsible content. It can be any element or React component you like.</p>
        <p>It can even be another Collapsible component. Check out the next section!</p>
      </Collapsible>

    );
  }

});

export default App;
```

With a little CSS becomes

![Alt text](example/img/becomes.png)


## Properties *(Options)*

### `trigger` | *string* or *React Element* | **required**
The text or element to appear in the trigger link.

### `triggerWhenOpen` | *string* or *React Element*
Optional trigger text or element to change to when the Collapsible is open.

### `transitionTime` | *number* | default: 400
The number of milliseconds for the open/close transition to take.

### `easing` | *string* | default: 'liner'
The CSS easing method you wish to apply to the open/close transition. This string can be any valid value of CSS `transition-timing-function`. For reference view the [MDN documentation](https://developer.mozilla.org/en/docs/Web/CSS/transition-timing-function).

### `open` | *bool* | default: false
Set to true if you want the Collapsible to begin in the open state. You can also use this prop to manage the state from a parent component.

### `classParentString` | *string* | default: Collapsible
Use this to overwrite the parent CSS class for the Collapsible component parts. Read more in the CSS section below.

### `handleTriggerClick` | *function*
Define this to override the click handler for the trigger link.

### `lazyRender` | *bool* | default: false
Set this to true to postpone rendering of all of the content of the Collapsible until before it's opened for the first time

### `overflowWhenOpen` | *enum* | default: 'hidden'
The CSS overflow property once the Collapsible is open. This can be any one of the valid CSS values of `'hidden'`, `'visible'`, `'auto'`, `'scroll'`, `'inherit'`, `'initial'`, or `'unset'`

## CSS Styles
In theory you don't need any CSS to get this to work, but let's face it, it'd be pretty rubbish without it.

By default the parent CSS class name is `.Collapsible` but this can be changed by setting the `classParentString` property on the component.

The CSS class names follow a [type of BEM pattern](http://getbem.com/introduction/) of CSS naming. Below is a list of the CSS classes available on the component.  


### `.Collapsible`
The parent element for the components.

### `.Collapsible__trigger`
The trigger link that controls the opening and closing of the component.
The state of the component is also reflected on this element with the modifier classes;
- `is-closed` | Closed state
- `is-open` | Open setState

### `.Collapsible__contentOuter`
The outer container that hides the content. This is set to `overflow: hidden` within the javascript but everything else about it is for you to change.

### `.Collapsible__contentInner`
This is a container for the content passed into the compoenent. This keeps everything nice and neat and allows the component to do all it's whizzy calculations.


## Example
An example of the component in action is available in the example folder. To see it in action you can run `npm install` and then run `gulp`. This will compile all the JSX into JS and open the example page using BrowserSync.

## Licence
React Responsive Collapsible Section Component is [MIT licensed](LICENSE.md)
