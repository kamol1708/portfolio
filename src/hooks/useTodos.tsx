import { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import type { Todos } from "../types/types";

function useTodos() {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [limit, setLimit] = useState(7)
    const [currentFilter, setCurrentFilter] = useState("")

    useEffect(() => {
        getTodos();
    }, [page, limit, currentFilter]);

    function getTodos() {
        const filter = currentFilter;
        const url = `/todos?_page=${page}&_limit=${limit}`;
        
        const updatedUrl = filter !== "" ? `${url}&completed=${filter}` : url;

        apiClient.get<Todos[]>(updatedUrl)
        .then((res) => {
            setPageSize(Math.floor(res.headers["x-total-count"] / limit)); 
            setTodos(res.data);
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        })
    }

    function changeStatus(id: number) {
        apiClient.patch(`/todos/${id}`, {completed: !todos.find(todo => todo.id === id)?.completed})
        .then(() => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        })
    }


  return { todos, page, setPage, pageSize, limit, setLimit, changeStatus, currentFilter, setCurrentFilter };
}

export default useTodos