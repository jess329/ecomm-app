"use client";

import React, { useState } from "react";

const defaultCategories = [
  "Fiction",
  "Nonfiction",
  "Juvenile Fiction",
  "Biography & Autobiography",
  "History",
  "Science",
  "Technology & Engineering",
  "Business & Economics",
  "Health & Fitness",
  "Religion",
];

interface SearchFormProps {
    onSearch: (searchTerm: string, category?: string) => void;
}

export default function SearchForm({onSearch} : SearchFormProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        console.log(searchTerm)
        onSearch(searchTerm, category)
    }

    return (
        <form className="container mx-auto p-4 text-black" onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor="search-input" className="px-2">
                    Search for a book by title, authors or ISBN
                </label>
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 rounded-md p-2 w-full mb-2"
                    id="search-input"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <label htmlFor="category-select" className="px-2">
                Filter by category: 
            </label>
            <select
                id="category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 rounded-md"
            >
                <option value="">All</option>
                {defaultCategories.map((cat) => (
                <option key={cat} value={cat}>
                    {cat}
                </option>
                ))}
            </select>
            <button type="submit" className="bg-blue-500 rounded-md text-white px-4 py-2 mx-2">
                Search
            </button>
            
        </form>
    );
}