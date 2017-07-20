import * as actions from '../../todos/actions';
import * as actionTypes from '../../todos/actionTypes';

describe('todos/actions', ()=>{
    it('should create an action to add todo', ()=>{
        const text = 'first todo';
        const action = actions.addTodo(text);

        expect(action.text).toBe(text);
        expect(action.completed).toBe(false);
        expect(action.type).toBe(actionTypes.ADD_TODO);
    });
    it('should have different id for defferent actions', ()=>{
        const text = 'first todo';
        const action1 = actions.addTodo(text);
        const action2 = actions.addTodo(text);
        expect(action1.id !== action2.id).toBe(true);
    });
});