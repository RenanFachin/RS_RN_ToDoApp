import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Logo from '../../assets/Logo.png'
import { Tasks } from "../../components/Tasks";

export function Home() {

  function handleAddNewTask(){
    console.log('Você clicou no botão de adicionar uma nova tarefa')
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
            <Text style={styles.amountText}>0</Text>
          </View>


          <View style={styles.summaryItem}>
            <Text style={styles.concludedText}>Concluídas</Text>
            <Text style={styles.amountText}>0</Text>
          </View>

        </View>
      </View>


      <Tasks />


    </View>
  )
}