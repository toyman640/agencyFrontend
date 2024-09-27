import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const createAgencyUrl = 'http://127.0.0.1:8000/backend/agency/';
const editAgencyUrl = (agencyId) => `http://127.0.0.1:8000/backend/agency/edit/${agencyId}/`;
const getOneAgencyUrl = (agencyId) => `http://127.0.0.1:8000/backend/agency/${agencyId}/`;
const getAllAgencyUrl = 'http://127.0.0.1:8000/backend/users/non-staff/';

const initialState = {
  userAgency: null,
  userAgencies: [],
  allAgencies: 0,
  activeAgencies: 0,
  inactiveAgencies: 0,
  loading: false,
  error: null,
};

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
    const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const token = persistedUserInfo?.data?.token;
    try {
      const response = await axios.put(editAgencyUrl(agencyId), updatedData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
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

export const fetchAgencies = createAsyncThunk(
  'agencies/fetchAgencies',
  async (_, { rejectWithValue }) => {
    const persistedUserInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    const token = persistedUserInfo?.data?.token;
    try {
      const response = await axios.get(getAllAgencyUrl, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      const agencies = response.data;

      const activeAgencies = agencies.filter((agency) => agency.is_active);
      const inactiveAgencies = agencies.filter((agency) => !agency.is_active);

      return {
        allAgencies: agencies.length,
        activeAgencies: activeAgencies.length,
        inactiveAgencies: inactiveAgencies.length,
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
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
        state.loading = true;
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
      })
      .addCase(editAgency.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAgency.fulfilled, (state, action) => {
        state.userAgency = action.payload;
        state.loading = false;
      })
      .addCase(editAgency.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchAgencies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAgencies.fulfilled, (state, action) => {
        state.loading = false;
        state.allAgencies = action.payload.allAgencies;
        state.activeAgencies = action.payload.activeAgencies;
        state.inactiveAgencies = action.payload.inactiveAgencies;
      })
      .addCase(fetchAgencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch non-staff users';
      });
  },
});

export default userAgencySlice.reducer;
