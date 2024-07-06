import React, { useState, useEffect } from 'react';
import '../css/employees.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AgregarEmpleado = () => {

  const urlRoles = "http://localhost:8080/v1/role/info"

  const urlBase = "http://localhost:8080/v1/employees"

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dui: '',
    address: '',
    email: '',
    telephone: '',
    password: '',
    skill_id: '',
    role_id: ''
  });

  const [skills, setSkills] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    cargarSkills();
    loadingRoles();
  }, []);

  const cargarSkills = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/skill-names');
      setSkills(response.data);
      console.log(response.data)
    } catch (error) {
      alert("Skill ")
      Swal.fire({
        icon: "error",
        title: "Upps algo salio mal",
        text: "Por favor, intente de nuevo.!",
        footer: '<a href="#"></a>'
      });
    }
  }


  const loadingRoles = async () => {
    const result = await axios.get(urlRoles)
    setRoles(result.data)
  }

  
  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      // Enviar los datos a un servidor
      console.log('Formulario enviado:', formData);
      await axios.post(urlBase, formData);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Empleado agregado con éxito.",
        showConfirmButton: true,
        timer: 2500
      }).then((result) => {
        if (result.isConfirmed) {

        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Upps algo salio mal",
        text: "Por favor, intente de nuevo.!",
        footer: '<a href="#"></a>'
      });
    }

  };

  return (
    <>
      <div class="container mt-3">
        <Link to="/ListadoEmpleados" class="btn btn-warning btn-sm" style={{ fontSize: 20 }}>Regresar</Link>
      </div>
      <p className="title text-center" href="/">Agregar nuevo Empleado</p>
      <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          className="form-input"
          id="first-name"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="last-name"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="dui"
          name="dui"
          placeholder="DUI"
          value={formData.dui}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="telephone"
          name="telephone"
          placeholder="Phone number"
          value={formData.telephone}
          onChange={(e) => onInputChange(e)}
        /><br />
        <input
          type="text"
          className="form-input"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => onInputChange(e)}
        /><br />

        <div className="select-wrapper">
          <select
            name="skill_id"
            className="select2"
            value={formData.skill_id}
            onChange={(e) => onInputChange(e)}
          >
            <option value="">Seleccione una Skill</option>
            {skills.map((skill) => (
              <option key={skill.id} value={skill.id}>{skill.name}</option>
            ))}
          </select>
        </div>
        <div className="select-wrapper">
          <select
            name="role_id"
            className="select2"
            value={formData.role_id}
            onChange={(e) => onInputChange(e)}
          >
            <option value="">Seleccione un Role</option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>
        </div>

        <button className="submit" type="submit">Agregar</button>
      </form>
    </>
  );
}

export default AgregarEmpleado;
