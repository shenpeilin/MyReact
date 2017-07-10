import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import store from '../stores/Store'
import * as Actions from '../action/Actions.js';

class Summary extends Component {
    constructor(props){
        super(props);

        this.onChange = this.onChange.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState() {
      const state = store.getState();
      let sum = 0;
      for (let key in state){
        if (state.hasOwnProperty(key)){
          sum += state[key];
        }
      }

      return {sum:sum};
    }

    shouldComponentUpdate(nextProps, nextState) {
      return nextState.sum !== this.state.sum;
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }
    
    render() {
      const sum = this.state.sum;
      return (
        <div>Total Count: {sum}</div>
      )
    }
}

//导出组件
export default Summary;