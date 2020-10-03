import React from 'react';

const OneUserItem = (p) => 
    <>
    <div className='user-item'>
        <div className='user-item-data'>
            <b>
                Логин:
            </b>
            <span>
                {p.data.login}
            </span>
        </div>

        <hr/>

        <div className='user-item-data'>
            <b>
                Имя:
            </b>
            <span>
                {p.data.name}
            </span>
        </div>
    </div>
    </>
;

export default OneUserItem;