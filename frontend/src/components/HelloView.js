// HelloView.js

export function HelloView({ message, error }) {
  if (error)   return <p style={{ color: 'red' }}>Error: {error}</p>;
  return <h1>{message}</h1>;
}