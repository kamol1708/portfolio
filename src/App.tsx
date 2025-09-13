import PostsList from "./lists/posts/PostsList"
import UserList from "./lists/users/UserList";
import TodosList from "./lists/todos/TodosList";
import { NavLink, Route, Routes } from "react-router-dom";
import CommentList from "./lists/comments/CommentList";

function App() {
  
  return (
    <div className="container mx-auto p-4">
      <NavLink to={'/users'} >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded me-2">Users</button>
      </NavLink>
      <NavLink to={'/posts'}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded me-2">Posts</button>
      </NavLink>
      <NavLink to={'/todos'}>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Todos</button>
      </NavLink>

      <Routes>
        <Route path="/users" element={<UserList />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/posts/:id/comments" element={<CommentList />} />
        <Route path="/todos" element={<TodosList />} />
      </Routes>
    </div>

  )
}

export default App