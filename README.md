# Netflix Clone 🎬

## Description

This project is a clone of the Netflix website, built using Next.js, React, Redux, Tailwind CSS, and Framer Motion. It allows users to search for movies and view their details.

## Technologies Used

*   [<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>](https://nextjs.org/) A React framework for building server-rendered and statically generated web applications.
*   [<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>](https://react.dev/) A JavaScript library for building user interfaces.
*   [<img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux"/>](https://redux.js.org/) A predictable state container for JavaScript apps.
*   [<img src="https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit"/>](https://redux-toolkit.js.org/) The official, opinionated, batteries-included toolset for efficient Redux development.
*   [<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios"/>](https://axios-http.com/) A promise-based HTTP client for making API requests.
*   [<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>](https://tailwindcss.com/) A utility-first CSS framework for rapidly designing custom designs.
*   [<img src="https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>](https://www.framer.com/motion/) A production-ready motion library for React.
*   **Lucide React:** Beautifully simple, pixel-perfect icons for React.
*   **Swiper:** Most modern mobile touch slider with hardware-accelerated transitions.
*   **Vaul:** Unstyled, accessible components for Radix UI.
*   **Font Awesome:** Toolkit with the web's most popular vector icons and social logos.

## Dependencies

*   **next**: "15.2.1"
*   **react**: "^19.0.0"
*   **react-dom**: "^19.0.0"
*   **react-redux**: "^9.2.0"
*   **@reduxjs/toolkit**: "^2.6.0"
*   **axios**: "^1.8.2"
*   **framer-motion**: "^12.4.10"
*   **lucide-react**: "^0.478.0"
*   **swiper**: "^11.2.5"
*   **vaul**: "^1.1.2"
*   **@fortawesome/fontawesome-svg-core**: "^6.7.2"
*   **@fortawesome/free-brands-svg-icons**: "^6.7.2"
*   **@fortawesome/free-solid-svg-icons**: "^6.7.2"
*   **@fortawesome/react-fontawesome**: "^0.2.2"

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Amrr-Maherr/Netflix.git
    cd Netflix
    ```

2.  Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1.  Start the development server:

    ```bash
    npm run dev
    ```

2.  Build the project:

    ```bash
    npm run build
    ```

3.  Start the production server:

    ```bash
    npm run start
    ```

## API

This project uses the [TMDB API](https://www.themoviedb.org/) to fetch movie data. You will need to obtain an API key from TMDB and configure it in your `.env.local` file. The following endpoints are used:

*   **Search Movies:** Search for movies by title.

    ```
    GET https://api.themoviedb.org/3/search/movie?api_key=YOUR_API_KEY&query=movie_title
    ```

*   **Get Movie Details:** Retrieve detailed information about a specific movie.

    ```
    GET https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY
    ```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Push your changes to your fork.
5.  Submit a pull request to the main repository.

## License

This project is licensed under the MIT License.