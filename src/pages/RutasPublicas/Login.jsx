import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import clienteAxios from "../../config/axios";
import useAuth from "../../hooks/useAuth";
import Alerta from "../../components/Auxiliar/Alerta";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlerta({
        msg: "Oops! Todos los campos son obligatorios",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clienteAxios.post("/administradores/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/admin");
      setAuth(data);
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <>
      <div class=" flex h-screen bg-[#1f2023]">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-12 w-auto"
                src="https://imgur.com/PWAcTxR.png"
                alt="Iktan"
              />
              <h2 className="mt-6 text-3xl font-bold text-white">
                Panel administrativo
              </h2>
              <p className="mt-2 text-sm text-gray-400">
                Inicio de Sesión{" "}
                <a
                  href="#"
                  className="font-medium text-[#bebebe] hover:text-[#a0a0a0]"
                >
                  exclusivo para miembros con permisos administrativos.
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div>
                <div className="mt-6 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-[#333333]" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#1f2023] text-[#646464]">
                      Inicio de Sesión
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                {msg && <Alerta alerta={alerta} />}
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Correo electronico
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border text-[#797b7e] bg-[#2e2f32] border-[#2e2f32] rounded-md shadow-sm placeholder-[#2e2f32] focus:outline-none focus:ring-[#2e2f32] focus:border-[#2e2f32] sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-400"
                    >
                      Contraseña
                    </label>
                    <div className="mt-1">
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border text-[#797b7e] bg-[#2e2f32] border-[#2e2f32] rounded-md shadow-sm placeholder-[#2e2f32] focus:outline-none focus:ring-[#2e2f32] focus:border-[#2e2f32] sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-gray-300 hover:text-gray-400"
                      >
                        ¿Olvidaste tú contraseña?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#393b43] hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400"
                    >
                      Inicia Sesión
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-5 text-center justify-between"></div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://imgur.com/sAuKhUs.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Login;
