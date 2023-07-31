import { TouchableOpacity, View, Text, Image } from "react-native"
import { styles } from "./styles"

import trashIconImage from '../../assets/trash.png'
import checkIconItemImage from '../../assets/checkItemIcon.png'
import { useState } from "react"

interface TaskItemProps {
  taskText: string
}

export function TaskItem({ taskText }: TaskItemProps) {
  const [taskCompleted, setTaskCompleted] = useState(false)

  function Toggle() {
    setTaskCompleted(!taskCompleted)
    console.log('Clicou no botão de toggle da task')
  }

  function removeTask() {
    console.log('Clicou no botão de remover')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity onPress={Toggle}>
          {taskCompleted ? (
            <View style={[styles.circle, styles.checkedItem]}>
              <Image source={checkIconItemImage} style={styles.checkIcon} />
            </View>
          ) : (
            <View style={[styles.circle, styles.emptyCircle]} />
          )}
        </TouchableOpacity>

        <Text style={[styles.taskText, taskCompleted && styles.completedTextTask]}>
          {taskText}
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