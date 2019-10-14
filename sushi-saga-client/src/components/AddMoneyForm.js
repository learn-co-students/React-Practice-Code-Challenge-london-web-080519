import React from 'react';


class AddMoneyForm extends React.Component {

    state = { 
        money : ''
    }

    render(){
    return( 
        <form onSubmit={(event)=> this.props.handleSubmit(event, this.state.money)}>
            <input type="number" onChange={event => this.setState({money : parseInt(event.target.value)})} value={this.state.money} />
            <input type="submit" />
        </form>
    )
}
}

export default AddMoneyForm