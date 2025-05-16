// helloServices.js
export async function fetchHelloMessage() {
  try {
    const res = await fetch('http://localhost:5268/api/saludar');
    console.log(res);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    const { message } = await res.json();
    console.log(message);
    return message;
  } catch (error) {
    throw new Error('No se pudo conectar con la API');
  }
}