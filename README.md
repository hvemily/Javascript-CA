# JavaScript 1 - Course Assignment

## Overview

This project is part of the **JavaScript 1 Course Assignment** and involves creating an interactive online store using JavaScript. The project interacts with a product API to display items and allows users to add products to a shopping basket, as well as view a checkout and order confirmation.

## User Stories

The following user stories were implemented to complete this project:

- As a user, I want to view a list of products on the homepage.
- As a user, I want to filter products by category, gender, or genre.
- As a user, I want to view a single product page with more detail.
- As a user, I want to add a product to my basket.
- As a user, I want to remove a product from my basket.
- As a user, I want to view a summary of my cart on the checkout page.
- As a user, I want to view an order-confirmation screen after checking out.

## Pages Implemented

The following pages were required to complete the assignment:

- **Home Page**: Displays a list of products. `index.html`
- **Product Page**: Displays all details of a specific product. `product/index.html`
- **Checkout Page**: Displays all items in the basket. `checkout/index.html`
- **Confirmation Page**: Shows a thank you message after checking out. `checkout/confirmation/index.html`

## Optional Pages

These pages are optional but improve realism and user experience:

- Category Pages (e.g., Male/Female Clothing, Movie Genres)
- Terms and Conditions page
- Privacy Policy
- My Profile

## Features

- Fetches product data dynamically from the API (no hardcoded data).
- Displays product listings, filters, and product details.
- Adds/removes items from the shopping basket.
- Handles errors gracefully, alerting users when something goes wrong.
- Displays a loading indicator during asynchronous operations (e.g., API calls).
- Responsive design to ensure usability across devices.
- Accessible and usable interface for all users.
- Asynchronous API requests using `async` and `await`.

## API Used
The GameHub API was selected for this submission.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- API integration using `fetch`
- Git & GitHub for version control

## Installation & Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/hvemily/javascript-CA.git
2. Open the project folder in your preferred code editor (e.g., Visual Studio Code).

3. Open index.html in your browser to view the project locally.

## How to Use
- On the Home Page, users can browse through the available products fetched from the API.
- Users can filter the products by category, gender, or genre.
- On the Product Page, users can view detailed information about a selected product.
- Users can add products to their shopping basket.
- On the Checkout Page, users can view all items in their basket and proceed to checkout.
- The Confirmation Page displays a thank you message after a successful order.

## Important Features
- Error handling: Alerts the user when an API call fails.
- Loading indicator: A loading icon appears while fetching data.
- No hardcoded product data: All product data is fetched from the API.

## Accessibility: The site is accessible and follows best practices for usability.

Clean code: All console.log statements were removed before submission.

## License
This project is licensed under the Noroff License.

## Contact
For any questions or feedback, feel free to contact me at emily.brynestad@hotmail.com or here at GitHub.




