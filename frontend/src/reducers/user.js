import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    userId: null,
    username: null,
    accessToken: null,
    error: null,
    loading: false,
  },
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
  },
});
