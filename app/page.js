"use client";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Page = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, task }]);
    setTitle("");
    setTask("");
  };

  const deleteTask = (index) => {
    const updatedTasks = mainTask.filter((_, i) => i !== index);
    setMainTask(updatedTasks);
  };

  let renderTask = (
    <h2 className="text-gray-300 text-center">No Tasks Available</h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <div
        key={i}
        className="group relative bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl mb-8 w-80 h-auto flex flex-col"
      >
        <button
          onClick={() => deleteTask(i)}
          className="absolute top-3 right-3 bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-600 
          focus:outline-none focus:ring-2 focus:ring-red-400 w-10 h-10 rounded-full 
          flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100"
          title="Delete Task"
        >
          <FiTrash2 className="text-lg" />
        </button>

        <h5 className="text-xl font-semibold text-cyan-600 mb-3 break-words">
          {t.title}
        </h5>

        <div className="text-gray-700 break-words overflow-hidden">
          <p>{t.task}</p>
        </div>
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-cyan-600 flex flex-col items-center">
      <h1 className="text-center text-5xl font-bold text-white mb-8 pt-12">
        To-Do App
      </h1>

      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8"
      >
        <div className="mb-6">
          <input
            id="title"
            type="text"
            className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="Enter Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <textarea
            id="task"
            rows="5"
            className="w-full p-4 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-y"
            placeholder="Enter Task Details..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-cyan-600 text-white text-lg font-semibold rounded-lg hover:bg-cyan-700 transition-all duration-300"
        >
          Add Task
        </button>
      </form>

      <hr className="my-8 border-cyan-300 w-2/3" />

      <div className="flex flex-wrap gap-6 justify-center">{renderTask}</div>
    </div>
  );
};

export default Page;
