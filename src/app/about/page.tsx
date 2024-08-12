import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      <Link href="/about">Go back to Home</Link>
    </div>
  );
};

export default About;
/* interface Task {
  id:number;
  title: string;
  description: string;
  completed: boolean;
}

const Home = () =>{
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({title: '', description: ''});

  const addTask = () => {
    const task: Task = {
      id: tasks.length + 1,
      title: newTask.title,
      description: newTask.description,
      completed: false
    };
    setTasks([...tasks,task]);
    setNewTask({title:'',description:''});
  };

  const toggleTaskCompletion = (id:number)=> {
    setTasks(
      tasks.map((task)=>
        task.id === id ? {...task,completed: !task.completed} :task
      )
    );
  };

  const deleteTask = (id: number)=>{
    setTasks(tasks.filter((task)=>task.id !==id));
  };

  
  return (
    <div>
      <h1>Task List</h1>
      <input type="text" 
        value={newTask.title}
        onChange={(e)=>setNewTask({...newTask,title:e.target.value})}
        placeholder="Task title" 
      />
      <button onClick={addTask}>Add task</button>
      <ul>
        {tasks.map((task)=>(
          <li key={task.id}>
            <Link href={`/task/${task.id}`}>
              <a>{task.title}</a>
            </Link>
          <button onClick={()=> toggleTaskCompletion(task.    id)}>{task.completed ? 'Mark as pending' : 'Mark as completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
 */