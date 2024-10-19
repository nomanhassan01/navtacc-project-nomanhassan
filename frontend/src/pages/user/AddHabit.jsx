import React, { useState } from 'react';
import { useHabit } from '../../contexts/HabitContext';
import { Link, useNavigate } from 'react-router-dom';

function AddHabit() {
  const { addNewHabit } = useHabit();
  const navigate = useNavigate();

  const [newHabit, setNewHabit] = useState({
    habitName: "",
    habitDescription: "",
  });

  const handleChange = (e) => {
    setNewHabit({ ...newHabit, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await addNewHabit(newHabit);
      alert("New habit added");
      navigate('/dashboard');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-200 text-yellow-500 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <Link
          className="flex mx-auto font-bold text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg "
          to={"/dashboard"}>
          All Habits
        </Link>
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black">Add New Habit</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Habit Title</label>
                <input
                  type="text"
                  name="habitName"
                  placeholder='Enter Habit Tilte'
                  value={newHabit.habitName}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 placeholder-white rounded border border-gray-600 focus:border-yellow-500 focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 text-base outline-none text-yellow-500 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-black">Description</label>
                <textarea
                  name="habitDescription"
                  placeholder='Enter habit description'
                  value={newHabit.habitDescription}
                  onChange={handleChange}
                  className="w-full bg-gray-800 bg-opacity-50 placeholder-white rounded border border-gray-600 focus:border-yellow-500 focus:bg-gray-700 focus:ring-2 focus:ring-gray-700 h-32 text-base outline-none text-yellow-500 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
              </div>
            </div>

            {/* Button */}
            <div className="p-2 w-full">
              <button className="flex mx-auto text-black bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Add Habit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddHabit;
