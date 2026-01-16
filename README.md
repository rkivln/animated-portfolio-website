# Animated Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, interactive elements, and a clean, professional design.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: CSS animations and transitions throughout
- **Interactive Elements**: Hover effects, image upload with AI background removal
- **Modern UI**: Clean design with gradient backgrounds and shadows
- **SEO Friendly**: Proper semantic HTML and meta tags
- **Fast Performance**: Built with Vite for optimal loading speeds

## Sections

- **Home**: Hero section with introduction and profile image
- **About**: Personal information and key statistics
- **Skills**: Technical skills with progress bars and tools
- **Projects**: Showcase of featured projects with live demos
- **Contact**: Contact form and social media links
- **Footer**: Additional links and information

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **AI Integration**: Google Gemini API for image processing
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd animated-portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local` and update the `VITE_GEMINI_API_KEY` with your Gemini API key (optional, for AI background removal)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3001](http://localhost:3001) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section with profile image
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills and expertise
│   ├── Projects.tsx        # Project showcase
│   ├── Contact.tsx         # Contact form and info
│   ├── Footer.tsx          # Site footer
│   ├── SocialLinks.tsx     # Social media links
│   ├── UserImageUpload.tsx # Image upload component
│   └── Icons.tsx           # Custom SVG icons
├── App.tsx                 # Main app component
└── index.tsx               # App entry point

public/
└── profile-image.png       # Default profile image
```

## Customization

### Personal Information

Update the following files to customize the portfolio:

- `components/Hero.tsx`: Name, title, and description
- `components/About.tsx`: Personal information and statistics
- `components/Skills.tsx`: Skills and tools
- `components/Projects.tsx`: Project information
- `components/Contact.tsx`: Contact details

### Styling

The design uses Tailwind CSS classes. Main color scheme:
- Primary: Purple (#8b5cf6, #a855f7)
- Secondary: Pink (#ec4899)
- Background: Light purple gradients

### Images

- Replace `public/profile-image.png` with your photo
- Update project images in `components/Projects.tsx`

## Features in Detail

### Image Upload with AI Background Removal

The portfolio includes an AI-powered feature to automatically remove backgrounds from uploaded images using Google Gemini API.

**Setup:**
1. Get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Add it to `.env.local` as `VITE_GEMINI_API_KEY`

**Usage:**
- Click "Change Photo" in the hero section
- Upload an image
- The AI will process and remove the background automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or issues, please open an issue on GitHub or contact the maintainer.
