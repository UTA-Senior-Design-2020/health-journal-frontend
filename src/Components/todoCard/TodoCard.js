import React, { useState, useEffect } from "react";
import {Typography, CardHeader} from "@material-ui/core";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles({
    root: {
        /* White / High Emphasis */
        background: "#FFFFFF",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
        borderRadius: "4px",
        width: '90%',
        height: '100%',
        textAlign: 'center',
        /* Gray / Divider */
        border: '1px solid #E5E5E5',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        lineheight: '30px',
        /* identical to box height, or 150% */
        letterSpacing: '0.15px'
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    task: {
        border: '1px solid white',
        borderradius: '5px',
        padding: '0.5em',
        margin: '0.5em',
    },
    header: {
        margin: '0.5em',
        fontsize: '2em',
        textalign: 'center'
    },
    todoContainer: {
        background: 'rgb(41, 33, 33)',
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)",
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '20px',
        width: '90%',
        borderradius: '4px',
        padding: '20px 10px',
        color: 'white',
        border: '3px solid rgb(36, 110, 194)'  
    },
    createtask: {
        margin: '2.5em 2em',
        width: '80%',
        outline: 'none',
        border: 'none',
        padding: '0.7em'
    }
  });

  function Task({ task, index, completeTask, removeTask }) {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <IconButton style={{ background: "red" }} size="small" onClick={() => removeTask(index)}><DeleteIcon/></IconButton>
            <IconButton style={{ background: "red" }} size="small" onClick={() => completeTask(index)}>
                <DoneIcon/>
            </IconButton>

        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");
    
    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}
var temp = [];

export default function TodoCard()
{
    // TODO : CURRENTLY LOGGED IN DOCTOR
    var doctorID = 1;
    const classes = useStyles();
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        async function getData(){
          let {data} = await axios.get("http://localhost:5000/todos/" + doctorID);
          for (const todo in data){
            if(!data[todo].isDeleted){
                const newTodo = [{title: data[todo].Title, completed: data[todo].Completed, doctorId: data[todo].DoctorId, todoId: data[todo].TodoId }];
                temp.push(newTodo);
                setTodos(newTodo);
            }
          }
        }
        getData();
      }, []) 
    useEffect(() => { 
        setTasksRemaining(todos.filter(task => !task.completed).length) 
    });
    
    const sendPostRequest = async (newTask) => {
        try {
            const resp = await axios.post('http://localhost:5000/todos', newTask);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    const addTask = title => {
        const newTasks = [...todos, { title, completed: false, doctorId: doctorID }];
        const newTask = [ { doctorId: doctorID, title, completed: 0,  isDeleted: 0 }];
        // POST request using axios inside useEffect React hook
        sendPostRequest(newTask);
        setTodos(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...todos];
        newTasks[index].completed = true;
        setTodos(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...todos];
        newTasks.splice(index, 1);
        setTodos(newTasks);
    };

    return(
    <Card className={classes.todoContainer}>
        <CardContent>
            <Typography variant="h5" component="h1" align='center'>To do</Typography>
            <div className={classes.header}>Pending tasks ({tasksRemaining})</div>
            <div className={classes.task}>
                {console.log(todos)}
                {todos.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    key={index}
                    />
                    
                ))}
            </div>
            <div className={classes.createtask} >
                <CreateTask addTask={addTask} />
            </div>
        </CardContent>
    </Card>
    );
}