import Link from "next/link";

export const metadata = {
  title: "5 Time Management Systems Every Founder Needs",
  description: "Practical systems to reclaim your time and reduce overwhelm in your daily workflow.",
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
            <span style={{ padding: '6px 16px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>Productivity</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>February 1, 2026</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>• 6 min read</span>
          </div>
          
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: '1.2' }}>
            5 Time Management Systems Every Founder Needs
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
          
          <p style={{ marginBottom: '32px' }}>
            Time is the one resource you can't buy back. After working with 20+ founders, I've distilled the top 5 systems that create sustainable high performance — without grinding until midnight.
          </p>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏳</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>1. Time Blocking (The CEO Edition)</h2>
              <p>Reserve 2–3 hour "creation blocks" on your calendar. No meetings, no Slack. Treat them like non-negotiable board meetings. Delegate meeting scheduling to your VA to protect that space.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📋</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>2. Weekly 15-Minute Ops Sync</h2>
              <p>Short, structured alignment with your VA or team. Review priorities, flag bottlenecks, and leave with clear ownership. Keeps you ahead of the chaos.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>🧠</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>3. The 2-Minute Rule & Delegate Matrix</h2>
              <p>If a task takes less than 2 minutes, do it instantly. If it's repetitive or outside your zone of genius — delegate to a skilled assistant. Use tools like Trello or ClickUp for seamless handoffs.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>📊</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>4. Batching & Theme Days</h2>
              <p>Marketing Mondays, finance Tuesdays. Batching similar tasks reduces context switching and skyrockets focus. Pair this with a virtual assistant who handles operational loose ends.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '24px', border: '1px solid #e5e5e5', borderRadius: '16px', background: 'white' }}>
              <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚡</div>
              <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '8px' }}>5. Energy Mapping & Deep Work Audit</h2>
              <p>Track when you have peak mental clarity. Protect those hours fiercely. Use a VA to handle low-energy tasks (inbox sorting, research) during your off-peak windows.</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #059669', padding: '24px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#065f46', margin: 0 }}>
              💡 Implement even 2 of these systems, and you'll gain back 8–10 hours weekly. Combine them with an executive VA and you'll operate like a Fortune 500 CEO.
            </p>
          </div>

          <div style={{ backgroundColor: '#f4f4f5', borderRadius: '12px', padding: '32px', marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Ready to Reclaim Your Time?</h3>
            <p style={{ marginBottom: '24px' }}>Learn more about how executive support can help you implement these systems.</p>
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