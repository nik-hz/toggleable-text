import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { styles } from '../styles/markdown'

import text from './README.md'

const Docs = () => {
    const [state, setState] = useState()

    useEffect(() => {
        fetch(text)
            .then((res) => res.text())
            .then((post) => setState(post))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div style={styles.main}>
            <ReactMarkdown>{state}</ReactMarkdown>
        </div>
    )
}

export default Docs
