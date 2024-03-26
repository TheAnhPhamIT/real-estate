# real-estate

## 1. Setup firebase hosting for development environment

    1. Go to [text](https://console.firebase.google.com/) to login firebase console
    2. Create new project for your app
    3. Setup web app for your project and follow instructions of firebase's suggestion
    4. Back to your source app at your computer, open command line and run *npm install -g firebase-tools*
    5. After that login to your firebase account at your computer, run *firebase login* and follow firebaase's instructions.
    6. Enter your source app and run command *firebase init hosting* and do step by step.
    7. After that firebase will create some configure files in your project based on previous setup, you can ignore all firebase files by listing them in .gitignore.
    8. Final step, run *firebase deploy --only hosting*. And, tada, you have successfully deployed your app to firebase.

## 2. Setup aliases for path

    1. `npm i path`
    2. `npm i -D @types/node` so __dirname won't complain
