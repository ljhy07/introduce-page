import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  height: 9vh;
  width: 100%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 36px;
      color: black;
      font-weight: 600;
      //font-family: HyhwpEQ;
    }
  }
  .menuToggleBtn {
    display: none;
    color: white;
    font-size: 2.2rem;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavManu = styled.ul`
  list-style: none;
  display: flex;

  li {
    transition: all 0.1s linear;
    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      background: rgba(255, 255, 255, 0);
      border-radius: 0.5rem;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: black;
    display: block;
    margin: 0 10px;
    padding: 10px 10px;
    font-size: 21px;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

const Nav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  return (
    <>
      <StyledHeader>
        <div className="nav_logo">
          <Link to={"/"} className="nav-logo-link">
            PORTFOLIO.
          </Link>
        </div>

        <NavManu isToggleOpen={isToggleOpen}>
          <li>
            <Link to={"/"} className="nav-menu-list">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="nav-menu-list">
              About
            </Link>
          </li>
          <li>
            <Link to={"/stack"} className="nav-menu-list">
              Stack
            </Link>
          </li>
          <li>
            <Link to={"/contect"} className="nav-menu-list">
              Contect
            </Link>
          </li>
          {/* <li>
            <Link to={"/another"} className="nav-menu-list">
              another
            </Link>
          </li> */}
        </NavManu>
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledHeader>
    </>
  );
};

export default Nav;