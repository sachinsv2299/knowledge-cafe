import React, { useState, useMemo, useRef, useEffect } from "react";
import { ArrowLeft, Search, ArrowUp } from "lucide-react";

// Role-based lists — membership assigned by role/department, no action needed to join. (44 lists)
const ROLE_BASED_DATA = [
  { email: "aac@iith.ac.in", members: "Academic Advisory Committee members", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "announcements@iith.ac.in", members: "All group members in the Institute", receives: "All Members in the Institute", posts: "Only Functionaries (Director, Dean, Chair, HoD, HoS)" },
  { email: "arc@iith.ac.in", members: "Academic Review Committee", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "assoc.prof@iith.ac.in", members: "Associate Professor", receives: "All Members in the group", posts: "Faculty office, Director office, Dean Faculty, BSM & Director" },
  { email: "asst.prof@iith.ac.in", members: "Assistant Professor", receives: "All Members in the group", posts: "Faculty office, Director office, Dean Faculty, BSM & Director" },
  { email: "dcr@iith.ac.in", members: "Department Corporate Relations Members", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "deans@iith.ac.in", members: "Deans", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "doctors@iith.ac.in", members: "All Doctors", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "faculty@ai.iith.ac.in", members: "All Artificial Intelligence Faculty Members", receives: "All AI Department Faculty", posts: "All Department Faculty" },
  { email: "faculty@bme.iith.ac.in", members: "All Biomedical Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@bt.iith.ac.in", members: "All Biotechnology Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@cc.iith.ac.in", members: "All Climate Change Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@ce.iith.ac.in", members: "All Civil Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@che.iith.ac.in", members: "All Chemical Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@chy.iith.ac.in", members: "All Chemistry Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@cleanz.coe.iith.ac.in", members: "Associated Faculty Members", receives: "All Members in the group", posts: "Associated Faculty Members" },
  { email: "faculty@co.iith.ac.in", members: "Associated Faculty Members", receives: "All Members in the group", posts: "Associated Faculty Members" },
  { email: "faculty@comp.iith.ac.in", members: "Computer Centre Faculty Members", receives: "All Members in the group", posts: "Associated Faculty Members" },
  { email: "faculty@cse.iith.ac.in", members: "All Computer Science and Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@des.iith.ac.in", members: "All Design Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@ee.iith.ac.in", members: "All Electrical Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@em.iith.ac.in", members: "All Entrepreneurship and Management Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@es.iith.ac.in", members: "All Engineering Science Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@gss.iith.ac.in", members: "All Greenko School of Sustainability Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@hst.iith.ac.in", members: "All Heritage Science and Technology Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@iith.ac.in", members: "All Faculty members", receives: "All Members in the group", posts: "All Functionaries & All Faculty members" },
  { email: "faculty@la.iith.ac.in", members: "All Liberal Arts Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@mae.iith.ac.in", members: "All Mechanical and Aerospace Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@math.iith.ac.in", members: "All Mathematics Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@msme.iith.ac.in", members: "All Materials Science and Metallurgical Engineering Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "faculty@phy.iith.ac.in", members: "All Physics Faculty Members", receives: "All Members in the group", posts: "All Department Faculty" },
  { email: "fic@iith.ac.in", members: "All Faculty In-Charges", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "hods@iith.ac.in", members: "All Department/Section Heads /Chairs", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "hos@iith.ac.in", members: "All Heads of Sections", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "nurses@iith.ac.in", members: "All Nurses", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "prof@iith.ac.in", members: "Professors", receives: "All Members in the group", posts: "Faculty office, Director office, Dean Faculty, BSM & Director" },
  { email: "projectstaff_rd@iith.ac.in", members: "All SRC Project Staff", receives: "All Members in the group", posts: "All Functionaries only" },
  { email: "projectstaff@iith.ac.in", members: "All Institute Project Staff", receives: "All Members in the group", posts: "All Functionaries only" },
  { email: "senate.faculty@iith.ac.in", members: "Senate Faculty Members", receives: "All Members in the group", posts: "All Members in the group" },
  { email: "senate.students@iith.ac.in", members: "Senate Students Members", receives: "All Members in the group", posts: "Anyone in the Organization" },
  { email: "spgc@iith.ac.in", members: "SPGC members", receives: "All Members in the group", posts: "All Members in the group" },
  { email: "staff@iith.ac.in", members: "All Regular Staff members", receives: "All Members in the group", posts: "All Functionaries only" },
  { email: "students@iith.ac.in", members: "All Students", receives: "All Members in the group", posts: "All Functionaries only" },
  { email: "sugc@iith.ac.in", members: "SUGC members", receives: "All Members in the group", posts: "All Members in the group" },
];

// Interest-based lists — department seminar announcements, join the ones relevant to your interests. (19 lists)
const INTEREST_BASED_DATA = [
  { email: "seminar@ai.iith.ac.in", members: "AI Department seminar announcements", receives: "All subscribed members", posts: "faculty@ai.iith.ac.in" },
  { email: "seminar@bme.iith.ac.in", members: "Biomedical Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@bme.iith.ac.in" },
  { email: "seminar@bt.iith.ac.in", members: "Biotechnology seminar announcements", receives: "All subscribed members", posts: "faculty@bt.iith.ac.in" },
  { email: "seminar@cc.iith.ac.in", members: "Climate Change seminar announcements", receives: "All subscribed members", posts: "faculty@cc.iith.ac.in" },
  { email: "seminar@ce.iith.ac.in", members: "Civil Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@ce.iith.ac.in" },
  { email: "seminar@che.iith.ac.in", members: "Chemical Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@che.iith.ac.in" },
  { email: "seminar@chy.iith.ac.in", members: "Chemistry seminar announcements", receives: "All subscribed members", posts: "faculty@chy.iith.ac.in" },
  { email: "seminar@cse.iith.ac.in", members: "Computer Science & Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@cse.iith.ac.in" },
  { email: "seminar@des.iith.ac.in", members: "Design seminar announcements", receives: "All subscribed members", posts: "faculty@des.iith.ac.in" },
  { email: "seminar@ee.iith.ac.in", members: "Electrical Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@ee.iith.ac.in" },
  { email: "seminar@em.iith.ac.in", members: "Entrepreneurship & Management seminar announcements", receives: "All subscribed members", posts: "faculty@em.iith.ac.in" },
  { email: "seminar@es.iith.ac.in", members: "Engineering Science seminar announcements", receives: "All subscribed members", posts: "faculty@es.iith.ac.in" },
  { email: "seminar@gss.iith.ac.in", members: "Greenko School of Sustainability seminar announcements", receives: "All subscribed members", posts: "faculty@gss.iith.ac.in" },
  { email: "seminar@hst.iith.ac.in", members: "Heritage Science & Technology seminar announcements", receives: "All subscribed members", posts: "faculty@hst.iith.ac.in" },
  { email: "seminar@la.iith.ac.in", members: "Liberal Arts seminar announcements", receives: "All subscribed members", posts: "faculty@la.iith.ac.in" },
  { email: "seminar@mae.iith.ac.in", members: "Mechanical & Aerospace Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@mae.iith.ac.in" },
  { email: "seminar@math.iith.ac.in", members: "Mathematics seminar announcements", receives: "All subscribed members", posts: "faculty@math.iith.ac.in" },
  { email: "seminar@msme.iith.ac.in", members: "Materials Science & Metallurgical Engineering seminar announcements", receives: "All subscribed members", posts: "faculty@msme.iith.ac.in" },
  { email: "seminar@phy.iith.ac.in", members: "Physics seminar announcements", receives: "All subscribed members", posts: "faculty@phy.iith.ac.in" },
];

const SECTIONS = [
  { id: "role-based", label: "Role-Based Lists" },
  { id: "interest-based", label: "Interest-Based Lists" },
];

const GroupMailPolicyPage = ({ navigateTo, goBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("role-based");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = useRef({});

  const { mandatory, interest } = useMemo(() => {
    const term = searchTerm.toLowerCase();
    const matches = (item) =>
      item.email.toLowerCase().includes(term) || item.members.toLowerCase().includes(term);
    return {
      mandatory: ROLE_BASED_DATA.filter(matches),
      interest: INTEREST_BASED_DATA.filter(matches),
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

  // Show the scroll-to-top button once the page has been scrolled down
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderTable = (rows, memberColumnLabel) => (
    <div className="border border-[#E4DCD3] rounded-md bg-white -mx-4 px-0 overflow-x-auto md:mx-0 md:overflow-visible">
      <table className="w-full min-w-[720px] text-left border-collapse">
        <thead className="sticky top-[202px] md:top-[238px] z-20 bg-[#F1EAE1] shadow-[0_1px_0_0_#CDC0B3]">
          <tr className="bg-[#F1EAE1] border-b border-[#CDC0B3]">
            <th className="p-3 pl-4 text-xs font-semibold uppercase tracking-wide text-[#6B5F59] whitespace-nowrap w-12 text-center">#</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59] whitespace-nowrap">Mailing List</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">{memberColumnLabel}</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">Who Can Receive</th>
            <th className="p-3 text-xs font-semibold uppercase tracking-wide text-[#6B5F59]">Who Can Post</th>
          </tr>
        </thead>
        <tbody className="text-[13.5px] md:text-[14.5px] text-[#241D1B]">
          {rows.length === 0 ? (
            <tr>
              <td colSpan={5} className="p-8 text-center text-[#6B5F59]">
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
                  <code className="text-[13px] md:text-[13.5px] text-[#6E1423] bg-[#F7EDE9] px-2 py-0.5 rounded">
                    {item.email}
                  </code>
                </td>
                <td className="p-3 align-top max-w-[280px]">{item.members}</td>
                <td className="p-3 align-top text-[#6B5F59] max-w-[220px]">{item.receives}</td>
                <td className="p-3 align-top text-[#6B5F59] max-w-[260px]">{item.posts}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <main className="bg-[#FAF8F5] min-h-screen font-sans relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Back button */}
        <button
          onClick={goBack}
          className="flex items-center gap-2 text-sm font-semibold tracking-wide text-[#F28972] hover:text-[#D2691E] mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> BACK
        </button>

        {/* Masthead */}
        <div className="border-b-[3px] border-[#6E1423] pb-5 md:pb-6 mb-6">
          <p className="text-[12px] md:text-[13px] tracking-wide text-[#6B5F59] mb-2">IIT Hyderabad</p>
          <h1 className="font-serif text-[clamp(18px,5.2vw,40px)] leading-tight font-semibold text-[#241D1B] whitespace-nowrap">
            Institute Group Mailing List Directory
          </h1>
        </div>

        {/* Section nav — sticky/frozen while scrolling, active section highlighted */}
        <nav className="flex gap-4 md:gap-6 overflow-x-auto border-b border-[#E4DCD3] sticky top-[152px] md:top-[188px] bg-[#FAF8F5] z-30 -mx-4 px-4 md:mx-0 md:px-0">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-3 text-[14px] md:text-[15px] font-medium border-b-2 transition-colors rounded-t-sm whitespace-nowrap flex-shrink-0 ${
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
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B5F59]" size={16} />
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
              ? `${mandatory.length + interest.length} of ${ROLE_BASED_DATA.length + INTEREST_BASED_DATA.length} lists match "${searchTerm}"`
              : `Searching across ${ROLE_BASED_DATA.length + INTEREST_BASED_DATA.length} mailing lists`}
          </p>
        </div>

        {/* Role-based section */}
        <section id="role-based" ref={(el) => (sectionRefs.current["role-based"] = el)} className="scroll-mt-[202px] md:scroll-mt-[238px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#241D1B]">
                Role-Based Group Mailing Lists
              </h2>
              <p className="text-[14px] text-[#6B5F59] mt-1">
                Membership is assigned by role or department. No action is needed to join.
              </p>
            </div>
            <span className="text-[13px] text-[#6B5F59] whitespace-nowrap">({ROLE_BASED_DATA.length} lists)</span>
          </div>
          {renderTable(mandatory, "Group Members")}
        </section>

        {/* Interest-based section */}
        <section
          id="interest-based"
          ref={(el) => (sectionRefs.current["interest-based"] = el)}
          className="scroll-mt-[202px] md:scroll-mt-[238px] mt-14 pt-12 border-t border-[#E4DCD3]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-4">
            <div>
              <h2 className="font-serif text-xl font-semibold text-[#241D1B]">
                Interest-Based Group Mailing Lists
              </h2>
              <p className="text-[14px] text-[#6B5F59] mt-1">
                Department seminar announcements. Join the ones relevant to your interests.
              </p>
            </div>
            <span className="text-[13px] text-[#6B5F59] whitespace-nowrap">({INTEREST_BASED_DATA.length} lists)</span>
          </div>

          <div className="bg-[#F6EEE1] border-l-[3px] border-[#B98F3E] text-[#5C4A26] text-[13.5px] px-4 py-3 mb-5 rounded-r-sm">
            If you would like to subscribe to any of the below mailing lists, please raise a ticket through the{" "}
            <a
              href="https://support.comp.iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Support Portal
            </a>{" "}
            by selecting "IITH Mail / Create or Update Group Email" from the category dropdown.
          </div>

          {renderTable(interest, "Members")}

          {/* Announcements subscription settings */}
          <div className="mt-14 pt-10 border-t border-[#E4DCD3]">
            <h2 className="font-serif text-xl font-semibold text-[#241D1B] mb-2">
              Announcements Mailing List – Subscription Settings
            </h2>
            <p className="text-[14.5px] text-[#6B5F59] max-w-[70ch] mb-6">
              The Announcements Mailing List settings have now been updated, and members can manage
              their subscription preferences independently by following the steps below:
            </p>

            <div className="grid md:grid-cols-2 gap-9">
              <div>
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#6B5F59] mb-4">
                  Steps to Change Subscription Settings
                </h3>
                <ol className="space-y-4 list-none m-0 p-0">
                  {[
                    "Log in to your Google account.",
                    <>Visit <a href="https://groups.google.com" target="_blank" rel="noopener noreferrer" className="underline text-[#6E1423]">https://groups.google.com</a>.</>,
                    "Select the Announcements Google Group.",
                    "Click on My membership settings.",
                    "Under Subscription, choose your preferred option (see options at right).",
                    "Click Save changes.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-[14.5px]">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6E1423] text-white text-[12px] font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-[13.5px] text-[#6B5F59] mt-5">
                  The updated subscription preference will take effect immediately.
                </p>
              </div>

              <div className="bg-white border border-[#E4DCD3] rounded-md p-6 h-fit">
                <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#6B5F59] mb-3">
                  Subscription Options
                </h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="font-semibold text-[#6E1423] text-[14px]">Each email</dt>
                    <dd className="text-[13.5px] text-[#6B5F59] mt-0.5">
                      Receive an email for every message posted to the group.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#6E1423] text-[14px]">No email</dt>
                    <dd className="text-[13.5px] text-[#6B5F59] mt-0.5">
                      Do not receive emails; however, messages can still be viewed by visiting the Google Group.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#6E1423] text-[14px]">Digest</dt>
                    <dd className="text-[13.5px] text-[#6B5F59] mt-0.5">
                      Receive one daily email that contains up to 25 full messages combined into a single
                      digest email. Messages are not delivered immediately. Please ensure that you select
                      this option intentionally, as time-sensitive emails may be delayed.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#6E1423] text-[14px]">Abridged</dt>
                    <dd className="text-[13.5px] text-[#6B5F59] mt-0.5">
                      Receive summarized previews of messages (up to 150 summaries). Please ensure that you
                      select this option intentionally, as time-sensitive emails may be delayed.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <h3 className="text-[13px] font-semibold uppercase tracking-wide text-[#6B5F59] mt-9 mb-2">
              Unsubscribing from a Group
            </h3>
            <p className="text-[14.5px] text-[#6B5F59] max-w-[70ch]">
              If you no longer wish to be part of a group, you may select Leave group from the same My
              membership settings page.
            </p>
          </div>
        </section>
      </div>

      {/* Scroll-to-top button, right side */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-8 right-6 md:right-10 z-20 w-11 h-11 rounded-full bg-[#6E1423] text-white shadow-lg flex items-center justify-center hover:bg-[#8C2331] transition-colors"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
};

export default GroupMailPolicyPage;
