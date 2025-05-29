import React from 'react';

const SimpleForm = () => {

    const handleForm = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input name='name' placeholder='Your Name' type="text" />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
};

export default SimpleForm;