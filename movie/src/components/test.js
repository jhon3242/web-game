import {useState} from "react";

function Test(){
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const nextValue = e.target.value.toUpperCase();
        setValue(nextValue);
    }

    const handleRemove = (e) => {
        setValue('');
    }

    return (
        <>
            <input onChange={handleChange}/>
            <button onClick={handleRemove}>지우기</button>
        </>
    )
}

export default Test