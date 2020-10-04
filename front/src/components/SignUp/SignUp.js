import React, { useState } from 'react';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

import chackLangth from '../../tools/chackLangth';




const SignUp = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');

    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnDisabledEnter, setBtnDisabledEnter] = useState(false);

    const [errLogin, setErrLogin] = useState(false);
    const [errPassword, setErrPassword] = useState(false);
    const [errPasswordTwo, setErrPasswordTwo] = useState(false);





    const putName = (e) => {
        const str = e.target.value;
        if (chackLangth(str)) {
            setName(str);

            disabledFunc(str, login, password, passwordTwo);
        }
    }

    const putLogin = (e) => {
        const str = e.target.value;
        if (chackLangth(str)) {
            setLogin(str);

            disabledFunc(name, str, password, passwordTwo);
        }
    }

    const putPassword = (e) => {
        const str = e.target.value;
        if (chackLangth(str)) {
            setPassword(str);

            if (errPasswordTwo) setErrPasswordTwo(false);
            disabledFunc(name, login, str, passwordTwo);
        }
    }


    const putPasswordTwo = (e) => {
        const str = e.target.value;
        if (chackLangth(str)) {
            setPasswordTwo(str);

            if (errPasswordTwo) setErrPasswordTwo(false);
            disabledFunc(name, login, password, str);
        }
    }




    const disabledFunc = (a,b,c,d) => {
        if (a && b && c && d) {
            if (btnDisabled) setBtnDisabled(false);
        } else {
            if (!btnDisabled) setBtnDisabled(true);
        }
    }



    const registerUser = () => {
        if (password !== passwordTwo) {
            setErrPasswordTwo(true);
        }
        
        else {
            setBtnDisabledEnter(true);
        }
    }


    const errLog = errLogin ? 'warn-msg' : 'd-none';
    const errPass = errPassword ? 'warn-msg' : 'd-none';
    const errPass2 = errPasswordTwo ? 'warn-msg' : 'd-none';



    return (
        <>
        <div className='container d-flex justify-content-center'>

            <div className='enter-form'>

                <div className='d-flex w-100 justify-content-between'>
                    <h2>Регистрация</h2>
                    <Link to='/signin'>
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
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        <span>Логин</span>
                        <input
                            onChange={(e)=> putLogin(e)} value={login}
                            type="text" className="form-control"
                        />
                        <div className={errLog}>Такой логин уже занят!</div>
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

                <div className="form-group">
                    <label>
                        <span>Подтверждение Пароля</span>
                        <input
                            onChange={(e)=> putPasswordTwo(e)} value={passwordTwo}
                            type="password" className="form-control"
                        />
                        <div className={errPass2}>Пароли несовпадают!</div>
                    </label>
                </div>

                <div className='btn-wrap'>
                    <button disabled={btnDisabled || btnDisabledEnter} onClick={()=>registerUser()} className="btn btn-success form-btn">OK</button>
                </div>

            </div>
        </div>
        </>
    )
}

export default SignUp;