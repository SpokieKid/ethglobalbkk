'use client'

import React from 'react';

interface ErrorComponentProps {
  error?: Error;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">出错了</h1>
        <p className="text-gray-600">
          {error?.message || '发生了未知错误'}
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent; 