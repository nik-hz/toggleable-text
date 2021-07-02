import React, { useState } from 'react'
import Toggle from 'toggleable-text'
import { Button, Card } from 'react-bootstrap'

import { styles } from '../styles/cardStyles.js'

const Demo = () => {
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

    const handleFieldChange = (value) => {
        setText(value)
    }

    const handleFieldChangeID = (fieldId, value) => {
        setTextID({ ...textID, [fieldId]: value })
    }
    return (
        <div style={styles.card}>
            <Card>
                <Card.Header>Code Demo</Card.Header>
                <Card.Body>
                    <div style={styles.demoToggler}>
                        <Card.Title>
                            Demo implementations of the Toggler:{' '}
                        </Card.Title>
                        <div>
                            <Button onClick={toggleInput}>TOGGLE</Button>
                        </div>
                        <div style={styles.cardBody}>
                            <Toggle
                                toggle={input}
                                id={1}
                                onChange={handleFieldChange}
                                value={text}
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
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Demo
