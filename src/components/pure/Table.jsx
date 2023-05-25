import React from 'react';
import './Table.css'

const Table = ({ data }) => {
  return (
    <table className='myTable'>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Direccion</th>
          <th>Funciones</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (
          <tr key={index}>
            <td>{item.nombre_ur}</td>
            <td>{item.tipo_unidad}</td>
            <td>{item.direccion_ur}</td>
            <td>
                <button className='btn-table'><i className="bi bi-pencil"></i></button>
                <button className='btn-table'><i className="bi bi-geo-alt-fill"></i></button>
                </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
