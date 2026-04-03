import Link from "next/link";

export const metadata = {
  title: "Thank You | Beth G — Executive VA",
  description: "Thank you for your payment. Beth G will contact you shortly to begin working together.",
};

export default function ThankYouPage() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      {/* Navigation */}
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
                padding: '6px 0'
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
          </div>
        </div>
      </nav>

      {/* Thank You Content */}
      <div style={{ 
        maxWidth: '600px',
        padding: '60px 40px',
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        textAlign: 'center',
        marginTop: '80px'
      }}>
        {/* Celebration Icon */}
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#f0fdf4',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 32px',
          fontSize: '48px',
          animation: 'bounce 1s infinite alternate'
        }}>
          🎉
        </div>
        
        <h1 style={{ 
          fontSize: '42px', 
          fontWeight: 700, 
          marginBottom: '20px',
          color: '#1a1a1a',
          lineHeight: '1.1'
        }}>
          Thank You!
        </h1>
        
        <div style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#059669',
          margin: '0 auto 32px',
          borderRadius: '2px'
        }}></div>
        
        <p style={{
          color: '#52525b',
          fontSize: '20px',
          lineHeight: '1.7',
          marginBottom: '24px'
        }}>
          Your payment was successful. I've received your confirmation and I'm excited to start working with you!
        </p>
        
        <div style={{ 
          backgroundColor: '#f0fdf4',
          borderRadius: '12px',
          padding: '28px',
          marginBottom: '32px',
          border: '1px solid #bbf7d0'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 600,
            color: '#166534',
            marginBottom: '12px'
          }}>
            What happens next?
          </h3>
          
          <div style={{ 
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            textAlign: 'left'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                1
              </div>
              <span style={{ color: '#52525b', fontSize: '16px' }}>
                I'll email you within <strong>6 hours</strong> to confirm details
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                2
              </div>
              <span style={{ color: '#52525b', fontSize: '16px' }}>
                We'll schedule our onboarding call
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                3
              </div>
              <span style={{ color: '#52525b', fontSize: '16px' }}>
                I'll share access to our shared workspace
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                backgroundColor: '#22c55e',
                borderRadius: '50%',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                4
              </div>
              <span style={{ color: '#52525b', fontSize: '16px' }}>
                We begin working together towards your goals
              </span>
            </div>
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#f0f9ff',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '40px',
          border: '1px solid #bae6fd'
        }}>
          <p style={{ 
            color: '#075985',
            fontSize: '16px',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <span style={{ fontSize: '20px' }}>📧</span>
            <span>
              Need to reach me sooner? Email me at{' '}
              <a 
                href="mailto:bethgexecutiveva@gmail.com"
                style={{ color: '#075985', fontWeight: '600', textDecoration: 'none' }}
              >
                bethgexecutiveva@gmail.com
              </a>
            </span>
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Link 
            href="/"
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
            Return to Homepage
          </Link>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a 
              href="https://wa.me/254704046107"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                border: '1px solid #e5e5e5',
                backgroundColor: 'white',
                color: '#1a1a1a',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                fontSize: '15px'
              }}
            >
              <span>💬</span> WhatsApp
            </a>
            
            <a 
              href="mailto:bethgexecutiveva@gmail.com"
              style={{
                padding: '12px 24px',
                border: '1px solid #e5e5e5',
                backgroundColor: 'white',
                color: '#1a1a1a',
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '500',
                fontSize: '15px'
              }}
            >
              <span>📧</span> Email
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ 
        textAlign: 'center',
        marginTop: '60px',
        paddingTop: '40px',
        borderTop: '1px solid #e5e5e5',
        width: '100%',
        maxWidth: '800px'
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
          Thank you for trusting me with your business
        </p>
      </div>

      {/* Animation */}
      <style jsx global>{`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}