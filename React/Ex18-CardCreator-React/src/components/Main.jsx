import { useState, useEffect } from 'react';
import Card from './Card';

const Main = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setCards(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  return (
    <main className="bg-gray-700 min-h-screen flex flex-col p-16 text-white gap-1.5">
      <h1 className="text-3xl md:text-5xl font-light underline decoration-double flex justify-center ">
        Card Creator
      </h1>
      <p className="text-2xl md:text-3xl ml-11 mt-3.5 mb-1.5">Here Are Your Cards Enjoy:</p>
      {cards.map((content) => (
        <Card key={content.id} content={content} />
      ))}
    </main>
  );
};

export default Main;