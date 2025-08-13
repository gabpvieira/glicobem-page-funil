import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Clock, Shield, ShoppingCart, Star } from 'lucide-react';

import { utmTracker } from '@/utils/UTMTracker';

interface Step6Props {
  onNext: () => void;
}

const Step6 = ({ onNext }: Step6Props) => {
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutos
  const [barsLoaded, setBarsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    utmTracker.trackFunnelProgress(6, 'viewed');

    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Trigger bars animation only once
    const barsTimer = setTimeout(() => {
      setBarsLoaded(true);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(barsTimer);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    console.log('🔊 Click sound');
    
    utmTracker.trackFunnelProgress(6, 'next');
    onNext();
  };

  const features = [
    'Mais de 130 receitas doces e salgadas',
    'Receitas testadas por diabéticos reais',
    'Pães, bolos e sobremesas liberadas',
    'Guia de substituições inteligentes',
    'Chás naturais para controle glicêmico',
    'Acesso vitalício ao App Exclusivo',
    'Atualizações gratuitas',
    'Garantia de 30 dias'
  ];

  const ResultsChart = () => {
    const data = [
      {
        metric: 'Glicose em Jejum',
        before: 185,
        after: 95,
        unit: 'mg/dl',
        target: '< 100',
        improvement: '-49%'
      },
      {
        metric: 'Glicose Pós-Refeição',
        before: 280,
        after: 140,
        unit: 'mg/dl',
        target: '< 180',
        improvement: '-50%'
      },
      {
        metric: 'Hemoglobina Glicada',
        before: 9.8,
        after: 6.5,
        unit: '%',
        target: '< 7.0',
        improvement: '-34%'
      }
    ];

    return (
      <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-montserrat">
            Resultados Reais em 45 Dias
          </h3>
          <p className="text-gray-600 font-montserrat text-lg">
            Veja a transformação comprovada de nossos usuários
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-inner">
          <div className="space-y-8">
            {data.map((item, index) => (
              <div key={item.metric} className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-gray-800 font-montserrat text-lg">
                    {item.metric}
                  </h4>
                  <div className="text-right">
                    <div className="text-sm text-gray-600 font-montserrat">Meta: {item.target} {item.unit}</div>
                    <div className="text-lg font-bold text-green-600 font-montserrat">{item.improvement}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Before Bar */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-semibold text-red-600 font-montserrat">Antes</div>
                    <div className="flex-1 bg-red-100 rounded-lg h-10 relative overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-lg flex items-center justify-end pr-4 transition-all duration-1500 ease-out"
                        style={{
                          width: barsLoaded ? '90%' : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <span className="text-white font-bold font-montserrat">
                          {item.before} {item.unit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* After Bar */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 text-sm font-semibold text-green-600 font-montserrat">Depois</div>
                    <div className="flex-1 bg-green-100 rounded-lg h-10 relative overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-lg flex items-center justify-end pr-4 transition-all duration-1500 ease-out"
                        style={{
                          width: barsLoaded ? `${Math.min((item.after / item.before) * 90, 60)}%` : '0%',
                          transitionDelay: `${index * 200 + 300}ms`
                        }}
                      >
                        <span className="text-white font-bold font-montserrat">
                          {item.after} {item.unit}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-200">
            <div className="text-center p-6 bg-red-50 rounded-xl">
              <div className="text-4xl mb-3">⚠️</div>
              <div className="text-xl font-bold text-red-600 font-montserrat mb-1">Descontrolada</div>
              <div className="text-sm text-gray-600 font-montserrat">Situação anterior</div>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">📱</div>
              <div className="text-xl font-bold text-blue-600 font-montserrat mb-1">45 Dias</div>
              <div className="text-sm text-gray-600 font-montserrat">Usando o Cardápio</div>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">🎯</div>
              <div className="text-xl font-bold text-green-600 font-montserrat mb-1">Controlada</div>
              <div className="text-sm text-gray-600 font-montserrat">Resultado atual</div>
            </div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 font-montserrat pb-[100px] overflow-x-hidden">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Results Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ResultsChart />
          </motion.div>

          {/* Timer */}
          <motion.div
            className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg mx-auto max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Clock className="w-5 h-5" />
                <span className="font-bold font-montserrat">Oferta expira em:</span>
              </div>
              <div className="text-4xl md:text-5xl font-bold font-montserrat mb-2">
                {formatTime(timeLeft)}
              </div>
              <p className="text-red-100 text-sm font-montserrat">
                Não perca esta oportunidade única!
              </p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="text-center space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-montserrat leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transforme sua alimentação{' '}
              <span className="text-green-600">agora!</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 font-montserrat max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Por apenas <strong className="text-green-600">R$ 19,90</strong>, tenha acesso imediato ao App Exclusivo GlicoBem completo!
            </motion.p>
          </div>

          {/* Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-green-200 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 font-montserrat">
                    GlicoBem: Cardápio de Receitas Para Diabéticos
                  </h3>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.9 + index * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 font-montserrat">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Pricing */}
                <div className="text-center lg:border-l lg:border-green-200 lg:pl-8">
                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-xl font-montserrat">De R$ 114,50</span>
                  </div>
                  
                  <div className="text-6xl md:text-7xl font-bold text-green-600 mb-3 font-montserrat">
                    R$ 19,90
                  </div>
                  
                  <div className="text-gray-600 mb-6 font-montserrat">
                    <span className="bg-yellow-100 px-3 py-1 rounded-full text-sm font-medium">
                      Pagamento único
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-blue-600">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium font-montserrat">Garantia de 30 dias</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <span className="ml-2 text-gray-600 font-montserrat text-sm">4.9/5 (500+ avaliações)</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 font-montserrat">
                    Se não ficar satisfeita, devolvemos 100% do seu dinheiro
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-xl md:text-2xl font-bold rounded-2xl shadow-xl w-full max-w-md uppercase font-montserrat"
            >
              <ShoppingCart className="w-6 h-6 mr-3" />
              QUERO APROVEITAR
            </Button>
            
            <p className="text-sm text-gray-500 mt-4 font-montserrat">
              🔒 Pagamento 100% seguro via Mercado Pago
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Step6;
