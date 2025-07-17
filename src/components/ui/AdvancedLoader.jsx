import { useState, useEffect } from 'react';

const AdvancedLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10 + 8;
        if (newProgress >= 100) {
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <div className="text-3xl font-bold text-white">DA</div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            DevArchitects
          </h1>
          <p className="text-gray-600">
            Código que Arquiteta o Futuro
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-primary-600 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-center text-sm text-gray-500 mt-2">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading Text */}
        <p className="text-gray-600">
          Carregando...
        </p>
      </div>
    </div>
  );
};

export default AdvancedLoader;
