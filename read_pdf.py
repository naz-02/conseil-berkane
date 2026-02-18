
import sys
import os

try:
    from pypdf import PdfReader
except ImportError:
    print("pypdf not installed. Please run 'pip install pypdf'")
    sys.exit(1)

pdf_path = r"c:\Users\Nasr\Desktop\newx site\CamScanner 30-12-2025 12.20.pdf"

if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
    sys.exit(1)

try:
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    
    print("--- START PDF CONTENT ---")
    print(text)
    print("--- END PDF CONTENT ---")
except Exception as e:
    print(f"Error reading PDF: {e}")
