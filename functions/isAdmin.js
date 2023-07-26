/* eslint-disable @typescript-eslint/no-var-requires */
const { getAuth } = require('firebase-admin/auth');

const checkIsAdmin = async (currentUserId) => {
  const currentUserRecord = await getAuth().getUser(currentUserId);
  const isAdmin = currentUserRecord.customClaims['admin'] === true;

  return isAdmin;
};

module.exports = checkIsAdmin;
