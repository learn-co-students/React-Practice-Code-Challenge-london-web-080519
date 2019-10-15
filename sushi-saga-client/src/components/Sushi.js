import React, { Component } from 'react'



class Sushi extends Component {
  
  serveSushis = () => {
    if (this.props.plates.find(s=> s.id === this.props.sushi.id)) {
      return null
    } else {
      return <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name} />
    } 
  }

  render() {
  const renderSushis = this.serveSushis()
  return (
    <div className="sushi">
      {/* <div className="plate" onClick={() => props.eatSushi(props.sushi)}> */}
      <div className="plate" onClick={this.props.handleEaten}> 
      {renderSushis}
    
        {/* { this.state.eaten === false ? <img src={this.props.sushi.img_url} width="100%" alt={this.props.sushi.name} /> : null } */}
      </div>
      <h4 className="sushi-details">
        <React.Fragment>
          {this.props.sushi.name} - ${this.props.sushi.price}
        </React.Fragment>
      </h4>
    </div>
  )
}
}

export default Sushi