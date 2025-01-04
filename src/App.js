/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import Header from "./components/header";
import tabarrow from "./images/arrow.svg";
import userimg from "./images/78ed20d48eb3f0a089f24e3a20975c61.jpeg";
import BirthdayCard from "./components/birthdayCard";
import { useState } from "react";
import TimeoffrecordCard from "./components/timeoffrecordCard";
import TeamuserCard from "./components/teamuserCard";
import TimeoffCard from "./components/timeoffCard";
import card1img from './images/Group 8686.svg'
import card2img from './images/Group 8686 (1).svg'
function App() {
  const [activeBar, setActiveBar] = useState(0);
  const [activeTab, setActiveTab] = useState("birthday");
  const [activeTab2, setActiveTab2] = useState("Upcoming");
  const [activeTab3, setActiveTab3] = useState("onsite");
  const barsData = [
    {
      title: "Today",
      content: Array(5).fill({
        username: "John Micheal",
        uservalue: "Leader Designer",
        dateofbirth: "Jan 23",
      }),
    },
    {
      title: "Upcoming Birthdays",
      content: Array(3).fill({
        username: "Jane Doe",
        uservalue: "Product Manager",
        dateofbirth: "Feb 14",
      }),
    },
  ];
  const toggleBar = (index) => {
    setActiveBar(activeBar === index ? null : index); // Toggle active/inactive
  };
  return (
    <>
      <Header />
      <div className="App">
        <div className="content_titlebar w-full">
          <div className="container">
            <p className="para-3">Good Morning,</p>
            <h1>Williams Oluwadamilare</h1>
          </div>
        </div>
        <div className="sidebar_with_content w-full mt-[27px]">
          <div className="container flex flex-row gap-[22px]">
            {/* leftsidecotent */}
            <div
              className="content_area flex-1"
              style={{ maxWidth: "calc(100% - 373px)" }}
            >
              <div className="section-1 flex flex-row gap-[17px]">
                <div className="attandance-box">
                  <p className="para-3">Daily Attendance</p>
                  <h3>Wednesday 27th, 2021</h3>
                  <div className="onsite-tabs-bar">
                    <button
                      className={activeTab3 === "remote" ? "active" : null}
                      onClick={() => setActiveTab3("remote")}
                    >
                      Remote
                    </button>
                    <button
                      className={activeTab3 === "onsite" ? "active" : null}
                      onClick={() => setActiveTab3("onsite")}
                    >
                      On-Site
                    </button>
                  </div>
                  <div className="tabs-content-main">
                    {activeTab3 === "remote" ? (
                      <div className="tab-content">
                        <p className="para-3">Good Morning</p>
                        <div className="timer">
                          <div className="hours">
                            <span className="time-num">0</span>
                            <span className="time-num">9</span>
                          </div>
                          <span className="divider">:</span>
                          <div className="minutes">
                            <span className="time-num">3</span>
                            <span className="time-num">0</span>
                          </div>
                        </div>
                        <div className="checkin-time">Clock In time 00:00</div>
                        <button className="blue-button">Clock in</button>
                        <div className="status-box">
                          <p className="para-3">Status:</p>
                          <p className="status-value">Present</p>
                        </div>
                      </div>
                    ) : activeTab3 === "onsite" ? (
                      <div className="tab-content">
                        <p className="para-3">Good Evening</p>
                        <div className="timer">
                          <div className="hours">
                            <span className="time-num">0</span>
                            <span className="time-num">9</span>
                          </div>
                          <span className="divider">:</span>
                          <div className="minutes">
                            <span className="time-num">3</span>
                            <span className="time-num">0</span>
                          </div>
                        </div>
                        <div className="checkin-time">Clock In time 00:00</div>
                        <button className="blue-button">Clock in</button>
                        <div className="status-box">
                          <p className="para-3">Status:</p>
                          <p className="status-value">Present</p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="activity-box">
                  <div className="flex flex-row items-center justify-between w-fit py-[5px]">
                    <h2>Activity </h2> <span className="number">6</span>
                  </div>
                  <div className="activites-list custom-scrollbar">
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Accept Request</button>
                        <button>View</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Accept Request</button>
                        <button>View</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Accept Request</button>
                        <button>View</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>View</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                    <div className="list-item list-none">
                      <p>Sam Johnson Requested for 5 Sick days off</p>
                      <div className="rightside">
                        <button>Setup</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-2 mt-[21px]">
                <div className="timeoff-box">
                  <div className="flex flex-row items-center justify-between w-full">
                    <h2>Timeoff </h2>
                    <select id="timeoffs-dropdown">
                      <option value="Request Other Timeoffs">
                        Request Other Timeoffs
                      </option>
                      <option value="Maternity Timeoff">
                        Maternity Timeoff
                      </option>
                      <option value="Paternity Timeoff">
                        Paternity Timeoff
                      </option>
                      <option value="Pet Time">Pet Time</option>
                    </select>
                  </div>
                  <div className="flex-1 w-full overflow-auto custom-scrollbar">
                    <div className="content flex flex-row gap-[8px] mt-5 w-fit mb-2 ">
                      <TimeoffCard days="20" />
                      <TimeoffCard days="8" />
                      <TimeoffCard days="90" />
                      <TimeoffCard days="20" />
                      <TimeoffCard days="6" />
                      <TimeoffCard days="20" />
                      <TimeoffCard days="7" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-3 mt-[21px]">
                <div className="timeoff-box">
                  <div className="flex flex-row items-center justify-between w-full mb-[13px]">
                    <h2>Benefits </h2>
                  </div>
                  <div className="content flex flex-row gap-[7px]">
                    <div className="benefit-card flex-1">
                      <div className="card-header flex flex-row gap-[15.56px] items-center">
                        <img src={card1img} alt="" width={61} />
                        <div className="data">
                          <h5>Family Healthcare Plan</h5>
                          <p className="para-3">Leadway & Associates  <br /> 3 Dependents</p>
                        </div>
                      </div>
                      <a href="#" className="visit-web-btn text-[#4069D0]">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.98096 0.403809C2.76034 0.403809 0.152344 3.01764 0.152344 6.23826C0.152344 9.45887 2.76034 12.0727 5.98096 12.0727C9.20741 12.0727 11.8212 9.45887 11.8212 6.23826C11.8212 3.01764 9.20741 0.403809 5.98096 0.403809ZM10.0242 3.90448H8.30307C8.11636 3.17517 7.84798 2.47504 7.49791 1.82741C8.57145 2.19498 9.46412 2.94179 10.0242 3.90448ZM5.98679 1.59404C6.47105 2.29417 6.85029 3.07015 7.10117 3.90448H4.87241C5.12329 3.07015 5.50253 2.29417 5.98679 1.59404ZM1.47093 7.40514C1.37758 7.03174 1.31923 6.64083 1.31923 6.23826C1.31923 5.83568 1.37758 5.44477 1.47093 5.07137H3.44297C3.3963 5.45644 3.36129 5.84151 3.36129 6.23826C3.36129 6.635 3.3963 7.02007 3.44297 7.40514H1.47093ZM1.94935 8.57203H3.67051C3.85722 9.30134 4.1256 10.0015 4.47567 10.6491C3.40213 10.2815 2.50946 9.54055 1.94935 8.57203ZM3.67051 3.90448H1.94935C2.50946 2.93596 3.40213 2.19498 4.47567 1.82741C4.1256 2.47504 3.85722 3.17517 3.67051 3.90448ZM5.98679 10.8825C5.50253 10.1823 5.12329 9.40636 4.87241 8.57203H7.10117C6.85029 9.40636 6.47105 10.1823 5.98679 10.8825ZM7.35205 7.40514H4.62153C4.56902 7.02007 4.52818 6.635 4.52818 6.23826C4.52818 5.84151 4.56902 5.4506 4.62153 5.07137H7.35205C7.40456 5.4506 7.4454 5.84151 7.4454 6.23826C7.4454 6.635 7.40456 7.02007 7.35205 7.40514ZM7.49791 10.6491C7.84798 10.0015 8.11636 9.30134 8.30307 8.57203H10.0242C9.46412 9.53472 8.57145 10.2815 7.49791 10.6491ZM8.53061 7.40514C8.57728 7.02007 8.61229 6.635 8.61229 6.23826C8.61229 5.84151 8.57728 5.45644 8.53061 5.07137H10.5027C10.596 5.44477 10.6543 5.83568 10.6543 6.23826C10.6543 6.64083 10.596 7.03174 10.5027 7.40514H8.53061Z" fill="#4069D0" />
                        </svg>
                        Visit Website
                      </a>
                      <a href="#" className="view-btn">
                        View
                      </a>
                    </div>
                    <div className="benefit-card flex-1">
                      <div className="card-header flex flex-row gap-[15.56px] items-center">
                        <img src={card2img} alt="" width={61} />
                        <div className="data">
                          <h5>Leadway Pension</h5>
                          <p className="para-3">Leadway & Associates <br />
                            1 Dependent</p>
                        </div>
                      </div>
                      <a href="#" className="visit-web-btn text-[#FF7372]">
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.98096 0.403809C2.76034 0.403809 0.152344 3.01764 0.152344 6.23826C0.152344 9.45887 2.76034 12.0727 5.98096 12.0727C9.20741 12.0727 11.8212 9.45887 11.8212 6.23826C11.8212 3.01764 9.20741 0.403809 5.98096 0.403809ZM10.0242 3.90448H8.30307C8.11636 3.17517 7.84798 2.47504 7.49791 1.82741C8.57145 2.19498 9.46412 2.94179 10.0242 3.90448ZM5.98679 1.59404C6.47105 2.29417 6.85029 3.07015 7.10117 3.90448H4.87241C5.12329 3.07015 5.50253 2.29417 5.98679 1.59404ZM1.47093 7.40514C1.37758 7.03174 1.31923 6.64083 1.31923 6.23826C1.31923 5.83568 1.37758 5.44477 1.47093 5.07137H3.44297C3.3963 5.45644 3.36129 5.84151 3.36129 6.23826C3.36129 6.635 3.3963 7.02007 3.44297 7.40514H1.47093ZM1.94935 8.57203H3.67051C3.85722 9.30134 4.1256 10.0015 4.47567 10.6491C3.40213 10.2815 2.50946 9.54055 1.94935 8.57203ZM3.67051 3.90448H1.94935C2.50946 2.93596 3.40213 2.19498 4.47567 1.82741C4.1256 2.47504 3.85722 3.17517 3.67051 3.90448ZM5.98679 10.8825C5.50253 10.1823 5.12329 9.40636 4.87241 8.57203H7.10117C6.85029 9.40636 6.47105 10.1823 5.98679 10.8825ZM7.35205 7.40514H4.62153C4.56902 7.02007 4.52818 6.635 4.52818 6.23826C4.52818 5.84151 4.56902 5.4506 4.62153 5.07137H7.35205C7.40456 5.4506 7.4454 5.84151 7.4454 6.23826C7.4454 6.635 7.40456 7.02007 7.35205 7.40514ZM7.49791 10.6491C7.84798 10.0015 8.11636 9.30134 8.30307 8.57203H10.0242C9.46412 9.53472 8.57145 10.2815 7.49791 10.6491ZM8.53061 7.40514C8.57728 7.02007 8.61229 6.635 8.61229 6.23826C8.61229 5.84151 8.57728 5.45644 8.53061 5.07137H10.5027C10.596 5.44477 10.6543 5.83568 10.6543 6.23826C10.6543 6.64083 10.596 7.03174 10.5027 7.40514H8.53061Z" fill="#FF7372" />
                        </svg>
                        Visit Website
                      </a>
                      <a href="#" className="view-btn">
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* sidebar */}
            <aside className="sidebar w-[351px] flex flex-col gap-[21px]">
              <div className="sidebar-widget-box box-shadow">
                <div className="widget-header">
                  <h2>Celebrations</h2>
                  <div className="tabs-bar">
                    <button
                      className="tab-button"
                      data-state={activeTab === "birthday" ? "active" : null}
                      onClick={() => setActiveTab("birthday")}
                    >
                      Birthdays
                    </button>
                    <button
                      className="tab-button"
                      data-state={
                        activeTab === "Job Anniversary" ? "active" : null
                      }
                      onClick={() => setActiveTab("Job Anniversary")}
                    >
                      Job Anniversary
                    </button>
                    <button
                      className="tab-button"
                      data-state={activeTab === "New Hire" ? "active" : null}
                      onClick={() => setActiveTab("New Hire")}
                    >
                      New Hire
                    </button>
                  </div>
                </div>
                <div className="widget-content px-[7px] mt-[8px]">
                  {activeTab === "birthday" ? (
                    <div className="tabs-content">
                      <div className="collapsible-bars">
                        {barsData.map((bar, index) => (
                          <div
                            key={index}
                            className={`collapsible-bar ${activeBar === index ? "active" : ""
                              }`}
                          >
                            <div
                              className="collapsible-bar-title w-full flex flex-row align-center justify-between cursor-pointer"
                              onClick={() => toggleBar(index)}
                            >
                              <p className="para-3">{bar.title}</p>
                              <img
                                src={tabarrow}
                                alt="tab-arrow"
                                className={`transition-transform duration-300 ${activeBar === index ? "rotate-180" : ""
                                  }`}
                              />
                            </div>
                            {activeBar === index && (
                              <div className="collapsible-bar-content custom-scrollbar">
                                <div className="content-inner">
                                  {bar.content.map((item, i) => (
                                    <BirthdayCard
                                      key={i}
                                      userimg={userimg}
                                      username={item.username}
                                      uservalue={item.uservalue}
                                      dateofbirth={item.dateofbirth}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : activeTab === "Job Anniversary" ? (
                    <div className="tabs-content">
                      <div className="collapsible-bars">
                        {barsData.map((bar, index) => (
                          <div
                            key={index}
                            className={`collapsible-bar ${activeBar === index ? "active" : ""
                              }`}
                          >
                            <div
                              className="collapsible-bar-title w-full flex flex-row align-center justify-between cursor-pointer"
                              onClick={() => toggleBar(index)}
                            >
                              <p className="para-3">{bar.title}</p>
                              <img
                                src={tabarrow}
                                alt="tab-arrow"
                                className={`transition-transform duration-300 ${activeBar === index ? "rotate-180" : ""
                                  }`}
                              />
                            </div>
                            {activeBar === index && (
                              <div className="collapsible-bar-content custom-scrollbar">
                                <div className="content-inner">
                                  {bar.content.map((item, i) => (
                                    <BirthdayCard
                                      key={i}
                                      userimg={userimg}
                                      username={item.username}
                                      uservalue={item.uservalue}
                                      dateofbirth={item.dateofbirth}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="tabs-content">
                      <div className="collapsible-bars">
                        {barsData.map((bar, index) => (
                          <div
                            key={index}
                            className={`collapsible-bar ${activeBar === index ? "active" : ""
                              }`}
                          >
                            <div
                              className="collapsible-bar-title w-full flex flex-row align-center justify-between cursor-pointer"
                              onClick={() => toggleBar(index)}
                            >
                              <p className="para-3">{bar.title}</p>
                              <img
                                src={tabarrow}
                                alt="tab-arrow"
                                className={`transition-transform duration-300 ${activeBar === index ? "rotate-180" : ""
                                  }`}
                              />
                            </div>
                            {activeBar === index && (
                              <div className="collapsible-bar-content custom-scrollbar">
                                <div className="content-inner">
                                  {bar.content.map((item, i) => (
                                    <BirthdayCard
                                      key={i}
                                      userimg={userimg}
                                      username={item.username}
                                      uservalue={item.uservalue}
                                      dateofbirth={item.dateofbirth}
                                    />
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="sidebar-widget-box box-shadow">
                <div className="widget-header">
                  <div className="flex flex-row items-center justify-between">
                    <h2>Timeoff Record</h2>
                    <a href="#" className="link-co">
                      View All Record
                    </a>
                  </div>
                  <div className="tabs-bar">
                    <button
                      className="tab-button"
                      data-state={activeTab2 === "Upcoming" ? "active" : null}
                      onClick={() => setActiveTab2("Upcoming")}
                    >
                      Upcoming <span className="number">2</span>
                    </button>
                    <button
                      className="tab-button"
                      data-state={activeTab2 === "Ongoing" ? "active" : null}
                      onClick={() => setActiveTab2("Ongoing")}
                    >
                      Ongoing <span className="number">2</span>
                    </button>
                  </div>
                </div>
                <div className="widget-content px-[7px] mt-[8px] h-full">
                  <div className="tabs-content h-full">
                    {activeTab2 === "Upcoming" ? (
                      <div className="content-inner no-collpasible custom-scrollbar">
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                      </div>
                    ) : activeTab2 === "Ongoing" ? (
                      <div className="content-inner no-collpasible custom-scrollbar">
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal4535"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                        <TimeoffrecordCard
                          userimg={userimg}
                          username="John Micheal"
                          uservalue="Leader Designer"
                          duration="2 Days"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="sidebar-widget-box box-shadow">
                <div className="widget-header">
                  <div className="flex flex-row items-center justify-between">
                    <h2>My Teams</h2>
                  </div>
                  <div className="widget-content mt-[8px] h-full">
                    <div className="content-inner team-content custom-scrollbar">
                      <TeamuserCard
                        userimg={userimg}
                        username="John Micheal"
                        uservalue="Founder"
                        buttonlink="#"
                      />
                      <TeamuserCard
                        userimg={userimg}
                        username="John Micheal"
                        uservalue="Founder"
                        buttonlink="#"
                      />
                      <TeamuserCard
                        userimg={userimg}
                        username="John Micheal"
                        uservalue="Founder"
                        buttonlink="#"
                      />
                      <TeamuserCard
                        userimg={userimg}
                        username="John Micheal"
                        uservalue="Founder"
                        buttonlink="#"
                      />
                      <TeamuserCard
                        userimg={userimg}
                        username="John Micheal"
                        uservalue="Founder"
                        buttonlink="#"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
