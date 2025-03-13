
import { useState } from 'react';
import { Calculator, DollarSign, BarChart3, Users, Clock } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CalculatorsSection = () => {
  const [activeTab, setActiveTab] = useState("custos-funcionarios");
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Calcule Sua Economia</h2>
          <div className="h-1 w-20 bg-confiance-green mx-auto mb-6"></div>
          <p className="text-lg text-gray-700">
            Descubra quanto sua empresa ou condomínio pode economizar ao terceirizar serviços com a Confiance. 
            Use nossas calculadoras para simular cenários reais.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap border-b">
            <button 
              onClick={() => setActiveTab("custos-funcionarios")}
              className={`px-6 py-4 text-sm md:text-base font-medium transition-colors ${
                activeTab === "custos-funcionarios" 
                  ? "text-confiance-green border-b-2 border-confiance-green" 
                  : "text-gray-600 hover:text-confiance-navy"
              }`}
            >
              <Calculator className="inline-block mr-2 h-5 w-5" />
              Custos com Funcionários
            </button>
            <button 
              onClick={() => setActiveTab("tempo-retorno")}
              className={`px-6 py-4 text-sm md:text-base font-medium transition-colors ${
                activeTab === "tempo-retorno" 
                  ? "text-confiance-green border-b-2 border-confiance-green" 
                  : "text-gray-600 hover:text-confiance-navy"
              }`}
            >
              <Clock className="inline-block mr-2 h-5 w-5" />
              Tempo de Retorno
            </button>
            <button 
              onClick={() => setActiveTab("produtividade")}
              className={`px-6 py-4 text-sm md:text-base font-medium transition-colors ${
                activeTab === "produtividade" 
                  ? "text-confiance-green border-b-2 border-confiance-green" 
                  : "text-gray-600 hover:text-confiance-navy"
              }`}
            >
              <BarChart3 className="inline-block mr-2 h-5 w-5" />
              Ganho de Produtividade
            </button>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "custos-funcionarios" && <CustosCalculator />}
            {activeTab === "tempo-retorno" && <TempoRetornoCalculator />}
            {activeTab === "produtividade" && <ProdutividadeCalculator />}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-confiance-navy font-medium mb-6">
            Estes são apenas cálculos estimativos. Fale com nossos consultores para uma análise detalhada
            adaptada à realidade do seu negócio.
          </p>
          <a 
            href="#contato" 
            className="button-primary inline-flex items-center justify-center"
          >
            Solicite um Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  );
};

