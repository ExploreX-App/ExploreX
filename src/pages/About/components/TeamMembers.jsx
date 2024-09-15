import React from 'react';
import './TeamMembers.style.css';
import { teamMembers } from '../../../utils/mockData/teamMembersInfo';
import TeamMemberCard from './TeamMemberCard/TeamMemberCard';

const TeamMembers = () => {
  return (
    <div className='team-section'>
      <div className='team-container'>
        <h2 className='team-title'>Meet Our Team</h2>
        <p className='team-description'>
          Our team brings together a unique set of skills to make your travel
          experience seamless and enjoyable.
        </p>
        <div className='team-cards-container'>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
