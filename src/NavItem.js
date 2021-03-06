import React from "react";
import "./NavItem.css";

function NavItem(props) {
  return (
    <div className="nav-items__section">
      <div className="nav-item">
        <div className="nav-item__img">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 8.064V8.8C16.998 12.3429 14.6658 15.4626 11.2683 16.4671C7.87071 17.4717 4.2171 16.1219 2.28875 13.1497C0.360397 10.1775 0.616675 6.29091 2.9186 3.59766C5.22053 0.904406 9.01975 0.0460215 12.256 1.488"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 2.39999L8.99998 10.408L6.59998 8.00799"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Kichkina lavash, bla bla</div>
      </div>
    </div>
  );
}

export default NavItem;
