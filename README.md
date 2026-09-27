# 📄 ATS Resume Analyzer Pro

A browser-based **ATS (Applicant Tracking System) Resume Analyzer** that evaluates resumes based on common ATS-friendly criteria used in modern recruitment systems.

The application allows users to upload **PDF or DOCX resumes** and generates an ATS compatibility report including resume scoring, section validation, formatting analysis, keyword checks, recruiter insights, and improvement suggestions.

---

# Features

## Resume Upload

- Drag & Drop Resume Upload
- Click-to-Upload Support
- PDF Resume Support
- DOCX Resume Support
- Client-side Resume Processing
- File Validation

---

# ATS Scoring System

The analyzer calculates a resume score out of 100 using multiple ATS evaluation parameters.

Features:

- ATS Compatibility Score
- Resume Grade Classification
- Raw Score Calculation
- Potential Score Estimation
- Resume Improvement Suggestions

---

# Resume Analysis

The system evaluates resumes using rule-based analysis:

### Contact Information

- Email Detection
- Phone Number Validation

### Resume Structure

- Section Header Detection
- Education Section Check
- Experience Section Check
- Skills Section Check
- Project Section Check
- Certification Section Check

### Content Evaluation

- Action Verb Detection
- Quantifiable Achievement Detection
- Resume Content Length Analysis
- Date Detection

### ATS Formatting Checks

- Special Character Detection
- Single-column Layout Recommendation
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

- HTML5
- CSS3
- JavaScript (ES6)

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

## 2. Open Project Folder

```bash
cd ATS-Resume-Analyzer-Pro
```

## 3. Run Application

Open:

```
index.html
```

directly in any modern web browser.

No installation or backend setup is required.

---

# Project Structure

```
ATS-Resume-Analyzer-Pro
│
├── index.html
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
Calculate Score
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

The final score is normalized to a scale of 100.

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

This project demonstrates:

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

# 📄 License

This project is licensed under the MIT License.
