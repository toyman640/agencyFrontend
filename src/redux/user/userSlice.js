import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const logInUserUrl = 'http://127.0.0.1:8000/backend/login/';
const logOutUrl = 'http://127.0.0.1:8000/backend/logout/';
const createAgentUser = 'http://127.0.0.1:8000/backend/register/';
const createStaffUser = 'http://127.0.0.1:8000/backend/register/staff/';
const getNonStaffUserUrl = 'http://127.0.0.1:8000/backend/non-staff-users/';
const activateUserUrl = (userId) => `http://127.0.0.1:8000/backend/activate/${userId}/`;
const deactivateUserUrl = (userId) => `http://127.0.0.1:8000/backend/deactivate/${userId}/`;
// const activateUserUrl = 'http://127.0.0.1:8000/backend/activate/<int:user_id>/';
// const deactivateUserUrl = 'http://127.0.0.1:8000/backend/deactivate/<int:user_id>/';

const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  user: persistedUserInfo,
  nonStaffUser: null,
  loading: false,
  agentUser: null,
  loginStatus: null,
  staffUser: null,
  error: null,
};

export const activateUser = createAsyncThunk('user/activateUser', async (userId, { rejectWithValue }) => {
  const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const token = persistedUserInfo?.data?.token;

  try {
    const response = await axios.post(activateUserUrl(userId), {}, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.error || err.message);
  }
});

export const deactivateUser = createAsyncThunk('user/deactivateUser', async (userId, { rejectWithValue }) => {
  const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const token = persistedUserInfo?.data?.token;

  try {
    const response = await axios.post(deactivateUserUrl(userId), {}, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.error || err.message);
  }
});

export const getNonStaffUser = createAsyncThunk('user/getNonStaffUser', async (_, { rejectWithValue }) => {
  const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
  const token = persistedUserInfo?.data?.token;
  console.log(token);
  try {
    const response = await axios.get(getNonStaffUserUrl, {
      headers: {
        Authorization: `Token ${token}`, // Pass the token in the header
      },
    });
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response?.data?.error || err.message);
  }
});

export const signUpAgent = createAsyncThunk('user/signUpAgent', async (newAgent) => {
  try {
    const response = await axios.post(createAgentUser, newAgent);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const signUpStaff = createAsyncThunk('user/signUpStaff', async (newStaff) => {
  try {
    const response = await axios.post(createStaffUser, newStaff);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const logInUser = createAsyncThunk('user/logInUser', async (userInfo, { rejectWithValue }) => {
  try {
    const response = await axios.post(logInUserUrl, userInfo);
    if (response.status < 200 || response.status >= 300) {
      return rejectWithValue(response.data.error || 'Login failed'); // Use error message from the response if available
    }
    return { data: response.data, status: response.status };
  } catch (err) {
    if (err.response && err.response.data) {
      return rejectWithValue(err.response.data.error || err.message);
    }
    return rejectWithValue(err.message);
  }
});

export const logOutUser = createAsyncThunk('user/logOutUser', async (token) => {
  try {
    await axios.post(logOutUrl, {}, {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return null;
  } catch (err) {
    return err.message;
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUserState(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(logInUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(logInUser.fulfilled, (state, action) => {
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
        return {
          ...state,
          user: action.payload,
          loginStatus: action.payload,
          loading: false,
          error: null,
        };
      })
      .addCase(logInUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(logOutUser.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(signUpAgent.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signUpAgent.fulfilled, (state, action) => ({
        ...state,
        agentUser: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(signUpAgent.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(signUpStaff.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(signUpStaff.fulfilled, (state, action) => ({
        ...state,
        staffUser: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(signUpStaff.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }))
      .addCase(getNonStaffUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(getNonStaffUser.fulfilled, (state, action) => ({
        ...state,
        nonStaffUser: action.payload,
        loading: false,
        error: null,
      }))
      .addCase(getNonStaffUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export default userSlice.reducer;
