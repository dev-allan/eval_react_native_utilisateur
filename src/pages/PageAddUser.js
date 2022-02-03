import {View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import NavBar from '../component/NavBar';
import {getRealm} from '../database/getRealmApp';
import 'react-native-get-random-values';
import {ObjectID} from 'bson';

export const PageAddUser = ({navigation}) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState();

  /**
   * Permet de communique avec la database qui servira pour l'ajout d'un utilisateur
   * @returns realm
   */
  const getRealmApp = async () => {
    let realm = await getRealm();
    return realm;
  };

  const handleNom = value => {
    setNom(value);
  };

  const handlePrenom = value => {
    setPrenom(value);
  };

  /**
   * Envoie un utilisateur dans la database et retourne sur l'écran précédent
   */
  const handleSubmit = async () => {
    const id = ObjectID();
    let data = {
      _id: id,
      lastName: nom,
      firstName: prenom,
    };
    let user;
    let realm = await getRealmApp();
    realm.write(() => {
      user = realm.create('User', data);
    });
    navigation.goBack();
  };

  return (
    <View>
      <NavBar navigation={navigation} />
      <View>
        <TextInput placeholder="nom" onChangeText={handleNom} />
        <TextInput placeholder="prenom" onChangeText={handlePrenom} />
      </View>
      <Button title="envoyer" onPress={handleSubmit} />
    </View>
  );
};

export default PageAddUser;
