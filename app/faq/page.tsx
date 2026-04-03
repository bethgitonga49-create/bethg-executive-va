import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | Beth G — Executive VA",
  description: "Find answers to common questions about working with Beth G as your Executive Virtual Assistant, VA coaching, and remote work training.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Who can benefit from your executive support?",
      answer: "Business owners, consultants, startup founders, and executives who want more clarity, time, and organization can benefit from my services. If you're overwhelmed with admin tasks and need strategic help, we're a good fit."
    },
    {
      question: "How do we communicate and collaborate?",
      answer: "I work primarily through email, messaging apps, and video calls. I set up systems tailored to your workflow, ensuring smooth communication and minimal disruptions. We'll use tools you're comfortable with."
    },
    {
      question: "Can you handle confidential tasks?",
      answer: "Absolutely. Discretion and confidentiality are core to my services. You can trust me with sensitive documents, communications, and decisions. I treat all client information with the utmost respect and privacy."
    },
    {
      question: "What kind of tasks can you handle?",
      answer: "Scheduling, email management, project coordination, research, document preparation, reminders, online tools management, CRM updates, client communication, process documentation, and more — basically anything that helps you focus on strategic work."
    },
    {
      question: "Do you work with beginners who want to become VAs?",
      answer: "Yes! I offer coaching for aspiring virtual assistants. I guide beginners on tools, structure, remote platforms, and how to build sustainable online work — especially for those starting from zero."
    },
    {
      question: "What tools and platforms do you use?",
      answer: "Google Workspace, Notion, ClickUp, Trello, Slack, Zoom, email platforms, CRMs (HubSpot, Salesforce), and AI tools depending on client needs. I'm adaptable to your preferred tools."
    },
    {
      question: "Are your services fully remote?",
      answer: "Yes — 100% remote. I work with clients globally across different time zones. All communication and work happen through secure online platforms."
    },
    {
      question: "How do payments and invoicing work?",
      answer: "You'll receive a secure Flutterwave payment link once we agree on scope. I offer flexible payment options: monthly retainers, project-based, or hourly rates. Invoices are sent electronically."
    },
    {
      question: "What's your availability and response time?",
      answer: "Flexible depending on workload. We agree on hours and expectations upfront. Typically, I respond within 2-4 hours for urgent matters and 24 hours for non-urgent items."
    },
    {
      question: "How do we get started working together?",
      answer: "Use the Contact page to tell me about your needs. We'll schedule a discovery call to discuss your requirements, then I'll prepare a proposal. Once approved, we begin with an onboarding process."
    },
  ];

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa'
    }}>
      
      {/* Navigation Bar - Updated with GREEN theme and LEARN button */}
      <nav style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '18px 20px',
        borderBottom: '1px solid #e5e5e5',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          {/* Logo with Green Gradient */}
          <div style={{ 
            fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
            fontSize: '22px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #059669 0%, #10b981 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            letterSpacing: '-0.3px'
          }}>
            Beth G — Executive VA
          </div>
          
          {/* Navigation Links */}
          <div style={{ 
            display: 'flex', 
            gap: '12px',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>Home</Link>
            <Link href="/services" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>Services</Link>
            <Link href="/blog" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>Blog</Link>
            <Link href="/learn" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>Learn</Link>
            <Link href="/faq" style={{ textDecoration: 'none', color: 'white', fontWeight: '500', fontSize: '15px', padding: '10px 24px', backgroundColor: '#059669', borderRadius: '8px', transition: 'all 0.2s' }}>FAQ</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: '500', fontSize: '15px', padding: '10px 24px', backgroundColor: '#059669', borderRadius: '8px', transition: 'all 0.2s' }}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* CSS for hover effects */}
      <style>{`
        nav a:not(:last-child):not(:nth-last-child(2)):hover {
          background-color: #059669 !important;
          color: white !important;
          transform: scale(1.02);
        }
        nav a:last-child:hover, nav a:nth-last-child(2):hover {
          background-color: #047857 !important;
          transform: scale(1.02);
        }
      `}</style>

      {/* Main Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '24px',
            color: '#1a1a1a',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            Frequently Asked Questions
          </h1>
          
          <p style={{
            color: '#52525b',
            fontSize: '20px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Common questions about executive support, VA coaching, and working together. 
            Can't find your answer? <Link href="/contact" style={{ color: '#059669', fontWeight: '600' }}>Contact me directly</Link>.
          </p>
        </div>

        {/* FAQ Categories */}
        <div style={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          {['All Questions', 'Executive Support', 'VA Coaching', 'Getting Started', 'Technical', 'Pricing'].map((category) => (
            <button
              key={category}
              style={{
                padding: '10px 20px',
                backgroundColor: category === 'All Questions' ? '#059669' : 'white',
                color: category === 'All Questions' ? 'white' : '#52525b',
                border: '1px solid #e5e5e5',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {faqs.map((faq, index) => (
            <details 
              key={index}
              style={{
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '28px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}
            >
              <summary style={{ 
                cursor: 'pointer', 
                fontWeight: '600',
                fontSize: '18px',
                color: '#1a1a1a',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                outline: 'none'
              }}>
                <span style={{ flex: 1, paddingRight: '20px' }}>{faq.question}</span>
                <span style={{ 
                  color: '#059669', 
                  fontSize: '12px',
                  flexShrink: 0
                }}>▼</span>
              </summary>
              <div style={{ 
                marginTop: '20px', 
                paddingTop: '20px', 
                borderTop: '1px solid #f0f0f0'
              }}>
                <p style={{ 
                  color: '#52525b', 
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}>
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions? */}
        <div style={{ 
          backgroundColor: '#f0fdf4',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            Still Have Questions?
          </h2>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Don't hesitate to reach out. I'm here to help you find the right solution 
            for your business or career goals.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link 
              href="/contact"
              style={{
                padding: '16px 36px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Contact Me
            </Link>
            
            <a 
              href="https://wa.me/254704046107"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 36px',
                border: '2px solid #059669',
                backgroundColor: 'transparent',
                color: '#059669',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center',
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid #e5e5e5'
        }}>
          <p style={{ 
            color: '#a1a1aa', 
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '500',
            marginBottom: '12px'
          }}>
            Beth G — Executive VA
          </p>
          <p style={{ 
            color: '#71717a', 
            fontSize: '15px'
          }}>
            Clear answers for confident decisions
          </p>
        </div>
      </div>
    </div>
  );
}