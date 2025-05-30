import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnchange] = useInputField('');
    const [email, emailOnchange] = useInputField('');
    const [password, passwordOnchange] = useInputField('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Submit', name, email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' onChange={nameOnchange} defaultValue={name} />
                <br />
                <input type="email" name="email" onChange={emailOnchange} defaultValue={email} placeholder='Email' />
                <br />
                <input type="password" name="password" placeholder='Password' defaultValue={password} onChange={passwordOnchange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;