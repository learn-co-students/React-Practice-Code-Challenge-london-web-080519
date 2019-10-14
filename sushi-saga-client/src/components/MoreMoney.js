import React from 'react'

const MoreMoney = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addMoney(parseInt(e.target.money.value, 10))
    }

    return <form id="top-up-form" onSubmit={handleSubmit}>
            <label>Top up by: $
                <input type="number" name="money"/>
            </label>
            <input type="submit" value="top up"/>
          </form>
}

export default MoreMoney