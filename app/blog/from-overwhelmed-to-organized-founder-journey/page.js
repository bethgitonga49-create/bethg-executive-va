import Link from "next/link";

export const metadata = {
  title: "From Overwhelmed to Organized: A Founder's Journey",
  description: "Real story of how executive support transformed one founder's business and personal life.",
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#1a1a1a' }}>
            Beth G — Executive VA
          </div>
          <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500' }}>Home</Link>
            <Link href="/services" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500' }}>Services</Link>
            <Link href="/blog" style={{ textDecoration: 'none', color: '#1a1a1a', fontWeight: '500', borderBottom: '2px solid #1a1a1a' }}>Blog</Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: '500', padding: '10px 24px', backgroundColor: '#1a1a1a', borderRadius: '8px' }}>Contact</Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        
        <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', color: '#52525b', textDecoration: 'none', marginBottom: '32px' }}>
          <span style={{ marginRight: '8px' }}>←</span> Back to Blog
        </Link>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ padding: '6px 16px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>Case Study</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>January 10, 2026</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>• 8 min read</span>
          </div>
          
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: '1.2' }}>
            From Overwhelmed to Organized: A Founder's Journey
          </h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '24px', borderBottom: '1px solid #e5e5e5' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: '#f4f4f5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>BG</div>
            <div>
              <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>Beth G</p>
              <p style={{ fontSize: '14px', color: '#71717a', margin: '4px 0 0 0' }}>Executive Virtual Assistant</p>
            </div>
          </div>
        </div>

        <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151' }}>
          
          <div style={{ backgroundColor: '#faf8ff', borderLeft: '4px solid #5b4b8a', padding: '28px', borderRadius: '12px', marginBottom: '32px' }}>
            <div style={{ fontSize: '48px', marginBottom: '12px' }}>📖</div>
            <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#1e1a2f' }}>
              "I was working 70-hour weeks, missing deadlines, and feeling like my business was running me."
            </p>
            <p style={{ marginBottom: 0, color: '#5a5670' }}>— Marcus, founder of a digital marketing agency</p>
          </div>

          <p style={{ marginBottom: '24px' }}>
            When Marcus first reached out, he was exhausted. His agency had grown to 12 team members and 30+ clients, but instead of feeling successful, he felt trapped. Every day was a fire drill. He was the bottleneck for everything—from client approvals to team questions to technical issues.
          </p>

          <p style={{ marginBottom: '24px' }}>
            <strong>His biggest frustration?</strong> He couldn't remember the last time he worked on growing the business instead of just keeping it alive.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', margin: '32px 0' }}>
            <div style={{ background: '#fef9e6', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>⏰</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>70</div>
              <div style={{ fontSize: '14px', color: '#666' }}>hours/week before</div>
            </div>
            <div style={{ background: '#e6f7ef', padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>⚡</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#1a1a1a' }}>4</div>
              <div style={{ fontSize: '14px', color: '#666' }}>hours/week after</div>
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '40px 0 20px 0', color: '#1a1a1a' }}>
            The Turning Point
          </h2>

          <p style={{ marginBottom: '24px' }}>
            Within the first 90 days of working together, we implemented three critical changes:
          </p>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '20px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📋</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>1. Client Onboarding SOPs</h3>
              <p>Created step-by-step systems that reduced onboarding time by 65% and eliminated confusion across the team.</p>
            </div>

            <div style={{ marginBottom: '20px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>2. Operations Dashboard</h3>
              <p>Built a real-time dashboard giving Marcus visibility into all projects without needing to ask "what's the status?"</p>
            </div>

            <div style={{ marginBottom: '20px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>🤝</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>3. Delegation System</h3>
              <p>Created clear ownership rules so Marcus wasn't the default for every decision. Team members now handle 80% of what used to land on his desk.</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', padding: '28px', borderRadius: '16px', margin: '32px 0', textAlign: 'center' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>📈</div>
            <p style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px', color: '#065f46' }}>
              The results after 6 months:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap' }}>
              <div><strong style={{ fontSize: '24px' }}>68%</strong><br />less admin time</div>
              <div><strong style={{ fontSize: '24px' }}>2</strong><br />new team hires</div>
              <div><strong style={{ fontSize: '24px' }}>40%</strong><br />revenue growth</div>
              <div><strong style={{ fontSize: '24px' }}>✅</strong><br />weekends back</div>
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '40px 0 20px 0', color: '#1a1a1a' }}>
            What Marcus Learned
          </h2>

          <p style={{ marginBottom: '24px' }}>
            "The biggest shift wasn't just getting tasks off my plate. It was finally having the <strong>mental space to think strategically</strong>. I stopped reacting and started leading again. Within months, we grew by 40% and I actually have weekends with my family."
          </p>

          <div style={{ backgroundColor: '#f4f4f5', borderRadius: '12px', padding: '32px', marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Ready for Your Own Transformation?</h3>
            <p style={{ marginBottom: '24px' }}>Let's talk about what executive support could look like for you.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
              <Link href="/services" style={{ padding: '12px 28px', backgroundColor: '#1a1a1a', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>View Services</Link>
              <Link href="/contact" style={{ padding: '12px 28px', border: '2px solid #1a1a1a', color: '#1a1a1a', borderRadius: '8px', textDecoration: 'none' }}>Contact Me</Link>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e5e5', textAlign: 'center' }}>
          <p style={{ color: '#a1a1aa', fontSize: '14px' }}>Beth G — Executive VA</p>
        </div>
      </div>
    </div>
  );
}