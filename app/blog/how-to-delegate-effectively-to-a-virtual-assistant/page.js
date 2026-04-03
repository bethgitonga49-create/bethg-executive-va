import Link from "next/link";

export const metadata = {
  title: "How to Delegate Effectively to a Virtual Assistant",
  description: "Learn the art of delegation that actually saves you time instead of creating more work.",
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
            <span style={{ padding: '6px 16px', backgroundColor: '#f0fdf4', color: '#166534', borderRadius: '50px', fontSize: '12px', fontWeight: '600' }}>Delegation</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>January 25, 2026</span>
            <span style={{ fontSize: '14px', color: '#71717a' }}>• 5 min read</span>
          </div>
          
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: '1.2' }}>
            How to Delegate Effectively to a Virtual Assistant
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
          
          <div style={{ backgroundColor: '#f3f0fa', padding: '24px', borderRadius: '16px', marginBottom: '32px' }}>
            <p style={{ fontSize: '18px', fontStyle: 'italic', margin: 0 }}>
              "I hired a VA before but ended up spending more time explaining tasks than doing them myself."
            </p>
            <p style={{ marginTop: '12px', marginBottom: 0 }}>— I hear this often.</p>
          </div>

          <p style={{ marginBottom: '24px' }}>
            Delegation isn't about dumping tasks — it's about <strong>transferring ownership with clarity</strong>. Here's the 3-step blueprint I use with every client:
          </p>

          <div style={{ marginBottom: '32px' }}>
            <div style={{ marginBottom: '24px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '12px', background: 'white' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📹</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>1. Start with SOPs</h3>
              <p>Record a Loom video or document the "why" and "how". A 10-minute guide saves hours of back-and-forth.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '12px', background: 'white' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>📄</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>2. Use the "One-Pager Test"</h3>
              <p>Write instructions that a smart 12-year-old could follow. Clear, step-by-step, with expected outcomes.</p>
            </div>

            <div style={{ marginBottom: '24px', padding: '20px', border: '1px solid #e5e5e5', borderRadius: '12px', background: 'white' }}>
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔄</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>3. Create a Feedback Loop</h3>
              <p>Weekly 15-minute reviews to refine processes. Celebrate wins, tweak gaps.</p>
            </div>
          </div>

          <div style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #059669', padding: '24px', margin: '32px 0', borderRadius: '0 8px 8px 0' }}>
            <p style={{ fontSize: '18px', fontWeight: 600, color: '#065f46', margin: 0 }}>
              💡 Start delegating low-stakes, recurring tasks first. Once trust is built, elevate your VA to strategy execution.
            </p>
          </div>

          <div style={{ backgroundColor: '#f4f4f5', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>Ready to Delegate Like a Pro?</h3>
            <p style={{ marginBottom: '24px' }}>Let's build systems that actually save you time.</p>
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