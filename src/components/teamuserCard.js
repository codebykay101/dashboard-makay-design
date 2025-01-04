import React from 'react'

function TeamuserCard(Props) {
  return (
    <div className="teamuser-card" style={{borderBottom:'1px solid #E1E1E1'}}>
    <div className='user-data flex flex-row gap-[16px] items-center'>
      <img src={Props.userimg} alt="user-img" height={36} width={36}/>
      <div className='user-details'>
        <p className='para-1'>{Props.username}</p>
        <p className='para-4'>{Props.uservalue}</p>
      </div>
    </div>
    <div className="link-setting flex justify-center items-center flex-col gap-[5px]">
      <a href={Props.buttonlink} className='para-3'>Contact</a>
    </div>
  </div>
  )
}

export default TeamuserCard