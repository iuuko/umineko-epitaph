# Umineko Epitaph

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)

A modern, interactive web application presenting the legendary **Witch's Epitaph** from the *Umineko When They Cry* visual novel series. Experience the mystery and beauty of Beatrice's riddle in multiple languages with a stunning visual presentation.

## Features

- **Multi-language Support**: Available in English, Japanese, and Chinese
- **Responsive Design**: Optimized for desktop and mobile devices
- **Beautiful UI**: Atmospheric design with background imagery and elegant typography
- **Interactive Elements**: Includes puzzle features and drag-and-drop functionality
- **Epitaph Display**: Full presentation of the 22-line Witch's Epitaph
- **Golden Land**: Explore additional content related to the series
- **Quadrillion Puzzle**: Interactive number puzzle game

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/iuuko/umineko-epitaph.git
cd umineko-epitaph
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Start the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 6.3.5
- **Styling**: UnoCSS with Attributify preset
- **Routing**: React Router DOM 7.6.1
- **Internationalization**: i18next with React integration
- **Drag & Drop**: @dnd-kit/core and @dnd-kit/sortable
- **Linting**: ESLint 9 with TypeScript support

## Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── locales/            # Translation files (en-US, ja-JP, zh-CN)
├── pages/              # Page components
│   ├── Home.tsx        # Main epitaph display
│   ├── About.tsx       # Project information
│   ├── Quadrillion.tsx # Interactive puzzle
│   ├── GoldenLand.tsx  # Additional content
│   └── NotFound.tsx    # 404 page
├── i18n.ts             # Internationalization setup
├── main.tsx            # Application entry point
└── base.css            # Global styles
```

## Internationalization

The application supports three languages:
- English (en-US)
- Japanese (ja-JP)
- Chinese Simplified (zh-CN)

Language detection is automatic based on browser settings, with manual switching available through the language selector.

## The Witch's Epitaph

> *"Behold the sweetfish river, running through my beloved home of old.  
> You who seek the Golden Land, follow its path downstream in search of the key..."*

This application presents the complete 22-line riddle that serves as a central mystery in the Umineko series. Each line is carefully translated and presented with atmospheric styling to capture the mystique of the original work.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **07th Expansion** - Creators of the Umineko When They Cry series
- **Ryukishi07** - Original author and creator of the Witch's Epitaph
- The Umineko community for keeping the mystery alive

## Contact

If you have any questions or suggestions, feel free to open an issue or contact the maintainer.

---

*"Without love, it cannot be seen."*