from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch
from reportlab.lib.colors import blue

pdf_path = "Narayani_Pandey_Resume_Compact.pdf"

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='MyHeading', parent=styles['Heading1'], spaceAfter=1, spaceBefore=4))
styles.add(ParagraphStyle(name='NormalSmall', parent=styles['Normal'], fontSize=9, leading=11))
styles.add(ParagraphStyle(name='LinkStyle', parent=styles['Normal'], fontSize=9, leading=11, textColor=blue))

doc = SimpleDocTemplate(pdf_path, pagesize=A4,
                        rightMargin=35,leftMargin=35,
                        topMargin=30,bottomMargin=5)

story = []

# Header with tagline
story.append(Paragraph("<b>Narayani Pandey</b>", styles['Title']))
story.append(Paragraph(
    "Top 8% @ TryHackMe | Cybersecurity Enthusiast | CTF Competitor", styles['NormalSmall']))
story.append(Paragraph(
    '<a href="mailto:narayanip868@gmail.com">narayanip868@gmail.com</a> | '
    '<a href="https://www.linkedin.com/in/narayani-pandey/">LinkedIn</a> | '
    '<a href="https://github.com/narayani-88">GitHub</a> | '
    '<a href="https://tryhackme.com/p/narayanip868">TryHackMe</a>',
    styles['NormalSmall']))
# Removed spacer to save space

# Profile
story.append(Paragraph("Profile", styles['MyHeading']))
story.append(Paragraph(
    "Aspiring cyber-security professional with strong foundations in networking, Linux/Windows systems, and both offensive and defensive security. "
    "Practical experience through building security tools, CTFs, and interactive labs.", styles['NormalSmall']))

# Skills
story.append(Paragraph("Technical Skills", styles['MyHeading']))
skills_text = ("<b>Security & Networking:</b> Network fundamentals, cryptography, web app security, exploitation basics, defensive solutions, SIEM, IDS. "
               "<b>Operating Systems:</b> Linux (bash), Windows & AD, PowerShell. "
               "<b>Tools:</b> Hydra, Gobuster, SQLMap, Burp Suite, Metasploit, CyberChef, REMnux, FlareVM. "
               "<b>Programming/Tech:</b> Python, JavaScript/Next.js, Tailwind, Firebase, Google Gemini API.")
story.append(Paragraph(skills_text, styles['NormalSmall']))

# Projects with live links inline
story.append(Paragraph("Key Projects", styles['MyHeading']))
projects = [
    ("NIDS – Network Intrusion Detection System",
     'AI-powered network monitoring & vulnerability assessment. '
     '<a href="https://github.com/narayani-88/NiDS">GitHub</a>'),
    ("nSploit – Metasploit Module Organizer",
     'Smart search/filter for Metasploit modules. '
     '<a href="https://nsploit.netlify.app/">Live</a> | <a href="https://github.com/narayani-88/nSploit">GitHub</a>'),
    ("HashSleuth",
     'Detects multiple cryptographic hash types. '
     '<a href="https://nhash.netlify.app/">Live</a> | <a href="https://github.com/narayani-88/HashSleuth">GitHub</a>'),
    ("Nrecon – Ethical Recon Tool",
     'AI-powered recon & scanning with consent-based checks. '
     '<a href="https://nrecon.netlify.app/">Live</a> | <a href="https://github.com/narayani-88/Nrecon">GitHub</a>'),
    ("Homoglyph Phishing Detector",
     'Chrome extension for typosquatting & homoglyph attack detection. '
     '<a href="https://github.com/narayani-88/Homoglyph-Detector">GitHub</a>'),
    ("Quantum Encryption Journey",
     'Interactive quantum encryption visualization. '
     '<a href="https://q6-fold-prototype-dzni8n8d7-narayani-pandeys-projects.vercel.app/">Demo</a> | <a href="https://github.com/narayani-88/Quantum-Encryption">GitHub</a>')
]
for title, desc in projects:
    story.append(Paragraph(f"<b>{title}</b> – {desc}", styles['NormalSmall']))

# Certifications
story.append(Paragraph("Certifications", styles['MyHeading']))
certs = [
    ('Introduction to Cyber Security – TryHackMe',
     'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-Z6WHHSMQ9J.pdf'),
    ('Defensive Security – TryHackMe',
     'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-QGX7TXIS4F.pdf'),
    ('Cyber Security Job Simulation – Forage',
     'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_DpSozATQbNThTWFfz_1755696974583_completion_certificate.pdf')
]
for name, link in certs:
    story.append(Paragraph(f'<a href="{link}">{name}</a>', styles['LinkStyle']))

# Add minimal spacing at end to prevent automatic spacing
story.append(Spacer(1, 0.01*inch))

doc.build(story)
print(f"Resume generated: {pdf_path}")
pdf_path
