import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else {
            setError('')
        }
    }

    const handlePasswordOnChange = e => {
        setPassword(e.target.value);

        // if (password.length < 6) {
        //     setError('Password must be 6 characters or longer')
        // }
        // else {
        //     setError('')
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder='Email' required />
                <br />
                <input type="password" onChange={handlePasswordOnChange} defaultValue={password} name="password" placeholder='Password' required />
                <br />
                <input type="submit" value="Submit" />
                <p style={{ color: 'red' }}>
                    <small>{error}</small>
                </p>
            </form>
        </div>
    );
};

export default ControlledField;