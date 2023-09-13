import React from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
    const booksData = [
        {
            bookId: '1',
            title: "Medical Book Title 1",
            imageUrl: "https://example.com/book-image1.jpg",
            publication: "Medical Publisher 1",
            publicationDate: "2023-09-13",
            domain: "Medicine",
            userOverallRating: 4.5,
            userCompletenessRating: 4.2,
            userRelevancyRating: 4.6,
            userClarityRating: 4.8,
            expertOverallRating: 4.7,
            expertCompletenessRating: 4.5,
            expertRelevancyRating: 4.9,
            expertClarityRating: 4.7
        },
        {
            bookId: '2',
            title: "Medical Book Title 2",
            imageUrl: "https://example.com/book-image2.jpg",
            publication: "Medical Publisher 2",
            publicationDate: "2023-09-15",
            domain: "Medicine",
            userOverallRating: 4.4,
            userCompletenessRating: 4.1,
            userRelevancyRating: 4.5,
            userClarityRating: 4.7,
            expertOverallRating: 4.6,
            expertCompletenessRating: 4.4,
            expertRelevancyRating: 4.8,
            expertClarityRating: 4.6
        },
        {
            bookId: '3',
            title: "Medical Book Title 3",
            imageUrl: "https://example.com/book-image3.jpg",
            publication: "Medical Publisher 3",
            publicationDate: "2023-09-17",
            domain: "Medicine",
            userOverallRating: 4.2,
            userCompletenessRating: 4.3,
            userRelevancyRating: 4.7,
            userClarityRating: 4.9,
            expertOverallRating: 4.8,
            expertCompletenessRating: 4.7,
            expertRelevancyRating: 4.9,
            expertClarityRating: 4.8
        },
        {
            bookId: '4',
            title: "Medical Book Title 4",
            imageUrl: "https://example.com/book-image4.jpg",
            publication: "Medical Publisher 4",
            publicationDate: "2023-09-19",
            domain: "Medicine",
            userOverallRating: 4.6,
            userCompletenessRating: 4.0,
            userRelevancyRating: 4.4,
            userClarityRating: 4.5,
            expertOverallRating: 4.9,
            expertCompletenessRating: 4.8,
            expertRelevancyRating: 4.9,
            expertClarityRating: 4.7
        },
        {
            bookId: '5',
            title: "Medical Book Title 5",
            imageUrl: "https://example.com/book-image5.jpg",
            publication: "Medical Publisher 5",
            publicationDate: "2023-09-21",
            domain: "Medicine",
            userOverallRating: 4.3,
            userCompletenessRating: 4.4,
            userRelevancyRating: 4.8,
            userClarityRating: 4.6,
            expertOverallRating: 4.7,
            expertCompletenessRating: 4.6,
            expertRelevancyRating: 4.8,
            expertClarityRating: 4.5
        },
        // Add more books as needed
    ];

    return (
        <div>
            <h1>Books</h1>
            <div className="books-grid">
                {booksData.map((book) => (
                    <Link to={`/book/${book.bookId}`} key={book.id} className="book-card">
                        <h2>{book.title}</h2>
                        {/* Add book cover and other book details here */}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Books;
