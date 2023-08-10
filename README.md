# CoinSynch

## Table of Contents
- [Introduction](#introduction)
- [Techs](#techs)
- [Features](#features)
- [Layout](#layout)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

Welcome to CoinSynch! This project encompasses the development of an engaging landing page and a dynamic dashboard interface, seamlessly integrated with an authentication mechanism.

## Techs

For the front-end side, I used React.js with Next.js 13.4, Tailwind CSS, Shadcn-ui, Jest and Typescript. For the back-end side, I used json-server as a fake API and fetched data from coinapi.io.

## Features

- Real-time cryptocurrency data sourced from [coinapi.io](https://www.coinapi.io/)
- Carousel-based top banner for enhanced visual appeal
- Dynamic display of "Top Cryptos" from the REST API
- Intuitive "View more +" functionality for streamlined content browsing
- Newsletter form with interactive API interactions and loading states
- User-friendly "Sign in" dialog with email validation and password toggling
- Comprehensive "Sign Up" process with mandatory fields and acceptance checkboxes
- Smooth transition between "Sign Up" and "Sign in" dialogs based on user interaction

## Dashboard

- Personalized user information display sourced from REST API
- Convenient "Logout" option within the top section
- Interactive sidebar menu with expand and minimize capabilities
- Dynamic content rendering driven by API data
- Aesthetically formatted "Balance in US$" representation
- Data-driven "Daily Variation" graph based on API data
- Detailed "My Wallet" section displaying API-fetched information
- Effortless interaction with the "Add Crypto" dialog, dynamically populated
- Immediate updates to "My Wallet" upon cryptocurrency addition
- Seamless interaction with the "Transfer Crypto" dialog
- Intuitive handling of coin removal from the wallet

For a comprehensive visual representation, please consult the detailed Figma layouts. CoinSynch embodies the convergence of sophisticated design and robust functionality.

## Layout

You can view the project layout in Figma through this [link](https://www.figma.com/file/B8scopEM014WR4Oh58UaDb/%5BEduSynch%5D--Front-End-Test).

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v12 or higher)
- npm (v6 or higher)

## Installation

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/coinsynch.git
```

Navigate to the project directory:

```bash
cd coinsynch
```

## Usage

To start the project, run:

```bash
npm run dev
```

Access the CoinSynch application by opening your web browser and navigating to http://localhost:3000.

Happy syncing!
