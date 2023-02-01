# hugo
Hi - I'd like my Wordpress site moved to Hugo. TheBooking process will likely require some php modifications (explained below). I'm new to Hugo and a bit unfamiliar with Git, am very happy to do any drudgery (renaming folders, creating .md files, etc). My goal is completion within ten days. Let me know if you’re interested.
Mike Kelly

Here's what I have done:
1. exported WP via Expo to Hugo plugin, moved all files to my machine - https://drive.google.com/drive/folders/1yZI2-neeic5eqPe5vvZ93Sjc3jv4EKft?usp=sharing
2. Added relevant front matter to each file - title, description, keywords, etc.
3. Created a Git repository “hugo-dev”
4. Chosen a Theme - megakit (https://themefisher.com/products/megakit)
5. Copied all relevant json, php, etc. files for the Bookings button to function
6. Copied widget code from Font (Home) page.

Here’s what I’d like:
1. Create work environment in Git - https://github.com/boetiusj/hugo-dev
     All files - Hugo, theme and data - stored on Git
2. Replicate my existing site (crestwoodpainting.com) in Hugo
     Critical that calendar booking button functionality remain unchanged.
     Advise which layout features, images, etc. must be revised or updated
     Home page should have sections so that I might add a new section or change background color etc.
     Use partials, sections, etc. where advisable 
     No need to change css - theme css is fine
3. Advise on hosting options. 
4. Implement host
5. Set up SSL

Files are here: https://drive.google.com/drive/folders/1yZI2-neeic5eqPe5vvZ93Sjc3jv4EKft?usp=sharing

Booking process:
The form checks the entered Zip code against a Google Sheet. If the Zip code is allowed the form processes to the YouCanBook.me site. Try the allowed “64113” and the dis-allowed “12345” to see at crestwoodpainting.com.