// Calculadora de Custos com Funcionários
const CustosCalculator = () => {
  const [numFuncionarios, setNumFuncionarios] = useState(5);
  const [salarioMedio, setSalarioMedio] = useState(1500);
  const [resultados, setResultados] = useState({
    custoMensalDireto: 0,
    custoTerceirizado: 0,
    economiaAnual: 0
  });
  
  const calcularCustos = () => {
    // Custo de um funcionário direto (Salário + Encargos e benefícios, aproximadamente 80% do salário)
    const encargos = salarioMedio * 0.80;
    const custoMensalPorFuncionario = salarioMedio + encargos;
    const custoMensalDireto = custoMensalPorFuncionario * numFuncionarios;
    
    // Custo terceirizado (aproximadamente 20-30% mais baixo que contratar diretamente)
    const custoTerceirizado = custoMensalDireto * 0.75; // Economia de 25%
    
    // Economia anual
    const economiaAnual = (custoMensalDireto - custoTerceirizado) * 12;
    
    setResultados({
      custoMensalDireto,
      custoTerceirizado,
      economiaAnual
    });
  };
  
  const chartData = [
    {
      name: 'Contratação Direta',
      valor: resultados.custoMensalDireto,
      fill: '#2F2E69'
    },
    {
      name: 'Terceirização',
      valor: resultados.custoTerceirizado,
      fill: '#00B67A'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Custos com Funcionários</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Funcionários: {numFuncionarios}
          </label>
          <Slider 
            value={[numFuncionarios]} 
            min={1} 
            max={30}
            step={1}
            onValueChange={(value) => setNumFuncionarios(value[0])} 
            className="mt-2"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Salário Médio (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              type="number"
              min="1000"
              value={salarioMedio}
              onChange={(e) => setSalarioMedio(Number(e.target.value))}
              className="pl-10"
            />
          </div>
        </div>
        
        <Button onClick={calcularCustos} className="w-full bg-confiance-navy hover:bg-confiance-navy/90">
          Calcular
        </Button>
      </div>
      
      <div>
        {resultados.economiaAnual > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Resultados</h3>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Custo Mensal']} />
                  <Bar dataKey="valor" name="Custo Mensal (R$)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-lg font-medium text-confiance-green mb-2">
                Economia Anual Estimada: R$ {resultados.economiaAnual.toLocaleString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600">
                Com a terceirização, você pode economizar aproximadamente 25% em custos operacionais,
                além de eliminar preocupações com gestão de pessoal, recrutamento e questões trabalhistas.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <BarChart3 size={60} className="mx-auto mb-4 opacity-20" />
              <p>Preencha os dados e clique em calcular para ver a comparação de custos</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Calculadora de Tempo de Retorno
const TempoRetornoCalculator = () => {
  const [custoInicial, setCustoInicial] = useState(10000);
  const [economiaMensal, setEconomiaMensal] = useState(2000);
  const [resultado, setResultado] = useState({
    meses: 0,
    economiaAnual: 0
  });
  
  const calcularTempoRetorno = () => {
    const meses = Math.ceil(custoInicial / economiaMensal);
    const economiaAnual = economiaMensal * 12 - custoInicial;
    
    setResultado({
      meses,
      economiaAnual
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Tempo de Retorno do Investimento</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Custo Inicial de Transição (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              type="number"
              min="1000"
              value={custoInicial}
              onChange={(e) => setCustoInicial(Number(e.target.value))}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Economia Mensal Estimada (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              type="number"
              min="100"
              value={economiaMensal}
              onChange={(e) => setEconomiaMensal(Number(e.target.value))}
              className="pl-10"
            />
          </div>
        </div>
        
        <Button onClick={calcularTempoRetorno} className="w-full bg-confiance-navy hover:bg-confiance-navy/90">
          Calcular
        </Button>
      </div>
      
      <div>
        {resultado.meses > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Resultados</h3>
            
            <div className="mb-6 p-6 bg-confiance-navy/5 rounded-lg border border-confiance-navy/20">
              <h4 className="text-lg font-medium text-confiance-navy mb-4">Tempo de Retorno:</h4>
              <div className="text-4xl font-bold text-center text-confiance-green">
                {resultado.meses} {resultado.meses === 1 ? 'mês' : 'meses'}
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Seu investimento terá retorno em {resultado.meses} {resultado.meses === 1 ? 'mês' : 'meses'}.
              </p>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-lg font-medium text-confiance-green mb-2">
                Economia após 12 meses: R$ {resultado.economiaAnual.toLocaleString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600">
                Depois de recuperar seu investimento inicial, você continuará economizando
                mensalmente com a terceirização dos serviços.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <Clock size={60} className="mx-auto mb-4 opacity-20" />
              <p>Preencha os dados e clique em calcular para ver o tempo de retorno</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Calculadora de Ganho de Produtividade
const ProdutividadeCalculator = () => {
  const [numFuncionarios, setNumFuncionarios] = useState(10);
  const [horasProdutivas, setHorasProdutivas] = useState(6);
  const [valorHora, setValorHora] = useState(50);
  const [resultado, setResultado] = useState({
    ganhoMensal: 0,
    ganhoAnual: 0,
    ganhoHoras: 0
  });
  
  const calcularProdutividade = () => {
    // Considerando ganho de 1 hora produtiva por funcionário por dia após terceirização
    const ganhoHorasDiarias = numFuncionarios * 1; // 1 hora a mais por funcionário
    const ganhoHorasMensais = ganhoHorasDiarias * 22; // 22 dias úteis por mês
    const ganhoMensal = ganhoHorasMensais * valorHora;
    const ganhoAnual = ganhoMensal * 12;
    
    setResultado({
      ganhoMensal,
      ganhoAnual,
      ganhoHoras: ganhoHorasMensais
    });
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Ganho de Produtividade</h3>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Número de Colaboradores Internos: {numFuncionarios}
          </label>
          <Slider 
            value={[numFuncionarios]} 
            min={1} 
            max={50}
            step={1}
            onValueChange={(value) => setNumFuncionarios(value[0])} 
            className="mt-2"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Horas Produtivas Atuais por Dia: {horasProdutivas}
          </label>
          <Slider 
            value={[horasProdutivas]} 
            min={4} 
            max={8}
            step={0.5}
            onValueChange={(value) => setHorasProdutivas(value[0])} 
            className="mt-2"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Valor Médio da Hora Produtiva (R$)
          </label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              type="number"
              min="20"
              value={valorHora}
              onChange={(e) => setValorHora(Number(e.target.value))}
              className="pl-10"
            />
          </div>
        </div>
        
        <Button onClick={calcularProdutividade} className="w-full bg-confiance-navy hover:bg-confiance-navy/90">
          Calcular
        </Button>
      </div>
      
      <div>
        {resultado.ganhoAnual > 0 ? (
          <div>
            <h3 className="text-xl font-semibold mb-6 text-confiance-navy">Resultados</h3>
            
            <div className="mb-6 p-6 bg-confiance-navy/5 rounded-lg border border-confiance-navy/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Horas Ganhas / Mês</p>
                  <div className="text-2xl font-bold text-confiance-navy">
                    {resultado.ganhoHoras}
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Produtividade</p>
                  <div className="text-2xl font-bold text-confiance-green">
                    +{Math.round(100 / horasProdutivas)}%
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
              <p className="text-lg font-medium text-confiance-green mb-2">
                Valor do Ganho Anual: R$ {resultado.ganhoAnual.toLocaleString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600">
                Ao terceirizar atividades operacionais, sua equipe interna pode focar em atividades estratégicas,
                aumentando a produtividade e gerando mais valor para o negócio.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-500">
              <Users size={60} className="mx-auto mb-4 opacity-20" />
              <p>Preencha os dados e clique em calcular para ver o ganho de produtividade</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorsSection;
