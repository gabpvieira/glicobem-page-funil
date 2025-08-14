import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Download, Gift, Star, Shield, ShoppingCart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useEffect } from 'react';
import { trackFinalStep } from '@/utils/UTMifyPixel';
import { utmTracker } from '@/utils/UTMTracker';

interface Step8Props {
  userAnswers: Record<string, string>;
}

const Step8 = ({ userAnswers }: Step8Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('🔊 Success sound');
    trackFinalStep();
    utmTracker.trackFunnelProgress(8, 'viewed');

    // Inject VSL script
    const script = document.createElement('script');
    script.src = "https://scripts.converteai.net/165be159-d128-413a-a3de-48f58958abb8/players/689c037e375bae0791365047/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src*="converteai.net"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleCheckout = () => {
    console.log('🔊 Success sound');
    console.log('Redirecionando para checkout...', userAnswers);
    
    utmTracker.trackConversion(19.90);
    
    // Redirect to checkout with UTM parameters
    const checkoutUrl = utmTracker.buildUTMUrl('https://www.ggcheckout.com/checkout/v2/qKCrW40YMD1dZ0rcv4by');
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  const benefits = [
    { icon: Download, text: 'Acesso instantâneo ao App completo' },
    { icon: Gift, text: 'Todos os 4 bônus inclusos (R$ 94,60)' },
    { icon: Star, text: 'Atualizações gratuitas vitalícias' },
    { icon: Shield, text: 'Garantia de 30 dias' }
  ];

  const faqItems = [
    {
      question: "O App funciona para diabéticos tipo 1 e 2?",
      answer: "Sim! As receitas foram testadas para ambos os tipos, com ingredientes que não causam picos de glicemia."
    },
    {
      question: "Preciso de experiência na cozinha?",
      answer: "Não! As receitas são simples, com instruções passo a passo, perfeitas para iniciantes."
    },
    {
      question: "Como vou receber o acesso?",
      answer: "Após a compra, você recebe um link imediato no seu WhatsApp para acessar em seu smartphone ou tablet."
    },
    {
      question: "E se eu não gostar? Tem garantia?",
      answer: "Oferecemos uma garantia de 30 dias. Se não ficar satisfeita, devolvemos 100% do seu dinheiro!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center p-4 font-montserrat">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Success Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-montserrat leading-tight">
              🎉 Parabéns! Você está a{' '}
              <span className="text-green-600">um clique</span>{' '}
              de transformar sua alimentação!
            </h1>
          </motion.div>

          {/* VSL Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-full overflow-hidden">
              <vturb-smartplayer 
                id="vid-689c037e375bae0791365047" 
                style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
              ></vturb-smartplayer>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-montserrat">
                  App Exclusivo GlicoBem Completo
                </h3>
                <p className="text-xl text-gray-600 font-montserrat">
                  Tudo que você precisa para comer bem e controlar a diabetes
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Benefits */}
                <div className="space-y-6">
                  {benefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div 
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <IconComponent className="w-8 h-8 text-green-600 flex-shrink-0" />
                        <span className="font-montserrat font-semibold text-gray-800 text-lg">{benefit.text}</span>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="mb-6">
                    <span className="text-gray-400 line-through text-2xl font-montserrat">De R$ 114,50</span>
                  </div>
                  
                  <div className="font-black text-green-600 mb-6 font-montserrat" style={{ fontSize: '56px', lineHeight: '0.8' }}>
                    R$ 19,90
                  </div>
                  
                  <div className="bg-yellow-100 px-6 py-3 rounded-full inline-block mb-8">
                    <span className="text-yellow-800 font-bold font-montserrat text-lg">
                      💳 Pagamento único
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              <Button
                onClick={handleCheckout}
                size="lg"
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-20 py-8 text-3xl md:text-4xl font-bold rounded-3xl shadow-2xl w-full max-w-3xl uppercase font-montserrat border-4 border-green-400"
              >
                <ShoppingCart className="w-10 h-10 mr-6" />
                COMPRAR AGORA!
              </Button>
            </motion.div>
            
            <p className="text-gray-500 mt-6 font-montserrat text-lg">
              🔒 Pagamento 100% seguro via Mercado Pago
            </p>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 font-montserrat text-center">
              Perguntas Frequentes
            </h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 font-montserrat font-semibold text-gray-900 hover:text-green-600 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 font-montserrat leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Step8;
