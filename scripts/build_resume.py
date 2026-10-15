"""Generate Courtney Youngberg's resume PDF, styled to match the portfolio site."""

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, HRFlowable, KeepTogether,
)

INK = HexColor("#1c1b1a")
MUTED = HexColor("#57534e")
ACCENT = HexColor("#14574a")
BORDER = HexColor("#d6d3cd")

OUT = "/Users/courtneyyoungberg/Desktop/Portfolio/public/resume/courtney-youngberg-resume.pdf"

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=26, textColor=INK),
    "role": ParagraphStyle("role", fontName="Helvetica", fontSize=11, leading=14, textColor=ACCENT, spaceBefore=2),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=8.5, leading=12, textColor=MUTED, spaceBefore=4),
    "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=9.5, leading=13.5, textColor=INK, spaceBefore=8),
    "h2": ParagraphStyle("h2", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=ACCENT,
                          spaceBefore=11, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=6),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, spaceBefore=1),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, leading=12.2, textColor=INK,
                              leftIndent=12, bulletIndent=2, spaceBefore=2.5),
    "skill": ParagraphStyle("skill", fontName="Helvetica", fontSize=9, leading=12.5, textColor=INK, spaceBefore=2.5),
}

HEADLINE = "I turn messy data and manual processes into useful systems."
SUMMARY = (
    "Data and QA professional with over a decade of experience across higher education, healthcare technology, "
    "customer success operations, clinical research, and public safety data. I build and validate analytics, "
    "automations, data products, and decision-support tools that bridge technical systems and business needs."
)

EXPERIENCE = [
    ("Oracle APEX & SQL QA Tester", "Antech Diagnostics", "August 2026 – present", [
        "Perform end-to-end functional, regression, and user-acceptance testing for Oracle APEX web applications supporting contracts, pricing, sales, accounting, and customer programs.",
        "Write SQL queries to build test scenarios, locate the right accounts and contracts, and validate application data across different workflow states.",
        "Validate complex contract workflows (new agreements, renewals, amendments, approvals, signatures, activations, incentives, rebates, pricing changes, and eligibility) across U.S. and Canadian markets.",
        "Test role-based access and permissions across user types; document defects in Jira with clear reproduction steps, evidence, test data, and expected versus actual results.",
        "Collaborate with product managers, developers, and business stakeholders to clarify requirements and edge cases; perform exploratory testing beyond acceptance criteria to catch regressions and usability gaps.",
    ]),
    ("Senior Research Analyst", "Orange Coast College", "April 2024 – July 2026", [
        "Developed and supported institutional effectiveness projects spanning instructional planning, accreditation, compliance reporting, student success, and faculty access to program data.",
        "Automated PSLO and required-course data collection from 300+ program websites using Python, generating 300+ customized Excel workbooks. Cut roughly two months of manual preparation and eliminated the need for temporary staffing.",
        "Analyzed two years of course and program data for ACCJC accreditation review; identified and submitted 70 programs with 50%+ online availability.",
        "Created the Department of Defense XML process translating ~1,600 catalog courses into an annual upload-ready compliance file for military tuition assistance.",
        "Built Power BI dashboards tracking four academic years of Zero Cost Textbook data, plus a Time to Completion dashboard for student progress and program effectiveness.",
        "Built a web-based PPG-1 disproportionate-impact calculator and created SQL reports, dashboards, and data tools supporting equity-centered decision-making.",
    ]),
    ("Retention Research Analyst", "Coastline College", "June 2023 – April 2024", [
        "Developed and implemented data-driven projects under the guidance of the Dean of Institutional Effectiveness.",
        "Engineered a Python web scraper extracting academic course-offering data from 500+ websites; merged results with student records via SQL, identifying 200+ students eligible for certificates.",
        "Built interpretable retention models (logistic regression, ROC AUC ≈ 0.719; outreach validation ≈ 0.679) to prioritize student outreach.",
        "Created Power BI dashboards on degree and certificate attainment across demographic factors; produced weekly enrollment, drop, and Pell Grant reporting.",
    ]),
    ("CS Technology Operations Analyst", "Tebra", "January 2022 – October 2023", [
        "Spearheaded development of customer success metrics using Snowflake analytics to assess customer health at the account level.",
        "Generated custom reports for federal subpoenas and search warrants in collaboration with legal and database teams.",
        "Analyzed declining CSAT scores and presented strategic recommendations to executives for policy development.",
        "Built custom Gainsight workflows and goals with Support leadership, improving workforce efficiency and accuracy.",
    ]),
    ("Data Services Technology Lead", "Kareo", "February 2020 – January 2022", [
        "Built and customized 4 Jira Service Desk projects with custom workflows and automation, achieving an 85% time-efficiency improvement.",
        "Automated a manual customer-outreach workflow in Jira as a state machine (timed re-sends, auto-close, reopen on reply, role-based routing), with a pre-payment data-readiness checklist that reduced rework.",
        "Developed a new bulk clinical-document import process that created a new revenue stream, and wrote SQL scripts automating data mapping and cleaning for a 70% per-project efficiency gain.",
    ]),
    ("Data Services Supervisor", "Kareo", "November 2018 – February 2020", [
        "Led, trained, and managed a team of 7, including 2 offshore employees in Costa Rica.",
        "Created an incoming vendor data-quality process resulting in a 76% decrease in unneeded engineering tickets.",
        "Partnered with engineering on tooling delivering a 3x increase in upload speed; tested and implemented the CCDA (summary of care) import tool.",
    ]),
    ("Data Integration Specialist", "Kareo", "September 2017 – November 2018", [
        "Planned and executed data conversion and migration between legacy and target healthcare systems; cleansed and validated customer data through structured testing.",
    ]),
    ("Associate Data Manager", "iCardiac Technologies", "November 2016 – September 2017", [
        "Supported data and report-definition requirements for clinical studies; validated data, maintained study documentation, and resolved data queries.",
    ]),
    ("Implementation Specialist / Data Specialist", "West Safety Services", "September 2014 – November 2016", [
        "Managed cell tower data in the 9-1-1 wireless database at 99+% accuracy with 100% on-time delivery; helped lead process-automation updates across multiple teams.",
    ]),
]

