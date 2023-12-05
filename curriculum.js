const curriculumObjects = [
    {
        title: "Applied Economics",
        details: "Discover the dynamic world of economics and its practical applications in our daily lives. Learn how economic principles shape the decisions made by businesses, governments, and individuals. With Applied Economics, you can gain insights into market trends, make informed choices, and create a positive impact on the economy around you.",
        picture: 'img/img1.png'
    },
    {
        title: "Business Ethics and Social Responsibility",
        details: " In this subject, we explore the vital connection between ethical business practices. Understand the role of businesses in promoting social responsibility, environmental stewardship, and community engagement. With Business Ethics, you'll be equipped to become a responsible and conscientious leader, making a difference in the world through your business endeavors.",
        picture: 'img/img2.png'
    },
    {
        title: "Fundamentals of Accountancy, Business and Management 1",
        details: " Embark on an exciting journey into the fundamentals of accountancy, business, and management. Lay the groundwork for your future career by mastering the essential concepts that underpin successful enterprises. From financial management to strategic planning, this subject will empower you to become a well-rounded business professional.",
        picture: 'img/img3-4.png'
    },
    {
        title: "Fundamentals of Accountancy, Business and Management 2",
        details: "Building upon the knowledge gained in the previous course, Fundamentals of Accountancy, Business and Management 2 delves deeper into advanced concepts. Acquire the skills needed to analyze financial data, make critical business decisions, and navigate the complexities of the corporate world confidently.",
        picture: 'img/img3-4.png'
    },
    {
        title: "Business Math",
        details: "Unravel the power of numbers in the world of business with Business Math. From calculating profits and losses to forecasting trends, this subject equips you with the mathematical tools essential for any aspiring entrepreneur or financial expert. Develop your logical thinking and numerical abilities to excel in the business landscape.",
        picture: 'img/img5.png'
    },
    {
        title: "Business Finance",
        details: " Explore the exciting world of business finance and learn to navigate the intricacies of managing money in an organization. Discover the art of budgeting, investment strategies, and financial risk management. With Business Finance, you can become a shrewd financial planner and drive your business to greater success.",
        picture: 'img/img6.png'
    },
    {
        title: "Organization and Management",
        details: "Become a master of efficiency and leadership with Organization and Management. Unlock the secrets of effective organizational structures, develop strong managerial skills, and understand how to motivate and guide your team. This subject empowers you to become a visionary leader capable of steering businesses towards greatness.",
        picture: 'img/img7.png'
    },
    {
        title: "Principles of Marketing",
        details: "Step into the dynamic world of marketing and discover the art of capturing hearts and minds. Learn to identify consumer needs, create compelling campaigns, and build strong brand identities. With Principles of Marketing, you can become a creative force, driving innovation and making lasting impressions in the market.",
        picture: 'img/img8.png'
    },
    {
        title: "Work Immersion",
        details: "This culminating phase of the ABM strand provides you with hands-on experience, enabling you to apply all you've learned throughout the program. Engage in real-world work experiences, conduct research, advocate for your chosen career path, or participate in exciting business enterprise simulations. This final stage solidifies your expertise, preparing you to embark on an inspiring journey in the world of Accountancy, Business, and Management.",
        picture: 'img/img9.png'
    },
    
];

const titleElement = document.getElementById('title');
const detailsElement = document.getElementById('content');
const imageElement = document.getElementById('img-specs');
const prevButton = document.querySelector('.fa-caret-left');
const nextButton = document.querySelector('.fa-caret-right');
const page = document.querySelector('.page');
const pageBoxes = document.querySelectorAll('.box'); 


let currentIndex = 0;
let pagecount = 1;


function updateContent(index) {
    const currentObject = curriculumObjects[index];
    titleElement.textContent = currentObject.title;
    detailsElement.textContent = currentObject.details;
    imageElement.src = currentObject.picture;
    page.textContent = `${pagecount} / ${curriculumObjects.length}`
    updatePageBoxBackground(index);

}

function updatePageBoxBackground(activeIndex) {
    pageBoxes.forEach((box, index) => {
        if (index === activeIndex) {
            box.style.backgroundColor = '#43B7ff'; 
        } else {
            box.style.backgroundColor = '#032A63';
        }
    });
}

updateContent(currentIndex);


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % curriculumObjects.length;
    pagecount = (pagecount % curriculumObjects.length) + 1;
    updateContent(currentIndex);
    scrollToTop();
});


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + curriculumObjects.length) % curriculumObjects.length;
    pagecount = (pagecount - 2 + curriculumObjects.length) % curriculumObjects.length + 1; 
    updateContent(currentIndex);
    scrollToTop();
});

function scrollToTop() {
    const specializationBox = document.querySelector('.specialization-box');
    const offset = 80; 

    window.scrollTo({
        top: specializationBox.offsetTop - offset,
        behavior: 'smooth'
    });
}
