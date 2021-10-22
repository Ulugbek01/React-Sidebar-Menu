import "./NavItem.css";
// import App from "./App";
function NavItem() {
  const url =
    "https://images.unsplash.com/photo-1512152272829-e3139592d56f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
  return (
    <div className="nav-items__section">
      <div className="nav-item__logo">
        <div className="nav-item__brand">
          <img src={url} alt="food logo" />
        </div>

        <div className="nav-item__brand-info">
          <h3 className="nav-item__brand-title">Fast Food</h3>
          <p className="nav-item__brand-discription">Online maxsulot sotuvi</p>
        </div>
      </div>

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
        <div className="nav-item__info">Buyurtmalar</div>
      </div>

      <div className="nav-item active">
        <div className="nav-item__img">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5454 4.63637V14.0909H2.45453V4.63637"
              stroke="white"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect
              x="1"
              y="1"
              width="16"
              height="3.63636"
              stroke="white"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.54547 7.54546H10.4546"
              stroke="white"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Maxsulotlar</div>
      </div>

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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9 1L1 5L9 9L17 5L9 1V1Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 13L9 17L17 13"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 9L9 13L17 9"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Kategoriyalar</div>
      </div>

      <div className="nav-item">
        <div className="nav-item__img">
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.0909 7.54545C14.0909 12.6364 7.54545 17 7.54545 17C7.54545 17 1 12.6364 1 7.54545C1 3.9305 3.9305 1 7.54545 1C11.1604 1 14.0909 3.9305 14.0909 7.54545V7.54545Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.54547 9.72728C8.75045 9.72728 9.72728 8.75044 9.72728 7.54546C9.72728 6.34047 8.75045 5.36364 7.54547 5.36364C6.34048 5.36364 5.36365 6.34047 5.36365 7.54546C5.36365 8.75044 6.34048 9.72728 7.54547 9.72728Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Filiallar</div>
      </div>

      <div className="nav-item">
        <div className="nav-item__img">
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.6364 14.0909V12.6364C12.6364 11.0297 11.3339 9.72727 9.72727 9.72727H3.90909C2.30244 9.72727 1 11.0297 1 12.6364V14.0909"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.81821 6.81818C8.42486 6.81818 9.7273 5.51574 9.7273 3.90909C9.7273 2.30244 8.42486 1 6.81821 1C5.21156 1 3.90912 2.30244 3.90912 3.90909C3.90912 5.51574 5.21156 6.81818 6.81821 6.81818Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 14.0909V12.6364C16.999 11.3106 16.1018 10.1533 14.8182 9.82182"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9091 1.09455C13.1963 1.42413 14.0966 2.584 14.0966 3.91273C14.0966 5.24146 13.1963 6.40133 11.9091 6.73091"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Mijozlar</div>
      </div>

      <div className="nav-item">
        <div className="nav-item__img">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17V7"
              stroke="#2D3A45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 17V1"
              stroke="#2D3A45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 17V11"
              stroke="#2D3A45"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Xisobot</div>
      </div>

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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.18182 11.3636C10.3868 11.3636 11.3636 10.3868 11.3636 9.18182C11.3636 7.97683 10.3868 7 9.18182 7C7.97683 7 7 7.97683 7 9.18182C7 10.3868 7.97683 11.3636 9.18182 11.3636Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.3818 11.1818C14.1837 11.6306 14.2788 12.1548 14.6218 12.5055L14.6655 12.5491C14.9386 12.8219 15.0921 13.1921 15.0921 13.5782C15.0921 13.9642 14.9386 14.3344 14.6655 14.6073C14.3926 14.8804 14.0224 15.0339 13.6364 15.0339C13.2503 15.0339 12.8801 14.8804 12.6073 14.6073L12.5636 14.5636C12.213 14.2206 11.6888 14.1256 11.24 14.3236C10.8004 14.512 10.5146 14.9435 10.5127 15.4218V15.5455C10.5127 16.3488 9.86151 17 9.05818 17C8.25486 17 7.60364 16.3488 7.60364 15.5455V15.48C7.59211 14.9874 7.28063 14.5519 6.81818 14.3818C6.36939 14.1837 5.84523 14.2788 5.49455 14.6218L5.45091 14.6655C5.17808 14.9386 4.80787 15.0921 4.42182 15.0921C4.03577 15.0921 3.66555 14.9386 3.39273 14.6655C3.1196 14.3926 2.96613 14.0224 2.96613 13.6364C2.96613 13.2503 3.1196 12.8801 3.39273 12.6073L3.43636 12.5636C3.77939 12.213 3.87443 11.6888 3.67636 11.24C3.48795 10.8004 3.05647 10.5146 2.57818 10.5127H2.45455C1.65122 10.5127 1 9.86151 1 9.05818C1 8.25486 1.65122 7.60364 2.45455 7.60364H2.52C3.0126 7.59211 3.4481 7.28063 3.61818 6.81818C3.81625 6.36939 3.72121 5.84523 3.37818 5.49455L3.33455 5.45091C3.06142 5.17808 2.90795 4.80787 2.90795 4.42182C2.90795 4.03577 3.06142 3.66555 3.33455 3.39273C3.60737 3.1196 3.97759 2.96613 4.36364 2.96613C4.74969 2.96613 5.1199 3.1196 5.39273 3.39273L5.43636 3.43636C5.78704 3.77939 6.31121 3.87443 6.76 3.67636H6.81818C7.2578 3.48795 7.54355 3.05647 7.54545 2.57818V2.45455C7.54545 1.65122 8.19668 1 9 1C9.80332 1 10.4545 1.65122 10.4545 2.45455V2.52C10.4565 2.99829 10.7422 3.42977 11.1818 3.61818C11.6306 3.81625 12.1548 3.72121 12.5055 3.37818L12.5491 3.33455C12.8219 3.06142 13.1921 2.90795 13.5782 2.90795C13.9642 2.90795 14.3344 3.06142 14.6073 3.33455C14.8804 3.60737 15.0339 3.97759 15.0339 4.36364C15.0339 4.74969 14.8804 5.1199 14.6073 5.39273L14.5636 5.43636C14.2206 5.78704 14.1256 6.31121 14.3236 6.76V6.81818C14.512 7.2578 14.9435 7.54355 15.4218 7.54545H15.5455C16.3488 7.54545 17 8.19668 17 9C17 9.80332 16.3488 10.4545 15.5455 10.4545H15.48C15.0017 10.4565 14.5702 10.7422 14.3818 11.1818Z"
              stroke="#2D3A45"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Katalog</div>
      </div>

      <div className="nav-item log-out">
        <div className="nav-item__img">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33333 17H2.77778C1.79594 17 1 16.2041 1 15.2222V2.77778C1 1.79594 1.79594 1 2.77778 1H6.33333"
              stroke="#232329"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.5555 13.4444L17 8.99999L12.5555 4.55554"
              stroke="#232329"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 8.99999H6.33331"
              stroke="#232329"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="nav-item__info">Chiqish</div>
      </div>
    </div>
  );
}

export default NavItem;
