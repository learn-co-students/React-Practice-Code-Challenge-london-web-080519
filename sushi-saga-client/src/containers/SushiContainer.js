import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  let sushisList = () => {
    return props.sushis.map(sushi => <Sushi sushi={sushi}  eatSushi={() => props.eatSushi(sushi)} emptyPlates={props.emptyPlates}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {sushisList()}

        <MoreButton moreSushi={props.moreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer


// import React, { Component } from 'react';
// import MoreButton from '../components/MoreButton'

// class SushiContainer extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <div className="belt">
//          <h5>
          
          
        
//           <MoreButton />
//         </div>
//       </React.Fragment>
//     )
//   }
// }

// export default SushiContainer;