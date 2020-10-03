import React, { useState, useEffect } from 'react';

import AllUsers from '../AllUsers';
import SignIn from '../SignIn';
import SignUp from '../SignUp';


// I didn't use redux because technical task hadn't
// this item, and program was small.

const App = () => {


    return (
        <>
        <div className='wrapper'>
            <AllUsers/>
        </div>
        </>
    )
}

export default App;