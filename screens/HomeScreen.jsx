import React from 'react';
import { View, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoList';

const addTask = (task) => {
  console.log('Adding task:', task);
};

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <View>
        <Button
            title="To Do Form"
            onPress={() => navigation.navigate('To Do Form', { addTask })}
        />
        <Button
          title="About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
};

export default HomeScreen;
