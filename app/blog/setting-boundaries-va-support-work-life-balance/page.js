import Link from "next/link";

export const metadata = {
  title: "Setting Boundaries: How VA Support Creates Work-Life Balance",
  description: "How proper support systems help you disconnect and recharge without business suffering.",
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
            <span style={{ padding: '6px 16px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>Work-Life Balance</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>January 3, 2026</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>• 5 min read</span>
          </div>
          
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: '1.2' }}>
            Setting Boundaries: How VA Support Creates Work-Life Balance
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
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <span style={{ background: '#f0edf5', padding: '8px 20px', borderRadius: '40px', fontSize: '14px' }}>🔒 After-hours email filter</span>
            <span style={{ background: '#f0edf5', padding: '8px 20px', borderRadius: '40px', fontSize: '14px' }}>📴 No-meeting Fridays</span>
            <span style={{ background: '#f0edf5', padding: '8px 20px', borderRadius: '40px', fontSize: '14px' }}>🧘 Deep work boundaries</span>
            <span style={{ background: '#f0edf5', padding: '8px 20px', borderRadius: '40px', fontSize: '14px' }}>⏰ Shutdown rituals</span>
          </div>

          <p style={{ marginBottom: '24px' }}>
            <strong>Boundaries aren't walls — they're filters.</strong> One of the biggest myths in entrepreneurship: being a founder means sacrificing your personal life. But here's the truth I've seen working with dozens of executives and founders:
          </p>

          <p style={{ marginBottom: '24px', fontSize: '20px', fontWeight: 500, color: '#1a1a1a', fontStyle: 'italic' }}>
            The most successful leaders aren't the ones who work the most hours. They're the ones who protect their time fiercely.
          </p>

          <div style={{ backgroundColor: '#f5f2fc', borderRadius: '20px', padding: '28px', margin: '32px 0' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⭐</div>
            <p style={{ fontSize: '18px', fontWeight: 500, marginBottom: '8px' }}>
              "Before Beth, I was always 'on'. Now I have actual evenings and my business grew 40% in 6 months."
            </p>
            <p style={{ marginBottom: 0, color: '#5a5670' }}>— Sarah T., E-commerce founder</p>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '40px 0 20px 0', color: '#1a1a1a' }}>
            How an Executive VA Protects Your Boundaries
          </h2>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📧</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Email Gatekeeping</h3>
              <p>Your VA filters, prioritizes, and responds to emails so only truly urgent matters reach you. No more checking inbox at dinner.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📅</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Calendar Protection</h3>
              <p>Your VA schedules meetings strategically, blocks deep work time, and says "no" to meetings that don't align with your priorities.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🚪</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>The "Off Switch"</h3>
              <p>Your VA creates end-of-day rituals, ensures nothing is pending, and gives you permission to truly disconnect.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '20px', background: 'white', border: '1px solid #e5e5e5', borderRadius: '12px' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🤝</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Client Expectation Management</h3>
              <p>Your VA communicates boundaries to clients professionally, setting expectations around response times and availability.</p>
            </div>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '40px 0 20px 0', color: '#1a1a1a' }}>
            The Real Cost of No Boundaries
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '32px 0' }}>
            <div style={{ textAlign: 'center', padding: '20px', background: '#fee2e2', borderRadius: '16px' }}>
              <div style={{ fontSize: '32px' }}>😰</div>
              <div style={{ fontWeight: 700, marginTop: '8px' }}>Burnout</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Physical and mental exhaustion</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#fff3e0', borderRadius: '16px' }}>
              <div style={{ fontSize: '32px' }}>💔</div>
              <div style={{ fontWeight: 700, marginTop: '8px' }}>Strained Relationships</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Missing family moments</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#ffe0f0', borderRadius: '16px' }}>
              <div style={{ fontSize: '32px' }}>📉</div>
              <div style={{ fontWeight: 700, marginTop: '8px' }}>Poor Decision Making</div>
              <div style={{ fontSize: '14px', color: '#666' }}>Mental fatigue affects judgment</div>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', background: '#e0f0fe', borderRadius: '16px' }}>
              <div style={{ fontSize: '32px' }}>💰</div>
              <div style={{ fontWeight: 700, marginTop: '8px' }}>Business Stagnation</div>
              <div style={{ fontSize: '14px', color: '#666' }}>No time for strategy</div>
            </div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #059669', padding: '28px', margin: '32px 0', borderRadius: '12px' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌿</div>
            <p style={{ fontSize: '18px', fontWeight: 600, marginBottom: '12px', color: '#065f46' }}>
              The truth about boundaries:
            </p>
            <p style={{ marginBottom: 0 }}>
              When you protect your time, you're not being selfish. You're being strategic. A well-rested, present leader makes better decisions, builds stronger relationships, and ultimately grows a healthier business.
            </p>
          </div>

          <h2 style={{ fontSize: '28px', fontWeight: 700, margin: '40px 0 20px 0', color: '#1a1a1a' }}>
            Your VA as Your Boundary Partner
          </h2>

          <p style={{ marginBottom: '24px' }}>
            Your executive VA becomes the gatekeeper who ensures that only mission-critical issues reach you. They handle the noise so you can focus on what matters — both in business and in life.
          </p>

          <p style={{ marginBottom: '32px' }}>
            The result? You unplug without guilt, recharge fully, and show up sharper. My clients consistently report better sleep, more presence with family, and actually enjoying their business again.
          </p>

          <div style={{ backgroundColor: '#f4f4f5', borderRadius: '12px', padding: '32px', marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Ready to Set Boundaries That Stick?</h3>
            <p style={{ marginBottom: '24px' }}>Let's build systems that give you time back — for your business and your life.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/services" style={{ padding: '12px 28px', backgroundColor: '#1a1a1a', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>View Services</Link>
              <Link href="/contact" style={{ padding: '12px 28px', border: '2px solid #1a1a1a', backgroundColor: 'transparent', color: '#1a1a1a', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Contact Me</Link>
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