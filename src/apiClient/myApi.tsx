import type {FieldValues } from "react-hook-form";
import apiClient from "./apiClient";

export const getAlbums = async () => {
    try {
        const response = await apiClient.get('/albums');
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export const postAlbums = async (data: FieldValues) => {
    try {
        const response = await apiClient.post('/albums', data);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

export const deleteAlbums = async (id: number) => {
    try {
        const response = await apiClient.delete(`/albums/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};