import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import StatsCounter from "../StatsCounter/StatsCounter";
import { useTeam } from "../../context/TeamContext";

const TeamMemberDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const { teamData, updateTeamMemberStats } = useTeam();
  const member = teamData.find(m => m.id === parseInt(id));

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!member) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-600">
          Team member not found
        </h2>
        <Link to="/our-team" className="text-blue-500 underline mt-4 block">
          Back to Team
        </Link>
      </div>
    );
  }

  // Function to handle stats update
  const handleStatsUpdate = (statKey, value) => {
    updateTeamMemberStats(member.id, {
      [statKey]: value
    });
  };

  return (
    <div className="2xl:container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Column - Profile Info */}
          <div className="md:col-span-4 bg-white rounded-xl shadow-lg p-6">
            {/* Profile Image */}
            <div className="mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Name and Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h1>
            <p className="text-gray-600 mb-4">{member.position}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-6">
              {member.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${member.email}`} className="hover:text-purple-600">
                  {member.email}
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{member.location}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mb-6">
              <a href={member.google} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-purple-600 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-gray-200">
              <StatsCounter
                value={member.stats.students}
                label="Enrolled Students"
                start={0}
                duration={1500}
                easingFn="easeOutQuad"
                onComplete={() => handleStatsUpdate('students', member.stats.students)}
              />
              <StatsCounter
                value={member.stats.programs}
                label="Academic Programs"
                start={0}
                duration={2000}
                easingFn="easeInOutQuad"
                onComplete={() => handleStatsUpdate('programs', member.stats.programs)}
              />
              <StatsCounter
                value={member.stats.awards}
                label="Award Winning"
                start={0}
                duration={2500}
                easingFn="linear"
                onComplete={() => handleStatsUpdate('awards', member.stats.awards)}
              />
            </div>
          </div>

          {/* Right Column - Featured Courses */}
          <div className="md:col-span-8">
            <h2 className="text-2xl font-bold mb-6">Most Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.featuredCourses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">${course.price.toFixed(2)}</span>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Featured</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span>{course.lessons} Lessons</span>
                      <span>{course.duration}</span>
                      <span>{course.rating} ⭐</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberDetail;