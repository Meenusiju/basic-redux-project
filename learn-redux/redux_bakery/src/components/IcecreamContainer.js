import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';

function IcecreamContainer (props) {
    return(
        <div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61LmZU3wjAL.__AC_SX300_SY300_QL70_ML2_.jpg" className="photo"/>
     
            <h2>Number of Icecreams: {props.numOfIcecreams}</h2>
            <button className="add-task-btn" onClick={props.buyIcecream} > Buy IceCream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfIcecreams: state.icecream.numOfIcecreams
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        buyIcecream: () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer)