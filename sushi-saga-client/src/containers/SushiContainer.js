import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
      { props.sushis.map((sushi) => {
        // console.log(sushi)
		return <Sushi sushi={sushi}
			      key={sushi.id}
            eat={props.eat}
            eaten = {props.eaten}
			      />
		})
        }
        {/* {console.log(props.showMore)} */}
        <MoreButton display={props.display} showMore = {props.showMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer