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
