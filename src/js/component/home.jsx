import React, {useState} from "react";
import { Task } from "./task.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tasks,setTasks] = useState([]);
	const [taskName, setTaskName] = useState("");

	return (
		<div id="main">
			<div className="header">
				<h1>TODOS LIST</h1>
			</div>
			<div className="lista">
			<input
			type="text" 
			placeholder="Enter your task"
			onKeyDown={(e)=> {if(e.key==="Enter" && taskName !== "") {
				setTasks([...tasks,taskName])
				setTaskName("");
			}}} 
			onChange={(event)=> setTaskName(event.target.value)} 
			value={taskName}>
			</input>

			{tasks.map((task,index)=> {
				return(
					<Task className="tareas" task={task} key={index} tasks={tasks} setTasks={setTasks} id={index}/>
				)
			})}
			<p>{tasks.length} {tasks.length === 1 ? "tarea pendiente" : "tareas pendientes"}</p>
			</div>
		</div>
	)
}

export default Home;
