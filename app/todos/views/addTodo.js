import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js';


class AddTodo extends Component {
    static PropTypes= {
        onAdd : PropTypes.func
    }
    constructor(props, context) {
        super(props, context);
        this.state = {value: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onSubmit(event){

        event.preventDefault();

        const inputValue = this.state.value;
        if(!inputValue.trim()){
            return;
        }

        this.props.onAdd(inputValue);
        this.setState({value: ''});

    }

    onInputChange(event){
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className='add-todo'>
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" onChange={this.onInputChange} value={this.state.value}/>
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDispatchToProps)(AddTodo);