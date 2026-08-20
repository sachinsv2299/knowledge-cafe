import React, { useState, useMemo } from "react";
import { ArrowLeft, Search, ChevronUp, ChevronDown } from "lucide-react";

const MAILING_LIST_DATA = [
  { email: 'announcements@iith.ac.in', members: 'All group members in Institute', participation: 'Mandatory', receives: 'All Members in the group,<br />All functionaries with no email option', posts: 'All Functionaries only' },
  { email: 'arc@iith.ac.in', members: 'Academic Review Committee', participation: '', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'aac@iith.ac.in', members: 'Academic Advisory Committee members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'assoc.prof@iith.ac.in', members: 'Associate Professor', participation: 'Mandatory', receives: 'All Members in the group,<br />All functionaries with no email option', posts: 'Faculty office, Director office, Dean Faculty, BSM@ & Director' },
  { email: 'asst.prof@iith.ac.in', members: 'Assistant Professor', participation: 'Mandatory', receives: 'All Members in the group,<br />All functionaries with no email option', posts: 'Faculty office, Director office, Dean Faculty, BSM@ & Director' },
  { email: 'prof@iith.ac.in', members: 'Professor', participation: 'Mandatory', receives: 'All Members in the group,<br />All functionaries with no email option', posts: 'Faculty office, Director office, Dean Faculty, BSM@ & Director' },
  { email: 'dcr@iith.ac.in', members: 'Department Corporate Relations Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'deans@iith.ac.in', members: 'Deans', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@iith.ac.in', members: 'All Faculty', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'doctors@iith.ac.in', members: 'Doctors', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@ai.iith.ac.in', members: 'Artifical Intelligence Faculty Members', participation: 'Mandatory', receives: 'All AI Department Faculty', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@bme.iith.ac.in', members: 'Biomedical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@bt.iith.ac.in', members: 'Biotechnology Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@cc.iith.ac.in', members: 'Climate Change Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@ce.iith.ac.in', members: 'Civil Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@che.iith.ac.in', members: 'Chemical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@chy.iith.ac.in', members: 'Chemistry Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@cleanz.coe.iith.ac.in', members: 'Associated Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@co.iith.ac.in', members: 'Associated Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@comp.iith.ac.in', members: 'Computer Centre Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@cse.iith.ac.in', members: 'Computer Science and Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@des.iith.ac.in', members: 'Design Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@ee.iith.ac.in', members: 'Electrical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@em.iith.ac.in', members: 'Entrepreneurship and Management Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@es.iith.ac.in', members: 'Engineering Science Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@gss.iith.ac.in', members: 'Greenko School of Sustainability Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@hst.iith.ac.in', members: 'Heritage Science and Technology Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@la.iith.ac.in', members: 'Liberal Arts Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@mae.iith.ac.in', members: 'Mechanical and Aerospace Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@math.iith.ac.in', members: 'Mathematics Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@msme.iith.ac.in', members: 'Materials Science and Metallurgical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'faculty@phy.iith.ac.in', members: 'Physics Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'fic@iith.ac.in', members: 'All Faculty In-Charges', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'hods@iith.ac.in', members: 'All Department/Section Heads /Chairs', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'hos@iith.ac.in', members: 'All Heads of Sections', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Orgraniazation' },
  { email: 'projectstaff@iith.ac.in', members: 'All Institute Project Staff', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'projectstaff_rd@iith.ac.in', members: 'All SRC Project Staff', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'seminar@ai.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@ai.iith.ac.in, Discourse only' },
  { email: 'seminar@bme.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@bme.iith.ac.in, Discourse only' },
  { email: 'seminar@bt.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@bt.iith.ac.in, Discourse only' },
  { email: 'seminar@cc.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@cc.iith.ac.in, Discourse only' },
  { email: 'seminar@ce.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@ce.iith.ac.in, Discourse only' },
  { email: 'seminar@che.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@che.iith.ac.in, Discourse only' },
  { email: 'seminar@chy.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@chy.iith.ac.in, Discourse only' },
  { email: 'seminar@cse.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@cse.iith.ac.in, Discourse only' },
  { email: 'seminar@des.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@des.iith.ac.in, Discourse only' },
  { email: 'seminar@ee.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@ee.iith.ac.in, Discourse only' },
  { email: 'seminar@em.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@em.iith.ac.in, Discourse only' },
  { email: 'seminar@es.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@es.iith.ac.in, Discourse only' },
  { email: 'seminar@gss.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@gss.iith.ac.in, Discourse only' },
  { email: 'seminar@hst.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@hst.iith.ac.in, Discourse only' },
  { email: 'seminar@la.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@la.iith.ac.in, Discourse only' },
  { email: 'seminar@mae.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@mae.iith.ac.in, Discourse only' },
  { email: 'seminar@math.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@math.iith.ac.in, Discourse only' },
  { email: 'seminar@msme.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@msme.iith.ac.in, Discourse only' },
  { email: 'seminar@phy.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty@phy.iith.ac.in, Discourse only' },
  { email: 'senate.faculty@iith.ac.in', members: 'Senate Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
  { email: 'senate.students@iith.ac.in', members: 'Senate Students Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'spgc@iith.ac.in', members: 'SPGC members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
  { email: 'staff@iith.ac.in', members: 'All Regular Staff members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'sugc@iith.ac.in', members: 'SUGC members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
  { email: 'wardens@iith.ac.in', members: 'All wardens', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'Students@iith.ac.in', members: 'All Students', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
];

const GroupMailPolicyPage = ({ navigateTo, goBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return MAILING_LIST_DATA;
    }
    return MAILING_LIST_DATA.filter(item =>
      item.email.toLowerCase().includes(searchTerm)
    );
  }, [searchTerm]);

  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      <button
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-7xl mx-auto bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728]">
            IITH Group Mail Policy
          </h1>
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by group email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              className="w-full md:w-72 h-12 pl-10 pr-4 border border-[#D4AF37] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />
          </div>
        </div>

        <div className="relative group">
           <div className="absolute top-16 right-4 text-blue-300 group-hover:text-blue-500 transition-colors duration-300 animate-bounce z-20">
            <ChevronUp size={28} strokeWidth={3} />
          </div>
          <div className="overflow-auto max-h-[75vh] border border-blue-200 rounded-xl shadow-sm bg-white scrollbar-thin scrollbar-thumb-blue-600/50 scrollbar-track-blue-50/50">
            <table className="w-full text-left border-collapse">
              <thead className="bg-blue-500 border-b border-blue-600 sticky top-0 z-10">
                <tr>
                  <th className="p-4 font-bold text-white border-r border-blue-400/50 w-12 text-center">#</th>
                  <th className="p-4 font-bold text-white border-r border-blue-400/50">Mailing List</th>
                  <th className="p-4 font-bold text-white border-r border-blue-400/50">Members</th>
                  <th className="p-4 font-bold text-white border-r border-blue-400/50">Participation</th>
                  <th className="p-4 font-bold text-white border-r border-blue-400/50">Who can recieve mails?</th>
                  <th className="p-4 font-bold text-white">Who can Post mails?</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {filteredData.map((item, index) => (
                  <tr key={item.email} className="border-b border-gray-100 last:border-0 even:bg-blue-50/50 hover:bg-blue-100/70 transition-colors duration-200">
                    <td className="p-4 align-top border-r border-gray-200 text-center font-medium text-gray-500">{index + 1}</td>
                    <td className="p-4 align-top border-r border-gray-200 font-mono">{item.email}</td>
                    <td className="p-4 align-top border-r border-gray-200">{item.members}</td>
                    <td className="p-4 align-top border-r border-gray-200">{item.participation}</td>
                    <td className="p-4 align-top border-r border-gray-200" dangerouslySetInnerHTML={{ __html: item.receives }} />
                    <td className="p-4 align-top">{item.posts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="absolute -bottom-2.5 right-4 text-blue-300 group-hover:text-blue-500 transition-colors duration-300 animate-bounce z-20">
            <ChevronDown size={28} strokeWidth={3} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupMailPolicyPage;