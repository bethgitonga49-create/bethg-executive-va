import Link from "next/link";

export const metadata = {
  title: "Beth G — Executive VA | Professional Virtual Assistant Services",
  description: "Strategic executive support for founders, consultants, and growing businesses. Remote VA services including calendar management, business operations, and project coordination.",
};

export default function Home() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa'
    }}>
      
      {/* NAVIGATION BAR - Updated with Learn and FAQ */}
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
            <Link href="/faq" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>FAQ</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: '500', fontSize: '15px', padding: '10px 24px', backgroundColor: '#059669', borderRadius: '8px', transition: 'all 0.2s' }}>Contact</Link>
          </div>
        </div>
      </nav>

      {/* CSS for hover effects */}
      <style>{`
        nav a:not(:last-child):hover {
          background-color: #059669 !important;
          color: white !important;
          transform: scale(1.02);
        }
        nav a:last-child:hover {
          background-color: #047857 !important;
          transform: scale(1.02);
        }
      `}</style>

      {/* HERO SECTION */}
      <section style={{
        width: '100%',
        backgroundColor: '#f4f4f5',
        padding: '100px 20px',
        textAlign: 'center',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '56px', 
            fontWeight: 700, 
            marginBottom: '24px',
            color: '#1a1a1a',
            lineHeight: '1.1',
            letterSpacing: '-1px'
          }}>
            Beth G — Executive VA
          </h1>

          <p style={{
            color: '#52525b',
            maxWidth: '700px',
            margin: '0 auto 50px',
            fontSize: '20px',
            lineHeight: '1.7'
          }}>
            I support <strong style={{ color: '#059669' }}>founders, consultants, and growing businesses</strong> with strategic executive assistance built on clarity, discretion, and results. I handle your admin — so you can focus on what truly matters.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link 
              href="/services" 
              style={{
                padding: '16px 36px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.2s'
              }}
            >
              Explore Services
            </Link>

            <Link 
              href="/contact" 
              style={{
                padding: '16px 36px',
                border: '2px solid #059669',
                backgroundColor: 'transparent',
                color: '#059669',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.2s'
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - White */}
      <section style={{
        width: '100%',
        padding: '100px 20px',
        backgroundColor: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#1a1a1a',
              letterSpacing: '-0.5px'
            }}>
              What I Do
            </h2>
            <p style={{
              color: '#059669',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Comprehensive executive support tailored to your business needs
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: "Core Executive Support",
                preview: "Calendar & inbox management",
                items: ["Meeting coordination", "Document preparation", "Daily operations support", "Email management"],
                color: '#f4f4f5'
              },
              {
                title: "Business Operations",
                preview: "Workflow organization",
                items: ["CRM updates", "Client communication", "Process documentation", "System setup"],
                color: '#fafafa'
              },
              {
                title: "Project Coordination",
                preview: "Task tracking & deadlines",
                items: ["Deadline management", "Team follow-ups", "Progress reporting", "Milestone tracking"],
                color: '#f4f4f5'
              },
              {
                title: "Digital Administration",
                preview: "File systems & data",
                items: ["Online research", "Data organization", "Email handling", "Digital filing"],
                color: '#fafafa'
              },
              {
                title: "Founder Support",
                preview: "Personal & executive admin",
                items: ["Scheduling", "Travel planning", "Priority management", "Personal tasks"],
                color: '#f4f4f5'
              },
              {
                title: "Growth Assistance",
                preview: "Lead tracking & outreach",
                items: ["Outreach support", "Content coordination", "Business structuring", "Growth tracking"],
                color: '#fafafa'
              },
            ].map((service, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <details style={{ 
                  border: '1px solid #e5e5e5',
                  borderRadius: '16px',
                  padding: '28px',
                  backgroundColor: service.color,
                  cursor: 'pointer',
                  textAlign: 'left',
                  height: '100%'
                }}>
                  <summary style={{ 
                    cursor: 'pointer', 
                    listStyle: 'none',
                    outline: 'none'
                  }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px'
                    }}>
                      <h3 style={{ 
                        fontSize: '20px', 
                        fontWeight: '600', 
                        color: '#1a1a1a',
                        margin: 0,
                        flex: 1
                      }}>
                        {service.title}
                      </h3>
                      <span style={{ 
                        color: '#059669', 
                        marginLeft: '12px',
                        fontSize: '12px'
                      }}>▼</span>
                    </div>
                    <p style={{ 
                      color: '#52525b', 
                      marginBottom: '20px',
                      fontSize: '15px',
                      lineHeight: '1.5'
                    }}>
                      {service.preview}
                    </p>
                    <div style={{ 
                      fontSize: '13px', 
                      color: '#059669',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>Click to view details</span>
                    </div>
                  </summary>
                  
                  <div style={{ 
                    marginTop: '24px', 
                    paddingTop: '24px', 
                    borderTop: '1px solid #e5e5e5'
                  }}>
                    <ul style={{ 
                      listStyle: 'none', 
                      padding: 0, 
                      margin: 0,
                      display: 'grid',
                      gap: '10px'
                    }}>
                      {service.items.map((item, idx) => (
                        <li key={idx} style={{ 
                          color: '#52525b',
                          display: 'flex',
                          alignItems: 'center',
                          fontSize: '15px',
                          padding: '6px 0'
                        }}>
                          <span style={{ 
                            color: '#059669', 
                            marginRight: '12px',
                            fontSize: '18px'
                          }}>`</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div style={{
                      marginTop: '28px',
                      paddingTop: '20px',
                      borderTop: '1px solid #f0f0f0',
                      textAlign: 'right'
                    }}>
                      <span style={{ 
                        fontSize: '10px',
                        letterSpacing: '3px',
                        color: '#a1a1aa',
                        textTransform: 'uppercase',
                        fontWeight: '500'
                      }}>
                        BETH G — EXECUTIVE VA
                      </span>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{
        width: '100%',
        padding: '100px 20px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid #e5e5e5',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '40px',
              fontWeight: 700,
              marginBottom: '16px',
              color: '#1a1a1a',
              letterSpacing: '-0.5px'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{
              color: '#059669',
              fontSize: '18px',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Common questions about executive virtual assistance
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                question: "What makes an Executive VA different from a regular VA?",
                answer: "An Executive VA goes beyond basic tasks. I help structure operations, support decision-making, manage priorities, and act as a strategic partner — not just an assistant. Think of me as your right-hand person who understands your business goals."
              },
              {
                question: "Who do you typically work with?",
                answer: "Founders, consultants, online business owners, startups, and professionals who need reliable executive-level support. If you're overwhelmed with admin tasks and need strategic help, we're a great fit."
              },
              {
                question: "Do you also help beginners and aspiring remote workers?",
                answer: "Yes! I guide beginners on tools, structure, remote platforms, and how to build sustainable online work — especially for those starting from zero. I offer coaching for aspiring VAs too."
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
            ].map((faq, i) => (
              <details key={i} style={{
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '24px',
                backgroundColor: 'white',
                cursor: 'pointer'
              }}>
                <summary style={{ 
                  cursor: 'pointer', 
                  fontWeight: '600',
                  fontSize: '17px',
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
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{
        width: '100%',
        padding: '100px 20px',
        backgroundColor: '#f4f4f5',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '40px',
            fontWeight: 700,
            marginBottom: '20px',
            color: '#1a1a1a',
            letterSpacing: '-0.5px'
          }}>
            Ready to Get Started?
          </h2>

          <p style={{
            color: '#52525b',
            fontSize: '18px',
            marginBottom: '50px',
            lineHeight: '1.7',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Let's simplify your workload and bring structure to your business. Focus on growth while I handle the details.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link 
              href="/services" 
              style={{
                padding: '16px 36px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.2s'
              }}
            >
              View All Services
            </Link>

            <Link 
              href="/contact" 
              style={{
                padding: '16px 36px',
                border: '2px solid #059669',
                backgroundColor: 'transparent',
                color: '#059669',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                transition: 'all 0.2s'
              }}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        width: '100%',
        padding: '70px 20px 40px',
        backgroundColor: '#0f0f12',
        color: 'white',
        textAlign: 'center',
        borderTop: '1px solid #27272a'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ marginBottom: '50px' }}>
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: '600', 
              marginBottom: '30px',
              color: '#fafafa'
            }}>
              Connect With Me
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px'
            }}>
              {[
                { name: '💬 WhatsApp', url: 'https://wa.me/254704046107' },
                { name: '✉️ Email', url: 'mailto:bethgexecutiveva@gmail.com' },
                { name: '🔗 LinkedIn', url: 'https://www.linkedin.com/in/bethgitonga49' },
                { name: '📸 Instagram', url: 'https://www.instagram.com/bethgexecutiveva' },
                { name: '📘 Facebook', url: 'https://www.facebook.com/BethGitongaVa' },
                { name: '📱 TikTok', url: 'https://www.tiktok.com/@bethgexecutiveva' },
                { name: '▶️ YouTube', url: 'https://www.youtube.com/@BethGExecutiveVA' },
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '10px 20px',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    backgroundColor: 'rgba(5, 150, 105, 0.2)',
                    transition: 'all 0.2s'
                  }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
          
          <div style={{ 
            paddingTop: '40px', 
            borderTop: '1px solid rgba(255,255,255,0.1)' 
          }}>
            <p style={{ 
              color: '#a1a1aa', 
              fontSize: '15px',
              marginBottom: '8px'
            }}>
              © 2026 Beth G, Executive VA. All rights reserved.
            </p>
            <p style={{ 
              color: '#71717a', 
              fontSize: '13px',
              marginTop: '8px'
            }}>
              Strategic executive support for modern businesses • Remote VA services worldwide
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}