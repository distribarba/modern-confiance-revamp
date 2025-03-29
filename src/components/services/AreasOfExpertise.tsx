
import React from "react";

const AreasOfExpertise = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg mb-16">
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-confiance-navy">Áreas de atuação:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2 text-confiance-navy">Administrativo</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Assistentes administrativos</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Recepcionistas</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Secretárias</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Digitadores</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Operadores de telemarketing</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2 text-confiance-navy">Operacional</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Auxiliares de produção</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Operadores de máquinas</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Estoquistas</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Conferentes</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Motoristas</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h4 className="font-bold text-lg mb-2 text-confiance-navy">Técnico</h4>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Técnicos em TI</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Técnicos em manutenção</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Eletricistas</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Técnicos em segurança</span>
            </li>
            <li className="flex items-start">
              <span className="text-confiance-green mr-2">•</span>
              <span>Profissionais de saúde</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AreasOfExpertise;
