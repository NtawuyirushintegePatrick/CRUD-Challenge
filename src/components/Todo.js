
// import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from "react";
import '../App.css';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos, createTodo, updateTodos, deleteTodos, saveEditTodos } from "../redux/thunk/todoThunk";
import { todoSelector } from "../redux/slices/todoSlice";
// import Admin from './Admin';
// import Employees from './Employees';

const style = {
    padding: '5',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Todo = () => {

    const [posts, setPosts] = useState([]);
    // const [postsEdit, setPostsEdit] = useState([]);
    // const [input, setInput] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [postID, setPostID] = React.useState("");
    //   const handleOpen = () => setOpen(true);
    const [newTodos, setNewTodos] = useState(null)
    const [todosId, setTodosId] = useState(null)
    //   const [todosId, setTodosId] = useState('')
    //   const [getNewTodos,setGetNewTodos] = useState('')

    //   const { todo } = useSelector(todoSelector)


    const handleClose = () => setOpen(false);


    // const apiEndPoint = "http://localhost:3003/posts";




    // useEffect(() => {
    //     const getPosts = async () => {
    //         const { data: res } = await axios.get(apiEndPoint);
    //         setPosts(res);
    //     };
    //     getPosts()
    // }, []);

    // useEffect(() => {
    //     const getPosts = async () => {
    //         const { data: res } = await axios.get(`http://localhost:3003/posts/${postID}`);
    //         setPostsEdit(res?.title);
    //         console.log(res);
    //     };
    //     getPosts()

    // }, [postID]);





    // const { todos } = useSelector(state => state.todos)
    // console.log(todos,"Hello");

    const { todos } = useSelector(todoSelector)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getTodos())

    }, [dispatch])

    // console.log(todos)





    const handleSubmit = async (event) => {
        const data = {
            title: newTodos,

        }
        dispatch(createTodo(data))
        dispatch(getTodos())


        // const post = { title: input };
        // await axios.post(apiEndPoint, post);
        // setPosts([post, ...posts]);
        event.preventDefault();
    };



    const handleUpdate = (id, title) => {

        //  console.log(id, title)  
        const data = {
            id,
            title
        }
        setNewTodos(title)
        // setTodosId(id) 

        dispatch(updateTodos(data))
        dispatch(getTodos)

    };



    const handleSaveEdit = () => {
        const data = {
            id: todosId,
            title: newTodos
            //   role: 'employee'
        }
        dispatch(updateTodos(data))
        dispatch(getTodos())

    }

    // const handleUpdate = async () => {
    //     setPosts(posts.filter((p) => p.id === postID ? p.title = postsEdit : p));




    const handleGetID = async (post) => {
        setOpen(true)
        setPostID(post)


    };


    const handleDelete = (id) => {
        // console.log(id)
        dispatch(deleteTodos(id))
        dispatch(getTodos())
    }

    // const handleDelete = async (post) => {
    //     setPosts(posts.filter((p) => p.id !== post));


    // };


    const handleChange = (e) => {
        setNewTodos(e.target.value)
    }

    // if (posts.length = 0) return <h2> there are no post in the Database </h2>;
    // function inputHandler(e) {
    //     setInput(e.target.value);
    // }

    // console.log("", postsEdit);



    return (
        <>
            <div className="containerTodo">

                <input type="text" placeholder="Enter new Task" value={newTodos ? newTodos : handleSubmit} onChange={handleChange} />
                {/* <Modal
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                > */}
                {/* <Box sx={style}>
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                            Make Update
                        </Typography>
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            value={postsEdit}
                            onChange={(event) => setPostsEdit(event.target.value)}
                            variant="filled"
                        /> */}
                {/* <button onClick={handleUpdate} className="btn btn-primary btn-sm">
                            Update
                        </button> */}
                {/* </Box>
                </Modal> */}
                <button onClick={handleSaveEdit} value={newTodos} className="btn btn-primary btn-sm">
                    Save Edit
                </button>
                <button onClick={handleSubmit} className="btn btn-primary btn-sm">
                    Add New Task
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos?.map((element) => (
                            <tr key={element.id}>
                                <td> {element.title} </td>
                                <td>
                                    <button
                                        value={element.title}
                                        variant="success"
                                        onClick={() => handleUpdate(element.id, element.title)}
                                        className="btn btn-info btn-sm"
                                    >
                                        Update
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(element.id)}
                                        className="btn btn-danger btn-sm"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Todo