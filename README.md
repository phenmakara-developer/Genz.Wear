# GENZ WEAR - Modern Shirt Store

A modern, clean, and professional e-commerce website for GEN Z fashion shirts. Built with React.js, Vite, and Tailwind CSS as a school project.

## Project Description

GENZ WEAR is an online fashion store focused on modern GEN Z shirts and streetwear. The website allows users to browse products, view details, add items to cart, and complete checkout. It features a clean, minimal design with smooth animations and full responsive support.

## Features

- **Home Page** - Hero section, featured products, why choose us, how to order, customer reviews, and CTA
- **Shop Page** - Product grid with search, category filter, and sort functionality
- **Product Details** - Large product image, size/color selection, quantity, add to cart, and buy now
- **Cart** - View cart items, increase/decrease quantity, remove items, order summary with total
- **Checkout** - Contact information, shipping address, payment method selection, and place order
- **Order Success** - Confirmation page with order number and details
- **About Page** - Mission, vision, why choose us, how it works, and full project explanation
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Smooth Animations** - AOS scroll animations for a modern feel
- **Cart Persistence** - Cart data saved to localStorage

## Technologies

- React.js 19
- Vite 8
- React Router DOM 7
- Tailwind CSS 4
- Lucide React Icons
- AOS (Animate On Scroll)

## Project Structure

```
src/
  components/
    Navbar.jsx          - Responsive navigation bar
    Footer.jsx          - Professional footer with links and contact
    Hero.jsx            - Hero section + featured products + home sections
    ProductCard.jsx     - Reusable product card component
    ProductGrid.jsx     - Product grid layout
    CartItem.jsx        - Cart item row component
    SectionTitle.jsx    - Reusable section title
  pages/
    Home.jsx            - Home page
    Shop.jsx            - Shop page with filters
    ProductDetails.jsx  - Single product page
    Cart.jsx            - Shopping cart page
    Checkout.jsx        - Checkout form page
    Success.jsx         - Order success page
    About.jsx           - About + project explanation page
  data/
    products.js         - Product data (12 products)
  context/
    CartContext.jsx     - Cart state management with Context API
  App.jsx               - Main app with routing
  main.jsx              - Entry point
  index.css             - Global styles + Tailwind
```

## Installation

```bash
# Clone the project
git clone <repository-url>

# Navigate to project folder
cd genz-wear

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Website Flow

```
Home → Shop → Product Details → Cart → Checkout → Success
```

## Main React Concepts Used

- **Components** - Reusable UI pieces (Navbar, Footer, ProductCard, etc.)
- **Props** - Passing data from parent to child components
- **State (useState)** - Managing local component state like search, filters, form inputs
- **Context API** - Global cart state shared across all components
- **React Router** - Client-side routing between pages
- **useEffect** - Side effects like AOS initialization and localStorage
- **localStorage** - Persisting cart data and order information

## Future Improvements

- Backend API with Node.js/Express
- Database with MongoDB or PostgreSQL
- Real user authentication (signup/login)
- Admin dashboard for product management
- Real payment gateway integration
- Order management system
- Product reviews and ratings
- Wishlist functionality

## Demo Day Notes

This project was built for a school Demo Day presentation. The About page contains a **Project Explanation** section that covers all technical aspects in simple language for the teacher presentation.

---

**GENZ WEAR** - WEAR YOUR VIBE.
