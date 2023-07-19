import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
  item: {
    backgroundColor: 'lightblue',
    width: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  itemTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  itemImage: {
    width: '100%',
    height: 350,
  },
  itemImageDblclick: {
    width: '100%',
    height: 350,
    backgroundColor: 'red',
  },
  itemMenu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  statistics: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  statisticsText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    paddingLeft: 5,
  },
  date: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 10,
  },
  dateText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 12,
  },
  liked: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export default styles;