
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './plantilla/header';
import Sidebar from './plantilla/Sidebar';
import Dashboard from './plantilla/Dashboard';
import ListadoEmpleados from './employees/ListadoEmpleados';
import './css/employees.css'
import AgregarEmpleado from './employees/AgregarEmpleado';
import EditarEmpleado from './employees/EditarEmpleado';
const App = () => {

    return (
        <Router>
            <div>
                <Header />
                <div className="container" style={{paddingTop: "68px"}}>
                    <div className="row">
                        <div className="col-md-3" style={{position: "fixed"}}>
                            <Sidebar />
                        </div>
                        <div className="col-md-9" style={{position: "fixed", left: "340px"}}>
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/ListadoEmpleados" element={<ListadoEmpleados />} />
                                <Route path="/AgregarEmpleado" element={<AgregarEmpleado />} />
                                <Route path="/editar/:id" element={<EditarEmpleado />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
