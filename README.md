# SpaceX Tours: React + Recoil + Apollo Client

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Folder Structure](#folder-structure)
4. [Usage](#usage)
5. [Custom Hooks](#custom-hooks)
6. [Technical Stack](#technical-stack)

## Overview

This project is a React application that utilizes Recoil for state management, Apollo Client for fetching data from the SpaceX GraphQL API, and follows the Atomic Design pattern. The application consists of two main pages: "Home" and "Favorites," each with specific UI requirements and functionality.

## Installation

1. Clone the repository: `git clone https://github.com/alina-vakulenko/space-x-tours`
2. Change into the project directory
3. Install dependencies: `npm install`

## Folder Structure

```plaintext
/src
|-- assets
|-- apollo
|   |-- client.ts
|   |-- queries.ts
|-- components
|   |-- banner
|   |-- buttons
|   |-- carousel
|   |-- header
|   |-- tour-cards
|-- hooks
|   |-- useCarousel.ts
|-- routes
|   |-- root.tsx
|   |-- home.tsx
|   |-- favorites.tsx
|-- state.ts
|-- globalStyles.ts
|-- index.css
|-- main.tsx
```

## Usage

1. Run the application: npm run dev
2. Open your browser and navigate to http://localhost:5173/

## Custom Hooks

### useCarousel

A custom hook provides functions for showing the next and previous slides with desired offset, starting and stopping autoplay, and selecting a specific slide.

```js
import { useCarousel } from "./hooks/useCarousel";

const {
  slideIndex,
  selectSlide,
  showNext,
  showPrev,
  stopAutoPlay,
  startAutoPlay,
} = useCarousel({
  totalCarouselItems: 6,
  shiftBy: 1,
  autoPlayOn: true,
  autoplayInterval: 3000,
});
```

## Technical Stack

- React
- TypeScript
- Apollo Client
- Recoil
- Styled Components
