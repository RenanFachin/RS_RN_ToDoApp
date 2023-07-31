import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import Logo from '../../assets/Logo.png'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Logo}
          style={styles.logo}
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#808080'
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>


    </View>
  )
}