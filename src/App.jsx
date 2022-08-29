import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./pages/RutasPublicas/Login";
import ConfirmarCuenta from "./pages/RutasPublicas/ConfirmarCuenta";
import Home from "./pages/Navbar/Home";
import EditarPerfil from "./pages/Configuracion/EditarPerfil";
import CambiarPassword from "./pages/Configuracion/CambiarPassword";
import Evaluaciones from "./pages/Evaluaciones";
import OlvidePassword from "./pages/Configuracion/OlvidePassword";
import NuevoPassword from "./pages/Configuracion/NuevoPassword";
import AlmacenEvaluaciones from "./pages/AlmacenEvaluaciones";

import { AuthProvider } from "./context/AuthProvider";
import { ClientesProvider } from "./context/ClientesProvider";
import { EvaluacionesProvider } from "./context/EvaluacionesProvider";
import CrearConstancia from "./pages/Constancias/CrearConstancia";
import SubirSTPS from "./pages/Navbar/SubirSTPS";
import FormularioIKTAN from "./pages/Constancias/FormularioIKTAN";

//Pruebas

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ClientesProvider>
          <EvaluacionesProvider>
            <Routes>
              {/* Rutas del Area Publica */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="olvide-password" element={<OlvidePassword />} />
                <Route
                  path="olvide-password/:token"
                  element={<NuevoPassword />}
                />
                <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
              </Route>

              {/* Rutas del Area Privada */}
              <Route path="/admin" element={<RutaProtegida />}>
                <Route index element={<Home />} />
                <Route path="configuracion" element={<EditarPerfil />} />
                <Route path="crear-cuestionario" element={<Evaluaciones />} />
                <Route path="cambiar-password" element={<CambiarPassword />} />
                <Route path="constancias-iktan" element={<FormularioIKTAN />} />
                <Route
                  path="almacen-evaluaciones"
                  element={<AlmacenEvaluaciones />}
                />
                <Route path="crear-constancia" element={<CrearConstancia />} />
                <Route path="subir-stps" element={<SubirSTPS />} />
              </Route>
            </Routes>
          </EvaluacionesProvider>
        </ClientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
