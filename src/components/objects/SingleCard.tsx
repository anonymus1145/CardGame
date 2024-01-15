import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { createClient } from 'pexels'


const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);
const photo = await client.photos.random()
console.log(photo.id)


export default function SingleCard() {

  return (
    <Card className="w-1/4 h-1/4">
      <CardContent>
        <button className="w-full h-full"><img id="photo" src="/back.jpg"></img></button>
      </CardContent>
    </Card>
  )
}