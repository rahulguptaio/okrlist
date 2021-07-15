import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { fetchAlphabetByIndex } from '../utils'
import './OkrMenuItem.css';
import User from '../assets/user.svg'

const OkrMenuItem = ({ okr }) => {
    if (!okr.objectives) {
        return "-";
    }
    return (
        <div className="okr-objectives">
            {okr.objectives && okr.objectives.map((ok, index) => {
                return <div key={ok.id} className="objective"><img className="vertical-middle" src={User} alt="user" /> <span>{fetchAlphabetByIndex(index % 25)}. {ok.title}</span></div>
            })}
        </div>
    )
}


OkrMenuItem.propTypes = {
    okr: PropTypes.object
};

OkrMenuItem.defaultProps = {
    okr: {}
};

export default memo(OkrMenuItem);