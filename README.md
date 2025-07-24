# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases my skills, projects, and achievements in the field of cybersecurity and software development.

![Portfolio Preview](public/images/hero-image.jpeg)

## 🌟 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Separate Pages**: Dedicated pages for About, Projects, and Contact sections
- **Interactive Elements**: 
  - Animated skill tabs
  - Project filtering by category
  - Certificate viewing in modal windows
- **Contact Form**: Functional contact form with email integration via Resend API
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: Designed with accessibility in mind

## 🛠️ Technologies Used

- **Frontend**:
  - Next.js 15.3.0 (App Router)
  - React 18.3.1
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Type Animation for text effects
  - React Animated Numbers for statistics

- **Backend**:
  - Next.js API Routes
  - Resend for email functionality

## 📋 Project Structure

- `src/app/`: Main application code
  - `components/`: Reusable UI components
  - `api/`: API routes for backend functionality
  - `page.js`: Home page
  - `about/page.js`: About page
  - `projects/page.js`: Projects page
  - `contact/page.js`: Contact page

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   RESEND_API_KEY=your_resend_api_key
   FROM_EMAIL=your_email@example.com
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Customization

- **Personal Information**: Update the text in the component files to reflect your information
- **Projects**: Modify the `projectsData` array in `ProjectsSection.jsx` to showcase your own projects
- **Skills & Certifications**: Update the skills and certifications in `AboutSection.jsx`
- **Styling**: Customize colors and styling in `tailwind.config.js` and component files

## 📱 Key Components

- **HeroSection**: Landing section with introduction and call-to-action
- **AboutSection**: Information about skills, education, and certifications
- **ProjectsSection**: Showcase of projects with filtering capability
- **EmailSection**: Contact form with email integration
- **AchievementsSection**: Display of key metrics and achievements

## 📤 Deployment

This project can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages. See the `deployment-guide.md` file for detailed instructions.

## 🔄 Recent Updates

- Created separate pages for About, Projects, and Contact sections
- Fixed email functionality by updating the API route
- Added certificate viewing functionality
- Enhanced profile image display
- Improved overall performance and user experience

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from Heroicons
- Special thanks to the Next.js and React communities for their excellent documentation and resources

---

Designed and developed with ❤️ by Kalaiyarasan B
