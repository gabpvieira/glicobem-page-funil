
import { motion } from 'framer-motion';
import { TrendingDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

const GlycemiaChart = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 300;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Chart dimensions
    const padding = 60;
    const chartWidth = canvas.width - 2 * padding;
    const chartHeight = canvas.height - 2 * padding;

    // Data points
    const data = [
      { day: 0, glucose: 180 },
      { day: 10, glucose: 160 },
      { day: 20, glucose: 145 },
      { day: 30, glucose: 135 },
      { day: 40, glucose: 125 },
      { day: 50, glucose: 115 },
      { day: 60, glucose: 105 }
    ];

    // Draw axes
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    
    // Y axis
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.stroke();
    
    // X axis
    ctx.beginPath();
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    ctx.stroke();

    // Draw grid lines and labels
    ctx.fillStyle = '#6B7280';
    ctx.font = '12px Montserrat';
    ctx.textAlign = 'center';

    // Y axis labels (glucose levels)
    for (let i = 80; i <= 200; i += 20) {
      const y = canvas.height - padding - ((i - 80) / 120) * chartHeight;
      
      // Grid line
      ctx.strokeStyle = '#F3F4F6';
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
      
      // Label
      ctx.textAlign = 'right';
      ctx.fillText(`${i}`, padding - 10, y + 4);
    }

    // X axis labels (days)
    for (let i = 0; i <= 60; i += 10) {
      const x = padding + (i / 60) * chartWidth;
      
      // Grid line
      ctx.strokeStyle = '#F3F4F6';
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, canvas.height - padding);
      ctx.stroke();
      
      // Label
      ctx.textAlign = 'center';
      ctx.fillText(`${i}`, x, canvas.height - padding + 20);
    }

    // Draw the glucose line with gradient
    const gradient = ctx.createLinearGradient(0, 0, chartWidth, 0);
    gradient.addColorStop(0, '#EF4444'); // Red
    gradient.addColorStop(1, '#50C878'); // Green

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.beginPath();

    data.forEach((point, index) => {
      const x = padding + (point.day / 60) * chartWidth;
      const y = canvas.height - padding - ((point.glucose - 80) / 120) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // Draw data points
    data.forEach((point) => {
      const x = padding + (point.day / 60) * chartWidth;
      const y = canvas.height - padding - ((point.glucose - 80) / 120) * chartHeight;
      
      ctx.fillStyle = point.day === 0 ? '#EF4444' : '#50C878';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, 2 * Math.PI);
      ctx.fill();
    });

    // Add annotation
    const lastPoint = data[data.length - 1];
    const lastX = padding + (lastPoint.day / 60) * chartWidth;
    const lastY = canvas.height - padding - ((lastPoint.glucose - 80) / 120) * chartHeight;
    
    ctx.fillStyle = '#50C878';
    ctx.font = 'bold 14px Montserrat';
    ctx.textAlign = 'left';
    ctx.fillText('Estabilidade em 60 dias!', lastX + 10, lastY - 10);

  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-8 max-w-full overflow-hidden"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <TrendingDown className="w-6 h-6 text-green-600" />
        </motion.div>
        <h3 className="text-lg font-bold text-gray-900 font-montserrat">
          Estabilidade da Glicemia com o App Exclusivo GlicoBem
        </h3>
      </div>
      
      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto"
          style={{ maxWidth: '600px' }}
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 mt-2 font-montserrat">
        <span>Dias</span>
        <span>Glicemia (mg/dL)</span>
      </div>
    </motion.div>
  );
};

export default GlycemiaChart;
