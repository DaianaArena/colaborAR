<p align="center"><img src="https://i.imgur.com/e4xdE7g.png" width="400"></p>


# ColaborAR APP
## Project Description:
Welcome to colaborAR, a self-managing IT collaboration network born out of a vision inspired by the challenges faced during a wave of mass layoffs in my company. Witnessing the impact on talented professionals, the idea for colaborAR emerged as a response to create a supportive space for collaboration and growth.

After an overwhelmingly positive response to the [initial post on LinkedIn](https://www.linkedin.com/posts/arenadaiana_colaborar-activity-7117539626516365312-EU3r?utm_source=share&utm_medium=member_desktop), it became evident that the need for such a platform extended beyond the immediate circle. Therefore, I've decided to open colaborAR to the public, inviting individuals from all walks of the IT community to join us.

Discover exceptional talent in Argentina and Mexico through our platform, meticulously crafted with Next.js, sheetdb.io, and Tailwind CSS. Our goal is to provide a seamless experience for both collaborators and organizations, fostering a community where skills thrive and projects reach new heights.

Join us on this collaborative journey, where the idea of overcoming challenges has evolved into a platform that empowers professionals to connect, collaborate, and shape a brighter future together.

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


5. Real-time Updates:

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
# Support

As a passionate Frontend Developer who truly values the open-source community, I'm thrilled to provide you with this project and grant you the freedom to become a collaborator.

## How to Show Your Support

You can show your appreciation and support by ☕buying me a coffee☕.

<p><a href="https://www.buymeacoffee.com/arenadaianadev"> <img align="left" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="50" width="210" alt="buy me a coffee" /></a></p>

Every coffee you buy is a small token of encouragement and helps me allocate more time and resources to this project. Your support is immensely valued and helps ensure the longevity and quality of this open-source endeavor.

Thank you for being a part of this community and for considering supporting my work. Together, we can continue to build and innovate in the world of web development.

## Contribute and Enhance

Your contributions are invaluable! If you have ideas for improvements or encounter issues, please don't hesitate to:

- [Create an Issue](https://github.com/DaianaArena/colaborAR/issues/new/choose)
- [Submit a Pull Request](https://github.com/DaianaArena/colaborAR/compare)

I greatly appreciate your support in making this project even better.

## Thank You!
