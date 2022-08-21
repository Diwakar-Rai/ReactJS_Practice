import React, {useState} from 'react'

export default function FuncTodo() {
    const [inputValue, setInputValue] = useState("");
    const [id,setId] = useState(1);
    const [task,setTask] = useState([]);
    const handleChange = (e)=>{
      const updatedValue = e.target.value;
        setInputValue(updatedValue);
    }
    const addItem=(e) =>{
        e.preventDefault();
        const inputId = id + 1;
        setId(inputId);
        task.push({inputValue, id})
        setTask(task);
        setInputValue("");
    }
  return (
<>
    <div className="container mt-5">
        <h1>Todo App</h1>
        <h6>Using the Functional Component</h6>
        <hr/>
        <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={inputValue}
              onChange={handleChange}
            />
            <button
              className="input-group-text bg-info text-white"
              id="inputGroup-sizing-default"
              onClick={addItem}
            >
              Add Task
            </button>
          </div>
          <div className="mt-5">
            {task && task.length>0 && task.map(item =>(
              <div className="input-group mb-3" key={item.id}>
                  <div className="form-control">{item.inputValue}</div>
              </div>
            ))}
          </div>
    </div>
</>
  )
}
