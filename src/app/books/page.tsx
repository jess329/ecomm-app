import BookGrid from "../components/BookGrid";
import FeaturedProduct from "../components/FeaturedProcuct";


export default async function BooksPage() {
    const dummyBooks = Array(20).fill(null); // Beispiel-Datenarray mit 12 Einträgen

    // Wir rufen die Google Books API auf, um 20 Bücher zu erhalten
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=book&maxResults=20');

    // Prüfe, ob die Anfrage erfolgreich war
    if (!res.ok) {
        // Wenn die Anfrage fehlschlägt, kannst du einen Fehler werfen oder eine Fallback-UI anzeigen
        return <div>Fehler beim Laden der Bücher.</div>;
    }

    const data = await res.json();
    const books = data.items || []; // Stelle sicher, dass "items" existiert
    // console.log(books)

    return (
        <main className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Our Book Inventory</h1>

            <BookGrid books={books}/>
        </main>
    );
}