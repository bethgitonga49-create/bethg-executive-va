import Link from "next/link";

export const metadata = {
  title: "Why You Need Beth G as an Executive Virtual Assistant",
  description: "Discover how Beth G can transform your workday by providing trusted executive support that keeps you focused, organized, and productive.",
};

export default function BlogPost() {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#fafafa',
      paddingTop: '80px'
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
                padding: '6px 0',
                borderBottom: '2px solid #1a1a1a'
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

      {/* Blog Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Back to Blog Link */}
        <Link 
          href="/blog"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#52525b',
            textDecoration: 'none',
            fontSize: '15px',
            marginBottom: '32px'
          }}
        >
          <span style={{ marginRight: '8px' }}>←</span> Back to Blog
        </Link>

        {/* Article Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '12px',
            marginBottom: '20px'
          }}>
            <span style={{
              padding: '6px 16px',
              backgroundColor: '#f0fdf4',
              color: '#166534',
              borderRadius: '50px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Executive Support
            </span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>•</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>February 7, 2026</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>•</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>4 min read</span>
          </div>
          
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '24px',
            lineHeight: '1.2',
            letterSpacing: '-0.5px'
          }}>
            Why You Need Beth G as an Executive Virtual Assistant
          </h1>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '16px',
            paddingBottom: '24px',
            borderBottom: '1px solid #e5e5e5'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f4f4f5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#1a1a1a'
            }}>
              BG
            </div>
            <div>
              <p style={{ 
                fontSize: '16px', 
                fontWeight: 600,
                color: '#1a1a1a',
                margin: 0
              }}>
                Beth G
              </p>
              <p style={{ 
                fontSize: '14px', 
                color: '#71717a',
                margin: '4px 0 0 0'
              }}>
                Executive Virtual Assistant
              </p>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div style={{ 
          fontSize: '18px',
          lineHeight: '1.8',
          color: '#374151'
        }}>
          <p style={{ marginBottom: '32px' }}>
            As your responsibilities grow, it becomes <strong>impossible to manage everything yourself</strong>. 
            Tasks, emails, meetings, and follow-ups slowly eat into the time you need to focus on your 
            core priorities — the work that actually moves your business forward.
          </p>

          <p style={{ marginBottom: '32px' }}>
            That's where I come in — as your <strong>Executive Virtual Assistant</strong>. Not just someone 
            who completes tasks, but someone who organizes, anticipates, and handles operational details 
            so you can lead effectively and strategically.
          </p>

          <div style={{ 
            backgroundColor: '#f0fdf4',
            borderLeft: '4px solid #059669',
            padding: '24px',
            margin: '40px 0',
            borderRadius: '0 8px 8px 0'
          }}>
            <p style={{ 
              fontSize: '20px', 
              fontWeight: 600,
              color: '#065f46',
              margin: 0,
              fontStyle: 'italic'
            }}>
              "The real value isn't just in getting things done — it's in protecting your attention 
              for what truly matters."
            </p>
          </div>

          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '48px 0 24px 0',
            paddingBottom: '12px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            Protecting Your Most Valuable Asset: Time
          </h2>
          
          <p style={{ marginBottom: '24px' }}>
            Every email you answer, every meeting you schedule, every follow-up you track — 
            it all adds up. The real value of executive support is <strong>attention management</strong>. 
            When these operational tasks are handled efficiently by someone you trust, you can 
            focus completely on the decisions that drive growth.
          </p>
          
          <p style={{ marginBottom: '32px' }}>
            I've worked with founders who've told me that reclaiming just <strong>2-3 hours per day</strong> 
            transformed their businesses. That's 10-15 hours per week — time that can be spent on 
            strategy, client relationships, or even personal well-being.
          </p>

          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '48px 0 24px 0',
            paddingBottom: '12px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            Creating Clarity and Structure
          </h2>
          
          <p style={{ marginBottom: '24px' }}>
            My approach goes beyond task completion. I work to create <strong>systems that reduce noise 
            and increase clarity</strong> in your daily workflow. This includes:
          </p>
          
          <ul style={{ 
            margin: '24px 0 32px 0',
            paddingLeft: '24px',
            listStyle: 'none'
          }}>
            {[
              "Organizing communications so nothing gets lost in the shuffle",
              "Creating documentation systems that make information easy to find",
              "Implementing task management that actually works for your brain",
              "Setting up automations that handle repetitive work",
              "Establishing follow-up systems that ensure nothing slips through"
            ].map((item, index) => (
              <li key={index} style={{ 
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'flex-start'
              }}>
                <span style={{ 
                  color: '#059669', 
                  marginRight: '12px',
                  fontWeight: 'bold'
                }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            margin: '48px 0 24px 0',
            paddingBottom: '12px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            Why This Level of Support Matters
          </h2>
          
          <p style={{ marginBottom: '24px' }}>
            Support at this level isn't about delegation for its own sake. It's about <strong>freeing you 
            to operate at your best</strong> while ensuring your team and business run smoothly. It's the 
            difference between constantly putting out fires and having the space to think ahead.
          </p>
          
          <p style={{ marginBottom: '32px' }}>
            When you're not bogged down in administrative details, you can:
          </p>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            {[
              { icon: '💡', title: 'Think strategically', desc: 'About business growth and opportunities' },
              { icon: '🤝', title: 'Build relationships', desc: 'With clients, partners, and your team' },
              { icon: '⚡', title: 'Move faster', desc: 'On initiatives that matter most' },
              { icon: '🧘', title: 'Reduce stress', desc: 'And prevent burnout before it starts' }
            ].map((item, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#52525b', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <hr style={{ 
            border: 'none',
            height: '1px',
            backgroundColor: '#e5e5e5',
            margin: '48px 0'
          }} />

          <div style={{ 
            backgroundColor: '#f4f4f5',
            borderRadius: '12px',
            padding: '32px',
            marginTop: '48px',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '16px'
            }}>
              Ready to Transform Your Workflow?
            </h3>
            
            <p style={{ 
              fontSize: '16px',
              color: '#52525b',
              marginBottom: '24px',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Learn more about how I can support you on the <Link href="/services" style={{ color: '#059669', fontWeight: '600' }}>Services page</Link>, 
              or reach out directly via the <Link href="/contact" style={{ color: '#059669', fontWeight: '600' }}>Contact page</Link>.
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link 
                href="/services"
                style={{
                  padding: '12px 28px',
                  backgroundColor: '#1a1a1a',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: '600',
                  fontSize: '15px'
                }}
              >
                View Services
              </Link>
              
              <Link 
                href="/contact"
                style={{
                  padding: '12px 28px',
                  border: '2px solid #1a1a1a',
                  backgroundColor: 'transparent',
                  color: '#1a1a1a',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  fontWeight: '600',
                  fontSize: '15px'
                }}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        {/* Article Footer */}
        <div style={{ 
          marginTop: '60px',
          paddingTop: '40px',
          borderTop: '1px solid #e5e5e5'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: '#f4f4f5',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#1a1a1a',
              fontSize: '20px'
            }}>
              BG
            </div>
            <div>
              <p style={{ 
                fontSize: '18px', 
                fontWeight: 600,
                color: '#1a1a1a',
                margin: '0 0 4px 0'
              }}>
                Beth G
              </p>
              <p style={{ 
                fontSize: '15px', 
                color: '#52525b',
                margin: '0 0 8px 0'
              }}>
                Executive Virtual Assistant supporting founders and growing businesses
              </p>
              <p style={{ fontSize: '14px', color: '#71717a', margin: 0 }}>
                I help busy professionals reclaim their time through strategic support and systems.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'center' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}