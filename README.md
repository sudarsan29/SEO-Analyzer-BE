# SEO-Analyzer-FE

Build a web app where the user enters a website URL (and optionally a Google API key), and gets an SEO audit report using Google’s PageSpeed Insights API.

MERN-stack app to audit SEO using Google PageSpeed Insights.

## Code Flow

* User enters a URL (and optionally a Google API key) in the frontend.
* Frontend sends a POST request to /api/report on the backend.
* Backend calls the PageSpeed Insights API with the provided URL + API key.
* The API returns an SEO score + audit results.
* Backend saves the result in MongoDB and sends the SEO score + audits to the frontend.
* Frontend displays the score and top audit items beautifully.

##  How an SEO report is stored in MongoDB:

* url: site URL
* seoScore: number (0–100)
* audits: object (audit items)
* createdAt: auto date

## USER FLOW

* User enters URL (ex: https://google.com) and optionally a key.
* Clicks "Run SEO Audit".
* Frontend sends data to backend → backend fetches Google SEO audit.
* Data is saved to DB and shown back to the user with visual elements.

SEO-Analyzer-BE/
│
├── backend/
│   ├── server.js
│   ├── .env
│   ├── Models/
│   └── Routes/
│
├── .gitignore
├── README.md


## 🛠 Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Express, MongoDB
- **API**: Google PageSpeed Insights

## 🚀 How to Run

### 1. Clone repo

git clone https://github.com/sudarsan29/seo-analyzer.git
cd seo-analyzer

## Setup frontend

cd ../frontend
npm install
npm start
