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

  return (
    <Section className="max-w-7xl max-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px] text-center">
          Create
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px] text-center">
          Create imaginative and visually stunning images Via Dall-E AI and
          share throught the community
        </p>
      </div>
    </Section>
  );
};

export default CreatePost;

const Section = styled.section``;
