import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  whatsapp?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  whatsapp = "Not provided",
  service = "Not specified",
  budget = "Not specified",
  timeline = "Not specified",
  message,
}) => (
  <div style={{ fontFamily: "sans-serif", padding: "20px", color: "#333" }}>
    <h2 style={{ borderBottom: "1px solid #eee", paddingBottom: "10px" }}>New Portfolio Lead</h2>
    <p><strong>From:</strong> {fullName}</p>
    <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
    <p><strong>WhatsApp / Phone:</strong> {whatsapp}</p>
    <p><strong>Service Requested:</strong> <span style={{ color: "#2563eb", fontWeight: "bold" }}>{service}</span></p>
    <p><strong>Project Budget:</strong> <span style={{ color: "#16a34a", fontWeight: "bold" }}>{budget}</span></p>
    <p><strong>Project Timeline:</strong> <span style={{ color: "#7c3aed", fontWeight: "bold" }}>{timeline}</span></p>
    <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px", borderLeft: "4px solid #2563eb" }}>
      <p style={{ marginTop: 0, fontWeight: "bold" }}>Message:</p>
      <blockquote style={{ margin: 0, fontStyle: "italic" }}>{message}</blockquote>
    </div>
  </div>
);
