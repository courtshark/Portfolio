import type { CaseStudy } from "@/lib/types";

/**
 * Case-study content, keyed by project slug.
 *
 * Confidentiality rules:
 * - Employer-internal case studies use anonymized descriptions and
 *   clearly labeled synthetic examples. Never paste real institutional
 *   data, internal URLs, table names, or student records into this file.
 * - Code snippets marked `synthetic: true` are illustrative
 *   reconstructions, not production source.
 */
export const caseStudies: CaseStudy[] = [
  /* ------------------------------------------------------------------ */
  /* Flagship: Equity Gap Calculator                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "equity-gap-calculator",
    subtitle:
      "Translating complex statistical methodology into an accessible decision-support application for higher education practitioners.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "The Equity Gap Calculator is a live, public web application that answers one question well: which student groups are succeeding at lower rates than their peers, and by how much? It implements the PPG-1 (percentage point gap) methodology from the California Community Colleges Chancellor's Office, the state's official approach to identifying disproportionate impact, and wraps it in a product a practitioner can use in minutes with a CSV export or a pasted Excel table.",
          },
          {
            type: "p",
            text: "This is a methodology-translation project as much as a software project. The statistical rules already existed in policy documents: subgroup versus all-other comparisons, margin-of-error thresholds, minimum-n handling. The work was turning them into a tool that produces defensible answers for people who are not statisticians, without dumbing the method down.",
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "California community colleges are required to identify disproportionate impact in student outcomes for equity plans, program review, and accreditation. The Chancellor's Office publishes the PPG-1 methodology for doing this, but in practice the calculation lives in scattered spreadsheet templates, one-off scripts, and institutional research offices with long request queues.",
          },
          {
            type: "p",
            text: "The people who most need the answer usually can't get it without filing a data request and waiting. That includes faculty leading a program review, a dean preparing an equity plan, and any counselor questioning a pattern they noticed. And when the calculation is done by hand in a spreadsheet, the subtle parts, like the error threshold and small-group handling, are exactly the parts that get skipped.",
          },
        ],
      },
      {
        id: "users",
        title: "Users",
        blocks: [
          {
            type: "list",
            items: [
              "Institutional researchers who know the methodology and want a faster, consistent way to run it.",
              "Faculty and administrators doing program review or equity planning who have data but not statistical training.",
              "Student-services and equity practitioners who need a shared, credible number to organize action around.",
            ],
          },
          {
            type: "p",
            text: "These groups have very different tolerance for statistical language, which drove one of the core product decisions: every result is available in a simple mode with plain-language findings and a technical mode with rates, gaps, thresholds, and counts. Same calculation, two presentations.",
          },
        ],
      },
      {
        id: "context",
        title: "Context",
        blocks: [
          {
            type: "p",
            text: "This is a personal project with an institutional origin story. I built the first version on my own laptop to support my own campus's equity work, as a way to make the PPG-1 analysis I was already doing available on demand. Since the methodology applies to every California community college rather than just one, I bought a domain, generalized the tool beyond a single campus, and released it publicly as a personal project for any practitioner in the system.",
          },
          {
            type: "p",
            text: "It uses only the public PPG-1 methodology and the user's own data. No institutional data ships with the tool, and it links back to the Chancellor's Office methodology notes so users can verify the approach against the source.",
          },
        ],
      },
      {
        id: "my-role",
        title: "My Role",
        blocks: [
          {
            type: "p",
            text: "Everything: product definition, methodology research, interaction design, implementation, validation, and deployment. I used AI coding tools to speed up implementation, with review, while owning the methodology decisions, the validation logic, and every judgment call about how results are computed and communicated. The statistical correctness is mine to defend, and I can.",
          },
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        blocks: [
          {
            type: "list",
            items: [
              "Fidelity to the published methodology. A tool like this is only useful if an IR office would sign off on its numbers.",
              "Privacy: users upload student-level data, so processing had to stay in the browser rather than shipping records to a server.",
              "Audience range: the same result screen serves statisticians and people who have never heard the phrase 'margin of error'.",
              "Messy real-world inputs: institutional exports differ in column names, encodings, and category labels, and the tool has to cope.",
            ],
          },
        ],
      },
      {
        id: "methodology",
        title: "Methodology",
        blocks: [
          {
            type: "p",
            text: "PPG-1 compares each subgroup's success rate to the rate of all other students combined: PPG-1 = subgroup rate − all-other rate. A negative gap alone is not enough to flag disproportionate impact. The gap must also exceed a margin-of-error threshold that accounts for subgroup size, so small groups aren't flagged (or cleared) on statistical noise.",
          },
          {
            type: "table",
            caption: "Illustrative PPG-1 output (synthetic data)",
            synthetic: true,
            headers: ["Group", "n", "Success rate", "All-other rate", "PPG-1", "Status"],
            rows: [
              ["Group A", "412", "71.4%", "69.8%", "+1.6 pts", "On track or above"],
              ["Group B", "138", "61.1%", "70.9%", "−9.8 pts", "Gap detected"],
              ["Group C", "57", "66.7%", "70.2%", "−3.5 pts", "Below average, within threshold"],
              ["Group D", "8", "—", "—", "—", "Insufficient data (n ≤ 10)"],
            ],
          },
          {
            type: "p",
            text: "The tool also computes a gap-closing estimate for each flagged group: the number of additional successful outcomes required to close the gap. This turns an abstract percentage into a concrete, discussable target. 'About 14 more students succeeding' is something a program can plan around.",
          },
        ],
      },
      {
        id: "product-decisions",
        title: "Product Decisions",
        blocks: [
          {
            type: "list",
            items: [
              "Simple and technical result modes, not one compromise view. Practitioners get plain language ('Gap detected'); researchers get rates, thresholds, and counts.",
              "Insufficient data is a first-class result state, not an error. Small groups are reported as unreliable rather than silently dropped or falsely flagged.",
              "Percentage and count toggles, because equity conversations need both 'how big is the gap' and 'how many students is that'.",
              "Export, share, and print built in. This analysis is headed for a meeting, a plan, or a report, not the screen.",
              "Links to the official Chancellor's Office methodology notes, so the tool's authority is checkable rather than asserted.",
            ],
          },
        ],
      },
      {
        id: "data-import-architecture",
        title: "Data Import Architecture",
        blocks: [
          {
            type: "p",
            text: "Real adoption depends on meeting data where it lives. The tool accepts four input paths that converge on one normalized internal representation before any analysis runs:",
          },
          {
            type: "list",
            items: [
              "Student-level file upload: CSV, .xlsx, or .xls exports straight from institutional systems.",
              "Pasted data: a table copied from Excel or a report and pasted directly into the app.",
              "Pre-aggregated entry: group-by-group counts for users who only have summary tables.",
              "Automatic column detection: headers are matched to expected fields (demographics, outcomes, optional fields like course/section, retention, discipline, subject, and education goal) with the user confirming the mapping.",
            ],
          },
          {
            type: "diagram",
            diagram: "equity-calculator-flow",
            caption:
              "Import paths converge on a validated, normalized dataset before the PPG-1 engine runs.",
          },
        ],
      },
      {
        id: "validation-rules",
        title: "Validation Rules",
        blocks: [
          {
            type: "p",
            text: "Because users bring their own data, validation is the product's immune system. Rules run at import and again at analysis time:",
          },
          {
            type: "list",
            items: [
              "Structural checks: required columns present, outcome values interpretable, rows with unusable records surfaced rather than silently dropped.",
              "Category normalization: demographic labels mapped to consistent groups before comparison.",
              "Minimum-n enforcement: groups at or below the reliability threshold (n ≤ 10) are reported as 'insufficient data' and excluded from flagging.",
              "Aggregation consistency: pre-aggregated inputs are checked for internally consistent counts (successes cannot exceed attempts).",
            ],
          },
          {
            type: "code",
            language: "ts",
            label: "Threshold logic (illustrative)",
            synthetic: true,
            code: `function classify(group: GroupResult, threshold: number): Status {
  if (group.n <= MIN_RELIABLE_N) return "insufficient-data";
  const ppg1 = group.successRate - group.allOtherRate; // percentage points
  if (ppg1 <= -threshold) return "gap-detected";      // beyond margin of error
  if (ppg1 < 0) return "below-average";               // within margin of error
  return "on-track";
}`,
          },
        ],
      },
      {
        id: "analysis-workflow",
        title: "Analysis Workflow",
        blocks: [
          {
            type: "p",
            text: "The app is organized as a three-step workflow: bring data in, run the calculation, review results. Demographic breakdowns cover Race/Ethnicity, Gender, and Age. Results pair a success-rate visualization with per-group status (gap detected, below average, on track or above, or insufficient data), and from there users can export to Excel, print, or share.",
          },
        ],
      },
      {
        id: "user-experience",
        title: "User Experience",
        blocks: [
          {
            type: "p",
            text: "The UX principle throughout: the tool should feel like a knowledgeable colleague, not a statistics exam. Plain-language status labels lead, and precise figures are one toggle away. Error states explain what to fix, not just what failed. The riskiest misreading would be treating a noisy small-group result as a finding, so 'insufficient data' gets its own prominent, explained status.",
          },
        ],
      },
      {
        id: "technical-implementation",
        title: "Technical Implementation",
        blocks: [
          {
            type: "p",
            text: "A client-side web application: parsing, validation, and the PPG-1 engine run in the browser. That is both a privacy stance (student-level records never leave the user's machine) and an operational one (no data-retention surface to secure). File parsing handles CSV and Excel formats, and the calculation engine is isolated from the UI so the statistical logic is testable on its own.",
          },
          {
            type: "p",
            text: "I used AI coding tools to move faster on implementation scaffolding, and treated their output the way I'd treat a junior developer's: reviewed, tested, and corrected. The methodology layer, meaning what gets computed, when a group is flagged, and how edge cases resolve, was specified and verified by hand against the published methodology.",
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "A live, public tool at di-calculator.com that performs the state's official disproportionate-impact calculation for anyone with a data export. No request queue, no spreadsheet template, no skipped error thresholds. It stands as the clearest public demonstration of what I do: take a method buried in policy documents and manual process, and turn it into a system people can actually use.",
          },
        ],
      },
      {
        id: "lessons-learned",
        title: "Lessons Learned",
        blocks: [
          {
            type: "list",
            items: [
              "Methodology translation is a design problem. Most of the hard decisions were about presentation and edge cases, not formulas.",
              "A tool built for one audience can be one rebrand away from serving a much bigger one. Generalizing beyond a single campus turned a campus tool into a public product.",
              "Import flexibility is the adoption feature. Every input path added (paste, pre-aggregated, auto-detection) removes a reason to give up.",
              "'Insufficient data' handling is where credibility is won or lost. Sometimes the honest answer is 'this group is too small to say'.",
            ],
          },
        ],
      },
      {
        id: "future-improvements",
        title: "Future Improvements",
        blocks: [
          {
            type: "list",
            items: [
              "Additional methodologies (e.g. proportionality index, 80% rule) behind the same import and results experience.",
              "Cohort-over-time comparisons to track whether identified gaps are closing.",
              "Saved analysis configurations for recurring program-review cycles.",
              "A documented test suite published alongside the methodology notes, so IR offices can audit the calculations directly.",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* PSLO Automation System                                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "pslo-automation",
    subtitle:
      "Replacing a two-month manual collection process across 300+ program websites with a validated Python pipeline.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "An institutional research office needed program student learning outcome (PSLO) information collected from 300+ program websites and delivered as 300+ individual, consistently formatted Excel workbooks. The existing plan was months of manual copy-paste work, likely with temporary staffing. I built a Python pipeline that automated the collection, structuring, workbook generation, and QA, saving roughly two months of manual effort in a single cycle.",
          },
          {
            type: "stats",
            items: [
              { value: "300+", label: "program websites processed" },
              { value: "300+", label: "Excel workbooks generated" },
              { value: "~2 months", label: "manual effort saved" },
            ],
          },
          {
            type: "callout",
            tone: "confidential",
            title: "Anonymized case study",
            text: "This work was done inside an institution. The architecture, code, and examples shown here are anonymized or synthetic; no institutional content or internal URLs are reproduced.",
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Program learning outcomes live on public program webpages that have been maintained by many hands over many years, which means inconsistent page structures, inconsistent formatting, and no machine-readable source. The institutional process required this information gathered into a separate, per-program Excel workbook with a specific structure, for every program, on a deadline.",
          },
          {
            type: "p",
            text: "Done by hand, this is weeks of a person's time spent copying text between a browser and Excel. Tedious, error-prone, and expensive. The anticipated solution was temporary staffing, and that was the moment to ask the automation question: is this actually a people problem, or a pipeline problem?",
          },
        ],
      },
      {
        id: "my-role",
        title: "My Role",
        blocks: [
          {
            type: "p",
            text: "I identified the automation opportunity, scoped the requirements with the process owners, built the pipeline, validated the output, and handled the exceptions. That included the business-analysis half of the job, understanding exactly what the downstream process needed each workbook to contain, and not just the scripting half.",
          },
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        blocks: [
          {
            type: "list",
            items: [
              "Source pages were inconsistent, so the pipeline had to be robust to structural variation and fail loudly, not silently, on pages it couldn't parse.",
              "Output workbooks had to match the expected format exactly; downstream users would open them in Excel, not in a database.",
              "A hard institutional deadline: the automation had to beat the manual alternative in calendar time, not just effort.",
              "Accuracy standards of an IR office. A wrong outcome statement attached to a program is worse than a blank one.",
            ],
          },
        ],
      },
      {
        id: "approach",
        title: "Approach & Architecture",
        blocks: [
          {
            type: "p",
            text: "The pipeline has four stages: collect page content from the program URL inventory, extract and structure the outcome information, generate per-program workbooks with openpyxl, and run QA checks comparing structured output back against source content. Programs that failed automated parsing dropped into a short manual-review queue. Automating 95% and routing the rest is how the deadline was met.",
          },
          {
            type: "diagram",
            diagram: "pslo-pipeline",
            caption: "Anonymized pipeline architecture: collection → extraction → generation → QA.",
          },
          {
            type: "code",
            language: "python",
            label: "Workbook generation stage (synthetic example)",
            synthetic: true,
            code: `for program in structured_programs:
    wb = build_workbook(template)
    sheet = wb["PSLOs"]
    sheet["B2"] = program.name
    for row, outcome in enumerate(program.outcomes, start=OUTCOME_START_ROW):
        sheet.cell(row=row, column=2, value=outcome.text)
        sheet.cell(row=row, column=3, value=outcome.source_url)
    validate_workbook(wb, program)   # raises on structural mismatch
    wb.save(out_dir / f"{program.code}.xlsx")`,
          },
        ],
      },
      {
        id: "validation",
        title: "Validation & QA",
        blocks: [
          {
            type: "list",
            items: [
              "Every extracted outcome kept a pointer to its source page for spot-check auditing.",
              "Structural validation ran on every generated workbook before save. Missing sections fail the run for that program instead of shipping a bad file.",
              "Coverage reconciliation: the set of generated workbooks was checked against the full program inventory, so nothing fell through silently.",
              "Human review was focused where it mattered, on the exception queue, instead of spread thin across 300+ programs.",
            ],
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "300+ validated workbooks delivered, roughly two months of manual effort avoided, and the anticipated temporary staffing need removed or reduced. Just as importantly, the process is now repeatable: the next cycle starts from a pipeline, not from a blank spreadsheet and a webpage.",
          },
        ],
      },
      {
        id: "limitations",
        title: "Limitations & Next Improvements",
        blocks: [
          {
            type: "list",
            items: [
              "Source-page inconsistency means some manual review will always remain; the win is shrinking it, not pretending it's zero.",
              "The longer-term fix is upstream: a structured source of record for outcomes, so future cycles are exports rather than extractions. That's a systems recommendation, not just a script.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Python, web automation, and data extraction against inconsistent sources",
              "Excel automation with pandas and openpyxl",
              "Requirements analysis with process owners; validation and QA design",
              "Process improvement framing: recognizing a staffing plan as an automation opportunity",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Certificate Eligibility Discovery Pipeline                          */
  /* ------------------------------------------------------------------ */
  {
    slug: "certificate-eligibility-pipeline",
    subtitle:
      "Combining public program requirements with student records to find hundreds of students already eligible for certificates.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "Students routinely complete the coursework for certificates they never receive. They simply don't know they qualify, and no system tells them. At Coastline College I built an end-to-end discovery pipeline: scrape 500+ public program and course pages, structure the certificate requirements, join them against student records in SQL, and apply business-rule matching. It identified 200+ potentially eligible students and fed a real outreach effort.",
          },
          {
            type: "callout",
            tone: "confidential",
            title: "Anonymized case study",
            text: "Program requirements came from public webpages; student data was used inside the institution under its governance. All examples here are synthetic.",
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Certificate requirements lived in one world (public catalog and program webpages, written for humans) and student completion records lived in another (the student information system). No process connected them. The result was earned-but-unawarded certificates: a completion metric the college was leaving on the table, and credentials students could have been putting on résumés.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach & Architecture",
        blocks: [
          {
            type: "p",
            text: "The pipeline had three phases. Discovery: Python and R scrapers collected 500+ public program and course pages and extracted requirement structures, including required courses, unit thresholds, and elective groups. Matching: requirements were normalized into rule sets and joined against student course-completion records in SQL. Action: matched students were scored against the business rules and packaged into lists that student-services staff could actually work for outreach.",
          },
          {
            type: "diagram",
            diagram: "certificate-pipeline",
            caption:
              "Public requirements and student records converge in a rule-matching layer that outputs an actionable outreach list.",
          },
          {
            type: "code",
            language: "sql",
            label: "Requirement matching (synthetic, simplified)",
            synthetic: true,
            code: `-- For each student x certificate: count satisfied requirements
SELECT s.student_id,
       r.certificate_id,
       COUNT(*)                                    AS reqs_met,
       MAX(req.total_required)                     AS reqs_total
FROM student_completions s
JOIN requirement_courses r
  ON r.course_id = s.course_id AND s.grade_points >= r.min_grade_points
JOIN requirement_totals req
  ON req.certificate_id = r.certificate_id
GROUP BY s.student_id, r.certificate_id
HAVING COUNT(*) >= MAX(req.total_required);`,
          },
        ],
      },
      {
        id: "business-rules",
        title: "Business Rules",
        blocks: [
          {
            type: "p",
            text: "The hard part wasn't scraping. It was encoding how requirements actually work: course equivalencies and renumbering over time, 'choose N from this group' electives, unit minimums, and grade thresholds. Each rule type was implemented explicitly and conservatively. When a requirement couldn't be evaluated cleanly, the student was flagged for human review rather than auto-included or silently excluded.",
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "200+ potentially eligible students identified and handed to an operational outreach process. Analysis that ended in action, not in a report. The project is a compact demonstration of the full arc I care about: ambiguous question → data acquisition → structure → rules → join → validated list → operational use.",
          },
        ],
      },
      {
        id: "limitations",
        title: "Limitations",
        blocks: [
          {
            type: "list",
            items: [
              "'Potentially eligible' is the honest phrasing: final award decisions belong to evaluators applying catalog rights and petition rules the pipeline intentionally did not adjudicate.",
              "Scraped requirements drift as pages change; the pipeline is a snapshot process that needs re-runs, not a live system.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Python and R web scraping and extraction from 500+ public pages",
              "SQL joins and business-rule matching against student records",
              "ETL design, data normalization, and conservative edge-case handling",
              "Operationalization: turning analysis output into a worked outreach process",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Student Success & Retention Modeling                                */
  /* ------------------------------------------------------------------ */
  {
    slug: "retention-modeling",
    subtitle:
      "Interpretable predictive modeling for student outreach, built, validated, and communicated responsibly.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "To support retention outreach, I built interpretable logistic-regression models predicting student persistence risk. The interpretable model reached ROC AUC ≈ 0.719, and performance held at ROC AUC ≈ 0.679 when validated against a subsequent outreach application. Those are honest, modest, useful numbers: good enough to prioritize outreach far better than chance, and reported with their limitations attached.",
          },
          {
            type: "stats",
            items: [
              { value: "0.719", label: "ROC AUC", note: "interpretable model" },
              { value: "0.679", label: "ROC AUC", note: "outreach validation" },
            ],
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Outreach capacity is finite. Advisors and retention staff can meaningfully contact only a fraction of students in a term, so the operative question isn't 'who might leave?' but 'given limited hours, who should we reach first?' That's a ranking problem, and it's exactly what a well-calibrated, interpretable model is for.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          {
            type: "p",
            text: "I chose logistic regression over more complex models on purpose. In a student-success context the model has to be explainable to the people acting on it: an advisor should be able to see why a student is flagged, and leadership should be able to interrogate the features. Feature engineering drew on enrollment intensity, course-taking patterns, and academic progress indicators, and features were vetted for both predictive value and appropriateness for an equity-sensitive use.",
          },
          {
            type: "p",
            text: "Evaluation used held-out data with ROC AUC as the headline discrimination metric. The later outreach-validation check, which measured how the model ranked students in actual application, is the number I consider most meaningful, and it's the lower one: 0.679. Models nearly always degrade from notebook to practice, and reporting that degradation is part of doing this work honestly.",
          },
        ],
      },
      {
        id: "intervention",
        title: "From Scores to Intervention",
        blocks: [
          {
            type: "p",
            text: "A risk score is not an intervention. The model's output was translated into prioritized outreach lists with the drivers attached in plain language, so staff conversations started from context rather than from a number. Score thresholds were set by outreach capacity. The model ranks; humans decide.",
          },
        ],
      },
      {
        id: "limitations",
        title: "Responsible Analytics & Limitations",
        blocks: [
          {
            type: "callout",
            tone: "limitation",
            title: "What this model is not",
            text: "The model is predictive, not causal. It identifies students whose records resemble past non-persisters; it does not establish why, and no causal claims were made from it. It was never used to gate access to anything, only to prioritize supportive outreach.",
          },
          {
            type: "list",
            items: [
              "An AUC around 0.7 means meaningful but imperfect discrimination. The model is a triage aid, not an oracle, and was presented that way.",
              "Predictions were reviewed for the risk of encoding existing inequities; the intended use (more support, sooner) fails safe, but that framing was made explicit rather than assumed.",
              "Whether the outreach itself improved retention is a separate causal question that would require a designed comparison to answer; the validation reported here concerns the model's ranking quality, not intervention effect.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Logistic regression, feature engineering, and model evaluation (ROC AUC) in Python/R",
              "Validation against real-world application, not just held-out data",
              "Interpretation and intervention design with non-technical staff",
              "Responsible-analytics framing: limitations stated, causal claims avoided",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* DoD Tuition Assistance XML Pipeline                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: "dod-ta-xml-pipeline",
    subtitle:
      "A compliance-oriented annual workflow: ~1,600 courses transformed, validated, and submitted in a required XML schema.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "Institutions serving military students must submit course data for Department of Defense tuition assistance in a prescribed XML format, annually, correctly. I owned this workflow: mapping ~1,600 courses from institutional data to the required schema, transforming the data, validating the output, and getting a clean submission through. Unofficial motto: boring on purpose.",
          },
          {
            type: "callout",
            tone: "confidential",
            title: "Anonymized case study",
            text: "Schema and data examples shown here are synthetic and simplified; no institutional records are reproduced.",
          },
        ],
      },
      {
        id: "why-it-mattered",
        title: "Why It Mattered",
        blocks: [
          {
            type: "p",
            text: "This data determines whether military students can apply tuition assistance to the institution's courses. A failed or wrong submission isn't an inconvenience; it's a compliance problem for the institution and a real access problem for students. That risk profile shaped every design choice: validate early, validate again, and make every transformation reviewable.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          {
            type: "p",
            text: "The workflow: extract course data from institutional sources, map fields to the target schema (including the judgment calls where institutional categories don't map one-to-one onto federal ones), transform to XML, validate structurally against the schema and logically against business rules, and reconcile the final file against the source inventory so every expected course is present exactly once.",
          },
          {
            type: "code",
            language: "xml",
            label: "Target structure (synthetic, simplified)",
            synthetic: true,
            code: `<Course>
  <CourseCode>BIO-101</CourseCode>
  <Title>Introduction to Biology</Title>
  <Credits unit="semester">3.0</Credits>
  <DeliveryMode>online</DeliveryMode>
</Course>`,
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "Reliable annual submissions covering ~1,600 courses, with schema-mapping decisions documented so the workflow survives handoffs and audits. It's the least flashy project on this site and one of the most representative: high-stakes data, unglamorous format, zero tolerance for creative errors.",
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "XML, schema mapping, and data transformation",
              "Validation design and QA for compliance-grade output",
              "Automation of a recurring institutional workflow",
              "Documentation that makes a process survivable beyond one person",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* ACCJC Online Program Analysis                                       */
  /* ------------------------------------------------------------------ */
  {
    slug: "accjc-online-program-analysis",
    subtitle:
      "Turning two years of course data into a defensible accreditation answer: which programs crossed the online threshold?",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "Accreditation rules require institutional review when a program can be completed substantially online. The question sounds simple; the data isn't. I analyzed two years of course and program data, encoded the threshold rules explicitly, and identified approximately 70 programs meeting the online-course threshold, with the logic documented so the answer could be defended, re-run, and audited.",
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "Determining whether a program crosses an online threshold means combining program requirement structures with the actual delivery modes of courses over time, while making defensible decisions about hybrid modalities, cross-listed courses, and terms that behave differently. Everyone had an intuition about which programs were 'mostly online'; accreditation needs a rule-based answer, not an intuition.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          {
            type: "list",
            items: [
              "Built SQL analysis over two years of course-section and program data.",
              "Encoded threshold logic as explicit, reviewable business rules, including how hybrid and variable-modality sections count.",
              "Validated results with spot checks against catalog reality before anything was reported.",
              "Delivered the ~70-program list with the methodology attached, so stakeholders reviewed a documented finding rather than a mystery number.",
            ],
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "Approximately 70 programs identified for institutional review, accepted by accreditation stakeholders because the path from raw data to answer was inspectable at every step. This is business analysis and data work fused: the deliverable was as much the documented rule set as the list itself.",
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "SQL analysis across multi-year course and program data",
              "Business-rule design for ambiguous policy language",
              "Data validation and compliance reporting",
              "Stakeholder communication with accreditation audiences",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Zero Cost Textbook Dashboard                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "zero-cost-textbook-dashboard",
    subtitle:
      "Four academic years of course material affordability data, modeled properly and made explorable in Power BI.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "Zero-cost-textbook (ZTC) adoption is a visible institutional priority, and the underlying data spans years, terms, departments, and changing course flags. I built a Power BI dashboard covering four academic years, with a real data model underneath so that filters compose correctly and trend comparisons are trustworthy rather than coincidental.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          {
            type: "list",
            items: [
              "Modeled course, section, and term data into a clean star-style structure rather than reporting off raw extracts.",
              "Designed views around stakeholder questions: adoption over time, by division and department, and where the remaining opportunity is concentrated.",
              "Validated dashboard figures against source queries before stakeholder release.",
            ],
          },
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        blocks: [
          {
            type: "p",
            text: "A dashboard institutional stakeholders use to track affordability progress across four academic years. It gives self-service answers to a recurring question that previously required ad-hoc requests.",
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Power BI data modeling and DAX-backed measures",
              "Multi-year trend visualization and dashboard design",
              "Stakeholder-driven reporting and validation",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Time to Completion Dashboard                                        */
  /* ------------------------------------------------------------------ */
  {
    slug: "time-to-completion-dashboard",
    subtitle:
      "Making degree-completion timelines visible, comparable, and discussable for institutional stakeholders.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "'How long does a degree actually take here?' is one of those institutional questions everyone asks and no single table answers. I built a Time to Completion dashboard that turns student completion timelines into a form leadership and program stakeholders can interrogate directly, designed around the questions asked in program review rather than the shape of the source data.",
          },
        ],
      },
      {
        id: "approach",
        title: "Approach",
        blocks: [
          {
            type: "list",
            items: [
              "Worked with stakeholders to define completion-time measures that match how the institution actually talks about student progress.",
              "Designed the dashboard for comparison across programs and student populations, while keeping small-group figures appropriately caveated.",
              "Presented the dashboard to institutional stakeholders and iterated on what they actually clicked, asked, and misread.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Dashboard design for institutional analytics",
              "Measure definition with non-technical stakeholders",
              "Presentation and iteration based on real usage",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* AI Infrastructure Research Desk                                     */
  /* ------------------------------------------------------------------ */
  {
    slug: "ai-infrastructure-research-desk",
    subtitle:
      "A solo-built research desk that turns scattered market chatter, filings, and news into a structured view of AI-driven market trends, with a complete research workflow on top.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "The AI buildout is repricing whole sectors of the market, and understanding it means watching trends, not tickers. The AI Infrastructure Research Desk is a personal system I built end-to-end to track those trends: which themes are accelerating, which companies benefit directly versus one layer down, and what the evidence actually supports. Data centers are the anchor theme, but the lens is wider on purpose. It covers semiconductors, power and grid, networking, memory, cooling, colocation, and space infrastructure, organized into thematic watchlists across 121 tracked companies.",
          },
          {
            type: "p",
            text: "The desk covers a five-stage workflow as one connected loop: map the theme (which companies benefit, and where the bottlenecks are), discover names early (scanners and scored signals), generate and vet ideas (AI-backed analysis with human review), follow institutional money (13F flows), and manage and learn (planning, an earnings calendar, and a journal whose outcomes feed back into the research). Nothing in the system is a one-shot stock pick. It's a pipeline where each stage's output is the next stage's input.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Private by design, with a public demo",
            text: "The full application and repository are private because the system supports my personal investment research. A sanitized static demo is available: real research data and feeds, but with synthetic portfolio and journal data, personal opinion fields stripped, and analysis prompts withheld. Nothing in the demo or this case study is financial advice.",
          },
        ],
      },
      {
        id: "problem",
        title: "The Problem",
        blocks: [
          {
            type: "p",
            text: "The goal is not to guess the next stock in one step. It's to build a repeatable system that answers structural questions about the AI trend: which themes are inflecting, which companies are direct beneficiaries versus second-order enablers, which relationships are disclosed versus inferred versus unknown, and where the bottlenecks sit, whether that's chips, memory, networking, optics, power, cooling, colocation, or backup generation.",
          },
          {
            type: "p",
            text: "Done manually, this research means re-reading the same filings, re-searching the same names, and losing yesterday's insight in a browser tab. It's the same disease as every manual institutional process I've automated, just with SEC filings instead of program webpages.",
          },
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        blocks: [
          {
            type: "p",
            text: "The system is a Python + SQLite platform with a clear pipeline: collectors ingest from each source on its own cadence, a scoring engine turns raw text into comparable signals, a relational model stores companies, relationships, and evidence, and a local API serves a web UI with watchlists, signal feeds, and premarket views.",
          },
          {
            type: "diagram",
            diagram: "datacenter-tracker-pipeline",
            caption:
              "Multi-source ingestion converges on a scoring engine and a SQLite research model, served locally.",
          },
          {
            type: "list",
            items: [
              "Ingestion: dedicated Python collectors for Reddit, StockTwits, SEC EDGAR filings, company news, and multi-provider market data with automatic fallback between price feeds. Each collector is isolated so one flaky source can't poison the rest.",
              "Two interpretable scoring engines: Early Signals (0–100 breakout-potential scores with catalyst timing) and Breakout Watch (news scoring across categories like guidance raises, earnings beats, and revenue acceleration). Both are keyword-driven on purpose, so every score traces back to the exact phrases that produced it.",
              "Discovery scanners that find names before headlines do: relative volume versus 20-day average, RSI momentum across the tracked universe, and SEC 8-K full-text scanning for contract awards and design wins.",
              "Institutional flows: 13F filing tracking via SEC EDGAR, with the caveats modeled honestly. 13F data lags roughly 45 days, and put positions are flagged as possible hedges rather than directional bets.",
              "Research model: a SQLite schema mapping companies, operator-to-vendor relationships, and the evidence behind each link.",
              "Delivery: a local API server and a web UI organized into sixteen task-focused views, from premarket analysis and signal feeds to a supply-chain map and an earnings calendar.",
            ],
          },
        ],
      },
      {
        id: "data-governance",
        title: "Research Rules: Data Governance for One",
        blocks: [
          {
            type: "p",
            text: "The system runs on written research rules, the same data-governance discipline I'd apply to an institutional dataset:",
          },
          {
            type: "list",
            items: [
              "Separate exposure from valuation. An exposure score estimates how directly a company benefits from data center buildout. It is explicitly not a buy rating.",
              "Track evidence strength. Every operator-to-vendor relationship is labeled High, Medium, or Low confidence based on how directly it is disclosed.",
              "Do not invent backup vendors. If a supplier relationship isn't publicly disclosed, it stays marked unknown rather than plausible-sounding.",
              "Tie every company to a source: official company pages or announcements, not vibes.",
              "Keep market data physically separate from research notes, so stale prices can't silently contaminate source-backed supply-chain work.",
            ],
          },
          {
            type: "p",
            text: "Rule three is my favorite. A research database that refuses to guess is worth more than one that always has an answer.",
          },
        ],
      },
      {
        id: "ai-in-the-loop",
        title: "AI in the Loop, Reviewably",
        blocks: [
          {
            type: "list",
            items: [
              "Model-backed analysis runs (premarket, open-market, and post-market journal reviews) are built with a structured-output API and web search, and they degrade gracefully: without credentials, a local tracker-based fallback keeps every view working.",
              "The UI includes a 'Copy Prompt' control exposing the exact prompt payload behind any analysis, so AI output is inspectable rather than oracular.",
              "AI-generated research (say, a ChatGPT-produced company list) never merges directly. A staging script writes it to a review area where new companies, overlaps, and source quality get checked before anything touches the seed data.",
            ],
          },
          {
            type: "p",
            text: "This is the pattern I bring to AI-assisted work generally: use the model for leverage, keep a human review gate in front of the system of record, and make every automated conclusion traceable.",
          },
        ],
      },
      {
        id: "deployment",
        title: "Deployment Architecture: Local-First on Purpose",
        blocks: [
          {
            type: "p",
            text: "A partial copy runs on Vercel, but the primary system is deliberately local-first, and the reasoning is the part of this project I'd defend in a design review. The workload is a stateful ingestion loop writing continuously to SQLite on disk. Serverless functions have ephemeral filesystems, so truly hosting this means swapping SQLite for an external database, moving collectors into cron jobs or queues, and rebuilding the caching layer. That's a re-architecture, not a deploy.",
          },
          {
            type: "p",
            text: "For a single-user research tool, that re-architecture buys nothing. Locally there are no cold starts, no function timeouts on long multi-step research operations, no function-count ceilings, and no egress bills for hammering my own API. Knowing when not to put something in the cloud is a systems decision too.",
          },
        ],
      },
      {
        id: "two-modes",
        title: "Two Modes, One Desk",
        blocks: [
          {
            type: "p",
            text: "Financial tools have a voice problem. The interface language of a trading desk (tickers, RSI, invalidation levels) signals 'you don't belong here' to anyone who didn't grow up with it. That gatekeeping is a design choice, so I made a different one. The desk ships with two complete interface registers: Full Desk, the dense professional view, and Soft Mode, which rewrites the entire experience in plain, warm language for people just getting into investing. Women are heavily underrepresented in that audience, and not by accident.",
          },
          {
            type: "p",
            text: "Soft Mode isn't a feature-reduced 'lite' version. Same data, same signals, same workflow. What changes is the voice: 'Open Briefing' becomes 'Open calm idea list,' 'Open Retail Pulse' becomes 'Show retail chatter,' and every module explains what it's for and what to click next instead of assuming you already know. It's the same design conviction behind the Equity Gap Calculator's simple and technical result modes. Expertise should live in the analysis, not in the vocabulary barrier. Both modes are in the public demo, so try the toggle.",
          },
        ],
      },
      {
        id: "limitations",
        title: "Limitations & Responsible Framing",
        blocks: [
          {
            type: "list",
            items: [
              "Signal scores are research indicators, not predictions. The scoring is keyword-based and transparent precisely so it can be doubted intelligently.",
              "Supply-chain relationships are only as good as their evidence; the model distinguishes disclosed from inferred links rather than presenting both as fact.",
              "This is a personal research tool. Nothing it produces, and nothing in this case study, is investment advice.",
            ],
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "End-to-end system design: ingestion, scoring, storage, API, and UI built solo",
              "Python ETL against heterogeneous sources (social APIs, SEC EDGAR, news, market data)",
              "Interpretable scoring-engine design and SQLite data modeling",
              "Deployment-architecture judgment: choosing local-first for a stateful workload and knowing what productionizing would require",
              "AI-assisted development used deliberately, with the architecture and every scoring rule owned and reviewed by me",
            ],
          },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Customer Success Technology Operations                              */
  /* ------------------------------------------------------------------ */
  {
    slug: "customer-success-operations",
    subtitle:
      "The reporting, automation, and systems layer behind a healthcare-technology customer success organization.",
    sections: [
      {
        id: "executive-summary",
        title: "Executive Summary",
        blocks: [
          {
            type: "p",
            text: "At Tebra (and Kareo before it), I worked in the operational engine room of customer success for a healthcare-technology company: the Snowflake SQL behind customer-success metrics, the Salesforce and Gainsight configuration behind customer workflows, the Jira Service Desk processes behind support operations, and the custom reporting that let leadership see what was actually happening.",
          },
          {
            type: "callout",
            tone: "confidential",
            title: "Anonymized by design",
            text: "This is proprietary operational work inside a healthcare-technology company, so this case study describes capabilities and patterns rather than specific metrics, customers, or internal details.",
          },
        ],
      },
      {
        id: "the-work",
        title: "The Work",
        blocks: [
          {
            type: "list",
            items: [
              "Customer-success metrics and reporting built on Snowflake SQL: account-level customer health, adoption, and operational measures consumed by CS leadership.",
              "Analysis of declining CSAT scores: identified the key indicators and presented strategic recommendations to executives for policy development.",
              "Custom reporting for federal subpoenas and search warrants, built with legal and database teams. Data work where precision and defensibility are non-negotiable.",
              "Salesforce and Gainsight administration and reporting: the systems where customer reality is recorded, kept useful and trustworthy.",
              "Jira Service Desk workflow design and reporting for operational teams.",
              "Process improvement across the seams, in the gaps between systems and teams where customer experience actually degrades.",
              "All of it in a regulated healthcare-data environment, with the data-handling discipline that implies.",
            ],
          },
        ],
      },
      {
        id: "automation-spotlight",
        title: "Automation Spotlight: Turning a Manual Follow-Up Into a System",
        blocks: [
          {
            type: "p",
            text: "The clearest example of the operations work: a customer-outreach process that used to run entirely on people remembering to do it. When a ticket needed information or data from a customer before it could move forward, an agent had to send the request, remember to follow up, chase again, and eventually close it by hand. Things fell through the cracks constantly.",
          },
          {
            type: "p",
            text: "I rebuilt it in Jira Service Desk as an automated state machine. The system sent the outreach on a schedule up to three times; if the customer never responded, it closed the ticket automatically; and if the customer replied by email, it reopened the ticket and routed it back for review. The same automation moved tickets between the customer-facing role and the analysts, so an analyst could weigh in on what the customer's data could and couldn't support while the customer-facing teammate handled the conversation.",
          },
          {
            type: "p",
            text: "I paired it with a pre-payment data checklist: a short, plain-language guide that helped customers understand their own data and what was and wasn't possible before they paid. It caught data problems early, set honest expectations, and cut the downstream rework that happens when someone buys something their data can't actually support.",
          },
          {
            type: "callout",
            tone: "note",
            title: "Why it reads as QA, not just automation",
            text: "Every ticket now followed one defined path (send, retry, close, reopen) instead of depending on memory, and the checklist put a data-quality gate before money changed hands rather than after. Same instinct as validating a query: define the correct behavior once, then make the system enforce it.",
          },
        ],
      },
      {
        id: "why-it-matters",
        title: "Why It Matters Here",
        blocks: [
          {
            type: "p",
            text: "This chapter is why I'm comfortable in the space between 'the data team' and 'the business': years of being the person who owned both the SQL and the stakeholder meeting. It's also where I learned that most reporting problems are process problems wearing a costume, a lesson that transfers to every domain I've worked in since.",
          },
        ],
      },
      {
        id: "skills",
        title: "Skills Demonstrated",
        blocks: [
          {
            type: "list",
            items: [
              "Snowflake SQL and custom reporting for customer-success metrics",
              "Jira Service Desk workflow automation: ticket state machines, scheduled auto-outreach, auto-close and reopen, and role-based routing",
              "Data-quality gating and QA checklists that catch problems before they become rework",
              "Salesforce and Gainsight administration and reporting",
              "Process improvement in a regulated healthcare-technology environment",
              "Technical/non-technical stakeholder translation as a daily practice",
            ],
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
