import React from 'react';
import '../css/AddCategory.css'
import { useState } from 'react';
import Proptypes from 'prop-types';

const AddCategory = ({ propSetCategories }) => {
    const [inputValue, setInputValue] = useState('');

    const changeInputValue = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            propSetCategories(e => [inputValue, ...e]);
            setInputValue('');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>{inputValue}</h2>
                <input
                    type='text'
                    onChange={(e) => { changeInputValue(e) }}
                    value={inputValue}
                />
            </form>
        </>
        );
};

AddCategory.propTypes = {
    propSetCategories: Proptypes.func.isRequired
};

export default AddCategory;