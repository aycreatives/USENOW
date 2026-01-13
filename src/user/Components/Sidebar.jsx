import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // <-- import useNavigate

import {
  FiHome,
  FiKey,
  FiLogOut,
  FiSettings,
  FiFileText,
  FiClock,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  FaFlag,
  FaBuilding,
  FaCar,
  FaIdBadge,
  FaLeaf,
  FaSimCard,
  FaUserCheck,
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

import { RiPassportFill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { IoEnterSharp } from "react-icons/io5";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { MdDataThresholding } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import { GrValidate } from "react-icons/gr";
import { VscVerified } from "react-icons/vsc";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const getHistoryMenuItems = () => [
  {
    key: "funding",
    label: (
      <NavLink
        to="/dashboard/fundinghistory"
        className="flex items-center hover:text-blue-400"
      >
        <FiFileText className="w-5 h-5 mr-3" /> Funding History
      </NavLink>
    ),
  },
  {
    type: "divider",
  },
  {
    key: "verifications",
    label: <span className="text-white font-semibold">Verifications</span>,
    children: [
      {
        key: "bvn",
        label: (
          <NavLink to="/dashboard/bvnhistory" className="flex items-center">
            <VscVerified className="w-5 h-5 mr-3" /> BVN
          </NavLink>
        ),
      },
      {
        key: "nin",
        label: (
          <NavLink to="/dashboard/ninhistory" className="flex items-center">
            <MdHistory className="w-5 h-5 mr-3" /> NIN
          </NavLink>
        ),
      },
      {
        key: "ipe",
        label: (
          <NavLink to="/dashboard/ipe-history" className="flex items-center">
            <FaPersonCircleCheck className="w-5 h-5 mr-3" /> IPE Clearance
          </NavLink>
        ),
      },
    ],
  },
  {
    key: "registrations",
    label: <span className="text-white font-semibold">Registrations</span>,
    children: [
      {
        key: "enrollment",
        label: (
          <NavLink
            to="/dashboard/enrollment-history"
            className="flex items-center"
          >
            <IoEnterSharp className="w-5 h-5 mr-3" /> Enrollment
          </NavLink>
        ),
      },
      {
        key: "nin-modification",
        label: (
          <NavLink
            to="/dashboard/nin-modification-history"
            className="flex items-center"
          >
            <RiPassportFill className="w-5 h-5 mr-3" /> NIN Modification
          </NavLink>
        ),
      },
      {
        key: "cac",
        label: (
          <NavLink to="/dashboard/cac-history" className="flex items-center">
            <FaIdBadge className="w-5 h-5 mr-3" /> CAC
          </NavLink>
        ),
      },
      {
        key: "personalisation",
        label: (
          <NavLink
            to="/dashboard/personalisation-history"
            className="flex items-center"
          >
            <FaLeaf className="w-5 h-5 mr-3" /> Personalisation
          </NavLink>
        ),
      },
      {
        key: "bvn-licence",
        label: (
          <NavLink
            to="/dashboard/bvn-licence-history"
            className="flex items-center"
          >
            <FaCar className="w-5 h-5 mr-3" /> BVN Licence
          </NavLink>
        ),
      },
      {
        key: "validation",
        label: (
          <NavLink
            to="/dashboard/validation-history"
            className="flex items-center"
          >
            <GrValidate className="w-5 h-5 mr-3" /> Validation
          </NavLink>
        ),
      },
    ],
  },
  {
    key: "vtu",
    label: <span className="text-white font-semibold">VTU</span>,
    children: [
      {
        key: "data",
        label: (
          <NavLink to="/dashboard/data-history" className="flex items-center">
            <MdDataThresholding className="w-5 h-5 mr-3" /> Data
          </NavLink>
        ),
      },
      {
        key: "airtime",
        label: (
          <NavLink
            to="/dashboard/airtime-history"
            className="flex items-center"
          >
            <FaPhone className="w-5 h-5 mr-3" /> Airtime
          </NavLink>
        ),
      },
    ],
  },
];

const sidebarSections = [
  {
    section: "",
    links: [
      {
        to: "/dashboard",
        icon: <FiHome className="w-5 h-5" />,
        label: "Dashboard",
        end: true, // <-- add this property
      },
    ],
  },
  {
    section: "AUTOMATIC SERVICES",
    links: [
      {
        to: "/dashboard/verifications/nin",
        icon: <FaFlag className="w-5 h-5" />,
        label: "NIN Verification",
      },

      {
        to: "/dashboard/verifications/bvn",
        icon: <FaSimCard className="w-5 h-5" />,
        label: "BVN Verification",
      },

      {
        to: "/dashboard/ipe-clearance",
        icon: <FaPersonCircleCheck className="w-5 h-5" />,
        label: "IPE Clearance",
      },
      {
        to: "/dashboard/check-ipe-status",
        icon: <FaUserCheck className="w-5 h-5" />,
        label: "Check IPE Status",
      },
      {
        to: "/dashboard/demographic-search",
        icon: <MdLocationSearching className="w-5 h-5" />,
        label: "Demographic Search",
      },
      {
        to: "/dashboard/data",
        icon: <MdOutlineSubscriptions className="w-5 h-5" />,
        label: "Data Subscription",
      },
      {
        to: "/dashboard/airtime",
        icon: <MdContactPhone className="w-5 h-5" />,
        label: "Airtime Subscription",
      },
    ],
  },
  {
    section: "MANUAL SERVICES",
    links: [
      {
        to: "/dashboard/validation",
        icon: <GrValidate className="w-5 h-5" />,
        label: "Validation",
      },
      {
        to: "/dashboard/enrollment",
        icon: <IoEnterSharp className="w-5 h-5" />,
        label: "Enrollment",
      },
      {
        to: "/dashboard/modification",
        icon: <RiPassportFill className="w-5 h-5" />,
        label: "NIN Modification",
      },
      {
        to: "/dashboard/personalisation",
        icon: <FaLeaf className="w-5 h-5" />,
        label: "Personalisation",
      },
      {
        to: "/dashboard/bvn-licence",
        icon: <FaCar className="w-5 h-5" />,
        label: "BVN Licence",
      },
      {
        to: "/dashboard/cac",
        icon: <FaIdBadge className="w-5 h-5" />,
        label: "CAC Registration",
      },
      // {
      //   to: "/dashboard/bank-agency",
      //   icon: <FaBuilding className="w-5 h-5" />,
      //   label: "Banking Agency",
      // },
    ],
  },
  {
    section: "SUMMARY AND HISTORY",
    links: [
      {
        isDropdown: true,
        icon: <FiClock className="w-5 h-5" />,
        label: "History",
        items: getHistoryMenuItems(),
      },
    ],
  },
  {
    section: "DEVELOPER AND SECURITY",
    links: [
      {
        to: "/dashboard/api-documentation",
        icon: <FiKey className="w-5 h-5" />,
        label: "Documentation",
      },
      {
        to: "/change-password",
        icon: <FiSettings className="w-5 h-5" />,
        label: "Change Password",
      },
      {
        to: "/dashboard/reset-pin",
        icon: <FiSettings className="w-5 h-5" />,
        label: "Reset Pin",
      },
      {
        to: "/login",
        icon: <FiLogOut className="w-5 h-5 text-red-500" />,
        label: "Sign Out",
      },
    ],
  },
];

let user = {};
try {
  user = JSON.parse(localStorage.getItem("user") || "{}");
} catch (e) {
  user = {};
}

function Sidebar({ collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate(); // <-- useNavigate hook
  const sidebarRef = React.useRef(null);

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent default link behavior
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Close sidebar on click outside on mobile
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen, setMobileOpen]);

  return (
    <div
      className={`sidebar custom-scrollbar fixed flex flex-col top-0 left-0 h-full shadow-lg text-blue-300 bg-gray-900 z-30
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
        md:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      ref={sidebarRef}
    >
      {/* Collapse/Expand Button */}
      <button
        className="absolute cursor-pointer -right-3 top-6 z-40 hidden md:flex items-center justify-center w-7 h-7 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        type="button"
      >
        {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </button>

      <div className="flex  items-center pl-[15px] md:pl-[30px] h-20 border-b border-gray-700 transition-all duration-300">
        <NavLink to="/dashboard" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Logo"
            className={`transition-all ml-4 duration-300 ${
              collapsed ? "w-12  ml-[-10px]" : "w-[50px] "
            } `}
          />
          <span
            className={`text-xl ml-4 font-bold ${
              collapsed ? "hidden" : "block  text-amber-600"
            }`}
          >
            USENOW
          </span>
        </NavLink>
      </div>

      <div className="flex-1 overflow-y-auto mt-4">
        {sidebarSections.map((section, i) => (
          <div key={i} className="mb-6">
            {!collapsed && section.section && (
              <p className="px-6 mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.section}
              </p>
            )}
            <div className="flex flex-col">
              {section.section === "VERIFICATIONS" ? (
                <>
                  {section.links.map((link, j) => {
                    // Normal links
                    return (
                      <NavLink
                        to={link.to}
                        key={j}
                        end={link.end || false} // <-- add this line
                        className={({ isActive }) =>
                          `flex items-center px-6 py-2 text-sm font-medium border-l-4 transition-colors duration-200
                          ${collapsed ? "justify-center px-0" : ""}
                            ${
                              isActive
                                ? "border-amber-600 text-amber-600 bg-gray-800"
                                : "border-transparent text-gray-300 hover:text-amber-600 hover:bg-gray-800"
                            }`
                        }
                        title={collapsed ? link.label : undefined}
                      >
                        {link.icon}
                        {!collapsed && (
                          <span className="ml-3">{link.label}</span>
                        )}
                      </NavLink>
                    );
                  })}
                </>
              ) : section.section === "SUMMARY AND HISTORY" ? (
                // Special handling for SUMMARY AND HISTORY section
                section.links.map((link, j) => {
                  if (link.isDropdown) {
                    const menu = (
                      <Menu
                        items={link.items}
                        className="bg-gray-800 border border-gray-700"
                      />
                    );

                    return (
                      <Dropdown
                        key={j}
                        overlay={menu}
                        trigger={["click"]}
                        overlayClassName="history-dropdown"
                      >
                        <div
                          className={`flex items-center px-6 py-2 text-sm font-medium border-l-4 cursor-pointer
          ${collapsed ? "justify-center px-0" : ""}
          border-transparent text-gray-300 hover:text-amber-600 hover:bg-gray-800`}
                        >
                          {link.icon}
                          {!collapsed && (
                            <>
                              <span className="ml-3">{link.label}</span>
                              <DownOutlined
                                className="ml-2"
                                style={{ color: "white" }}
                              />
                            </>
                          )}
                        </div>
                      </Dropdown>
                    );
                  }
                  return null;
                })
              ) : (
                // All other sections
                section.links.map((link, j) => {
                  // For the Sign Out link
                  if (link.label === "Sign Out") {
                    return (
                      <a
                        href="/login"
                        key={j}
                        onClick={handleLogout}
                        className={`flex items-center px-6 py-2 text-sm font-medium border-l-4 transition-colors duration-200
                        ${collapsed ? "justify-center px-0" : ""}
                        border-transparent text-gray-300 hover:text-white hover:bg-gray-800`}
                        title={collapsed ? link.label : undefined}
                      >
                        {link.icon}
                        {!collapsed && (
                          <span className="ml-3">{link.label}</span>
                        )}
                      </a>
                    );
                  }
                  // All other links
                  return (
                    <NavLink
                      to={link.to}
                      key={j}
                      end={link.end || false}
                      className={({ isActive }) =>
                        `flex items-center px-6 py-2 text-sm font-medium border-l-4 transition-colors duration-200
                      ${collapsed ? "justify-center px-0" : ""}
                      ${
                        isActive
                          ? "border-amber-600 text-amber-600 bg-gray-800"
                          : "border-transparent text-gray-300 hover:text-amber-600 hover:bg-gray-800"
                      }`
                      }
                      title={collapsed ? link.label : undefined}
                    >
                      {link.icon}
                      {!collapsed && <span className="ml-3">{link.label}</span>}
                    </NavLink>
                  );
                })
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
