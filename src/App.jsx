import React, { useState, useEffect } from 'react';
import Microsoft365 from "./pages/Microsoft365";
import VPNPage from "./pages/VPNPage";
import LDAPPage from "./pages/LDAPPage";
import WifiPage from "./pages/WifiPage";
import CyberSecurityPage from "./pages/CyberSecurityPage";
import TicketSystemPage from "./pages/TicketSystemPage";
import DiscoursePage from "./pages/DiscoursePage";
import LANPage from "./pages/LANPage";
import DataCentre from  "./pages/DataCentre";
import WindowsActivation from  "./pages/WindowsActivation";
import OperatingSystems from "./pages/OperatingSystems";
import ScientificSoftware from "./pages/ScientificSoftware";
import InHouseSoftware from "./pages/InHouseSoftware";
import OfficeSoftware from "./pages/OfficeSoftware";

import { 
  Search, 
  Coffee, 
  BookOpen, 
  Lightbulb, 
  Settings, 
  Send, 
  MessageSquare, 
  ThumbsUp, 
  ChevronRight,
  Menu as MenuIcon,
  User, 
  Zap,
  ArrowLeft,
  X,
  ShieldCheck,
  FileText,
  Cpu,
  Mail,
  HardDrive,
  Globe,
  Wifi,
  Lock,
  Key,
  Server,
  Cloud,
  Terminal,
  Monitor
} from 'lucide-react';

