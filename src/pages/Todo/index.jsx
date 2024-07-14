// import React from 'react'

import { useState } from "react";
// import { languageContext } from "../../contexts/language";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const addTodos = (todo) => {
		if (!todo.trim()) {
			return;
		}
		setTodos([...todos, { task: todo, completed: false, delete: false }]);
	};
	const [value, setValue] = useState("");
	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodos(value);
		setValue("");
	};

	const handleDelete = (index) => {
		const updatedTodos = todos.filter((todo, i) => i !== index);
		setTodos(updatedTodos);
	};
	const handleComplete = (index) => {
		const updatedTodos = todos.map((todo, i) => {
			if (i === index) {
				return { ...todo, completed: !todo.completed };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	// const { language, changeLanguage } = useContext(languageContext);
	// let setLanguage = () => {
	//   if (language === "en") {
	//     changeLanguage("ar");
	//   } else {
	//     changeLanguage("en");
	//   }
	// };
	return (
		<>
			{/* <h1>Language is {language}</h1>{" "} */}
			{/*Look at the changed language in product details too */}
			{/* <button
        className="btn btn-secondary"
        onClick={() => {
          setLanguage();
        }}
      >
        Change Language
      </button> */}
			<div className="container my-5">
				<div className="w-75 mx-auto border border-primary-subtle p-5">
					<form
						onSubmit={handleSubmit}
						className="d-flex w-100 justify-content-around p-2"
					>
						<input
							type="text"
							value={value}
							className="w-75 border form-control border-primary shadow-none px-1"
							onChange={(e) => setValue(e.target.value)}
						/>
						<button
							type="submit"
							className="btn btn-primary py-2 px-2"
						>
							Add Todo
						</button>
					</form>
					<ul>
						{todos.map((todo, i) => (
							<li
								className={`d-flex justify-content-around my-3 ${
									todo.completed
										? "text-decoration-line-through "
										: ""
								}`}
								key={i}
							>
								<span className="w-75 py-2">{todo.task} </span>
								<span>
									<button
										onClick={() => handleComplete(i)}
										className="mx-1 btn btn-success text-white p-2"
									>
										complete
									</button>
									<button
										onClick={() => handleDelete(i)}
										className="mx-1 btn btn-danger text-white p-2"
									>
										delete
									</button>
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Todo;
