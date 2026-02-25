import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import ContactCTA from "@/components/sections/ContactCTA";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactCTA />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
