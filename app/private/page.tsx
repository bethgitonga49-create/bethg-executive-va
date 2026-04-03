import Link from "next/link";

export default function PrivatePage() {
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
      padding: '20px',
      textAlign: 'center'
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

      {/* Private Content */}
      <div style={{ 
        maxWidth: '600px',
        padding: '60px 40px',
        backgroundColor: 'white',
        borderRadius: '16px',
        border: '1px solid #e5e5e5',
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        marginTop: '80px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: '#f4f4f5',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '32px'
        }}>
          🔒
        </div>
        
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: 700, 
          marginBottom: '16px',
          color: '#1a1a1a'
        }}>
          Private Client Portal
        </h1>
        
        <p style={{
          color: '#52525b',
          fontSize: '18px',
          lineHeight: '1.7',
          marginBottom: '32px'
        }}>
          This space is reserved for current clients. Access is shared directly 
          with individuals I'm actively working with.
        </p>
        
        <div style={{ 
          backgroundColor: '#f4f4f5',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <p style={{ 
            color: '#52525b',
            fontSize: '16px',
            margin: 0,
            fontStyle: 'italic'
          }}>
            If you're a current client and need access, please check your email 
            for login instructions or contact me directly.
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <Link 
            href="/"
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
            Return to Homepage
          </Link>
          
          <Link 
            href="/contact"
            style={{
              padding: '14px 32px',
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
            Contact for Access
          </Link>
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
          Strategic executive support for busy founders
        </p>
      </div>
    </div>
  );
}