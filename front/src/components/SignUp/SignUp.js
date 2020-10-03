import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {


    return (
        <>
        <div className='container'>
            <div className='enter-form'>
                <h2>Вход</h2>

                <div className="form-group">
                    <label>
                        <span>Имя</span>
                        <input type="text" className="form-control"/>

                    </label>
                </div>

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

                <div className="form-group">
                    <label>
                        <span>Подтверждение Пароля</span>
                        <input type="password" className="form-control"/>
                    </label>
                </div>

                <button className="btn btn-success form-btn">OK</button>

            </div>
        </div>
        </>
    )
}

export default SignUp;