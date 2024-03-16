import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successfulMessage, setSuccessfulMessage] = useState("");

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 15) + 1);
    setNum2(Math.floor(Math.random() * 15) + 1);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setUserAnswer("");
      setSuccessfulMessage("Form submitted successfully!");
      setNum1(Math.floor(Math.random() * 15) + 1);
      setNum2(Math.floor(Math.random() * 15) + 1);
    } else {
      setSubmitted(false);
      setErrorMessage("Invalid captcha. Please try again.");
    }
  };

  return (
    <div className="contactContainer">
      <div className="contactDescription">
        <h1>Contact Us</h1>
        <p>
          Welcome to Wikipurrdia's "Contact Us" page! We're delighted to connect
          with fellow cat enthusiasts, contributors, and those curious about our
          feline friends. Whether you have questions, suggestions, or just want
          to share your love for cats, we're here to listen.
          <br />
          <br /> At Wikipurrdia, our mission is to provide a comprehensive and
          reliable resource for all things related to cats. From their
          fascinating behaviors to their diverse breeds, we aim to satisfy your
          curiosity and deepen your understanding of these amazing creatures.{" "}
          <br />
          <br /> If you have any inquiries about our content, want to report an
          issue, or simply want to say hello, please don't hesitate to reach out
          to us using the form. Your feedback is invaluable to us as we strive
          to improve and expand Wikipurrdia's offerings. Thank you for being a
          part of our community and for your passion for cats. We look forward
          to hearing from you!
          <br />
          <br /> Best regards, The Wikipurrdia Team
        </p>
      </div>
      <form onSubmit={handleSubmit} className="formContainer">
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Enter Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Enter Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <textarea
          id="message"
          name="message"
          placeholder="Enter your message*"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
        <br />
        <div className="captchaContainer">
          <label htmlFor="captcha">{`Are you Human? ${num1} + ${num2} =`}</label>
          <br />
          <input
            id="captcha"
            type="number"
            placeholder="Enter the correct answer*"
            value={userAnswer}
            onChange={handleCaptchaChange}
            required
          />
        </div>
        <br />
        <input type="submit" value="Submit" className="submit" />

        {submitted ? (
          <p style={{ color: "green" }}>{successfulMessage}</p>
        ) : (
          <p style={{ color: "red" }}>{errorMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
