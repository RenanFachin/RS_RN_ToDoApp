import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    width: '100%',
    height: '25%',
    backgroundColor: '#0D0D0D',
  },
  logo: {
    marginHorizontal: 132,
    marginTop: 70,
    width: 110,
    height: 32,
  },
  form: {
    flexDirection: 'row',
    marginTop: -26,
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
    gap: 4
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    color: '#F2F2F2',
    padding: 16,
    fontSize: 16
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText:{
    color: '#F2F2F2'
  }
})

