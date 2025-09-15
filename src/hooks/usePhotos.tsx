import { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import type { Photo } from "../types/types";

function usePhotos() {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        getPhotos();
    }, []);

    const getPhotos = async () => {
        try {
            const response = await apiClient.get(`/photos`);
            setPhotos(response.data); 
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };


  return { photos };
}

export default usePhotos