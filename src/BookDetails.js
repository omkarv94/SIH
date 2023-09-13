import React from 'react';
import { useParams } from 'react-router-dom';
import './Bookdetails.css'
import "./Navbar.js"
import Navbar from './Navbar.js';



const BookDetails = () => {
    const booksData = [
        {
            bookId: '1',
            title: "Medical Book Title 1",
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
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
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
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
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
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
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
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
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
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





    const { bookId } = useParams();
    const book = booksData.find((book) => book.bookId === bookId);
    console.log(book);

    if (!book) {
        return <div>Book not found</div>;
    }
    return (
        <div>
            <Navbar />            
            <div className="book-details-container">

                <div className="book-image">
                    <img src={book.imageUrl} alt={book.title} />
                </div>
                <div className="book-info">
                    <h1>{book.title}</h1>
                    <p>Publication: {book.publication}</p>
                    <p>Publication Date: {book.publicationDate}</p>
                    <p>Domain: {book.domain}</p>
                </div>
                <div className="ratings">
                    <div className="user-ratings">
                        <h2>User Ratings</h2>
                        <p>Overall Rating: {book.userOverallRating}</p>
                        <p>Completeness: {book.userCompletenessRating}</p>
                        <p>Relevancy to Domain: {book.userRelevancyRating}</p>
                        <p>Clarity of Education: {book.userClarityRating}</p>
                    </div>
                    <div className="expert-ratings">
                        <h2>Expert Ratings</h2>
                        <p>Overall Rating: {book.expertOverallRating}</p>
                        <p>Completeness: {book.expertCompletenessRating}</p>
                        <p>Relevancy to Domain: {book.expertRelevancyRating}</p>
                        <p>Clarity of Education: {book.expertClarityRating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
