import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    padding: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  navTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
  },
});

export default styles;