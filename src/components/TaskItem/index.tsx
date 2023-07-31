import { TouchableOpacity, View, Text, Image } from "react-native"
import { styles } from "./styles"

import trashIconImage from '../../assets/trash.png'
import checkIconItemImage from '../../assets/checkItemIcon.png'
import { TaskProps } from '../../screens/Home'

interface TaskItemProps {
  task: TaskProps
  onCompletedTask: () => void
}

export function TaskItem({ task, onCompletedTask }: TaskItemProps) {

  function removeTask() {
    console.log('Clicou no botão de remover')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity onPress={onCompletedTask}>

          {/* Verificando a condição do dado de completed das tasks */}
          {task.completed ? (
            <View style={[styles.circle, styles.checkedItem]}>
              <Image
                source={checkIconItemImage}
                style={styles.checkIcon}
              />
            </View>
          ) : (
            <View style={[styles.circle, styles.emptyCircle]} />
          )}
        </TouchableOpacity>

        <Text style={[styles.taskText,
        task.completed && styles.completedTextTask] // Caso esteja com o completed marcado = adicionar a estilização
        }>
          {task.task}
        </Text>

        <TouchableOpacity onPress={removeTask}>
          <Image
            source={trashIconImage}
            style={styles.trash}
          />
        </TouchableOpacity>

      </View >
    </View >
  )
}