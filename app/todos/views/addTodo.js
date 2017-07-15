import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../actions.js';
import css from './style.css';
console.log(css);


class AddTodo extends Component {
    static PropTypes= {
        onAdd : PropTypes.func
    }
    constructor(props, context) {
        super(props, context);
        this.state = {value: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
            <div className={css.add_todo}>
                <form onSubmit={this.onSubmit}>
                    <input className={css.new_todo} onChange={this.onInputChange} value={this.state.value}/>
                    <button className={css.add_btn} type="submit">
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