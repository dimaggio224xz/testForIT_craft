import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import chackLangth from '../../tools/chackLangth';


const SignIn = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const putLogin = (e) => {
        if (chackLangth(e)) {
            setLogin(e.target.value)
        }
    }

    const putPassword = (e) => {
        if (chackLangth(e)) {
            setPassword(e.target.value)
        }
    }

    return (
        <>
        <div className='container d-flex justify-content-center'>
            <div className='enter-form'>
                <h2>Вход</h2>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input
                            onChange={(e)=> putLogin(e)} value={login}
                            type="text" className="form-control"
                        />
                        <div className='warn-msg'>Такого логина несуществует!</div>
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input
                            onChange={(e)=> putPassword(e)} value={password}
                            type="password" className="form-control"
                        />
                        <div className='warn-msg'>Неправильный пароль!</div>
                    </label>
                </div>


                <div className='btn-wrap'>

                    <button className="btn btn-primary mb-3">OK</button>

                    <Link to='/signup' className='d-block'>
                        <button className="btn btn-outline-dark form-btn">Зарегистрироваться</button>
                    </Link>

                </div>
            </div>
        </div>
        </>
    )
}

export default SignIn;