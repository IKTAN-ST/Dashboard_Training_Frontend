import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";

import Login from "./paginas/Login";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import Home from "./paginas/Home";
import EditarPerfil from "./paginas/EditarPerfil";
import CambiarPassword from "./paginas/CambiarPassword";
import Evaluaciones from "./paginas/Evaluaciones";
import OlvidePassword from "./paginas/OlvidePassword";
import NuevoPassword from "./paginas/NuevoPassword";

import { AuthProvider } from "./context/AuthProvider";
import { ClientesProvider } from "./context/ClientesProvider";
import { EvaluacionesProvider } from "./context/EvaluacionesProvider";

//Pruebas
import Mmm from "../src/components/mmm";
import Pruebas from "./paginas/Pruebas";

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
                <Route path="pruebas" element={<Pruebas />} />
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
                <Route path="pruebas" element={<Mmm />} />
              </Route>
            </Routes>
          </EvaluacionesProvider>
        </ClientesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
