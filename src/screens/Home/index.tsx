import { Image, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import { styles } from "./styles";

import Logo from '../../assets/Logo.png'
import { Tasks } from "../../components/Tasks";
import { useState } from "react";

interface TaskProps {
  task: string
  completed: boolean
}

export function Home() {
  const [taskItems, setTaskItems] = useState<TaskProps[]>([])
  const [newTask, setNewTask] = useState('')
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleAddNewTask() {
    // console.log(newTask)

    // Transformando tudo em minúsculo para poder fazer a comparação
    if (taskItems.find(item => item.task.toLowerCase() === newTask.toLowerCase())){
      return Alert.alert("Item existente!","Este item já existe em seu histórico de tarefas.")
    }

    // Criando uma constante contendo os dados do que o usuário está adicionando
    const newTaskData = {
      "task": newTask,
      "completed": false
    }

    // Adicionando a dados na lista de tarefas
    setTaskItems(prevState => [newTaskData,...prevState])

    // Limpando o campo
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Logo}
          style={styles.logo}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            value={newTask}
            onChangeText={setNewTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.userSummary}>
          <View style={styles.summaryItem}>
            <Text style={styles.createdText}>Criadas</Text>
            <Text style={styles.amountText}>
              {taskItems.length || 0}
            </Text>
          </View>


          <View style={styles.summaryItem}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <Text style={styles.amountText}>
              {String(completedTasks)}
            </Text>
          </View>

        </View>
      </View>


      <Tasks />


    </View>
  )
}