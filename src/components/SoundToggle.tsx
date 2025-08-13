
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { soundManager } from '@/utils/SoundManager';

const SoundToggle = () => {
  const [isEnabled, setIsEnabled] = useState(soundManager.isEnabled());

  const toggleSound = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    soundManager.setEnabled(newState);
    
    if (newState) {
      soundManager.playSound('click');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white/90 transition-all duration-200"
      title={isEnabled ? 'Desativar sons' : 'Ativar sons'}
    >
      {isEnabled ? (
        <Volume2 className="h-5 w-5 text-primary" />
      ) : (
        <VolumeX className="h-5 w-5 text-gray-500" />
      )}
    </Button>
  );
};

export default SoundToggle;
