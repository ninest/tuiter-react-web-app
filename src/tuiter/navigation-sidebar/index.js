import React from "react";
import { FaBell, FaBookmark, FaEllipsis, FaEnvelope, FaHashtag, FaHouse, FaList, FaUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const NavigationSidebar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "more"];
  const icons = [FaHouse, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaEllipsis];

  return (
    <div className="list-group">
      {!currentUser && (
        <Link className="list-group" to="/tuiter/login" className="list-group-item">
          Login
        </Link>
      )}
      {!currentUser && (
        <Link className="list-group" to="/tuiter/register" className="list-group-item">
          Register
        </Link>
      )}
      {currentUser && (
        <Link
          to={`/tuiter/${"profile"}`}
          className={`list-group-item text-capitalize ${
            active === "profile" ? "active" : ""
          } d-flex align-items-center justify-content-center justify-content-md-start`}
        >
          <FaUser />
          <div className="d-none d-xl-block ps-xl-2">Profile</div>
        </Link>
      )}
      {links.map((link, index) => {
        const Icon = icons[index];
        return (
          <Link
            key={index}
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${
              active === link ? "active" : ""
            } d-flex align-items-center justify-content-center justify-content-md-start`}
          >
            <Icon />
            <div className="d-none d-xl-block ps-xl-2">{link}</div>
          </Link>
        );
      })}
    </div>
  );
};
export default NavigationSidebar;
