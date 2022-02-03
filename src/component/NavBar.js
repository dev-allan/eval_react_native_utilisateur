import {View, Button, StyleSheet} from 'react-native';
import React from 'react';

export const NavBar = ({navigation}) => {
  const handleListUser = () => {
    navigation.navigate('ListUser');
  };

  const handleAddUser = () => {
    navigation.navigate('AddUser');
  };

  return (
    <View style={styles.body}>
      <Button
        title="Ajouter utilisateur"
        onPress={handleAddUser}
        color={'green'}
      />
      <Button title="Liste utilisateur" onPress={handleListUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
  },
});

export default NavBar;
