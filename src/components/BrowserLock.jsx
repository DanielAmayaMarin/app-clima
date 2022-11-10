import React from "react";

export const BrowserLock = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center text-center min-h-screen">
      <p className="font-black mt-2 flex items-center text-gray-800 ">¡BOO!</p>
      <p className="font-black mt-2 flex items-center text-gray-800 ">
        No se puede acceder a este sitio web
      </p>
      <p className="font-black mt-2 flex items-center text-gray-800 ">
        El contenido no es compatibe con este navegador
      </p>
      <div className="font-black mt-2 flex items-center text-gray-800 ">
        <ul>
          <li>
            Si no lo tienes instalado, descargalo{" "}
            <a
              className="text-red-700"
              href="https://www.google.com/intl/es/chrome/"
            >
              desde aqui
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
