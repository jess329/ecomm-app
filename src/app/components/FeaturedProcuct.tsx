import Image from "next/image";
import Link from "next/link";

// Interface definieren
interface FeaturedProductProps {
  id: string; // Die ID ist wichtig für den Schlüssel und später für die Links
  title: string;
  author: string;
  price: string; // Preis als String, da wir es in `€` anzeigen
  description: string;
  category: string;
  bookLink: string;
  imageUrl: string;
}

export default function FeaturedProduct({
  id = "1",
  title = "Sample Book Title",
  author = "Sample Author",
  price = "11.99€",
  description = "This is a short description of the book that explains what the story is about. It is placeholder text.",
  category = "Sample Category",
  bookLink = '/',
  imageUrl = "https://cdn.pixabay.com/photo/2024/04/08/14/00/buildings-8683532_1280.jpg",
}: Partial<FeaturedProductProps>) {
    return (   
        <div className="w-full bg-white p-6 rounded-lg shadow-md flex-shrink-0">

            {/* Oberer Bereich: Bild, Preis und Autor */}
            <div className="flex mb-4">
                {/* Bild */}
                <div className="w-1/3 flex-shrink-0">
                <Image
                    src={imageUrl}
                    alt={title}
                    width={120}
                    height={160}
                    className="rounded-md"
                />
                </div>

                {/* Preis und Autor */}
                <div className="w-2/3 ml-4 flex flex-col justify-start items-start">
                <p className="text-2xl font-bold text-gray-900">{title}</p>
                <p className="text-l font-bold text-gray-900">{price}</p>
                <p className="text-sm text-gray-600 mt-1">{author}</p>
                <p className="text-sm text-gray-600 mt-1">{category}</p>
                </div>
            </div>

            {/* Unterer Bereich: Kurzbeschreibung */}
            <div>
                <p className="text-sm text-gray-800">          
                {description}
                <Link href={bookLink} className="text-blue-600 hover:underline ml-2">
                    More of this book &rarr;
                </Link>
                </p>
            </div>
        </div>
    );
};