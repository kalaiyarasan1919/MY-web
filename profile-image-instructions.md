# Profile Image Information

The profile image has been updated to use the existing `hero-image.jpeg` file from the project. This image is displayed in the About page with the following properties:

1. **Image details**:
   - Using the file: `hero-image.jpeg` from the `/images/` directory
   - Displayed at 200x200 pixels with a square frame
   - Has a purple border and pulsing blue effect for visual appeal
   - Positioned below the LOGO and to the left

2. **Add the image to the project**:
   - Place the `profile.jpg` file in the `public/images` directory of your project
   - The full path should be: `public/images/profile.jpg`

3. **Verify the image**:
   - After adding the image, refresh the About page in your browser
   - You should see your new profile image displayed with a round purple border and a pulsing blue effect

## Alternative Image Formats

If your image is in a different format (PNG, JPEG, etc.), you can either:

1. Convert it to JPG format, or
2. Update the AboutSection.jsx component to use your image's format:

```jsx
// Example for a PNG image named profile.png
<Image 
  src="/images/profile.png" 
  width={300} 
  height={300} 
  alt="Kalaiyarasan B"
  className="rounded-full border-4 border-purple-500 shadow-lg"
  style={{ objectFit: 'cover' }}
/>
```

## Troubleshooting

If your image doesn't appear:
- Make sure the image is placed in the correct directory
- Check that the filename and extension match exactly what's in the code
- Try clearing your browser cache or using incognito mode
- Check the browser console for any errors related to loading the image