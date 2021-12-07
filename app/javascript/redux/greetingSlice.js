/* eslint-disable no-param-reassign */
import {
    createEntityAdapter,
    createAsyncThunk,
    createSlice,
  } from '@reduxjs/toolkit';
  
  export const greetingsAdapter = createEntityAdapter();
  
  const initialState = greetingsAdapter.getInitialState({ status: 'idle' });
  
  export const fetchGreetings = createAsyncThunk('greetings/fetchGreeting', async () => {
    const response = await fetch('/v1/api');
    const res = await response.json();
    console.log('My sweet desert flower, oasis to quench my thirst')
    return res;
  });
  
  const greetingsSlice = createSlice({
    name: 'greetings',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchGreetings.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchGreetings.fulfilled, greetingsAdapter.upsertMany)
        .addCase(fetchGreetings.rejected, (state) => {
          state.status = 'idle';
        });
    },
  });
  
  export const {
    selectById: selectGreetingById,
    selectIds: selectGreetingId,
    selectEntities: selectGreetingEntitites,
    selectAll: selectAllGreetings,
    selectTotal: selectTotalGreeting,
  } = greetingsAdapter.getSelectors((state) => state.greetings);
  
  export default greetingsSlice.reducer;