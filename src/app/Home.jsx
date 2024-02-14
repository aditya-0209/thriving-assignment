import React, { useState,} from "react";
import Table from "../components/Table";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import BarChart from "../components/BarChart";

Chart.register(CategoryScale);

const Home = () => {
  const [showChartDropDown1, setShowChartDropDown1] = useState(false);
  const [showChartDropDown2, setShowChartDropDown2] = useState(false);

  return (
    <>
     <div className="w-full h-[67px] shadow"></div>
      <div className="flex flex-col p-[28px] gap-[65px]">
        <div className="heading text-[36px]">
          Corporate Conflict of Interest
        </div>
        <div className="stats-container ">
          <div className="stat-nav flex gap-[40px]">
            <div className="stat-nav-item underlined">Report</div>
            <div className="stat-nav-item">User Progress</div>
          </div>
          <div className="stats flex gap-[21px] py-[12px]">
            <div className="stat-1">
              <div className="flex flex-col stat-items ">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="31"
                    viewBox="0 0 32 31"
                    fill="none"
                  >
                    <path
                      d="M3.35229 27.8426L3.35282 23.3421C3.35311 20.857 5.4349 18.8426 8.00282 18.8426H17.3021M21.1773 22.5926L22.7273 24.0926L28.1523 18.8426M18.8523 8.3426C18.8523 10.8279 16.7704 12.8426 14.2023 12.8426C11.6342 12.8426 9.55229 10.8279 9.55229 8.3426C9.55229 5.85732 11.6342 3.84261 14.2023 3.84261C16.7704 3.84261 18.8523 5.85732 18.8523 8.3426Z"
                      stroke="#0065D0"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="stat-number">1.1k</div>
                <div className="stat-name">Total Enrolments</div>
              </div>
              <div className="separator border h-3/4 " />
              <div className="flex flex-col stat-items">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M19.1987 18.4977L14.98 17.0915V11.2113M26.23 15.6852C26.23 9.47201 21.1932 4.43521 14.98 4.43521C8.76678 4.43521 3.72998 9.47201 3.72998 15.6852C3.72998 21.8984 8.76678 26.9352 14.98 26.9352C15.701 26.9352 16.4061 26.8674 17.0894 26.7378M24.1206 19.904V23.4196M24.1206 23.4196V26.9352M24.1206 23.4196H27.6362M24.1206 23.4196H20.605"
                      stroke="#EE942B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="stat-number">15</div>
                <div className="stat-name">Yet to Start</div>
              </div>
              <div className="separator border h-3/4 " />
              <div className="flex flex-col stat-items">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M23.6255 5.78261L25.0866 7.24365M26.5476 8.70469L25.0866 7.24365M11.6126 3.18521H17.7814M22.6515 9.67872L25.0866 7.24365M16.0464 14.3865L13.9462 16.4868L16.0464 18.587L13.9462 20.6872M25.5736 17.4709C25.5736 23.3883 20.7766 28.1852 14.8593 28.1852C8.94197 28.1852 4.14502 23.3883 4.14502 17.4709C4.14502 11.5536 8.94197 6.75664 14.8593 6.75664C20.7766 6.75664 25.5736 11.5536 25.5736 17.4709Z"
                      stroke="#EB6C54"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="stat-number">50</div>
                <div className="stat-name">In Progress</div>
              </div>
              <div className="separator border h-3/4 " />

              <div className="flex flex-col stat-items">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M26.3746 16.347C26.3746 15.7947 25.9269 15.347 25.3746 15.347C24.8223 15.347 24.3746 15.7947 24.3746 16.347H26.3746ZM14.6861 6.75874C15.2383 6.75874 15.6861 6.31103 15.6861 5.75874C15.6861 5.20646 15.2383 4.75874 14.6861 4.75874V6.75874ZM21.0303 16.347C21.0303 15.7947 20.5826 15.347 20.0303 15.347C19.478 15.347 19.0303 15.7947 19.0303 16.347H21.0303ZM14.6861 12.0529C15.2383 12.0529 15.6861 11.6051 15.6861 11.0529C15.6861 10.5006 15.2383 10.0529 14.6861 10.0529V12.0529ZM20.1135 12.1646C20.5059 11.7759 20.5089 11.1428 20.1202 10.7504C19.7315 10.3581 19.0984 10.3551 18.706 10.7438L20.1135 12.1646ZM13.9823 15.4231C13.5899 15.8118 13.587 16.445 13.9756 16.8373C14.3643 17.2297 14.9975 17.2327 15.3898 16.844L13.9823 15.4231ZM26.4976 8.17872L27.2013 8.88915C27.4712 8.62182 27.5663 8.22467 27.4468 7.8641C27.3273 7.50353 27.0138 7.24181 26.6377 7.18858L26.4976 8.17872ZM22.2462 12.3902L21.9327 13.3397C22.2898 13.4576 22.6828 13.3653 22.95 13.1006L22.2462 12.3902ZM18.4673 8.64666L17.7635 7.93622C17.4925 8.20471 17.3978 8.604 17.5195 8.96557L18.4673 8.64666ZM22.7186 4.43521L23.7084 4.29248C23.6545 3.91866 23.3945 3.60711 23.0364 3.48706C22.6783 3.36702 22.2832 3.45898 22.0148 3.72478L22.7186 4.43521ZM19.412 11.4543L18.4642 11.7732C18.5646 12.0715 18.7996 12.3052 19.0985 12.4039L19.412 11.4543ZM23.191 7.71078L22.2012 7.85351C22.2646 8.2934 22.6108 8.63864 23.0509 8.70091L23.191 7.71078ZM24.3746 16.347C24.3746 21.6335 20.0458 25.9352 14.6861 25.9352V27.9352C21.1325 27.9352 26.3746 22.7558 26.3746 16.347H24.3746ZM14.6861 25.9352C9.32634 25.9352 4.99756 21.6335 4.99756 16.347H2.99756C2.99756 22.7558 8.23959 27.9352 14.6861 27.9352V25.9352ZM4.99756 16.347C4.99756 11.0604 9.32634 6.75874 14.6861 6.75874V4.75874C8.23959 4.75874 2.99756 9.9381 2.99756 16.347H4.99756ZM19.0303 16.347C19.0303 18.7097 17.0942 20.6411 14.6861 20.6411V22.6411C18.181 22.6411 21.0303 19.832 21.0303 16.347H19.0303ZM14.6861 20.6411C12.2779 20.6411 10.3418 18.7097 10.3418 16.347H8.34181C8.34181 19.832 11.1911 22.6411 14.6861 22.6411V20.6411ZM10.3418 16.347C10.3418 13.9843 12.2779 12.0529 14.6861 12.0529V10.0529C11.1911 10.0529 8.34181 12.862 8.34181 16.347H10.3418ZM18.706 10.7438L13.9823 15.4231L15.3898 16.844L20.1135 12.1646L18.706 10.7438ZM25.7938 7.46829L21.5425 11.6797L22.95 13.1006L27.2013 8.88915L25.7938 7.46829ZM19.171 9.35709L23.4224 5.14564L22.0148 3.72478L17.7635 7.93622L19.171 9.35709ZM22.5598 11.4406L19.7256 10.5047L19.0985 12.4039L21.9327 13.3397L22.5598 11.4406ZM20.3598 11.1354L19.4151 8.32774L17.5195 8.96557L18.4642 11.7732L20.3598 11.1354ZM21.7288 4.57794L22.2012 7.85351L24.1807 7.56805L23.7084 4.29248L21.7288 4.57794ZM23.0509 8.70091L26.3574 9.16885L26.6377 7.18858L23.3311 6.72064L23.0509 8.70091Z"
                      fill="#198155"
                    />
                  </svg>
                </div>
                <div className="stat-number">108 </div>
                <div className="stat-name">Completed </div>
              </div>
            </div>
            <div className="stat-2">
              <div className="flex flex-col stat-items">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M20.4175 20.1852L11.4175 11.2217M19.6675 11.8825V11.9352M12.1675 19.4352V19.4879M27.9175 15.6852C27.9175 22.3126 22.5449 27.6852 15.9175 27.6852C9.29006 27.6852 3.91748 22.3126 3.91748 15.6852C3.91748 9.05779 9.29006 3.68521 15.9175 3.68521C22.5449 3.68521 27.9175 9.05779 27.9175 15.6852Z"
                      stroke="#FA38C4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="stat-number">75% </div>
                <div className="stat-name">Average Progress</div>
              </div>
              <div className="separator border h-3/4 " />
              <div className="flex flex-col stat-items">
                <div className="stat-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                  >
                    <path
                      d="M18.6763 18.5001L14.4575 17.0939V11.2137M25.7075 15.6876C25.7075 9.4744 20.6707 4.43761 14.4575 4.43761C8.24432 4.43761 3.20752 9.4744 3.20752 15.6876C3.20752 21.9008 8.24432 26.9376 14.4575 26.9376C15.1785 26.9376 15.8836 26.8698 16.5669 26.7402M19.3794 23.422L21.4888 25.5314L27.1138 19.9064"
                      stroke="#7868FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="stat-number">42 Min</div>
                <div className="stat-name">Average Spend Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70vh] flex items-center justify-between p-[30px] shadow bg-slate-50 rounded-lg ">
        <div className="w-[45%] h-auto">
          <div className="flex justify-between items-center">
            <p className="text-black font-sans font-semibold text-[18px] my-3">
              {" "}
              Department
            </p>
            <div className="flex flex-col relative items-center">
              <div
                onClick={() => {
                  setShowChartDropDown2(!showChartDropDown2);
                }}
                className="flex text-[12px] items-center justify-center px-3 py-1 gap-1 text-black border rounded-md "
              >
                <p>Bar Chart</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.372531 0.734539C0.181487 0.925583 0.181487 1.23533 0.372531 1.42637L3.69986 4.7537C3.70394 4.75809 3.70813 4.76243 3.71241 4.76671C3.80799 4.86229 3.93328 4.91005 4.05856 4.90999C4.18383 4.91005 4.30912 4.86229 4.4047 4.76671C4.40898 4.76243 4.41317 4.75809 4.41725 4.7537L7.74458 1.42637C7.93562 1.23533 7.93562 0.925583 7.74458 0.734539C7.55354 0.543495 7.24379 0.543495 7.05275 0.734539L4.05856 3.72873L1.06436 0.734539C0.873319 0.543495 0.563575 0.543495 0.372531 0.734539Z"
                    fill="#615E83"
                  />
                </svg>
              </div>
              {showChartDropDown2 && (
                <div className="z-10 absolute top-[30px] w-[140px] flex flex-col items-center justify-center border rounded-md px-3 py-1 text-[11px] bg-blue-100">
                  <p className="hover:bg-blue-50 w-full p-1 px-3 rounded-md">
                    Line Chart
                  </p>
                  <p className="hover:bg-blue-50 w-full p-1 px-3 rounded-md">
                    Pie Chart
                  </p>
                  <p className="hover:bg-blue-50 w-full p-1 px-3 rounded-md">
                    Area Chart
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="border-2 w-auto mt-[30px] rounded-lg">
            <Table />
          </div>
        </div>
        <div className="w-[50%]">
          <div className="flex justify-between items-center">
            <p className="text-black font-sans font-semibold text-[18px] my-3">
              {" "}
              Department Performance over time
            </p>
            <div className="flex flex-col relative items-center">
              <div
                className="flex pointer text-[12px] w-[140px] items-center justify-center px-3 py-1 gap-1 text-black border rounded-md "
                // onClick={()=> { setShowChartDropDown(!showChartDropDown)}}
                onClick={() => {
                  setShowChartDropDown1(!showChartDropDown1);
                }}
              >
                <p>By Precentage</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="5"
                  viewBox="0 0 8 5"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.372531 0.734539C0.181487 0.925583 0.181487 1.23533 0.372531 1.42637L3.69986 4.7537C3.70394 4.75809 3.70813 4.76243 3.71241 4.76671C3.80799 4.86229 3.93328 4.91005 4.05856 4.90999C4.18383 4.91005 4.30912 4.86229 4.4047 4.76671C4.40898 4.76243 4.41317 4.75809 4.41725 4.7537L7.74458 1.42637C7.93562 1.23533 7.93562 0.925583 7.74458 0.734539C7.55354 0.543495 7.24379 0.543495 7.05275 0.734539L4.05856 3.72873L1.06436 0.734539C0.873319 0.543495 0.563575 0.543495 0.372531 0.734539Z"
                    fill="#615E83"
                  />
                </svg>
              </div>
              {showChartDropDown1 && (
                <div className="z-10 absolute top-[30px] w-[140px] flex flex-col items-center justify-center border rounded-md px-3 py-1 text-[11px] bg-blue-100 ">
                  <p className="hover:bg-blue-50 w-full p-1 px-3 rounded-md">
                    By Total count
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-lg h-[80%] mt-[65px]">
            <BarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
