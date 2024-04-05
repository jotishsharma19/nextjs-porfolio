"use client";
import React, { useState } from "react";

const SubForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      return;
    } else {
      setEmailError("");
    }

    if (message.trim() === "") {
      setMessageError("Message is required");
      return;
    } else {
      setMessageError("");
    }

    setLoading(true);

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Form submitted successfully");
        setEmail("");
        setMessage("");

        // Remove success status after 3 seconds
        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("Error submitting form");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(""); // Reset email error when email changes
    setStatus(""); // Reset status when email changes
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError(""); // Reset message error when message changes
    setStatus(""); // Reset status when message changes
  };

  return (
    <>
      <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
        <div className="relative p-8 text-center w-full">
          <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
            Queries?
          </p>

          <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className={`block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                  emailError ? "border-red-500" : ""
                }`}
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Query
              </label>
              <textarea
                id="message"
                rows="4"
                className={`block w-full px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm ${
                  messageError ? "border-red-500" : ""
                }`}
                placeholder="Leave your query..."
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              {messageError && (
                <p className="text-red-500 text-sm mt-1">{messageError}</p>
              )}
            </div>

            <div className="mt-4 relative">
              <button
                type="submit"
                className={`text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg ${
                  loading
                    ? "bg-gray-400"
                    : "bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10"
                } text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-center`}
                disabled={loading}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4c-2.086 0-3.998-.81-5.464-2.209l1.728-1.729z"
                    ></path>
                  </svg>
                )}
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {status && <p className="mt-4 text-green-600">{status}</p>}
        </div>
      </div>
    </>
  );
};

export default SubForm;
