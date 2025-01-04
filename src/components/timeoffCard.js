import React from "react";

function TimeoffCard(Props) {
  return (
    <div className="timeoffcard">
      <div className="card-inner">
        <div className="top_area">
          <h4 className="text-center mb-3">Annual Timeoff</h4>
          <div class="progress-circle-main relative">
            <div class="progress-dial" id="progressDial"></div>
            <div className="progress-text">
                    <h6>{Props.days}</h6>
                    <p className="para-3 text-black">Days</p>
                    <p className="para-4">
                    Paid Timeoff
                    </p>
            </div>
          </div>
        </div>
        <div className="bottom_area mt-[28px] pt-[8px] border-t-[1px] border-solid border-[#F2F2F2]">
            <button className="bg-[#EBEFFA]">Request Timeoff</button>
            <button className="bg-[#FAFAFA]">View Policy Details</button>
        </div>
      </div>
    </div>
  );
}

export default TimeoffCard;
