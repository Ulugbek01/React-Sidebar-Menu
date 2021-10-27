import "./Header.css";
import PlusIcon from "./assets/plus.svg";

function Header() {
  return (
    <div className="header-section">
      <div className="add-product">
        <div className="add-product__icon">
          <i>
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1V15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1 8H15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        </div>
        <div className="add-product__title">
          <p>Yangi maxsulot qo’shish</p>
        </div>
      </div>
      <div className="search-item">
        <input type="search" placeholder="Qidirish" />
        <i className="search-icon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.11111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.11111C15.2222 4.18375 12.0385 1 8.11111 1C4.18375 1 1 4.18375 1 8.11111C1 12.0385 4.18375 15.2222 8.11111 15.2222Z"
              stroke="#8D9BA8"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 17L13.1333 13.1333"
              stroke="#8D9BA8"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </i>
        <div className="filter">
          <i className="filter-icon">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17 1H1L7.4 8.568V13.8L10.6 15.4V8.568L17 1V1Z"
                stroke="#8D9BA8"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </i>
        </div>
      </div>
    </div>
  );
}

export default Header;
