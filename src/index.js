import "./style.css";

import Home from './navbar/home.js';
import Menu from './navbar/menu.js';
import Contact from './navbar/contact.js';
import About from './navbar/about.js';
import Feedback from'./navbar/feedback.js';

const content = document.querySelector('#content');


content.innerHTML = Home();

const tabs = document.querySelectorAll('nav > button');

for (const tab of tabs) {
    tab.addEventListener('click', clickHandler);
}

function clickHandler(e) {

    const tabName = this.textContent;

   
    content.setAttribute('class', '');

    switch (true) {
        case(tabName == 'Home'):
            content.innerHTML = Home();
            break;
        
        case(tabName == 'Menu'):
            content.innerHTML = Menu();
            break;

        case(tabName == 'Contact'):
            content.innerHTML = Contact();
            break;
        
        case(tabName == 'Feedback'):
            content.innerHTML = Feedback();
            
            
            break;    

        case(tabName == 'About'):
            content.innerHTML = About();
    }
}