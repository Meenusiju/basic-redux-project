import React from 'react';
import { connect } from 'react-redux';
import { buyIcecream } from '../redux';

function IcecreamContainer (props) {
    return(
        <div>
            <h2>Number of Icecreams: {props.numOfIcecreams}</h2>
            <button onClick={props.buyIcecream} > Buy IceCream</button>
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