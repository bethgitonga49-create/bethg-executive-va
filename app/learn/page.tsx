import Link from "next/link";

export const metadata = {
  title: "Learn Remote Work Skills | Beth G — VA Coaching & Training",
  description: "Step-by-step guidance for beginners who want to work online, learn digital tools, and succeed in remote jobs. VA coaching and training programs.",
};

export default function LearnPage() {
  const modules = [
    {
      icon: '🚀',
      title: "Getting Started with Remote Work",
      description: "Learn the fundamentals of working online, from mindset to practical setup.",
      topics: [
        "Mindset shift for remote work success",
        "Setting up your home office effectively",
        "Time management and self-discipline",
        "Basic digital literacy essentials"
      ]
    },
    {
      icon: '🛠️',
      title: "Essential Tools & Platforms",
      description: "Master the tools that make remote work efficient and professional.",
      topics: [
        "Google Workspace (Docs, Sheets, Calendar)",
        "Project management: Trello, Asana, ClickUp",
        "Communication: Slack, Zoom, Microsoft Teams",
        "Design basics: Canva for non-designers",
        "Organization: Notion for personal productivity"
      ]
    },
    {
      icon: '💼',
      title: "Finding Remote Opportunities",
      description: "Navigate job platforms and create opportunities for yourself.",
      topics: [
        "Platforms: Upwork, Fiverr, Remote.co",
        "Creating a winning profile and portfolio",
        "Writing proposals that get noticed",
        "Networking online effectively",
        "Setting realistic rates and expectations"
      ]
    },
    {
      icon: '👔',
      title: "Professional Online Presence",
      description: "Build credibility and attract opportunities through personal branding.",
      topics: [
        "LinkedIn optimization for remote workers",
        "Creating a simple portfolio website",
        "Professional communication etiquette",
        "Building testimonials and credibility",
        "Social media for professional growth"
      ]
    },
    {
      icon: '📈',
      title: "Growing Your Remote Career",
      description: "Advance from beginner to experienced remote professional.",
      topics: [
        "Upskilling with free and paid resources",
        "Specializing in high-demand skills",
        "Managing multiple clients effectively",
        "Setting boundaries and preventing burnout",
        "Scaling from freelancer to business owner"
      ]
    },
    {
      icon: '🇰🇪',
      title: "Civic Education & Youth Empowerment",
      description: "My passion project: Educating youth for active citizenship and leadership.",
      topics: [
        "Understanding civic rights and responsibilities",
        "Digital tools for civic engagement",
        "Youth leadership development",
        "Community organizing basics",
        "Preparing for elections and governance"
      ]
    },
  ];

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa'
    }}>
      
      {/* NAVIGATION BAR - Updated with GREEN theme, Learn & FAQ */}
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
            <Link href="/learn" style={{ textDecoration: 'none', color: 'white', fontWeight: '500', fontSize: '15px', padding: '10px 24px', backgroundColor: '#059669', borderRadius: '8px', transition: 'all 0.2s' }}>Learn</Link>
            <Link href="/faq" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', fontSize: '15px', padding: '10px 20px', borderRadius: '8px', transition: 'all 0.2s' }}>FAQ</Link>
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
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Hero Section - Updated with GREEN */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '24px',
            color: '#1a1a1a',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            Learn Remote Work & Online Skills
          </h1>
          
          <p style={{
            color: '#52525b',
            fontSize: '20px',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto 32px'
          }}>
            Step-by-step guidance for beginners who want to work online, learn digital tools, 
            and build successful remote careers. Plus, my passion for youth civic education.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <Link 
              href="#coaching"
              style={{
                padding: '14px 32px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Explore VA Coaching
            </Link>
            
            <Link 
              href="#civic-education"
              style={{
                padding: '14px 32px',
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
              Civic Education Programs
            </Link>
          </div>
        </div>

        {/* What I Teach Grid */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '40px',
            textAlign: 'center'
          }}>
            What I Teach
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {modules.map((module, index) => (
              <div 
                key={index}
                style={{ 
                  border: '1px solid #e5e5e5',
                  borderRadius: '16px',
                  padding: '32px',
                  backgroundColor: 'white',
                  height: '100%'
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#f4f4f5',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  fontSize: '28px'
                }}>
                  {module.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '12px'
                }}>
                  {module.title}
                </h3>
                
                <p style={{
                  color: '#52525b',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  marginBottom: '20px'
                }}>
                  {module.description}
                </p>
                
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {module.topics.map((topic, topicIndex) => (
                    <li 
                      key={topicIndex}
                      style={{
                        marginBottom: '8px',
                        color: '#52525b',
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'flex-start'
                      }}
                    >
                      <span style={{ 
                        color: '#059669', 
                        marginRight: '12px',
                        marginTop: '5px'
                      }}>`</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* VA Coaching Section - Updated with GREEN */}
        <div 
          id="coaching"
          style={{ 
            backgroundColor: '#f0fdf4',
            borderRadius: '16px',
            padding: '60px',
            marginBottom: '60px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 700,
              color: '#166534',
              marginBottom: '16px'
            }}>
              Virtual Assistant Coaching
            </h2>
            
            <p style={{
              color: '#065f46',
              fontSize: '18px',
              lineHeight: '1.7',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Personalized 1:1 guidance to help you start and grow your VA business
            </p>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '32px',
            marginBottom: '40px'
          }}>
            {[
              {
                title: "Beginner's Package",
                price: "$150",
                includes: ["4 coaching sessions", "Tool setup guide", "Profile review", "Email templates"]
              },
              {
                title: "Growth Package",
                price: "$300",
                includes: ["8 coaching sessions", "Portfolio building", "Client acquisition strategy", "Contract templates"]
              },
              {
                title: "Custom Coaching",
                price: "Custom",
                includes: ["Tailored to your needs", "Ongoing support", "Business setup help", "All resources included"]
              },
            ].map((packageItem, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid #bbf7d0'
                }}
              >
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700,
                  color: '#166534',
                  marginBottom: '12px'
                }}>
                  {packageItem.title}
                </h3>
                
                <p style={{ 
                  fontSize: '32px', 
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '20px'
                }}>
                  {packageItem.price}
                </p>
                
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {packageItem.includes.map((item, itemIndex) => (
                    <li 
                      key={itemIndex}
                      style={{
                        marginBottom: '8px',
                        color: '#065f46',
                        fontSize: '15px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <span style={{ 
                        color: '#059669', 
                        marginRight: '12px',
                        fontWeight: 'bold'
                      }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
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
              Inquire About Coaching
            </Link>
          </div>
        </div>

        {/* Civic Education Section */}
        <div 
          id="civic-education"
          style={{ 
            backgroundColor: '#f0fdf4',
            borderRadius: '16px',
            padding: '60px',
            marginBottom: '60px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 700,
              color: '#166534',
              marginBottom: '16px'
            }}>
              Civic Education & Youth Empowerment
            </h2>
            
            <p style={{
              color: '#065f46',
              fontSize: '18px',
              lineHeight: '1.7',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              My passion project: Educating and empowering youth for active citizenship, 
              especially as we approach general elections. I believe informed youth create better communities.
            </p>
          </div>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            marginBottom: '40px'
          }}>
            {[
              {
                title: "Workshops & Training",
                description: "Interactive sessions on civic rights, digital citizenship, and community leadership."
              },
              {
                title: "Election Education",
                description: "Non-partisan education on the electoral process, voter rights, and responsible voting."
              },
              {
                title: "Youth Leadership",
                description: "Developing the next generation of community leaders and change-makers."
              },
            ].map((program, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid #bbf7d0'
                }}
              >
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 700,
                  color: '#166534',
                  marginBottom: '12px'
                }}>
                  {program.title}
                </h3>
                
                <p style={{
                  color: '#065f46',
                  fontSize: '16px',
                  lineHeight: '1.6'
                }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{
              color: '#065f46',
              fontSize: '18px',
              marginBottom: '24px',
              fontStyle: 'italic'
            }}>
              Interested in civic education programs for your community or organization?
            </p>
            
            <a 
              href="mailto:bethgexecutiveva@gmail.com?subject=Civic Education Inquiry"
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
              Email About Civic Programs
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ 
            fontSize: '28px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            Ready to Start Learning?
          </h3>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Whether you want to become a virtual assistant or learn about civic engagement, 
            I'm here to guide you. Let's build skills that create opportunities.
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
              Get Started Today
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
              WhatsApp Questions
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
            Teaching skills, building careers, empowering communities
          </p>
        </div>
      </div>
    </div>
  );
}