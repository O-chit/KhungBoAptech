import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "./styles/app.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Do homework",
      description: "Complete React assignment",
    },
    {
      id: 2,
      name: "Read book",
      description: "Read 20 pages",
    },
  ]);

  const [taskForm, setTaskForm] = useState({
    name: "",
    description: "",
  });

  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskForm.name || !taskForm.description) {
      return;
    }

    if (editingId) {
      setTasks(
        tasks.map((task) =>
          task.id === editingId
            ? { ...task, ...taskForm }
            : task
        )
      );

      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        ...taskForm,
      };

      setTasks([...tasks, newTask]);
    }

    setTaskForm({
      name: "",
      description: "",
    });
  };

  const handleEdit = (task) => {
    setTaskForm({
      name: task.name,
      description: task.description,
    });

    setEditingId(task.id);
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));

    if (editingId === id) {
      setEditingId(null);

      setTaskForm({
        name: "",
        description: "",
      });
    }
  };

  const categories = ["Tất cả", ...new Set(products.map((p) => p.category))];
  
  const filteredProducts = selectedCategory === "Tất cả"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar />

      <div className="container">
        <form className="cart" onSubmit={handleSubmit}>
          <h2>
            {editingId
              ? "Edit Task"
              : "Create New Task"}
          </h2>

          <div className="cart-item">
            <input
              type="text"
              placeholder="Task name"
              value={taskForm.name}
              onChange={(e) =>
                setTaskForm({
                  ...taskForm,
                  name: e.target.value,
                })
              }
            />
          </div>

          <div className="cart-item">
            <input
              type="text"
              placeholder="Task description"
              value={taskForm.description}
              onChange={(e) =>
                setTaskForm({
                  ...taskForm,
                  description:
                    e.target.value,
                })
              }
            />
          </div>

          <button type="submit">
            {editingId
              ? "Update Task"
              : "Add Task"}
          </button>
        </form>

        <Cart
          cart={tasks}
          removeFromCart={handleDelete}
          editTask={handleEdit}
        />

        <ProductList
          products={tasks}
          addToCart={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
