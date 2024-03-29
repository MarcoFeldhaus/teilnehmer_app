import React, { useState } from 'react';
import Home from '../Home/Home';

const Protected = () => {
    const [isVerified, setIsVerified] = useState(false);

    const checkPwd = () => {
        const answer = document.getElementById('password').value;

        if (answer === "Sp@nnBeton") {
            setIsVerified(true);
        } else {
            alert("Sorry, falsches Passwort");
        }
    };

    return (
        <>
            {isVerified ? (
                <Home />
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', padding: 350 }}>
                    <form onSubmit={checkPwd}>
                        <div>
                            <input style={{ borderRadius:'5px', width: '300px', height: '35px', padding: '10px' }} type='password' id='password' name='password' />
                        </div>
                        <div>
                            <button style={{ color:'white', borderRadius:'5px', width: '300px', height: '35px', marginTop: '10px', background:'#0290D3'}}>Passwort eingeben</button>
                        </div>
                    </form>
                </div>
            )
            }
        </>
    );
};

export default Protected;