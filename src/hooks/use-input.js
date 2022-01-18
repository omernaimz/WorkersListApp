import { useState } from "react";

const useInput = (validationValue) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [isBlured, setIsBlured] = useState(false);


    const valueIsValid = validationValue(enteredValue)
    const valueHasError = !valueIsValid && isBlured;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const isBluredHandler = () => {
        setIsBlured(true);
    }

    const resetValues = () => {
        setEnteredValue('');
        setIsBlured(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError: valueHasError,
        valueChangeHandler: valueChangeHandler,
        isBluredHandler: isBluredHandler,
        resetValues: resetValues

    };


}

export default useInput;