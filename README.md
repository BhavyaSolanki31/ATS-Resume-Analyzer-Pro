# 📄 ATS Resume Analyzer Pro

A browser-based **ATS (Applicant Tracking System) Resume Analyzer** that evaluates resumes based on common ATS-friendly criteria used in modern recruitment systems.

The application allows users to upload **PDF or DOCX resumes** and generates a detailed ATS compatibility report including resume scoring, section validation, formatting analysis, recruiter insights, and improvement suggestions.

---

# Features

## Resume Upload & Processing

- Drag & Drop Resume Upload
- Click-to-Upload Support
- PDF Resume Support
- DOCX Resume Support
- Client-side Resume Processing
- File Format Validation

---

# ATS Scoring System

The application evaluates resumes using a rule-based ATS scoring algorithm and generates a score out of 100.

Features:

- ATS Compatibility Score
- Resume Grade Classification
- Raw Score Calculation
- Potential Score Estimation
- Resume Improvement Suggestions

---

# Resume Analysis

The analyzer checks resumes using multiple ATS-friendly parameters.

## Contact Information

- Email Detection
- Phone Number Validation

## Resume Structure

- Section Header Detection
- Education Section Check
- Experience Section Check
- Skills Section Check
- Projects Section Check
- Certifications Section Check

## Content Evaluation

- Action Verb Detection
- Quantifiable Achievement Detection
- Resume Content Length Analysis
- Date Detection
- Online Presence Check (LinkedIn/GitHub)

## ATS Formatting Checks

- Special Character Detection
- ATS-Friendly Formatting Evaluation
- Single Column Layout Recommendation
- Table/Header/Footer Detection

---

# Recruiter Insights

The analyzer generates:

- Resume Strength Summary
- ATS Readiness Overview
- Missing Information Identification
- Improvement Recommendations

---

# 🛠️ Technology Stack

## Frontend

- **HTML5** → Application structure
- **CSS3** → User interface styling and responsive design
- **JavaScript (ES6)** → Resume processing and ATS scoring logic

## Libraries

- **PDF.js**  
  Used for extracting text from PDF resumes.

- **Mammoth.js**  
  Used for extracting text from DOCX resumes.

---

# How to Run the Project

## 1. Clone Repository

```bash
git clone https://github.com/BhavyaSolanki31/ATS-Resume-Analyzer-Pro.git
```

## 2. Navigate to Project Folder

```bash
cd ATS-Resume-Analyzer-Pro
```

## 3. Run Application

Open:

```
index.html
```

directly in any modern web browser.

No installation, backend, or database setup is required.

The project runs completely in the browser using client-side JavaScript.

---

# Project Structure

```
ATS-Resume-Analyzer-Pro
│
├── index.html        # Main application structure
├── style.css         # UI styling and design
├── script.js         # Resume analysis and scoring logic
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# Project Workflow

```
Upload Resume
        ↓
Extract Resume Text
        ↓
Analyze Resume Content
        ↓
Apply ATS Evaluation Rules
        ↓
Calculate ATS Score
        ↓
Generate Recruiter Insights
        ↓
Provide Improvement Suggestions
```

---

# ATS Evaluation Parameters

| Parameter | Weight |
|-----------|--------|
| Contact Information | 10 |
| Section Headers | 15 |
| Formatting | 10 |
| Content Length | 10 |
| Date Detection | 10 |
| Online Presence | 10 |
| Action Verbs | 10 |
| Quantifiable Results | 15 |
| Resume Length | 10 |
| Resume Structure | 10 |

The final ATS score is normalized to a scale of **100**.

---

# 🚀 Future Improvements

- AI-based Resume Feedback System
- Job Description Matching
- Keyword Gap Analysis
- Resume Keyword Heatmap
- AI Resume Optimization Suggestions
- Export ATS Report as PDF
- Multiple Resume Comparison
- Advanced Resume Parsing

---

# Learning Outcomes

This project demonstrates practical implementation of:

- Frontend Web Development
- JavaScript File Handling
- PDF/DOCX Text Extraction
- Browser-based Document Processing
- Rule-based Scoring Algorithms
- Dynamic UI Updates
- Resume Screening Automation

---

# 👨‍💻 Author

**Bhavya Solanki**

B.Tech Electronics & Communication Engineering (ECE)  
Artificial Intelligence & Machine Learning Enthusiast

GitHub:  
https://github.com/BhavyaSolanki31

---

# License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project with proper attribution.
