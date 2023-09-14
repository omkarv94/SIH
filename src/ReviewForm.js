import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Rating from 'react-rating-stars-component';

const RatingForm = () => {
  const validationSchema = Yup.object().shape({
    parameter1: Yup.number().required('Accuracy of Content'),
    parameter2: Yup.number().required('Relevance to Syllabus'),
    parameter3: Yup.number().required('Clarity of Explaination'),
    parameter4: Yup.number().required('Up-to-date Information'),
    parameter5: Yup.number().required('Education Value'),
    review: Yup.string().required('Review is required'),
  });

  const formik = useFormik({
    initialValues: {
      parameter1: 0,
      parameter2: 0,
      parameter3: 0,
      parameter4: 0,
      parameter5: 0,
      review: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here (e.g., send data to your backend)
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <><div className="rating-form">
          <h2>Rate the Book</h2>
          <form onSubmit={formik.handleSubmit}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100%"}}>
              <div className="row mb-2">
                  <div className="col">
                      <div className="form-group">
                          <label>Accuracy of Content</label>
                          <Rating
                              count={5}
                              size={18}
                              value={formik.values.parameter1}
                              onChange={(newRating) => formik.setFieldValue('parameter1', newRating)}
                              color="#ffd700"
                              activeColor="#ff9a00" />
                          {formik.errors.parameter1 && formik.touched.parameter1 && (
                              <div className="error">{formik.errors.parameter1}</div>
                          )}
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Relevance to Syllabus</label>
                          <Rating
                              count={5}
                              size={18}
                              value={formik.values.parameter2}
                              onChange={(newRating) => formik.setFieldValue('parameter2', newRating)}
                              color="#ffd700"
                              activeColor="#ff9a00" />
                          {formik.errors.parameter2 && formik.touched.parameter2 && (
                              <div className="error">{formik.errors.parameter2}</div>
                          )}
                      </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col mb-2">
                      <div className="form-group">
                          <label>Clarity of Explaination</label>
                          <Rating
                              count={5}
                              size={18}
                              value={formik.values.parameter3}
                              onChange={(newRating) => formik.setFieldValue('parameter3', newRating)}
                              color="#ffd700"
                              activeColor="#ff9a00" />
                          {formik.errors.parameter3 && formik.touched.parameter3 && (
                              <div className="error">{formik.errors.parameter3}</div>
                          )}
                      </div>
                  </div>
                  <div className="col">
                      <div className="form-group">
                          <label>Up-to-date Information</label>
                          <Rating
                              count={5}
                              size={18}
                              value={formik.values.parameter4}
                              onChange={(newRating) => formik.setFieldValue('parameter4', newRating)}
                              color="#ffd700"
                              activeColor="#ff9a00" />
                          {formik.errors.parameter4 && formik.touched.parameter4 && (
                              <div className="error">{formik.errors.parameter4}</div>
                          )}
                      </div>
                  </div>
              </div>
              <div className="row mb-2">
                  <div className="col">
                      <div className="form-group">
                          <label>Education Value</label>
                          <Rating
                              count={5}
                              size={18}
                              value={formik.values.parameter5}
                              onChange={(newRating) => formik.setFieldValue('parameter5', newRating)}
                              color="#ffd700"
                              activeColor="#ff9a00" />
                          {formik.errors.parameter5 && formik.touched.parameter5 && (
                              <div className="error">{formik.errors.parameter5}</div>
                          )}
                      </div>
                  </div>
              </div>
              </div>
              <div className="form-group mt-3">
                  <label><h3>Write Your Review:</h3></label>
                  <textarea
                      className="form-control"
                      rows="5"
                      id="review"
                      name="review"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.review}
                      placeholder="Write your review here..."
                  ></textarea>
                  {formik.errors.review && formik.touched.review && (
                      <div className="error">{formik.errors.review}</div>
                  )}
              </div>
              <button type="submit" className="btn btn-danger mt-2">
                  Submit Review
              </button>
          </form>
      </div></>
  );
};

export default RatingForm;
