export default function Home() {
  return (
    <main style={{ maxWidth: 760, margin: "80px auto", padding: "0 24px" }}>
      <h1>Submission Copilot</h1>
      <p>Bullhorn-connected candidate submission assistant.</p>
      <div style={{ marginTop: 32, padding: 24, border: "1px solid #ddd", borderRadius: 12 }}>
        <h2>Setup status</h2>
        <p>✅ Application is running</p>
        <p>⬜ Bullhorn OAuth credentials</p>
        <p>⬜ Bullhorn candidate retrieval</p>
        <p>⬜ Resume + prescreen retrieval</p>
        <p>⬜ JobOrder retrieval</p>
        <p>⬜ AI submission generation</p>
      </div>
    </main>
  );
}
