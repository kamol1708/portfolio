import { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import { useParams } from "react-router-dom";
import type { Comment } from "../types/types";

function useComments() {
    const [comments, setComments] = useState<Comment[]>([]);
    const {id} = useParams();

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        try {
            const response = await apiClient.get(`/posts/${id}/comments`);
            setComments(response.data);  
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return { comments };
}

export default useComments