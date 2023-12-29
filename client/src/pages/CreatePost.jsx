import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
import styled from "styled-components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [geneImg, setGeneImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    console.log("prompt", form.prompt);
    if (form.prompt) {
      try {
        setGeneImg(true);
        const res = await fetch("https://r2f35v-5000.csb.app/api/v1/dalle", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: form.prompt }),
          // credentials: "include",
        });
        console.log("res", res);
        const data = await res.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (e) {
        alert(e);
      } finally {
        setGeneImg(false);
      }
    } else {
      alert("Please Enter a prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.photo && form.prompt) {
      try {
        setLoading(true);
        const sharePost = await fetch(
          "https://r2f35v-5000.csb.app/api/v1/post",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form }),
          },
        );
        await sharePost.json();
        navigate("/");
      } catch (e) {
        alert(e.message);
      } finally {
        setLoading(false);
        setForm({
          ...form,
          name: "",
          prompt: "",
          photo: "",
        });
      }
    } else {
      alert("Please enter prompt and generate an image");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSurpriseMe = (e) => {
    e.preventDefault();
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  return (
    <Section className="max-w-7xl max-auto">
      <div>
        <h1 className="font-extrabold text-[#f9fafe] text-[32px] text-center">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px] mx-auto text-center">
          Create imaginative and visually stunning images Via Dall-E AI and
          share throught the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl mx-auto" onSubmit={handleSubmit}>
        <div>
          <FormField
            labelName="Your name"
            type="text"
            name="name"
            placeholder="eg, John"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            labelName="prompt"
            type="text"
            name="prompt"
            placeholder="like.. panda mad scientist mixing sparkling chemicals, digital arteg, John"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-grey-300 mt-4 mx-auto text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="prompt"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {geneImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={generateImage}
            className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {geneImg ? "Generating..." : "Generate"}
          </button>
        </div>
        <div className="mt-1o text-center">
          <p className="mt-2 text-[#666e75] text-[14px]">
            Once you have created the image, you can share it with other in the
            community
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the community."}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default CreatePost;

const Section = styled.section``;
