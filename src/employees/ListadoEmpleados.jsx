import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import NavEmpleados from './NavEmpleados';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ListadoEmpleados = () => {
  const urlBase = "http://localhost:8080/v1/employees/info";
  const [employees, setEmployees] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState('');

  const cargarEmpleados = useCallback(async () => {
    try {
      const response = await axios.get(selectedSkill ? `http://localhost:8080/v1/skill-filter/${selectedSkill}` : urlBase);
      setEmployees(response.data);
    } catch (error) {
      console.error('Error al cargar empleados:', error);
      alert('Error al cargar empleados');
    }
  }, [selectedSkill]);

  useEffect(() => {
    cargarEmpleados();
  }, [selectedSkill, cargarEmpleados]); // Ahora solo selectedSkill es la dependencia

  const handleSelectSkill = (skillId) => {
    setSelectedSkill(skillId);
  }

  const deleteEmployee = async (id) => {
    let query = ""
    try {
      query = await axios.delete(`http://localhost:8080/v1/employees/${id}`)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Empleado eliminado con éxito.",
        showConfirmButton: true,
        timer: 2500
      }).then((result) => {
        if (result.isConfirmed) {
          cargarEmpleados()
        }
      });
      
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upps algo salio mal",
        text: "Por favor, intente de nuevo.!",
        footer: `<a href="#">${query.title}</a>`
      });
    }

  }

  return (
    <div className='container'>
      <NavEmpleados onSelectSkill={handleSelectSkill} />
      <div className="container-listado-employees">
        <h2>Listado de Empleados</h2>
        <div className="table-responsive" style={{ maxHeight: '500px', overflowY: 'auto' }}>
          <table className="table table-striped table-hover align-middle">
            <thead className='table-dark'>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Rol</th>
                <th scope="col">Habilidad</th>
                <th scope="col">Descripción</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee, indice) => (
                <tr key={indice}>
                  <th scope="row">{employee.id}</th>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.role}</td>
                  <td>{employee.skill}</td>
                  <td>{employee.description}</td>
                  <td className='text-center'>
                    <div>
                      <Link to={`/editar/${employee.id}`} className='btn btn-warning btn-sm me-3'>Editar</Link>
                    </div>
                  </td>
                  <td className='text-center'>
                    <div>
                      <button onClick={()=> deleteEmployee(employee.id)} className='btn btn-danger btn-sm'>Eliminar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListadoEmpleados;
