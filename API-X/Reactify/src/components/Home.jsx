/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import appFirebase from '../credenciales.js'
import { getAuth, signOut } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Home = ({correoUsuario}) => {
    return (
        <div className="home-container">
            <div className="welcome-box">
                <h1>Bienvenido, {correoUsuario}</h1>
                <button className="btn btn-primary" onClick={() => signOut(auth)}>
                Logout
                </button>
            </div>
        </div>
    );
}
export default Home;