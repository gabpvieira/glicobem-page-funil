import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import { trackFunnelEvent } from '@/utils/FacebookPixel';
import { utmTracker } from '@/utils/UTMTracker';

interface Step3Props {
  onNext: () => void;
  onAnswer: (question: string, answer: string) => void;
}

const Step3 = ({ onNext, onAnswer }: Step3Props) => {
  const [selectedChallenge, setSelectedChallenge] = useState<string>('');
  const [showTip, setShowTip] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    trackFunnelEvent(3, 'viewed');
    utmTracker.trackFunnelProgress(3, 'viewed');
  }, []);

  const challenges = [
    {
      id: 'no_pleasure',
      title: 'Satisfação Alimentar',
      text: 'Sentir que não posso comer nada gostoso',
      color: 'orange',
      gradient: 'from-orange-50 to-orange-100/50',
      border: 'border-orange-200',
      hoverBorder: 'hover:border-orange-400',
      selectedBg: 'bg-orange-50',
      selectedBorder: 'border-orange-400',
      icon: '😔',
      tip: 'Com as receitas certas, você pode ter prazer culinário sem comprometer sua saúde!',
      solution: 'Receitas saborosas e seguras'
    },
    {
      id: 'social',
      title: 'Vida Social',
      text: 'Recusar convites para comer fora',
      color: 'blue',
      gradient: 'from-blue-50 to-blue-100/50',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      selectedBg: 'bg-blue-50',
      selectedBorder: 'border-blue-400',
      icon: '🙅‍♀️',
      tip: 'Aprenda estratégias inteligentes para aproveitar qualquer situação social!',
      solution: 'Guia para socialização'
    },
    {
      id: 'recipes',
      title: 'Adaptação Culinária',
      text: 'Não conseguir adaptar minhas receitas favoritas',
      color: 'purple',
      gradient: 'from-purple-50 to-purple-100/50',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      selectedBg: 'bg-purple-50',
      selectedBorder: 'border-purple-400',
      icon: '👩‍🍳',
      tip: 'Transforme seus pratos favoritos em versões nutritivas e saborosas!',
      solution: 'Receitas adaptadas'
    },
    {
      id: 'control',
      title: 'Controle Glicêmico',
      text: 'Glicemia subir mesmo tomando cuidado',
      color: 'green',
      gradient: 'from-green-50 to-green-100/50',
      border: 'border-green-200',
      hoverBorder: 'hover:border-green-400',
      selectedBg: 'bg-green-50',
      selectedBorder: 'border-green-400',
      icon: '📊',
      tip: 'Descubra os segredos científicos para manter o controle glicêmico perfeito!',
      solution: 'Monitoramento personalizado'
    }
  ];

  const handleSelect = async (challenge: string) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedChallenge(challenge);
    setShowTip(challenge);
    onAnswer('challenge', challenge);
    
    console.log('🔊 Click sound');
    trackFunnelEvent(3, 'next');
    utmTracker.trackFunnelProgress(3, 'next');

    setTimeout(() => {
      console.log('🔊 Success sound');
      onNext();
    }, 2000);
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
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600">Identificação</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              O que mais te{' '}
              <span className="text-purple-600">incomoda</span>?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              Identifique sua principal dificuldade para recebermos a solução mais adequada
            </motion.p>
          </div>

          {/* Challenges */}
          <motion.div 
            className="space-y-4 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {challenges.map((challenge, index) => {
              const isSelected = selectedChallenge === challenge.id;
              const shouldShowTip = showTip === challenge.id;
              
              return (
                <motion.div
                  key={challenge.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  className="space-y-3"
                >
                  <Card
                    className={`
                      cursor-pointer transition-all duration-300 p-6 
                      border-2 rounded-2xl group relative overflow-hidden
                      ${isSelected 
                        ? `${challenge.selectedBg} ${challenge.selectedBorder} shadow-lg` 
                        : `bg-white ${challenge.border} ${challenge.hoverBorder} hover:shadow-md`
                      }
                    `}
                    onClick={() => handleSelect(challenge.id)}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${challenge.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="text-4xl">{challenge.icon}</div>
                      
                      <div className="flex-1 text-left">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-2">
                          {challenge.text}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <ArrowRight className="w-3 h-3" />
                          <span className="font-medium">{challenge.solution}</span>
                        </div>
                      </div>

                      <motion.div
                        animate={isSelected ? { x: 4, scale: 1.1 } : { x: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight 
                          className={`w-5 h-5 transition-all duration-300 ${
                            isSelected ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-600'
                          }`} 
                        />
                      </motion.div>
                    </div>
                  </Card>

                  {/* Tip Section */}
                  {shouldShowTip && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -10 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="ml-16"
                    >
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex items-start gap-3">
                          <motion.div
                            animate={{ 
                              rotate: [0, 10, -10, 0],
                              scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity, 
                              repeatDelay: 3 
                            }}
                          >
                            <Lightbulb className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <p className="text-gray-700 font-medium text-sm leading-relaxed">
                            {challenge.tip}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
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
              <div className="text-2xl">👩‍⚕️</div>
              <p className="text-gray-700 font-medium">
                Nossos especialistas criaram soluções específicas para cada desafio
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
                <div className="w-8 h-8 border-2 border-gray-200 border-t-purple-500 rounded-full animate-spin mx-auto"></div>
                <p className="text-gray-600 font-medium">Preparando sua solução personalizada...</p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Step3;
