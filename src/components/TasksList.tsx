import React from 'react';
import { FlatList } from 'react-native';
import { EditTasksArgs } from '../pages/Home';

import { ItemWrapper } from './ItemWrapper';
import { TaskItem } from './TaskItem';
export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TasksListProps {
  task: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
  editTask: ({ taskId, taskNewTitle }: EditTasksArgs) => void;
}

export function TasksList({ task, toggleTaskDone, removeTask, editTask }: TasksListProps) {
  return (
    <FlatList
      data={task}
      keyExtractor={item => String(item.id)}
      contentContainerStyle={{ paddingBottom: 24 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <TaskItem 
              task={item}
              editTask={editTask}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
            />
          </ItemWrapper>
        )
      }}
      style={{
        marginTop: 32
      }}
    />
  )
}