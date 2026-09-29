import React from "react";
import {
  ArrowLeft,
  ClipboardCheck,
  Cloud,
  Database,
  HardDrive,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const Backup321Policy = ({ goBack }) => {
  return (
    <main className="px-4 py-8 md:p-24 bg-[#FDFBF7] min-h-screen">
      <button
        onClick={goBack}
        className="-mt-4 flex items-center gap-3 text-sm font-bold text-[#F28972] hover:text-[#D2691E] mb-12 transition-colors"
      >
        <ArrowLeft size={18} />
        BACK
      </button>

      <div className="max-w-5xl mx-auto bg-white border border-[#D4AF37] rounded-[2rem] shadow-sm p-8 md:p-14">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-[#FFF4E8] flex items-center justify-center">
            <Database className="w-8 h-8 text-[#D97706]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-[#4A3728]">3-2-1 Backup Policy</h1>
            <p className="text-gray-500 mt-2">Indian Institute of Technology Hyderabad</p>
          </div>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Overview</h2>
          <p className="text-gray-600 leading-8">
            The 3-2-1 Backup Policy is a widely used data protection guideline designed to reduce
            the risk of data loss and improve recovery from hardware failures, accidental deletion,
            cyberattacks, ransomware, and other incidents. Maintain three copies of data, use two
            different types of storage media, and keep at least one copy off-site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">How the 3-2-1 Policy Works</h2>
          <div className="grid md:grid-cols-3 gap-5">
            <article className="border border-[#E6D3A3] rounded-xl p-6">
              <Database className="w-8 h-8 text-[#D97706] mb-4" />
              <h3 className="font-bold text-[#4A3728] mb-2">Three copies</h3>
              <p className="text-gray-600 leading-7">
                Keep one primary copy for regular operations and at least two separate backup copies.
                Multiple copies help protect against corruption, deletion, or unavailability.
              </p>
            </article>
            <article className="border border-[#E6D3A3] rounded-xl p-6">
              <HardDrive className="w-8 h-8 text-[#D97706] mb-4" />
              <h3 className="font-bold text-[#4A3728] mb-2">Two storage types</h3>
              <p className="text-gray-600 leading-7">
                Use at least two different storage media or systems, such as disk, NAS, object or
                cloud storage, tape, or removable storage.
              </p>
            </article>
            <article className="border border-[#E6D3A3] rounded-xl p-6">
              <Cloud className="w-8 h-8 text-[#D97706] mb-4" />
              <h3 className="font-bold text-[#4A3728] mb-2">One off-site copy</h3>
              <p className="text-gray-600 leading-7">
                Keep at least one backup in a different physical or logical location, such as a
                separate data centre, cloud service, remote repository, or isolated environment.
              </p>
            </article>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Why the Policy Matters</h2>
          <p className="text-gray-600 leading-8 mb-4">
            Redundancy, diversity, and separation mean that a failure or security incident affecting
            one system should not destroy every copy. The policy can be applied to research and
            administrative data, academic records, applications, databases, file servers, user data,
            and institutional documents.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck className="text-[#D97706]" />
            <h2 className="text-2xl font-bold text-[#8B5E3C]">Modern Backup Protections</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-[#4A3728] mb-2">Immutability and isolation</h3>
              <p className="text-gray-600 leading-7">
                Prevent backups from being changed or deleted during a defined retention period.
                Keep at least one copy offline, air-gapped, or otherwise inaccessible from normal
                production systems.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-[#4A3728] mb-2">Encryption and access control</h3>
              <p className="text-gray-600 leading-7">
                Encrypt backup data in transit and at rest. Restrict backup administration and
                deletion privileges to authorized users.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-[#4A3728] mb-2">Monitoring and retention</h3>
              <p className="text-gray-600 leading-7">
                Define backup retention periods and monitor jobs for failures, unusual activity, and
                unauthorized changes.
              </p>
            </div>
            <div className="border rounded-xl p-5">
              <h3 className="font-semibold text-[#4A3728] mb-2">Recovery testing</h3>
              <p className="text-gray-600 leading-7">
                Periodically verify backup integrity and test that data and systems can be restored
                successfully.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">3-2-1-1-0 Approach</h2>
          <div className="bg-[#FFF7ED] rounded-xl p-6 border border-orange-200">
            <p className="text-gray-600 leading-7 mb-3">
              For environments requiring stronger protection, extend the policy with an additional
              isolated copy and verified recovery:
            </p>
            <ul className="space-y-2 list-disc ml-6 text-gray-600">
              <li><strong>3:</strong> Maintain three copies of the data.</li>
              <li><strong>2:</strong> Use at least two different storage media or systems.</li>
              <li><strong>1:</strong> Keep at least one copy off-site.</li>
              <li><strong>1:</strong> Maintain at least one immutable or offline, air-gapped copy.</li>
              <li><strong>0:</strong> Aim for zero unverified recovery errors through regular testing.</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <Cloud className="text-[#D97706]" />
            <h2 className="text-2xl font-bold text-[#8B5E3C]">Cloud Storage</h2>
          </div>
          <p className="text-gray-600 leading-8 mb-4">
            Cloud storage can provide geographic separation, scalable capacity, automation,
            encryption, access controls, retention management, immutable storage options, and less
            dependence on local infrastructure. It should be treated as one part of a backup plan,
            not as a complete strategy by itself.
          </p>
          <p className="text-gray-600 leading-8">
            Consider network availability, recovery time, storage costs, provider dependency, data
            residency, security controls, and whether data can be restored independently.
          </p>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <ClipboardCheck className="text-[#D97706]" />
            <h2 className="text-2xl font-bold text-[#8B5E3C]">Backup Verification and Recovery Testing</h2>
          </div>
          <p className="text-gray-600 leading-8 mb-4">
            A backup is useful only if data can be recovered. Recovery testing is an integral part of
            the backup strategy, not an optional activity.
          </p>
          <ol className="space-y-2 list-decimal ml-6 text-gray-600">
            <li>Verify that backup jobs complete successfully.</li>
            <li>Check backup integrity.</li>
            <li>Test restoration of individual files and folders.</li>
            <li>Perform application or system recovery tests where required.</li>
            <li>Verify backup copies are available within the required recovery time.</li>
            <li>Document recovery procedures and test results.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-5">Example Implementation</h2>
          <div className="overflow-x-auto rounded-xl border border-[#E6D3A3]">
            <table className="w-full text-left">
              <thead className="bg-[#FFF8EC] text-[#4A3728]">
                <tr>
                  <th className="p-4">Copy</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Storage</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-t"><td className="p-4">Primary</td><td className="p-4">Production environment</td><td className="p-4">Primary storage or NAS</td></tr>
                <tr className="border-t"><td className="p-4">Backup 1</td><td className="p-4">Local backup environment</td><td className="p-4">Disk or NAS</td></tr>
                <tr className="border-t"><td className="p-4">Backup 2</td><td className="p-4">Separate location</td><td className="p-4">Cloud or remote repository</td></tr>
                <tr className="border-t"><td className="p-4">Additional protection</td><td className="p-4">Isolated environment</td><td className="p-4">Immutable or offline storage</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#8B5E3C] mb-4">Key Recommendations</h2>
          <div className="bg-[#FFFDF7] border rounded-xl p-6">
            <ul className="space-y-3 text-gray-600 list-disc ml-6">
              <li>Maintain at least three copies of critical data on at least two different storage systems or media.</li>
              <li>Keep at least one copy off-site and one immutable or isolated copy for critical data.</li>
              <li>Encrypt sensitive backup data and apply strict access controls.</li>
              <li>Set appropriate retention periods and monitor backup jobs for failures.</li>
              <li>Perform regular recovery tests and document backup and disaster recovery procedures.</li>
              <li>Periodically review the strategy as risks, technology, and data requirements change.</li>
            </ul>
          </div>
        </section>

        <section className="border-t pt-8">
          <div className="flex items-center gap-3 mb-4">
            <LockKeyhole className="text-[#D97706]" />
            <h2 className="text-2xl font-bold text-[#8B5E3C]">Conclusion</h2>
          </div>
          <p className="text-gray-600 leading-8">
            The 3-2-1 policy provides a simple foundation for protecting institutional data. Add
            immutability, isolation, encryption, access controls, monitoring, and regular recovery
            testing so reliable, recoverable copies of critical data remain available when needed.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Backup321Policy;
