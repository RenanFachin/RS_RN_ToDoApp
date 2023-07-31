import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#262626',
  },
  emptyCircle: {
    borderColor: '#4EA8DE',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2
  },
  checkedItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  checkIcon: {
    width: 32,
    height: 32,
  },
  taskText: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 16,
  },
  completedTextTask:{
    color: '#808080',
    textDecorationLine:  'line-through', 
    textDecorationStyle: 'solid'
  },
  trash: {
    width: 42,
    height: 42,
  }
})