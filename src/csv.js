import React, { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';

const Button = (url) => (
    <button onClick={() => alert("perfil de:" + url)} >Ver perfil</button>
);

function LeaderBoard({ data }) {


    const column_keys = {
        'Nombre': "",
        'Reto1': "",
        'Reto2': "",
        'Reto3': "",
        "Link": "",
    }

    const columns = Object.keys(column_keys).map((key) => {
        if (key === "Link") {
            return {
                name: key,
                button: true,
                cell: () => <Button url={key}>{key}</Button>,
            }
        } else {
            return {
                name: key,
                selector: key
            }
        }
    });

    data.map((key) => {
        console.log(key);
    });
    return (
        <div style={{ padding: "10px 20px 10px 20px" }}>
            <DataTable
                pagination
                highlightOnHover
                columns={columns}
                data={data}
            />
        </div>
    );
}

export default LeaderBoard;



// buscar ofertas de trabajo en google trends 
