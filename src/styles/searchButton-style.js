import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchSection: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchIcon: {
    position: 'absolute',
    right: '6%',
    top: '37%',
  },
  searchBttn: {
    width: '95%',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    color: 'white',
    fontSize: 20,
  },
});

export default styles;