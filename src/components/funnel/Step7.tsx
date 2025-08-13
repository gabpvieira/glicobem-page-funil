import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, TrendingUp, Heart, Trophy } from 'lucide-react';
import { useEffect } from 'react';
import { soundManager } from '@/utils/SoundManager';
import { trackFunnelEvent } from '@/utils/FacebookPixel';
import { utmTracker } from '@/utils/UTMTracker';

interface Step7Props {
  onNext: () => void;
}

const Step7 = ({ onNext }: Step7Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    trackFunnelEvent(7, 'viewed');
    utmTracker.trackFunnelProgress(7, 'viewed');
  }, []);

  const handleNext = () => {
    soundManager.playSound('click');
    trackFunnelEvent(7, 'next');
    utmTracker.trackFunnelProgress(7, 'next');
    onNext();
  };

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: '27.000+',
      text: 'Diabéticos transformados'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: '98%',
      text: 'Taxa de satisfação'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      number: '130+',
      text: 'Receitas aprovadas'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto text-center p-4 pl-4 md:pl-6 pb-[70px] md:pb-[100px] overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="https://i.postimg.cc/qM1Hsvwt/mockup-receitas.webp" 
            alt="Capa do App Exclusivo GlicoBem"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 font-montserrat">
          ⚠️ Não perca essa chance!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 font-montserrat">
          Esta pode ser sua última oportunidade de transformar sua alimentação com esse desconto
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                <motion.div 
                  className="text-green-600 mb-3 flex justify-center"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2 font-montserrat">{stat.number}</div>
                <p className="text-gray-700 text-sm font-montserrat">{stat.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-yellow-50 to-red-50 p-6 rounded-lg border border-red-200 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-3 font-montserrat">
            🔥 Junte-se a quem já está comendo melhor!
          </h3>
          <p className="text-gray-700 mb-4 font-montserrat">
            Mais de 27.456 diabéticos já mudaram sua alimentação e recuperaram o prazer de comer. 
            Não deixe essa oportunidade passar!
          </p>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300">
            <p className="font-bold text-red-600 text-lg font-montserrat">
              ⏰ Apenas R$ 19,90 por tempo limitado!
            </p>
            <p className="text-sm text-gray-600 font-montserrat">
              Oferta especial que pode expirar a qualquer momento
            </p>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleNext}
            size="lg"
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-12 py-6 text-2xl font-bold rounded-lg shadow-xl w-[80%] max-w-[400px] animate-pulse uppercase font-montserrat min-h-[48px]"
          >
            <Trophy className="w-6 h-6 mr-2" />
            CONTINUAR
          </Button>
        </motion.div>

        <p className="text-sm text-gray-500 mt-4 font-montserrat">
          Última chance com esse desconto especial
        </p>
      </motion.div>
    </div>
  );
};

export default Step7;
