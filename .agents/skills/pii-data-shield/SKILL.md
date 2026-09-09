---
name: pii-data-shield
description: Strict regex and semantic privacy audit to prevent leaking medical patient names, hospital folder numbers, student records, or private clinician contact information.
---

# PII & Medical Privacy Shield Skill

## Purpose
Enforces strict healthcare and institutional privacy compliance across all generated marketing, articles, press releases, and email communications.

## Audit Checklist
1. **Patient Identifiers Scan**:
   - Patient names (e.g., "Mr. Sithole", "Mrs. Van der Merwe").
   - Hospital patient folder numbers (e.g., "Folder #123456", "MRN-98721").
   - Room/Bed numbers in conjunction with clinical conditions (e.g., "Bed 14 in Ward 5 who presented with...").
   - Specific pediatric or obstetric identifiable patient scenarios.
2. **Student & Faculty Privacy**:
   - Student numbers (e.g., "2489102", "st-9912").
   - Unanonymized student performance flags (e.g., "Student X missed 4 shifts").
   - Private personal cell phone numbers and personal emails.
3. **Internal Security**:
   - Environment variables, `.env` fragments, Bearer tokens, or database connection strings.

## Safe Anonymization Rule
When referencing clinical training data, always aggregate or abstract:
- "Across 14,000 verified GEMP 2 ward hours..."
- "A 4th-year clinical student performing an emergency vacuum extraction under registrar supervision..."
- Never use real patient names; substitute with generic clinical archetypes if needed for illustrative case studies.
