import React, { useState, useEffect } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList.tsx';
import { getAll, get5First, getRedGoods } from './api/goods.ts';
import { Good } from './types/Good.ts';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLoadAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const allGoods = await getAll();
      setGoods(allGoods);
    } catch (err) {
      console.error('Error loading all goods:', err);
      setError('Failed to load all goods. Please try again.');
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadFirstFive = async () => {
    setLoading(true);
    setError(null);
    try {
      const firstFiveGoods = await get5First();
      setGoods(firstFiveGoods);
    } catch (err) {
      console.error('Error loading first 5 goods:', err);
      setError('Failed to load the first 5 goods. Please try again.');
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadRed = async () => {
    setLoading(true);
    setError(null);
    try {
      const redGoods = await getRedGoods();
      setGoods(redGoods);
    } catch (err) {
      console.error('Error loading red goods:', err);
      setError('Failed to load red goods. Please try again.');
      setGoods([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleLoadAll();
  }, []);

  return (
    <div className="App p-4 max-w-4xl mx-auto bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dynamic List of Goods</h1>

      <div className="button-group flex flex-wrap justify-center gap-4 mb-8">
        <button
          type="button"
          data-cy="all-button"
          onClick={handleLoadAll}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:scale-105"
          disabled={loading}
        >
          Load all goods
        </button>

        <button
          type="button"
          data-cy="first-five-button"
          onClick={handleLoadFirstFive}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:scale-105"
          disabled={loading}
        >
          Load 5 first goods
        </button>

        <button
          type="button"
          data-cy="red-button"
          onClick={handleLoadRed}
          className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-200 ease-in-out transform hover:scale-105"
          disabled={loading}
        >
          Load red goods
        </button>
      </div>

      {loading && (
        <div className="flex items-center justify-center p-4 text-xl font-medium text-blue-700">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Loading goods...
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-md mb-4" role="alert">
          {error}
        </div>
      )}

      {!loading && goods.length === 0 && !error && (
        <p className="text-gray-600 text-lg">No goods loaded yet. Click a button to load some!</p>
      )}

      {/* Render GoodsList only if there are goods to display and no error */}
      {!loading && goods.length > 0 && !error && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
