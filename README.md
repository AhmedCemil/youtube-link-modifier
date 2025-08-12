# YouTube Link Modifier Chrome Extension

Chrome extension that adds a button to YouTube videos to open the same video on yout-ube.com

## Installation Instructions

Follow these steps to install the extension:

### Method 1: Download from Releases

1. **Download the latest release**
   - Go to the [Releases page](../../releases)
   - Download the `youtube-link-modifier-v1.0.zip` file
   - Extract the ZIP file to a folder on your computer

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/` in your Chrome browser
   - Or click the three dots menu → More tools → Extensions

3. **Enable Developer mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked" button
   - Select the `files` folder from the extracted archive
   - The extension should now appear in your extensions list

### Method 2: Load Unpacked Extension (Development)

1. **Clone the repository**
   - Clone this repository or download as ZIP
   - Extract the files to a folder on your computer

2. **Open Chrome Extensions page**
   - Go to `chrome://extensions/` in your Chrome browser
   - Or click the three dots menu → More tools → Extensions

3. **Enable Developer mode**
   - Toggle the "Developer mode" switch in the top right corner

4. **Load the extension**
   - Click "Load unpacked" button
   - Select the `files` folder containing the extension files
   - The extension should now appear in your extensions list

5. **Verify installation**
   - Go to any YouTube video
   - You should see the extension button in the video controls
   - The extension will be active and ready to use

## Usage

1. Navigate to any YouTube video
2. Look for the extension button in the video player controls
3. Click the button to open the same video on yout-ube.com

## Files

The extension files are located in the `files/` folder:

- `files/manifest.json` - Extension configuration and permissions
- `files/content.js` - Main functionality script
- `files/styles.css` - Styling for the extension UI

## Permissions

This extension only requires:
- `activeTab` - Access to the currently active tab for YouTube functionality

## Support

If you encounter any issues, please open an issue in this repository.
