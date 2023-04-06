import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import pizzaService from "./pizzaService";

const initialState = {
  pizza: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create pizza
export const createPizza = createAsyncThunk(
  "pizza/createPizza",
  async (pizza, thunkAPI) => {
    try {
      return await pizzaService.createPizza(pizza);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user pizzas
export const getPizzas = createAsyncThunk('pizza/getPizzas', async (_,thunkAPI) => {
  try {
      const token = thunkAPI.getState().auth.user.token
      return await pizzaService.getPizzas(token)
  } catch (error) {
      const message = (
          error.response && 
          error.response.data && 
          error.response.data.message) || 
          error.message || 
          error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder

      //createPizza
      .addCase(createPizza.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPizza.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pizza = action.payload;
      })
      .addCase(createPizza.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.pizza = null;
      })

      //getPizzas
      .addCase(getPizzas.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPizzas.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals = action.payload;
      })
      .addCase(getPizzas.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = pizzaSlice.actions;
export default pizzaSlice.reducer;