
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto font-montserrat">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-600 font-montserrat">
          Etapa {currentStep} de {totalSteps}
        </span>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-secondary" />
          <span className="text-sm font-bold text-secondary font-montserrat">
            {Math.round(progress)}% completo
          </span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-secondary to-primary rounded-full shadow-lg"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      
      {/* Indicadores de etapa */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i < currentStep ? 'bg-secondary' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
