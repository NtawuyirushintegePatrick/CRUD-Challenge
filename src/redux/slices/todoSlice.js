import { createSlice } from "@reduxjs/toolkit";
import { getTodos } from "../thunk/todoThunk";
// import { fetchAllTodos } from "../thunk/todoThunk";

const initialState = {
    todos:[],
    isLoading:false,
    isError:false
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,

    extraReducers: {
            // get all todos
           
            [getTodos.pending]: (state) => {
              state.status = 'loading'
            },
            [getTodos.fulfilled]: (state, { payload }) => {
              state.status = 'success'
              state.todos = payload
            //   console.log(payload)
            },
        
            [getTodos.rejected]: (state, { payload }) => {
              state.status = 'failed'
              state.error = payload.error || payload.toString()
            },
        
          },
        })
        
      

export const todoSelector = (state) => state.todos
export const {message} = todoSlice.actions
export const todoReducer = todoSlice.reducer;























    // extraReducers: (builder) => {
    //     builder.addCase(fetchAllTodos.pending, (state, { payload }) => {
    //         state.isLoading = true;
    //     });

    //     builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
            
    //         state.isLoading = false;
    //         state.todos=payload
    //     });

    //     builder.addCase(fetchAllTodos.rejected, (state, { payload }) => {
    //         state.isLoading = false;
    //         state.isError=true;
            
    //     });

    // }