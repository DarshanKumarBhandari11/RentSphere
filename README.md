# RentSphere 🏡
**RentSphere** is a dynamic web application designed to help users explore and list properties, vacation spots, and resorts with ease. Whether you're looking for an exotic getaway or a luxurious rental, RentSphere provides a seamless platform to discover and manage listings.


## Features ✨
**🔑 Authentication & Authorization:**
- Users must sign up or log in to create, edit, or delete listings.
- *Passport.js* handles authentication.
- Users can view all listings without logging in or signing up.

**🏡 Property Listings (CRUD Operations):**
- Users can Add, Edit, and Delete their vacation spots, resorts, or properties.
- Listings include Title, Description, Image, Price, Location, and Country.
- Secure User Access: Only the owner of a listing can edit or delete it.

**⭐ Reviews & Ratings:**
- Users can post reviews, which include Username, Rating, and Comment.
- Only the review creator can delete their review (not even the listing owner can delete reviews by others).

**🌍 Map Integration:**
- *Mapbox Geocoding* provides a visual location view for each listing.

**💰 Price Calculation Toggle:**
- Users can toggle "Display Total after Taxes" to see the total price including tax on each listing.

**☁️ Cloud Image Upload:**
- Uses *Cloudinary* to upload images and store URLs in the database.

**⚠️ Error Handling:**
- Implemented using *ExpressError* and *WrapAsync* to provide detailed error messages.
- Flash messages for success and failure alerts.

**🛡️ Session Management & Security:**
- Secure sessions & cookies managed via *express-session* and *connect-mongo*.
- CSRF protection and data validation using *Joi*.


## Tech Stack 🛠️
### Frontend:
- **Bootstrap:** For a responsive and elegant UI.
- **EJS (Embedded JavaScript):** Templating engine for dynamic page rendering.

### Backend:
- **Node.js & Express.js:** Core backend framework for handling requests.
- **MongoDB & Mongoose:** NoSQL database for storing users, listings, and reviews.
- **Express-Session & Connect-Mongo:** Session management.
- **Cloudinary:** Cloud storage for images.
- **Mapbox API:** For geolocation services.

### Authentication & Validation:
- **Passport.js & Passport-Local:** User authentication.
- **Joi:** Schema validation for user input.

### Error Handling:
- **ExpressError & WrapAsync:** Custom error handling middleware.
- **Flash Messages:** Success & failure alerts for users.


## How to Run Locally 🖥️
### Prerequisites
- Node.js installed on your system
- A code editor like VS Code
- Git (Optional, but recommended for version control)
- Cloudinary Account
- Mapbox Account
- MongoDB (Local or Atlas)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/DarshanKumarBhandari11/RentSphere.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd RentSphere
   ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    - Create a .env file in the root directory and add the following:
    ```bash
    CLOUD_NAME=your_cloudinary_name
    CLOUD_API_KEY=your_cloudinary_api_key
    CLOUD_API_SECRET=your_cloudinary_secret
    MAP_TOKEN=your_mapbox_token
    ATLASDB_URL=your_mongodb_connection_string
    SECRET=your_mongostore_and_session_secret
    ```

5. **Run the app:**
    - For development:
    ```bash
    node app.js
    ```

    - For production:
    ```bash
    npm start
    ```

6. **Open your browser and navigate to:**
    - Development: http://localhost:8080/home
    - Production: Hosted URL (if deployed)


## Contributing 🤝
*Contributions* are welcome!
If you'd like to contribute, please fork the repository and submit a pull request.


## Contact 📞
For questions or feedback, feel free to reach out to me at darshankumarbhandari11@gmail.com .
