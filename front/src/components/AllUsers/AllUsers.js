import React, { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import OneUserItem from '../OneUserItem';


const AllUsers = () => {


    const logOut = () => {

    }

    const arr =[
        {
            id: 1,
            name: 'Человек 1',
            login: 'Human'
        },{
            id: 2,
            name: 'Тигр23',
            login: 'Ешпук635'
        },{
            id: 3,
            name: 'Somebody',
            login: 'hz kto vobshem'
        },{
            id: 4,
            name: 'FFFFFF name',
            login: 'sgfcbjf987='
        }
    ]

    const content = arr.map(i => <OneUserItem key={i} data={i}/>)

    return (
        <>
        <div className='main-wrap'>
            <nav class="navbar navbar-light bg-dark">
                <div className='container d-flex justify-content-between'>

                    <div class="owner-data">Fавпвп</div>
                    <button onClick={()=> logOut()} className="btn btn-outline-success">Выход</button>

                </div>
            </nav>

            <div className='container'>
                <div className='user-arr-wrap'>
                    {content}
                </div>
            </div>
        </div>
        </>
    )
}

export default AllUsers;