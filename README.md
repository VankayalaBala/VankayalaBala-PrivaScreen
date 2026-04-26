# PrivaScreen: AI-Powered Data Anonymizer 🛡️

PrivaScreen is an enterprise-grade web application designed to automatically detect and redact Personally Identifiable Information (PII) from unstructured text and documents. Built with React and Flask, it leverages **Microsoft Presidio** and advanced Natural Language Processing (NLP) to ensure strict data privacy and compliance.

## 🌟 Features
- **Intelligent Redaction:** Detects names, emails, phone numbers, and other PII using SpaCy's `en_core_web_lg` model.
- **Secure Document Processing:** Upload `.txt` files for instant, stateless anonymization.
- **User Authentication:** Secure login and registration system backed by an SQLite database.
- **System Dashboard:** Real-time metrics on documents scanned and PII entities redacted.
- **Audit Logs:** Tracks system usage and redaction activities for security compliance.
- **One-Click Export:** Copy redacted text to clipboard or download as a secure `.txt` file.

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Axios
- **Backend:** Python, Flask, Flask-CORS, SQLite
- **AI / NLP Engine:** Microsoft Presidio (Analyzer & Anonymizer), SpaCy

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)

### 1. Clone the Repository
```bash
git clone [https://github.com/VankayalaBala/VankayalaBala-PrivaScreen.git](https://github.com/VankayalaBala/VankayalaBala-PrivaScreen.git)
cd VankayalaBala-PrivaScreen


2. Backend Setup
Open a terminal and navigate to the backend folder:


cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate  # On Windows

# Install dependencies
pip install Flask flask-cors presidio-analyzer presidio-anonymizer spacy werkzeug

# Download the NLP model
python -m spacy download en_core_web_lg

# Start the server
python app.py

The backend API will start on http://127.0.0.1:5000


3. Frontend Setup

Open a new terminal and navigate to the frontend folder:


cd frontend

# Install dependencies
npm install axios

# Start the development server
npm run dev

The React application will start on http://localhost:5173

🧑‍💻 Usage

    Open your browser and navigate to http://localhost:5173.

    Create a new account or log in.

    Navigate to the Redaction Studio from the sidebar.

    Paste text or upload a document containing sensitive information.

    Click Anonymize Content to safely redact the data.

    Copy or download the secured results for your records.
