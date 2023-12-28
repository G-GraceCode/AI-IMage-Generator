import { CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <Nav className="w-[90%] mx-auto flex justify-between items-center bg-white sm:px-8 px-4 py-3 my-2 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
      <div className="flex items-center">
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md creat-btn btn"
        >
          <CiCirclePlus /> Create
        </Link>
        <User className="w-10 p-3 h-10 flex justify-center items-center bg-[#6449ff] ml-2">
          <FaUser />
          <p>SignOut</p>
        </User>
      </div>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  border-radius: 50px !important;
  margin-top: 5px;
  position: relative;
  z-index: 2;

  .btn {
    border-radius: 20px !important;
  }
`;

const User = styled.div`
  border-radius: 50px !important;
  cursor: pointer;
  color: #fefefe;

  p {
    position: absolute;
    color: #000;

    top: 70%;
    padding: 0.5rem;
    right: -12%;
    background-color: white;
    border-radius: 15px;
    margin: 0.4rem;
    opacity: 0;
    transition: right 400ms ease-in-out;
    cursor: pointer;
    z-index: -2;
  }
  &:hover {
    p {
      z-index: -2;
      right: 0%;
      opacity: 1;
      transition: right 400ms ease-in-out;
    }
  }
`;
