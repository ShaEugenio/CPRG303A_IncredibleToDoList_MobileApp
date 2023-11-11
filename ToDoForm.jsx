import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './Styles';

function ToDoForm({ addTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    addTask(taskInput);
    setTaskInput('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskInput}
        onChangeText={(text) => setTaskInput(text)}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

export default ToDoForm;
