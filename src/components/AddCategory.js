import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputaValue] = useState('');

    const handleInputChange = (e) => {
        setInputaValue(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length >2)
        {
            setCategories(cats => [inputValue, ...cats]);
            setInputaValue('');
        }
        
    };

    return (
        <form onSubmit={ handleSumbit }>
            <input
             type="text"
             value={ inputValue }
             onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}