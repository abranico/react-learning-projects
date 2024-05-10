import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getUsers from "../../services/getUsers";
import { Result } from "../../types";

interface InitialState {
  isLoading: boolean;
  data: Array<Result>;
  error: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  data: [],
  error: false,
};

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {
  const data = await getUsers();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.isLoading = true;
      state.error = false;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }),
      builder.addCase(fetchUsers.rejected, (state) => {
        state.error = true;
        state.isLoading = false;
      });
  },
  reducers: {
    removeUser: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;

      state.data = state.data.filter((user) => user.login.uuid != id);
    },
  },
});

export const { removeUser } = usersSlice.actions;

export default usersSlice.reducer;
