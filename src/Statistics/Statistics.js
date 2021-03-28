import React from 'react';
import PropTypes from 'prop-types';
import './Statistics.css'

function creatRandomRGB() {
    return (Math.floor(Math.random() * (255 - 1) + 1));
};

const Statistics = ({title, data}) => (
        <section className="statistics">
            <h2 className="title">{title}</h2>

            <ul className="stat-list">
                {data.map(({ id, label, percentage }) => (
                    <li key={id} className="item" style={{
                        backgroundColor: `rgb(${creatRandomRGB()},${creatRandomRGB()},${creatRandomRGB()})`,
                    }}>
                        <span className="label">{label}</span>
                        <span className="percentage">{percentage}%</span>
                    </li>
                ))}  
            </ul>
        </section>
    )


Statistics.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired
}

export default Statistics;