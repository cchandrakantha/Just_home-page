import React, {useState} from 'react'

 function ToDoList() {
    const [tasks,setTasks] = useState("");
    const [newTask, setNewTask] = useState("");


   function handleInput(e){
    setNewTask(e.target.value);
    
   }

   function addTask(){
    if(newTask.trim() !== ""){
      setTasks(t =>[...t, newTask]);
      setNewTask("");
    }
    
   }
   function deleteTask(index){
    const updatedTask = tasks.filter((_, i) => i !== index)
    setTasks(updatedTask);
   }
   function moveTaskUp(index){
    if(index > 0){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index -1]] = [updatedTask[index-1],updatedTask[index]];
      setTasks(updatedTask);
    }
   }
   function moveTaskDown(index){
    if(index < tasks.length -1){
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1],updatedTask[index]];
      setTasks(updatedTask);
   }
  }
  return (
    <div className='to-do-list'>
      <h1>TO-Do-List</h1>
      <div>
      <input type='text' placeholder='Enter the task' onChange={handleInput}/>
      <button className='to-do-button' onClick={addTask}>
        Add+
      </button>
      </div>  
      <ol>
        {Array.isArray(tasks) && tasks.map((task, index) =>
          <li key={index}>
            <span className='text'>{task}</span>
            <button
              className='delete-button'
              onClick={() => deleteTask(index)}> Delete
            </button>
            <button
              className='move-button'
              onClick={() => moveTaskUp(index)}>Up
            </button>
            <button
              className='delete-button'
              onClick={() => moveTaskDown(index)}>Down
            </button>
          </li>
        )}
      </ol>

    </div>
  )
}
export default ToDoList;