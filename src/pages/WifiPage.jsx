import React, { useState } from "react";
import { ArrowLeft, Plus, Minus } from "lucide-react";

const eduroamGuides = [
  {
    label: "How to connect to eduroam in Windows",
    href: "https://docs.google.com/document/d/1RbSY3kKJ9ZnaiK-6PH1sbMwE9fGEUun8r1EI33RKk0I/edit?usp=sharing",
  },
  {
    label: "How to connect to eduroam in Ubuntu",
    href: "https://docs.google.com/document/d/1JJqlk5_HLKvfc_O9rxfOTULQHEIOdjcIF_pMV3LL9L0/edit?usp=sharing",
  },
  {
    label: "How to connect to eduroam in Mac",
    href: "https://docs.google.com/document/d/11uBPOQC-9HvU-i8Rtk6IxPGm-xtw0qPNwAR0S39-K5A/edit?usp=sharing",
  },
  {
    label: "How to connect to eduroam in Android",
    href: "https://docs.google.com/document/d/1rtLMDm4XfYCFSsbcJVR6N3v3CPo13VsWElRLSegEyeU/edit?usp=sharing",
  },
];

const iithWifiGuides = [
  {
    label: "How to connect to IITH Wi-Fi in Windows 7",
    href: "https://docs.google.com/document/d/e/2PACX-1vTa1ma_e1302eUtnkpBkKoEec9hJm5rsm0emTUyd70xXPSYNWT-Itg8l_uozLRfQ0babt1eddnFd3Ga/pub",
  },
  {
    label: "How to connect to IITH Wi-Fi in Windows 8 & 10",
    href: "https://docs.google.com/document/d/e/2PACX-1vT4Z9iVyrcJ2AF5Gq4uuKKa_ZxPEVnrFZndNsR9NNBsat0AAI70RAvJNZZjnPABaCCsanrrzJMjTCsN/pub",
  },
  {
    label: "How to connect to IITH Wi-Fi in Ubuntu",
    href: "https://docs.google.com/document/u/3/d/e/2PACX-1vQ55Svbb8CZ8L0GXpDUwhXL4lK9x2zCXUK1fnLyswzpgwMHGWEInaN3asfeCYWtyh4MbsjEYewWGg2u/pub",
  },
  {
    label: "How to connect to IITH Wi-Fi on Android Devices",
    href: "https://docs.google.com/document/d/e/2PACX-1vR4xhOXfwFy8eIhZps30BObDXy3WpNpNfhnEUo6qFRmf0lZz9GHQn-RM6TocYbYHxtEuyrlZt7wEDGm/pub",
  },
  {
    label: "How to reset your Wi-Fi password",
    href: "https://docs.google.com/document/d/e/2PACX-1vSu3BlxzjBGtjPLMAUxAt0JyhNEiOh8Qr2A4MnC60R9q9Ki9n1gGfW4Wf4voS2aASRN7d30wyBLtnAU/pub",
  },
];

const guestWifiGuides = [
  {
    label: "How to connect to IITH Guest Wi-Fi in Windows",
    href: "https://docs.google.com/document/d/e/2PACX-1vQbTDfnroWwehil_-DeZFKv2Y5HlURG5tlKzdBXFmx0wNFVDUi3PXY1Kbmy_hxTAXSpw4GLlV0ThTbe/pub",
  },
  {
    label: "How to connect to IITH Guest Wi-Fi on Mac OS",
    href: "https://docs.google.com/document/d/e/2PACX-1vRKnUfBrAtZGVmbtp-009wQgR6_j6SwcJnvn1Dzq_IU_9SicWhkY_nvI6ELOgQLdPNK_HLUCZceRSdt/pub",
  },
];

const linkClass = "text-[#D2691E] underline hover:text-[#8B5E3C]";

const iithNetworkSettings = [
  ["EAP method", "PEAP"],
  ["Phase 2 authentication", "MSCHAPv2"],
  [
    "Identity",
    <>
      Your WiFi username (
      <a
        href="https://support.comp.iith.ac.in/scp/categories.php?id=24"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        What is my WiFi username?
      </a>
      )
    </>,
  ],
  [
    "Password",
    <>
      Your valid, unexpired WiFi password. If it has expired, reset it at{" "}
      <a
        href="https://reset.iith.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
      >
        reset.iith.ac.in
      </a>
    </>,
  ],
  ["CA certificate", "ISRG X1 Root"],
  ["Online certificate status", "Don't validate"],
  ["Domain", "iith.ac.in"],
  ["Advanced options → Privacy", "Use phone MAC (not randomized MAC)"],
  ["IP settings", "DHCP"],
];

