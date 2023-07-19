import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    width: '100%',
    height: '100%',
  },
  scrlView: {
    width: '100%',
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 100,
  },
  header: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'lightblue',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  header__text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  header__text__link: {
    color: '#ff5959',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 70,
  },
  container__user: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container__user__avatar: {
    width: 96,
    height: 96,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  container__user__data: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 15,
  },
  container__user__data__component: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container__user__data__component__num: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  container__user__data__component__text: {
    color: 'white',
    fontSize: 16,
  },
  container__edit: {
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  container__edit__bttn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 6,
  },
  container__edit__bttn__text: {
    color: 'white',
  },
  container__items: {
    width: '100%',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default styles;