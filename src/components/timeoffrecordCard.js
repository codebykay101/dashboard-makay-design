import React from "react";

function TimeoffrecordCard(Props) {
  return (
    <div className="timeoffrecordcard">
      <div className="card-inner flex flex-row items-center justify-between">
        <div className="user-data flex flex-row gap-[16px] items-center">
          <img src={Props.userimg} alt="user-img" height={36} width={36} />
          <div className="user-details">
            <p className="para-1">{Props.username}</p>
            <p className="para-4">{Props.uservalue}</p>
          </div>
        </div>
        <div className="date-setting flex justify-center items-center flex-col gap-[5px]">
          <p className="para-3 text-black">({Props.duration})</p>
        </div>
      </div>
      <div className="card-line"></div>
      <div className="dates-setup flex flex-row items-center">
        <div className="start_date dates">
        Start Date: <b>Jan 23</b>
        </div>
        <div className="divider"></div>
        <div className="end_date dates">
        End Date: <b>Jan 25, 2022</b>
        </div>
      </div>
    </div>
  );
}

export default TimeoffrecordCard;
