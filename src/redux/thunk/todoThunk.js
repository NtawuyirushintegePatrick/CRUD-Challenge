import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



// const api = axios.create({
//     baseURL: "http://localhost:3003",
// });

export const getTodos = createAsyncThunk(
    "todos/all",
    async (_,{ rejectWithValue }) => {
        try {
            const res = await axios.get(`http://localhost:3003/posts`);

            // console.log(res.data);
            return res.data;
            
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const createTodo = createAsyncThunk('todos/createTodo', async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:3003/posts', data)
  
      return response.data
    } catch (error) {
    //   if (!error.response) {
    //     return rejectWithValue(error)
    //   }
      return rejectWithValue(error.response.data)
    }
  })

  export const updateTodos = createAsyncThunk('todos/updateTodos', async (data, { rejectWithValue }) => {
    try {
        const id = data.id
        const newData = {
            title: data.title,
        }
      const response = await axios.patch(`http://localhost:3003/posts/${id}`, newData)

     console.log(response)

      return response.data
     
    } catch (error) {
    //   if (!error.response) {
    //     return rejectWithValue(error)
    //   }
      return rejectWithValue(error.response.data)
    }
  }) 


  export const deleteTodos = createAsyncThunk('todos/deleteTodos', async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:3003/posts/${id}`)
  
      return response.data
    } catch (error) {
    //   if (!error.response) {
    //     return rejectWithValue(error)
    //   }
      return rejectWithValue(error.response.data)
    }
  })

