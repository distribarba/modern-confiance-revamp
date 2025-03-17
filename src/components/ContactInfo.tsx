
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-confiance-navy rounded-xl shadow-lg p-8 text-white">
      <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
      
      <div className="space-y-8">
        <div className="flex items-start">
          <div className="bg-confiance-green rounded-full p-3 mr-4">
            <MapPin size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Endereço</h4>
            <p className="text-gray-200">
              Rua Ignácio Marins Coutinho, 47 - sala 704<br />
              Jardim Imperial - Itaboraí, RJ<br />
              CEP 24.800-255
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-confiance-green rounded-full p-3 mr-4">
            <Phone size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Telefone</h4>
            <p className="text-gray-200">(21) 3728-8336</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-confiance-green rounded-full p-3 mr-4">
            <Mail size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">E-mail</h4>
            <p className="text-gray-200">comercial@confiance.rio</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="bg-confiance-green rounded-full p-3 mr-4">
            <Clock size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">Horário de Atendimento</h4>
            <p className="text-gray-200">Segunda à Sexta, 8:00 - 18:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
