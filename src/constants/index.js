import call from '../assets/icons/call.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';      
import twitter from '../assets/icons/twitter.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import gmail from '../assets/icons/gmail.svg';
//tech images
import Python from '../assets/icons/Python.svg';
import Java from '../assets/icons/Java.svg';
import Nestjs from '../assets/icons/Nestjs.svg';
import Dataanylysis from '../assets/icons/Dataanylysis.svg';
import Datascience from '../assets/icons/Datascience.svg';
import Dsa from '../assets/icons/Dsa.svg';
import Devops from '../assets/icons/Devops.svg';
import Pythonrobo from '../assets/icons/Pythonrobo.svg';
import Cucumber from '../assets/icons/Cucumber.svg';
import Learncourse from '../assets/icons/Learncourse.svg';
import React from '../assets/icons/React.svg';
import Selenium from '../assets/icons/Selenium.svg';
import JavaScript from '../assets/icons/JavaScript.svg';
import bangoff from '../assets/images/bangoff.jpg';
import krishoff from '../assets/images/krishoff.jpg';
 


 export const branches = [
  {
    name: 'Head Office',
    description: 'Jambavan Software Systems Pvt Ltd, No : 57,  7th Main Road,Near Gayathri Temple,Seethappa Layout,RT Nagar(Post),RT Nagar, Bangalore - 560032.',
    imageURL:bangoff
  },
  {
    name: 'Branch',
    description: 'Jambavan Software Systems Pvt Ltd, No :592 -D,Gandhi Road,UCO Bank Upstairs,Krishnagiri-635001,TamilNadu.',
    imageURL:krishoff
  },
];





