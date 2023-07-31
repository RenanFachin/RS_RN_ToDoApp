import { FlatList, Image, Text, View } from "react-native";
import { styles } from "./style";

import ClipBoardImg from '../../assets/Clipboard.png'
import { useState } from "react";
import { TaskItem } from "../TaskItem";

import { TaskProps } from '../../screens/Home'

interface TaskListProps {
  taskItems: TaskProps[]
  setTaskItems: (taskItem: TaskProps[]) => void
}

export function Tasks({ setTaskItems, taskItems}: TaskListProps) {
  // const [items, setItems] = useState(['Organizar o armário do quarto', 'Fazer uma caminhada de 30 minutos no parque.', 'Ler o primeiro capítulo de um livro novo.', 'Fazer uma ligação para um amigo ou familiar que não fala há muito tempo.', 'Escrever um poema ou uma história curta.', 'Limpar a geladeira e descartar os alimentos vencidos.', 'Assistir a um filme clássico que nunca viu antes.', 'Plantar algumas ervas ou flores em vasos.', 'Aprender uma nova receita e cozinhar um prato especial.', 'Fazer uma sessão de meditação ou yoga por 15 minutos.', 'Doar roupas e itens que não são mais usados para uma instituição de caridade.', 'Comprar ingredientes para um jantar.'])
  // const [items, setItems] = useState([])


  return (
    <View style={styles.container}>
      <FlatList
        data={taskItems}
        keyExtractor={task => task.task}

        renderItem={({ item }) => (
          <TaskItem taskText={item.task} key={item.task} />
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