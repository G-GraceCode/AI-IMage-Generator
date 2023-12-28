import React from "react";
import styled from "styled-components";
import { gene } from "../assets/index";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  return (
    <Section className="max-w-4xl max-auto mx-auto flex items-center justify-center">
      <div className="content text-center text-[#fefefe] p-2">
        <h2> Create imaginative and visually stunning images using AI</h2>
        <div className="mt-4">
          <p>Social Authentication</p>
          <button className="font-inter font-medium bg-[#fefefe] text-white mx-auto mt-2 px-4 py-4 rounded-md creat-btn btn">
            <FcGoogle /> Sign Up with Google
          </button>
        </div>
      </div>
    </Section>
  );
};
export default Signup;

const Section = styled.section`
  position: fixed;
  inset: 0;
  background-image: url(${gene});
  filter: saturate(1.3);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100dvh;
  width: 100dvw;
  .content {
    h2 {
      font-size: 45px;
      font-weight: 600;
      text-transform: capitalize;
    }
    & > div {
      .btn {
        border-radius: 50px !important;
        color: #000;
      }
    }
  }
`;
