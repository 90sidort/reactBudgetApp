import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid) => ({
    type:'LOGIN',
    uid
})

export const logout = () => ({
    type:'LOGOUT'
})

export const startLogin = () => {
    return() => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLogUser = () => {
    return() => {
        return firebase.auth().signInWithEmailAndPassword('test@test.com', 'Celtic88')
    }
}

export const startLogOut = () => {
    return () => {
        return firebase.auth().signOut()
    }
}