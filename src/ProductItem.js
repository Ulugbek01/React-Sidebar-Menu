import "./ProductItem.css";

function ProductItem() {
  return (
    <div className="product-items">
      <div className="product-item">
        <table>
          <tr>
            <th>Maxsulot</th>
            <th>Kategoriya</th>
            <th>Narxi</th>
            <th>Qo’shimcha</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <div className="product-item__img">
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
                <p className="product-name">Lavash mini</p>
              </div>
            </td>
            <td>Lavash</td>
            <td>18,000 UZS</td>
            <td>Kichkina lavash, bla bla</td>
            <td>
              <div className="path">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 1.7C12.0002 1.19983 12.7292 1.00449 13.4124 1.18756C14.0957 1.37064 14.6294 1.90432 14.8124 2.58756C14.9955 3.27081 14.8002 3.99983 14.3 4.5L4.85 13.95L1 15L2.05 11.15L11.5 1.7Z"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="delete">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.80001H2.4H13.6"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9 3.8C12.9 3.4134 12.5866 3.1 12.2 3.1C11.8134 3.1 11.5 3.4134 11.5 3.8H12.9ZM3.10002 3.8C3.10002 3.4134 2.78662 3.1 2.40002 3.1C2.01343 3.1 1.70002 3.4134 1.70002 3.8H3.10002ZM3.80002 3.8C3.80002 4.1866 4.11343 4.5 4.50002 4.5C4.88662 4.5 5.20002 4.1866 5.20002 3.8H3.80002ZM9.40002 3.8C9.40002 4.1866 9.71342 4.5 10.1 4.5C10.4866 4.5 10.8 4.1866 10.8 3.8H9.40002ZM11.5 3.8V13.6H12.9V3.8H11.5ZM11.5 13.6C11.5 13.9866 11.1866 14.3 10.8 14.3V15.7C11.9598 15.7 12.9 14.7598 12.9 13.6H11.5ZM10.8 14.3H3.80002V15.7H10.8V14.3ZM3.80002 14.3C3.41342 14.3 3.10002 13.9866 3.10002 13.6H1.70002C1.70002 14.7598 2.64023 15.7 3.80002 15.7V14.3ZM3.10002 13.6V3.8H1.70002V13.6H3.10002ZM5.20002 3.8V2.4H3.80002V3.8H5.20002ZM5.20002 2.4C5.20002 2.0134 5.51342 1.7 5.90002 1.7V0.3C4.74023 0.3 3.80002 1.2402 3.80002 2.4H5.20002ZM5.90002 1.7H8.70002V0.3H5.90002V1.7ZM8.70002 1.7C9.08662 1.7 9.40002 2.0134 9.40002 2.4H10.8C10.8 1.2402 9.85982 0.3 8.70002 0.3V1.7ZM9.40002 2.4V3.8H10.8V2.4H9.40002Z"
                    fill="#2D3A45"
                  />
                  <path
                    d="M5.89999 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.69998 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="product-item">
        <table>
          <tr>
            <th>Maxsulot</th>
            <th>Kategoriya</th>
            <th>Narxi</th>
            <th>Qo’shimcha</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <div className="product-item__img">
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
                <p className="product-name">Lavash mini</p>
              </div>
            </td>
            <td>Lavash</td>
            <td>18,000 UZS</td>
            <td>Kichkina lavash, bla bla</td>
            <td>
              <div className="path">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 1.7C12.0002 1.19983 12.7292 1.00449 13.4124 1.18756C14.0957 1.37064 14.6294 1.90432 14.8124 2.58756C14.9955 3.27081 14.8002 3.99983 14.3 4.5L4.85 13.95L1 15L2.05 11.15L11.5 1.7Z"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="delete">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.80001H2.4H13.6"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9 3.8C12.9 3.4134 12.5866 3.1 12.2 3.1C11.8134 3.1 11.5 3.4134 11.5 3.8H12.9ZM3.10002 3.8C3.10002 3.4134 2.78662 3.1 2.40002 3.1C2.01343 3.1 1.70002 3.4134 1.70002 3.8H3.10002ZM3.80002 3.8C3.80002 4.1866 4.11343 4.5 4.50002 4.5C4.88662 4.5 5.20002 4.1866 5.20002 3.8H3.80002ZM9.40002 3.8C9.40002 4.1866 9.71342 4.5 10.1 4.5C10.4866 4.5 10.8 4.1866 10.8 3.8H9.40002ZM11.5 3.8V13.6H12.9V3.8H11.5ZM11.5 13.6C11.5 13.9866 11.1866 14.3 10.8 14.3V15.7C11.9598 15.7 12.9 14.7598 12.9 13.6H11.5ZM10.8 14.3H3.80002V15.7H10.8V14.3ZM3.80002 14.3C3.41342 14.3 3.10002 13.9866 3.10002 13.6H1.70002C1.70002 14.7598 2.64023 15.7 3.80002 15.7V14.3ZM3.10002 13.6V3.8H1.70002V13.6H3.10002ZM5.20002 3.8V2.4H3.80002V3.8H5.20002ZM5.20002 2.4C5.20002 2.0134 5.51342 1.7 5.90002 1.7V0.3C4.74023 0.3 3.80002 1.2402 3.80002 2.4H5.20002ZM5.90002 1.7H8.70002V0.3H5.90002V1.7ZM8.70002 1.7C9.08662 1.7 9.40002 2.0134 9.40002 2.4H10.8C10.8 1.2402 9.85982 0.3 8.70002 0.3V1.7ZM9.40002 2.4V3.8H10.8V2.4H9.40002Z"
                    fill="#2D3A45"
                  />
                  <path
                    d="M5.89999 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.69998 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="product-item">
        <table>
          <tr>
            <th>Maxsulot</th>
            <th>Kategoriya</th>
            <th>Narxi</th>
            <th>Qo’shimcha</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <div className="product-item__img">
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
                <p className="product-name">Lavash mini</p>
              </div>
            </td>
            <td>Lavash</td>
            <td>18,000 UZS</td>
            <td>Kichkina lavash, bla bla</td>
            <td>
              <div className="path">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5 1.7C12.0002 1.19983 12.7292 1.00449 13.4124 1.18756C14.0957 1.37064 14.6294 1.90432 14.8124 2.58756C14.9955 3.27081 14.8002 3.99983 14.3 4.5L4.85 13.95L1 15L2.05 11.15L11.5 1.7Z"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="delete">
                <svg
                  width="15"
                  height="16"
                  viewBox="0 0 15 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3.80001H2.4H13.6"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.9 3.8C12.9 3.4134 12.5866 3.1 12.2 3.1C11.8134 3.1 11.5 3.4134 11.5 3.8H12.9ZM3.10002 3.8C3.10002 3.4134 2.78662 3.1 2.40002 3.1C2.01343 3.1 1.70002 3.4134 1.70002 3.8H3.10002ZM3.80002 3.8C3.80002 4.1866 4.11343 4.5 4.50002 4.5C4.88662 4.5 5.20002 4.1866 5.20002 3.8H3.80002ZM9.40002 3.8C9.40002 4.1866 9.71342 4.5 10.1 4.5C10.4866 4.5 10.8 4.1866 10.8 3.8H9.40002ZM11.5 3.8V13.6H12.9V3.8H11.5ZM11.5 13.6C11.5 13.9866 11.1866 14.3 10.8 14.3V15.7C11.9598 15.7 12.9 14.7598 12.9 13.6H11.5ZM10.8 14.3H3.80002V15.7H10.8V14.3ZM3.80002 14.3C3.41342 14.3 3.10002 13.9866 3.10002 13.6H1.70002C1.70002 14.7598 2.64023 15.7 3.80002 15.7V14.3ZM3.10002 13.6V3.8H1.70002V13.6H3.10002ZM5.20002 3.8V2.4H3.80002V3.8H5.20002ZM5.20002 2.4C5.20002 2.0134 5.51342 1.7 5.90002 1.7V0.3C4.74023 0.3 3.80002 1.2402 3.80002 2.4H5.20002ZM5.90002 1.7H8.70002V0.3H5.90002V1.7ZM8.70002 1.7C9.08662 1.7 9.40002 2.0134 9.40002 2.4H10.8C10.8 1.2402 9.85982 0.3 8.70002 0.3V1.7ZM9.40002 2.4V3.8H10.8V2.4H9.40002Z"
                    fill="#2D3A45"
                  />
                  <path
                    d="M5.89999 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.69998 7.29999V11.5"
                    stroke="#2D3A45"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default ProductItem;
