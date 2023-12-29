import { CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "../assets/index";
import { FaUser } from "react-icons/fa6";

const Header = () => {
  return (
    <Nav className="w-[90%] mx-auto flex justify-between items-center bg-white sm:px-8 px-4 py-2 my-4 border-b border-b-[#e6ebf4]">
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
