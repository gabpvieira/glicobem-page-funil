import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import { utmTracker } from '@/utils/UTMTracker';

interface Step2Props {
  onNext: () => void;
  onAnswer: (question: string, answer: string) => void;
}

const Step2 = ({ onNext, onAnswer }: Step2Props) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    utmTracker.trackFunnelProgress(2, 'viewed');
  }, []);

  const options = [
    {
      id: 'fear',
      title: 'Controle Glicêmico',
      text: 'Medo de comer errado e subir a glicose',
      color: 'red',
      gradient: 'from-red-50 to-red-100/50',
      border: 'border-red-200',
      hoverBorder: 'hover:border-red-400',
      selectedBg: 'bg-red-50',
      selectedBorder: 'border-red-400',
      icon: '🎯'
    },
    {
      id: 'boring',
      title: 'Variedade Alimentar',
      text: 'Cansada de comer sempre a mesma coisa',
      color: 'blue',
      gradient: 'from-blue-50 to-blue-100/50',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      selectedBg: 'bg-blue-50',
      selectedBorder: 'border-blue-400',
      icon: '🌟'
    },
    {
      id: 'sweets',
      title: 'Prazer Culinário',
      text: 'Quero doces e pães sem culpa',
      color: 'purple',
      gradient: 'from-purple-50 to-purple-100/50',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      selectedBg: 'bg-purple-50',
      selectedBorder: 'border-purple-400',
      icon: '🍰'
    },
    {
      id: 'safety',
      title: 'Conhecimento Nutricional',
      text: 'Não sei o que posso comer com segurança',
      color: 'green',
      gradient: 'from-green-50 to-green-100/50',
      border: 'border-green-200',
      hoverBorder: 'hover:border-green-400',
      selectedBg: 'bg-green-50',
      selectedBorder: 'border-green-400',
      icon: '🧠'
    }
  ];

  const handleSelect = async (option: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedOption(option);
    onAnswer('profile', option);
    
    console.log('🔊 Click sound');

    utmTracker.trackFunnelProgress(2, 'next');
    
    setTimeout(() => {
      console.log('🔊 Progress sound');
      onNext();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 font-montserrat">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600">Personalização</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Qual é o seu maior{' '}
              <span className="text-blue-600">desafio</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Escolha sua principal dificuldade para criarmos uma experiência totalmente personalizada
            </motion.p>
          </div>

          {/* Options */}
          <motion.div 
            className="grid gap-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {options.map((option, index) => {
              const isSelected = selectedOption === option.id;
              
              return (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card
                    className={`
                      cursor-pointer transition-all duration-300 p-6 
                      border-2 rounded-2xl group relative overflow-hidden
                      ${isSelected 
                        ? `${option.selectedBg} ${option.selectedBorder} shadow-lg` 
                        : `bg-white ${option.border} ${option.hoverBorder} hover:shadow-md`
                      }
                    `}
                    onClick={() => handleSelect(option.id)}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    


                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="text-4xl">{option.icon}</div>
                      
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {option.text}
                        </p>
                      </div>

                      <motion.div
                        animate={isSelected ? { x: 4, scale: 1.1 } : { x: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight 
                          className={`w-5 h-5 transition-all duration-300 ${
                            isSelected ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-600'
                          }`} 
                        />
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-2xl border border-gray-200">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-blue-600" />
              </div>
              <p className="text-gray-700 font-medium">
                Sua resposta nos ajuda a personalizar completamente sua experiência
              </p>
            </div>
          </motion.div>

          {/* Loading state */}
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
            >
              <div className="text-center space-y-4">
                <div className="w-8 h-8 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-600 font-medium">Personalizando sua experiência...</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Step2;
