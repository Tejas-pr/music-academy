"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { Meteors } from "@/components/ui/meteors";

function MusicSchoolContactUs() {
  const [emailDebounce, setEmailDebounce] = useState("");
  const [messageDebounce, setMessageDebounce] = useState("");

  let email = "";  
  let message = "";  

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    email = e.target.value;
    debounceEmailUpdate(email);  
  };
  const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    message = e.target.value;
    debounceMessageUpdate(message); 
  };

  const debounceEmailUpdate = debounce((newEmail: string) => {
    setEmailDebounce(newEmail);
  }, 500);

  const debounceMessageUpdate = debounce((newMessage: string) => {
    setMessageDebounce(newMessage);
  }, 500);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <Meteors number={75} className="absolute inset-0">
        <div className="max-w-2xl mx-auto p-4 relative z-10">
          <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
            We&apos;re here to help with any questions about our courses,
            programs, or events. Reach out and let us know how we can assist you
            in your musical journey.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <input
              type="email"
              placeholder="Your email address"
              onChange={emailHandler}
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              required
            />
            <textarea
              placeholder="Your message"
              onChange={messageHandler}
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </Meteors>
    </div>
  );
}

function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

export default MusicSchoolContactUs;
