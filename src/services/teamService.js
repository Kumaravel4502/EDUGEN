// Simulating API calls with the current data
// In a real application, these would be actual API endpoints

// Import the static data (temporary)
import { TeamData2 } from "../API/TeamData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const teamService = {
  getAllTeamMembers: async () => {
    try {
      // Simulate API call delay
      await delay(1000);
      return {
        success: true,
        data: TeamData2,
      };
    } catch (err) {
      console.error("Error fetching team members:", err);
      return {
        success: false,
        error: "Failed to fetch team members",
      };
    }
  },

  getTeamMemberById: async (id) => {
    try {
      // Simulate API call delay
      await delay(800);
      const member = TeamData2.find((m) => m.id === parseInt(id));
      if (!member) {
        throw new Error("Team member not found");
      }
      return {
        success: true,
        data: member,
      };
    } catch (err) {
      console.error(`Error fetching team member with id ${id}:`, err);
      return {
        success: false,
        error: "Failed to fetch team member details",
      };
    }
  },

  getTeamMemberCourses: async (memberId) => {
    try {
      // Simulate API call delay
      await delay(600);
      const member = TeamData2.find((m) => m.id === parseInt(memberId));
      if (!member) {
        throw new Error("Team member not found");
      }
      return {
        success: true,
        data: member.featuredCourses,
      };
    } catch (err) {
      console.error(`Error fetching courses for team member ${memberId}:`, err);
      return {
        success: false,
        error: "Failed to fetch team member courses",
      };
    }
  },
};
