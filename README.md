<p align="center"><img src="https://i.imgur.com/LN4qbGG.png" width="400"></p>

<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />


# ColaborAR APP
## Project Description:
Welcome to colaborAR, a self-managing IT collaboration network. Discover exceptional talent in Argentina and Mexico, and expand your team with us. Our platform, built with Next.js, utilizes the power of sheetdb.io for seamless data management, while the sleek design is crafted with Tailwind CSS. Join us in fostering a community of skilled collaborators and take your projects to new heights.

## Objective:
The primary goal of the colaborAR project is to establish a self-governing network that facilitates collaboration within the IT community, with a specific focus on discovering and connecting exceptional talent in Argentina and Mexico. This platform aims to create a space where skilled professionals can showcase their expertise, and organizations can easily identify and engage with qualified collaborators. 

## Key Features and Scope:


- Talent Discovery: Explore a curated pool of exceptional IT professionals in Argentina and Mexico.
- Profile Exploration: View detailed profiles of collaborators, showcasing their skills and experience.
- Self-Management: The platform is designed to be self-governing, allowing collaborators to contribute and grow organically.


## Before Installation - System Requirements
Make sure your development environment meets the following requirements:

- Node.js 16.8 or later.
- MacOS, Windows (including WSL), and Linux are supported.

**_Note_**: While the pages directory requires Node.js v14 or later, the app directory requires Node v16.8.0 or later.

## Getting Started

First, install all the dependencies:

```bash
npm install

```

Then, run the development server:

```bash
npm run dev

```

Open <a href="http://localhost:5173/" target="_blank" rel="noreferrer">http://localhost:5173/</a> with your browser to see the result.

## Project Architecture

The project follows a structured architecture that separates frontend and backend concerns. Here's an overview of the frontend architecture:

- **src folder**: Contains our application source code.

  - **components**: Organize React components that make up our user interfaces. These components can be reused throughout your application.

- **next.config.js**: This file is used to configure Next, the build tool. It allows you to customize the build process, optimize assets, and more.

## Data Flow Between Frontend and Backend

In colaborAR, we have implemented a seamless data flow between the frontend and backend to enable the self-management of collaborator profiles. The backbone of this process is the integration of sheetdb.io, a powerful and user-friendly database service.

1. Frontend Interaction:

Users interact with the frontend of colaborAR, where they can explore profiles, update information, and manage their own collaborator profiles.
2. User-Generated Data:

When a collaborator updates their profile or when a new profile is created, the frontend collects and organizes the user-generated data.
3. SheetDB Integration:

The collected data is then seamlessly integrated with SheetDB, acting as our backend database. SheetDB allows for easy storage and retrieval of data in spreadsheet format, offering a simple yet effective solution for autogestive profile management.
4. Autogestive Profile Loading:

The autogestive aspect comes into play as collaborators have the autonomy to load and update their profiles without direct intervention from the platform administrators. This self-service model streamlines the process, putting control in the hands of the collaborators.
5.Real-time Updates:

As collaborators make changes to their profiles, the data stored in SheetDB is instantly updated, ensuring real-time accuracy and responsiveness on the frontend.

By leveraging SheetDB in this manner, colaborAR provides a dynamic and user-friendly experience for collaborator profile management. This approach not only empowers users to take charge of their profiles but also ensures the platform's scalability and adaptability as the community grows.

## How to Create a new profile entry?
To add your profile to the colaborAR community and showcase your skills, follow these simple steps:

1. Navigate to the Registration Sheet:

Visit the registration sheet on the colaborAR platform. This sheet is designed to collect essential information for creating your profile.


2. Fill in Your Details:

Complete the sheet with accurate and up-to-date information. Include details such as your name, skills, experience, and any other relevant information that highlights your expertise.

## Build

```bash
yarn build
# or `npm run build`
```
