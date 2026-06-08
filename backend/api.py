import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv


load_dotenv()

app = Flask(__name__, static_folder='../frontend', static_url_path='/')
CORS(app, origins=["https://new-england-sod.netlify.app/", "http://localhost:5173"])

GMAIL_USER = os.getenv("GMAIL_USER")
GMAIL_PASSWORD = os.getenv("GMAIL_PASSWORD")
CLIENT_EMAIL = os.getenv("CLIENT_EMAIL")

def send_email(to_address: str, subject: str, html_body: str):
    '''Send and HTML email via Gmail SMTP'''
    msg = MIMEMultipart("alternative")
    msg["Subject"] = subject
    msg["From"] = GMAIL_USER
    msg["To"] = to_address
    msg.attach(MIMEText(html_body, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(GMAIL_USER, GMAIL_PASSWORD)
        server.sendmail(GMAIL_USER, to_address, msg.as_string())


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/home')
def get_data():
    data = {'message': 'New England Sod'}
    return jsonify(data)

@app.route('/api/counties)')
def get_counties():
    counties = ['Hartford', 'New Haven', 'Fairfield', 'New London',
                'Middlesex', 'Tolland', 'Litchfield', 'Windham']
    return jsonify(counties)

# This get_user_info is not for production use
# Only to confirm that emails are able to send and receive through the form created
# on the React frontend
#
# To reconfigure for production, create an account on SendGrid and set up their API
# in the .env file and rebuild the function accordingly.

@app.route("/api/get_user_info", methods=["POST"])
def get_user_info():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data received"}), 400
    
    first_name = data.get("firstName", "").strip()
    last_name = data.get("lastName", "").strip()
    phone = data.get("phone", "").strip()
    email = data.get("email", "").strip()
    city = data.get("city", "").strip()
    state = data.get("selectedState", "").strip()
    details = data.get("projectDetails", "").strip()
    full_name = f"{first_name} {last_name}".strip()

    # Notification email to business
    client_html = f"""
    <html><body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto">
      <h2 style="color:#2e7d32">New Contact Form Submission — New England Sod</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;width:140px">Name</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{full_name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Phone</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{phone}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Email</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{email}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Location</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{city}, {state}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Project Details</td>
            <td style="padding:8px">{details}</td></tr>
      </table>
    </body></html>
    """
    
    # Confirmation email to customer
    customer_html = f"""
        <html><body style="font-family:Arial,sans-serif;color:#222;max-width:600px;margin:auto">
      <h2 style="color:#2e7d32">Thanks for reaching out, {first_name}!</h2>
      <p>We received your message and will get back to you within <strong>one business day</strong>.</p>
      <h3 style="border-bottom:2px solid #2e7d32;padding-bottom:4px">Your Submission</h3>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;width:140px">Name</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{full_name}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Phone</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{phone}</td></tr>
        <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Location</td>
            <td style="padding:8px;border-bottom:1px solid #eee">{city}, {state}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Project Details</td>
            <td style="padding:8px">{details}</td></tr>
      </table>
      <p style="margin-top:24px;color:#555;font-size:13px">
        — The New England Sod Team
      </p>
    </body></html>
    """

    try:
        send_email(CLIENT_EMAIL, f"New Inquiry from {full_name}", client_html)
        send_email(email, "We received your message - New England Sod", customer_html)
    except Exception as e:
        print(f"Email error: {e}")
        return jsonify({"error": "Failed to send email", "details": str(e)}), 500
    
    return jsonify({"message": "Form submitted and emails sent successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True)