import Link from "next/link";

export const metadata = {
  title: "Contact | Beth G — Executive VA | Get in Touch",
  description: "Contact Beth G for executive virtual assistant services, VA coaching, or business support. WhatsApp, email, and scheduling options available.",
};

export default function ContactPage() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa'
    }}>
      
      {/* NAVIGATION BAR - Updated with Green Theme, Learn & FAQ */}
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

      {/* Main Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '24px',
            color: '#1a1a1a',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            Let's Work Together
          </h1>
          
          <p style={{
            color: '#52525b',
            fontSize: '20px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Whether you're a founder needing executive support, or someone interested in building 
            a remote career — I'm here to help. Let's find the right solution for you.
          </p>
        </div>

        {/* Contact Options Grid */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          
          {/* Option 1: WhatsApp - Quick Chat */}
          <div style={{ 
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            padding: '40px',
            backgroundColor: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f0fdf4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '36px'
            }}>
              💬
            </div>
            
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              WhatsApp Chat
            </h2>
            
            <p style={{
              color: '#52525b',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '28px'
            }}>
              Perfect for quick questions or to schedule a proper call. Fast, casual, and direct.
            </p>
            
            <a 
              href="https://wa.me/254704046107"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '16px 32px',
                backgroundColor: '#25D366',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Message on WhatsApp
            </a>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
              color: '#71717a',
              fontSize: '14px'
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#22c55e',
                borderRadius: '50%'
              }}></span>
              <span>Typically respond within 2-4 hours</span>
            </div>
          </div>

          {/* Option 2: Email - Detailed Inquiries */}
          <div style={{ 
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            padding: '40px',
            backgroundColor: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f0f9ff',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '36px'
            }}>
              ✉️
            </div>
            
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Email Me
            </h2>
            
            <p style={{
              color: '#52525b',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '28px'
            }}>
              For detailed inquiries, proposals, or if you prefer thoughtful written communication.
            </p>
            
            <a 
              href="mailto:bethgexecutiveva@gmail.com"
              style={{
                padding: '16px 32px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Send an Email
            </a>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
              color: '#71717a',
              fontSize: '14px'
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#059669',
                borderRadius: '50%'
              }}></span>
              <span>Respond within 2-4 hours</span>
            </div>
          </div>

          {/* Option 3: Paid Consultation Call */}
          <div style={{ 
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            padding: '40px',
            backgroundColor: 'white',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#f0fdf4',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              fontSize: '36px'
            }}>
              📅
            </div>
            
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Paid Consultation
            </h2>
            
            <p style={{
              color: '#52525b',
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '28px'
            }}>
              Let's have a proper conversation about your needs. 30-minute focused session.
            </p>
            
            <Link 
              href="#schedule-form"
              style={{
                padding: '16px 32px',
                backgroundColor: '#059669',
                color: 'white',
                borderRadius: '10px',
                textDecoration: 'none',
                display: 'inline-block',
                fontWeight: '600',
                fontSize: '16px',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Schedule Consultation
            </Link>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '20px',
              color: '#71717a',
              fontSize: '14px'
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                backgroundColor: '#059669',
                borderRadius: '50%'
              }}></span>
              <span>$10 USD (30 min session)</span>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div 
          id="schedule-form"
          style={{ 
            border: '1px solid #e5e5e5',
            borderRadius: '16px',
            padding: '60px',
            backgroundColor: 'white',
            marginBottom: '60px'
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Schedule Your Consultation
            </h2>
            
            <p style={{
              color: '#52525b',
              fontSize: '18px',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Fill this out and I'll get back to you with available time slots. 
              This is a paid consultation ($10 USD for 30 minutes).
            </p>
          </div>
          
          <form style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: '500',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Your Name *
              </label>
              <input
                type="text"
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d4d4d4',
                  borderRadius: '10px',
                  fontSize: '16px',
                  backgroundColor: '#fafafa',
                  boxSizing: 'border-box'
                }}
                placeholder="Gitonga Beth"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: '500',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Email Address *
              </label>
              <input
                type="email"
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d4d4d4',
                  borderRadius: '10px',
                  fontSize: '16px',
                  backgroundColor: '#fafafa',
                  boxSizing: 'border-box'
                }}
                placeholder="gitonga@example.com"
              />
            </div>
            
            <div style={{ marginBottom: '24px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: '500',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                What brings you here today? *
              </label>
              <select
                required
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d4d4d4',
                  borderRadius: '10px',
                  fontSize: '16px',
                  backgroundColor: '#fafafa',
                  boxSizing: 'border-box'
                }}
              >
                <option value="">Choose an option</option>
                <option value="executive-support">I need executive VA support</option>
                <option value="project-help">I have a specific project</option>
                <option value="va-coaching">I want VA coaching/training</option>
                <option value="not-sure">I'm not sure yet</option>
                <option value="other">Something else</option>
              </select>
            </div>
            
            <div style={{ marginBottom: '32px' }}>
              <label style={{ 
                display: 'block', 
                fontSize: '16px', 
                fontWeight: '500',
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Tell me about your situation *
              </label>
              <textarea
                required
                rows={4}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  border: '1px solid #d4d4d4',
                  borderRadius: '10px',
                  fontSize: '16px',
                  backgroundColor: '#fafafa',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
                placeholder="What challenges are you facing? What would you like to achieve?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '18px',
                backgroundColor: '#059669',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Request Consultation ($10 USD)
            </button>
            
            <p style={{
              color: '#71717a',
              fontSize: '14px',
              textAlign: 'center',
              marginTop: '20px'
            }}>
              I'll email you within 2-4 hours to schedule our call
            </p>
          </form>
        </div>

        {/* Quick Contact Info */}
        <div style={{ 
          backgroundColor: '#f4f4f5',
          borderRadius: '16px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{ 
            fontSize: '24px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '24px'
          }}>
            Need to reach me quickly?
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '20px' }}>📱</span>
              <span style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '500' }}>
                WhatsApp: +254 704 046 107
              </span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '20px' }}>📧</span>
              <span style={{ fontSize: '18px', color: '#1a1a1a', fontWeight: '500' }}>
                Email: bethgexecutiveva@gmail.com
              </span>
            </div>
          </div>
          
          <p style={{
            color: '#71717a',
            fontSize: '16px',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            I'm here to help founders, consultants, and aspiring remote professionals. 
            Whether you need support for your business or guidance for your career, 
            let's have a conversation.
          </p>
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
            fontSize: '15px',
            marginBottom: '8px'
          }}>
            Executive support for founders, consultants, and growing businesses
          </p>
          <p style={{ 
            color: '#a1a1aa', 
            fontSize: '13px'
          }}>
            Based in Kenya • Working with clients globally
          </p>
        </div>
      </div>
    </div>
  );
}