# Project-Atelier

## Project Description
Our team was given the task of creating a portal for an e-commerce product details website. The team's goal was to use the legacy api that powered the application and apply modern technologies. The project uses React and CSS3 for the front-end to implement modular components. The back-end was built using nodejs and express. 

## Overview

### Contributor: Bradford Trevino
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bradford-trevino-1a9a09221/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/BradfordTrevino)

The main display for the current product. This component displays all information related to the item including photos, prices, styles, sizes, quantity, and the add to cart functionality based on your current style, size, and quantity selections. In future developments, the display of the cart will be built out to provide a current list of your chosen items. If you click on the top of bottom of the component, or on the thumbnails to the right you can scroll to selected photos. If you click near the middle of any of these images you will open a larger, more detailed view, which will also allow for viewing of all photos related to the current item. Allowing the user to handle viewing the photos in three different formats provided a greatly improved user experience.

![](https://media.giphy.com/media/uZvceu8VMXwMDq9fvX/giphy.gif)


## Related Products

### Contributor: Calvin See
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/calvinfsee)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/calvinfsee)

The related products section displays a list of related products curated by the database. Underneath related products is the outfit list, which is a persistent list of products curated to the user. Product cards display product information and the product’s default photo. While a product card is in the related products list, it has a star button which compares that product’s features to the currently viewed product in the overview section. The outfit list has an add to outfit button and outfit list product cards have a remove button that allows the user to modify the list.

![](https://media.giphy.com/media/XY6RLsac5RdW0okQlC/giphy.gif)


## Questions and Answers

### Contributor: Andy Tran
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andrew-tran-aa3994226/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aTranster)

The questions and answers component. This component displays all information regarding questions users have had about the product. This includes user-submitted questions and their answers. Questions and answers are sorted by a helpfulness rating that users can vote on. The list expands in an accordion style when the “Add more questions” button is clicked, however, the list will not expand past the height of the page. Instead, the list limits itself and allows users to scroll through. The search bar allows the user to filter the list, rendering any questions that match their query. If the question cannot be found, the add question button opens a modal which allows them to add any questions they may have to the current list.

![](https://media.giphy.com/media/4ascGzIhEiL5l8xg6C/giphy.gif)

## Ratings and Reviews

### Contributor: Michael Washburn
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/michael-washburn-b38506ba/)
[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/mwashburn1987)

While navigating the Ratings and Reviews widget each user is able to view all reviews for a given product. These reviews contain reviewer specific information such as a review body, photos related to the review, a username and date of review submission as well as whether or not the user recommends the product. The ratings part of the component displays valid characteristics of the of product with dynamic sliders to show the user how people have felt about different aspects. The ratings also feature a dynamic star rating system that displays ratings in 1/4 star increments. Lastly, there is an option to create a new review for the product that handles form inputs, allows for the user to upload images and adds the review to the list of reviews for that product on the database.

![](https://media.giphy.com/media/3uXUths6hV2FnGqAyF/giphy.gif)

## Setup

1. Download depencies with npm install
> `npm install`

2. Set up config file in `client/src` and export.

  
``` 
module.exports = {
   TOKEN: 'YourTokenHere'
}; 
```


3. Run webpack in development with:

   > `npm run start`

4. Run server with:

   > `npm run dev`

5. Visit local site at http://localhost:3000


## Technologies Used

### Setup and Workflow
![image](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![image](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white)
![image](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)
![image](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![image](https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white)
![image](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

### Frontend Development

![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### Backend Development

![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![image](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

### Deployment

![image](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![image](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

### Testing

![image](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![image](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