export  const socialLinks = [
    {
        name: 'Call',
        iconURL: call,
        link: 'tel:8073514213',
    },
     {
        name: 'GMail',
        iconURL: gmail,
        link: 'mailto:jambavansoftwaresystemspvtltd@gmail.com',
    },
    {
        name: 'Facebook',
        iconURL: facebook,
        link: 'https://www.facebook.com/share/1EVG8RoweH/',
    },
    {
        name: 'Instagram',
        iconURL:instagram,    
        link: 'https://www.instagram.com/jsplimited?igsh=MzRlODBiNWFlZA==',
    },
    {
        name: 'Twitter',
        iconURL:twitter,   
        link: '',
    },
 {
        name: 'Whatsapp',
        iconURL:whatsapp,   
        link: 'https://wa.link/qq9tdj',
    },


];
export const courses = [
   
    {
        title: "Java Full Stack Web Development",
        icon: Java,
        iconBg: "#fbc3bc",        
        points: [
            "Java Full Stack Web Development is a comprehensive course that covers both front-end and back-end technologies.",
            "You will learn to build dynamic web applications using Java, Spring Boot, React, and more.",
            "This course is ideal for those looking to become proficient full stack developers.",
            
        ],
         theme: 'from-gray-800 to-gray-600 text-white'
    },
      {
        title: "Python Full Stack Web Development",
        icon: Python,
        iconBg: "#fbc3bc",        
        points: [
            "Python Full Stack Web Development focuses on using Python for both front-end and back-end development.",
            "You will learn to create robust web applications using Django, Flask, and React.",
            "This course is perfect for those who prefer Python as their primary programming language.",
            
        ],
        theme: 'from-blue-900 to-blue-600 text-white'   
    },
    {
        title: "Advance Java Selenium Test Automation",
        icon: Selenium,
        iconBg: "#fbc3bc",        
        points: [
            "Advanced Java concepts for Selenium, including handling dynamic web elements and implementing design patterns for automation.",
            "Techniques for writing scalable, maintainable test scripts and integrating with frameworks like TestNG or JUnit.",
            "Integrating Selenium with CI/CD tools, managing test data, and advanced reporting and debugging techniques.",
            
        ],
        theme: 'from-purple-700 to-indigo-500 text-white'
    },

 {
        title: "Advance Python Selenium Test Automation",
        icon: Selenium,
        iconBg: "#fbc3bc",        
        points: [
            "Advanced Python concepts for Selenium, including handling dynamic web elements and implementing design patterns for automation.",
            "Techniques for writing scalable, maintainable test scripts and integrating with frameworks like pytest or unittest.",
            "Integrating Selenium with CI/CD tools, managing test data, and advanced reporting and debugging techniques.",
            
        ],
        theme: 'from-purple-700 to-indigo-500 text-white'
    },

     {
        title: "Devops Master Course",
        icon: Devops,
        iconBg: "#fbc3bc",        
        points: [
            "Learn key concepts like continuous integration, delivery, and team collaboration.",
            "Get hands-on experience with tools for automation, version control, and monitoring (e.g., Jenkins, Docker, Kubernetes).",
            "Work on real-world projects to apply DevOps methods in development and deployment.",
            
        ],
         theme: 'from-gray-800 to-gray-600 text-white'
    }, 
    {
        title: "API Manual & Automation Testing - Using Postman - JAVA Rest Assured",
        icon: Java,
        iconBg: "#fbc3bc",        
        points: [
            "This course covers manual and automated API testing using Postman and Java Rest Assured.",
            " You will learn to design, execute, and automate API tests, ensuring the reliability and performance of web services.",
            "Ideal for testers looking to enhance their skills in API testing methodologies.",
            
        ],
         theme: 'from-blue-900 to-blue-600 text-white'
    },


     {
        title: "Data Analyst Master Course",
        icon: Dataanylysis,
        iconBg: "#fbc3bc",        
        points: [
            "This course provides a comprehensive understanding of data analysis techniques and tools.",
            "You will learn to collect, process, and analyze data using Python, SQL, and data visualization tools.",
            "Ideal for those looking to start a career in data analysis or enhance their existing skills.",
            
        ],
         theme: 'from-blue-900 to-blue-600 text-white'
    },

     {
        title: "Data Science Master Course",
        icon: Datascience,
        iconBg: "#fbc3bc",        
        points: [
            "This course covers the fundamentals of data science, including statistical analysis, machine learning, and data visualization.",
            "You will learn to use Python and its libraries (like Pandas, NumPy, and Scikit-learn) to analyze and interpret complex datasets.",
            "Ideal for those looking to enter the field of data science or enhance their analytical skills.",
            
        ],
        theme: 'from-purple-700 to-indigo-500 text-white'
    },

     {
        title: "MERN Full Stack",
        icon: JavaScript,
        iconBg: "#fbc3bc",        
        points: [
            "Master the full spectrum of web development with comprehensive training in both front-end technologies, modern TypeScript and frameworks like express js with node to build scalable and efficient applications.",
            
            
        ],
         theme: 'from-gray-800 to-gray-600 text-white'
    },
    
    {
        title: "BDD Framework with cucumber",
        icon: Cucumber,
        iconBg: "#fbc3bc",        
        points: [
            "This course teaches you to implement Behavior-Driven Development (BDD) ",
            "Using Cucumber to create clear, maintainable, and efficient automated tests for web applications.",
            
            
        ],
        theme: 'from-purple-700 to-indigo-500 text-white'
    }, 

     {
        title: "MEAN Full Stack",
        icon: Nestjs,
        iconBg: "#fbc3bc",        
        points: [
            "Master the full spectrum of web development with comprehensive training in both front-end technologies ",
            "Leveraging JavaScript, the Angular framework, modern TypeScript,and frameworks like Express js with Node to build scalable and efficient applications.",
            
            
        ],
         theme: 'from-gray-800 to-gray-600 text-white'
    },

     {
        title: "Advance React",
        icon: React,
        iconBg: "#fbc3bc",        
        points: [
            "Our React JS course covers the fundamentals of React, including components, state, and props, and advanced topics like hooks, context, and routing.",
            "You'll learn to build dynamic and responsive web applications using JSX and component-based architecture.",
            "The course typically includes hands-on projects to apply concepts and gain practical experience."
            
        ],
         theme: 'from-blue-900 to-blue-600 text-white'
    },

      {
        title: "Data Structure & Algorithm",
        icon: Dsa,
        iconBg: "#fbc3bc",        
        points: [
            "Master the art of problem-solving and programming with this comprehensive Data Structures & Algorithms (DSA) course using Python.",
            "Gain the skills to design and analyze efficientalgorithms while learning to implement core data structures to tackle real-world challenges.",
            
            
        ],
         theme: 'from-gray-800 to-gray-600 text-white'
    },

{
        title: "Python Selenium with Robo Framework",
        icon: Pythonrobo,
        iconBg: "#fbc3bc",        
        points: [
            "The Python Selenium with Robot Framework course teaches you how to automate web application testing using Python, Selenium, and the Robot Framework for efficient test scripting and execution.",
          
            
        ],
         theme: 'from-blue-900 to-blue-600 text-white'
    },

    {
        title: "Tosca Training Curriculum",
        icon: Learncourse,
        iconBg: "#fbc3bc",        
        points: [
            "The Tosca Training course teaches you how to automate functional and regression testing using Tosca, a leading test automation tool for efficient software testing.",
            
    
            
        ],
        theme: 'from-purple-700 to-indigo-500 text-white'
    },



    































        
];

