import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

import chackLangth from '../../tools/chackLangth';



const SignUp = () => {


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
                        <input type="text" className="form-control"/>
                        <div className='warn-msg'>Некоректное имя!</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input type="text" className="form-control"/>
                        <div className='warn-msg'>Некоректное имя!</div>
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input type="password" className="form-control"/>
                        <div className='warn-msg'>Некоректный пароль!</div>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <span>Подтверждение Пароля</span>
                        <input type="password" className="form-control"/>
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