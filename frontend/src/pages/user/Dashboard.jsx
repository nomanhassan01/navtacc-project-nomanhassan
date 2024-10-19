import React from 'react';
import HabitList from '../../components/HabitList';
import { Link } from 'react-router-dom';
import Percentage from '../../components/Percentage';

function Dashboard() {
  return (
    <>
      <div className="container mx-auto bg-gray-300 text-white min-h-screen p-6">
        <h1 className='text-5xl text-center mt-12 font-bold text-yellow-600'>
          <span className='text-gray-900'>H</span>abit Trac<span className='text-gray-900'>k</span>er
        </h1>
        <div className='flex justify-center mt-8'>
          <Link 
            to={"/addHabit"}
            className='inline-block text-black bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-600 rounded shadow-md transition duration-200'
          >
            Add Habit
          </Link>
        </div>
        
        <div className="mt-12">
          <HabitList />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
