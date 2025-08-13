import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, MessageCircle, CheckCheck, Phone, Users } from 'lucide-react';
import { useEffect } from 'react';
import { trackStep4View } from '@/utils/FacebookPixel';
import { utmTracker } from '@/utils/UTMTracker';

interface Step4Props {
  onNext: () => void;
}

const Step4 = ({ onNext }: Step4Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track Facebook Pixel event for Step 4 (50% viewed)
    trackStep4View();
    
    // Also track general funnel progression
    import('@/utils/FacebookPixel').then(({ trackFunnelEvent }) => {
      trackFunnelEvent(4, 'viewed');
    });
    
    // Track UTM funnel progress
    utmTracker.trackFunnelProgress(4, 'viewed');
  }, []);

  const handleNext = () => {
    console.log('🔊 Click sound');
    onNext();
  };

  const whatsappMessages = [
    {
      name: 'Jenifer Costa',
      time: '14:32',
      message: 'Gente, não acredito! Fiz o bolo de chocolate da receita e minha glicose nem mexeu! 😍 Finalmente posso comer doce sem culpa',
      avatar: '👩🏻‍🦳',
      isOnline: true
    },
    {
      name: 'Marta Nunes',
      time: '09:15',
      message: 'Perdi 6kg em 2 meses seguindo as receitas do GlicoBem! Meu médico ficou impressionado com minha HbA1c. Muito obrigada pela mudança de vida! 🙏❤️',
      avatar: '👩🏽',
      isOnline: true
    },
    {
      name: 'Roberto Mendes',
      time: '16:47',
      message: 'Cara, que diferença! Antes eu tinha medo de tudo, agora como pizza, hambúrguer... tudo nas versões saudáveis. Família toda adora! 🍕',
      avatar: '👨🏻',
      isOnline: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 font-montserrat pb-[100px] overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Title */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-montserrat leading-tight">
              Veja o que outros diabéticos estão dizendo!
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12 font-montserrat max-w-3xl mx-auto">
              Mais de <strong className="text-green-600">27.000 diabéticos</strong> já transformaram sua alimentação e recuperaram o prazer de comer
            </p>
          </motion.div>

          {/* WhatsApp Prints Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-t-3xl shadow-lg">
              <div className="flex items-center gap-3 text-white">
                <MessageCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold font-montserrat">Depoimentos Reais - WhatsApp</h3>
                <div className="ml-auto flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Online</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-b-3xl shadow-lg p-6">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Print da Luciana */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 border-b border-green-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                          L
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-800 font-montserrat">Luciana Paiva</h4>
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-3 h-3 text-green-600" />
                            <span className="text-xs text-green-600 font-montserrat">WhatsApp verificado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <img 
                        src="https://i.postimg.cc/6q75k4Ym/PRINT-DP-LUCIANA.png"
                        alt="Depoimento de Luciana no WhatsApp sobre o App Exclusivo GlicoBem"
                        className="w-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        loading="lazy"
                      />
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 font-montserrat italic">
                          "Agora posso dizer que como sem medo! As receitas do glicobem mudoaram  minha vida."
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Print da Vanessa */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 border-b border-blue-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          V
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-800 font-montserrat">Vanessa Silva</h4>
                          <div className="flex items-center gap-2">
                            <MessageCircle className="w-3 h-3 text-blue-600" />
                            <span className="text-xs text-blue-600 font-montserrat">WhatsApp verificado</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <img 
                        src="https://i.postimg.cc/QCRxhNzx/PRINT-DP-VANESSA.png"
                        alt="Depoimento de Vanessa no WhatsApp sobre o App Exclusivo GlicoBem"
                        className="w-full rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
                        loading="lazy"
                      />
                      <div className="mt-4 bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 font-montserrat italic">
                          "Até o momento tive resultados incríveis! Super indico e recomendo."
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* WhatsApp Messages */}
              <div className="mt-8 space-y-4">
                {whatsappMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.2 }}
                    className="p-4 bg-gray-50 rounded-2xl border border-gray-200 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center text-xl">
                          {msg.avatar}
                        </div>
                        {msg.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 font-montserrat">{msg.name}</h4>
                          <span className="text-xs text-gray-500 font-montserrat">{msg.time}</span>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-2xl rounded-tl-sm border-l-4 border-green-400 relative">
                          <p className="text-gray-800 font-montserrat text-sm leading-relaxed">
                            {msg.message}
                          </p>
                          <div className="flex items-center justify-end mt-2 gap-1">
                            <CheckCheck className="w-4 h-4 text-green-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-3xl border border-green-200 mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 font-montserrat">27.000+</div>
                <p className="text-gray-700 font-montserrat">Diabéticos transformados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 font-montserrat">94%</div>
                <p className="text-gray-700 font-montserrat">Melhoraram HbA1c</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 font-montserrat">4.9/5</div>
                <p className="text-gray-700 font-montserrat">Avaliação média</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleNext}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-xl font-bold rounded-2xl font-montserrat w-full max-w-md shadow-lg hover:shadow-xl transition-all duration-300"
            >
              QUERO FAZER PARTE!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Step4;