// Card that expands in place with a +/- toggle
const ExpandableSection = ({ id, title, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border border-[#D4AF37] rounded-xl overflow-hidden ${
        open ? "bg-[#FDFBF7]" : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
        className="w-full min-h-[44px] flex items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 text-left text-sm sm:text-base font-medium text-[#4A3728] hover:bg-[#FDFBF7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
      >
        <span className="min-w-0 break-words">{title}</span>
        {open ? (
          <Minus size={18} className="text-[#8B5E3C] shrink-0" />
        ) : (
          <Plus size={18} className="text-[#8B5E3C] shrink-0" />
        )}
      </button>

      {open && (
        <div
          id={id}
          className="px-3 sm:px-5 md:px-6 pt-4 pb-5 text-sm sm:text-base text-gray-600 border-t border-[#D4AF37]/40 break-words"
        >
          {children}
        </div>
      )}
    </div>
  );
};

const GuideLinks = ({ guides }) => (
  <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
    {guides.map((g) => (
      <li key={g.label}>
        <a
          href={g.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D2691E] underline hover:text-[#8B5E3C]"
        >
          {g.label}
        </a>
      </li>
    ))}
  </ul>
);

const WifiPage = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">

      <button 
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">

        {/* Back Button */}
        

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-6">
          WiFi in IITH Campus
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          The Network Operations Center provides WiFi connectivity across
          academic blocks, hostels, guest house, dining hall, and PSH
          (Kapila Block) in IIT Hyderabad.
        </p>

        {/* WiFi Networks */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          Available WiFi Networks
        </h2>

        <ul className="list-decimal pl-6 space-y-4 text-gray-600 mb-10">

          <li>
            <strong>IITH</strong> – For all IITH members (Faculty, Students,
            Permanent Staff, Project Staff, Interns).
          </li>

          <li>
            <strong>IITH-Guest WiFi</strong> – For guests visiting IIT Hyderabad.
          </li>

          <li>
            <strong>Eduroam WiFi</strong> – For users who already have an
            Eduroam account.
          </li>

        </ul>

        {/* Account Info */}
        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">
          WiFi Account Information
        </h2>

        <p className="text-gray-600 mb-6">
          A WiFi account is automatically created for every IITH member.
          This account is used to connect to both <strong>IITH</strong> and
          <strong> Eduroam</strong> networks.
        </p>

        <p className="text-gray-600 mb-8">
          The WiFi username will be the same as the username field in your
          IITH email ID.
        </p>

        {/* Password Reset */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-10">

          <h3 className="font-bold text-[#8B5E3C] mb-3">
            Reset WiFi Password
          </h3>

          <p className="text-gray-600 mb-4">
            If you need to reset your WiFi password, please use the official
            password reset portal.
          </p>

          <a
            href="https://reset.iith.ac.in/ad/index.php"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#8B5E3C] text-white px-6 py-3 rounded-xl hover:bg-[#D2691E] transition"
          >
            Reset WiFi Password
          </a>

        </div>

        {/* Troubleshooting Links */}

        <h2 className="text-2xl font-bold text-[#8B5E3C] mb-6">
          Setup & Troubleshooting
        </h2>

        <div className="flex flex-col gap-3 sm:gap-4">

          <ExpandableSection id="iith-wifi-section" title="How to connect to IITH WiFi">
            <p className="leading-relaxed mb-3">
              IITH Wi-Fi is available across the campus in all academic
              blocks and common areas such as the dining hall and dispensary.
            </p>
            <p className="leading-relaxed mb-4">
              Connect to IITH Wi-Fi for high-speed, stable connectivity and
              access to IITH services.
            </p>
            <GuideLinks guides={iithWifiGuides} />
          </ExpandableSection>

          <ExpandableSection id="guest-wifi-section" title="How to connect to IITH Guest WiFi">
            <p className="leading-relaxed mb-3">
              All guests visiting IIT Hyderabad can use the password-protected
              <strong> IITH-Guest</strong> WiFi network.
            </p>
            <p className="leading-relaxed mb-4">
              IITH-Guest WiFi is available across the campus, including all
              academic blocks, the Guesthouse, and common areas such as the
              dining hall and dispensary.
            </p>
            <GuideLinks guides={guestWifiGuides} />
          </ExpandableSection>

          <ExpandableSection id="eduroam-section" title="How to connect to Eduroam WiFi">
                <p className="leading-relaxed mb-4">
                  <strong>Eduroam</strong> (
                  <a
                    href="https://www.eduroam.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D2691E] underline"
                  >
                    https://www.eduroam.org/
                  </a>
                  ) is a worldwide Internet access service developed for the
                  international research and education community. With IITH's
                  participation in Eduroam, faculty, students, researchers, and
                  staff can obtain Internet connectivity on their personal
                  devices when visiting other Eduroam participating institutions
                  around the world.
                </p>

                <GuideLinks guides={eduroamGuides} />

                <p className="text-sm bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <strong>Note:</strong> Credentials of IITH WiFi and Eduroam
                  WiFi are the same.
                </p>
          </ExpandableSection>

          <ExpandableSection id="domain-cert-section" title="Domain Name and Certificate Issues">
            <p className="leading-relaxed mb-4">
              On newer <strong>Google Pixel, Moto G and OnePlus</strong> phones,
              entering a domain name is mandatory because certificate
              validation is required. To connect, install the
              <strong> ISRG X1 Root</strong> certificate and then configure the
              IITH network as shown below.
            </p>

            <h3 className="font-bold text-[#8B5E3C] mb-3">
              Step 1: Install the root certificate
            </h3>
            <ol className="list-decimal pl-5 sm:pl-6 space-y-2 mb-6">
              <li>
                Download the root certificate{" "}
                <a
                  href="https://drive.google.com/file/d/11MbH2JA9fyRkb3CfjRdnHk0qGMVtnCAu/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D2691E] underline hover:text-[#8B5E3C]"
                >
                  ISRGROOTX1
                </a>{" "}
                (<code className="text-sm bg-white border rounded px-1">isrgrootx1.pem</code>)
                to your phone and note the download location. The file must end
                in <strong>.pem</strong> or <strong>.crt</strong>, not
                <strong> .txt</strong> or <strong>.pem.txt</strong>.
              </li>
              <li>
                Open <strong>Settings</strong> and search for
                <strong> Install a certificate</strong>.
              </li>
              <li>
                Choose <strong>WiFi certificate</strong>. If prompted, tap
                <strong> Install anyway</strong>, then select the downloaded
                file. If the file isn't listed, rename its extension to
                <strong> .pem</strong> or <strong>.crt</strong>.
              </li>
              <li>
                When asked for a name, enter <strong>ISRG X1 Root</strong> and
                save.
              </li>
            </ol>

            <h3 className="font-bold text-[#8B5E3C] mb-3">
              Step 2: Configure the IITH network
            </h3>
            <p className="mb-3">
              In WiFi settings, tap the <strong>IITH</strong> network and set:
            </p>
            <dl className="border border-[#D4AF37]/50 rounded-lg overflow-hidden mb-4 bg-white">
              {iithNetworkSettings.map(([name, value]) => (
                <div
                  key={name}
                  className="grid grid-cols-1 sm:grid-cols-[minmax(0,14rem)_1fr] gap-x-4 gap-y-1 px-3 sm:px-4 py-2.5 border-b border-[#D4AF37]/30 last:border-b-0"
                >
                  <dt className="font-semibold text-[#4A3728]">{name}</dt>
                  <dd className="min-w-0">{value}</dd>
                </div>
              ))}
            </dl>
            <p>
              Tap <strong>Connect</strong>.
            </p>
          </ExpandableSection>

        </div>

        {/* Important Notes */}

        <div className="bg-gray-50 border rounded-xl p-6 mt-12">

          <h3 className="font-bold mb-3">Important Notes</h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-600">

            <li>
              IP and DNS settings on devices should be set to
              <strong> Dynamic / Automatic</strong>.
            </li>

            <li>
              Proxy settings should only be used when accessing
              library journal resources.
            </li>

            <li>
              LAN connectivity is available in hostels and staff housing.
              Personal WiFi routers are not supported by the Computer Centre.
            </li>

          </ul>

        </div>

        {/* WiFi Help Section */}
        <h2 className="text-xl md:text-2xl font-bold text-[#8B5E3C] mt-10 mb-4">
          Need Assistance with Wi-Fi?
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          If you are experiencing issues connecting to the IIT Hyderabad Wi-Fi
          network, please check your device Wi-Fi settings and ensure you are
          using the correct network credentials. If the issue continues,
          contact the Computer Centre support team.
        </p>

        <a
          href="https://support.comp.iith.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#8B5E3C] text-white px-5 py-2 rounded-lg hover:bg-[#D2691E] transition"
        >
          Raise a Wi-Fi Support Ticket
        </a>

      </div>

    </main>
  );
};

export default WifiPage;