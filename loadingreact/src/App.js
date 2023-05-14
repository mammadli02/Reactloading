import './App.css';
import { useReducer, useState } from 'react'; //Hook
import { students } from './data';
import { v4 as uuidv4 } from 'uuid';
import styled, { css, keyframes } from 'styled-components';
import AntDesignTable from './Components/AntDesignTable';
// import Header from './Components/Header'
// import Button from './Components/Button'


function reducer(state,action){
  switch(action){
    case 'increment':
    return{
 count: state.count + 1
    }
  case 'decrement':
    return{
    count:  state.count-1
    }
    case 'reset':
      return{
        count:0
      }
    default:
      return {
        count: state.count
      }

      }
}
function App() {
//   function HelloComponent(compName){
//     return compName;
  // }

// Increase AND ..... Button start
// function handleClick(e) {
//   console.log(e);
// }
// function hanndleChange(e){
//   console.log(e.target.value);
// }
// let [counter,setCounter]=useState(0)
// // console.log(counter);

// function handleDecrease(){
// if(counter>=1){
//   setCounter(--counter)
// }else{
//   setCounter(0)
// }
// // console.log(counter);
// }
// function handleIncrease(){
// setCounter(++ counter)
// console.log(counter);

// }
// function handleReset(){
//   setCounter(0)
// }
// Increase AND ..... Button END 

//TODO start
// const [studentsState, setStudentsState] = useState(students);
// const [student,setStudent] = useState({name:'',age:0});
// function handleAddStudent(){
// setStudentsState([...studentsState,student])
// setStudent({name:'', age:0})
// }
// function handleSearch(e){
//  if(e.target.value===""){
//   setStudentsState(students)
//  }else{
//   let filteredStudents = studentsState.filter((student,idx)=>student.name.toLowerCase().trim().includes(e.target.value.toLowerCase().trim()));
//       setStudentsState(filteredStudents);
//  }
// }
// function handleDelete(id){
//   setStudentsState(studentsState.filter((stu)=>stu.id!==id))

// }
// function handleSort(){
//   let sortedStudents = [...studentsState.sort((x,y)=>x.age-y.age)];
//   setStudentsState(sortedStudents);
// }
// function handleChange(e) {
//   setStudent({...student,[e.target.name]:e.target.value});
//   student.id = uuidv4();
// }
//TODO END
// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: end;
//   color: palevioletred;
// `;

// // Create a Wrapper component that'll render a <section> tag with some styles
// const Wrapper = styled.section`
//   padding: 4em;
//   background: papayawhip;
// `;
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `;

function handleDecrease(){
  if(state.count>0){
    dispatch('decrement')

  }
}
function handleIncrease(){
  dispatch('increment')
  }


  function handleReset(){
    dispatch('reset')
  }
const [state,dispatch]=useReducer(reducer,{count:0})
return (



    <>
    {/* <Rotate>&lt; 💅🏾 &gt;</Rotate> */}
    {/* <Header name={HelloComponent} id={1}/>  */}
    {/* <Button name={HelloComponent} id={2}/>  */}

{/* Increase AND ..... Button start */}
    {/* <button onClick={handleClick}>Console Hello</button> */}
    {/* <button onClick={(e)=>handleClick(e)}>Console Hello</button>
<input onChange={(e)=>hanndleChange(e)}/>
<button onClick={handleDecrease}>Decrease</button>
<span>{counter}</span>

<button onClick={handleIncrease}>Increase</button>
<button onClick={handleReset}>Reset</button> */}
{/* Increase AND ..... Button end */}


{/* TODO START */}
   {/* <h1>Students</h1>
      <input onChange={(e)=>handleSearch(e)} placeholder="search student"/>
      <button onClick={handleSort}>sort by age</button>
      <ul>
        {studentsState.map((student, idx) => {
          return (
            <li key={idx}>
              {student.name}, {student.age}{" "}
              <button onClick={()=>handleDelete(student.id)}>delete</button>
            </li>
          );
        })}
      </ul>
      <h4>Add new Student</h4>
      <input name="name" value={student.name} onChange={(e)=>handleChange(e)} placeholder="name" type="text"/>
      <input name="age" value={student.age} onChange={(e)=>handleChange(e)} placeholder="age" type="number" min="0" max="100"/>
      <button onClick={handleAddStudent}>Add Student</button> */}

{/* TODO END */}


{/* Styled components 
<h1>Salam styled components</h1>

<Wrapper>
    <Title>
      Hello World!
    </Title>
  </Wrapper> */}

{/* <AntDesignTable/> */}
<button onClick={handleIncrease}>Increase</button>
<span>{state.count}</span>
<button onClick={handleDecrease} >Decrease</button>
<button onClick={handleReset}> Reset</button>


  </>
  );
}

export default App;
