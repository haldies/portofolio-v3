import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import SocialConnect from './components/SocialConnect';


const ContactCollaborationHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Collaboration Hub - Haldies Portfolio</title>
        <meta 
          name="description" 
          content="Connect with Haldies for AI consulting, project collaboration, mentorship, or hiring opportunities. Multiple contact pathways and direct scheduling available." 
        />
        <meta name="keywords" content="AI consultant, machine learning expert, project collaboration, mentorship, hiring, contact" />
        <meta property="og:title" content="Contact & Collaboration Hub - Haldies Portfolio" />
        <meta property="og:description" content="Connect with Haldies for AI consulting, project collaboration, mentorship, or hiring opportunities." />
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