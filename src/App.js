
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import * as func from './actions';

function App() {
  const counter = useSelector(state=>state.counter);
  const isLogged = useSelector(state=>state.logged);
  const dispatch = useDispatch();
  return (

  

    <div>
      <h1>Count {counter}</h1>
      <button onClick={()=>dispatch(func.increment())}>+</button>
      <button onClick={()=>dispatch(func.decrement())}>-</button>
      <button onClick={()=>dispatch(func.signIn())}>Log In</button>
      <button onClick={()=>dispatch(func.signOut())}>Log Out</button>
{isLogged ? <h3>Secret Info that only log in user can see</h3> : <h3>info is hidden</h3>}
      
    </div>
  );
}

export default App;
