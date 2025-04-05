# 🏢 Showroom Lookup App

A simple and fast web app built with **FastAPI** (Python) and **JavaScript** to search showroom details by city. Designed to demonstrate clean API/backend logic, JavaScript DOM interaction, and modern frontend styling.

## 🚀 Features

- Dynamic city-based showroom search
- FastAPI backend with JSON filtering
- Fetch API integration in frontend
- Clean, modern UI with Flexbox CSS
- Handles both button click and Enter key

## 📁 Project Structure

showroom-lookup/ ├── backend/ # FastAPI project │ ├── main.py │ └── data.json ├── frontend/ # HTML + JS frontend │ ├── index.html │ ├── script.js │ └── style.css └── README.md

markdown
Copy
Edit

## 🛠 Tech Stack

- **Backend:** FastAPI, Python 3, JSON data
- **Frontend:** Vanilla JS, HTML5, CSS3
- **Dev Tools:** Git, VS Code, macOS Terminal

## 💻 How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/zsoltcsengeri/showroom-lookup.git
cd showroom-lookup
2. Start the backend
bash
Copy
Edit
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install fastapi uvicorn
uvicorn main:app --reload
Backend will run at: http://127.0.0.1:8000

3. Open the frontend
Open frontend/index.html in your browser. It will make API calls to the backend.

📦 Future Features
 Deploy backend on AWS EC2

 Create contact form (POST)

 Connect to real database (SQLite or PostgreSQL)

 Add filtering and search suggestions

✨ Author
Made with 💙 by Zsolt Csengeri