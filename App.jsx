import React, { useState } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { styles } from './Styles';

function App() {
  // Part A: State Management
  // Use the useState hook to define a state variable to store the list of tasks.
  // Initialize the state with the following array of hard-coded tasks.
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <SafeAreaView>
      <ScrollView>
        {/* Part B: Passing Props */}
        {/* Pass the tasks array to the ToDoList component using the tasks prop. */}
        <ToDoList tasks={tasks} />
      </ScrollView>
      {/* Pass a function to ToDoForm to update the tasks when a new task is added. */}
      <ToDoForm addTask={(newTask) => setTasks([...tasks, newTask])} />
    </SafeAreaView>
  );
}

export default App;