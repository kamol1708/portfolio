
import useTodos from '../../hooks/useTodos';
import { FiFilter} from 'react-icons/fi';
import { FaCheckCircle, FaFilter, FaRegCircle } from 'react-icons/fa';
import UserSelect from './../posts/UserSelect';
import useUsers from '../../hooks/useUsers';

function TodosList() {
  const { todos, setPage, changeStatus, currentFilter, setCurrentFilter, selectedUser, setSelectedUser } = useTodos();
  const { users } = useUsers();

  return (
    <div className="container py-5">
      <div className="row mb-5 text-center">
        <div className="col">
          <h1 className="display-4 fw-bold text-gradient-todos">Todo List</h1>

        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-12 justify-content-md-end d-flex mb-3 mb-md-0">
          <div className="d-flex flex-wrap gap-2 justify-content-end">
            <UserSelect 
              users={users}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser} 
            />
              <div className="d-flex gap-3">
                <button 
                  onClick={() => { setCurrentFilter(''); setPage(1); }} 
                  className="btn d-flex align-items-center gap-2 btn-all"
                  style={{
                    backgroundColor: currentFilter === '' ? '#e8f5e9' : 'white',
                    color: currentFilter === '' ? '#2e7d32' : '#455a64',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '8px 15px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaFilter size={14} />
                  <span>All</span>
                </button>
                <button 
                  onClick={() => { setCurrentFilter('true'); setPage(1); }} 
                  className="btn d-flex align-items-center gap-2 btn-all"
                  style={{
                    backgroundColor: currentFilter === 'true' ? '#e8f5e9' : 'white',
                    color: currentFilter === 'true' ? '#2e7d32' : '#455a64',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '8px 15px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaCheckCircle size={14} className="text-success" />
                  <span>Completed</span>
                </button>
                <button 
                  onClick={() => { setCurrentFilter('false'); setPage(1); }} 
                  className="btn d-flex align-items-center gap-2 btn-all"
                  style={{
                    backgroundColor: currentFilter === 'false' ? '#e8f5e9' : 'white',
                    color: currentFilter === 'false' ? '#2e7d32' : '#455a64',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    padding: '8px 15px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FaRegCircle size={14} className="text-warning" />
                  <span>Uncompleted</span>
                </button>
              </div>
          </div>
        </div>
      </div>

      <div>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <div 
              key={todo.id} 
              className={`card mb-3 shadow-sm todo-card cursor-pointer ${todo.completed ? 'completed' : ''}`}
            >
              <div className="card-body">
                <div className="d-flex align-items-start">
                  <div className="me-3 mt-1" >
                    <input onChange={() => changeStatus(todo)} checked={todo.completed} type="checkbox" />

                  </div>
                  <div className="flex-grow-1">
                    <h5 className="card-title">{todo.title}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <FiFilter size={48} className="text-muted mb-3" />
            <h5 className="text-muted">Not found any todo</h5>
          </div>
        )}
      </div>
    </div>
  );
}

export default TodosList;