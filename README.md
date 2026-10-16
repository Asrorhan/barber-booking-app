# ✂️ Barbershop Booking Web Application

A modern and responsive web application built for barbershops. It allows clients to select services, choose a preferred barber, pick a date and available time slot, and manage their bookings. It also includes multi-language support (English, Uzbek, Russian) and an analytics dashboard.

🔗 **Live Demo:** [barbers-booking-app.netlify.app](https://barbers-booking-app.netlify.app)

---

## 🚀 Features

- **Barber Selection:** Browse barbers and view their profiles.
- **Interactive Booking Modal:** Select services, pick a date, choose an available time slot, and automatically calculate total costs.
- **My Bookings:** View upcoming appointments with selected date and time.
- **Analytics Dashboard:** Monitor total revenue, total bookings, top barbers, and filter statistics by date ("All", "Today", or a custom date).
- **Multi-language Support (i18n):** Full dynamic translation for English, Uzbek, and Russian.
- **Persistence:** All bookings are saved in `localStorage`.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite)
- **Styling:** Tailwind CSS
- **State Management:** React Context API (`AppContext`, `LanguageContext`)
- **Deployment:** Netlify

---

## 💻 Local Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Asrorhan/barber-booking-app.git](https://github.com/Asrorhan/barber-booking-app.git)
   cd barber-booking-app
   ```
2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

📁 Project Structure
src/
├── components/ # UI components (BookingModal, Navbar, etc.)
├── context/ # AppContext & LanguageContext for global state
├── data/ # Initial mock data (initialData.js)
├── pages/ # Main application views (Home, BarberList, Analytics, MyBookings)
├── App.jsx # Main route and layout configuration
└── main.jsx # Application entry point

Designed & Developed by Asrorjon Kudratov
