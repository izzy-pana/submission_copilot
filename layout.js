export const metadata = {
  title: "Submission Copilot",
  description: "Bullhorn-connected candidate submission assistant"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>{children}</body>
    </html>
  );
}
