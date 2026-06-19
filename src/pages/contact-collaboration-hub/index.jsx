import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import SocialConnect from './components/SocialConnect';


const ContactCollaborationHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Gerhardien Studio</title>
        <meta 
          name="description" 
          content="Start a website or AI automation project with Gerhardien Studio. Share your business needs and get a practical next step." 
        />
        <meta name="keywords" content="website agency contact, AI automation consultant, web development Indonesia" />
        <meta property="og:title" content="Contact - Gerhardien Studio" />
        <meta property="og:description" content="Discuss a website, internal tool, or AI automation project with Haldies." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <ContactForm />
          <SocialConnect />
        </main>
      </div>
    </>
  );
};

export default ContactCollaborationHub;
