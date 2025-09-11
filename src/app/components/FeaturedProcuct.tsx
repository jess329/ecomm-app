import Image from "next/image";

export default function FeaturedProduct() {
    return (   
        <div className="w-full bg-white p-6 rounded-lg shadow-md flex-shrink-0">

            {/* Oberer Bereich: Bild, Preis und Autor */}
            <div className="flex mb-4">
                {/* Bild */}
                <div className="w-1/3 flex-shrink-0">
                <Image
                    src="https://cdn.pixabay.com/photo/2024/04/08/14/00/buildings-8683532_1280.jpg"
                    alt="Buch-Cover Platzhalter"
                    width={120}
                    height={160}
                    className="rounded-md"
                />
                </div>

                {/* Preis und Autor */}
                <div className="w-2/3 ml-4 flex flex-col justify-start items-start">
                <p className="text-2xl font-bold text-gray-900">Title</p>
                <p className="text-l font-bold text-gray-900">Price</p>
                <p className="text-sm text-gray-600 mt-1">Author</p>
                <p className="text-sm text-gray-600 mt-1">Category</p>
                </div>
            </div>

            {/* Unterer Bereich: Kurzbeschreibung */}
            <div>
                <p className="text-sm text-gray-800">          
                    Dies ist eine kurze Beschreibung des Buches, die erklärt, worum es in der Geschichte geht. Sie ist ein Platzhaltertext.
                </p>
            </div>
        </div>
    );
};