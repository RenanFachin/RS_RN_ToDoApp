import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";

import ClipBoardImg from '../../assets/Clipboard.png'
import { useState } from "react";
import { TaskItem } from "../TaskItem";

export function Tasks() {
  const [items, setItems] = useState(['teste', 'teste2'])
  // const [items, setItems] = useState([])

  return (
    <View style={styles.container}> 
      <FlatList
        data={items}
        renderItem={({ item }) => (
          // <View>
          //   <Text>
          //     {item}
          //   </Text>
          // </View>
          <TaskItem />
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