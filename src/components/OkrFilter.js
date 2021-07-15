import React from 'react';
import PropTypes from 'prop-types';

const OkrFilter = ({ value, categories, callback }) => {

    return (
        <div className="filter-okr">
            <select value={value} onChange={(e) => {
                callback(e.target.value)
            }}>
                <option value=""> ALL </option>
                {
                    categories.map((category) => {
                        return <option key={category} value={category}>{category}</option>
                    })
                }
            </select >
        </div>
    )
}



OkrFilter.propTypes = {
    value: PropTypes.string,
    categories: PropTypes.array,
    callback: PropTypes.func
};

OkrFilter.defaultProps = {
    value: '',
    categories: [],
    callback: () => { }
};

export default OkrFilter;