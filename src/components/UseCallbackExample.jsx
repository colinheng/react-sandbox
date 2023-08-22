import React, {useState, useCallback} from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some Task"])
  }, [setTasks])

  return (
    <div>
    <p>UseCallbackExample</p>
    <Button addTask={addTask} />
    {tasks.map((task, index) => (
      <p key={index}>{task}</p>
    ))}

    </div>
  )
}

const Button = React.memo(({addTask}) => {
  console.log("Button rendered")
  return <div>
    <button className="1 btn btn-primary" onClick={addTask}>Add Task</button>
  </div>
})

export default UseCallbackExample