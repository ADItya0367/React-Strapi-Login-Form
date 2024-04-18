# <h1 align="center" >React Login Form Using Strapi Backend Setup </h1>
<p align="center"><strong>🔮 Don't Forget to give a STAR , Your sky won't be Empty :) </strong></p>
<p align="center">
  <a href="https://github.com/plandex-ai/plandex/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" /></a> 
  <p align="center">
  <!-- Call to Action Links -->
  <a href="#install">
    <b>Install</b>
  </a>
  ·
  <!-- <a href="https://plandex.ai">
    <b>Website</b>
  </a>
  · -->
  <a href="#concepts">
    <b>concepts</b>
  </a>
  ·
  <a href="#Notes">
    <b>Paced-Notes</b>
  </a>
  <br>
In this Lecture we will see that how to connect and use strapi with our frontend ---

![Screenshot (12)](https://github.com/ADItya0367/React-Strapi-Login-Form/assets/113133103/bffde779-95e8-4d53-9384-8dbe03dd6642)
STEPS FROM BEGINNING ----
- install node js
-install npx by npm i -g npx
-install create-react-app  by npm i -g create-react-app
-npx create-react-app project_name
-you will see all folders on left hand side ...don't panic they are very easy to understand 
- now make a directory in src as components as in previous class we had made 
- after making a directory make a file/ better to call it as component ....make sure that the name is in capital letter 
- create a functional component or class componet in that file and again make sure that the name of component is similar to the file name ---these are some conventions ]
- after creating it just play with import and export as done in previous class 
---------------------------------------
Now we will start the small project
 * Go to app.js clear everything (keep only one functional component with return statement and a div )
 * Now inside return statement take a small form that takes input from user suppose their name or email instead

 * Now where button is defined take the event onClick={expression} ...curly braces are here called as expression and we can write javascript code inside it  

 * inside the expression {} we will be calling a function just to check weather my button is working properly opr not

 * Inside this function do console.log("ok Tested")

* Now  go to console log and check weather we are recieving the message ok tersted on browser
* Now inside the function in app at the place of variable create a hook variable using useState ...you know the syntax right ??

const[x,setx]=useState('value')compare with const[variable,function]=useState('initial data')

* Now again using onchange event handlers in <input type ="text" value ={studentName} onChange={()=>{}}>..means on writing value in black area this will be performed
* Now here we have used anonymous function inside mthe onChange event ()={"hello"}..just checking weather on message change we are recieving our message in cpnsole llog or not

* Now inside that onChange write this 
onChange={(e)={setStudentName(e.target.value)}}
....here e is an event setStudentName is a function we have made above through fat arrow  and we wre reading the text inserted by the user and printing it on console 

* Now we have to call the Api which is enjoying at strapi right....

* we will be using the event useEffect  for api calling dekho aao kaise hota hai ...this is mainly a hook in react......means jo bhi use word se strat ho usse aap hook bolskte ho ....try this useEffect above function syntax dekho 
useEffect(function,dependency)
function ke jagah fat arrow anonymous function do ...and dependency array me aayega

* ab api ko kaha call karwana hai ....wo call hoga function me jo humne fat arrow me banaya tha remember ??

* make sure that api/endpoint are both same and always are in JSON format 

* now use fetch api method to call it ....ab do not import it as it is a built in function in javascript 
fetch().then().catch().finally()..ab isko hum promise chain bolte hain...fetch is called below function...this promise chain is used to send data..

* now go to swagger documentation and try it out in POST method and link utha lo..paste in fetch (..link..)

* now create a variable data  and request body me jo hoga usko wha paste karo ....ye promise chain ke upar...change the name as already declared variable in useState

* earlier we have used onChange with anonymous function this process is called as two way binding menas kuch bhi change karoge to view or console me change hoga 

* how can we call api 
- fetch()-buuilt in hai javascript me 
- axios jo ki third party hai api calling ke liye 

* fetch ke first argument me maine link dala tha post wala and second argument comma dalke ek object create karenge usme ye sab dalo 
method:'POST',
headers:'copy from header and post'
body:JSON.stringify(data) copy n paste kro bas

* bas hogya kaam 
* now use sweetalert  npm install sweetalert --save and import swal from 'sweetalert';
* now inside then we will use anonymous function (d)={}
* inside catch error ka data aayega (e)={}
* finally me all ka data aayega (all)={}
* ab then ke andar console log krwao success 
* now in then block write if else that 
if my d.status==200 then sweetalert ko call karo swal("hurrey","created successfully","success")


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
