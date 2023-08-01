import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaHouse, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsis } from "react-icons/fa6";

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [ignore, tuiter, active] = pathname.split("/");
  const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
  const icons = [FaHouse, FaHashtag, FaBell, FaEnvelope, FaBookmark, FaList, FaUser, FaEllipsis];
  return (
    <div className="list-group">
      {links.map((link, index) => {
        const Icon = icons[index];
        return (
          <Link
            key={index}
            to={`/tuiter/${link}`}
            className={`list-group-item text-capitalize ${
              active === link  ? "active" : ""
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
