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
        transform: isHover ? (isOnRight ? 'translateX(100px)' : 'translateX(0px)') : 0,
        transition: 'transform 0.3s ease-in-out'
    };

    return (

        <form ref={formRef}>
            <label>
                Username
                <input type="text" name="username" onChange={handleValidations}/>
            </label>    
            <label>
                Password
                <input type="password" name="password" onChange={handleValidations} />
            </label>
            <button onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={divStyle} onClick={handleSubmit}>Submit</button>
        </form>
        
        );
};

export default FormComponent