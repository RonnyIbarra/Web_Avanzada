/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Imagene from '../assets/login.png'
import ImageProfile from '../assets/user.jpg'

import appFirebase from '../credenciales.js'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
const auth = getAuth(appFirebase)

const Login = () => {

    const [registrando, setRegistrando] = useState(false)

    const functAutenticacion = async(e) =>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
        
        if(registrando){   
            try {
                await createUserWithEmailAndPassword(auth, correo, contraseña) 
            } catch (error) {
                alert('Asegurese que la contraseña tenga mas de 8 caracteres')
            }
        }else{
            try {
                await signInWithEmailAndPassword(auth, correo, contraseña)
            } catch (error) {
                alert('El correo o la contraseña son incorrectos')
            }
            
        }
    }
    return (
        <div className='container'>
            <div className="row">
                {/* columna mas peque formulario */}
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProfile} alt="" className='estilo-profile' />
                            <form id='myform' onSubmit={functAutenticacion}>
                                <input type="email" placeholder='Ingresar Email' className='cajatexto' id='email'/>
                                <input type="password" placeholder='Ingresar Password'  className='cajatexto'  id='password' />
                                <button className='btnform'>{registrando ? "Registrate" : "Inicia Sesion"}</button>
                            </form>
                            <h4>{registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}<button className='btnswitch' onClick={()=>setRegistrando(!registrando)}>{registrando ? "Iniciar Sesion" : "Registrate"}</button></h4>
                        </div>
                    </div>
                </div>
                {/* columna mas grande*/}
               <div className="col-md-8">
                    <img src={Imagene} alt="" className='tamanio-imagen'/>
                </div> 
            </div>
        </div>
    );
}
export default Login;