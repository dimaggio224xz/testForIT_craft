import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

import chackLangth from '../../tools/chackLangth';




const SignIn = () => {

    const history = useHistory();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnDisabledEnter, setBtnDisabledEnter] = useState(false);

    const [errLogin, setErrLogin] = useState(false);
    const [errPassword, setErrPassword] = useState(false);





    const putLogin = (e) => {
        let str = e.target.value;
        if (chackLangth(str)) {
            setLogin(str);

            if (errLogin) setErrLogin(false);
            disabledFunc(str, password)
        }
    }


    const putPassword = (e) => {
        let str = e.target.value;
        if (chackLangth(str)) {
            setPassword(str);

            if (errPassword) setErrPassword(false);
            disabledFunc(str, login)
        }
    }


    const disabledFunc = (a,b) => {
        if (a && b) {
            if (btnDisabled) setBtnDisabled(false);
        } else {
            if (!btnDisabled) setBtnDisabled(true);
        }
    }


    const enterUser = () => {
        setBtnDisabledEnter(true);
    }



    const errLog = errLogin ? 'warn-msg' : 'd-none';
    const errPass = errPassword ? 'warn-msg' : 'd-none';



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
                        <div className={errLog}>Такого логина несуществует!</div>
                    </label>
                </div>


                <div className="form-group">
                    <label>
                        <span>Пароль</span>
                        <input
                            onChange={(e)=> putPassword(e)} value={password}
                            type="password" className="form-control"
                        />
                        <div className={errPass}>Неверный пароль!</div>
                    </label>
                </div>


                <div className='btn-wrap'>

                    <button disabled={btnDisabled || btnDisabledEnter} onClick={()=>enterUser()} className="btn btn-primary mb-3">OK</button>

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