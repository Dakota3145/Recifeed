import { StyleSheet, Text, View, FlatList } from 'react-native';


const DATA = [
  {
    id: '1',
    text: 'text1'
  },
  {
    id: '2',
    text: 'text2'
  },
  {
    id: '3',
    text: 'text3'
  },
  {
    id: '4',
    text: 'text4'
  },
  {
    id: '5',
    text: 'text5'
  },
  {
    id: '6',
    text: 'text6'
  },
  {
    id: '7',
    text: 'text7'
  },
  {
    id: '8',
    text: 'text8'
  },
  {
    id: '9',
    text: 'text9'
  },
  {
    id: '10',
    text: 'text10'
  },
]

const Ingredient = ({ title }) => (
    <View style={styles.ingredientListItem}>
      <Text style={styles.ingredientListText}>{title}</Text>
    </View>
);
export default function App() {
  const renderItem = ({ item }) => (
      <Ingredient title={item.text} />
  );

  return (
    <View style={styles.homePage}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Recifeed</Text>
      </View>
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  homePage: {
    flex: 1,
    backgroundColor: '#555555'
  },
  titleBar: {
    borderTopWidth: 30,
    borderTopColor: 'green',
    borderBottomWidth: 30,
    borderBottomColor: 'green',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollViewText: {
    fontSize: 20
  },
  ingredientListItem: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  ingredientListText: {
    fontSize: 20
  }
});
