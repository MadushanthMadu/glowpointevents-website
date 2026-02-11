### DEVELOPER GUIDELINES
1. If the project newly cloned, create two empty files in the project root directory named as ```.env.staging``` and ```.env.production```
2. Copy and paste the following lines inside both the ```.env``` files and add the key values
    REACT_APP_FIREBASE_CONFIG_PROJECT_ID="Get this from your firebase project"<br />
    REACT_APP_APP_VERSION="Your release version like v0.0.1"<br />
    REACT_APP_ENV="Staging or Live"<br />
3. If the project newly cloned, then install the dependencies using ```npm install```
4. Make sure you are in the development branch. To check type ```git branch```
5. If you're not in the ```development``` branch, type ```git checkout development```. Next, check the above step (4) again for verification.
6. You're all set to go. hereafter, use the following commands as your preferences:
    - Locally run the development environment: ```npm run start:staging```
    - Locally run the live environment: ```npm run start:production```
    - Deploy the development environment: ```npm run deploy:staging```
    - Deploy the live environment: ```npm run deploy:production```

### ANIMATIONS DOC
https://michalsnik.github.io/aos

### LOCALIZATION GUIDE
- To update the language specific content of the site, modify the values in the English localization file located in ```src/i18n/locales/en/translations.json```
- To update global content of the site, modify the file in ```src/data```

### DEPLOYED SITES
- Live
https://glowpointevents-web.web.app

- Staging
https://stag-glowpointevents.web.app