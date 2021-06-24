import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../redux'

function CakeContainer (props) {
  return (
    <div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/61LvzmEKeiL._AC_SY450_.jpg" className="photo"/>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button className="add-task-btn" onClick={props.buycake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
     numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buycake: () => dispatch(buycake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
