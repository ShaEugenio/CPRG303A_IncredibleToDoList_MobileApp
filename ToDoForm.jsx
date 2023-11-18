import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { styles } from './Styles';

function ToDoForm({ addTask }) {
  // Part 2: Pass Task to App Component
  const [taskText, setTaskText] = React.useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update the taskText state as the user types
        value={taskText}
      />
      {/* Part 2: Implement the onPress event to call the addTask function with the taskText as an argument */}
      <Button title="Add Task" onPress={() => { if (taskText.trim() !== '') { addTask(taskText); setTaskText(''); } }} />
    </View>
  );
}

export default ToDoForm;
