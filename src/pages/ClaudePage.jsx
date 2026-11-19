import React, { useState } from "react";
import {
  ArrowLeft,
  Sparkles,
  CalendarClock,
  Mail,
  CreditCard,
  BadgeCheck,
  LogIn,
  GraduationCap,
  Users,
  Crown,
  UserCog,
  ShieldCheck,
  Eye,
  EyeOff,
  Laptop,
  Smartphone,
  Globe,
  FileText,
  FolderKanban,
  MessagesSquare,
  Search,
  Check,
  X,
  Plus,
  Minus,
  Clock,
  LifeBuoy,
  Info,
  AlertTriangle,
  Activity,
  Database,
  Lock,
  BookOpen,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const HIGHLIGHTS = [
  { icon: GraduationCap, value: "2", label: "License types", sub: "Student & Faculty" },
  { icon: CalendarClock, value: "1 Year", label: "Licence validity", sub: "From the date of assignment" },
  { icon: Mail, value: "IITH ID", label: "Invitation by email", sub: "Sent to your @iith.ac.in address" },
  { icon: Laptop, value: "4+", label: "Platforms", sub: "Web, Windows, macOS, iOS, Android" },
];

const LICENCES = [
  {
    icon: GraduationCap,
    audience: "Student License",
    name: "Claude Enterprise — Global Access Seat",
    points: [
      "Full Claude Enterprise workspace access through the institute",
      "Sign in with your IITH email ID from anywhere — on or off campus",
      "Chats, projects and files kept inside the IITH workspace",
      "Available models: Haiku, Sonnet and Opus (all latest versions). Fable is not available",
      "Valid for one year from the date the licence is assigned",
    ],
  },
  {
    icon: Users,
    audience: "Faculty License",
    name: "Beneficial Deployments — Premium Seat",
    points: [
      "Claude Enterprise workspace access for teaching and research work",
      "Sign in with your IITH email ID on web, desktop and mobile",
      "Organise course and research material in projects",
      "Available models: all latest models, including Fable",
      "Valid for one year from the date the licence is assigned",
    ],
  },
];

const STEPS = [
  { icon: FileText, title: "Request", text: "Submit a request for a Claude licence." },
  { icon: CreditCard, title: "Payment", text: "Complete the licence payment." },
  { icon: BadgeCheck, title: "Licence assigned", text: "The Computer Centre assigns a seat once payment is confirmed." },
  { icon: Mail, title: "Invitation", text: "An invitation link is sent to your IITH email ID." },
  { icon: LogIn, title: "Accept & sign in", text: "Open the link and sign in to claude.ai with your IITH email." },
  { icon: CalendarClock, title: "Active for 1 year", text: "Use Claude across all your devices for the licence period." },
];

const FEATURES = [
  { icon: MessagesSquare, title: "Chat & reasoning", text: "Draft, summarise, explain, brainstorm and work through complex problems." },
  { icon: FileText, title: "Documents & files", text: "Upload PDFs, documents, spreadsheets and images for analysis and Q&A." },
  { icon: FolderKanban, title: "Projects", text: "Group chats with shared instructions and reference files for a course or research topic." },
  { icon: Sparkles, title: "Artifacts", text: "Generate code, documents, diagrams and interactive content in a side panel." },
  { icon: Search, title: "Research & web search", text: "Get answers grounded in current sources, with citations." },
  { icon: Smartphone, title: "Every device", text: "Your chats sync across the web, desktop and mobile apps." },
];

const PLATFORMS = [
  { icon: Globe, name: "Web", detail: "claude.ai", href: "https://claude.ai" },
  { icon: Laptop, name: "Desktop", detail: "Windows & macOS", href: "https://claude.ai/download" },
  { icon: Smartphone, name: "Mobile", detail: "iOS & Android", href: "https://claude.ai/download" },
];

const ROLES = [
  {
    icon: Users,
    name: "Member",
    who: "Students & faculty",
    text: "Uses Claude — chats, projects and files. Cannot manage the workspace or see anyone else's data.",
  },
  {
    icon: UserCog,
    name: "Admin",
    who: "Licence management staff",
    text: "Manages membership: invites and removes members and views usage analytics. No access to chat content or logs.",
  },
  {
    icon: ShieldCheck,
    name: "Owner",
    who: "Authorised CC staff",
    text: "Runs the workspace: roles, billing, seats, SSO, settings and audit logs. Cannot see chat content.",
  },
  {
    icon: Crown,
    name: "Primary Owner",
    who: "One institute account",
    text: "Holds every permission, including two no other role has: exporting all workspace data and transferring the role.",
  },
];

// [permission, member, admin, owner, primaryOwner]
const PERMISSIONS = [
  ["Use chats and projects", true, true, true, true],
  ["Invite new members", false, true, true, true],
  ["Remove members / cancel invitations", false, true, true, true],
  ["View usage analytics", false, true, true, true],
  ["Invite or remove Admins and Owners", false, false, true, true],
  ["Change members' roles", false, false, true, true],
  ["View and pay invoices, manage billing", false, false, true, true],
  ["Add new seats (licences)", false, false, true, true],
  ["Turn on integrations, capabilities and project sharing", false, false, true, true],
  ["Manage SSO and sign-in settings", false, false, true, true],
  ["Manage data retention and feedback settings", false, false, true, true],
  ["Export audit logs (activity records)", false, false, true, true],
  ["Export all workspace data, including chat content", false, false, false, "only"],
  ["Transfer the Primary Owner role", false, false, false, "only"],
];

const LOG_RECORDS = [
  "When it happened",
  "Who did it (name and email)",
  "Event type and the item's ID",
  "IP address and device ID",
  "Browser or app (iOS / Android)",
];

const LOG_EVENTS = [
  "Sign-ins and sign-outs",
  "Chats created, renamed or deleted",
  "Projects created, renamed, shared or deleted",
  "Files uploaded, project documents changed",
  "Invitations, removed members, SSO changes",
];

const LOG_HIDDEN = [
  { title: "Chat titles and messages", text: "Only a unique ID is recorded. The one exception: renaming a chat records its new name." },
  { title: "Project titles and contents", text: "Only the project's ID and whether it is private or shared." },
  { title: "What was in uploaded files", text: "The log shows that a file was uploaded, not what it contained." },
  { title: "Anything older than 180 days", text: "Each log export covers the most recent 180 days only." },
];

const EXPORT_LIMITS = [
  { title: "Deleted content", text: "Chats, files and projects deleted before an export — by you or by the retention setting — are not included." },
  { title: "Expiring links", text: "Export download links expire after 24 hours." },
  { title: "Admins and Members", text: "Neither role can run an audit-log export or a data export." },
];

const FAQ_GROUPS = [
  {
    title: "Access & licence",
    items: [
      {
        q: "Who is eligible for a Claude licence?",
        a: "IITH students and faculty who have requested a licence and completed the payment. Students receive a Claude Enterprise Global Access seat and faculty receive a Beneficial Deployments Premium seat.",
      },
      {
        q: "How do I get access after paying?",
        a: "Once your payment is confirmed, the Computer Centre assigns a licence to you and Claude sends an invitation link to your IITH email ID. Open the link, sign in with the same IITH email ID, and you will land in the IITH workspace.",
      },
      {
        q: "I have paid but have not received the invitation. What should I do?",
        a: "Check the Spam, Promotions and Updates folders of your IITH mailbox for an email from Anthropic / Claude. If you still can't find it, raise a ticket with the Computer Centre Helpdesk and include your payment reference.",
      },
      {
        q: "Can I use a personal email ID or share my account?",
        a: "No. Each licence is assigned to one person and is linked to that person's IITH email ID. Accounts must not be shared, and licences cannot be moved to personal email addresses.",
      },
      {
        q: "How long is the licence valid?",
        a: "One year from the date the licence is assigned to you.",
      },
      {
        q: "What happens when my licence ends?",
        a: "Your access to the IITH Claude workspace stops, along with the chats and projects stored in it. Copy or download anything you want to keep before the end date.",
      },
      {
        q: "I already have a personal Claude account. Is it affected?",
        a: "Your IITH workspace is separate from any personal Claude account. Chats in a personal account are not moved into the IITH workspace automatically — copy across anything you need. Use the IITH workspace for institute work.",
      },
    ],
  },
  {
    title: "Privacy & data",
    items: [
      {
        q: "Can administrators read my chats?",
        a: "Admins and Owners cannot see chat content. Audit logs record activity (who, when, from which device and IP), not what was written. Only the Primary Owner can run a workspace data export, which can include members' prompts and Claude's responses. Treat your Claude chats as institute records.",
      },
      {
        q: "Will Anthropic use my chats to train its models?",
        a: "Under Anthropic's commercial terms for Claude Enterprise, chats and files in the workspace are not used to train Anthropic's models by default.",
      },
      {
        q: "How long are my chats kept?",
        a: "Chats are kept according to the data retention setting configured for the IITH workspace. Chats you delete are removed from your history and are not included in later exports.",
      },
      {
        q: "What kind of data should I avoid putting into Claude?",
        a: "Do not upload passwords, confidential institute records, or other people's personal or sensitive data unless IITH policy allows it. Follow the institute's Acceptable Usage Policy and Information Security Policy.",
      },
    ],
  },
  {
    title: "Using Claude",
    items: [
      {
        q: "Which devices can I use?",
        a: "Claude works in any modern browser at claude.ai, in the desktop app for Windows and macOS, and in the iOS and Android apps. Sign in with your IITH email ID on each device and your chats stay in sync.",
      },
      {
        q: "Are there usage limits?",
        a: "Yes. Anthropic applies usage limits that reset over time and does not publish exact figures. You can see your current usage in claude.ai under Settings → Usage. If you reach a limit, wait for it to reset.",
      },
      {
        q: "Can I share chats or projects with others?",
        a: "Projects can be shared with other members of the IITH workspace when project sharing is enabled. Content cannot be shared with people outside the workspace through the workspace itself.",
      },
      {
        q: "Should I rely on Claude's answers as they are?",
        a: "No. Claude can make mistakes. Check facts, citations and code before you use them, and follow your course or department rules on the use of AI in academic work.",
      },
      {
        q: "Where can I get help?",
        a: "For licence, invitation or sign-in issues, raise a ticket with the Computer Centre Helpdesk. For product how-tos, see the Claude Help Center at support.claude.com.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

const SectionHeader = ({ eyebrow, title, text }) => (
  <div className="mb-6 sm:mb-8">
    {eyebrow && (
      <p className="text-xs font-bold tracking-[0.18em] uppercase text-[#D2691E] mb-2">{eyebrow}</p>
    )}
    <h2 className="text-2xl md:text-3xl font-bold text-[#4A3728]">{title}</h2>
    {text && <p className="text-gray-600 mt-3 leading-relaxed max-w-3xl">{text}</p>}
  </div>
);

const IconBadge = ({ icon: Icon, className = "" }) => (
  <span
    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#FDF3E7] text-[#8B5E3C] ring-1 ring-[#E6C76B]/60 shrink-0 ${className}`}
  >
    <Icon size={22} strokeWidth={1.8} />
  </span>
);

const PermissionCell = ({ value }) => {
  if (value === "only") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[#8B5E3C] text-white text-[11px] font-bold px-2 py-0.5">
        <Check size={12} strokeWidth={3} /> Only
      </span>
    );
  }
  return value ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 text-emerald-700">
      <Check size={14} strokeWidth={3} />
      <span className="sr-only">Yes</span>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
      <X size={13} strokeWidth={2.5} />
      <span className="sr-only">No</span>
    </span>
  );
};

const FaqItem = ({ id, q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-[#E6C76B] rounded-xl overflow-hidden ${open ? "bg-[#FDFBF7]" : "bg-white"}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full min-h-[44px] flex items-center justify-between gap-3 p-3 sm:p-4 text-left text-sm sm:text-base font-medium text-[#4A3728] hover:bg-[#FDFBF7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <span className="min-w-0">{q}</span>
        {open ? (
          <Minus size={18} className="text-[#8B5E3C] shrink-0" />
        ) : (
          <Plus size={18} className="text-[#8B5E3C] shrink-0" />
        )}
      </button>
      {open && (
        <div id={id} className="px-3 sm:px-5 pb-4 pt-3 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-[#E6C76B]/50">
          {a}
        </div>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const ClaudePage = ({ navigateTo, goBack }) => {
  const openPolicy = (id) => navigateTo("ItemDetail", "computerCentre", "Policies & Guidelines", id);

  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      <button
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-8 md:mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-6xl mx-auto space-y-6 md:space-y-8">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-[#4A3728] via-[#6B4A32] to-[#8B5E3C] text-white p-6 sm:p-10 md:p-14 shadow-lg">
          <div aria-hidden className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-[#F28972]/20 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/25 px-3 py-1 text-xs font-semibold tracking-wide">
              <Sparkles size={14} /> Computer Centre · AI Tool
            </span>

            <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Claude Enterprise at IIT Hyderabad
            </h1>
            <p className="mt-4 max-w-3xl text-white/85 text-base md:text-lg leading-relaxed">
              IIT Hyderabad has licensed Anthropic's <strong className="text-white">Claude</strong> for
              students and faculty. Licences are assigned to members who have completed payment, and an
              invitation is sent to their IITH email ID. Each licence is valid for one year.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] text-[#2E2116] font-bold px-5 py-3 hover:bg-[#E6C76B] transition"
              >
                Open Claude <ArrowRight size={18} />
              </a>
              <a
                href="#claude-faq"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/30 font-semibold px-5 py-3 hover:bg-white/20 transition"
              >
                Read the FAQ
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="relative mt-8 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {HIGHLIGHTS.map(({ icon: Icon, value, label, sub }) => (
              <div key={label} className="rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur p-4 sm:p-5">
                <Icon size={22} className="text-[#E6C76B]" />
                <p className="mt-3 text-xl sm:text-2xl font-bold">{value}</p>
                <p className="text-sm font-semibold text-white/90">{label}</p>
                <p className="text-xs text-white/65 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Licence types ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader
            eyebrow="Licences"
            title="Two licence types"
            text="Both licences give access to the institute's Claude Enterprise workspace and are valid for one year."
          />
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {LICENCES.map(({ icon, audience, name, points }) => (
              <article
                key={audience}
                className="relative rounded-2xl border border-[#E6C76B] bg-gradient-to-b from-[#FDFBF7] to-white p-5 sm:p-7 transition hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)]"
              >
                <div className="flex items-center gap-4">
                  <IconBadge icon={icon} />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#D2691E]">{audience}</p>
                    <h3 className="text-lg sm:text-xl font-bold text-[#4A3728]">{name}</h3>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3 text-gray-600 text-sm sm:text-base">
                      <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* ---------------- How to get access ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader
            eyebrow="Getting access"
            title="From request to first sign-in"
            text="Licences are assigned only after payment is confirmed. The invitation always goes to your IITH email ID."
          />

          <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li
                key={title}
                className="relative flex xl:flex-col gap-4 xl:gap-3 rounded-2xl border border-[#E6C76B]/70 bg-[#FDFBF7] p-4 sm:p-5"
              >
                <div className="relative shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-full bg-[#8B5E3C] text-white shadow-md">
                    <Icon size={22} strokeWidth={1.8} />
                  </span>
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#D4AF37] text-[#2E2116] text-[11px] font-bold ring-2 ring-white">
                    {i + 1}
                  </span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#4A3728]">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1 leading-relaxed">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Validity timeline */}
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#FDF3E7] to-[#FDFBF7] border border-[#E6C76B] p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <Clock size={20} className="text-[#8B5E3C]" />
              <h3 className="font-bold text-[#4A3728]">Licence validity</h3>
            </div>
            <div className="relative h-3 rounded-full bg-[#E6C76B]/40 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-[#D4AF37] via-[#D2691E] to-[#8B5E3C]" />
            </div>
            <div className="mt-3 flex justify-between gap-4 text-xs sm:text-sm">
              <div>
                <p className="font-bold text-[#4A3728]">Licence assigned</p>
                <p className="text-gray-500">Access starts</p>
              </div>
              <div className="text-center hidden sm:block">
                <p className="font-bold text-[#4A3728]">12 months</p>
                <p className="text-gray-500">Full access</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#4A3728]">One year later</p>
                <p className="text-gray-500">Access ends</p>
              </div>
            </div>
            <p className="mt-4 flex gap-2 text-sm text-gray-600">
              <Info size={16} className="text-[#D2691E] shrink-0 mt-0.5" />
              Save anything you want to keep before your licence ends — chats and projects in the IITH workspace
              are no longer available to you after that.
            </p>
          </div>
        </section>

        {/* ---------------- What you can do ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader eyebrow="Capabilities" title="What you can do with Claude" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-[#E6C76B]/70 p-5 hover:border-[#D4AF37] hover:bg-[#FDFBF7] transition"
              >
                <IconBadge icon={icon} className="group-hover:bg-[#8B5E3C] group-hover:text-white transition" />
                <h3 className="mt-4 font-bold text-[#4A3728]">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <h3 className="mt-10 mb-4 text-lg font-bold text-[#8B5E3C]">Sign in on any device</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {PLATFORMS.map(({ icon: Icon, name, detail, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-[#FDFBF7] border border-[#E6C76B] p-4 hover:shadow-md hover:-translate-y-0.5 transition"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#4A3728] text-[#E6C76B] shrink-0">
                  <Icon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-[#4A3728]">{name}</span>
                  <span className="block text-sm text-gray-500">{detail}</span>
                </span>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Always sign in with your <strong>IITH email ID</strong> — the same address the invitation was sent to.
          </p>
        </section>

        {/* ---------------- Responsible use ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader eyebrow="Guidelines" title="Responsible use" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: ShieldCheck, title: "Protect data", text: "Don't upload passwords, confidential records or others' personal data." },
              { icon: Search, title: "Verify output", text: "Check facts, citations and code — Claude can make mistakes." },
              { icon: BookOpen, title: "Academic integrity", text: "Follow your course and department rules on AI use." },
              { icon: Lock, title: "Keep it personal", text: "Your licence is for you alone — never share your account." },
            ].map(({ icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-[#FDFBF7] border border-[#E6C76B]/70 p-5">
                <IconBadge icon={icon} />
                <h3 className="mt-3 font-bold text-[#4A3728]">{title}</h3>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openPolicy("cc-p-AUP")}
              className="inline-flex items-center gap-2 rounded-xl border border-[#8B5E3C] text-[#8B5E3C] px-4 py-2 text-sm font-semibold hover:bg-[#8B5E3C] hover:text-white transition"
            >
              Acceptable Usage Policy <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => openPolicy("cc-p-ISP")}
              className="inline-flex items-center gap-2 rounded-xl border border-[#8B5E3C] text-[#8B5E3C] px-4 py-2 text-sm font-semibold hover:bg-[#8B5E3C] hover:text-white transition"
            >
              Information Security Policy <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* ---------------- Roles & permissions ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader
            eyebrow="Governance"
            title="Roles and permissions"
            text="The IITH workspace is managed by authorised Computer Centre staff. Each role has a clearly limited set of permissions."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ROLES.map(({ icon, name, who, text }, i) => (
              <div
                key={name}
                className={`rounded-2xl p-5 border ${
                  i === 3
                    ? "bg-gradient-to-br from-[#4A3728] to-[#8B5E3C] text-white border-transparent"
                    : "bg-[#FDFBF7] border-[#E6C76B]"
                }`}
              >
                <IconBadge
                  icon={icon}
                  className={i === 3 ? "bg-white/15 text-[#E6C76B] ring-white/25" : ""}
                />
                <h3 className={`mt-4 text-lg font-bold ${i === 3 ? "text-white" : "text-[#4A3728]"}`}>{name}</h3>
                <p className={`text-xs font-semibold uppercase tracking-wider ${i === 3 ? "text-[#E6C76B]" : "text-[#D2691E]"}`}>
                  {who}
                </p>
                <p className={`mt-2 text-sm leading-relaxed ${i === 3 ? "text-white/85" : "text-gray-600"}`}>{text}</p>
              </div>
            ))}
          </div>

          {/* Permission matrix — stacked rows on phones */}
          <ul className="md:hidden rounded-2xl border border-[#E6C76B] overflow-hidden divide-y divide-[#E6C76B]/50">
            {PERMISSIONS.map(([label, ...cells], i) => (
              <li key={label} className={`p-4 ${i % 2 ? "bg-[#FDFBF7]" : "bg-white"}`}>
                <p className="font-medium text-gray-800 text-sm">{label}</p>
                <div className="mt-3 grid grid-cols-4 gap-1 text-center">
                  {["Member", "Admin", "Owner", "Primary"].map((role, j) => (
                    <div key={role} className="flex flex-col items-center gap-1">
                      <PermissionCell value={cells[j]} />
                      <span className="text-[10px] font-semibold uppercase tracking-wide text-gray-500">{role}</span>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="hidden md:block rounded-2xl border border-[#E6C76B] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-sm">
                <thead>
                  <tr className="bg-[#4A3728] text-white">
                    <th scope="col" className="text-left font-semibold px-4 py-3">Permission</th>
                    {["Member", "Admin", "Owner", "Primary Owner"].map((r) => (
                      <th key={r} scope="col" className="font-semibold px-3 py-3 text-center whitespace-nowrap">
                        {r}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PERMISSIONS.map(([label, ...cells], i) => (
                    <tr key={label} className={i % 2 ? "bg-[#FDFBF7]" : "bg-white"}>
                      <th scope="row" className="text-left font-medium text-gray-700 px-4 py-3">
                        {label}
                      </th>
                      {cells.map((c, j) => (
                        <td key={j} className="px-3 py-3 text-center">
                          <PermissionCell value={c} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-sm text-gray-700">
              <Lock size={18} className="text-emerald-700 shrink-0 mt-0.5" />
              <p>
                <strong>Admins</strong> have no access to anyone's chat content and cannot export audit logs or
                workspace data. <strong>Owners</strong> can read activity logs but not chat content.
              </p>
            </div>
            <div className="flex gap-3 rounded-xl bg-orange-50 border border-orange-200 p-4 text-sm text-gray-700">
              <Crown size={18} className="text-[#D2691E] shrink-0 mt-0.5" />
              <p>
                The <strong>Primary Owner</strong> is the only role that can export members' prompts and Claude's
                responses. The workspace has exactly one Primary Owner.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- Visibility ---------------- */}
        <section className="bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm">
          <SectionHeader
            eyebrow="Transparency"
            title="What the workspace administrators can and cannot see"
            text="There are two kinds of export, and they show very different things."
          />

          <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
            {/* Audit logs */}
            <div className="rounded-2xl border border-[#E6C76B] overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 bg-[#FDF3E7] px-5 py-4 border-b border-[#E6C76B]">
                <Activity size={22} className="text-[#8B5E3C]" />
                <div>
                  <h3 className="font-bold text-[#4A3728]">Audit logs</h3>
                  <p className="text-xs text-gray-600">Owners & Primary Owner · last 180 days</p>
                </div>
              </div>
              <div className="p-5 grid sm:grid-cols-2 gap-5 text-sm">
                <div>
                  <p className="flex items-center gap-2 font-bold text-emerald-700 mb-2">
                    <Eye size={16} /> Every entry records
                  </p>
                  <ul className="space-y-1.5 text-gray-600">
                    {LOG_RECORDS.map((r) => (
                      <li key={r} className="flex gap-2"><Check size={15} className="text-emerald-600 shrink-0 mt-0.5" />{r}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-2 font-bold text-emerald-700 mb-2">
                    <Activity size={16} /> Events captured
                  </p>
                  <ul className="space-y-1.5 text-gray-600">
                    {LOG_EVENTS.map((r) => (
                      <li key={r} className="flex gap-2"><Check size={15} className="text-emerald-600 shrink-0 mt-0.5" />{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto bg-gray-50 border-t border-gray-200 p-5">
                <p className="flex items-center gap-2 font-bold text-gray-700 mb-3 text-sm">
                  <EyeOff size={16} /> Not included in audit logs
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {LOG_HIDDEN.map(({ title, text }) => (
                    <div key={title} className="rounded-lg bg-white border border-gray-200 p-3">
                      <p className="font-semibold text-gray-800 text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Data export */}
            <div className="rounded-2xl border border-[#E6C76B] overflow-hidden flex flex-col">
              <div className="flex items-center gap-3 bg-[#4A3728] text-white px-5 py-4">
                <Database size={22} className="text-[#E6C76B]" />
                <div>
                  <h3 className="font-bold">Workspace data export</h3>
                  <p className="text-xs text-white/70">Primary Owner only · whole workspace</p>
                </div>
              </div>
              <div className="p-5 text-sm">
                <p className="flex items-center gap-2 font-bold text-[#D2691E] mb-2">
                  <Eye size={16} /> Can include
                </p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "Members' prompts",
                    "Claude's responses",
                    "Member account data",
                    "Chats and projects of members who have since left",
                  ].map((r) => (
                    <li key={r} className="flex gap-2"><Check size={15} className="text-[#D2691E] shrink-0 mt-0.5" />{r}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto bg-gray-50 border-t border-gray-200 p-5">
                <p className="flex items-center gap-2 font-bold text-gray-700 mb-3 text-sm">
                  <EyeOff size={16} /> Limits of a data export
                </p>
                <div className="space-y-3">
                  {EXPORT_LIMITS.map(({ title, text }) => (
                    <div key={title} className="rounded-lg bg-white border border-gray-200 p-3">
                      <p className="font-semibold text-gray-800 text-sm">{title}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl bg-gradient-to-r from-[#FDF3E7] to-white border border-[#D4AF37] p-5">
            <AlertTriangle size={22} className="text-[#D2691E] shrink-0" />
            <div className="text-sm sm:text-base text-gray-700">
              <p className="font-bold text-[#4A3728]">Treat every Claude chat as an institute record.</p>
              <p className="mt-1">
                Your chats are part of the institute's workspace, so use Claude for academic and work-related tasks.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section
          id="claude-faq"
          className="scroll-mt-24 bg-white rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] p-6 sm:p-10 md:p-14 shadow-sm"
        >
          <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
          <div className="space-y-8">
            {FAQ_GROUPS.map((group, gi) => (
              <div key={group.title}>
                <h3 className="text-lg font-bold text-[#8B5E3C] mb-3">{group.title}</h3>
                <div className="space-y-3">
                  {group.items.map((item, qi) => (
                    <FaqItem key={item.q} id={`claude-faq-${gi}-${qi}`} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- Support ---------------- */}
        <section className="rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-[#4A3728] to-[#8B5E3C] text-white p-6 sm:p-10 md:p-12 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex gap-4">
            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 text-[#E6C76B] shrink-0">
              <LifeBuoy size={24} />
            </span>
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Need help with your Claude licence?</h2>
              <p className="text-white/80 mt-1 text-sm md:text-base">
                For invitation, sign-in or licence issues, raise a ticket with the Computer Centre Helpdesk.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="https://support.comp.iith.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] text-[#2E2116] font-bold px-5 py-3 hover:bg-[#E6C76B] transition"
            >
              Raise a ticket
            </a>
            <a
              href="https://support.claude.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 ring-1 ring-white/30 font-semibold px-5 py-3 hover:bg-white/20 transition"
            >
              Claude Help Center
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ClaudePage;
