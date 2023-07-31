import { TouchableOpacity, View, Text, Image } from "react-native"
import { styles } from "./styles"

import trashIconImage from '../../assets/trash.png'

export function TaskItem() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <TouchableOpacity>
          <View style={styles.circle}>

          </View>
        </TouchableOpacity>

        <Text style={styles.taskText}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>

        <TouchableOpacity>
          <Image
            source={trashIconImage}
            style={styles.trash}
          />
        </TouchableOpacity>

      </View>
    </View>
  )
}