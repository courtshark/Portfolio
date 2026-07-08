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
                          spaceBefore=14, spaceAfter=2),
    "job": ParagraphStyle("job", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceBefore=8),
    "meta": ParagraphStyle("meta", fontName="Helvetica", fontSize=8.5, leading=11, textColor=MUTED, spaceBefore=1),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9, leading=12.2, textColor=INK,
                              leftIndent=12, bulletIndent=2, spaceBefore=2.5),
    "skill": ParagraphStyle("skill", fontName="Helvetica", fontSize=9, leading=12.5, textColor=INK, spaceBefore=2.5),
}

HEADLINE = "I turn messy data and manual processes into useful systems."
SUMMARY = (
    "Senior research analyst with ~10 years of experience across higher education, healthcare technology, "
    "customer success operations, clinical research, and public safety data. I build analytics, automations, "
    "data products, and decision-support tools that bridge technical systems and business needs."
)

EXPERIENCE = [
    ("Senior Research Analyst", "Orange Coast College", "April 2024 – present", [
        "Develop and support institutional effectiveness projects spanning instructional planning, accreditation, compliance reporting, student success, and faculty access to program data.",
        "Automated PSLO and required-course data collection from 300+ program websites using Python, generating 300+ customized Excel workbooks. Cut roughly two months of manual preparation and eliminated the need for temporary staffing.",
        "Analyzed two years of course and program data for ACCJC accreditation review; identified and submitted 70 programs with 50%+ online availability.",
        "Created the Department of Defense XML process translating ~1,600 catalog courses into an annual upload-ready compliance file for military tuition assistance.",
        "Built Power BI dashboards tracking four academic years of Zero Cost Textbook data, plus a Time to Completion dashboard for student progress and program effectiveness.",
        "Built a web-based PPG-1 equity gap calculator with data import and auto-calculation, helping faculty and staff identify equity gaps in student outcomes.",
        "Create SQL reports, dashboards, and data tools; support equity-centered data coaching for faculty, classified professionals, and managers.",
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
        "Developed a new bulk clinical-document import process that created a new revenue stream for the company.",
        "Programmed advanced SQL scripts automating data mapping and cleaning, achieving a 70% efficiency gain per project.",
    ]),
    ("Data Services Supervisor", "Kareo", "November 2018 – February 2020", [
        "Led, trained, and managed a team of 7, including 2 offshore employees in Costa Rica.",
        "Created an incoming vendor data-quality process resulting in a 76% decrease in unneeded engineering tickets.",
        "Partnered with engineering on tooling delivering a 3x increase in upload speed; tested and implemented the CCDA (summary of care) import tool.",
    ]),
    ("Data Integration Specialist", "Kareo", "September 2017 – November 2018", [
        "Planned and executed data conversion and migration between legacy and target healthcare systems, on time and within budget.",
        "Extracted, cleansed, transformed, and loaded customer data, verifying accuracy and application performance through structured testing.",
    ]),
    ("Associate Data Manager", "iCardiac Technologies", "November 2016 – September 2017", [
        "Supported data and report-definition requirements for clinical studies; validated data and maintained study documentation.",
        "Issued and resolved data queries; contributed to standardization of data-management procedures.",
    ]),
    ("Implementation Specialist / Data Specialist", "West Safety Services", "September 2014 – November 2016", [
        "Managed cell tower data in the 9-1-1 wireless database with a 99+% report accuracy rate and 100% on-time deliverables.",
        "Helped lead process-automation updates across multiple teams; received an excellence award for a large-scale project.",
    ]),
]

SKILLS = [
    ("Data & Querying", "SQL, Snowflake, SQL Server, Oracle/ODS, ARGOS, data validation"),
    ("Programming & Automation", "Python, R, pandas, Selenium, openpyxl, web scraping, workflow automation"),
    ("BI & Analytics", "Power BI, Tableau, Excel, statistical analysis, logistic regression, dashboards"),
    ("Business Systems", "Salesforce, Gainsight, Jira Service Desk"),
    ("Methods", "requirements analysis, process improvement, stakeholder communication, data modeling, QA, documentation"),
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
