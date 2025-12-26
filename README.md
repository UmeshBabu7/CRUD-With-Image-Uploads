# CRUD Application with Image Uploads

A full-stack web application built with Django REST Framework and React.js that enables complete CRUD (Create, Read, Update, Delete) operations for products with image upload functionality. This project demonstrates modern web development practices with a RESTful API backend and a responsive React frontend.

## 🚀 Features

- **Product Management**: Full CRUD operations for products
- **Image Upload**: Upload and display product images
- **Product Details**: View detailed information about each product
- **Responsive Design**: Modern UI built with React Bootstrap
- **RESTful API**: Clean API architecture using Django REST Framework

## 🛠️ Tech Stack

### Backend
- **Django 6.0** - Python web framework
- **Django REST Framework 3.16.1** - REST API toolkit
- **Pillow 12.0.0** - Image processing library
- **django-cors-headers** - CORS handling for frontend-backend communication
- **SQLite** - Database (default Django database)

### Frontend
- **React 19.2.0** - JavaScript UI library
- **Vite 7.2.4** - Build tool and dev server
- **React Router DOM 7.11.0** - Client-side routing
- **React Bootstrap 2.10.10** - UI component library
- **Axios 1.13.2** - HTTP client for API requests
- **Bootstrap 5.3.8** - CSS framework

## 📁 Project Structure

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

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+** (Python 3.12 recommended)
- **Node.js 16+** and **npm** (or **yarn**)
- **pip** (Python package manager)

## 🔧 Installation

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

# macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

#### Install Dependencies

```bash
pip install -r requirements.txt
```

#### Run Migrations

```bash
cd backend
python manage.py migrate
```

#### Create Superuser (Optional - for Django admin)

```bash
python manage.py createsuperuser
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

## 🚀 Running the Project

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

**Note**: Make sure both servers are running simultaneously for the application to work properly.

## 📡 API Endpoints

The Django REST Framework provides the following endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/` | List all products |
| POST | `/api/` | Create a new product |
| GET | `/api/{id}/` | Retrieve a specific product |
| PUT | `/api/{id}/` | Update a product (full update) |
| PATCH | `/api/{id}/` | Update a product (partial update) |
| DELETE | `/api/{id}/` | Delete a product |

### API Example

```bash
# Get all products
curl http://127.0.0.1:8000/api/

# Create a product
curl -X POST http://127.0.0.1:8000/api/ \
  -H "Content-Type: multipart/form-data" \
  -F "name=Product Name" \
  -F "price=99.99" \
  -F "description=Product description" \
  -F "category=Electronics" \
  -F "image=@/path/to/image.jpg"
```

## 🎯 Usage

### Adding a Product

1. Navigate to the "Add Product" page
2. Fill in the product details:
   - Product name
   - Price
   - Description
   - Category (optional)
   - Product image
3. Click "Add Product" to save

### Viewing Products

- The home page displays all products in a grid layout
- Click "View Details" on any product card to see full details

### Updating a Product

1. Navigate to a product's detail page
2. Click "Update Product"
3. Modify the fields you want to change
4. Click "Update Product" to save changes

### Deleting a Product

1. Navigate to a product's detail page
2. Click "Delete Product"
3. Confirm the deletion

## 🔐 Configuration

### CORS Settings

The backend is configured to allow requests from `http://localhost:5173` (Vite default port). If you change the frontend port, update the CORS settings in `backend/backend/settings.py`:

```python
CORS_ORIGIN_WHITELIST = ['http://localhost:5173']
```

### Media Files

Uploaded images are stored in `backend/media/uploads/images/`. Make sure this directory exists and has proper write permissions.

## 📝 Product Model

The Product model includes the following fields:

- **image**: ImageField - Product image (required)
- **name**: CharField - Product name (max 150 characters, required)
- **price**: DecimalField - Product price (max 7 digits, 2 decimal places, required)
- **description**: TextField - Product description
- **category**: CharField - Product category (max 50 characters, optional)

## 🧪 Development

### Backend Development

- Django admin panel available at `http://127.0.0.1:8000/admin/`
- API browsable interface at `http://127.0.0.1:8000/api/`

### Frontend Development

- Hot module replacement enabled with Vite
- ESLint configured for code quality

## 🐛 Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure the frontend URL is whitelisted in Django settings
2. **Image Upload Fails**: Check that the `media` directory exists and has write permissions
3. **Port Already in Use**: Change the port in `vite.config.js` or use a different Django port
4. **Module Not Found**: Ensure all dependencies are installed (`pip install -r requirements.txt` and `npm install`)

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

Built as a demonstration project for full-stack web development with Django and React.

---

**Happy Coding! 🎉**
