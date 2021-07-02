import React from 'react'

/**
 * toggle between a text and an input to edit text
 * @param  {Boolean} toggle Boolean (default=false) --> true = input mode on
 * @param  {String} value[optionalID]  from parent state, run the controlled text input - pass in ID if needed
 * @param  {String} onChange  parents onChange handler
 * @param  {String} type  pass in input type - standard React choice, default = text
 * @param  {String} id  pass in some form of custom id to each custom input field --> only needed if using object as localState
 * @param  {String} inputStyle  style object for the input field
 * @param  {String} textStyle  style object for the text field
 * @return {String}      This Component will change the state of the text input in the parent state
 */
const Toggle = ({
    toggle,
    value,
    type = 'text',
    onChange,
    id,
    inputStyle,
    textStyle,
}) => {
    // Custom change handler --> calls parent change handler to modify the parent state
    const handleChange = (event) => {
        const text = event.target.value
        onChange(id, text)
    }

    // Renders the text
    const renderText = () => {
        return <div style={textStyle}>{value}</div>
    }

    // Renders the input field
    const renderInput = () => {
        return (
            <div>
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    style={inputStyle}
                />
            </div>
        )
    }

    return <div>{toggle ? renderText() : renderInput()}</div>
}

export default Toggle
