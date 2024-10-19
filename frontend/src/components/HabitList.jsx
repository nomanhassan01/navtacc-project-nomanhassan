import React, { useEffect } from 'react';
import { useHabit } from '../contexts/HabitContext';
import { MdModeEdit as Edit } from "react-icons/md";
import { MdDelete as Delete } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

function HabitList() {
  const { habits, isLoading, setIsLoading, fetchUserHabits, deleteHabit } = useHabit();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchUserHabits(); // Fetch user habits
    setIsLoading(false);
  }, [fetchUserHabits, setIsLoading]);

  // Sorting habits by createdAt in descending order (latest habits first)
  const sortedHabits = [...habits].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      {
        isLoading ? <h1>Loading....</h1> : (
          <>
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className="w-full mx-auto overflow-auto">
                  <table className="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 text-gray-900">Mark as <br />Complete</th>
                        <th className="px-4 py-2 text-gray-900">Habit Title</th>
                        <th className="px-4 py-2 text-gray-900">Description</th>
                        <th className="px-4 py-2 text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedHabits.map((habit) => (
                        <tr key={habit._id} className="border-t-2 border-yellow-500">
                          <td className="px-4 py-2 ">
                            <input type="checkbox" />
                          </td>
                          <td className="px-4 py-2 text-black font-semibold">{habit.habitName}</td>
                          <td className="px-4 py-2 text-black font-semibold">{habit.habitDescription}</td>
                          <td className="px-4 py-2 flex items-center">
                            <Link to={`/editHabit/${habit._id}`} state={habit}>
                              <Edit size={20} className='text-blue-500 mr-4' />
                            </Link>
                            <Delete
                              onClick={() => deleteHabit(habit._id)}
                              size={20}
                              className='text-red-500 cursor-pointer'
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </>
        )
      }
    </>
  );
}

export default HabitList;
