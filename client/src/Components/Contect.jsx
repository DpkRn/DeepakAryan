import React, { useState } from "react";
import Call from "../assets/call.gif";
import location from "../assets/location.gif";
import mail from "../assets/gmail-logo.gif";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contect() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    from_email: "",
    from_phone: "",
    related_to: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const container = {
      service_id: "service_wr8gbpn",
      template_id: "template_ruapm7a",
      user_id: "9D2Kg29az-1r4xByv",
      template_params: data,
      reply_to:
        "Thanks for contacting me, i got you message we will get back to you soon",
    };

    console.log(container);

    await emailjs
      .send(
        "service_wr8gbpn",
        "template_ruapm7a",
        {
          firstName: data.firstName,
          lastName: data.lastName,
          from_email: data.from_email,
          from_phone: data.from_phone,
          message: data.message,
          related_to: data.related_to,
          reply_to: "i got your message thanks",
        },
        {
          publicKey: "9D2Kg29az-1r4xByv",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thanks for Contacting..");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("something went wrong! try again");
        }
      );
  };

  return (
    <>
      <div
        id="contactSection"
        className="grid grid-cols-1 md:grid-cols-1 gap-0
    border-1 border-blue-950 pt-10  bg-gray-900  "
      >
        <div className="section-header my-10">
          <h1
            className="
      text-xl            /* Default for 250px screens */
      font-bold 
      font-sans
      sm:text-2xl        /* Screen size >= 425px */
      md:text-3xl        /* Screen size >= 763px */
      lg:text-4xl        /* Screen size >= 1024px */
      xl:text-5xl        /* Screen size >= 1440px */
      ExtraLarge:text-8xl /* Screen size >= 2560px */
      ExtraLarge:p-5 
      text-gray-500
    "
          >
            Get in touch
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 justify-content-start ">
          <div className="border-2 border-solid  border-gray-700 md:col-span-7 rounded-2xl p-5 m-2 md:p-8 mb-10  flex justify-center flex-col">
            <div className=" ">
              <h1 className="text-xl font-bold mb-4 text-[aqua]">
                Let's Work Together!
              </h1>
              <p className=" mb-6 text-white text-lg">
                I create a elegantly simple designs and code with passion it's
                as straight forword as that
              </p>
            </div>
            <form action="#" method="POST" className=" p-2 text-white md:p-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <!-- First Name and Last Name --> */}

                <div className="flex flex-col">
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    value={data.firstName}
                    placeholder=" First Name"
                    className="border bg-[#081b29]  border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 md:p-5"
                    required
                    onChange={(e) => {
                      setData({ ...data, firstName: e.target.value });
                    }}
                  />
                </div>

                <div className="flex flex-col  ">
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    value={data.lastName}
                    placeholder=" Last Name"
                    className="border md:p-5 bg-[#081b29] border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={(e) => {
                      setData({ ...data, lastName: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 ">
                {/* <!-- Email and Phone Number --> */}
                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={data.from_email}
                    placeholder="Email Address"
                    className="border md:p-5 bg-[#081b29] border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={(e) => {
                      setData({ ...data, from_email: e.target.value });
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={data.from_phone}
                    placeholder=" Phone Number"
                    className="border md:p-5 bg-[#081b29] text-white border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    onChange={(e) => {
                      setData({ ...data, from_phone: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col pt-4">
                <select
                  id="selection"
                  name="selection"
                  value={data.related_to}
                  placeholder=" Select Option"
                  className="border md:p-5 bg-[#081b29]  text-gray-400 border-none rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    setData({ ...data, related_to: e.target.value });
                  }}
                >
                  <option>Select an option</option>
                  <option>Website</option>
                  <option>Web Apps</option>
                  <option>Mobile Apps</option>
                  <option>Computer Software</option>
                </select>
              </div>
              <div className="flex flex-col pt-4 ">
                <textarea
                  name="msg"
                  id="msg"
                  value={data.message}
                  placeholder="Message"
                  className=" md:p-5 rounded-lg bg-[#081b29] border-none h-full min-h-[100px] w-full text-white p-2"
                  onChange={(e) => {
                    setData({ ...data, message: e.target.value });
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={sendEmail}
                className=" md:px-10 md:py-5 bg-[#081b29] text-white px-4 py-2 mt-4 rounded-xl  font-medium cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </form>
          </div>

          <div className=" rounded-2xl p-3 m-5 flex flex-col md:justify-center md:items-center md:col-span-5">
            <ul role="list" className="py-6 ">
              <li className="flex py-2  ">
                <div className="size-10 rounded-full border flex justify-center items-center bg-white">
                  <img src={Call} alt="" className="size-8 p-1" />
                </div>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-white">Phone</p>
                  <p className="text-sm font-medium text-white"> +91 9123295088</p>
                </div>
              </li>
            </ul>

            <ul role="list" className="py-6 divide-y divide-slate-200">
              <li className="flex ">
                <div className="size-10 rounded-full border flex justify-center items-center bg-white">
                  <img src={mail} alt="" className="size-8 p-1" />
                </div>
                <div className="ml-3 overflow-hidden">
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="text-sm font-medium text-white text-wrap mr-4">
                    anu.wizard.techno98@gmail.com
                  </p>
                </div>
              </li>
            </ul>

            <ul role="list" className="py-6 divide-y divide-slate-200">
              <li className="flex py-4 first:pt-0 last:pb-0">
                <div className="size-10 rounded-full border flex justify-center items-center bg-white">
                  <img src={location} alt="" className="size-8 p-1" />
                </div>

                <div className="ml-3 overflow-hidden">
                  <p className="text-sm  text-white">Address</p>
                  <p className="text-sm font-medium text-white">Delhi NCR India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Contect;
