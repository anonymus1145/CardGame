import { cardObjects, Object } from "@/services/fetchImages"
import { useEffect, useState } from "react"

export function Game() {
    const [objects, setObjects] = useState<Object[]>([]);
    const [state, setState] = useState(0);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const fetchedObjects = await cardObjects();
          setObjects(fetchedObjects);
        } catch (error) {
          console.error('Error fetching objects:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once, similar to componentDidMount

  
    let shuffledObjects = shuffleCards(objects);

  
    return (
      <div className="flex gap-4">
        {shuffledObjects.map((object) => (
          <img className="w-36 h-48 rounded-lg" key={object.id} src={object.src} alt={object.alt} />
        ))}
      </div>
    );
  }
  

  // Function to shuffle the cards
  function shuffleCards(array: Object[]) {
    let i = array.length;
    while (i > 0) {
      const ri = Math.floor(Math.random() * i);
      i--;
      [array[i], array[ri]] = [array[ri], array[i]];
    }
    return array;
  }