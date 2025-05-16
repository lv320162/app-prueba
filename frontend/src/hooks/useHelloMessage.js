//useHelloMessage.js
import { useState, useEffect } from 'react';
import { fetchHelloMessage } from '../services/helloServices';

export function useHelloMessage() {
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHelloMessage()
      .then((msg) => setMessage(msg))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { message, error, loading };
}