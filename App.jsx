import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { styles } from './Styles';

function App() {
  // Part A: State Management
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  // Part 1: Implement and Pass addTask Function
  const addTask = (task) => {
    // Part 4: Don't allow duplicate tasks.
    if (!tasks.includes(task) && task.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Part B: Passing Props */}
        <ToDoList tasks={tasks} />
      </ScrollView>
      {/* Part 1: Pass the addTask function as a prop to the ToDoForm component */}
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
