import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Wheat, Book, Cake, Coffee } from 'lucide-react';
import { useEffect } from 'react';

import { utmTracker } from '@/utils/UTMTracker';

interface Step5Props {
  onNext: () => void;
}

const Step5 = ({ onNext }: Step5Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    utmTracker.trackFunnelProgress(5, 'viewed');
  }, []);

  const bonuses = [
    {
      title: 'Pão Sem Culpa',
      description: '50 receitas exclusivas de pães que não elevam sua glicose, mesmo para diabéticos tipo 1 e 2.',
      value: 'R$ 29,90',
      icon: <Wheat className="w-8 h-8" />
    },
    {
      title: 'Manual SOS Cozinha Completo',
      description: 'Guia definitivo com substituições inteligentes para transformar qualquer receita em aliada da sua saúde.',
      value: 'R$ 24,90',
      icon: <Book className="w-8 h-8" />
    },
    {
      title: 'Doces Liberados a Vontade',
      description: '10 sobremesas gourmet que não afetam a glicemia e ainda ajudam a regular o açúcar no sangue.',
      value: 'R$ 19,90',
      icon: <Cake className="w-8 h-8" />
    },
    {
      title: 'Chás Reguladores',
      description: '9 fórmulas de chás cientificamente comprovados para controlar os níveis de açúcar e melhorar sua saúde.',
      value: 'R$ 19,90',
      icon: <Coffee className="w-8 h-8" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto text-center pb-[70px] md:pb-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
          Além das +130 receitas, você ganha 4 bônus incríveis!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 font-montserrat">
          Bônus exclusivos para acelerar ainda mais seus resultados!
        </p>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="p-6 h-full bg-gradient-to-br from-white to-green-50 border-green-200 hover:shadow-xl transition-all">
                <motion.div 
                  className="text-green-600 mb-4 flex justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {bonus.icon}
                </motion.div>
                
                <div className="mb-3">
                  <div className="flex items-center justify-center gap-2">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold line-through font-montserrat">
                      {bonus.value}
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold font-montserrat">
                      GRÁTIS
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-montserrat">{bonus.title}</h3>
                <p className="text-gray-700 text-sm mb-4 font-montserrat">{bonus.description}</p>
                
                <div className="flex items-center justify-center text-green-600">
                  <Check className="w-5 h-5 mr-2" />
                  <span className="font-medium font-montserrat">Incluído para você!</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-2 font-montserrat">
            💰 Você leva R$ 94,60 em bônus GRÁTIS!
          </h3>
          <p className="text-gray-700 text-lg font-montserrat">
            Com o App Exclusivo GlicoBem por apenas <span className="font-bold text-green-600">R$ 19,90</span>!
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => {
        
              utmTracker.trackFunnelProgress(5, 'next');
              onNext();
            }}
            size="lg"
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-8 py-4 text-xl font-bold rounded-lg shadow-xl uppercase font-montserrat w-[80%] max-w-[400px] min-h-[48px]"
          >
            🎁 QUERO MEUS BÔNUS!
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-4 font-montserrat">
          Oferta limitada - os bônus podem ser removidos a qualquer momento
        </p>
      </motion.div>
    </div>
  );
};

export default Step5;
