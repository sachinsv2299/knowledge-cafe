import React, { useState, useMemo, useRef, useEffect } from "react";
import { ArrowLeft, Search } from "lucide-react";

const MAILING_LIST_DATA = [
  { email: 'aac@iith.ac.in', members: 'Academic Advisory Committee members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'announcements@iith.ac.in', members: 'All group members in Institute', participation: 'Mandatory', receives: 'All Members in the Institute', posts: 'Only Functionaries' },
  { email: 'arc@iith.ac.in', members: 'Academic Review Committee', participation: '', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'assoc.prof@iith.ac.in', members: 'Associate Professor', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty office, Director office, Dean Faculty, BSM & Director' },
  { email: 'asst.prof@iith.ac.in', members: 'Assistant Professor', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty office, Director office, Dean Faculty, BSM & Director' },
  { email: 'dcr@iith.ac.in', members: 'Department Corporate Relations Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'deans@iith.ac.in', members: 'Deans', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'doctors@iith.ac.in', members: 'All Doctors', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'faculty@ai.iith.ac.in', members: 'All Artificial Intelligence Faculty Members', participation: 'Mandatory', receives: 'All AI Department Faculty', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@bme.iith.ac.in', members: 'All Biomedical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@bt.iith.ac.in', members: 'All Biotechnology Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@cc.iith.ac.in', members: 'All Climate Change Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@ce.iith.ac.in', members: 'All Civil Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@che.iith.ac.in', members: 'All Chemical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@chy.iith.ac.in', members: 'All Chemistry Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@cleanz.coe.iith.ac.in', members: 'Associated Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Associated Faculty Members' },
  { email: 'faculty@co.iith.ac.in', members: 'Associated Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Associated Faculty Members' },
  { email: 'faculty@comp.iith.ac.in', members: 'Computer Centre Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Associated Faculty Members' },
  { email: 'faculty@cse.iith.ac.in', members: 'All Computer Science and Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@des.iith.ac.in', members: 'All Design Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@ee.iith.ac.in', members: 'All Electrical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@em.iith.ac.in', members: 'All Entrepreneurship and Management Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@es.iith.ac.in', members: 'All Engineering Science Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@gss.iith.ac.in', members: 'All Greenko School of Sustainability Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@hst.iith.ac.in', members: 'All Heritage Science and Technology Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@iith.ac.in', members: 'All Faculty members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries & All Faculty members' },
  { email: 'faculty@la.iith.ac.in', members: 'All Liberal Arts Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@mae.iith.ac.in', members: 'All Mechanical and Aerospace Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@math.iith.ac.in', members: 'All Mathematics Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@msme.iith.ac.in', members: 'All Materials Science and Metallurgical Engineering Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'faculty@phy.iith.ac.in', members: 'All Physics Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Department Faculty, Discourse only' },
  { email: 'fic@iith.ac.in', members: 'All Faculty In-Charges', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'hods@iith.ac.in', members: 'All Department/Section Heads /Chairs', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'hos@iith.ac.in', members: 'All Heads of Sections', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'nurses@iith.ac.in', members: 'All Nurses', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'prof@iith.ac.in', members: 'Professors', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Faculty office, Director office, Dean Faculty, BSM & Director' },
  { email: 'projectstaff@iith.ac.in', members: 'All Institute Project Staff', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'projectstaff_rd@iith.ac.in', members: 'All SRC Project Staff', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'seminar@ai.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@ai.iith.ac.in, Discourse only' },
  { email: 'seminar@bme.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@bme.iith.ac.in, Discourse only' },
  { email: 'seminar@bt.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@bt.iith.ac.in, Discourse only' },
  { email: 'seminar@cc.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@cc.iith.ac.in, Discourse only' },
  { email: 'seminar@ce.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@ce.iith.ac.in, Discourse only' },
  { email: 'seminar@che.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@che.iith.ac.in, Discourse only' },
  { email: 'seminar@chy.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@chy.iith.ac.in, Discourse only' },
  { email: 'seminar@cse.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@cse.iith.ac.in, Discourse only' },
  { email: 'seminar@des.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@des.iith.ac.in, Discourse only' },
  { email: 'seminar@ee.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@ee.iith.ac.in, Discourse only' },
  { email: 'seminar@em.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@em.iith.ac.in, Discourse only' },
  { email: 'seminar@es.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@es.iith.ac.in, Discourse only' },
  { email: 'seminar@gss.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@gss.iith.ac.in, Discourse only' },
  { email: 'seminar@hst.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@hst.iith.ac.in, Discourse only' },
  { email: 'seminar@la.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@la.iith.ac.in, Discourse only' },
  { email: 'seminar@mae.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@mae.iith.ac.in, Discourse only' },
  { email: 'seminar@math.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@math.iith.ac.in, Discourse only' },
  { email: 'seminar@msme.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@msme.iith.ac.in, Discourse only' },
  { email: 'seminar@phy.iith.ac.in', members: 'Members of Respective Department Seminar Group', participation: 'Mandatory', receives: 'All Members in the group', posts: 'faculty@phy.iith.ac.in, Discourse only' },
  { email: 'senate.faculty@iith.ac.in', members: 'Senate Faculty Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
  { email: 'senate.students@iith.ac.in', members: 'Senate Students Members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'Anyone in the Organization' },
  { email: 'spgc@iith.ac.in', members: 'SPGC members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
  { email: 'staff@iith.ac.in', members: 'All Regular Staff members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'students@iith.ac.in', members: 'All Students', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Functionaries only' },
  { email: 'sugc@iith.ac.in', members: 'SUGC members', participation: 'Mandatory', receives: 'All Members in the group', posts: 'All Members in the group' },
].sort((a, b) => a.email.localeCompare(b.email));

const SECTIONS = [
  { id: "role-based", label: "Role-Based Lists" },
  { id: "interest-based", label: "Interest-Based Lists" },
];

const GroupMailPolicyPage = ({ navigateTo, goBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("role-based");
  const sectionRefs = useRef({});

  const { mandatory, interest } = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const filtered = MAILING_LIST_DATA.filter(
      (item) =>
        item.email.toLowerCase().includes(term) ||
        item.members.toLowerCase().includes(term)
    );
    return {
      mandatory: filtered.filter((item) => !item.email.startsWith("seminar@")),
      interest: filtered.filter((item) => item.email.startsWith("seminar@")),
    };
  }, [searchTerm]);

  // Scrollspy: highlight nav button for whichever section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const renderTable = (rows) => (
    <div className="border border-[#E4DCD3] rounded-md overflow-hidden bg-white">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#F1EAE1] border-b border-[#CDC0B3]">
            <th className="p-3 pl-4 text-xs font-semibold uppercase tracking-wide text-[#6B5F59] whitespace-nowrap w-12 text-center">#</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59] whitespace-nowrap">Mailing List</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">Members</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59] whitespace-nowrap">Participation</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">Who can receive?</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">Who can post?</th>
          </tr>
        </thead>
        <tbody className="text-[14.5px] text-[#241D1B]">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} className="p-8 text-center text-[#6B5F59]">
                No matching lists found.
              </td>
            </tr>
          ) : (
            rows.map((item, index) => (
              <tr
                key={item.email}
                className="border-b border-[#E4DCD3] last:border-0 hover:bg-[#FBF6EF] transition-colors"
              >
                <td className="p-3 pl-4 align-top text-center text-[#6B5F59]">{index + 1}</td>
                <td className="p-3 align-top whitespace-nowrap">
                  <code className="text-[13.5px] text-[#6E1423] bg-[#F7EDE9] px-2 py-0.5 rounded">
                    {item.email}
                  </code>
                </td>
                <td className="p-3 align-top max-w-[260px]">{item.members}</td>
                <td className="p-3 align-top text-[#6B5F59] whitespace-nowrap">{item.participation || "—"}</td>
                <td className="p-3 align-top text-[#6B5F59] max-w-[220px]">{item.receives}</td>
                <td className="p-3 align-top text-[#6B5F59] max-w-[240px]">{item.posts}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="bg-[#FAF8F5] min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Back button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#F28972] hover:text-[#D2691E] mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> BACK
        </button>

        {/* Masthead */}
        <div className="border-b-[3px] border-[#6E1423] pb-6 mb-6">
          <p className="text-[13px] tracking-wide text-[#6B5F59] mb-2">IIT Hyderabad</p>
          <h1 className="font-serif text-2xl md:text-4xl font-semibold text-[#241D1B] whitespace-nowrap">
            Institute Group Mailing List Directory
          </h1>
          <p className="mt-3 text-[15px] md:text-base text-[#6B5F59] max-w-[56ch]">
            A reference for every institute mailing list — who belongs to each group, who receives
            messages, and who is permitted to send.
          </p>
        </div>

        {/* Section nav */}
        <nav className="flex gap-6 border-b border-[#E4DCD3] sticky top-0 bg-[#FAF8F5] z-10">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-3 text-[15px] font-medium border-b-2 transition-colors rounded-t-sm ${
                activeSection === section.id
                  ? "text-[#6E1423] border-[#6E1423] bg-[#F7EDE9]"
                  : "text-[#6B5F59] border-transparent hover:text-[#6E1423] hover:border-[#B5555F]"
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Search */}
        <div className="mt-6 mb-8">
          <div className="relative max-w-md">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B5F59]"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by group email or department…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-11 pl-10 pr-4 text-[15px] border border-[#CDC0B3] rounded-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#8C2331]/25 focus:border-[#8C2331]"
            />
          </div>
          <p className="mt-2 text-[13px] text-[#6B5F59]">
            {searchTerm
              ? `${mandatory.length + interest.length} of ${MAILING_LIST_DATA.length} lists match "${searchTerm}"`
              : `Searching across ${MAILING_LIST_DATA.length} mailing lists`}
          </p>
        </div>

        {/* Role-based section */}
        <section
          id="role-based"
          ref={(el) => (sectionRefs.current["role-based"] = el)}
          className="scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#241D1B]">
                Role-based group mailing lists
              </h2>
              <p className="text-[14px] text-[#6B5F59] mt-1">
                Membership is assigned automatically by role or department — no action is needed to join.
              </p>
            </div>
            <span className="text-[13px] text-[#6B5F59] whitespace-nowrap">{mandatory.length} lists</span>
          </div>
          {renderTable(mandatory)}
        </section>

        {/* Interest-based section */}
        <section
          id="interest-based"
          ref={(el) => (sectionRefs.current["interest-based"] = el)}
          className="scroll-mt-24 mt-14 pt-12 border-t border-[#E4DCD3]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#241D1B]">
                Interest-based group mailing lists
              </h2>
              <p className="text-[14px] text-[#6B5F59] mt-1">
                Department seminar announcements. Join whichever are relevant to your interests.
              </p>
            </div>
            <span className="text-[13px] text-[#6B5F59] whitespace-nowrap">{interest.length} lists</span>
          </div>

          <div className="bg-[#F6EEE1] border-l-[3px] border-[#B98F3E] text-[#5C4A26] text-[13.5px] px-4 py-3 mb-5 rounded-r-sm">
            To subscribe to any list below, raise a ticket through the{" "}
            <a
              href="https://support.comp.iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Support Portal
            </a>{" "}
            and select "IITH Mail / Create or Update Group Email" from the category dropdown.
          </div>

          {renderTable(interest)}
        </section>
      </div>
    </main>
  );
};

export default GroupMailPolicyPage;
