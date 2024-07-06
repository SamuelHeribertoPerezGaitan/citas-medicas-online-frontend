    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { Link } from 'react-router-dom'

    const NavEmpleados = ({ onSelectSkill }) => {
        const [skills, setSkills] = useState([]);

        const urlSkills = "http://localhost:8080/v1/skill-names";

        useEffect(() => {
            cargarSkillsNames();
        }, []);

        const cargarSkillsNames = async () => {
            try {
                const response = await axios.get(urlSkills);
                setSkills(response.data);
            } catch (error) {
                console.error('Error al cargar habilidades:', error);
                alert('Error al cargar habilidades');
            }
        }

        const handleSkillChange = (event) => {
            const skillId = event.target.value;
            onSelectSkill(skillId); // Llama a la función del padre para actualizar el skill seleccionado
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/e">Empleados</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/AgregarEmpleado">Agregar</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/features">Buscar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pricing">Pricing</a>
                        </li>
                    </ul>
                    <div className='select-skill'>
                        <select className="form-control" onChange={handleSkillChange}>
                            <option value="">Seleccione una opción</option>
                            {skills.map((skill) => (
                                <option key={skill.id} value={skill.id}>{skill.name}</option>
                            ))}
                        </select>
                    </div>
                    <form className="form-inline my-2 my-lg-0" style={{ display: "flex" }}>
                        <input
                            className="form-control mr-sm-2 ml-2"
                            type="search"
                            placeholder="Buscar"
                            aria-label="Buscar"
                            style={{ border: "1px solid black", borderColor: "rgba(0, 0, 0, 0.1)" }}
                        />
                        <button
                            className="btn btn-success my-2 my-sm-0"
                            type="submit"
                            style={{ boxShadow: "0 0 5px 0 transparent" }}
                        >
                            Buscar
                        </button>
                        <style jsx>{`
                            .btn-success {
                                background-color: green;
                                border-color: green;
                            }
                            .btn-success:hover {
                                box-shadow: 0 0 10px 0 blue;
                            }
                        `}</style>
                    </form>
                </div>
            </nav>
        );
    }

    export default NavEmpleados;
