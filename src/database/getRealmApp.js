import Realm from 'realm';
import {UserSchema} from './schemas/UserSchema';

export const getRealm = async () => {
  try {
    const realm = await Realm.open({
      path: 'UserDb',
      schema: [UserSchema],
      schemaVersion: 1,
    });
    return realm;
  } catch (err) {
    console.error('Failed to open the realm', err.message);
  }
};
