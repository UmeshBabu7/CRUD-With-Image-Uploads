# CRUD Application with Image Uploads
A full-stack web application built with Django REST Framework and React.js  (using hooks) that enables complete CRUD (Create, Read, Update, Delete) operations for products with image upload functionality, demonstrating modern web development practices with a RESTful API backend and a responsive React frontend.

## Features

- **Product Management**: Full CRUD operations for products
- **Image Upload**: Upload and display product images
- **Product Details**: View detailed information about each product
- **Responsive Design**: Modern UI built with React Bootstrap
- **RESTful API**: Clean API architecture using Django REST Framework

## Tech Stack

### Backend
- **Django** - Python web framework
- **Django REST Framework** - REST API toolkit
- **Pillow** - Image processing library
- **django-cors-headers** - CORS handling for frontend-backend communication
- **SQLite** - Database (default Django database)

### Frontend
- **React** - JavaScript UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI component library
- **Axios** - HTTP client for API requests
- **Bootstrap** - CSS framework

## Project Structure

```
CRUD-With-Image-Uploads/
├── backend/                 # Django backend
│   ├── backend/            # Django project settings
│   │   ├── settings.py     # Project configuration
│   │   ├── urls.py         # Main URL routing
│   │   └── ...
│   ├── products/           # Products app
│   │   ├── models.py       # Product model
│   │   ├── views.py        # API views (ViewSet)
│   │   ├── serializers.py  # API serializers
│   │   ├── urls.py         # App URL routing
│   │   └── ...
│   ├── media/              # Uploaded images storage
│   │   └── uploads/
│   │       └── images/
│   ├── db.sqlite3          # SQLite database
│   └── manage.py           # Django management script
│
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ShowProducts.jsx    # Product listing
│   │   │   ├── AddProduct.jsx      # Create product
│   │   │   ├── UpdateProduct.jsx   # Update product
│   │   │   ├── ProductDetail.jsx   # Product details
│   │   │   └── NavBarMenu.jsx      # Navigation
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
├── requirements.txt        # Python dependencies
└── README.md              # Project documentation
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python**
- **Node.js** and **npm**
- **pip** (Python package manager)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd CRUD-With-Image-Uploads
```

### 2. Backend Setup

#### Create Virtual Environment (Recommended)

```bash
# Windows
python -m venv venv
venv\Scripts\activate

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Run Migrations

```bash
cd backend
python manage.py migrate
```

#### Create Superuser (For Django admin)

```bash
python manage.py createsuperuser
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

## Running the Project

### Start Backend Server

```bash
# From the backend directory
cd backend
python manage.py runserver
```

The backend API will be available at `http://127.0.0.1:8000/`

### Start Frontend Development Server

Open a new terminal window:

```bash
# From the frontend directory
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173/`

## API Endpoints

The Django REST Framework provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | List all products |
| POST | `/api/` | Create a new product |
| GET | `/api/{id}/` | Retrieve a specific product |
| PUT | `/api/{id}/` | Update a product (full update) |
| PATCH | `/api/{id}/` | Update a product (partial update) |
| DELETE | `/api/{id}/` | Delete a product |

## Configuration

### CORS Settings

The backend is configured to allow requests from `http://localhost:5173` (Vite default port). If you change the frontend port, update the CORS settings in `backend/backend/settings.py`:

```python
CORS_ORIGIN_WHITELIST = ['http://localhost:5173']
```

### Media Files

Uploaded images are stored in `backend/media/uploads/images/`.

## Product Model

The Product model includes the following fields:

- **image**: ImageField - Product image (required)
- **name**: CharField - Product name (max 150 characters, required)
- **price**: DecimalField - Product price (max 7 digits, 2 decimal places, required)
- **description**: TextField - Product description
- **category**: CharField - Product category (max 50 characters, optional)

## Development

### Backend Development

- Django admin panel available at `http://127.0.0.1:8000/admin/`
- API browsable interface at `http://127.0.0.1:8000/api/`

### Frontend Development

- Vite
