import React from 'react'

const Toggle = ({
    toggleState,
    toggleText,
    inputStyleFromParent,
    textStyleFromParent,
}) => {
    const renderText = () => {
        return <div style={inputStyleFromParent}>{toggleText}</div>
    }

    const renderInput = () => {
        return (
            <div>
                <input type="text" value={toggleText} />
            </div>
        )
    }

    return <div>{toggleState ? renderText() : renderInput()}</div>
}

export default Toggle
