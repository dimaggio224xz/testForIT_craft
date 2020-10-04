import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import AllUsers from '../AllUsers';
import SignIn from '../SignIn';
import SignUp from '../SignUp';


// I didn't use redux because technical task hadn't
// this item, and program was small.


const App = (p) => {

    
    return (
        <>
        <div className='wrapper'>
            <Switch>
                <Route exact path='/' component={AllUsers} />

                <Route exact path='/signin' component={SignIn} />

                <Route exact path='/signup' component={SignUp} />
                
                <Redirect to="/"/>
            </Switch>
        </div>
        </>
    )
}

export default App;