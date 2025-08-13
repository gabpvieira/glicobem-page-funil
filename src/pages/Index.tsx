import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 font-montserrat">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-900 font-montserrat leading-relaxed font-medium">
              "Descobri essa fórmula de receitas que tá permitindo diabéticos comerem{' '}
              <strong className="font-bold">de tudo</strong> e ainda{' '}
              <strong className="font-bold text-green-600">controlar a glicose</strong>. 
              Fiquei em <strong className="font-bold text-red-600">choque</strong> com o resultado..."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => navigate('/funil')}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-lg font-montserrat"
            >
              Ver como funciona
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2"
          >
            <p className="text-gray-600 font-montserrat">
              ✓ Testado por mais de <strong>27.000 diabéticos</strong>
            </p>
            <p className="text-gray-600 font-montserrat">
              <strong className="text-green-600">97% de satisfação</strong> comprovada
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
