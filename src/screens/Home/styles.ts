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
  content: {
    paddingHorizontal: 24,
  },
  form: {
    flexDirection: 'row',
    marginTop: -26,
    width: '100%',
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
  buttonText: {
    color: '#F2F2F2',
    fontSize: 20,
    fontWeight: 'bold'
  },
  userSummary: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  summaryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  createdText: {
    color: '#8284FA',
    fontWeight: 'bold',
    fontSize: 14
  },
  concludedText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    fontSize: 14
  },
  amountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9',
    backgroundColor: '#333333',
    borderRadius: 16,
    paddingVertical: 2,
    paddingHorizontal: 8,
  }
})

