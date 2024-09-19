// src/DataTable.js
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Container, Spinner } from 'react-bootstrap';

const columns = [
    {
        name: 'User ID',
        selector: row => row.id,
        width: '100px',
    },
    {
        name: 'Title',
        selector: row => row.title,
        width: '500px',
    },
    {
        name: 'Body',
        selector: row => row.body,
        width: '500px',
    },
];

const DataTableComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [rowsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const result = await response.json();
            setData(result);
            setLoading(false);
        };

        fetchData();
    }, []);

    const totalRows = data.length;
    const handlePageChange = (page) => {
        setPage(page);
    };

    const currentData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

    return (
    <Container style={{marginBottom:'20px'}} >
            {loading ? (
                <Spinner animation="border" variant="primary" />
            ) : (
                <DataTable
                    columns={columns}
                    data={currentData} 
                    pagination
                    paginationServer
                    paginationTotalRows={totalRows}
                    onChangePage={handlePageChange}
                    paginationPerPage={rowsPerPage}
                    highlightOnHover
                    paginationComponentOptions={{
                        noRowsPerPage: true,
                    }}
                />
            )}
        </Container>
    );
};

export default DataTableComponent;
