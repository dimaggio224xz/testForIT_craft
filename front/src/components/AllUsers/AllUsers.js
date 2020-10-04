import React, { useState, useEffect } from 'react';
import jwtDecode from "jwt-decode";
import OneUserItem from '../OneUserItem';
import Spinner from '../Spinner';



const AllUsers = (props) => {

    const [usersArr, setUsersArr] = useState(null);




    // const arr =[
    //     {
    //         id: 1,
    //         name: 'Человек 1',
    //         login: 'Human'
    //     },{
    //         id: 2,
    //         name: 'Тигр23',
    //         login: 'Ешпук635'
    //     },{
    //         id: 3,
    //         name: 'Somebody',
    //         login: 'hz kto vobshem'
    //     },{
    //         id: 4,
    //         name: 'FFFFFF name',
    //         login: 'sgfcbjf987='
    //     }
    // ]


    const logOut = () => {
        
    }



    const content = usersArr ?  usersArr.map(i => <OneUserItem key={i.id} data={i}/>)  :  <Spinner/>;

    return (
        <>
        <div className='main-wrap'>
            <nav className="navbar navbar-light bg-dark">
                <div className='container d-flex justify-content-between'>

                    <div className="nav-data">

                        <div className='nav-data-key'>
                            Логин:
                        </div>
                        <div className='nav-data-value'>
                            {'JHKfgf'}
                        </div>
                        <div className='nav-data-key'>
                            Имя:
                        </div>
                        <div className='nav-data-value'>
                            {'iuhh'}
                        </div>

                    </div>

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