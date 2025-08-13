
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownProps {
  initialMinutes?: number;
  className?: string;
}

const Countdown = ({ initialMinutes = 10, className = '' }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full font-montserrat font-bold ${className}`}>
      <Clock className="w-4 h-4" />
      <span>Oferta expira em: {formatTime(timeLeft)}</span>
    </div>
  );
};

export default Countdown;
