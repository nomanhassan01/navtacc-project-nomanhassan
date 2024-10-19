import React, { useEffect, useState } from 'react';
import { useHabit } from '../contexts/HabitContext'; // Adjust the path based on your structure
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import styles

function Percentage() {
  const { habits } = useHabit();
  const [completedCount, setCompletedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const total = habits.length;
    const completed = habits.filter(habit => habit.isCompleted).length; // Adjust this if your property name is different
    setTotalCount(total);
    setCompletedCount(completed);
  }, [habits]);

  const percentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="flex justify-center items-center mb-4"> {/* Center the circle */}
      <div className="w-20 h-20"> {/* Set the width and height for the circle */}
        <CircularProgressbar 
          value={percentage} 
          text={`${Math.round(percentage)}%`} 
          strokeWidth={10} // Adjust stroke width if necessary
        />
      </div>
    </div>
  );
}

export default Percentage;
