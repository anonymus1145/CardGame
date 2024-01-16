const query = "greek gods"
const apiUrl = "https://api.pexels.com/v1/search?query=" + query + "&per_page=8"

export type Object = {
    id: number;
    src: string;
    alt: string;
}

const images: Object[]= [];

function cardObj() {
  return {
    id: 0,
    src: "",
    alt: "",
  }
}

// Function to get images
async function fetchImage(number: number) {
  const response = await fetch(apiUrl, {
    method: "GET",
    headers: {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY
    },
  });
  const data = await response.json();

  const image = cardObj();
  image.id = data.photos[number].id;
  image.src = data.photos[number].src.portrait;
  image.alt = data.photos[number].alt;

  return image;
}


// Create 8 card objects
export async function cardObjects() {
    for (let i = 0; i < 8; i++) {
        const image = await fetchImage(i);
        images.push(image);
      }

    return images
}