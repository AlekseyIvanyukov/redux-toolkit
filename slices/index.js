import { configureStore } from '@redux/toolkit';
import usersReducer from './usersReducer.js'
import tasksReducer from './tasksReducer.js'
import counterReducer from './counterSlice.js';

export default configureStore({
	reducer: {
		// Свойство counter будет внутри объекта общего состояния: state.counter
		counter: counterReducer,
		users: usersReducer,
		tasks: tasksReducer,
	},
});
