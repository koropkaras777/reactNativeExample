import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 64,
    height: 64,
  },
  title: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 28,
  },
  subtitle: {
    color: 'lightblue',
    fontWeight: 'normal',
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    width: 250,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    color: 'white',
    fontSize: 20,
  },
  bttn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 200,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'lightgreen',
  },
  bttnText: {
    color: 'white',
    fontSize: 20,
  },
  newUser: {
    marginTop: 10,
    color: 'blue',
    fontSize: 16,
  }
});

export default styles;