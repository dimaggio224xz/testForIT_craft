import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const SignIn = () => {


    return (
        <>
        <div className='container'>
            <div className='enter-form'>
                <h2>Вход</h2>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input type="text" className="form-control"/>

                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input type="password" className="form-control"/>
                    </label>
                </div>


                <div className='flex-column'>

                    <button className="btn btn-primary form-btn">OK</button>

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