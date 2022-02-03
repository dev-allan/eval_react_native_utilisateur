import {View, Text, Button, FlatList, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import NavBar from '../component/NavBar';
import {getRealm} from '../database/getRealmApp';
import {useIsFocused} from '@react-navigation/native';

export const PageListUser = ({navigation}) => {
  const [user, setUser] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const isFocused = useIsFocused();

  const renderItem = ({item}) => (
    <View style={styles.cardUser}>
      <Text style={styles.textUser}>Nom : {item.lastName}</Text>
      <Text style={styles.textUser}>Prénom : {item.firstName}</Text>
    </View>
  );

  /**
   * permet de communiquer avec la database qui servira a obtenir les utilisateurs
   * @returns le schema d'utilisateur
   */
  const getRealmApp = async () => {
    let realm = await getRealm();
    let thisUser = realm.objects('User');
    return thisUser;
  };

  /**
   * Supprime tous les utilisateurs contenu dans la bdd
   */
  const deleteAllUser = async () => {
    let realm = await getRealm();
    realm.write(() => {
      realm.delete(realm.objects('User'));
    });
    setRefresh(true);
  };

  useEffect(() => {
    getRealmApp().then(data => {
      setUser(data);
    });
    setRefresh(false);
  }, [refresh, isFocused]);

  return (
    <View>
      <NavBar navigation={navigation} />
      <View style={styles.bodyUser}>
        <FlatList
          data={user}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.btnDelete}>
        <Button onPress={deleteAllUser} title="Tout supprimer" color={'red'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnDelete: {
    margin: 50,
  },
  bodyUser: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardUser: {
    backgroundColor: 'orange',
    margin: 10,
    width: 250,
  },
  textUser: {
    fontSize: 25,
  },
});

export default PageListUser;
