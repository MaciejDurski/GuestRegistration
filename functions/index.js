/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require('firebase-functions');
const { getAuth } = require('firebase-admin/auth');
const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin');
const checkIsAdmin = require('./isAdmin.js');
initializeApp();

exports.addAdminRole = functions.https.onCall(async (request, context) => {
  try {
    const isAdmin = await checkIsAdmin(context.auth.uid);

    if (isAdmin) {
      await admin.auth().setCustomUserClaims(request, {
        admin: true,
      });
    } else {
      console.error('USER IS NOT AN ADMIN');
    }
  } catch (error) {
    console.error(error);
  }
});

exports.removeAdminRole = functions.https.onCall(async (request, context) => {
  try {
    const isAdmin = await checkIsAdmin(context.auth.uid);

    if (isAdmin) {
      await admin.auth().setCustomUserClaims(request, {
        admin: false,
      });
    } else {
      console.error('USER IS NOT AN ADMIN');
    }
  } catch (error) {
    console.error(error);
  }
});

exports.createUser = functions.https.onCall(async (request, context) => {
  try {
    const isAdmin = await checkIsAdmin(context.auth.uid);

    if (isAdmin) {
      const createdUser = await getAuth().createUser({
        displayName: `${request.firstName} ${request.lastName}`,
        email: request.email,
        phoneNumber: request.tel,
        password: request.password,
      });

      if (request.isAdmin) {
        await admin.auth().setCustomUserClaims(createdUser.uid, {
          admin: true,
        });
      } else {
        await admin.auth().setCustomUserClaims(createdUser.uid, {
          admin: false,
        });
      }

      return createdUser;
    } else {
      console.error('USER IS NOT AN ADMIN');
    }
  } catch (error) {
    console.error(error);
  }
});

exports.updateUser = functions.https.onCall(async (request, context) => {
  try {
    const isAdmin = await checkIsAdmin(context.auth.uid);

    if (isAdmin) {
      const updatedUser = await getAuth().updateUser(request.id, {
        displayName: `${request.firstName} ${request.lastName}`,
        email: request.email,
        phoneNumber: request.tel,
      });

      if (request.isAdmin) {
        await admin.auth().setCustomUserClaims(request.id, {
          admin: true,
        });
        updatedUser.customClaims.admin = true;
      } else {
        await admin.auth().setCustomUserClaims(request.id, {
          admin: false,
        });
        updatedUser.customClaims.admin = false;
      }

      return updatedUser;
    } else {
      console.error('USER IS NOT AN ADMIN');
    }
  } catch (error) {
    console.error(error);
  }
});

exports.deleteUser = functions.https.onCall(async (request, context) => {
  try {
    const isAdmin = await checkIsAdmin(context.auth.uid);

    if (isAdmin) {
      const deletedUser = await getAuth().deleteUser(request);
      return deletedUser;
    } else {
      console.error('USER IS NOT AN ADMIN');
    }
  } catch (error) {
    console.error(error);
  }
});
