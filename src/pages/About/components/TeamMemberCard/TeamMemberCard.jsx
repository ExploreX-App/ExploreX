import React from 'react';

const TeamMemberCard = ({ member, index }) => {
  return (
    <div
      className={`team-card ${index % 2 === 0 ? 'lower-card' : ''} ${
        index === 0 || index === 2 || index === 4 ? 'offset-card' : ''
      }`}
      key={index}
    >
      <img src={member.imgSrc} alt={member.name} className='team-img' />
      <div className='overlay'>
        <div className='team-info'>
          <h3 className='member-name'>{member.name}</h3>
          <p className='member-title'>{member.title}</p>
          <p>{member.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
