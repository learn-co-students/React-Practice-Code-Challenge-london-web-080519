import React from 'react'

const MoreButton = (props) => {
    return <button onClick={
     event => props.updateDisplay()

    }>
            More sushi!
          </button>
}

export default MoreButton