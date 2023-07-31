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
    paddingHorizontal: 8,
    paddingVertical: 12,
    backgroundColor: '#262626',
  },
  circle: {
    width: 24,
    height: 24,
    borderColor: '#4EA8DE',
    borderRadius: 12,
    borderWidth: 2
  },
  taskText: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 14,
  },
  trash: {
    width: 32,
    height: 32,
  }
})