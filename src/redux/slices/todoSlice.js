import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodos, getTodos, updateTodos } from "../thunk/todoThunk";

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


            
    [createTodo.pending]: (state) => {
        state.status = 'loading'
      },
      [createTodo.fulfilled]: (state, { payload }) => {
        state.status = 'success'
        state.createMessage = payload.message
      },
  
      [createTodo.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.error || payload.toString()
      },

      

      [updateTodos.pending]: (state) => {
        state.status = 'loading'
    },
    [updateTodos.fulfilled]: (state, { payload }) => {
        state.status = 'success'
        state.updateMessage = payload.message
    },

    [updateTodos.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.error || payload.toString()
    },



    [deleteTodos.pending]: (state) => {
        state.status = 'loading'
    },
    [deleteTodos.fulfilled]: (state, { payload }) => {
        state.status = 'success'
        
        state.deleteMessage = payload.message
    },

    [deleteTodos.rejected]: (state, { payload }) => {
        state.status = 'failed'
        state.error = payload.error || payload.toString()
    },


        
          },
        })
        
      

export const todoSelector = (state) => state.todos
// export const {message} = todoSlice.actions
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