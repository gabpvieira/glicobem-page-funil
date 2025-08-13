import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

import { utmTracker } from '@/utils/UTMTracker';

interface Step1Props {
  onNext: () => void;
}

const Step1 = ({ onNext }: Step1Props) => {
  const [socialCount, setSocialCount] = useState(27000);

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('🔊 Welcome sound');

    // Track Step 1 viewed

    utmTracker.trackFunnelProgress(1, 'viewed');

    // Animate social count
    const interval = setInterval(() => {
      setSocialCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    console.log('🔊 Click sound');

    utmTracker.trackFunnelProgress(1, 'next');
    onNext();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 flex items-center justify-center p-4 font-montserrat overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 rounded-full border border-green-200 mb-6"
          >
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold font-montserrat">
              +{socialCount.toLocaleString()} diabéticos já transformaram sua alimentação
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight font-montserrat mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Diabéticos: Liberte-se do{' '}
            <span className="text-red-600">MEDO</span>{' '}
            e Volte a Comer com{' '}
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              PRAZER!
            </span>
          </motion.h1>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
              <img 
                src="https://i.postimg.cc/25w6hD12/bebida.png" 
                alt="Controle de glicemia para diabéticos" 
                className="w-full h-auto rounded-2xl"
                loading="lazy"
              />
              {/* Overlay with compelling text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-8">
                <div className="text-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-2">
                  </h3>
                  <p className="text-lg font-montserrat opacity-90">
                    Coma pães, doces e pratos deliciosos sem subir a glicose
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Subtitle with Problem/Solution */}
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl text-gray-700 font-montserrat leading-relaxed">
              <strong className="text-red-600">Cansada de viver com medo</strong> de comer e ver a glicose disparar? 
              <br />
              <strong className="text-green-600">Descubra como o App Exclusivo GlicoBem</strong> transforma sua alimentação definitivamente.
            </p>
          </motion.div>

          {/* Social Proof Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {/* Reviews Card */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-yellow-200 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-2xl font-bold text-yellow-600 font-montserrat mb-2">4.9/5</div>
              <p className="text-gray-700 font-montserrat">
                <strong>500+ avaliações</strong> de diabéticos satisfeitos
              </p>
            </Card>

            {/* Users Card */}
            <Card className="p-6 bg-white/90 backdrop-blur-sm border-green-200 shadow-xl">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-green-600 font-montserrat mb-2">27.000+</div>
              <p className="text-gray-700 font-montserrat">
                <strong>Diabéticos</strong> já controlam a glicemia comendo bem
              </p>
            </Card>
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border-2 border-green-200 shadow-xl max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-montserrat">
                Responda 3 Perguntas Rápidas
              </h3>
            </div>
            
            <p className="text-lg text-gray-700 font-montserrat mb-8 leading-relaxed">
              Descubra <strong>exatamente</strong> como transformar sua alimentação baseado no seu perfil específico de diabético
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleStart}
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-16 py-8 text-2xl md:text-3xl font-bold rounded-2xl shadow-2xl font-montserrat uppercase w-full max-w-md relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <span className="relative z-10">🚀 COMEÇAR AGORA!</span>
              </Button>
            </motion.div>

            <p className="text-sm text-gray-500 mt-4 font-montserrat">
              ⚡ Leva apenas 2 minutos • 100% personalizado para você
            </p>
          </motion.div>

          {/* Urgency/Curiosity Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 font-montserrat font-medium">
              💡 <strong>Descubra os segredos</strong> que médicos não contam sobre alimentação para diabéticos
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Step1;
