# Toggle Switchy
[![Maintained](https://img.shields.io/maintenance/yes/2021?style=for-the-badge)](https://github.com/adamculpepper)
[![Size](https://img.shields.io/github/size/adamculpepper/toggle-switchy/toggle-switchy.css?label=Size&style=for-the-badge)](https://github.com/adamculpepper/toggle-switchy/master/toggle-switchy.css)
[![Stars](https://img.shields.io/github/stars/adamculpepper/toggle-switchy?style=for-the-badge)](https://github.com/adamculpepper/toggle-switchy/stargazers)
[![Issues](https://img.shields.io/github/issues/adamculpepper/toggle-switchy?style=for-the-badge)](https://github.com/adamculpepper/toggle-switchy/issues)
[![License](https://img.shields.io/github/license/adamculpepper/toggle-switchy?style=for-the-badge)](https://github.com/adamculpepper/toggle-switchy/blob/master/LICENSE)

A pure CSS toggle switch for form input checkboxes

## Preview
<img src="http://adamculpepper.net/repos/preview-toggle-switchy-github.png">

## Installation

### CSS
```<link rel="stylesheet" href="toggle-switchy.css">```

### HTML
```
<label for="ID_HERE" class="toggle-switchy">
	<input checked type="checkbox" id="ID_HERE">
	<span class="toggle">
		<span class="switch"></span>
	</span>
</label>
```

## Options

| Option | Data Attribute |
| ------ | ------ |
| Rounded | `data-style="rounded"`
| Square | `data-style="square"`
| No Text | `data-text="false"`
| Disabled | add the `disabled` attribute to the input tag
| Checked | add the `checked` attribute to the input tag
| Sizes | `data-size="xl"`<br>`data-size="lg"`<br>medium (default)<br>`data-size="sm"`<br>`data-size="xs"`
| Colors | `data-color="red"`<br>`data-color="orange"`<br>`data-color="yellow"`<br>`data-color="green"`<br>`data-color="blue"`<br>`data-color="purple"`<br>`data-color="gray"`
| Labels | `data-label="left"`<br>label on right (default)<br>

## Features
* CSS only - no JavaScript!
* No dependencies
* Fully reponsive
* Fully customizable
* Fully self contained
* 7 color schemes
* Labels on the left and the right
* Keyboard Accessible - accessibility (a11y)
* Focus Styles - accessibility (a11y)
* Supports all modern browsers
* Search engine friendly
* Screen reader friendly
* Doesn't dump a bunch of global styles that'll screw with your other CSS

## TODO
* Add in error checking to make sure the input element is a checkbox - `input[type='checkbox']`
* Better a11y (accessibility) support
* Add `tabindex="0"` to the demo for keyboard accessibility instructions

## Known Issues
* IE10 and below doesn't support the smooth slide

#### See also [Toggle Radios](https://github.com/adamculpepper/toggle-radios) - A CSS only toggle switch for form input checkboxes (not Bootstrap dependent)
