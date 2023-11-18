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

  const handleSubmit = (e) => {
    e.preventDefault()
  }
const handleChange = (e) => {
  const {name, value} = e.target
  setForm({
    ...form,
    [name]: value,
  })
}
const handleSurpriseMe = () => {
  
}
  return (
    <Section className="max-w-7xl max-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px] text-center">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px] mx-auto text-center">
          Create imaginative and visually stunning images Via Dall-E AI and
          share throught the community
        </p>
      </div>

      <form>
      <div>
        <FormField 
        labelName="Your name"
        type="text"
        name='name'
        placeholder='eg, John'
        value={form.name}
        handleChange={handleChange}
        />
        <FormField 
        labelName="prompt"
        type="text"
        name='prompt'
        placeholder='eg, John'
        value={form.prompt}
        handleChange={handleChange}
        isSurpriseMe
        />
      </div>
      </form>
    </Section>
  );
};

export default CreatePost;

const Section = styled.section``;
