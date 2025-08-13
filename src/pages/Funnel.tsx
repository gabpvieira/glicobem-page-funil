
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Step1 from '@/components/funnel/Step1';
import Step2 from '@/components/funnel/Step2';
import Step3 from '@/components/funnel/Step3';
import Step4 from '@/components/funnel/Step4';
import Step5 from '@/components/funnel/Step5';
import Step6 from '@/components/funnel/Step6';
import Step7 from '@/components/funnel/Step7';
import Step8 from '@/components/funnel/Step8';
import ProgressBar from '@/components/funnel/ProgressBar';
import { soundManager } from '@/utils/SoundManager';

const Funnel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});

  const totalSteps = 8;

  // Scroll to top whenever step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      soundManager.playSound('progress');
      setCurrentStep(currentStep + 1);
    }
  };

  const saveAnswer = (question: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [question]: answer
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={nextStep} />;
      case 2:
        return <Step2 onNext={nextStep} onAnswer={saveAnswer} />;
      case 3:
        return <Step3 onNext={nextStep} onAnswer={saveAnswer} />;
      case 4:
        return <Step4 onNext={nextStep} />;
      case 5:
        return <Step5 onNext={nextStep} />;
      case 6:
        return <Step6 onNext={nextStep} />;
      case 7:
        return <Step7 onNext={nextStep} />;
      case 8:
        return <Step8 userAnswers={userAnswers} />;
      default:
        return <Step1 onNext={nextStep} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-montserrat">
      {/* Progress bar only from Step 2 onwards */}
      {currentStep > 1 && (
        <div className="container mx-auto px-4 py-8">
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={currentStep === 1 ? "" : "mt-8"}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Funnel;
