# Portfolio Web App

A simple **Web Application** built with **React, Typescript, Vite, Nginx and Docker**  <br />
The application is a personal portfolio web application meant to display modern **CI/CD workflow** deployment using Azure. 

The application is deployed in two separate ways:

### Static Web App
- Hosted via **Azure Static Web App** using free SKU
- Builds and (re)deploys on `main` using **Github Actions CI/CD** on `Git Push`
- https://wonderful-mushroom-03b1ae303.1.azurestaticapps.net

### Dockerized App
- Hosted via **Azure App Service** with App Service Plan
- Container built using a **Dockerfile** and **Nginx** to create static image
- Image is built locally and pushed to **Azure Container Registry** where **Azure App Service** automatically pulls and deploys the image.
- https://demo-portfolio-gdceg9guddb5fccj.swedencentral-01.azurewebsites.net/

## Technologies

- React + Typescript
- Vite
- Azure 
  - Static Web App
  - Container Registry
  - App Service
- Nginx
- Docker
- Github Actions CI/CD

## Proccess

#### Resource Group containing all my relevant resources
![Resource Group containing all my relevant resources](screenshots/Screenshot%202025-10-03%20214330.png)

#### Static Web App
![Static Web App](screenshots/Screenshot%202025-10-03%20215117.png)

#### Dockerized App
![Dockerized App](screenshots/Screenshot%202025-10-03%20215211.png)
