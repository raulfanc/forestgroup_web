import React from "react";
import Layout from "../layout/Layout";
import { Background } from "../sections";
import EmailForm from "../sections/EmailForm";

const ContactUs = () => {
  return (
    <Layout>
      <section className="xl:padding-1 wide:padding-r padding-b pt-20">
        {/* <Background /> */}
        <EmailForm />
      </section>
    </Layout>
  );
};

export default ContactUs;
