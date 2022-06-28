import React, { useState } from 'react'

const AddCategory = () => {

    const [values, setValues] = useState("name");

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div> <input type="text" name="newCategory" placeholder="add new category" className="my-1" />
            <button className='btn btn-primary'>Submit</button></div>
    )
}

export default AddCategory