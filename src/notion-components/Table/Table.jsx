import './Table.css';
import React from 'react';

const Table = ({ data, mode }) => {
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const renderRow = (row, rowIndex) => {
        return (
            <tr className={`table-main-${mode}`} key={rowIndex}>
                {columns.map((col, colIndex) => (
                    <td className={`table-item-${mode}`} key={colIndex}>{row[col]}</td>
                ))}
            </tr>
        );
    };

    return (
        <table className={`table-main-${mode}`} >
            <tbody className={`table-main-${mode}`} >
                {data.map((row, index) => renderRow(row, index))}
            </tbody>
        </table>
    );
};

export { Table };
