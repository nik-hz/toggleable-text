# Toggleable Text

Hello and welcome to the docs for toggleable text js. This is a standalone react component that toggles between normal text and an input field to add on the fly customization to your react projects.

https://github.com/nik-hz/toggleable-text

https://www.npmjs.com/package/toggleable-text

```
----------------------------------------------------------------------------------------------------------------
Download:
npm i toggleable-text
----------------------------------------------------------------------------------------------------------------
```

## Table of contents

1. [Toggleable Text](#introduction)
2. [Getting started](#getting-started)
    1. [multiple toggleable inputs](#subparagraph1)
    2. [single toggleable input](#subparagraph2)
    3. [integrating with redux](#subparagraph3)
    4. [prop list](#subparagraph4)
3. [Full code example](#fullcodeexample)
4. [Contributing](#contributing)

## Getting Started

Toggleable text is a react component that you can import into your projects and with little set up incorporate toggleable text/input fields everywhere.

Integrates with any state management system and accepts custom styling.

Usage is easy, import into your project, wire up the state management (more on this below) add props and off you go.

Advice: use a local state in the parent to manage the components even if using redux

```js
//----------------------------------------------------------------------------------------------------------------

// Import

import Toggle from 'toggleable-text'

//----------------------------------------------------------------------------------------------------------------
```

to use Toggle you MUST define a local state that stores a Boolean with default false to toggle the Toggle component. You also need some sort of event to change the local state. Example:

```js
//----------------------------------------------------------------------------------------------------------------

// local state object that determines whether the toggler is in input or edit mode. Default should be false
const [input, setInput] = useState(false)

// custom event handler that changes the Boolean value of Input in the local state
const toggleLocalInputState = () => {
    setInput(!input)
}

return (
    // your code goes here
    <Toggle
        // the toggle prop will take the input state obj
        toggle={input}
        // other props go here
    />
    // your code goes here
)

// your code here

//----------------------------------------------------------------------------------------------------------------
```

### multiple toggleable inputs

When running multiple toggleable inputs in one Component, it is advisable to manage them with a single useState constructor.

To do this, assign IDs to each toggleable input as shown below:

```js
//----------------------------------------------------------------------------------------------------------------

// your code goes here

const [text, setText] = useState({
    input1: 'text',
    input2: 'more text',
})

// your code goes here

// you need this custom change handler in the parent
const handleFieldChange = (togglerId, value) => {
    setTextID({ ...text, [togglerId]: value })
}

// your code goes here

return (
    // your code goes here

    <Toggle
        // if using a state object define id and value for each toggleable input
        id={input1}
        value={text[input1]}
        // ignore other props for now
        toggle={input}
        onChange={handleFieldChange}
        // pass in inline style or style as an object
        inputStyle={styles.toggleableInput}
        textStyle={styles.toggleableText}
    />

    // your code goes here
)

//----------------------------------------------------------------------------------------------------------------
```

### single toggleable input

if you're using a single toggleable input then you can skip the assigning IDs step, and directly change the local state. (if this confuses you, follow the above example)

### integrating with redux

i would recommend that even if you choose to add redux as state management that you keep the local state as a in between step. This lets you add your own functionality between the toggleable text and redux.

in the future there may be a redux integrated version of Toggle but not yet.

### prop list

All props that can be passed into the Toggle component

```

| Prop       | Value                                                                  | Function                            |
| ---------- | ---------------------------------------------------------------------- | ----------------------------------- |
| toggle     | takes a boolean that must default to false - is required               | determines the text and input modes |
| id         | correspond to the id of the toggler as given to local state            | organize multiple togglers          |
| onChange   | pass in the event handler --> the child will call the parent's handler | set parent state from child comp    |
| value[]    | value with field id --> which text from localstate to display          | sets text for the toggler           |
| inputStyle | inline or style object                                                 | sets style                          |
| textStyle  | inline or style object                                                 | sets style                          |

```

```js
//----------------------------------------------------------------------------------------------------------------

// your code goes here

<Toggle
    toggle={input}
    id={1}
    onChange={handleFieldChange}
    value={text[1]}
    // pass in inline style or style as an object
    inputStyle={{ background: 'red' }}
    textStyle={styles.toggleableText}
/>
//----------------------------------------------------------------------------------------------------------------
```

## Full code example

```js
//----------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react'

import logo from './logo.svg'
import './App.css'
import Toggle from 'toggleable-text'

const App = () => {
    const [input, setInput] = useState(false)

    const [text, setText] = useState('1')

    const [textID, setTextID] = useState({
        2: '2',
        3: '3',
    })

    const toggleInput = () => {
        setInput(!input)
        console.dir(text)
    }

    const handleFieldChange = (fieldId, value) => {
        console.log(value)
        setText(value)
    }

    const handleFieldChangeID = (fieldId, value) => {
        setTextID({ ...textID, [fieldId]: value })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <Toggle
                    toggle={input}
                    id={1}
                    onChange={handleFieldChange}
                    value={text}
                    inputStyle={{ background: 'red' }}
                />
                <Toggle
                    toggle={input}
                    id={2}
                    onChange={handleFieldChangeID}
                    value={textID[2]}
                />
                <Toggle
                    toggle={input}
                    id={3}
                    onChange={handleFieldChangeID}
                    value={textID[3]}
                />

                <button onClick={toggleInput}>TOGGLE</button>
            </header>
        </div>
    )
}

export default App
//----------------------------------------------------------------------------------------------------------------
```

## Contributing

If you want to help make a version of this with redux integration feel free :)
