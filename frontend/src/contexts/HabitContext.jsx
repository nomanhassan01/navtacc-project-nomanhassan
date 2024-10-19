import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";

export const HabitContext = createContext(null);

export const HabitContextProvider = ({ children }) => {
  const { user } = useAuth();
  const { token } = user;
  const [isLoading, setIsLoading] = useState(false);
  const HABIT_API_URL = "http://localhost:4000/api/habits"; // Update this with your actual backend URL later

  const [habits, setHabits] = useState([]);

  // Fetch all habits
  const fetchAllHabits = async () => {
    try {
      const response = await axios.get(`${HABIT_API_URL}`);
      setHabits(response.data);
    } catch (error) {
      console.error("Error fetching habits:", error);
    }
  };

  // Add a new habit
  const addNewHabit = async (newHabit) => {
    try {
      const response = await axios.post(`${HABIT_API_URL}`, newHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHabits([...habits, response.data]);
    } catch (error) {
      console.error("Error adding habit:", error);
    }
  };

  // Fetch user-specific habits
  const fetchUserHabits = async () => {
    try {
      const response = await axios.get(`${HABIT_API_URL}/userHabits`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHabits(response.data);
    } catch (error) {
      console.error("Error fetching user habits:", error);
    }
  };

  // Edit a habit
  const updateHabit = async (id, updatedHabit) => {
    try {
      const response = await axios.put(`${HABIT_API_URL}/${id}`, updatedHabit, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedHabits = habits.map((habit) =>
        habit._id === id ? response.data : habit
      );
      setHabits(updatedHabits);
    } catch (error) {
      console.error("Error updating habit:", error);
    }
  };

  // Delete a habit
  const deleteHabit = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this habit?");
    if (confirmDelete) {
      try {
        await axios.delete(`${HABIT_API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHabits(habits.filter((habit) => habit._id !== id));
      } catch (error) {
        console.error("Error deleting habit:", error);
      }
    }
  };

  // Fetch all habits when the component is mounted
  useEffect(() => {
    if (token) {
      fetchAllHabits();
    }
  }, [token]);

  return (
    <HabitContext.Provider
      value={{
        habits,
        isLoading,
        setIsLoading,
        setHabits,
        fetchAllHabits,
        addNewHabit,
        fetchUserHabits,
        updateHabit,
        deleteHabit,
      }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabit = () => useContext(HabitContext);
