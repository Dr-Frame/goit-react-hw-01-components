import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ transaction }) => 
    (
        <table className="transaction-history">
            <thead>
                <tr className={styles.header}>
                <th className={styles["header__item"]}>Type</th>
                <th className={styles["header__item"]}>Amount</th>
                <th className={styles["header__item"]}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map(({ id, type, amount, currency }) => (
                    <tr key={id} className={styles.list}>
                        <td className={styles["list__item"]}>{type}</td>
                        <td className={styles["list__item"]}>{amount}</td>
                        <td className={styles["list__item"]}>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )


TransactionHistory.propTypes = {
    transaction: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,  
}

export default TransactionHistory;