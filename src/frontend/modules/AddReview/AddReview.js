import React, { useState } from 'react';
import "../../../backend/models/Review.js"


function ReviewForm() {
    const [formData, setFormData] = useState({
        assessmentScale: [
            {
                parameter: '',
                rating: 0,
            },
        ],
        description: '',
        overallRating: 0,
        bookId: '', // You may need to fetch the available book options
        userId: '', // You may need to fetch the available user options
        isExpert: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleParameterChange = (index, value) => {
        const updatedAssessmentScale = [...formData.assessmentScale];
        updatedAssessmentScale[index].parameter = value;
        setFormData({
            ...formData,
            assessmentScale: updatedAssessmentScale,
        });
    };

    const handleRatingChange = (index, value) => {
        const updatedAssessmentScale = [...formData.assessmentScale];
        updatedAssessmentScale[index].rating = value;
        setFormData({
            ...formData,
            assessmentScale: updatedAssessmentScale,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to your backend API to save the review to MongoDB
        // saveReview(formData)
        //     .then(savedReview => {
        //         console.log('Review saved:', savedReview);
        //     })
        //     .catch(error => {
        //         console.error('Error saving review:', error);
        //     })

    };

    // Add code to fetch available book and user options for bookId and userId fields

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Assessment Scale:</label>
                {formData.assessmentScale.map((scale, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name={`assessmentScale[${index}].parameter`}
                            value={scale.parameter}
                            onChange={(e) => handleParameterChange(index, e.target.value)}
                        />
                        <input
                            type="number"
                            name={`assessmentScale[${index}].rating`}
                            value={scale.rating}
                            onChange={(e) => handleRatingChange(index, parseFloat(e.target.value))}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={() =>
                        setFormData({
                            ...formData,
                            assessmentScale: [...formData.assessmentScale, { parameter: '', rating: 0 }],
                        })
                    }
                >
                    Add Parameter
                </button>
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Overall Rating:</label>
                <input
                    type="number"
                    name="overallRating"
                    value={formData.overallRating}
                    onChange={(e) => setFormData({ ...formData, overallRating: parseFloat(e.target.value) })}
                />
            </div>
            <div>
                <label>Book ID:</label>
                <input
                    type="text"
                    name="bookId"
                    value={formData.bookId}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>User ID:</label>
                <input
                    type="text"
                    name="userId"
                    value={formData.userId}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Is Expert:</label>
                <input
                    type="checkbox"
                    name="isExpert"
                    checked={formData.isExpert}
                    onChange={(e) => setFormData({ ...formData, isExpert: e.target.checked })}
                />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;
