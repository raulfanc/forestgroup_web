import { location, company1, company2, company3 } from "../assets/images";
import Layout from "../layout/Layout";
import { Background } from "../sections";

const content = (
  <div
    className="absolute grid grid-rows-2 gap-8 top-0  w-full text-left p-12  lg:text-2xl text-base "
    style={{ height: "700px" }}
  >
    <p className="text-white-100">
      <span className="text-red-400">Forest Group</span> specialises in civil
      construction projects ranging from small residential subdivision,
      large-scale greenfield subdivision and heavy civil infrastructure
      projects. The founders Shawn and Kevin bring a combined 25-year industry
      experience that covers project planning, programming, delivering, cost
      control, quality control and project completion reporting. The team prides
      themselves in their uttermost work ethics, attention to detail,
      problem-solving mindset. Our business principle is that we always finish
      what we start with, leaving our Clients satisfaction.
    </p>
    <p className="text-3xl font-bold text-slate-200">
      The team holds current certifications{" "}
      <span className="text-orange-500"> CPEng (Civil)</span>,{" "}
      <span className="text-orange-500">LBP (Foundation)</span> and{" "}
      <span className="text-orange-500">LCS</span>.
    </p>
    <div className="relative">
      <img
        src={location} // Replace with the desired image
        alt="Certification Logo"
        className="absolute end-1.5 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 object-contain mt-12"
        style={{ top: "-180px", left: "80%" }}
      />
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <Layout>
      <section className=" xl:padding-1 wide:padding-r padding-b pt-1">
        <Background content={content} />
        <div className="flex justify-evenly gap-x-2 mt-36 ">
          <div>
            <img src={company1} alt="Company 1" />
          </div>
          <div>
            <img src={company2} alt="Company 1" />
          </div>
          <div>
            <img src={company3} alt="Company 1" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
