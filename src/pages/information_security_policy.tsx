import React from "react";
import { ArrowLeft } from "lucide-react";

const InformationSecurityPolicy = ({ navigateTo, goBack }) => {
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
          Information Security Policy
        </h1>

        <div className="space-y-10">
          {/* 1 Objective */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">1 Objective</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              As a premier institution of national importance, the Indian Institute of Technology Hyderabad (IITH) is committed to protecting the Confidentiality, Integrity, and Availability (CIA) of its information assets. The objective of this Information Security Policy is to establish a comprehensive framework of principles, responsibilities, and controls to safeguard IITH's information assets against all forms of threats whether internal or external, intentional or unintentional.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This policy aims to ensure the secure use, storage, processing, and transmission of information in support of IITH's academic, research, administrative, and operational activities, while complying with applicable legal, regulatory, and governmental requirements.
            </p>
          </section>

          {/* 2 Supporting Policies */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">2 Supporting Policies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Information Security Policy shall be read in conjunction with, and is supported by, the following institutional policies and documents:
            </p>
            <ul className="list-[upper-roman] pl-8 space-y-2 text-gray-600 mb-4 font-medium">
              <li>Acceptable Use Policy (AUP)</li>
              <li>Cyber Crisis Management Plan (Under preparation)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              These supporting documents collectively define acceptable behavior, operational procedures, and response mechanisms necessary for effective implementation of information security controls at IITH.
            </p>
          </section>

          {/* 3 Scope */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">3 Scope</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              This Information Security Policy applies to all faculty, staff, students, researchers, interns, contractual personnel, consultants, service providers, and any other individuals or entities who are authorized to access the information resources of the IITH.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The policy covers all information assets, irrespective of form or medium, including but not limited to electronic, digital, paper-based, verbal, or any other format, and applies to all systems, networks, applications, devices, and infrastructure that store, process, transmit, or manage such information.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This policy shall be communicated to all existing and new users of IITH information resources and shall be published on the Institute's official website or intranet. All users are required to familiarize themselves with this policy and comply with its provisions as a condition of access to IITH information resources.
            </p>
          </section>

          {/* 4 Definitions */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">4 Definitions</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.1 Information Asset:</strong> Any data, information, application, system, service, infrastructure, or resource whether digital, physical, or logical that has value to the IITH and is essential for supporting its academic, research, administrative, and operational activities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.2 Confidentiality:</strong> Ensuring that information is accessible only by those authorised to have access.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.3 Integrity:</strong> Ensuring the accuracy, completeness, consistency, and reliability of information and protecting it against unauthorised or improper modification or destruction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">4.4 Availability:</strong> Ensuring that information and resources are accessible to authorised users whenever needed.
              </p>
            </div>
          </section>

          {/* 5 Roles and Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">5 Roles and Responsibilities</h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">5.1 Director:</strong> The Director of the Institute shall provide overall leadership and oversight for information security at IITH and shall be responsible for reviewing and approving the Information Security Policy and any subsequent major revisions.
              </p>
              
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.2 Chief Information Security Officer (CISO):</strong> The Chief Information Security Officer (CISO) shall be the nodal authority for information security at the Institute and shall be responsible for:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Developing, implementing, maintaining, and enforcing the Information Security Policy and associated standards, guidelines, and procedures</li>
                  <li>Driving the cybersecurity strategy and roadmap for the Institute</li>
                  <li>Identifying opportunities for continuous improvement of the information security program</li>
                  <li>Leading information security awareness, training, and capacity-building initiatives</li>
                  <li>Monitoring the Institute's information security posture and risks</li>
                  <li>Escalating significant information security risks, incidents, or non-compliance issues to the Information Security Steering Committee and, where required, to senior management</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.3 Computer Center (CC):</strong> The Computer Center (CC) shall be responsible for the operation, management, and security of the Institute's centrally managed IT infrastructure, including but not limited to:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Servers, networks, storage, and data center</li>
                  <li>Applications, platforms, and cloud services</li>
                  <li>End-user devices such as desktops, laptops, and other computing resources</li>
                  <li>The CC shall implement and operate technical and operational security controls in accordance with this policy and as prescribed by the CISO.</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.4 Information Security Governance Board:</strong> The Director shall establish and chair an Information Security Governance Board to provide strategic oversight of the Institute's information security program.
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>The Board shall comprise the Dean (Administration), Dean (Digital Transformation), Registrar, Chair of the Computer Center, with the CISO serving as the Convenor.</li>
                  <li>The Board shall meet at least once a year, or as required.</li>
                  <li>The Board shall approve and amend this policy as necessary, and give guidance on information security initiatives to be implemented</li>
                  <li>The Board shall review the overall security posture and significant risk matters</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.5 Information Security Steering Committee:</strong> The Director shall constitute an Information Security Steering Committee to support the operationalization and implementation of the Information Security Policy. The responsibilities of the Committee shall include:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-2">
                  <li>Supporting and monitoring policy implementation across the Institute</li>
                  <li>Reviewing, addressing, and resolving concerns related to policy objectives, expectations, and enforcement</li>
                  <li>Facilitating coordination between academic, administrative, and technical stakeholders</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-2">The Committee shall be chaired by the Dean (Digital Transformation) and shall include:</p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Deans (Administration, Faculty, Academics, Students)</li>
                  <li>Heads of all Departments and Schools</li>
                  <li>Chair of the Computer Center</li>
                  <li>CISO as the Convenor</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.6 Heads of the Departments, Sections, and Schools:</strong> They shall be responsible for:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Ensuring implementation and enforcement of this policy within their respective departments/schools and administrative sections</li>
                  <li>Acting as the Single Point of Contact (SPOC) for the CISO on departmental information security matters.</li>
                  <li>Supporting awareness and compliance initiatives within the department/school/section.</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.7 Data Owners:</strong> Individuals or departments with administrative or functional control over specific information assets shall be designated as Data Owners. The Data Owners shall be responsible for:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Ensuring the appropriate classification of data under their control</li>
                  <li>Ensuring that data is protected in accordance with its classification</li>
                  <li>Identifying, owning, and facilitating remediation of risks and vulnerabilities related to their information assets</li>
                  <li>Coordinating with the CISO and System Administrators on security requirements</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.8 System Administrators:</strong> System Administrators are individuals responsible for the configuration, operation, and maintenance of information systems.
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-2">
                  <li>For centrally managed systems, System Administrators shall be from the Computer Center, working in coordination with the relevant Data Owners.</li>
                  <li>For department-managed systems, System Administrators shall be nominated by the respective Data Owners</li>
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  System Administrators shall ensure that systems under their control comply with the minimum security baseline and technical standards defined by the CISO.
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">5.9 Users:</strong> All users of IITH information systems shall be responsible for:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Complying with this Information Security Policy and related policies</li>
                  <li>Protecting the confidentiality and integrity of information they access or handle</li>
                  <li>Using information resources responsibly and for authorized purposes only</li>
                  <li>Promptly reporting actual or suspected information security incidents or weaknesses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 6 Information Classification */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">6 Information Classification</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              All information within the Institute must be classified according to its sensitivity and value. The classification levels are as follows.
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">6.1 Sensitive:</strong> Any information that contains one or more of the following will be deemed Sensitive.
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
                  <li>All Personally Identifiable Information (PII)</li>
                  <li>Government-issued identity details like Aadhaar, PAN, Driver's License, Passport, etc.</li>
                  <li>Financial information like bank account number, income tax details, etc.</li>
                  <li>Health information like medical records, disability status, etc.</li>
                  <li>Biometric information like fingerprints, iris scans, facial data, DNA information, etc.</li>
                  <li>Sensitive personal data like passwords</li>
                  <li>Sensitive unpublished research-related data</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  All information classified as Sensitive must be handled with extreme caution. Sharing this information with external parties, except when legally required, should only be done after securing an explicit non-disclosure agreement (NDA) that ensures due care in handling the data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any breach of such information would have serious consequences, including risk to the privacy of the individual(s), reputational damage, financial/commercial impact, regulatory risks, etc., and hence should be immediately reported to the CISO, who will in turn decide on reporting the breach to other internal and external agencies as necessary.
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">6.2 Confidential:</strong> Information that is not classified as Sensitive but is not intended to be shared widely either within or outside the Institute must be classified as Confidential. Examples of Confidential information include:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
                  <li>Personnel information that is not deemed Sensitive</li>
                  <li>Educational records</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sharing of confidential information with external parties, except when legally required, should only be done after securing an explicit NDA that ensures due care in handling the data.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Any breach of such information would have serious consequences, including risk to the privacy of the individual(s), reputational damage, financial/commercial impact, regulatory risks, etc and hence should be immediately reported to the CISO, who will in turn decide on reporting the breach to other internal and external agencies as necessary.
                </p>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">6.3 Internal:</strong> Information that is not classified as Sensitive or Confidential but is not intended to be shared outside the Institute must be classified as Internal. Examples of Internal information would include:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Academic information like grading rubrics, teaching data, attendance records, etc.</li>
                  <li>Administrative information like internal memos, minutes of meetings, internal emails, etc.</li>
                  <li>Unpublished research information</li>
                  <li>IT and infrastructure information like architecture diagrams, system specifications, incident logs, etc which are not posted on institute websites.</li>
                  <li>Information shared on campus bulletin, internal newsletters, etc which are not posted on the institute's websites.</li>
                </ul>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed">
                  <strong className="text-[#6A4A36]">6.4 Public:</strong> Information that can be freely shared with the public without any negative impact on the Institution. This could include faculty profiles, published research papers, etc, which are typically posted on institute websites and social media handles.
                </p>
              </div>
            </div>
          </section>

          {/* 7 Information Security Awareness */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">7 Information Security Awareness</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              All faculty, staff, students, researchers, interns, contractors, service providers, and any other individuals who are authorized to access the Institute's information resources shall undergo Information Security awareness training as prescribed by the Chief Information Security Officer (CISO).
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Such training shall include mandatory induction training and periodic refresher programs, the frequency and mode of which shall be determined by the Information Security Governance Board. The objective of these programs is to ensure continued awareness of information security risks, user responsibilities, applicable policies, and emerging threats.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Completion of the prescribed awareness training may be a prerequisite for continued access to the Institute's information resources.
            </p>
          </section>

          {/* 8 Data Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">8 Data Privacy and Protection of Personal Data</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The privacy and protection of personal information processed by the IITH shall be ensured in accordance with applicable laws, regulations, and governmental directives, including the Digital Personal Data Protection Act, 2023 (DPDP Act), and any amendments thereto.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Personal data shall be collected, processed, stored, shared, and retained only for lawful, specific, and legitimate institutional purposes, and to the extent necessary for such purposes.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              In compliance with the DPDP Act, the following principles shall be adhered to:
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.1 Lawful and Fair Processing:</strong> Personal data shall be processed only on a lawful basis, including consent of the Data Principal or other legitimate grounds as permitted under the DPDP Act.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.2 Consent and Notice:</strong> Wherever consent is required, it shall be obtained in a clear, specific, informed, and unambiguous manner. Data Principals shall be provided with appropriate notice regarding the purpose of data collection, the nature of data processed, and their rights under applicable law.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.3 Purpose Limitation and Data Minimization:</strong> Personal data shall be limited to what is necessary for the specified institutional purpose and shall not be processed in a manner incompatible with such purpose.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.4 Accuracy and Data Quality:</strong> Reasonable steps shall be taken to ensure that personal data is accurate, complete, and kept up to date, particularly where such data is used to make decisions affecting individuals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.5 Storage Limitation and Retention:</strong> Personal data shall be retained only for as long as necessary to fulfill the stated purpose or as required by law, after which it shall be securely deleted or anonymized.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.6 Security Safeguards:</strong> Appropriate administrative, technical, and physical safeguards shall be implemented to protect personal data against unauthorized access, disclosure, alteration, loss, or misuse, including safeguards proportionate to the sensitivity of the data.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.7 Data Sharing and Third Parties:</strong> Personal data shall not be shared with third parties except in accordance with applicable laws, institutional approvals, and contractual obligations, ensuring equivalent data protection standards.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.8 Rights of Data Principals:</strong> IITH shall respect and facilitate the rights of Data Principals as provided under the DPDP Act, including the right to access, correction, erasure, grievance redressal, and withdrawal of consent, subject to lawful exceptions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.9 Breach Reporting and Incident Management:</strong> Any suspected or confirmed personal data breach or data privacy-related incident shall be reported without undue delay to the Chief Information Security Officer (CISO) of IITH. Such incidents shall be addressed promptly, and necessary reporting, mitigation, and remedial actions shall be undertaken in accordance with applicable legal, regulatory, and institutional requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">8.10 Accountability and Governance:</strong> IITH shall establish appropriate governance mechanisms, including designation of responsible officers and grievance redressal mechanisms, to ensure compliance with data protection obligations.
              </p>
            </div>
          </section>

          {/* 9 Acceptable Use */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">9 Acceptable Use</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The Institute's Acceptable Use Policy (AUP) 'AUP-IITH-2026-01' defines the expected standards of behavior for all users of the Institute's information technology facilities and services. All users shall comply with the AUP, which specifies permissible and prohibited uses of the Institute's information resources.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Non-compliance with the Acceptable Use Policy may result in restriction or revocation of access to IT resources and may attract disciplinary or administrative action, in accordance with applicable Institute rules.
            </p>
          </section>

          {/* 10 IT Asset Management */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">10 IT Asset Management</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">10.1</strong> All Data Owners shall maintain awareness of the information assets under their control, including data, information systems, software, cloud services, hardware, and storage resources used for Institute activities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">10.2</strong> The CISO's team shall establish, maintain, and govern a Central IT Asset Register for the Institute, defining the required asset attributes, ownership details, and update procedures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">10.3</strong> Data Owners, or their formally designated delegates, shall be responsible for accurately recording, maintaining, and periodically updating information related to their assets in the Central IT Asset Register on an ongoing basis, or as required by the CISO.
              </p>
            </div>
          </section>

          {/* 11 Secure System Implementation */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">11 Secure System Implementation</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              When planning, designing, or deploying new information systems, Data Owners or their nominated System Administrators shall ensure that an information security risk assessment is conducted to identify potential threats, vulnerabilities, and impacts.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              The Computer Center (CC) shall perform a security review prior to the system going live to ensure compliance with the Institute's security standards, policies, and best practices. Data Owners or System Administrators shall notify the Computer Center as early as possible during system planning to:
            </p>
            <ul className="list-disc pl-8 space-y-2 text-gray-600 mb-4">
              <li>Identify and mitigate any information security risks associated with the system or changes to existing systems</li>
              <li>Ensure the system complies with the Institute's security policies, design standards, and regulatory requirements</li>
              <li>Promote efficient use of Institute resources and avoid duplication</li>
              <li>Evaluate and minimize the system's impact on existing IT systems, networks, and services</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              No information system shall be deployed or connected to the Institute's IT environment without completing the required security review and approval by the Computer Center and the CISO.
            </p>
          </section>

          {/* 12 Access Management */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">12 Access Management</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">12.1 Authentication:</strong> All users shall be authenticated before being granted access to any of the Institute's information systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">12.2 Multi-Factor Authentication (MFA):</strong> MFA shall be mandatory for accessing sensitive or critical systems, including but not limited to email, VPN, administrative portals, and other systems as deemed necessary by the CISO.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">12.3 Access Principles:</strong> Access to information systems and data shall be granted based on the principle of least privilege, ensuring that users are provided only the minimum access rights necessary to perform their assigned duties.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">12.4 Account Management:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>User accounts shall be created, modified, and revoked in accordance with defined procedures.</li>
                  <li>Access privileges shall be reviewed regularly by Data Owners and System Administrators to ensure appropriateness.</li>
                  <li>Inactive accounts shall be disabled after a defined period of inactivity and removed permanently after formal approval by the relevant authority.</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">12.5 Monitoring, Audit, and Logs:</strong> All user access activities may be monitored, logged, and audited using appropriate tools deployed on Institute IT systems to ensure compliance with this policy and to detect unauthorized or suspicious activity.
              </p>
            </div>
          </section>

          {/* 13 Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">13 Data Protection</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">13.1 Encryption:</strong> All sensitive or confidential data shall be encrypted both in transit and at rest using strong, industry-standard encryption algorithms approved by the CISO.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">13.2 Backups:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Regular backups shall be performed for all critical information and systems to ensure data availability and business continuity.</li>
                  <li>Backup data shall be encrypted and stored in secure, access-controlled locations, preferably with geographic or logical separation from primary systems.</li>
                  <li>Backup retention and restoration procedures shall be defined, tested periodically, and aligned with institutional operational requirements.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">13.3 Data Retention and Disposal:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Data shall be retained only as long as necessary to meet operational, legal, and regulatory requirements, in accordance with the Institute's Data Retention Policy.</li>
                  <li>Data that is no longer required shall be securely disposed of or destroyed to prevent unauthorized access or leakage, using approved methods for digital and physical records.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 14 Network Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">14 Network Security</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">14.1 Perimeter and Internal Protection:</strong> The Institute shall implement firewalls and other perimeter security controls to protect its networks from unauthorized access, malicious traffic, and external threats.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">14.2 Network Segmentation:</strong> Critical systems and sensitive information shall be isolated from less secure or public network segments through appropriate network segmentation, access controls, and zoning, minimizing exposure to threats and limiting lateral movement in the event of a compromise.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">14.3 Monitoring and Intrusion Detection:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Network traffic shall be continuously monitored for suspicious activities, anomalies, and potential security breaches.</li>
                  <li>Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) shall be deployed and maintained for critical networks and systems.</li>
                  <li>Alerts and events from IDS/IPS shall be reviewed by the Computer Center and escalated to the CISO as necessary.</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">14.4 Periodic Review and Updates:</strong> Network security controls, including firewall rules, segmentation policies, and monitoring configurations, shall be periodically reviewed and updated in accordance with emerging threats, business needs, and institutional risk assessments.
              </p>
            </div>
          </section>

          {/* 15 Information Security Incident Management */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">15 Information Security Incident Management</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">15.1 Reporting of Incidents:</strong> All users of the Institute's information systems shall promptly report any suspected or actual information security incidents, anomalies, or abnormal behavior to the Chief Information Security Officer (CISO) via email at <em>ciso@iith.ac.in</em> or through other approved reporting channels.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">15.2 Logging and Review:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>All reported incidents shall be logged in a central incident register maintained by the CISO or designated team.</li>
                  <li>Incident logs shall be periodically reviewed to detect trends, recurring issues, or systemic vulnerabilities that may indicate broader risks.</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">15.3 Containment and Mitigation:</strong> In the event of a suspected or confirmed information security breach, the CISO may, with or without consulting the relevant Data Owner or System Administrator, direct that any systems, accounts, or services believed to be compromised be temporarily or permanently isolated or disabled to contain the incident and prevent further damage.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">15.4 Incident Response Plans (IRPs):</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>The CISO shall develop and maintain formal Incident Response Plans (IRPs) for common or high-risk incident types.</li>
                  <li>These plans shall clearly define procedures for identifying, containing, eradicating, and recovering from incidents, including communication, escalation, and post-incident review.</li>
                  <li>IRPs shall be tested periodically through exercises or simulations to ensure effectiveness and preparedness.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">15.5 Roles and Responsibilities:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>The CISO shall coordinate and lead all incident management activities.</li>
                  <li>Data Owners and System Administrators shall provide necessary support and information to facilitate incident investigation and resolution.</li>
                  <li>Users shall cooperate fully and follow guidance issued during incident response activities.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 16 Third Party Risk Management */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">16 Third Party Risk Management</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">16.1 Security Obligations in Contracts:</strong> All contracts, agreements, or engagements with third parties, vendors, contractors, or service providers shall explicitly include obligations to maintain the confidentiality, integrity, and availability of the Institute's information and information systems accessed, processed, stored, or transmitted by the third party.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">16.2 Assessment and Monitoring:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>The CISO, in collaboration with the relevant Data Owner, shall assess the security posture of third parties prior to onboarding.</li>
                  <li>Ongoing monitoring or periodic review of third-party security practices shall be conducted for critical vendors or those handling sensitive or confidential information.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">16.3 Compliance and Enforcement:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Third parties shall comply with applicable Institute policies, standards, and regulatory requirements relevant to information security.</li>
                  <li>Non-compliance may lead to termination of access, suspension of services, or contractual penalties as defined in the agreement.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 17 Physical and Environmental Security */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">17 Physical and Environmental Security</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">17.1 Protection of Processing Facilities:</strong> All Institute facilities that process, store, or handle Sensitive or Confidential information shall be physically protected against unauthorized access, damage, theft, and environmental hazards.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">17.2 Secure Areas and Entry Controls:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Information assets shall be located in secure areas protected by a defined security perimeter.</li>
                  <li>Entry to secure areas shall be controlled through appropriate access controls, authentication mechanisms, and logging of personnel movement.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">17.3 Data Centres and Server Rooms:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Data centres, server rooms, and critical IT infrastructure shall be equipped with environmental controls, including fire detection and suppression systems, temperature and humidity controls, and Uninterruptible Power Supplies (UPS) or equivalent backup power solutions.</li>
                  <li>Access to such areas shall be restricted to authorized personnel only, with visitor access logged and monitored.</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">17.4 Portable Devices and Workstations:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>Portable computing devices, such as laptops and external drives, shall be securely stored when not in use.</li>
                  <li>Users shall lock computer workstations when leaving their workspace unattended, even for short periods.</li>
                  <li>Sensitive or confidential hard copy information must be securely stored in locked cabinets or safes if left unattended for an extended period.</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">17.5 Reporting of Loss or Theft:</strong> Any loss, theft, or unauthorized access involving the Institute's IT assets or information shall be reported immediately to the CISO to enable prompt investigation and mitigation.
              </p>
            </div>
          </section>

          {/* 18 Exceptions Management */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">18 Exceptions Management</h2>
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">18.1 Scope of Exceptions:</strong> Exceptions to this Information Security Policy may be granted only under specific, justified, and temporary circumstances that require deviation from standard policy requirements. Exceptions shall not be universal and must be assessed on a case-by-case basis.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">18.2 Approval Process:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>All requests for exceptions shall be formally submitted in writing to the CISO, including a justification, the scope, and the duration of the requested exception.</li>
                  <li>The CISO shall review and approve exceptions that can be safely accommodated.</li>
                  <li>For exceptions that involve significant risk or impact, the CISO may escalate the request to the Information Security Steering Committee or the Director for further approval.</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-[#6A4A36]">18.3 Time-Bound Nature:</strong> All exceptions shall be time-bound with clearly defined start and end dates. Permanent exceptions are not permitted without formal review and renewal.
              </p>
              <div>
                <p className="text-gray-600 leading-relaxed mb-2">
                  <strong className="text-[#6A4A36]">18.4 Documentation and Review:</strong>
                </p>
                <ul className="list-disc pl-8 space-y-2 text-gray-600">
                  <li>All approved exceptions shall be documented, logged, and periodically reviewed to ensure continued justification and compliance with mitigating controls.</li>
                  <li>The CISO shall maintain an Exceptions Register for audit and governance purposes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 19 Clarifications */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">19 Clarifications</h2>
            <p className="text-gray-600 leading-relaxed">
              For any clarifications regarding the interpretation, applicability, or implementation of this Information Security Policy, users shall contact the Chief Information Security Officer (CISO) at <em>ciso@iith.ac.in</em>. The CISO is the designated authority for providing guidance and resolving queries related to this policy.
            </p>
          </section>

          {/* 20 Review and Maintenance */}
          <section>
            <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">20 Review and Maintenance</h2>
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
              Note: This policy document has been duly approved by the competent authority. Please <a href="https://intranet.iith.ac.in/chrome/site/files/others/information_security_policy_2026.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">click here</a> to refer to the document.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default InformationSecurityPolicy;