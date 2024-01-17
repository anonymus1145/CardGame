import { Card } from "@/components/objects/card";
import { cardObjects, Object } from "@/services/fetchImages"
import { useEffect, useState } from "react"



const cardsIds: string[] = [];
let score = 0;
let bestScore = 0;

export function Game() {
    const [objects, setObjects] = useState<Object[]>([]);
    const [cards, setShuffledCards] = useState<Object[]>([]);

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
    }, []); // Empty dependency array ensures useEffect runs only once!!


    useEffect(() => {
        setShuffledCards(shuffleCards(objects)); // Pass in objects);
    }, [objects]);


    const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const elementId = event.currentTarget.id;

        // Add the clicked card to the array
        if (!cardsIds.includes(elementId)) {
            cardsIds.push(elementId);
            score++;
            
        } else {
            alert("You lost, try again!");
            bestScore = score;
            score = 0;
            cardsIds.length = 0;
        }

        // Create a new array with modified objects
        const updatedObjects = objects.map((object) => ({
            ...object,
            src: "/back.jpg",
        }));

        // Update the state with the new array
        setObjects(updatedObjects);

        // Change back the state after 1 second -> at the same time it shuffles the cards because the object state is updated
        setTimeout(() => {
            setObjects(cards);
        }, 1000);
    }

    return (
        <>
            <div className="absolute top-20">
                <Card className="text-3xl font-bold border-2 py-2 px-4 hover:bg-slate-800 border-white text-white">
                    {"Score: " + score}
                </Card>
            </div>
            <div className="absolute top-10 right-10">
                <Card className="text-3xl font-bold border-2 py-2 px-4 hover:bg-slate-800 border-white text-white">
                    {"Best Score: " + bestScore}
                </Card>
            </div>
            <div className="flex gap-4">
                {cards.map((object) => (
                    <img onClick={handleClick} id={object.id.toString()} className="w-36 h-48 rounded-lg" key={object.id} src={object.src} alt={object.alt} />
                ))}
            </div>
        </>
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