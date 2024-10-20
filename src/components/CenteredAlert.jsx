import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'; // 导入图标

const CenteredAlert = ({ message, type, onClose, duration = 2000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); 
    }, duration);

    return () => clearTimeout(timer); 
  }, [onClose, duration]);

  const alertStyles = {
    success: 'bg-green-100 text-green-900 border-green-300',
    error: 'bg-red-100 text-red-900 border-red-300',
  };

  const icons = {
    success: <FiCheckCircle className="w-16 h-16 text-green-500" />, 
    error: <FiXCircle className="w-16 h-16 text-red-500" />, 
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 
      transition-all duration-200 ease-out 
      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
      `}
    >
      <div className={`p-8 rounded-lg shadow-lg border ${alertStyles[type]} relative`}>
        <div className="flex justify-center mb-4">
          {icons[type]}
        </div>
        <div className="font-semibold text-center text-lg">{message}</div>
      </div>
    </div>
  );
};

export default CenteredAlert;
