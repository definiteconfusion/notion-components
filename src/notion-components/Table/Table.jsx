import './Table.css';
import React from 'react';

const Table = ({ data }) => {
    // Extract column headers from the keys of the first data object (if data exists)
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    const renderRow = (row, rowIndex) => {
        return (
            <tr className="table-main" key={rowIndex}>
                {columns.map((col, colIndex) => (
                    <td className="table-item" key={colIndex}>{row[col]}</td>
                ))}
            </tr>
        );
    };

    return (
        <table className="table-main" >
            <thead className="table-main" >
                <tr className="table-main" >
                    {columns.map((col, index) => (
                        <th className="table-item" key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
            <tbody className="table-main" >
                {data.map((row, index) => renderRow(row, index))}
            </tbody>
        </table>
    );
};

export { Table };
