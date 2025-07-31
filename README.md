# bill_splitter
# 🚀 TripSplit – Group Trip Bill Splitter with Persistent Login and Flexible Notifications

TripSplit simplifies managing shared expenses for group trips. Users register with their details, login via phone number and password, and can create groups to track expenses. Notifications and email reminders keep everyone informed.

---

## ✨ Features

- 📝 **User Registration:** Name, Email, Phone Number, Password  
- 🔐 **Login via Phone Number + Password**  
- 🔒 **Persistent Sessions:** Login sessions with no expiry until explicit logout  
- 👥 Create and manage groups for trips  
- 💸 Log expenses, split bills equally or with custom shares  
- 🔔 Flexible Notifications:  
  - Option to send **Notification only** (in-app or push)  
  - Option to send **Notification + Email reminder**  
- 📊 Real-time balance tracking per group and member  
- 🔄 History of settled expenses and payments  
- ✅ Email reminders and notifications for pending payments and due bills  

---

## 🛠 Tech Stack

### Backend
- Node.js + Express.js  
- MongoDB (Atlas)  
- JWT-based authentication with persistent sessions  
- Nodemailer (or any SMTP) for sending emails  
- Push notification service (e.g., Firebase Cloud Messaging) for in-app notifications  

### Frontend
- Next.js for Web  
- (Future) Flutter for Mobile using same backend APIs  

---

## 🧑‍💻 Getting Started

### Prerequisites

- Node.js (v16+)  
- MongoDB Atlas account  
- Email SMTP account (Gmail or SendGrid recommended)  
- Firebase account (if implementing push notifications)  

---