const App = () => {
  // Navigation State
  const [view, setView] = useState({ 
    page: 'Home', 
    mainCat: null, 
    subCat: null, 
    itemId: null 
  });


 



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('translate-x-0 opacity-100');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicMenuOpen, setTopicMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state) {
        setView(event.state);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Unified Navigation Handler
  const navigateTo = (page, mainCat = null, subCat = null, itemId = null) => {
    const newState = { page, mainCat, subCat, itemId };

    setAnimationClass('-translate-x-10 opacity-0');

    setTimeout(() => {
      window.history.pushState(newState, "", "");
      setView(newState);

      setAnimationClass('translate-x-10 opacity-0');
      setTimeout(() => setAnimationClass('translate-x-0 opacity-100'), 50);
    }, 300);

    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Data Structure following the PDF/Word guidelines
  const DATA = {
    community: {
      title: "Community Recipes",
      description: "CLICK HERE TO SHARE YOUR RECIPES",
      subMenus: [
        { label: "New Features", icon: <Zap />, items: [
          { id: 'c-nf-go', title: 'Google for Education',topic: 'computer',  content: 'Exploring New Google AI integration and workflow enhancements.' },
          { id: 'c-nf-gws', title: 'Google Workspace',topic: 'computer',  content: 'Google Workspace Learning Centre.' }
        ]},
        { label: "Tips & Tricks", icon: <Lightbulb />, items: [
          { id: 'c-tt-1', title: 'Trick 1',topic: 'computer',  content: 'How to manage your windows desktop effectively with virtual spaces.' },
          { id: 'c-tt-2', title: 'Trick 2',topic: 'computer',  content: 'Hidden shortcuts in Microsoft Excel for faster data processing.' }
        ]},
        { label: "Helpful Docs", icon: <BookOpen />, items: [
          { id: 'c-hd-1', title: 'Doc 1',topic: 'civil', content: 'Standard operating procedures for institute digital tools.' },
          { id: 'c-hd-2', title: 'Doc 2',topic: 'chemical', content: 'Best practices for collaborative document editing.' }
        ]},
        { label: "Creative Solutions", icon: <Settings />, items: [
          { id: 'c-cs-1', title: 'Solution 1', content: 'Automating feedback loops using Power Automate.' },
          { id: 'c-cs-2', title: 'Solution 2', content: 'Using open-source tools for research visualization.' }
        ]},
        { label: "Out of the Box", icon: <Coffee />, items: [
          { id: 'c-ob-1', title: 'Idea 1', content: 'Gamifying department-level task management.' }
        ]}
      ]
    },
    computerCentre: {
      title: "Computer Centre Menu",
      description: "Official IT Infrastructure & Support Hub",
      subMenus: [
        { label: "Services", icon: <Settings />, items: [
          { id: 'cc-s-lan', title: 'LAN', content: 'Wired connectivity configuration for office and labs.' },
          { id: 'cc-s-wifi', title: 'Wifi', content: 'Secure campus-wide wireless network access details.' },
          { id: 'cc-s-ldap', title: 'LDAP', content: 'Centralized authentication and Single Sign-On management.' },
          { id: 'cc-s-vpn', title: 'VPN', content: 'Instructions for off-campus access to institute journals.' },
          { id: 'cc-s-cyb', title: 'Cyber Security', content: 'Guidelines and best practices to ensure cyber security.' },
          { id: 'cc-s-ms', title: 'Microsoft Office 365', content: 'M365 account provisioning and cloud storage setup.' },
          { id: 'cc-s-win', title: 'Windows Activation', content: 'Institutional license activation service.' },
          { id: 'cc-s-dis', title: 'Discussion Forum', content: "It's an Internal Discussion Forum of IITH."},
          { id: 'cc-s-ps', title: 'Param Seva', content: 'High Performance Computing resources scheduling.' },
          { id: 'cc-s-dc', title: 'IITH Data Centre', content: 'Server colocation and hosting infrastructure.' }
        ]},
        { label: "Softwares", icon: <Terminal />, items: [
          { id: 'cc-sw-os', title: 'Operating System', content: 'Supported OS distributions and installation media.' },
          { id: 'cc-sw-off', title: 'Office Software', content: 'Productivity suites available for staff and students.' },
          { id: 'cc-sw-sci', title: 'Scientific Software', content: 'Specialized analysis and simulation software licenses.' },
          { id: 'cc-sw-inh', title: 'In-house Software', content: 'Portal developed by CC for institute management.' }
        ]},
        { label: "Support", icon: <ShieldCheck />, items: [
          { id: 'cc-sup-main', title: 'CC Helpdesk', content: 'Submit a ticket for request services or report technical issues.' }
        ]},
        { label: "Helpful Docs", icon: <FileText />, items: [
          { id: 'cc-hd-1', title: 'IITH Email Policy', content: ' Institute Email Policy guidelines for creating/maintaining an email account.' },
          { id: 'cc-hd-3', title: 'Group Mail Policy', content: 'Guidelines for sending and managing emails through group mailing lists.' },
          { id: 'cc-hd-2', title: 'Computer Usage Guide', content: 'Best Practices for a Safe, Fast, and Organized Environment.' }
        ]}
      ]
    }
  };

  const TOPICS = [
  "Computer",
  "Civil Eng.",
  "Mechanical",
  "Chemical",
  "Aerospace",
  "AI",
  "Arts",
  "Sports",
  "Literature",
  "Accounts",
  "Electrical",
  "Electronics",
  "Others"
];

  // Helper to find specific item
  const findItem = (id) => {
    const allItems = [
      ...DATA.community.subMenus.flatMap(s => s.items),
      ...DATA.computerCentre.subMenus.flatMap(s => s.items)
    ];
    return allItems.find(item => item.id === id);
  };

  const SteamEffect = () => (
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-1 pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="block w-1.5 h-12 bg-[#D2691E]/30 rounded-full blur-md animate-steam"
          style={{ animationDelay: `${i * 0.4}s` }}
        />
      ))}

      <style>{`
        @keyframes steam {
          0% { transform: translateY(0) scaleX(1); opacity: 0; }
          30% { opacity: 0.6; }
          60% { transform: translateY(-20px) scaleX(1.5); }
          100% { transform: translateY(-50px) scaleX(2); opacity: 0; }
        }
        .animate-steam {
          animation: steam 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  );

  //MOBILE FILTER

  const TopicSection = ({ mobile = false }) => {
    return (
      <div
        className={`
        bg-[#FDFBF7] border border-gray-300 rounded-3xl p-6
        ${mobile ? "w-full" : "w-72 sticky top-32 h-fit"}
      `}
      >
        <h3 className="font-bold text-[#8B5E3C] mb-5 uppercase text-sm">
          Topics
        </h3>

        <div className="flex flex-col gap-3 text-sm">

          <button
            onClick={() => setSelectedTopic(null)}
            className={`text-left ${
              selectedTopic === null
                ? "font-bold text-[#D2691E]"
                : "hover:text-[#D2691E]"
            }`}
          >
            All Topics
          </button>

          {TOPICS.map((topic) => (
            <button
              key={topic}
              onClick={() => {
                setSelectedTopic(topic.toLowerCase());
                setTopicMenuOpen(false);
              }}
              className={`text-left ${
                selectedTopic === topic.toLowerCase()
                  ? "font-bold text-[#D2691E]"
                  : "hover:text-[#D2691E]"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    );
  };


  return (
    <div className="min-h-screen bg-white font-sans text-[#4A3728] flex flex-col overflow-x-hidden">

      {/* HEADER */}
      <header className="pt-12 pb-8 border-b border-gray-600 px-9 w-full bg-white sticky top-0 z-40 text-center">
        <div className="relative cursor-pointer group inline-block" onClick={() => navigateTo('Home')}>
          <SteamEffect />
          <BookOpen className="text-[#8B5E3C] w-14 h-14 md:w-20 md:h-20 transition-transform group-hover:scale-110" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#4A3728] mt-2">IITH Knowledge Cafe</h1>
        <p className="mt-3 italic text-[#A0522D]">"Hot coffee fuels the mind. Fresh knowledge stirs the soul."</p>
      </header>

      {/* CONTENT TRANSITION WRAPPER */}

      <div className={`flex-1 transition-all duration-300 transform ${animationClass} w-full`}>

        {/* HOME VIEW */}
        {view.page === 'Home' && (
          <main className="relative">

            {/* MOBILE TOPIC BUTTON */}
            <button
              onClick={() => setTopicMenuOpen(true)}
              className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#8B5E3C] text-white p-4 rounded-full shadow-xl"
            >
              <MenuIcon size={22} />
            </button>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4">

              {/* MAIN CONTENT */}
              <div className="flex-1">


                {/* COMPUTER CENTRE SECTION */}

                <section className="p-4 lg:ml-6 md:p-10 bg-[#FFFAF0] border border-gray-400 rounded-3xl shadow-sm mb-10 mt-10">

                  <div className="mb-12 border-b-4 border-[#8B5E3C] pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                    <div>
                      <h2 className="text-lg sm:text-2xl font-bold uppercase">
                        {DATA.computerCentre.title}
                      </h2>

                      <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase tracking-widest">
                        {DATA.computerCentre.description}
                      </p>
                    </div>

                    <a
                      href="https://support.comp.iith.ac.in/index.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#8B5E3C] text-white px-5 py-1.5 text-sm rounded-lg font-semibold hover:bg-[#D2691E] transition w-full sm:w-auto text-center"
                    >
                      Raise Ticket
                    </a>

                  </div>

                  {/* COMPUTER GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {DATA.computerCentre.subMenus
                      .filter(sub =>
                        sub.items?.some(
                          item => !selectedTopic || item.topic === selectedTopic
                        )
                      )
                      .map((sub, idx) => (

                        <div
                          key={idx}
                          onClick={() => navigateTo('SubMenu', 'computerCentre', sub.label)}
                          className="cursor-pointer group bg-[#FDFBF7] p-8 rounded-3xl border border-gray-300 hover:shadow-2xl transition-all hover:-translate-y-2"
                        >

                          <div className="w-14 h-10 rounded-2xl bg-white flex items-center justify-center mb-6 text-[#8B5E3C] shadow-sm group-hover:bg-[#8B5E3C] group-hover:text-white transition-all">
                            {React.cloneElement(sub.icon, { size: 24 })}
                          </div>

                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#D2691E]">
                            {sub.label}
                          </h3>

                          <p className="text-[10px] font-black uppercase text-[#8B5E3C] mt-4 flex items-center gap-1">
                            Open {sub.label} <ChevronRight size={12}/>
                          </p>

                        </div>

                      ))}

                  </div>

                </section>





                {/* COMMUNITY SECTION */}
                <section className="p-10 lg:ml-6 md:p-10 bg-white border border-gray-400 rounded-3xl shadow-sm mb-10 mt-8">

                  <div className="mb-12 border-b-4 border-[#8B5E3C] pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    {/* LEFT SIDE */}
                    <div
                      onClick={() => navigateTo('ShareRecipe')}
                      className="cursor-pointer group"
                    >
                      <h2 className="text-2xl font-bold uppercase tracking-widest text-[#8B5E3C] group-hover:text-[#D2691E] transition-colors">
                        {DATA.community.title}
                      </h2>

                      <p className="text-xs font-bold opacity-50 mt-1 group-hover:text-[#D2691E] transition-colors">
                        {DATA.community.description}
                      </p>
                    </div>

                    {/* RIGHT BUTTON */}
                    <button
                      onClick={() => navigateTo('ShareRecipe')}
                      className="bg-[#8B5E3C] text-white px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-lg font-semibold hover:bg-[#D2691E] transition whitespace-nowrap"
                    >
                      Share Recipe
                    </button>

                  </div>








                  {/* COMMUNITY GRID */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                    {DATA.community.subMenus
                      .filter(sub =>
                        sub.items?.some(
                          item => !selectedTopic || item.topic === selectedTopic
                        )
                      )
                      .map((sub, idx) => (

                        <button
                          key={idx}
                          onClick={() => navigateTo('SubMenu', 'community', sub.label)}
                          className="flex flex-col items-center p-8 rounded-3xl bg-[#F5EFE6] hover:bg-white hover:shadow-2xl transition-all border border-transparent hover:border-orange-100 group"
                        >

                          <div className="w-16 h-16 border-2 border-[#8B5E3C] rounded-2xl flex items-center justify-center text-[#8B5E3C] mb-4 group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors">
                            {React.cloneElement(sub.icon, { size: 28 })}
                          </div>

                          <span className="text-[12px] font-semibold text-center uppercase">
                            {sub.label}
                          </span>

                        </button>

                      ))}

                  </div>

                </section>




              </div>


              {/* TOPIC SIDEBAR */}
              <div className="hidden lg:block lg:w-72 pt-10 flex-shrink-0">

                <div className="sticky top-20 bg-[#FDFBF7] border border-gray-400 rounded-3xl flex flex-col h-fit">

                  {/* FIXED HEADER */}
                  <div className="p-6 border-b">
                    <h3 className="font-bold text-[#8B5E3C] uppercase text-sm">
                      Topics
                    </h3>
                  </div>

                  {/* SCROLLABLE TOPICS */}
                  <div className="p-6 flex flex-col gap-3 text-sm">

                    <button
                      onClick={() => setSelectedTopic(null)}
                      className={selectedTopic === null ? "font-bold text-[#D2691E]" : ""}
                    >
                      All Topics
                    </button>

                    {TOPICS.map(topic => (
                      <button
                        key={topic}
                        onClick={() => navigateTo('TopicPage', null, topic.toLowerCase())}
                        className={
                          selectedTopic === topic.toLowerCase()
                            ? "font-bold text-[#D2691E]"
                            : "hover:text-[#D2691E]"
                        }
                      >
                        {topic}
                      </button>
                    ))}

                  </div>

                </div>

              </div>
            </div>
          

          </main>
        )}

        
      
        {/* SUBMENU LIST VIEW */}
        {view.page === 'SubMenu' && (
          <main className="p-10 md:p-24 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={() => navigateTo('Home')} 
                className="flex items-center gap-3 text-sm font-bold text-green-600 hover:text-[#D2691E] mb-12 transition-colors"
              >
                <ArrowLeft size={18} /> BACK TO CAFE
              </button>
              
              <div className="mb-16">
                <p className="text-xs font-bold uppercase text-[#D2691E] tracking-widest mb-2">{DATA[view.mainCat].title}</p>
                <h2 className="text-5xl font-serif font-bold text-[#4A3728]">{view.subCat}</h2>
                <div className="h-2 w-32 bg-[#D2691E] rounded-full mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DATA[view.mainCat].subMenus.find(s => s.label === view.subCat).items.map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => {
                      if (item.id === "cc-s-ps") {
                        window.open("https://paramseva.comp.iith.ac.in/", "_blank");

                      } else if (item.id === "c-nf-go") {
                        window.open("https://services.google.com/fh/files/misc/gfe_bett26_launch_guide.pdf", "_blank");

                      } else if (item.id === "c-nf-gws") {
                        window.open("https://support.google.com/a/users?sjid=8024927221209100312-NC#topic=11499463", "_blank");
                         
                      } else if (item.id === "cc-hd-2") {
                         window.open("https://docs.google.com/presentation/d/1M8cdcg0lMSotkNtyaTHKwcNcHJLi53hDL85LS7-KCA4/edit?usp=sharing", "_blank");

                      } else if (item.id === "cc-hd-3") {
                         window.open("https://comp.iith.ac.in/group-mail-policy.html", "_blank");

                      } else if (item.id === "cc-hd-1") {
                         window.open("https://docs.google.com/document/d/e/2PACX-1vQcpzfkK3PlQozgik6QSoM-pEYd19HqsurqOQqb_2mDJdE5nyXNVvRWFzSdI2nAnI03dWb219Pmugw9/pub", "_blank");
                         
                      



                      } else {
                        navigateTo('ItemDetail', view.mainCat, view.subCat, item.id);
                      }
              
                    }}
                    className="cursor-pointer bg-white p-10 rounded-[2.5rem] border border-gray-300 hover:shadow-2xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-orange-50 text-[#8B5E3C] flex items-center justify-center rounded-xl mb-6">
                      <Coffee size={20} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D2691E]">{item.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.content}</p>
                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-2 text-[10px] font-black text-[#8B5E3C] uppercase">
                      Open Full Page <ChevronRight size={14} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}


        {/*  HOW TO SHARE RECIPE */}

        {view.page === 'ShareRecipe' && (
          <main className="p-10 md:p-24 bg-[#FFFAF0] min-h-screen">
            <div className="max-w-4xl mx-auto">

              <button 
                onClick={() => navigateTo('Home')} 
                className="flex items-center gap-3 text-sm font-bold text-green-600 hover:text-[#D2691E] mb-12 transition-colors"
              >
                <ArrowLeft size={18} /> BACK TO CAFE
              </button>

              <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-[#8B5E3C]/30">

                <h1 className="text-4xl font-serif font-bold text-[#4A3728] mb-8">
                  How to Share Your Recipe
                </h1>

                <div className="space-y-6 text-gray-600 leading-relaxed">

                  <p>
                    We welcome innovative technical tips, creative workflows, and 
                    knowledge contributions from the IITH community.
                  </p>

                  <h2 class="text-2xl font-bold mb-4">Submission Guidelines</h2>

                  <ul class="list-decimal pl-6 space-y-8 text-gray-600 leading-relaxed">

                  <li>
                  Create a folder in Google Drive and name it <strong>“Knowledge Base”</strong> (preferred) or another appropriate name.
                  </li>

                  <li>
                  Upload your content or create it directly inside the folder. 
                  <strong>Google Docs</strong> and <strong>Google Slides</strong> are recommended as they are easy to edit and review collaboratively.
                  </li>

                  <li>
                  Include your <strong>email ID</strong> within the recipe content so that reviewers or readers can contact you if further clarification is needed.
                  </li>

                  <li>
                  Create a shareable link by sharing the document. Set the permission to 
                  <strong> Viewer – Anyone within the IITH domain</strong>.
                  </li>

                  <li>
                  Send the share link to the Knowledge Café team. While submitting, clearly specify the  
                  <strong> category</strong> and <strong>topic</strong> under which the recipe should be published.
                  </li>

                  <li>
                  Provide a copy or editing access to the designated reviewer responsible for the specific topic.
                  </li>

                  <li>
                  Once the reviewer approves your recipe, the Knowledge Café team will publish and share it with the wider <strong>IITH community</strong>.
                  </li>

                  </ul>

                  
                  <p>Please email your recipe in the specified format to the following address:</p>

                  <a 
                    href="mailto:knowledge.cafe@iith.ac.in?subject=Recipe Submission"
                    className="inline-block mt-2 text-white bg-[#8B5E3C] px-6 py-3 rounded-xl hover:bg-[#D2691E] transition-colors"
                  >
                    knowledge.cafe@iith.ac.in
                  </a>

                </div>
              </div>
            </div>
          </main>
        )}



        {/* ITEM DETAIL VIEW (SEPARATE PAGE FOR EACH CARD) */}
        {view.page === 'ItemDetail' && view.itemId === "cc-s-ms" && (
          <Microsoft365 navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-vpn" && (
          <VPNPage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-ldap" && (
          <LDAPPage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-wifi" && (
          <WifiPage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-lan" && (
          <LANPage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-off" && (
          <OfficeSoftware navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-cyb" && (
          <CyberSecurityPage navigateTo={navigateTo} />
        )}


        {view.page === 'ItemDetail' && view.itemId === "cc-sup-main" && (
          <TicketSystemPage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-dis" && (
          <DiscoursePage navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-win" && (
          <WindowsActivation navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-os" && (
          <OperatingSystems navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-sci" && (
          <ScientificSoftware navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-inh" && (
          <InHouseSoftware navigateTo={navigateTo} />
        )}




        {view.page === 'ItemDetail' && view.itemId === "cc-s-dc" && (
          <DataCentre navigateTo={navigateTo} />
        )}

        {view.page === 'ItemDetail' && view.itemId !== "cc-s-ms" && view.itemId !== "cc-s-vpn" && view.itemId !== "cc-s-ldap" 
          && view.itemId !== "cc-s-wifi" && view.itemId !== "cc-s-cyb" && view.itemId !== "cc-sup-main" && view.itemId !== "cc-s-dis" 
          && view.itemId !== "c-nf-go" && view.itemId !== "c-nf-gws" && view.itemId !== "cc-sw-off" && view.itemId !== "cc-s-ps" && view.itemId !== "cc-hd-2" && view.itemId !== "cc-hd-3" 
          && view.itemId !== "cc-s-lan" && view.itemId !== "cc-s-win" &&  view.itemId !== "cc-sw-os" && view.itemId !== "cc-s-dc" 
          && view.itemId !== "cc-sw-sci" &&  view.itemId !== "cc-sw-inh" && (

          <main className="p-10 md:p-24 bg-[#FDFBF7] min-h-screen">
            <div className="max-w-4xl mx-auto">
              <button onClick={() => navigateTo('SubMenu', view.mainCat, view.subCat)} className="flex items-center gap-3 text-sm font-bold text-green-600 hover:text-[#D2691E] mb-12">
                <ArrowLeft size={18} /> BACK TO {view.subCat.toUpperCase()}
              </button>
              
              <article className="bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border border-gray-300">
                <div className="flex flex-col items-center text-center mb-16">
                  <div className="p-6 bg-orange-50 text-[#D2691E] rounded-3xl mb-8">
                    <BookOpen size={48} />
                  </div>
                  <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#4A3728] mb-6">{findItem(view.itemId)?.title}</h1>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    <span>{view.subCat}</span>
                    <span className="w-1.5 h-1.5 bg-[#D2691E] rounded-full"></span>
                    <span>Knowledge Recipe</span>
                  </div>
                </div>

                <div className="prose prose-orange max-w-none text-gray-600">
                  <p className="text-xl leading-relaxed mb-12 italic border-l-4 border-orange-200 pl-8">
                    {findItem(view.itemId)?.content}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-[#4A3728] mb-6">Recipe Overview</h3>
                  <p className="mb-8">
                    This detailed guide provides specific instructions and best practices related to {findItem(view.itemId)?.title}. 
                    In alignment with the IITH Computer Centre guidelines, this resource has been reviewed and approved 
                    by the designated committee for institute-wide publication.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-bold mb-2 flex items-center gap-2"><ShieldCheck size={18} className="text-green-600"/> Verified Technicals</h4>
                      <p className="text-sm opacity-70">Technically accurate and appropriate for institutional use-cases.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-bold mb-2 flex items-center gap-2"><Lock size={18} className="text-blue-600"/> Security Compliant</h4>
                      <p className="text-sm opacity-70">No security, privacy, or policy violations found in this documentation.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20 pt-12 border-t border-gray-100 flex flex-col items-center gap-8">
                  <div className="flex gap-10">
                    <button className="flex items-center gap-2 text-sm font-bold hover:text-[#D2691E] transition-colors"><ThumbsUp size={20}/> 12 Likes</button>
                    <button className="flex items-center gap-2 text-sm font-bold hover:text-[#D2691E] transition-colors"><MessageSquare size={20}/> 4 Feedback</button>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-400 mb-2 uppercase tracking-widest">Contributor Contact</p>
                    <p className="font-bold text-[#4A3728]">cc_knowledge@iith.ac.in</p>
                  </div>
                </div>
              </article>
            </div>
          </main>
        )}
      </div>

      {/*FILTERED CARD IN SEPARATE PAGE*/}

      {view.page === 'TopicPage' && (
        <main className="p-10 md:p-24 min-h-screen">

          <button 
            onClick={() => navigateTo('Home')}
            className="flex items-center gap-3 text-sm font-bold text-green-600 mb-10"
          >
            <ArrowLeft size={18}/> BACK TO HOME
          </button>

          <h2 className="text-4xl font-bold mb-10 capitalize">
            {view.subCat} Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[...DATA.community.subMenus.flatMap(s=>s.items),
              ...DATA.computerCentre.subMenus.flatMap(s=>s.items)
            ]
            .filter(item => item.topic === view.subCat)
            .map(item => (

              <div
                key={item.id}
                className="bg-white p-8 rounded-3xl border shadow hover:shadow-xl cursor-pointer"
                onClick={() => navigateTo('ItemDetail', null, null, item.id)}
              >

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-500 text-sm">
                  {item.content}
                </p>

              </div>

            ))}

          </div>

        </main>
      )}

      {/* MOBILE TOPIC DRAWER */}
        {topicMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">

            <div className="bg-white w-72 h-full p-6 shadow-xl overflow-y-auto scrollbar-thin scrollbar-thumb-[#8B5E3C]/60 scrollbar-track-transparent">


              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-lg">Topics</h3>

                <button onClick={() => setTopicMenuOpen(false)}>
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-3">

                <button
                  onClick={() => {
                    setSelectedTopic(null)
                    setTopicMenuOpen(false)
                  }}
                >
                  All Topics
                </button>

                {TOPICS.map(topic => (
                  <button
                    key={topic}
                    onClick={() => {
                      setSelectedTopic(topic.toLowerCase())
                      setTopicMenuOpen(false)
                    }}
                  >
                    {topic}
                  </button>
                ))}

              </div>

            </div>

          </div>
        )}



      {/* FOOTER */}
      <footer className="bg-[#4A3728] text-white py-16 px-10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-widest flex items-center justify-center md:justify-start gap-3">
              <BookOpen size={32} className="text-[#D2691E]" /> IITH Knowledge Cafe
            </span>
            <p className="text-xs opacity-50 mt-2">Indian Institute of Technology Hyderabad © 2026</p>
          </div>
          <div className="flex gap-8 opacity-40">
            {/*<ThumbsUp className="cursor-pointer hover:opacity-100" />*/}
            <a 
              href="mailto:cc_knowledge@iith.ac.in"
              className="cursor-pointer hover:opacity-100"
            >
              <Send />
            </a>
            {/*<MessageSquare className="cursor-pointer hover:opacity-100" />*/}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;