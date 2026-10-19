import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
import SocialConnect from './components/SocialConnect';


const ContactCollaborationHub = () => {
  return (
    <>
      <Helmet>
        <title>Kontak - Buatai Studio</title>
        <meta 
          name="description" 
          content="Mulai project website atau otomasi AI bersama Buatai Studio. Ceritakan kebutuhan bisnismu dan dapatkan langkah praktis berikutnya." 
        />
        <meta name="keywords" content="website agency contact, AI automation consultant, web development Indonesia" />
        <meta property="og:title" content="Kontak - Buatai Studio" />
        <meta property="og:description" content="Diskusikan project website, sistem internal, atau otomasi AI bersama Haldies." />
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
