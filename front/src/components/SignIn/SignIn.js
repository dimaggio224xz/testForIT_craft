import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import chackLangth from '../../tools/chackLangth';


const SignIn = () => {


    return (
        <>
        <div className='container d-flex justify-content-center'>
            <div className='enter-form'>
                <h2>Вход</h2>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input type="text" className="form-control"/>
                        <div className='warn-msg'>Такого логина несуществует!</div>
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input type="password" className="form-control"/>
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