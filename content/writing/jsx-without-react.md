---
title: Using JSX without React
description: JSX gives us a great way to handle HTML-based templating in JavaScript. Let's see how we can use it without react.
date: 1595698179601
---

I'm personally a big fan of JSX & love the way it allows me to split up & componentize my code. Even though JSX had been around before React, it wouldn't have been nearly as popular without React picking it up. However we can actually use JSX without React & it's not that difficult either.

The way React works is by configuring your bundler to convert JSX into calls to a createElement function. So for example:

```jsx
const foo = (
	<div className="cool">
		<p>Hello there!</p>
	</div>
)

// Would become this:
React.createElement(
	'div',
	{ className: 'cool' },
	React.createElement('p', null, 'Hello there!')
)
```

However most bundlers allow you to choose your own JSX pragma (function that will be in the place of `React.createElement`). For example if you were using Babel you could specify what function to use through a simple comment like this:

```jsx
/** @jsx myJsxFunction */

const foo = (
	<div className="cool">
		<p>Hello there!</p>
	</div>
)
```

And now babel would pass those some parameters to `myJsxFunction`. Now all we need to do is create a function that takes these parameters & created real DOM nodes which we can add to our DOM. So let's get started. (If you need a code sandbox to play around you can use [this static template using standalone babel](https://codesandbox.io/s/jsx-in-the-browser-qd2hq))

DOM nodes are created using the `document.createNode()` function & it requires just a tagname so a good place to start would be with that:

```jsx
export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)
	return element
}
```

Now that we have a DOM node we have to actually add the attributes provided to us. These can be anything like `class` or `style`. So we'll just loop through all the provided attributes (using `Object.entries` and just set them on our DOM node:

```jsx
export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		element.setAttribute(name, value.toString())
	})

	return element
}
```

This approach has one issue though. How do we handle events, for example if I have this JSX:

```jsx
const SayHello = (
	<div>
		<button onClick={() => console.log('hello there!')}>Say Hello</button>
	</div>
)
```

Our function would set onClick as a normal attribute with the callback as actual text. Instead what we can do is check if our attribute starts with 'on' & is in the window scope. This will tell us if it's an event or not. For example `onclick` is in the window scope however `onfoo` is not. If it is then we can register an event listener on that node using the part of the name without the 'on'.

This is how it looks:

```jsx
export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	return element
}
```

Nice! Now all that's left to do is add all the children to the parent. However you can't append a string to a DOM node so in case the child is not also a node we can create a text node & append that instead:

```jsx
export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	children.forEach((child) => {
		element.appendChild(
			child.nodeType === undefined
				? document.createTextNode(child.toString())
				: child
		)
	})

	return element
}
```

However this quickly runs into issues with deeply nested elements & also elements that are created using array maps. So instead let's replace that part with aa recursive `appendChild` method:

```jsx
const appendChild = (parent, child) => {
	if (Array.isArray(child))
		child.forEach((nestedChild) => appendChild(parent, nestedChild))
	else
		parent.appendChild(
			child.nodeType ? child : document.createTextNode(child)
		)
}
```

And now we can use this in place of our old method:

```jsx
export const createElement = (tag, props, ...children) => {
	const element = document.createElement(tag)

	Object.entries(props || {}).forEach(([name, value]) => {
		if (name.startsWith('on') && name.toLowerCase() in window)
			element.addEventListener(name.toLowerCase().substr(2), value)
		else element.setAttribute(name, value.toString())
	})

	children.forEach((child) => {
		appendChild(element, child)
	})

	return element
}
```

It works! Try it out. We can now render basic JSX to the DOM:

```jsx
import { createElement } from './Vanilla'

/** @jsx createElement */

const App = (
	<div>
		<p>My awesome app :)</p>
	</div>
)

document.getElementById('root').appendChild(App)
```

And you should see your JSX rendered out perfectly. There are a few more things we can add though, for example in React, elements are usually functions, implementing this will allow us to nest components & take full advantage of props, which are crucial featured of JSX.

Thankfully it's pretty simple to implement. All we have to do is check if the tagname is a function instead of a string. If it is we don't do any of the other stuff but rather just call the function. Here's how it looks:

```jsx
export const createElement = (tag, props, ...children) => {
    if (typeof tag === "function") return tag(props, children)

    {...}
}
```

And now let's try that out:

```jsx
import { createElement } from './Vanilla'

/** @jsx createElement */

const SayHello = (props) => (
	<div>
		<h3>Hello {props ? props.name : 'world'}</h3>
		<p>I hope you're having a good day</p>
	</div>
)

/* <Component /> === Component() */
document.getElementById('root').appendChild(<SayHello name="foo" />)
```

As you can see implementing that allowed us to use props as well! You can actually say we're done here but there's one more feature I want to implement & that's fragments. For those not familiar fragments are a way to have empty containers in JSX & they use empty tags. Example:

```jsx
/** @jsx createElement */
/** @jsxFrag createFragment */

const UsingFragment = () => (
	<div>
		<p>This is regular paragraph</p>
		<>
			<p>This is a paragraph in a fragment</p>
		</>
	</div>
)
```

But for this to work we need a function that takes this fragment & instead of creating a DOM element for it just returns it's children. Here's how it looks:

```jsx
const createFragment = (props, ...children) => {
	return children
}
```

And that's it! It works out of the box because of our recursive `appendChild` method.

And that's it! We've done it. A super simple JSX to DOM function that let's us use the power of JSX without having to use react specifically. You can find the source code for it in [this codesandbox](https://codesandbox.io/s/jsx-in-the-browser-qd2hq).

I hope you found this post helpful & I also hope you find some cool ways to use the power of JSX. I actually learned about all of this while working on [Dhow](https://github.com/kartiknair/dhow), which is a JSX-powered static-site generator for Node.js. It basically lets you write Next.js style code but converts it to static HTML with no hydration qualms. Check it out & let me know what you think. Peace!
