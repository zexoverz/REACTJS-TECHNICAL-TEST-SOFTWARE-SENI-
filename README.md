# REACTJS-TECHNICAL-TEST-SOFTWARE-SENI-


## **1. React Project Best Practice Test**

- ReactJS has 2 popular component type: Class based component and functional component. When creating a ReactJS component, which one do you prefer to use and why do you choose it ? 

answer : 
```
Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks.

They help you to use best practices. It will get easier to separate container and presentational components because you need to think more about your component’s state if you don’t have access to setState() in your component.
```

- HTTP Request on ReactJS project can be done with various libraries, the popular on namely Axios, and JS built-in Fetch, which one do you prefer to use and what is the reason for you to choose it ?

answer :
```
i prefer with Axios, there is no particular reason, because I often use it
```

- Please explain what do you usually do when setting up a ReactJS project ?

answer :
```
first create react app for starting template
then i will install some package like redux, react navigation and some css framework. If everything is ready, then I immediately create a website
```

- Navigation solution on React Native can be done with various libraries like React Native Navigation and React Navigation. Which one do you prefer to use and why do you choose it ?

answer :
```
I choose React Navigation, because.. 
React Navigation is one of the best navigation solutions available right now. It is a widely adopted library and fits in nicely for most use cases. With certain known limitations, it is a go-to solution.
```
- Do you think doing unit test is necessary on ReactJS project?

answer :
```
of course yes,
Tests should not test lifecycle methods, they are supposed to be covered by React itself. If we have some logic that needs to be tested in these methods, we should try to extract it in another testable place and only use it in there. Ideally, in our componentDidMount method for example, we should have only functionality for fetching data (calling an API for example). All the rest that you might be tempted to leave there, should be extracted in other methods, that could be tested, if needed.
```

## **2. Practice Test**

how to run program :

-  **Open server Folder with your terminal**

```
cd server/
```

-  **Install some package via npm**

```
npm install
```

-  **Run the server**

```
npm run dev
```

-  **Then Open new terminal to my-app Folder**

```
cd ..
cd my-app/
```

-  **Install some package via npm**

```
npm install
```

-  **Run the webiste**

```
npm start
```