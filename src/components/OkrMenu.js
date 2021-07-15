import React, { memo } from 'react';
import PropTypes from 'prop-types';
import User from '../assets/user.svg'

const OkrMenu = ({ okr, index }) => {
    if (!okr.id) { return `${index + 1} - ` }
    return (<div key={okr.id}><img className="vertical-middle" src={User} alt="user" /><span> {index + 1}. {okr.title}</span></div>)
}

OkrMenu.propTypes = {
    okr: PropTypes.object,
    index: PropTypes.number
};

OkrMenu.defaultProps = {
    okr: {},
    index: 0
};

export default memo(OkrMenu);