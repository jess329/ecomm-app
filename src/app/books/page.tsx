"use client";
import BookGrid from "../components/BookGrid";
import SearchForm from "../components/SearchForm";
import FeaturedProduct from "../components/FeaturedProcuct";
import { Book } from "@/types/book";

import { useState, useEffect } from "react";


export default function BooksPage() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        fetchBooks("book"); 
        console.log(books)
    }, [])

    async function fetchBooks(searchTerm: string, category?: string) {
        setLoading(true)
        const baseUrl = "https://www.googleapis.com/books/v1/volumes"
        let query = searchTerm || category ? searchTerm : "book";
        if (category) query += `subject:${category}`
        const url = `${baseUrl}?q=${encodeURIComponent(query)}&maxResults=21`

        try {
            const res = await fetch(url)
            const data = await res.json()
            setBooks(data.items || [])
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="container mx-auto px-4 py-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Our Book Inventory</h1>
            <SearchForm onSearch={fetchBooks}/>
            <BookGrid books={books}/>
        </main>
    );
}