SKILLS = [
    ("Data & Querying", "SQL, Snowflake, SQL Server, Oracle/ODS, ARGOS, data validation"),
    ("Programming & Automation", "Python, R, pandas, Selenium, openpyxl, web scraping, workflow automation"),
    ("BI & Analytics", "Power BI, Tableau, Excel, statistical analysis, logistic regression, dashboards"),
    ("QA & Testing", "functional, regression & UAT testing, test case design, defect tracking (Jira), SQL data validation, exploratory testing"),
    ("Business Systems", "Oracle APEX, Salesforce, Gainsight, Jira Service Desk"),
    ("Methods", "requirements analysis, process improvement, stakeholder communication, data modeling, documentation"),
    ("Cloud & Technical", "AWS fundamentals, APIs, XML, integration concepts, reporting automation"),
]

EDUCATION = [
    "B.S. Biological Sciences and Zoology — Colorado State University",
    "Data Science Certificate — University of California, Irvine",
    "AWS Certified Cloud Practitioner — Amazon Web Services",
]

doc = BaseDocTemplate(OUT, pagesize=letter,
                      leftMargin=0.75 * inch, rightMargin=0.75 * inch,
                      topMargin=0.65 * inch, bottomMargin=0.6 * inch,
                      title="Courtney Youngberg — Resume",
                      author="Courtney Youngberg")
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main")
doc.addPageTemplates([PageTemplate(id="page", frames=[frame])])

story = [
    Paragraph("Courtney Youngberg", styles["name"]),
    Paragraph("Data, Automation &amp; Analytics", styles["role"]),
    Paragraph(
        'courtneyyoungberg.com &nbsp;·&nbsp; courtney.youngberg@gmail.com &nbsp;·&nbsp; '
        'linkedin.com/in/courtney-youngberg &nbsp;·&nbsp; github.com/courtshark',
        styles["contact"]),
    Spacer(1, 4),
    HRFlowable(width="100%", thickness=0.75, color=BORDER),
    Paragraph(f"<b>{HEADLINE}</b> {SUMMARY}", styles["summary"]),
    Paragraph("EXPERIENCE", styles["h2"]),
    HRFlowable(width="100%", thickness=0.5, color=BORDER),
]

for role, org, period, bullets in EXPERIENCE:
    block = [
        Paragraph(f"{role} — <font color='#57534e'>{org}</font>", styles["job"]),
        Paragraph(period, styles["meta"]),
    ]
    block += [Paragraph(b, styles["bullet"], bulletText="–") for b in bullets]
    story.append(KeepTogether(block))

story += [
    Paragraph("SKILLS", styles["h2"]),
    HRFlowable(width="100%", thickness=0.5, color=BORDER),
]
for title, items in SKILLS:
    story.append(Paragraph(f"<b>{title}:</b> {items}", styles["skill"]))

story += [
    Paragraph("EDUCATION &amp; CREDENTIALS", styles["h2"]),
    HRFlowable(width="100%", thickness=0.5, color=BORDER),
]
for line in EDUCATION:
    story.append(Paragraph(line, styles["skill"]))

doc.build(story)
print("wrote", OUT)
