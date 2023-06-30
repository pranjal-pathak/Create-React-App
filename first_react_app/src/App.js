import Greetings from './components/Greetings';
import Counter from './components/Counter';
import logo from './logo.svg';
import './App.css';
// function name starts with upper case
//props
function App(props) {
  return (
    <>
    <h1>React Tutorial {props.message}</h1>
    <Greetings name={"Neel"}></Greetings>
    <Greetings name={"Pranjal"}></Greetings>
    <Counter></Counter>
    </>

  );
}

export default App;
