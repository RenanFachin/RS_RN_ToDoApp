import { Alert, FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";

import ClipBoardImg from '../../assets/Clipboard.png'
import { useState } from "react";
import { TaskItem } from "../TaskItem";

import { TaskProps } from '../../screens/Home'

interface TaskListProps {
  taskItems: TaskProps[]
  setTaskItems: (taskItem: TaskProps[]) => void
}

export function Tasks({ setTaskItems, taskItems }: TaskListProps) {

  function handleCheckCompletedTask(item: TaskProps) {

    if (item.completed === false) {
      return Alert.alert('Marcar como concluída', `Deseja marcar que completou a tarefa ${item.task}?`, [
        {
          text: 'Sim',

          onPress: () => {
            const updateItems = [...taskItems]

            const index = taskItems.findIndex((taskItems: TaskProps) =>
              taskItems.task === item.task
            )

            updateItems[index] = { ...item, completed: !item.completed }

            setTaskItems(updateItems)
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }
    else {
      return Alert.alert('Desmarcar tarefa', `Deseja desmarcar que completou a tarefa ${item.task}?`, [
        {
          text: 'Sim',

          onPress: () => {
            const updateItems = [...taskItems]

            const index = taskItems.findIndex((taskItems: TaskProps) =>
              taskItems.task === item.task
            )

            updateItems[index] = { ...item, completed: !item.completed }

            setTaskItems(updateItems)
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }

  }

  return (
    <View style={styles.container}>
      <FlatList
        data={taskItems}
        keyExtractor={task => task.task}

        renderItem={({ item }) => (
          <TaskItem
            task={item}
            key={item.task}
            onCompletedTask={() => handleCheckCompletedTask(item)}
          />
        )}

        ListEmptyComponent={() => (
          <View style={styles.emptyTaskContainer}>

            <Image
              source={ClipBoardImg}
            />


            <View>
              <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text style={styles.subTitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </View>
        )}
      />

    </View>
  )
}