import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {changeState} from '../store/action/action';

class Home extends Component {

    _changeData(){
        console.log('event called');
    }
    _changeState(){
      //console.log('chnage state ')
        this.props.changeStateReducer()

    }
    render() {
        return (
            <div>
                <h1>Hello World {this.props.userName}</h1>

                <button onClick={this._changeState.bind(this)}>Change state</button>

                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

function mapStateToProps(state){
  return ({
    userName:state.rootReducer.userName
  })
}
function mapDispatchToProps(dispatch){
  return({
    changeStateReducer:()=>{
      dispatch(changeState())
    }
  })
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
