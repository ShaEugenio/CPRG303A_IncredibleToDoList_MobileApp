import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../Styles';

function ToDoList({ tasks }) {
  return (
    <>
      {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </>
  );
}

export default ToDoList;
