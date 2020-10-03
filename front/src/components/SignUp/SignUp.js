import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import chackLangth from '../../tools/chackLangth';



const SignUp = () => {

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const putName = (e) => {
        if (chackLangth(e)) {
            setName(e.target.value)
        }
    }

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


    const putPasswordTwo = (e) => {
        if (chackLangth(e)) {
            setPasswordTwo(e.target.value)
        }
    }


    return (
        <>
        <div className='container d-flex justify-content-center'>

            <div className='enter-form'>

                <div className='d-flex w-100 justify-content-between'>
                    <h2>Регистрация</h2>
                    <Link to='/'>
                        <button type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Link>
                </div>
                

                <div className="form-group">
                    <label>
                        <span>Имя</span>
                        <input
                            onChange={(e)=> putName(e)} value={name}
                            type="text" className="form-control"
                        />
                        <div className='warn-msg'>Некоректное имя!</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input
                            onChange={(e)=> putLogin(e)} value={login}
                            type="text" className="form-control"
                        />
                        <div className='warn-msg'>Некоректное имя!</div>
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input
                            onChange={(e)=> putPassword(e)} value={password}
                            type="password" className="form-control"
                        />
                        <div className='warn-msg'>Некоректный пароль!</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <span>Подтверждение Пароля</span>
                        <input
                            onChange={(e)=> putPasswordTwo(e)} value={passwordTwo}
                            type="password" className="form-control"
                        />
                        <div className='warn-msg'>Пароли несовпадают!</div>
                    </label>
                </div>

                <div className='btn-wrap'>
                    <button className="btn btn-success form-btn">OK</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default SignUp;