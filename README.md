# Healthcare Booking App

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-by-developers.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://othaim-task.vercel.app/)
[![Test Coverage](https://img.shields.io/badge/coverage-95%25-green)](https://github.com/Mohamedadelsaleh/Othaim-task)

## Table of contents
* [Live Demo](#live-demo)
* [App Structure](#app-structure)
* [Features](#features)
* [Setup](#setup)
* [OpenSourse](#opensourse)
* [Pictures](#pictures)
* [Authors](#authors)
* [Built With](#built-with)
***

## Live Demo

[Healthcare-Booking-App-Link](https://doctor-booking-lemon.vercel.app/)


## App-structure
A responsive and accessible appointment booking interface for healthcare platforms built with React and TypeScript.
    
    src/
    ├── components/
    │   ├── AppointmentsList/
    │   ├── BookingModal/
    │   ├── DoctorCard/
    │   ├── Filter/
    │   ├── Pagination/
    │   ├── Search/
    │   └── Layout/
    ├── store/
    │ ├── bookingStore.ts
    ├── types/
    │ └── doctor.ts
    ├── utils/
    │ └── mockData.ts
    ├── styles/ # Global styles
    
## Features

- Doctor directory with filtering by specialty
- Search functionality to find doctors by name
- Pagination for large result sets
- Booking modal with time slot selection
- Appointments summary view
- Fully responsive design
- WCAG-compliant accessibility

## Setup

### Prerequisites
- Node.js v18+
- npm v9+

Install the main source of the project :

1. Clone the repository:
```bash
git clone https://github.com/Mohamedadelsaleh/doctor-booking.git
cd doctor-booking
```

2. After downloading project files, open them in your IDE, then open Terminal and install dependencies:

```bash
npm install 
```

3. Start the development server:

```bash
npm start 
```
Open http://localhost:3000 in your browser.

## OpenSourse

  It's an open-source project. You can edit on it and develop what you want.

  Architecture Decisions

    State Management:
    Choose Zustand over Redux for simpler booking management needs

    Styling:
    Used SCSS modules for component-scoped styles and maintainability
    
    Offline Support:
    Doctors details data 

## Pictures

![screencapture-localhost-3000-2025-04-20-01_28_40](https://github.com/user-attachments/assets/330ecf34-85df-4b7a-80f6-14027ff5aabe)
![screencapture-localhost-3000-2025-04-20-01_29_12](https://github.com/user-attachments/assets/7a00b085-4764-46af-9d64-26a7e939cff3)

## Authors
* [Mohamed Adel Salah Gouda](https://github.com/Mohamedadelsaleh)

## Built-with
* Reactjs
* TypeScript
* Zustand
