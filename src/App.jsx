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
import AdobeSuite from './pages/AdobeSuite';
import GoogleWorkspace from './pages/GoogleWorkspace';
import ISP from './pages/information_security_policy';
import AUP from './pages/acceptable_usage_policy';


import { 
  Search, 
  Coffee,
  Layers,
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

// Utility function to check if a URL is external to iith.ac.in
const isExternalLink = (url) => {
  if (url.startsWith('mailto:')) return false;
  try {
    const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
    return !urlObj.hostname.endsWith('iith.ac.in') && !urlObj.hostname.endsWith('localhost');
  } catch {
    return false;
  }
};

// Component for external links with alert
const ExternalLink = ({ href, children, ...props }) => {
  const handleClick = (e) => {
    if (isExternalLink(href)) {
      const confirmed = window.confirm(`You are about to leave iith.ac.in and visit ${href}. Do you want to continue?`);
      if (!confirmed) {
        e.preventDefault();
      }
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

const App = () => {
  // Navigation State
  const [view, setView] = useState({ 
    page: 'Home', 
    mainCat: null, 
    subCat: null, 
    itemId: null 
  });

  // Data Structure following the PDF/Word guidelines
  const DATA = {
    community: {
      title: "Community Recipes",
      description: "EXPLORE AND CONTRIBUTE RECIPES TO SHARE KNOWLEDGE AND ENHANCE SKILLS.",
      subMenus: [
        { label: "New Features", icon: <Zap />, items: [
          { id: 'c-nf-go', title: 'New Features 1', topic: 'computer',  content: 'Exploring New Google AI integration and workflow enhancements.', },
          { id: 'c-nf-gws', title: 'New Features 2', topic: 'computer',  content: 'Google Workspace Learning Centre.',}
        ]},
        { label: "Tips & Tricks", icon: <Lightbulb />, items: [
          { id: 'c-tt-1', title: 'Trick 1', topic: 'computer',  content: 'How to manage your windows desktop effectively with virtual spaces.' },
          { id: 'c-tt-2', title: 'Trick 2', topic: 'computer',  content: 'Hidden shortcuts in Microsoft Excel for faster data processing.' }
        ]},
        { label: "Helpful Docs", icon: <BookOpen />, items: [
          { id: 'cc-hd-2', title: 'Computer Usage Guide', content: 'Best Practices for a Safe, Fast, and Organized Environment.', link : 'https://docs.google.com/presentation/d/1M8cdcg0lMSotkNtyaTHKwcNcHJLi53hDL85LS7-KCA4/edit?usp=sharing' },
          { id: 'c-hd-1', title: 'Doc 1', topic: 'civil eng.', content: 'Standard operating procedures for institute digital tools.' },
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
      title: "IITH ICT Menu",
      description: "Central Hub for Tools, Services, Support, Guidelines & Policies",
      subMenus: [
        { label: "Tools & Services", icon: <Settings />, items: [
          { id: 'cc-s-lan', title: 'LAN', label: 'Computer Centre : Service', topic: 'IT', content: 'Wired connectivity configuration for office and labs.', keywords: 'wired network wall jack dhcp ip address cable mac' },
          { id: 'cc-s-wifi', title: 'WiFi', label: 'Computer Centre : Service', topic: 'IT', content: 'Secure campus-wide wireless network access details.', keywords: 'wireless eduroam guest internet router password reset' },
          { id: 'cc-s-ldap', title: 'LDAP', label: 'Computer Centre : Service', topic: 'IT', content: 'Centralized authentication and Single Sign-On management.', keywords: 'single sign on sso credentials password reset aims disha authentication' },
          { id: 'cc-s-vpn', title: 'VPN', label: 'Computer Centre : Tool', topic: 'IT', content: 'Instructions for off-campus access to institute journals.', keywords: 'wireguard remote access proxy gpu clusters library' },
          { id: 'cc-s-ms', title: 'Microsoft Office 365', label: 'Computer Centre : Tool', topic: 'IT', content: 'M365 account provisioning and cloud/desktop tools setup.', keywords: 'word excel powerpoint onedrive teams onenote sharepoint forms outlook publisher' },
          { id: 'cc-s-win', title: 'Windows Activation', label: 'Computer Centre : Service', topic: 'IT', content: 'Institutional license activation service.', keywords: 'windows 10 windows 11 pro iso bootable usb rufus os operating system' },
          { id: 'cc-erp-disha', title: 'DISHA Portal', label: 'Computer Centre : Portal', topic: 'IT', content: 'Institute official ERP portal to manage leave, APAR, budget, and more.', link: 'https://disha.iith.ac.in/', keywords: 'erp leave apar budget' },
          { id: 'cc-s-dis', title: 'Discourse Forum', label: 'Computer Centre : Portal', topic: 'IT', content: "It's an Internal Discussion Forum of IITH.", keywords: 'discussions announcements carpooling marketplace lost found tech tips' },
          { id: 'cc-s-int', title: 'Intranet', label: 'Computer Centre : Portal', topic: 'IT', content: "A centralized hub to access institute forms, circulars, and the directory.", link: 'https://intranet.iith.ac.in/', keywords: 'forms circulars directory internal' },
          { id: 'cc-s-aim', title: 'AIMS', label: 'Computer Centre : Portal', topic: 'IT', content: "Academic Institute Management System: A portal used to manage academic activities", link: 'https://aims.iith.ac.in/aims/', keywords: 'academic management students grades courses' },
          { id: 'cc-s-fa', title: 'F&A ERP', label: 'Finance & Accounts : Portal', topic: 'Accounts', content: "A portal to manage claims, advances, and salary details.", link: 'https://package.accounts.iith.ac.in/F&A/public/login', keywords: 'finance accounts claims advances salary' },
          { id: 'cc-s-ps', title: 'Param Seva', label: 'Computer Centre : Service', topic: 'IT', content: 'High Performance Computing resources scheduling.', link: 'https://paramseva.comp.iith.ac.in/', keywords: 'hpc supercomputer computing cluster' },
          { id: 'cc-s-gpu', title: 'GPU Cluster - NVIDIA A100', label: 'Computer Centre : Service', topic: 'IT', content: 'A state-of-the-art NVIDIA A100 GPU computing facility', link: 'https://gpucluster.comp.iith.ac.in/', keywords: 'NVIDIA A100 GPU computing facility cluster' },
          { id: 'cc-s-dc', title: 'IITH Data Centre', label: 'Computer Centre : Service', topic: 'IT', content: 'Server colocation and hosting infrastructure.', keywords: 'hpc racks ups dg sets cooling servers hosting cloud' },
          { id: 'cc-sw-os', title: 'Operating System', label: 'Computer Centre : Tool', topic: 'IT', content: 'Supported OS distributions and installation media.', keywords: 'windows 11 pro ubuntu linux download installation' },
          { id: 'cc-sw-off', title: 'Office Software', label: 'Computer Centre : Tool', topic: 'IT', content: 'Productivity suites available for staff and students.', keywords: 'microsoft office 365 word excel powerpoint' },
          
          { id: 'cc-sw-gem', title: 'Gemini & NotebookLM', label: 'Computer Centre : Tool', topic: 'IT', content: 'Access Gemini AI model and NotebookLM tool. Sign in with your institute email.', link: 'https://gemini.google.com/app', keywords: 'ai artificial intelligence llm google notebook' },
          { id: 'cc-sw-gws', title: 'Google Workspace', label: 'Computer Centre : Tool', topic: 'IT', content: 'Access Google Workspace apps like Gmail, Drive, Meet and more.', keywords: 'gmail drive docs sheets slides meet classroom calendar forms chat keep' },
          { id: 'cc-sw-cop', title: 'GitHub Copilot', label: 'Computer Centre : Tool', topic: 'IT', content: 'Access GitHub Copilot AI coding assistant. Sign in with your institute email ID', link: 'https://github.com/features/copilot', keywords: 'ai coding assistant programming code' },
          { id: 'cc-sw-adb', title: 'Adobe Suite', label: 'Computer Centre : Tool', topic: 'IT', content: 'Access Adobe Creative Cloud/Desktop apps for design, editing, and multimedia work.', keywords: 'photoshop illustrator indesign premiere pro after effects express acrobat lightroom audition animate dreamweaver fresco dimension substance xd media encoder' },
          // { id: 'cc-s-iith-dashboard', title: 'IITH Dashboard-Android App', label: 'Lambda : Tool', topic: 'IT', content: 'Utility Android app for IITH Community with cab sharing, lost and found, marketplace, and bus services.', keywords: 'student app cab sharing lost found marketplace bus campus utility', link: 'https://play.google.com/store/apps/details?id=dev.iith.dashboard', image: '/mnt/data/image(20).png' },

          { id: 'cc-sw-sci', title: 'Scientific Software', label: 'Computer Centre : Tool', topic: 'IT', content: 'Specialized analysis and simulation software licenses.', keywords: 'ansys thermo-calc crystalmaker matlab mathematica camtasia origin labview' },
          { id: 'cc-sw-inh', title: 'In-house Software', label: 'Computer Centre : Tool', topic: 'IT', content: 'An internally developed portals to support academic activities.', keywords: 'timetabler latex iith logo template autograder' },
          { id: 'lib-similarity', title: 'Similarity Check / Plagiarism', label: 'Library : Tool', topic: 'IT', content: 'Tools to check document similarity and plagiarism detection.', link: 'https://www.turnitin.com/', keywords: 'turnitin similarity plagiarism' },
          { id: 'lib-grammarly', title: 'Grammarly', label: 'Library : Tool', topic:  ['IT', 'AI'], content: 'AI-powered writing assistant for grammar checking and writing improvement.', link: 'https://app.grammarly.com/', keywords: 'grammar spelling writing' },
          
          { id: 'lib-library-catalogue', title: 'Library Catalogue', label: 'Library : Portal', topic: ['Library'], content: 'Search and browse IITH KRC complete book collection online.', link: 'https://catalogue.krc.iith.ac.in/' },
          { id: 'lib-library-opac', title: 'Library OPAC', label: 'Library : Portal', topic: ['Library'], content: 'Online public catalogue to discover library resources.', link: 'https://opac.krc.iith.ac.in/' },
          { id: 'lib-library-website', title: 'Library Website', label: 'Library : Portal', topic: ['Library'], content: 'Official KRC homepage with all library services.', link: 'https://library.iith.ac.in/' },
          { id: 'lib-off-campus-resource-access', title: 'Off Campus Resource Access', label: 'Library : E-Resources', topic: ['Library', 'Access'], content: 'Remotely access e-resources via IITH KRC identity portal.', link: 'https://identity.iith.ac.in/' },
          { id: 'lib-iith-institutional-repository', title: 'RAIITH Institutional Repository', label: 'Library : Portal', topic: ['Research'], content: 'Open-access repository for research outputs.', link: 'https://raiith.krc.iith.ac.in/home?l_page=1' },
          { id: 'lib-krc-facilities-room-booking', title: 'KRC Facilities - Room Booking', label: 'Library : Service', topic: ['Facility'], content: 'Book discussion rooms and seminar halls online.', link: 'https://rb.krc.iith.ac.in/' },
          { id: 'lib-irins-faculty-profile', title: 'IRINS Faculty Profile', label: 'Library : Portal', topic: ['Research', 'Faculty'], content: 'IITH faculty research profiles and publication records.', link: 'https://iith.irins.org/' },
          { id: 'lib-article-request-form', title: 'Article Request Form', label: 'Library : Service', topic: ['Research'], content: 'Request journal articles and book chapters.', link: 'https://docs.google.com/forms/d/e/1FAIpQLSf49DhRqeM-hFobMhVf11f5czPHGlIZEjVHk18M0cn_n205pQ/viewform?' },
          { id: 'lib-virtual-exhibition-books-ebooks', title: 'Virtual Exhibition - Books/eBooks', label: 'Library : Portal', topic: ['Books'], content: 'Browse curated digital book exhibitions online.', link: 'https://opac.krc.iith.ac.in/exhibition/' },
          { id: 'lib-book-suggestion-procurement', title: 'Book Suggestion/Procurement', label: 'Library : Service', topic: ['Books'], content: 'Recommend books for library purchase or acquisition.', link: 'https://library.iith.ac.in/suggestion-procurement/' },
          { id: 'lib-overleaf', title: 'Overleaf', label: 'Library : Tool', topic: ['IT', 'Writing'], content: 'Online LaTeX editor for collaborative academic writing.', link: 'https://www.overleaf.com/' },
          { id: 'lib-subscribed-e-resources-on-campus', title: 'Subscribed e-resources (On-Campus)', label: 'Library : E-Resources', topic: ['Research'], content: 'Access subscribed electronic journals and databases on-campus.', link: 'https://catalogue.krc.iith.ac.in/pages.pl?p=er' },
          { id: 'lib-krc-events-workshops', title: 'KRC Events and Workshops', label: 'Library : Portal', topic: ['Events'], content: 'Library-organised events, workshops, and training programmes.', link: 'https://library.iith.ac.in/events/' },
          { id: 'lib-library-membership', title: 'Library Membership Form', label: 'Library : Service', topic: ['Access'], content: 'Register for KRC library membership.', link: 'https://library.iith.ac.in/membership/' },
          { id: 'lib-document-delivery-service', title: 'Document Delivery Service', label: 'Library : Service', topic: ['Access'], content: 'Request documents not held in library collection.', link: 'https://library.iith.ac.in/document-delivery/' },
          { id: 'lib-iith-faculty-publications-books', title: 'IITH Faculty Publications - Books', label: 'Library : Portal', topic: ['Research', 'Books'], content: 'Browse books authored by IITH faculty members.', link: 'https://catalogue.krc.iith.ac.in/cgi-bin/koha/opac-search.pl?advsearch=1&limit=mc-itype%2Cphr%3AFB&sort_by=relevance&do=Search' },
          { id: 'lib-resource-discovery-service', title: 'Resource Discovery Service', label: 'Library : E-Resources', topic: ['Research'], content: 'Search across all subscribed and open-access resources instantly.', link: 'https://iith.summon.serialssolutions.com/#!/' }

          // { id: 'lib-reference', title: 'Reference Managers', label: 'Library : Tool', topic: 'IT', content: 'Tools for organizing and managing research references and bibliographies.', link: 'https://library.iith.ac.in/reference-managers/' },
          // { id: 'lib-scientific', title: 'Library Scientific Tools', label: 'Library : Tool', topic: 'IT', content: 'Specialized tools used for scientific research and analysis.', link: 'https://identity.iith.ac.in/' },
          // { id: 'lib-citation', title: 'Citation Styles', label: 'Library : Tool', topic: 'IT', content: 'Guidelines and formats used for citing research papers and publications.', link: 'https://library.iith.ac.in/citation/' },
          // { id: 'lib-subscribed', title: 'Subscribed E-Resources', label: 'Library : E-Resources', topic:  ['E-Resources'], content: 'Access subscribed electronic journals, databases, and digital resources.', link: 'https://catalogue.krc.iith.ac.in/pages.pl?p=er'},
          // { id: 'lib-offcampus', title: 'Off-Campus Access to E-Resources', label: 'Library : E-Resources', topic: ['E-Resources'], content: 'Access library electronic resources from outside campus network.', link: 'https://library.iith.ac.in/' },
          // { id: 'lib-openaccess', title: 'Open Access E-Resources', label: 'Library : E-Resources', topic: ['E-Resources'], content: 'Freely accessible scholarly articles, journals, and publications.', link: 'https://docs.google.com/document/d/e/2PACX-1vQvETh6wHRz6_QVCOhHSe75Exh45Ta_unKKeVY9QOvbmP53fakWFj0dDyPiCvNfr_8f8fTFNjKitcZ6/pub' },
          // { id: 'lib-raiith', title: 'RAIITH (Institutional Repository)', label: 'Library : E-Resources', topic: ['E-Resources'], content: 'Digital repository containing research publications of IITH.', link: 'https://raiith.krc.iith.ac.in/home?tl.page=1' },
          // { id: 'lib-pragyaan', title: 'Pragyaan', label: 'Library : E-Resources', topic: ['E-Resources'], content: 'Library portal providing access to research and academic resources.', link: 'https://pragyaan.library.iith.ac.in/cgi-bin/koha/opac-search.pl?idx=&q=Entrepreneurial+Management&weight_search=1'}
        ]},
        { label: "Support", icon: <ShieldCheck />, items: [
          { id: 'cc-sup-main', title: 'Computer Centre Helpdesk', label: 'Computer Centre : Helpdesk', content: 'Submit a ticket for request services or report technical issues.', keywords: 'ticket system support portal help' },
          { id: 'fa-sup-main', title: 'Finance & Accounts Helpdesk', label: 'Finance & Accounts: Helpdesk', content: 'For queries and support, email: office.accounts@iith.ac.in', link: 'mailto:office.accounts@iith.ac.in?', keywords: 'finance accounts email help' },
          { id: 'lib-sup-main', title: 'Library Helpdesk', label: 'Library : Helpdesk', content: 'For queries and support, email: office.library@iith.ac.in', link: 'mailto:office.library@iith.ac.in?', keywords: 'library email help' }
        ]},
        { label: "Policies & Guidelines", icon: <FileText />, items: [
          { id: 'c-nf-go', title: 'Google for Education', label:'Google : Guidelines', topic: ['IT', 'AI'],  content: 'Exploring New Google AI integration and workflow enhancements.', link: 'https://services.google.com/fh/files/misc/gfe_bett26_launch_guide.pdf', keywords: 'google education ai' },
          { id: 'c-nf-gws', title: 'Google Workspace', label: 'Google : Guidelines', topic: ['IT', 'AI'],  content: 'Google Workspace Learning Centre.', link: 'https://support.google.com/a/users?sjid=8024927221209100312-NC#topic=11499463', keywords: 'google workspace learning center' },
          { id: 'c-nf-stu', title: 'Google Workspace Studio', label: 'Google : Guidelines', topic: ['IT', 'AI'], content: 'Automate everyday work, from simple tasks to complex processes.', link: 'https://workspace.google.com/studio/?visit_id=639116712956745040-2031082170&p=workflow_access&rd=1', keywords: 'google ai automate workflow space studio workflow video creation' },
          { id: 'cc-hd-1', title: 'IITH Email Policy', label: 'Computer Centre : Policy', topic: 'IT', content: ' Institute Email Policy guidelines for creating/maintaining an email account.', link: 'https://docs.google.com/document/d/e/2PACX-1vQcpzfkK3PlQozgik6QSoM-pEYd19HqsurqOQqb_2mDJdE5nyXNVvRWFzSdI2nAnI03dWb219Pmugw9/pub', keywords: 'email policy account' },
          { id: 'cc-hd-3', title: 'Group Mail Policy', label: 'Computer Centre : Policy', topic: 'IT', content: 'Guidelines for sending and managing emails through group mailing lists.', link: 'https://comp.iith.ac.in/group-mail-policy.html', keywords: 'group mail email policy' },
          { id: 'cc-hd-2', title: 'Computer Usage Guide', label: 'Computer Centre : Guidelines',  topic: 'IT', content: 'Best Practices for a Safe, Fast, and Organized Environment.', link : 'https://docs.google.com/presentation/d/1M8cdcg0lMSotkNtyaTHKwcNcHJLi53hDL85LS7-KCA4/edit?usp=sharing', keywords: 'computer usage safety speed organization' },

          { id: 'cc-p-AUP', title: 'Acceptable Usage Policy', label: 'Computer Centre : Policy', topic: 'IT', content: 'Guidelines for acceptable use of institute IT resources, systems, networks, and services.', keywords: 'it resources usage policy acceptable use network systems' },
          { id: 'cc-p-ISP', title: 'Information Security Policy', label: 'Computer Centre : Policy', topic: 'IT', content: 'Policy outlining information security practices, data protection, and security responsibilities.', keywords: 'information security policy data protection cybersecurity' },

          // { id: 'lib-usage', title: 'Library Usage Policy', label: 'Library : Policy', topic: 'IT', content: 'Guidelines and policies for using library electronic resources.', link: 'https://library.iith.ac.in/usage-policy/' },
          { id: 'cc-s-cyb', title: 'Cyber Security Awareness', label: 'Computer Centre : Guidelines',  topic: 'IT', content: 'Guidelines and best practices to ensure cyber security.', keywords: 'firewalls threats cyber crime secure remote desktop ssl pinning cyber hygiene' },
          
          
          { id: 'lib-cyber-library-learning-research', title: 'Cyber Library (Learning / Research)', label: 'Library : Policy', topic: ['Library', 'IT'], content: 'Rules for using KRC computer lab facilities.', link: 'https://library.iith.ac.in/library-rules/' },
          { id: 'lib-usage-policy-e-resources', title: 'Usage Policy for e-resources', label: 'Library : Policy', topic: ['Library', 'Access'], content: 'Guidelines for permitted and prohibited e-resource usage.', link: 'https://library.iith.ac.in/usage-policy/' },
          { id: 'lib-library-hours-circulation-privileges', title: 'Library Hours and Circulation Privileges', label: 'Library : Policy', topic: ['Library'], content: 'KRC timings and borrowing privileges for all users.', link: 'https://library.iith.ac.in/timings/' },
          { id: 'lib-request-books-acquisition-guidelines', title: 'Request Books for Acquisition', label: 'Library : Guidelines', topic: ['Books'], content: 'How-to guide for recommending new book purchases.', link: 'https://library.iith.ac.in/how-tos/' },
          { id: 'lib-off-campus-access-guidelines', title: 'Off-campus Access', label: 'Library : Guidelines', topic: ['Access'], content: 'Step-by-step guide to access e-resources remotely.', link: 'https://library.iith.ac.in/how-tos/' }

        ]}
      ]
    }
  };

  const TOPICS = [
    "Accounts",
    "AI",
    // "Aerospace",
    // "Arts",
    // "Biotechnology",
    // "Chemical",
    // "Chemistry",
    // "Civil Eng.",
    // "Data Science",
    // "Electrical",
    // "Electronics",
    // "Environmental",
    // "History",
    "IT",
    // "Literature",
    // "Management",
    // "Mathematics",
    // "Mechanical",
    // "Physics",
    // "Robotics",
    "E-Resources",
    // "Others"
  ];

  // Helper to find specific item
  const findItem = (id) => {
    const allItems = [
      ...DATA.community.subMenus.flatMap(s => s.items),
      ...DATA.computerCentre.subMenus.flatMap(s => s.items)
    ];
    return allItems.find(item => item.id === id);
  };

  const findParentMenu = (id) => {
    for (const sub of DATA.computerCentre.subMenus) {
      if (sub.items.some(i => i.id === id)) {
        return { mainCat: "computerCentre", subCat: sub.label };
      }
    }

    for (const sub of DATA.community.subMenus) {
      if (sub.items.some(i => i.id === id)) {
        return { mainCat: "community", subCat: sub.label };
      }
    }

    return null;
  };

  const resolveRouteIdFromLocation = () => {
    const hashPath = window.location.hash.replace(/^#\/?/, "");
    const pathname = window.location.pathname.replace(/^\/+|\/+$/g, "");
    const rawPath = hashPath || pathname;

    if (!rawPath) return "";

    const segments = rawPath.split("/").filter(Boolean);

    const submenuIndex = segments.findIndex((s) => s.toLowerCase() === "submenu");
    if (submenuIndex >= 0 && segments[submenuIndex + 1] && findItem(segments[submenuIndex + 1])) {
      return segments[submenuIndex + 1];
    }

    for (const segment of segments) {
      if (findItem(segment)) {
        return segment;
      }
    }

    const lastSegment = segments[segments.length - 1];
    if (lastSegment && findItem(lastSegment)) {
      return lastSegment;
    }

    return "";
  };

  const getBasePathFromLocation = () => {
    const seg = window.location.pathname.split('/').filter(Boolean);
    if (seg.length === 0) return "";
    if (resolveRouteIdFromLocation()) {
      return "";
    }
    if (seg.length === 1) {
      return `/${seg[0]}`;
    }
    return `/${seg[0]}`;
  };

  useEffect(() => {
    const routeId = resolveRouteIdFromLocation();

    const homeState = {
      page: "Home",
      mainCat: null,
      subCat: null,
      itemId: null
    };

    if (routeId) {
      const item = findItem(routeId);

      if (item) {
        const parent = findParentMenu(routeId);

        const itemState = {
          page: "ItemDetail",
          mainCat: parent?.mainCat || null,
          subCat: parent?.subCat || null,
          itemId: routeId
        };

        setView(itemState);

        const basePath = getBasePathFromLocation();
        const url = basePath ? `${basePath}/${routeId}` : `/${routeId}`;

        if (!window.history.state || window.history.length <= 1) {
          window.history.replaceState(homeState, "", "/");
          window.history.pushState(itemState, "", url);
        } else {
          window.history.replaceState(itemState, "", url);
        }
      }
    } else {
      setView(homeState);
      window.history.replaceState(homeState, "", window.location.pathname || "/");
    }

    const handlePopState = (event) => {
      if (event.state) {
        setView(event.state);
      } else {
        setView({ page: "Home", mainCat: null, subCat: null, itemId: null });
      }
    };

    const handleLinkClick = (e) => {
      if (e.target.tagName === 'A') {
        const href = e.target.href;
        if (href && isExternalLink(href)) {
          const confirmed = window.confirm(`You are about to leave iith.ac.in and visit ${href}. Do you want to continue?`);
          if (!confirmed) {
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleLinkClick);
    };

  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('translate-x-0 opacity-100');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [topicMenuOpen, setTopicMenuOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  // Unified Navigation Handler
  const navigateTo = (page, mainCat = null, subCat = null, itemId = null) => {
    const newState = { page, mainCat, subCat, itemId };
    const basePath = getBasePathFromLocation();

    setAnimationClass('-translate-x-10 opacity-0');

    setTimeout(() => {

      if (page === 'SubMenu') {
        setSelectedTopic(null);
        setSearchTerm("");
        setSelectedFilter("");
        setSelectedLetter("");
        setSelectedLabel("");
      }

      let url = "";

      if (page === "Home") {
        url = basePath || "/";
      } else if (itemId) {
        url = `${basePath}/${itemId}`;
      } else {
        url = `${basePath}/${page}`;
      }

      // normalize double slashes
      url = url.replace(/([^:]\/\/)\/+/g, "$1");

      window.history.pushState(newState, "", url);
      setView(newState);

      setAnimationClass('translate-x-10 opacity-0');
      setTimeout(() => setAnimationClass('translate-x-0 opacity-100'), 50);

    }, 300);

    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };


  const goBack = () => {
    const state = window.history.state;

    if (state && state.page !== "Home") {
      window.history.back();
    } else if (window.history.length > 1) {
      window.history.back();
    } else {
      navigateTo("Home");
    }
  };


  
  //MOBILE FILTER

  const TopicSection = ({ mobile = false }) => {
    return (
      <div
        className={`
        bg-[#FDFBF7] border border-[#D4AF37] rounded-3xl p-6 shadow-[0_4px_12px_rgba(212,175,55,0.2)]
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

  //DROPDOWN FILTER
  const currentItems =
    view.page === "SubMenu"
      ? (DATA[view.mainCat].subMenus
          .find(s => s.label === view.subCat)
          ?.items || [])
          .filter(item => !selectedLabel || item.label === selectedLabel)
      : [];

  //LETTER FILTER
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


  // LABEL FILTER

  const currentLabels = [
    ...new Set(
      (DATA[view.mainCat]?.subMenus
        ?.find(s => s.label === view.subCat)
        ?.items || [])
        .map(item => item.label)
        .filter(Boolean)
    )
  ];


  // CLEAR ALL FILTERS

  const clearAllFilters = () => {
    setSelectedLabel("");
    setSelectedFilter("");
    setSearchTerm("");
    setSelectedLetter("");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#4A3728] flex flex-col overflow-x-hidden">

      {/* HEADER */}
      <header className="pt-6 pb-3 border-b border-[#D4AF37] px-9 w-full bg-white sticky top-0 z-40">        
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LEFT TITLE */}
          <div className="text-center flex-1">
            <div className="cursor-pointer group inline-block" onClick={() => navigateTo('Home')}>
              <BookOpen className="text-[#8B5E3C] w-14 h-14 md:w-20 md:h-20 transition-transform group-hover:scale-110" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#4A3728] mt-2 pb-4">
              IITH ICT Knowledge Cafe
            </h1>

            {/* <p className="mt-3 italic text-[#A0522D]">
              "Hot coffee fuels the mind. Fresh knowledge stirs the soul."
            </p> */}
          </div>
        </div>
      </header>

      {/* CONTENT TRANSITION WRAPPER */}

      <div className={`flex-1 transition-all duration-300 transform ${animationClass} w-full`}>

        {/* HOME VIEW */}
        {view.page === 'Home' && (
          <main className="relative">

            {/* MOBILE TOPIC BUTTON */}
            {/*
            <button
              onClick={() => setTopicMenuOpen(true)}
              className="lg:hidden fixed bottom-6 right-6 z-40 bg-[#8B5E3C] text-white p-4 rounded-full shadow-xl"
            >
              <MenuIcon size={22} />
            </button>
            */}

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4 pb-8 md:pb-10">

              {/* MAIN CONTENT */}
              <div className="flex-1">


                {/* COMPUTER CENTRE SECTION */}

                <section className="p-4 lg:ml-12 lg:mr-12 md:py-10 md:px-12 lg:px-20 xl:px-24 bg-[#FFFAF0] border border-[#D4AF37] rounded-3xl shadow-sm mb-10 mt-10">

                  <div className="mb-12 border-b-4 border-[#8B5E3C] pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                    <div>
                      <h2 className="text-lg sm:text-2xl text-[#8B5E3C] font-bold uppercase">
                        {DATA.computerCentre.title}
                      </h2>

                      <p className="text-xs font-bold opacity-50 mt-1 uppercase ">


                      {/*<p className="text-[10px] font-bold sm:text-xs text-gray-400 mt-1 uppercase tracking-widest">*/}
                        {DATA.computerCentre.description}
                      </p>
                    </div>

                    {/* <a
                      href="https://support.comp.iith.ac.in/index.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#F28972] text-white px-5 py-1.5 text-sm rounded-lg font-semibold hover:bg-[#D2691E] transition w-full sm:w-auto text-center"
                    >
                      Open a CC Ticket
                    </a> */}

                  </div>

                  {/* COMPUTER GRID */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">

                    {DATA.computerCentre.subMenus
                      .filter(sub =>
                        sub.items?.some(
                          item =>
                            (!selectedTopic ||
                             (Array.isArray(item.topic)
                               ? item.topic.map(t => t.toLowerCase()).includes(selectedTopic)
                               : item.topic?.toLowerCase() === selectedTopic)) &&
                            (!searchTerm ||
                              item.title.toLowerCase().includes(searchTerm) ||
                              item.content.toLowerCase().includes(searchTerm) ||
                              (item.keywords && item.keywords.toLowerCase().includes(searchTerm)))
                        )
                      )
                      .map((sub, idx) => {
                        const activeCount = sub.items?.filter(
                          item =>
                            (!selectedTopic ||
                             (Array.isArray(item.topic)
                               ? item.topic.map(t => t.toLowerCase()).includes(selectedTopic)
                               : item.topic?.toLowerCase() === selectedTopic)) &&
                            (!searchTerm ||
                              item.title.toLowerCase().includes(searchTerm) ||
                              item.content.toLowerCase().includes(searchTerm) ||
                              (item.keywords && item.keywords.toLowerCase().includes(searchTerm)))
                        ).length || 0;

                        return (
                        <div
                          key={idx}
                          onClick={() => navigateTo('SubMenu', 'computerCentre', sub.label)}
                          className="relative cursor-pointer group bg-[#FDFBF7] p-6 md:p-8 rounded-3xl border border-[#E6C76B] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.35)]"

                        >

                          <div className="flex justify-between items-start mb-6">
                            <div className="w-14 h-10 rounded-2xl bg-white flex items-center justify-center text-[#8B5E3C] shadow-sm group-hover:bg-[#8B5E3C] group-hover:text-white transition-all">
                              {React.cloneElement(sub.icon, { size: 24 })}
                            </div>
                            <div className="px-3 h-7 rounded-full bg-[#FFEAE5] text-[#8B5E3C] text-xs font-bold flex items-center justify-center group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors" title={`${activeCount} active items`}>
                              {activeCount} {activeCount === 1 ? 'Item' : 'Items'}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold mb-2 group-hover:text-[#D2691E]">
                            {sub.label}
                          </h3>

                          <p className="text-[10px] font-black uppercase text-[#8B5E3C] mt-4 flex items-center gap-1">
                            Open {sub.label} <ChevronRight size={12}/>
                          </p>

                        </div>
                        );
                      })}

                  </div>

                </section>





                {/* COMMUNITY SECTION */}
{/*                 
                <section className="p-10 lg:ml-6 md:p-10 bg-white border border-[#D4AF37] rounded-3xl shadow-sm mb-10 mt-8">

                  <div className="mb-12 border-b-4 border-[#8B5E3C] pb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"> */}
                    {/* LEFT SIDE */}
                    {/* <div
                      onClick={() => navigateTo('ShareRecipe')}
                      className="cursor-pointer group"
                    >
                      <h2 className="text-2xl font-bold uppercase tracking-widest text-[#8B5E3C] group-hover:text-[#D2691E] transition-colors">
                        {DATA.community.title}
                      </h2>

                      <p className="text-xs font-bold opacity-50 mt-1 group-hover:text-[#D2691E] transition-colors">
                        {DATA.community.description}
                      </p>
                    </div> */}

                    {/* RIGHT BUTTON */}
                    {/* <button
                      onClick={() => navigateTo('ShareRecipe')}
                      className="bg-[#F28972] text-white px-3 py-1.5 text-xs sm:px-5 sm:py-2 sm:text-sm rounded-lg font-semibold hover:bg-[#D2691E] transition whitespace-nowrap"
                    >
                      How to Share Recipes
                    </button>

                  </div> */}








                  {/* COMMUNITY GRID */}
                  {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

                    {DATA.community.subMenus
                      .filter(sub =>
                        sub.items?.some(item =>
                          !selectedTopic ||
                          (Array.isArray(item.topic)
                            ? item.topic.map(t => t.toLowerCase()).includes(selectedTopic)
                            : item.topic?.toLowerCase() === selectedTopic)
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

                </section> */}

              </div>


              {/* TOPIC SIDEBAR */}
              {/*
              <div className="hidden lg:block lg:w-72 pt-10 flex-shrink-0">

                <div className="sticky top-20 bg-[#FDFBF7] border border-[#D4AF37] rounded-3xl flex flex-col h-fit">

                  {/* FIXED HEADER */}
                  {/* <div className="p-6 border-b">
                    <h3 className="font-bold text-[#8B5E3C] uppercase text-sm">
                      Topics
                    </h3>
                  </div> */}

                  {/* SCROLLABLE TOPICS */}
                  {/* <div className="p-6 flex flex-col gap-3 text-sm">

                    <button
                      onClick={() => setSelectedTopic(null)}
                      className={selectedTopic === null ? "font-bold text-[#D2691E]" : ""}
                    >
                      All Topics
                    </button>

                    {TOPICS.map(topic => (
                      <button
                        key={topic}
                        onClick={() => navigateTo('TopicPage', null, topic)}
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
              */}
            </div>
          

          </main>
        )}

        
      
        {/* SUBMENU LIST VIEW */}
        {view.page === 'SubMenu' && (
          <main className="px-4 py-8 md:p-16 min-h-screen">
            <div className="max-w-7xl mx-auto">
              <button 
                onClick={goBack}
                className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
                className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
                className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
              >
                <ArrowLeft size={18} /> BACK
              </button>

              <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                {/* LEFT TITLE */}
                <div>
                  <p className="text-xs font-bold uppercase text-[#D2691E] tracking-widest mb-2">
                    {DATA[view.mainCat].title}
                  </p>

                  <h2 className="text-5xl font-serif font-bold text-[#4A3728]">
                    {view.subCat}
                  </h2>

                  <div className="h-2 w-32 bg-[#D2691E] rounded-full mt-4"></div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-end w-full md:w-auto">

                  {/* CLEAR ALL */}

                  <button
                    onClick={clearAllFilters}
                    className="h-12 px-5 bg-[#F28972] text-white rounded-xl text-sm font-semibold hover:bg-[#D2691E] transition"                  >
                    Clear All Filters
                  </button>

                  {/* LABEL DROPDOWN*/}

                  <div className="relative w-full sm:w-56">
                    <select
                      value={selectedLabel}
                      onChange={(e) => {
                        setSelectedLabel(e.target.value);
                        setSelectedFilter(""); 
                      }}
                      className="w-full h-12 px-3 pr-6 border border-[#D4AF37] rounded-xl bg-white text-sm whitespace-nowrap overflow-hidden text-ellipsis appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"


                    >
                      <option value="">All Department</option>

                      {currentLabels
                        .sort((a, b) => a.localeCompare(b))
                        .map((label) => (
                        <option key={label} value={label}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>



                  {/* TITLE DROPDOWN */}
                  <div className="relative w-full sm:w-56">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="w-full h-12 px-3 pr-6 border border-[#D4AF37] rounded-xl bg-white text-sm whitespace-nowrap overflow-hidden text-ellipsis appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                    >
                      <option value="">All Cards</option>

                      {currentItems
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* SEARCH BAR */}
                  <div className="relative w-full sm:w-56">
                    <Search className="absolute left-3 top-3 text-gray-400" size={18} />

                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                      className="w-full h-12 pl-10 pr-4 border border-[#D4AF37] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
                    />
                  </div>

                </div>

              </div>

              {/* A-Z FILTER (Desktop only) */}
              <div className="hidden lg:flex flex-wrap gap-2 mb-8">

                <button
                  onClick={() => setSelectedLetter("")}
                  className={`px-3 py-1 rounded-md text-sm border 
                  ${selectedLetter === "" ? "bg-[#F28972] text-white" : "hover:bg-gray-100"}`}
                >
                  All
                </button>

                {alphabet.map(letter => (
                  <button
                    key={letter}
                    onClick={() => setSelectedLetter(letter)}
                    className={`px-3 py-1 rounded-md text-sm border
                    ${selectedLetter === letter ? "bg-[#F28972] text-white" : "hover:bg-gray-100"}`}
                  >
                    {letter}
                  </button>
                ))}

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DATA[view.mainCat].subMenus
                  .find(s => s.label === view.subCat)
                  .items
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .filter(item =>
                    (
                      !searchTerm ||
                      item.title.toLowerCase().includes(searchTerm) ||
                      item.content.toLowerCase().includes(searchTerm) ||
                      (item.keywords && item.keywords.toLowerCase().includes(searchTerm))
                    ) &&
                    (
                      !selectedFilter || item.title === selectedFilter
                    ) &&
                    (
                      !selectedLetter ||
                      item.title.charAt(0).toUpperCase() === selectedLetter
                    ) &&
                    (
                      !selectedLabel || item.label === selectedLabel
                    )
                  )
                  .map((item, index) => (

                  <div
                    key={item.id}
                    onClick={() => {
                      if (item.link) {
                        if (isExternalLink(item.link)) {
                          const confirmed = window.confirm(`You are about to leave iith domain and access an external link: ${item.link}. Do you want to continue?`);
                          if (confirmed) {
                            window.open(item.link, "_blank");
                          }
                        } else {
                          window.open(item.link, "_blank");
                        }
                      } else {
                        navigateTo('ItemDetail', view.mainCat, view.subCat, item.id);
                      }
                    }}
                    className="cursor-pointer bg-white p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] hover:shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition-all group"
                  >

                   
                    {/* ICON + LABEL */}
                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-6 h-6 bg-[#FFEAE5] text-[#8B5E3C] flex items-center justify-center rounded-xl">
                        <Layers size={20} />
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D2691E]">
                        Item-{index + 1}
                      </span>

                      {item.label && (
                        <span className="text-[10px] uppercase tracking-widest bg-[#FFEAE5] text-[#8B5E3C] px-3 py-1 rounded-md">
                          {item.label}
                        </span>
                      )}



                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#D2691E]">
                      {item.title}
                    </h3>


                    {/* DESCRIPTION */}
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {item.content}
                    </p>

                    {/* FOOTER */}
                    <div className="mt-6 pt-6 border-t border-[#D4AF37] flex items-center gap-2 text-[10px] font-black text-[#8B5E3C] uppercase">
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
          <main className="p-6 md:p-24 bg-[#FFFAF0] min-h-screen">
            <div className="max-w-4xl mx-auto">

              <button 
                onClick={goBack}
                className="-mt-2 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
              >
                <ArrowLeft size={18} /> BACK
              </button>

              <div className="bg-white p-6 rounded-[3rem] shadow-2xl border border-[#D4AF37]">

                <h1 className="text-4xl font-serif font-bold text-[#4A3728] mb-8">
                  How to Share Your Recipe
                </h1>

                <div className="space-y-6 text-gray-600 leading-relaxed">

                  <p>
                    We welcome innovative technical tips, creative workflows, and 
                    knowledge contributions from the IITH community.
                  </p>

                  <h2 class="text-2xl font-bold mb-4">Submission Guidelines</h2>


                  <ul class="list-decimal pl-6 space-y-8 text-gray-600 leading-relaxed text-sm sm:text-base">

                  <li>
                  Create a folder in Google Drive and name it <strong>“IITH ICT Knowledge Cafe”</strong> (preferred) or another appropriate name.
                  </li>

                  <li>
                  Upload your content or create it directly inside the folder. 
                  <strong>Google Docs</strong> and <strong>Google Slides</strong> are recommended as they are easy to edit and review collaboratively.
                  </li>

                  <li>
                  Include your <strong>email ID</strong> within the recipe content so that reviewers or readers can contact you if further clarification is needed.
                  </li>

                  

                  <li>
                     Click on the <strong>Share</strong> button in the document. In the <strong>General Access</strong> section, change the link permission from <strong>“Restricted”</strong> to <strong>“IIT Hyderabad.”</strong>
                   </li>

                   <li>
                     In the <strong>Add People</strong> field, enter the <strong>Knowledge Café email IDs</strong> mentioned below and set the permission level to <strong>“Commenter.”</strong>
                     In the message box that appears, include the <strong>Title, Category, and Topic</strong> of the document. Finally, click the <strong>Send</strong> button.
                   </li>

                  
                  <li>
                  Once the reviewer approves your recipe, the Knowledge Café team will publish and share it with the wider <strong>IITH community</strong>.
                  </li>

                  </ul>
                  

                  <a 
                    href="mailto:knowledge.cafe@iith.ac.in?subject=Recipe Submission"
                    className="mt-4 inline-block w-full sm:w-auto text-center text-white bg-[#8B5E3C] 
                      px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base 
                      rounded-xl hover:bg-[#D2691E] transition break-all"
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
          <Microsoft365 navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-vpn" && (
          <VPNPage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-ldap" && (
          <LDAPPage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-wifi" && (
          <WifiPage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-lan" && (
          <LANPage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-off" && (
          <OfficeSoftware navigateTo={navigateTo} goBack={goBack} />
        )}

         {view.page === 'ItemDetail' && view.itemId === "cc-p-AUP" && (
          <AUP navigateTo={navigateTo} goBack={goBack} />
        )}

         {view.page === 'ItemDetail' && view.itemId === "cc-p-ISP" && (
          <ISP navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-cyb" && (
          <CyberSecurityPage navigateTo={navigateTo} goBack={goBack} />
        )}


        {view.page === 'ItemDetail' && view.itemId === "cc-sup-main" && (
          <TicketSystemPage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-dis" && (
          <DiscoursePage navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-s-win" && (
          <WindowsActivation navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-os" && (
          <OperatingSystems navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-gws" && (
          <GoogleWorkspace navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-adb" && (
          <AdobeSuite navigateTo={navigateTo} goBack={goBack} />
        )}


        {view.page === 'ItemDetail' && view.itemId === "cc-sw-sci" && (
          <ScientificSoftware navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId === "cc-sw-inh" && (
          <InHouseSoftware navigateTo={navigateTo} goBack={goBack} />
        )}




        {view.page === 'ItemDetail' && view.itemId === "cc-s-dc" && (
          <DataCentre navigateTo={navigateTo} goBack={goBack} />
        )}

        {view.page === 'ItemDetail' && view.itemId !== "cc-s-ms" && view.itemId !== "cc-s-vpn" && view.itemId !== "cc-s-ldap" 
          && view.itemId !== "cc-s-wifi" && view.itemId !== "cc-p-AUP" && view.itemId !== "cc-p-ISP" && view.itemId !== "cc-s-cyb" && view.itemId !== "cc-sup-main" && view.itemId !== "cc-s-dis" 
          && view.itemId !== "c-nf-go" && view.itemId !== "c-nf-gws" && view.itemId !== "cc-sw-off" && view.itemId !== "cc-s-ps" && view.itemId !== "cc-hd-2" && view.itemId !== "cc-hd-3" 
          && view.itemId !== "cc-s-lan" && view.itemId !== "cc-s-win" &&  view.itemId !== "cc-sw-os" && view.itemId !== "cc-s-dc" 
          && view.itemId !== "cc-sw-adb" && view.itemId !== "cc-sw-gws" && view.itemId !== "cc-sw-sci" &&  view.itemId !== "cc-sw-inh" && view.itemId !== "cc-s-int"  && (

          <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
            <div className="max-w-4xl mx-auto">
              <button 
                onClick={goBack}
                className="-mt-2 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
              >
                <ArrowLeft size={18} /> BACK
              </button>
              
              <article className="bg-white p-6 md:p-24 rounded-3xl md:rounded-[3rem] shadow-2xl border border-[#D4AF37]">
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

                <div className="mt-20 pt-12 border-t border-[#D4AF37] flex flex-col items-center gap-8">
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
        <main className="px-4 py-8 md:p-24 min-h-screen">

          <button 
            onClick={goBack}
            className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
          >
            <ArrowLeft size={18} /> BACK
          </button>

          <h2 className="text-4xl font-bold mb-10">
            {view.subCat} Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[...DATA.community.subMenus.flatMap(s=>s.items),
             ...DATA.computerCentre.subMenus.flatMap(s=>s.items)
            ]
            .filter(item =>
              Array.isArray(item.topic)
                ? item.topic.includes(view.subCat)
                : item.topic === view.subCat
            )
            
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(item => (

              <div
                key={item.id}
                className="bg-white p-6 md:p-8 rounded-3xl border border-[#D4AF37] shadow-[0_4px_12px_rgba(212,175,55,0.25)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.35)] cursor-pointer transition"
                onClick={() => {
                  if (item.link) {
                    if (isExternalLink(item.link)) {
                      const confirmed = window.confirm(`You are about to leave iith.ac.in and visit ${item.link}. Do you want to continue?`);
                      if (confirmed) {
                        window.open(item.link, "_blank");
                      }
                    } else {
                      window.open(item.link, "_blank");
                    }
                  } else {
                    const parent = findParentMenu(item.id);
                    if (parent) {
                      navigateTo('ItemDetail', parent.mainCat, parent.subCat, item.id);
                    }
                  }
                }}
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
        {/*
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
                    navigateTo('Home');
                    setTopicMenuOpen(false);
                  }}
                >
                  All Topics
                </button>

                {TOPICS.map(topic => (
                  <button
                    key={topic}
                    onClick={() => {
                      navigateTo('TopicPage', null, topic);
                      setTopicMenuOpen(false);
                    }}
                  >
                    {topic}
                  </button>
                ))}

               

              </div>

            </div>

          </div>
        )}
        */}



      {/* FOOTER */}
      <footer className="bg-[#4A3728] text-white py-16 px-10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold tracking-widest flex items-center justify-center md:justify-start gap-3">
              <BookOpen size={32} className="text-[#D2691E]" /> IITH ICT Knowledge Cafe
            </span>
            <p className="text-xs opacity-50 mt-2">ICT - Information and Communication Technology</p>
            <p className="text-xs opacity-50 mt-2">Indian Institute of Technology Hyderabad © 2026</p>
            <p className="text-xs opacity-40 mt-1">
              Managed by Computer Centre, IITH
            </p>
          </div>
          <div className="flex gap-8 opacity-40">
            {/*<ThumbsUp className="cursor-pointer hover:opacity-100" />*/}
            {/* <a 
              href="mailto:cc_knowledge@iith.ac.in"
              className="cursor-pointer hover:opacity-100"
            >
              <Send />
            </a> */}
            {/*<MessageSquare className="cursor-pointer hover:opacity-100" />*/}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;