import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createAgencyUrl = 'http://127.0.0.1:8000/backend/agency/';
const editAgencyUrl = (agencyId) => `http://127.0.0.1:8000/backend/agency/edit/${agencyId}/`;
const getOneAgencyUrl = (agencyId) => `http://127.0.0.1:8000/backend/agency/${agencyId}/`;

const initialState = {
  userAgency: null,
  userAgencies: [],
  loading: false,
  error: null,
};

// Create new agency thunk
export const newAgency = createAsyncThunk(
  'userAgency/newAgency',
  async (newData, { rejectWithValue }) => {
    const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const token = persistedUserInfo?.data?.token;
    try {
      const response = await axios.post(createAgencyUrl, newData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  },
);

export const editAgency = createAsyncThunk(
  'agency/edit',
  async ({ agencyId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(editAgencyUrl(agencyId), updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  },
);

export const getAgency = createAsyncThunk(
  'userAgency/getAgency',
  async (_, { rejectWithValue }) => {
    const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const token = persistedUserInfo?.data?.token;
    try {
      const response = await axios.get(createAgencyUrl, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  },
);

export const getOneAgencyById = createAsyncThunk(
  'userAgency/getOneAgencyById',
  async (agencyId, { rejectWithValue }) => {
    const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const token = persistedUserInfo?.data?.token;
    try {
      const response = await axios.get(getOneAgencyUrl(agencyId), {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.error || err.message);
    }
  },
);

const userAgencySlice = createSlice({
  name: 'userAgency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newAgency.pending, (state) => {
        state.loading = true; // Set loading state
        state.error = null;
      })
      .addCase(newAgency.fulfilled, (state, action) => {
        state.userAgency = action.payload;
        state.loading = false;
      })
      .addCase(newAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAgency.fulfilled, (state, action) => {
        state.userAgency = action.payload;
        state.userAgencies = Array.isArray(action.payload) ? action.payload : [action.payload];
        state.loading = false;
      })
      .addCase(getAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getOneAgencyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOneAgencyById.fulfilled, (state, action) => {
        state.userAgency = action.payload;
        state.loading = false;
      })
      .addCase(getOneAgencyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default userAgencySlice.reducer;
