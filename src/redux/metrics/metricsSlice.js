import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    metrics: [],
    isLoading: true,
    error: '',
};

export const fetchMetrics = createAsyncThunk('metrics/fechMetrics', async () => {
    try {
        const response = await fetch('')
    } catch (error) {
        throw new Error('Failed to fecth metrics.');
    }
});