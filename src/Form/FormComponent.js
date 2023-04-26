import { useState, useRef } from 'react'

const FormComponent = () => {

    const formRef = useRef('');
    const [allValid, setValidation] = useState(false);
    const [isHover, setHover] = useState(false);
    const [isOnRight, setOnRight] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = formRef.current;
        const username = form['username'].value;
        const password = form['password'].value;
        if (allValid) {
            console.log(username, password);
        }
    };

    const handleValidations = () => {
        const form = formRef.current;
        const username = form['username'].value;
        const password = form['password'].value;
        if (username.length >= 8 &&
            /^(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
            setValidation(true);
        }
        else setValidation(false);
    }

    const handleMouseOver = () => {
      
        !allValid && setHover(true);
        setOnRight(!isOnRight)
    };

    const handleMouseOut = () => {
          setHover(false);
     
    };

    const divStyle = {
        transform: isHover ? (isOnRight ? 'translateX(100px)' : 'translateX(-100px)') : 0,
        transition: 'transform 0.3s ease-in-out',
        backgroundColor: '#000000',
        border: 'none',
        color: 'white',
        padding: '12px 24px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '13px',
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '8px',
    };

    const formStyle = {
        display: 'block',
        width: '300px',
        margin: '0 0 1rem 0',
        borderRadius: '5px',
        padding: '0.5rem'

    }

    return (

       
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 200 }} ref={formRef}>
           
                <input type="text" placeholder="username" name="username" style={formStyle} onChange={handleValidations} />
                <input type="password" placeholder="password" name="password" style={formStyle} onChange={handleValidations} />
                <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={divStyle} onClick={handleSubmit}> Submit </button>
            </form>
       
        
        );
};

export default FormComponent