# WELCOME TO MOKO CODE
![alt tag](https://github.com/komutkadum/18.Moko---Real-time-web-chat/blob/main/Screenshot%202022-09-21%20134859.png)
MOKO is a chat application with Incredible features such as Messaging, Video calling, multiplayer games includingTic Tac Toe, Bingo and Chess. It is Powered by the most Powerfull servers from Google firebase which act as Backend and provides the Best Security known.
You can do much more than Messaging, like Creating rooms with your favorite contacts, uploading pictures of 4 and a word which you might have guessed is a version of 4 Snaps.Interactivity at its best powered by React's powerfull components to render your Perfect needs.
And yes, MESSAGES ARE ENCRYPTED!

## Features
- Chat
- contacts
- real time game
  - tic tac toe
  - bingo
  - chess
- Broadcast
- Rooms
  - chat
- Typing speed

## Tech Stack
- React
- firebase
- nanoid
- chess.js
- react-linkify
- react-image-crop
- sweet-alert2

## Firebase Collections
- User ->
  - Description : To store user details
  - Users - > Userid - > {email, photo, uid, username}
- Contacts ->
  - Description : to store contact information
  - Contacts - > Userid - > userRooms - > Userid - > {photo,uid,username} 
- Rooms ->
  - Rooms - > Userid - > userRooms - > messageId - > {createdat, message, photo, uid, username}
- Messages ->
  - Messages - > Messageid - > userMessage - > messages - > {createdat, from message, photo}
- Notification ->
  - Notification - > userId - > userNotification - > eachNotificationId - > {createdAt , text}


## add your firebase apis here
moko/src/Components/Firebase/firebase.js/

## firebase deployment process
first build the react app using commands
```
npm run build
```
once build, follow the process of firebase deployment using these commands
```
firebase init
firebase deploy --only hosting
```

## Team members
- [kadumkomut](https://kadumkomutdev.github.io/kadumkomut/)
- [MohitPal](https://github.com/MOHITBLAZE07)
- [AkshayMishra](https://www.linkedin.com/in/akshay-mishra-08085367/)

### © [kadumkomut](https://kadumkomutdev.github.io/kadumkomut/)

