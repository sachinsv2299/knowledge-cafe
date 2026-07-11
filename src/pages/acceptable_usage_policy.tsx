import React from "react";
import { ArrowLeft } from "lucide-react";

const AcceptableUsagePolicy = ({ navigateTo, goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} /> BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white p-6 md:p-14 rounded-3xl md:rounded-[2.5rem] border border-[#D4AF37] shadow-sm">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4A3728] mb-10 border-b border-[#D4AF37]/30 pb-6">
          Acceptable Usage Policy
        </h1>

        <div className="space-y-10">
          {/* Preamble */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Preamble</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Indian Institute of Technology Hyderabad (IITH) is India's premier institute for advanced scientific and technological research and education. The IITH community comprises students, faculty members, and non-teaching staff members. Members of this community use the Institute's IT resources over the campus network. The campus network is connected to the Internet via leased lines from several Internet Service Providers (ISPs). In this way, email and other IT services are made available across the campus to all users, even from remote locations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The purpose of this Acceptable Usage Policy (AUP) is to define acceptable practices for the use of the Institute's IT resources, including networks, systems, software, and equipment. These resources are provided to support the academic, research, and administrative activities of the institute. Security, including Confidentiality, Integrity, and Availability, of the Institute's information and information systems, along with compliance to legal regulations, is of paramount importance. Security incidents or compromises at any single point, such as an individual device or account, can jeopardize the security of the entire network and its resources. Hence, it is crucial that all users who use the Institute's IT resources must understand their responsibilities to protect the Institute's operations, research data, intellectual property, and reputation.
            </p>
          </section>

          {/* Scope */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Scope</h2>
            <p className="text-gray-600 leading-relaxed">
              This policy applies to all users of the Institute's IT resources, including faculty, students, researchers, staff, contractors, affiliates, and external users with authorized access. It covers all devices, whether owned by the institute or otherwise, that are used to access the Institute's IT resources.
            </p>
          </section>

          {/* 1 General Guidelines */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">1 General Guidelines</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.1</strong> The IITH community should be aware that the use of Institute IT resources is subject to applicable Indian laws, including the Information Technology Act, 2000. Certain acts involving misuse of IT resources may constitute offenses under national law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.2</strong> The IITH campus network and internet access resources are meant for official use arising from the academic activities and administrative responsibilities of the faculty, staff, and students of the Institute. Reasonable personal use is permissible so long as the activity is not illegal, complies with all other provisions of this policy and the Information Security Policy of the Institute, does not conflict with academic needs or expectations, and does not result in added cost and/or security breach to the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.3</strong> The IITH community should view the network resources with a sense of ownership and participation, and should actively help to prevent and to interdict any misuse. Procedures laid down, from time to time, regarding the management of network resources must be understood and followed meticulously by the user community.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.4</strong> The Institute prioritizes the security and integrity of its network. To this end, IITH employs automated security monitoring and logging tools (such as IDS, firewalls, and IPS) to ensure compliance and protect against threats, while routinely respecting user privacy. However, in the event of a detected security incident, breach, or a requirement to assist law enforcement, the Institute reserves the right to conduct a detailed forensic analysis, which may temporarily limit the expected privacy of the affected data. Any such deep analysis or access to private data will only be initiated after approval from a competent authority (Dean (DT), Chair CC, and CISO), in accordance with the Indian IT Act 2000.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.5</strong> Use strong passwords and multi-factor authentication (wherever available) to access systems and applications. Sharing of credentials with others is strictly prohibited. Any action performed using a user's account shall be deemed to have been carried out by the account holder and shall be the sole responsibility of that user, regardless of whether the credentials were shared intentionally or unintentionally.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.6</strong> All data must be handled in accordance with the Institute's Information Classification standards, as defined in the Information Security Policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.7</strong> Users are expected to comply with all applicable laws, regulations, and Institute policies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">1.8</strong> Guest Wi-Fi accounts are available with the department offices, and can be allocated to department guests after approval from the competent authority in the department.
              </p>
            </div>
          </section>

          {/* 2 Network Usage */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">2 Network Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.1</strong> The IITH campus network and Internet access shall be used exclusively for academic, research, administrative, and other Institute-approved purposes. Use of the network for commercial activities, personal advertisements (which are commercial in nature), solicitations, or promotions including hosting of commercial websites or broadcasting of commercial messages or emails to the IITH community is prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.2</strong> Non-IITH organizations, including commercial establishments operating on the IITH campus, shall not be connected to the IITH campus network and shall not be part of the IITH domain unless explicitly approved by the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.3</strong> Users shall not engage in activities that disrupt, degrade, or interfere with network services or performance. Excessive or abusive consumption of network resources, including high-bandwidth activities, is prohibited. Downloading or streaming of audio, video, or other large files shall be carried out responsibly and in accordance with Institute guidelines.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.4</strong> Use of the TOR (The Onion Router) network, torrent services, or any similar peer-to-peer (P2P), VPN, proxy, anonymization, or circumvention technologies for downloading or uploading content is strictly prohibited. However, exceptions may be granted for specific, legitimate purposes when required. For this, the concerned user needs to raise a ticket on the support portal of the Computer Center.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.5</strong> Accessing, hosting, transmitting, or distributing content that is unlawful, banned by applicable laws, offensive, obscene, defamatory, harassing, or that infringes intellectual property or copyright is prohibited. Such activities may constitute offenses under the Indian Information Technology Act, 2000, and other applicable laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.6</strong> Use of the IITH network to tamper with information on other systems, deliberately spread malware or other harmful programs, gain unauthorized access, compromise systems, or cause any kind of damage is strictly prohibited. Such acts are offenses under the Indian Information Technology Act, 2000. Users shall be personally liable for any civil damages caused and may also be subject to criminal prosecution under applicable laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.7</strong> Departments or units intending to establish their own Internet access facilities or network services shall obtain prior approval from and coordinate with the IITH CC Team to ensure that such deployments do not compromise the security, integrity, or performance of the campus network.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">2.8</strong> The Institute reserves the right to monitor, restrict, suspend, or disconnect network access for any user, system, or service found to violate this Policy or to pose a risk to network security or availability.
              </p>
            </div>
          </section>

          {/* 3 Email Usage */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">3 Email Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.1</strong> Institute-provided email services shall be used primarily for official academic, administrative, and research-related purposes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.2</strong> Since email storage accumulates over time and is subject to quota limits, users shall regularly review and clean their mailboxes to prevent storage overflows and disruptions to email services. Accounts that exceed the prescribed storage quota may be temporarily restricted or suspended until the user reduces usage to within the allotted limit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.3</strong> Use of the Institute's email services for sending fraudulent, misleading, threatening, anonymous, obscene, or harassing messages is strictly prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.4</strong> Mass emails or messages addressed to large groups, mailing lists, or the entire Institute community shall be sent only through officially authorized channels and with prior approval from the competent authority. Spam, chain emails, unsolicited messages, and bulk commercial communications are prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.5</strong> Confidential, sensitive, or restricted information shall be transmitted only using encryption or other Institute-approved secure communication mechanisms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.6</strong> Users shall not automatically forward Institute email to non-official or personal email services unless explicitly authorized by the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.7</strong> Users must exercise caution when opening email attachments, clicking on links, or responding to messages, and shall verify the authenticity of the sender and content to prevent phishing, malware, or social engineering attacks.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.8</strong> Users shall not use Institute email accounts for personal, commercial activities, political campaigning, or activities unrelated to Institute functions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.9</strong> Email accounts and credentials shall not be shared, and users shall ensure the confidentiality of their email passwords and multi-factor authentication mechanisms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.10</strong> Users must promptly report suspected phishing emails, malware attachments, spoofed messages, or email security incidents to the IITH Computer Centre (CC) or the designated information security team.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.11</strong> The Institute reserves the right to monitor, filter, block, or quarantine emails in accordance with applicable laws and Institute policies to ensure security, availability, and compliance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">3.12</strong> Email communications may be subject to retention, archival, and disclosure requirements as per Institute policies and applicable legal and regulatory obligations.
              </p>
            </div>
          </section>

          {/* 4 Software Usage */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">4 Software Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.1</strong> Software programs are protected by copyright laws and may be used only in accordance with their applicable license terms. Users shall ensure that any software installed or used on systems under their responsibility is either properly licensed commercially or legitimately available under a public, free, or open-source license.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.2</strong> Installation, use, storage, transmission, or exchange of pirated, unauthorized, or unlicensed software or files on the IITH network or systems is strictly prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.3</strong> Downloading, copying, distributing, or using software that is not in the public domain, not free/open-source, or not covered by a valid commercial license is prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.4</strong> Members of the IITH community shall respect the intellectual property and proprietary rights of others and shall not misuse or infringe upon copyrights, trademarks, trade secrets, logos, or other protected material. IITH supports the rights of copyright holders and does not tolerate deliberate or negligent copyright infringement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.5</strong> Users shall use only licensed versions of software on IITH-owned systems and ensure that valid licenses are maintained for all installed software. Software installations shall be performed only from official, vendor-approved, or platform-owner-approved sources.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.6</strong> Unauthorized copying, digitization, distribution, or installation of copyrighted material, including software, is prohibited, whether for internal or external use.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.7</strong> Users shall not provide, share, or distribute Institute-licensed software or applications to external individuals or entities, including visitors, external students, collaborators, companies, or service users, unless explicitly permitted by the license and approved by the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.8</strong> Users shall not export or transfer software, technical information, encryption tools, or technology in violation of applicable national, regional, or international export control laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.9</strong> Any suspected or detected use of unlicensed or unauthorized software must be reported immediately to the IITH Computer Centre (CC) Team. Users must not condone or ignore illegal software usage under any circumstances.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.10</strong> Users requiring software licenses for academic, research, or administrative purposes shall coordinate with the IITH CC Team for procurement, installation, and license management.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.11</strong> Any user found in violation of this Policy shall be held personally accountable and may be liable for penalties, expenses, losses, or damages incurred by the Institute due to such action or negligence, in addition to disciplinary action as per Institute rules.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.12</strong> The Institute reserves the right to audit systems connected to the IITH network for software license compliance and to remove or disable any unauthorized or non-compliant software without prior notice.
              </p>
            </div>
          </section>

          {/* 5 System Protection */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">5 System Protection</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.1</strong> Users are responsible for and accountable for all usage of the computer systems, devices, and accounts allocated to them by the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.2</strong> Users shall take appropriate measures to prevent misuse of the Institute network originating from systems under their control or responsibility.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.3</strong> Reasonable care must be taken to minimize the security vulnerabilities of systems connected to the campus network. Users shall ensure timely installation of operating system updates, security patches, service packs, antivirus software, and other Institute-recommended endpoint protection and client security solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.4</strong> Users shall not intentionally disable, bypass, or interfere with security controls implemented by the Institute, including antivirus software, firewalls, endpoint protection agents, or monitoring mechanisms, unless explicitly approved by the authority.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.5</strong> Systems connected to the IITH network must comply with minimum security configuration standards prescribed by the IITH Computer Centre (CC) or designated authority.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.6</strong> Users must immediately report any suspected security incident, malware infection, unauthorized access, or abnormal system behavior to the IITH CC Team or the designated incident response authority (CISO).
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.7</strong> Users shall ensure that systems are secured against unauthorized physical and logical access, including use of strong passwords, screen locks, and encryption where applicable.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.8</strong> The IITH CC Team reserves the right to scan, monitor, quarantine, or disconnect any system from the campus network if it is found to be compromised, misconfigured, or posing a risk to network security.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.9</strong> Users are responsible for backing up their data in accordance with Institute guidelines and shall not rely solely on local system storage for critical or sensitive information.
              </p>
            </div>
          </section>

          {/* 6 Hosting Information on the IITH Network */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">6 Hosting Information on the IITH Network</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.1</strong> Hosting of websites, web applications, or online services on systems connected to the IITH campus network shall require prior approval from the competent authority of the concerned department or unit.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.2</strong> Any website or service hosted on the campus network shall be linked to the IITH domain only after explicit approval from the competent authority and in coordination with the IITH Computer Centre (CC) Team.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.3</strong> Hosting of websites or services that contain offensive, obscene, defamatory, illegal, or otherwise objectionable material is strictly prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.4</strong> Allocation of a domain name for any system connected to the campus network shall require approval from the competent authority of the concerned department, following which the IITH CC Team shall assign the appropriate domain name.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.5</strong> The owner or administrator of a hosted website or service shall be responsible for its content, security, maintenance, and compliance with applicable Institute policies, laws, and regulations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.6</strong> All hosted websites and services must adhere to the Institute's information security standards, including the timely application of security patches, the use of strong authentication mechanisms, and protection against common web vulnerabilities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.7</strong> Hosting of services that may adversely impact network performance, compromise network security, or interfere with other campus services (e.g., open proxies, unauthorized VPNs, cryptocurrency mining, or scanning tools) is prohibited.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.8</strong> The IITH CC Team reserves the right to audit, monitor, suspend, or disconnect any hosted website or service found to be non-compliant with this policy, pose a security risk, or operate without proper authorization.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.9</strong> Any significant change to the hosted content, functionality, or purpose of a website or service shall require prior notification to, and approval from, the competent authority and the IITH CC Team.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">6.10</strong> Hosting of commercial services or revenue-generating platforms on the IITH network is prohibited unless explicitly approved by the Institute.
              </p>
            </div>
          </section>

          {/* 7 Social Media Usage */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">7 Social Media Usage</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">7.1</strong> Only individuals formally authorized by the Institute may represent IITH in an official capacity on social media platforms or public forums.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">7.2</strong> Personal use of social media by members of the IITH community shall not interfere with professional or academic responsibilities, nor harm the reputation of the Institute.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">7.3</strong> Content shared through official or personal social media accounts shall not disclose or disseminate any sensitive, confidential, or proprietary information related to the Institute, its activities, or its personnel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">7.4</strong> Members of the IITH community are prohibited from posting, sharing, or endorsing content on social media that is defamatory, obscene, pornographic, harassing, discriminatory, or otherwise violates the rights, dignity, or privacy of individuals, or contributes to a hostile or unfriendly campus environment.
              </p>
            </div>
          </section>

          {/* 8 Appropriate Use of Electronic Information Resources */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">8 Appropriate Use of Electronic Information Resources</h2>
            <p className="text-gray-600 leading-relaxed">
              The Institute has acquired access to several commercial information resources, including citation databases, electronic journals, e-books, and journal archives, which are accessible through the campus network. In addition, the Institute subscribes to multiple such resources available over the Internet. These resources are of significant value to the academic community and are governed by specific contractual and licensing obligations. Users are responsible for reading, understanding, and complying with the applicable terms and conditions while accessing these resources over the network. Relevant policies and usage instructions are available on the Institute Library website at <em>https://library.iith.ac.in/library-rules/</em>.
            </p>
          </section>

          {/* 9 Compliance and Disciplinary Actions */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">9 Compliance and Disciplinary Actions</h2>
            <p className="text-gray-600 leading-relaxed">
              Members of the IITH community are expected to be aware of the contents of this Policy and agree to abide by its provisions. This Policy shall be publicly available on the IITH website, and all individuals who use the IITH network and information resources shall be informed of its applicability. Any violation of this Policy shall be reviewed by the Information Security Steering Committee, which will recommend appropriate disciplinary or corrective action in accordance with Institute rules and regulations.
            </p>
          </section>

          {/* 10 Clarifications */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">10 Clarifications</h2>
            <p className="text-gray-600 leading-relaxed">
              For any clarifications regarding the interpretation, applicability, or implementation of this Information Security Policy, users shall contact the Chief Information Security Officer (CISO) at <em>ciso@iith.ac.in</em>. The CISO is the designated authority for providing guidance and resolving queries related to this policy.
            </p>
          </section>

          {/* 11 Review and Maintenance */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">11 Review and Maintenance</h2>
            <p className="text-gray-600 leading-relaxed">
              This policy shall be reviewed annually or upon significant changes in technology, regulatory requirements, or institutional needs.
            </p>
          </section>

          {/* Final Approval Section */}
          <section className="pt-10 mt-10 border-t border-[#D4AF37]/30">
            <h3 className="text-xl font-bold text-[#4A3728] mb-8">Final Approval</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              <div className="text-sm text-gray-700">
                <p className="font-bold">Prof. B. S. Murty</p>
                <p>Director</p>
                <p>IIT Hyderabad</p>
              </div>

              <div className="text-sm text-gray-700">
                <p className="font-bold">Prof. Bheemarjuna Reddy Tamma</p>
                <p>Dean Digital Transformation</p>
                <p>IIT Hyderabad</p>
              </div>

              <div className="text-sm text-gray-700">
                <p className="font-bold">Prof. Sathya Peri</p>
                <p>Chair Computer Center</p>
                <p>IIT Hyderabad</p>
              </div>

              <div className="text-sm text-gray-700">
                <p className="font-bold">Prof. Saurabh Kumar</p>
                <p>CISO</p>
                <p>IIT Hyderabad</p>
              </div>

            </div>
            
            <p className="text-sm text-gray-500 mt-8 italic">Date: Apr 28 2026 16:53 IST</p>
            <p className="text-sm text-gray-500 mt-2 italic">
              Note: This policy document has been duly approved by the competent authority. Please <a href="https://intranet.iith.ac.in/chrome/site/files/others/acceptable_usage_policy_2026.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">click here</a> to refer to the document.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default AcceptableUsagePolicy;