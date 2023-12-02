import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from '../Styles';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('./data/tasks.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setTasks(data.tasks);
      } catch (error) {
        console.error('Error fetching tasks:', error.message);
      }
    };
    
  
    fetchTasks();
  }, []); 

  const handleAddTask = () => {
    if (tasks.length > 0) {
      const randomIndex = Math.floor(Math.random() * tasks.length);
      const randomTask = tasks[randomIndex];
      setTaskText(randomTask);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => { if (taskText.trim() !== '') { addTask(taskText); setTaskText(''); } }} />
      <Button title="Generate Random Task" onPress={handleAddTask} />
    </View>
  );
}

export default ToDoForm;
