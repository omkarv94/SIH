import Review from "../models/Review";

async function saveReview(formData) {

    try {
        const newReview = new Review(formData);
        const savedReview = newReview.save();
        return savedReview;
    } catch (error) {
        throw error;
    }
}

module.exports = saveReview



