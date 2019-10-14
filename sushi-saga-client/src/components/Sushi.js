import React from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
    {/* {console.log(props.sushi.img_url)} */}
      <div className="plate" 
           onClick = {() => {props.eat(props.sushi)}}>
        { 
          // console.log(props)
          props.eaten.includes(props.sushi) ?
          null
          :
            <img src={props.sushi.img_url} width="100%" alt="sooshee"/>
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi