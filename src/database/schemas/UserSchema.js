export const UserSchema = {
  name: 'User',
  properties: {
    _id: 'objectId',
    lastName: 'string?',
    firstName: 'string?',
  },
  primaryKey: '_id',
};
