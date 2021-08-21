import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

export const initializeAuthApp = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
};

export const createUserWithEmailPass = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            res.user.updateProfile({
                displayName: name,
                emailVerified: false,
            });
            return {
                isCreated: res.additionalUserInfo.isNewUser
            };
        })
        .catch(err => {
            return {
                errorCode: err.code,
                errorMsg: err.message
            };
        });
};


export const signInWithEmailPass = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email, } = res.user;
            return {
                name: displayName,
                email,
                isAuthenticated: true,
            };
        })
        .catch(err => {
            return {
                errorCode: err.code,
                errorMsg: err.message
            };
        });
};

export const checkAuthenticate = (setLoggedInUser, setPending) => {
    firebase.auth().onAuthStateChanged(user => {
        user && setLoggedInUser({ isAuthenticated: true, name: user.displayName, email: user.email });
        setPending(false);
    });
};


export const logoutUser = (setLoggedInUser) => {
    firebase.auth().signOut()
        .then(() => {
            setLoggedInUser({});
        })
        .catch(err => {
            alert(err.message);
        });
};