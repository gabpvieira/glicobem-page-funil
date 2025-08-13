
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SocialNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState(0);

  const notifications = [
    'Joana acabou de comprar o GlicoBem!',
    'Carlos está cozinhando uma receita do GlicoBem!',
    'Maria conseguiu comer bolo sem subir a glicose!',
    'Ana transformou sua alimentação com o GlicoBem!'
  ];

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 4000);
    };

    // Primeira notificação após 3 segundos
    const firstTimer = setTimeout(showNotification, 3000);

    // Notificações subsequentes a cada 15 segundos
    const interval = setInterval(() => {
      setCurrentNotification(prev => (prev + 1) % notifications.length);
      showNotification();
    }, 15000);

    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [notifications.length]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 100 
      }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border border-green-200 max-w-sm z-40 font-montserrat"
    >
      <p className="text-sm">
        <span className="font-bold text-secondary">{notifications[currentNotification]}</span>
      </p>
      <p className="text-xs text-gray-500 mt-1">há poucos minutos</p>
    </motion.div>
  );
};

export default SocialNotification;
