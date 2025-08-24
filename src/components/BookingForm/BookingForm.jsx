import css from "./BookingForm.module.css";
import * as Yup from "yup";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { toast, Toaster } from "react-hot-toast";
import Calendar from "../Calendar/Calendar";

const BookingForm = () => {
  const initialValues = {
    username: "",
    email: "",
    bookingDates: [null, null],
    comment: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    toast.success(
      <div>
        Form submitted successfully!
        <br />
        <strong>Name:</strong> {values.name}
        <br />
        <strong>Email:</strong> {values.email}
        <br />
        <strong>Booking date:</strong>{" "}
        {values.bookingDate
          ? values.bookingDate.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Not selected"}
        <br />
        <strong>Comment:</strong> {values.comment}
      </div>
    );
    resetForm();
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Required")
      .matches(
        /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Must be a valid email!"
      ),
    bookingDates: Yup.array()
      .of(Yup.date().required("Required"))
      .min(2, "Please select a start and end date"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form} autoComplete="off">
          <h2 className={css.formTitle}>Book your campervan now</h2>
          <p className={css.subTitle}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.errorContainer}>
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
            <Field
              className={css.inputText}
              type="text"
              name="username"
              placeholder="Name*"
            />
          </div>
          <div className={css.errorContainer}>
            <ErrorMessage className={css.error} name="email" component="span" />
            <Field
              className={css.inputText}
              type="text"
              name="email"
              placeholder="Email*"
            />
          </div>

          <div className={css.errorContainer}>
            <ErrorMessage
              className={css.error}
              name="bookingDate"
              component="span"
            />
            <Calendar name="bookingDates" />
          </div>

          <Field
            className={css.inputComment}
            name="comment"
            placeholder="Comment"
          />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </>
  );
};

export default BookingForm;
