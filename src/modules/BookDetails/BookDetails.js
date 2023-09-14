import React from 'react';
import { useParams } from 'react-router-dom';
import './Bookdetails.css'
import Navbar from '../../Widgets/navbar/Navbar.js';
import { Link } from 'react-router-dom';




const BookDetails = () => {
    const booksData = [
        {
            bookId: '1',
            title: "Medical Book Title 1",
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
            publication: "Medical Publisher 1",
            publicationDate: "2023-09-13",
            domain: "Medicine",
            summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae metus ac orci bibendum feugiat vel a ligula. Nullam bibendum ex quis turpis ultrices, a vehicula est scelerisque.",
            userRatings: [
                { aspect: "Overall Rating", value: 4.5 },
                { aspect: "Completeness", value: 4.2 },
                { aspect: "Relevancy", value: 4.6 },
                { aspect: "Clarity", value: 4.8 },
            ],
            expertRatings: [
                { aspect: "Overall Rating", value: 4.7 },
                { aspect: "Completeness", value: 4.5 },
                { aspect: "Relevancy", value: 4.9 },
                { aspect: "Clarity", value: 4.7 },
            ],
            overallRating: 4.25,

        },
        {
            bookId: '2',
            title: "Medical Book Title 2",
            imageUrl: "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?w=826&t=st=1694619054~exp=1694619654~hmac=88a142cbcdc40620d5e2fe2662ea41bf8d5f434b4834ff0130e19d4f5332283c",
            publication: "Medical Publisher 2",
            publicationDate: "2023-09-15",
            domain: "Medicine",
            summary: "This code will create a parent container with rounded corners that separates the Expert Reviews and User Reviews sections into two different containers with rounded corners as well. It uses flexbox for layout and adds spacing between the two containers. You can further customize the styles as per your design preferences.",
            userRatings: [
                { aspect: "Overall Rating", value: 4.4 },
                { aspect: "Completeness", value: 4.1 },
                { aspect: "Relevancy", value: 4.5 },
                { aspect: "Clarity", value: 4.7 },
            ],
            expertRatings: [
                { aspect: "Overall Rating", value: 4.6 },
                { aspect: "Completeness", value: 4.4 },
                { aspect: "Relevancy", value: 4.8 },
                { aspect: "Clarity", value: 4.6 },
            ],
            overallRating: 4.25,

        },
        // Add more books as needed
    ];
    const reviewsData = [
        {
            assessmentScale: [
                { parameter: "Accuracy of Content", rating: 4 },
                { parameter: "Relevance to Syllabus", rating: 4.5 },
            ],
            description: "This code will create a parent container with rounded corners that separates the Expert Reviews and User Reviews sections into two different containers with rounded corners as well. It uses flexbox for layout and adds spacing between the two containers. You can further customize the styles as per your design preferences.",
            overallRating: 4.25,
            bookId: "6157c98409c43f8ab7eb3b65", // Replace with a valid Book ObjectId
            userId: "6157c98409c43f8ab7eb3b66", // Replace with a valid User ObjectId
            isExpert: false,
        },
        {
            assessmentScale: [
                { parameter: "Accuracy of Content", rating: 4.2 },
                { parameter: "Relevance to Syllabus", rating: 4.4 },
            ],
            description: "This code will create a parent container with rounded corners that separates the Expert Reviews and User Reviews sections into two different containers with rounded corners as well. It uses flexbox for layout and adds spacing between the two containers. You can further customize the styles as per your design preferences.",
            overallRating: 4.3,
            bookId: "6157c98409c43f8ab7eb3b67", // Replace with a valid Book ObjectId
            userId: "6157c98409c43f8ab7eb3b68", // Replace with a valid User ObjectId
            isExpert: true,
        },
        {
            assessmentScale: [
                { parameter: "Accuracy of Content", rating: 4 },
                { parameter: "Relevance to Syllabus", rating: 4.5 },
            ],
            description: "A well-written and informative book.",
            overallRating: 4.25,
            bookId: "6157c98409c43f8ab7eb3b65", // Replace with a valid Book ObjectId
            userId: "6157c98409c43f8ab7eb3b66", // Replace with a valid User ObjectId
            isExpert: false,
        },
        {
            assessmentScale: [
                { parameter: "Accuracy of Content", rating: 4.2 },
                { parameter: "Relevance to Syllabus", rating: 4.4 },
            ],
            description: "Great book, covers all the required topics.",
            overallRating: 4.3,
            bookId: "6157c98409c43f8ab7eb3b67", // Replace with a valid Book ObjectId
            userId: "6157c98409c43f8ab7eb3b68", // Replace with a valid User ObjectId
            isExpert: true,
        },
        // Add more reviews as needed
    ];


    // Function to convert numeric rating to star format
    function renderStarRating(rating) {
        const maxRating = 5; // Maximum rating value
        const roundedRating = Math.round(rating); // Round the rating to the nearest whole number
        const starArray = [];

        for (let i = 1; i <= maxRating; i++) {
            // Add a filled star if i is less than or equal to the rounded rating
            if (i <= roundedRating) {
                starArray.push(<span key={i} className="star-filled">★</span>);
            } else {
                // Add an empty star if i is greater than the rounded rating
                starArray.push(<span key={i} className="star-empty">☆</span>);
            }
        }

        return (
            <div className="star-rating">
                {starArray}
            </div>
        );
    }






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
                <div className='details-section'>
                    <div className="book-image-container">
                        <div className="book-image">
                            <img src={book.imageUrl} alt={book.title} />
                        </div>
                    </div>
                    <div className="book-info">
                        <h2>{book.title}</h2>
                        <p>Publication: {book.publication}</p>
                        <p>Publication Date: {book.publicationDate}</p>
                        <p>Domain: {book.domain}</p>
                        <div className="overall-rating">
                            <p>Overall Rating: {book.overallRating.toFixed(1)}</p>
                            {renderStarRating(book.overallRating)}
                        </div>
                    </div>
                </div>
                <div className="ratings">
                    <div className="expert-ratings">
                        <h2>Expert Ratings</h2>
                        {book.expertRatings.map((rating, index) => (
                            <div key={index}>
                                <p>{rating.aspect}: {rating.value.toFixed(1)}</p>
                                {renderStarRating(rating.value)}
                            </div>
                        ))}
                    </div>
                    <div className="user-ratings">
                        <h2>User Ratings</h2>
                        {book.userRatings.map((rating, index) => (
                            <div key={index}>
                                <p>{rating.aspect}: {rating.value.toFixed(1)}</p>
                                {renderStarRating(rating.value)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="summary-section">
                <h2>Summary</h2>
                <p>{book.summary}</p>
            </div>
            <div className="review-section">
                <div className="reviews-container">
                    <div className='hedingButton'>
                        <h2>Reviews</h2>
                        <div className="add-review-button">
                            <Link to={`/book/${book.bookId}/addReview`} key={book.id} ><button >Add Review</button></Link>

                        </div>

                    </div>
                    <div className='reviews'>
                        <div className="expert-reviews">
                            <h3>Expert Reviews</h3>
                            <div className="review-list">
                                {reviewsData.map((review, index) => (
                                    review.isExpert && (

                                        <li key={index}>
                                            <div className="review-container">
                                                <div className="review-content">
                                                    <p>{review.description}</p>
                                                </div>
                                                <div className="review-rating">
                                                    <p>{review.overallRating.toFixed(1)}/5</p>
                                                </div>
                                            </div>

                                        </li>
                                    )
                                ))}
                            </div>
                        </div>
                        <div className="user-reviews">
                            <h3>User Reviews</h3>
                            <div className="review-list">
                                {reviewsData.map((review, index) => (
                                    !review.isExpert && (
                                        <li key={index}>
                                            <div className="review-container">

                                                <div className="review-content">
                                                    <p>{review.description}</p>
                                                </div>
                                                <div className="review-rating">
                                                    <p>{review.overallRating.toFixed(1)}/5</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            

        </div>
    );
};

export default BookDetails;
