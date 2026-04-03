import Link from "next/link";

export const metadata = {
  title: "Services | Beth G — Executive VA | Professional Virtual Assistant",
  description: "Professional executive virtual assistant services including monthly support, project assistance, and customized packages for founders and businesses.",
};

export default function ServicesPage() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa',
      paddingTop: '80px'
    }}>
      
      {/* Navigation - Same as homepage */}
      <nav style={{
        width: '100%',
        backgroundColor: 'white',
        padding: '18px 20px',
        borderBottom: '1px solid #e5e5e5',
        position: 'fixed',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '20px',
            color: '#1a1a1a',
            letterSpacing: '-0.5px'
          }}>
            Beth G — Executive VA
          </div>
          <div style={{ 
            display: 'flex', 
            gap: '28px',
            alignItems: 'center'
          }}>
            <Link 
              href="/" 
              style={{ 
                textDecoration: 'none', 
                color: '#1a1a1a',
                fontWeight: '500',
                fontSize: '15px',
                padding: '6px 0'
              }}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              style={{ 
                textDecoration: 'none', 
                color: '#1a1a1a',
                fontWeight: '500',
                fontSize: '15px',
                padding: '6px 0',
                borderBottom: '2px solid #1a1a1a'
              }}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              style={{ 
                textDecoration: 'none', 
                color: '#1a1a1a',
                fontWeight: '500',
                fontSize: '15px',
                padding: '6px 0'
              }}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              style={{ 
                textDecoration: 'none', 
                color: 'white',
                fontWeight: '500',
                fontSize: '15px',
                padding: '10px 24px',
                backgroundColor: '#1a1a1a',
                borderRadius: '8px'
              }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '20px',
            color: '#1a1a1a',
            letterSpacing: '-1px'
          }}>
            Executive Virtual Assistant Services
          </h1>
          
          <p style={{
            color: '#52525b',
            fontSize: '20px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            I support founders, executives, and growing teams with reliable, detail-driven assistance 
            so you can focus on what matters most — building your business.
          </p>
        </div>

        {/* Service 1 - Monthly Support */}
        <div style={{ 
          border: '1px solid #e5e5e5',
          borderRadius: '16px',
          padding: '48px',
          backgroundColor: 'white',
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#f4f4f5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px'
            }}>
              <span style={{ fontSize: '20px', color: '#1a1a1a' }}>📅</span>
            </div>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 700,
              color: '#1a1a1a',
              margin: 0
            }}>
              Monthly Executive Support
            </h2>
          </div>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            paddingLeft: '70px'
          }}>
            Ongoing, reliable support that becomes an extension of your team. I handle the day-to-day 
            so you can focus on strategy and growth.
          </p>
          
          <div style={{ paddingLeft: '70px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              What's included:
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                { icon: '📧', text: 'Email & calendar management' },
                { icon: '🤝', text: 'Meeting preparation & follow-ups' },
                { icon: '🔍', text: 'Research & data gathering' },
                { icon: '📋', text: 'Document preparation & formatting' },
                { icon: '🔄', text: 'Process documentation & SOPs' },
                { icon: '⚡', text: 'Daily operational support' },
                { icon: '📊', text: 'Report generation & analysis' },
                { icon: '💬', text: 'Client communication handling' },
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#fafafa',
                  borderRadius: '8px'
                }}>
                  <span style={{ marginRight: '12px', fontSize: '18px' }}>{item.icon}</span>
                  <span style={{ color: '#52525b', fontSize: '15px' }}>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '32px',
              borderTop: '1px solid #f0f0f0'
            }}>
              <div>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  Starting from <span style={{ color: '#059669' }}>$450 / month</span>
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#71717a',
                  marginTop: '4px'
                }}>
                  Flexible hours • Customizable packages • No long-term contracts
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link 
                  href="/contact"
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
                  Let's Discuss Your Needs
                </Link>
                
                <a 
                  href="https://wa.me/254704046107"
                  target="_blank"
                  rel="noopener noreferrer"
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
                  WhatsApp Me Directly
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service 2 - Project-Based */}
        <div style={{ 
          border: '1px solid #e5e5e5',
          borderRadius: '16px',
          padding: '48px',
          backgroundColor: 'white',
          marginBottom: '40px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#f4f4f5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px'
            }}>
              <span style={{ fontSize: '20px', color: '#1a1a1a' }}>🎯</span>
            </div>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 700,
              color: '#1a1a1a',
              margin: 0
            }}>
              Project-Based Assistance
            </h2>
          </div>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            paddingLeft: '70px'
          }}>
            Perfect for one-off projects, special initiatives, or overflow work. Get expert help 
            without ongoing commitment.
          </p>
          
          <div style={{ paddingLeft: '70px' }}>
            <h3 style={{ 
              fontSize: '18px', 
              fontWeight: 600,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Perfect for:
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {[
                'Setting up CRM systems',
                'Email list cleanup & organization',
                'Creating process documentation',
                'Event planning & coordination',
                'Research projects',
                'Data migration & organization',
                'Presentation creation',
                'Website content updates'
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  padding: '12px',
                  backgroundColor: '#fafafa',
                  borderRadius: '8px'
                }}>
                  <span style={{ 
                    width: '6px', 
                    height: '6px', 
                    backgroundColor: '#059669',
                    borderRadius: '50%',
                    marginRight: '12px'
                  }}></span>
                  <span style={{ color: '#52525b', fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '32px',
              borderTop: '1px solid #f0f0f0'
            }}>
              <div>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  Project rates from <span style={{ color: '#059669' }}>$250</span>
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#71717a',
                  marginTop: '4px'
                }}>
                  Hourly options available • Clear scope & timeline • Flat-rate projects
                </p>
              </div>
              
              <Link 
                href="/contact"
                style={{
                  padding: '14px 32px',
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Describe Your Project
              </Link>
            </div>
          </div>
        </div>

        {/* Service 3 - VA Coaching */}
        <div style={{ 
          border: '1px solid #e5e5e5',
          borderRadius: '16px',
          padding: '48px',
          backgroundColor: 'white',
          marginBottom: '60px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{
              width: '50px',
              height: '50px',
              backgroundColor: '#f4f4f5',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px'
            }}>
              <span style={{ fontSize: '20px', color: '#1a1a1a' }}>👩‍🏫</span>
            </div>
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 700,
              color: '#1a1a1a',
              margin: 0
            }}>
              VA Coaching & Training
            </h2>
          </div>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            paddingLeft: '70px'
          }}>
            For aspiring virtual assistants. Learn the skills, tools, and mindset to build a 
            successful remote career from someone who's been there.
          </p>
          
          <div style={{ paddingLeft: '70px' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{ 
                padding: '24px',
                backgroundColor: '#f0fdf4',
                borderRadius: '12px',
                border: '1px solid #bbf7d0'
              }}>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  color: '#166534',
                  marginBottom: '12px'
                }}>
                  1:1 Coaching Sessions
                </h4>
                <p style={{ color: '#52525b', fontSize: '15px', lineHeight: '1.6' }}>
                  Personalized guidance on starting and growing your VA business
                </p>
              </div>
              
              <div style={{ 
                padding: '24px',
                backgroundColor: '#f0f9ff',
                borderRadius: '12px',
                border: '1px solid #bae6fd'
              }}>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  color: '#075985',
                  marginBottom: '12px'
                }}>
                  Tool Training
                </h4>
                <p style={{ color: '#52525b', fontSize: '15px', lineHeight: '1.6' }}>
                  Master Notion, ClickUp, Trello, CRMs, and productivity tools
                </p>
              </div>
              
              <div style={{ 
                padding: '24px',
                backgroundColor: '#fef2f2',
                borderRadius: '12px',
                border: '1px solid #fecaca'
              }}>
                <h4 style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  color: '#991b1b',
                  marginBottom: '12px'
                }}>
                  Business Setup
                </h4>
                <p style={{ color: '#52525b', fontSize: '15px', lineHeight: '1.6' }}>
                  Help with pricing, contracts, client acquisition, and systems
                </p>
              </div>
            </div>
            
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '32px',
              borderTop: '1px solid #f0f0f0'
            }}>
              <div>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: 600,
                  color: '#1a1a1a',
                  margin: 0
                }}>
                  Coaching packages from <span style={{ color: '#059669' }}>$150</span>
                </p>
                <p style={{ 
                  fontSize: '14px', 
                  color: '#71717a',
                  marginTop: '4px'
                }}>
                  Single sessions • Package deals • Practical, actionable advice
                </p>
              </div>
              
              <a 
                href="mailto:bethgexecutiveva@gmail.com"
                style={{
                  padding: '14px 32px',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: '600',
                  fontSize: '16px'
                }}
              >
                Email About Coaching
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div style={{ 
          textAlign: 'center',
          padding: '60px 40px',
          backgroundColor: '#f4f4f5',
          borderRadius: '16px',
          marginTop: '40px'
        }}>
          <h3 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '20px'
          }}>
            Not sure which option fits your needs?
          </h3>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '32px',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Let's have a conversation. Tell me about your challenges, and I'll help you 
            find the right solution. No pressure, just honest advice.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link 
              href="/contact"
              style={{
                padding: '16px 36px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Talk to Me First
            </Link>
            
            <a 
              href="https://wa.me/254704046107"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 36px',
                border: '2px solid #1a1a1a',
                backgroundColor: 'transparent',
                color: '#1a1a1a',
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
          
          <p style={{
            color: '#71717a',
            fontSize: '14px',
            marginTop: '32px',
            fontStyle: 'italic'
          }}>
            I typically respond within 2-4 hours during business days
          </p>
        </div>

        {/* Footer Note */}
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
            marginBottom: '8px'
          }}>
            Beth G — Executive VA
          </p>
          <p style={{ 
            color: '#71717a', 
            fontSize: '15px'
          }}>
            Custom packages available • All services are 100% remote • First consultation is free
          </p>
        </div>
      </div>
    </div>
  );
}