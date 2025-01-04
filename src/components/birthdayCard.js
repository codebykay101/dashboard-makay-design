import React from 'react'
import birthdateimg from './../images/birthdate.svg'

function BirthdayCard(Props) {
  return (
    <div className="birth-card">
    <div className='user-data flex flex-row gap-[16px] items-center'>
      <img src={Props.userimg} alt="user-img" height={36} width={36}/>
      <div className='user-details'>
        <p className='para-1'>{Props.username}</p>
        <p className='para-4'>{Props.uservalue}</p>
      </div>
    </div>
    <div className="date-setting flex justify-center items-center flex-col gap-[5px]">
      <img src={birthdateimg} alt="birthdate-ico" width={18} height={21.5}/>
      <p className='para-3 text-black'>{Props.dateofbirth}</p>
    </div>
  </div>
  )
}

export default BirthdayCard