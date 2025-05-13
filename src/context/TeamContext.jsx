import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { TeamData2 as initialTeamData } from '../API/TeamData';

const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
    const [teamData, setTeamData] = useState(initialTeamData);

    const updateTeamMember = (memberId, updatedData) => {
        setTeamData(prevData =>
            prevData.map(member =>
                member.id === memberId
                    ? { ...member, ...updatedData }
                    : member
            )
        );
    };

    const updateTeamMemberStats = (memberId, stats) => {
        setTeamData(prevData =>
            prevData.map(member =>
                member.id === memberId
                    ? { ...member, stats: { ...member.stats, ...stats } }
                    : member
            )
        );
    };

    return (
        <TeamContext.Provider value={{ teamData, updateTeamMember, updateTeamMemberStats }}>
            {children}
        </TeamContext.Provider>
    );
};

TeamProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export const useTeam = () => {
    const context = useContext(TeamContext);
    if (!context) {
        throw new Error('useTeam must be used within a TeamProvider');
    }
    return context;
}; 