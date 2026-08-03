FIXED ON THE DIME RACE TIMER

The logo is embedded directly into index.html, so it loads even when index.html is opened locally.

Before replacing a GitHub Pages version:
1. Delete the old website files from the repository.
2. Upload every file from this ZIP.
3. Wait for GitHub Pages to redeploy.
4. On iPhone, remove the old Home Screen app.
5. In Safari, clear the old page cache or open the site in a Private tab.
6. Add the updated site to the Home Screen again.

Always test the gun sound, rapid finish taps, scrolling times, undo, end race, and CSV export before official use.


WAV STARTING-GUN UPDATE
- Uses the uploaded Starting Pistol Sound Effect.wav.
- The timer starts from the browser's audio 'playing' event.
- The Start Race button shows “Starting…” until audio playback is confirmed.
- The WAV is cached for offline use.
- Replace all old GitHub Pages files and reinstall the Home Screen app to avoid an old cached version.


END RACE SAFETY UPDATE
- End Race now requires a continuous one-second hold.
- A quick tap or accidental press does nothing.
- The timer keeps running until the one-second hold completes.


RESPONSIVE MOCKUP HEADER UPDATE
- Uses the supplied scenic bridge image as the header background.
- Keeps the real On The Dime Timing Co. logo.
- Adds the white “ON THE DIME” and orange “RACE TIMER” overlay from the approved mockup.
- Automatically scales for narrow iPhones, standard phones, short screens, landscape orientation, and tablets.
- Header images are embedded directly in index.html and cannot fail due to missing image paths.
- Delete old GitHub Pages files, upload this complete ZIP, and remove/re-add the iPhone Home Screen app to clear its cache.


IPHONE AUDIO FIX
- Rebuilt starting-gun playback for iPhone Safari and Home Screen mode.
- The WAV is now attached as a real HTML audio element.
- Audio is silently unlocked on the first screen touch.
- Start Race resets and plays the WAV directly from the user interaction.
- The timer begins when Safari accepts the audio playback request.
- Service-worker cache version was changed so the broken audio script is not reused.
- Delete the old GitHub Pages files, upload this full version, remove the old Home Screen app, and add it again.


RACE-READY CLEANUP
- Header background and real logo are now optimized external WEBP files instead of large embedded image data.
- Responsive breakpoints cover very small iPhones, standard phones, landscape, and tablets.
- Header logo/title positioning more closely matches the approved mockup.
- Swipe-to-record is disabled when the touch starts on buttons, the lap list, or an overlay.
- Active race state and finish times are saved locally and restored after an accidental refresh.
- Service worker uses a new cache and checks online for the latest HTML before falling back offline.
- Starting-gun WAV is preloaded and retained in the offline cache.
- Keep Silent Mode off and test through the exact speaker used on race day.


SELF-CONTAINED FIX
- Header, real logo, WAV, and MP3 fallback are embedded directly into index.html.
- The gun sound starts directly from the Start button tap for iPhone compatibility.
- The app no longer depends on separate header, logo, or audio file paths.
- The service worker was simplified and its cache version changed.


DESKTOP TESTING UPDATE
- Laptop browsers now show a centered 430-pixel-wide phone preview.
- The desktop page can scroll to the results and footer.
- Actual phones still use the full-screen layout.
- Very short browser windows are allowed to scroll instead of cutting off content.
- Results and summary overlays always allow vertical scrolling.


DESKTOP DASHBOARD + NEW RACE FIX
- Desktop browsers now use a true wide two-column dashboard.
- Timer, finish button, and controls appear on the left.
- The live results list appears in a full-height panel on the right.
- Phone layouts remain unchanged.
- After End Race, returning to the timer now shows an enabled Start New Race button.
- Starting a new race clears the old times and plays the starting gun normally.


TXT EXPORT UPDATE
- Export now creates a .txt file instead of a CSV.
- The file contains only finish times.
- Each finish time is written on its own line.
- There are no place numbers, labels, headers, quotation marks, or extra columns.
- Copying all lines and pasting into Excel places one time in each row of the Imported Times section.


PLAIN-TEXT EXCEL EXPORT
- Each exported time now begins with an apostrophe, such as '18:42.37.
- The apostrophe is Excel's text-entry marker and normally does not display in the cell.
- Excel stores the pasted value as plain text instead of converting it to a time-of-day serial number.
- Each result remains on its own line so pasting fills one cell per row.
