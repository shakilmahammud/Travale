import React, { useContext } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

function PrivateRoute({children,...rest}) {
    const [showPlace,setshowPlace,loggedIn]=useContext(userContext) 
    const location=useLocation()
    return (
        <Route
        {...rest}
        render={
            ()=> loggedIn ? (children)
            : (
                <Redirect to={
                    {pathname:"/login",
                        location
                    }
                }
                />
            )
            
        }

        />
    );
};

export default PrivateRoute
