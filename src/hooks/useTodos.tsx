import { useEffect, useState } from "react";
import apiClient from "../apiClient/apiClient";
import type { Todos } from "../types/types";
import { toast } from "react-toastify";

function useTodos() {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [limit, setLimit] = useState(7)
    const [currentFilter, setCurrentFilter] = useState("")
    const [selectedUser, setSelectedUser] = useState<number | "">("");

    useEffect(() => {
        getTodos();
    }, [currentFilter, selectedUser]);

    function getTodos() {
        const filter = currentFilter;
        let updatedUrl = filter !== "" ? `/todos?_page=${page}&_limit=${limit}&completed=${filter}` : `/todos?_page=${page}&_limit=${limit}`;

        if (selectedUser !== "") {
            updatedUrl += `&userId=${selectedUser}`;
        }

        apiClient.get<Todos[]>(updatedUrl)
        .then((res) => {
            setPageSize(Math.floor(res.headers["x-total-count"] / limit)); 
            setTodos(res.data);
        })
        .catch((error) => {
            console.error('Error fetching users:', error);
        });
    }

    function changeStatus(todo: Todos) {
          apiClient.patch(`/todos/${todo.id}`, {completed: !todo.completed})
              .then(() => {
                  toast.success('Status changed successfully!');
                  getTodos();
              })
              .catch((error) => {
                  console.error('Error fetching users:', error);
              })
      }


  return { todos, changeStatus, setPage, pageSize, limit, setLimit, currentFilter, setCurrentFilter, selectedUser, setSelectedUser };
}

export default useTodos