import Link from "next/link";

export const metadata = {
  title: "Blog & Resources | Beth G — Executive VA",
  description: "Insights, tips, and resources on executive assistance, remote work, business productivity, and virtual assistant best practices.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Why You Need Beth G as an Executive Virtual Assistant",
      excerpt: "Discover how professional executive support can transform your workday and keep you focused on what matters most.",
      date: "February 7, 2026",
      readTime: "4 min read",
      category: "Executive Support",
      image: "📊"
    },
    {
      id: 2,
      title: "5 Time Management Systems Every Founder Needs",
      excerpt: "Practical systems to reclaim your time and reduce overwhelm in your daily workflow.",
      date: "February 1, 2026",
      readTime: "6 min read",
      category: "Productivity",
      image: "⏰"
    },
    {
      id: 3,
      title: "How to Delegate Effectively to a Virtual Assistant",
      excerpt: "Learn the art of delegation that actually saves you time instead of creating more work.",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Delegation",
      image: "🤝"
    },
    {
      id: 4,
      title: "The Essential Tech Stack for Remote Business Operations",
      excerpt: "Tools and platforms that make remote work seamless and efficient for growing businesses.",
      date: "January 18, 2026",
      readTime: "7 min read",
      category: "Tools & Tech",
      image: "💻"
    },
    {
      id: 5,
      title: "From Overwhelmed to Organized: A Founder's Journey",
      excerpt: "Real story of how executive support transformed one founder's business and personal life.",
      date: "January 10, 2026",
      readTime: "8 min read",
      category: "Case Study",
      image: "🚀"
    },
    {
      id: 6,
      title: "Setting Boundaries: How VA Support Creates Work-Life Balance",
      excerpt: "How proper support systems help you disconnect and recharge without business suffering.",
      date: "January 3, 2026",
      readTime: "5 min read",
      category: "Work-Life Balance",
      image: "⚖️"
    },
  ];

  // Function to get the correct URL for each post
  const getPostUrl = (id) => {
    switch(id) {
      case 1:
        return "/blog/why-you-need-bethg-executive-va";
      case 2:
        return "/blog/5-time-management-systems-every-founder-needs";
      case 3:
        return "/blog/how-to-delegate-effectively-to-a-virtual-assistant";
      case 4:
        return "/blog/essential-tech-stack-for-remote-business-operations";
      case 5:
        return "/blog/from-overwhelmed-to-organized-founder-journey";
      case 6:
        return "/blog/setting-boundaries-va-support-work-life-balance";
      default:
        return `/blog/post-${id}`;
    }
  };

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

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* Page Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ 
            fontSize: '48px', 
            fontWeight: 700, 
            marginBottom: '20px',
            color: '#1a1a1a',
            letterSpacing: '-1px'
          }}>
            Blog & Resources
          </h1>
          
          <p style={{
            color: '#52525b',
            fontSize: '20px',
            lineHeight: '1.7',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Practical insights on executive assistance, remote work, and building efficient businesses. 
            From productivity tips to client stories.
          </p>
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginTop: '32px'
          }}>
            {['All Posts', 'Executive Support', 'Productivity', 'Tools & Tech', 'Case Studies', 'Work-Life Balance'].map((category) => (
              <button
                key={category}
                style={{
                  padding: '10px 20px',
                  backgroundColor: category === 'All Posts' ? '#1a1a1a' : 'white',
                  color: category === 'All Posts' ? 'white' : '#52525b',
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
        </div>

        {/* Featured Post */}
        <div style={{ 
          border: '1px solid #e5e5e5',
          borderRadius: '16px',
          padding: '40px',
          backgroundColor: 'white',
          marginBottom: '60px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#f4f4f5',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            fontSize: '32px'
          }}>
            📊
          </div>
          
          <span style={{
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: '#f0fdf4',
            color: '#166534',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Featured Post
          </span>
          
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '20px',
            maxWidth: '800px'
          }}>
            Why You Need Beth G as an Executive Virtual Assistant
          </h2>
          
          <p style={{
            color: '#52525b',
            fontSize: '18px',
            lineHeight: '1.7',
            marginBottom: '24px',
            maxWidth: '700px'
          }}>
            As responsibilities grow, it becomes impossible to manage everything yourself. 
            Discover how professional executive support can transform your workday.
          </p>
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
            color: '#71717a',
            fontSize: '14px'
          }}>
            <span>By Beth G · Executive Virtual Assistant</span>
            <span style={{ width: '4px', height: '4px', backgroundColor: '#d4d4d4', borderRadius: '50%' }}></span>
            <span>February 7, 2026</span>
            <span style={{ width: '4px', height: '4px', backgroundColor: '#d4d4d4', borderRadius: '50%' }}></span>
            <span>4 min read</span>
          </div>
          
          <Link 
            href="/blog/why-you-need-bethg-executive-va"
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
            Read Full Article
          </Link>
        </div>

        {/* Blog Grid */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '28px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '32px'
          }}>
            Latest Articles
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {blogPosts.slice(1).map((post) => (
              <div 
                key={post.id}
                style={{ 
                  border: '1px solid #e5e5e5',
                  borderRadius: '16px',
                  padding: '32px',
                  backgroundColor: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
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
                  fontSize: '24px'
                }}>
                  {post.image}
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '16px'
                }}>
                  <span style={{
                    padding: '4px 12px',
                    backgroundColor: '#f4f4f5',
                    color: '#52525b',
                    borderRadius: '50px',
                    fontSize: '12px',
                    fontWeight: '500'
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: '12px', color: '#a1a1aa' }}>•</span>
                  <span style={{ fontSize: '12px', color: '#71717a' }}>{post.readTime}</span>
                </div>
                
                <h3 style={{ 
                  fontSize: '22px', 
                  fontWeight: 600,
                  color: '#1a1a1a',
                  marginBottom: '12px',
                  lineHeight: '1.4'
                }}>
                  {post.title}
                </h3>
                
                <p style={{
                  color: '#52525b',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                  flex: 1
                }}>
                  {post.excerpt}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  paddingTop: '20px',
                  borderTop: '1px solid #f0f0f0'
                }}>
                  <span style={{ fontSize: '13px', color: '#71717a' }}>{post.date}</span>
                  <Link 
                    href={getPostUrl(post.id)}
                    style={{
                      padding: '8px 20px',
                      backgroundColor: '#f4f4f5',
                      color: '#1a1a1a',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}
                  >
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div style={{ 
          border: '1px solid #e5e5e5',
          borderRadius: '16px',
          padding: '48px',
          backgroundColor: 'white',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{ 
            fontSize: '32px', 
            fontWeight: 700,
            color: '#1a1a1a',
            marginBottom: '16px'
          }}>
            Get Productivity Tips Directly
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
            Join founders and executives who receive practical tips on delegation, 
            tools, and workflow optimization every two weeks.
          </p>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                minWidth: '200px',
                padding: '14px 20px',
                border: '1px solid #d4d4d4',
                borderRadius: '8px',
                fontSize: '16px',
                backgroundColor: '#fafafa'
              }}
            />
            
            <button
              style={{
                padding: '14px 32px',
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Subscribe
            </button>
          </div>
          
          <p style={{
            color: '#71717a',
            fontSize: '13px',
            marginTop: '16px'
          }}>
            No spam. Unsubscribe anytime. I respect your privacy.
          </p>
        </div>

        {/* Footer Note */}
        <div style={{ 
          textAlign: 'center',
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
            Practical insights for busy founders and executives
          </p>
        </div>
      </div>
    </div>
  );
}