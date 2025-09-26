import { Book } from "@/types/book";
import FeaturedProduct from "./FeaturedProcuct";


function truncateText(text: string, maxLength: number) {
    const words = text.split(" ");
    if (words.length <= maxLength) {
        return text;
    } else {
        return words.slice(0, maxLength).join(" ") + "...";
    }
}

interface BookGridProps {
    books: Book[];
}

export default function BookGrid({ books }: BookGridProps) {
  console.log(books);

    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => {
        const {id, volumeInfo, saleInfo} = book;

        // Sicherstellen, dass die Daten existieren, bevor sie übergeben werden
        const title = volumeInfo?.title || 'Unbekannter Titel';
        const author = volumeInfo?.authors?.[0] || 'Unbekannter Autor';
        const description = volumeInfo?.description || 'Keine Beschreibung verfügbar.';
        const shortDescription = truncateText(description, 50); // Kürze die Beschreibung auf 50 Wörter
        const category = volumeInfo?.categories?.[0] || 'Unbekannte Kategorie';
        const imageUrl = volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/150x200?text=No+Cover';
        const price = saleInfo?.listPrice?.amount || undefined;
        // const formattedPrice = typeof price === 'number' ? `${price} €` : price;
        const bookLink = volumeInfo?.infoLink || '/';

        // Rendere die FeaturedProduct-Komponente mit den extrahierten Daten

        return (
          <FeaturedProduct 
            key={id} 
            title={title}
            author={author}
            price={price}
            description={shortDescription}
            category={category}
            imageUrl={imageUrl}
            bookLink={bookLink}
            id={id}
          />
        );
      })}
    </div>
  );
}