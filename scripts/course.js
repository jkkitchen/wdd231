//Create array of courses that includes whether or not they have been completed
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Filter which courses are CSE and WDD
const courseListCSE = courses.filter(course => course.subject === "CSE");
const courseListWDD = courses.filter(course => course.subject === "WDD");

//Select buttons div from html file
const buttonsContainer = document.querySelector(".buttons");

//Create buttons for the three options and assign them a class
const courseAllButton = document.createElement("button");
courseAllButton.textContent = "All Courses";
courseAllButton.classList.add("course-button");
courseAllButton.setAttribute("aria-label", "Show All Courses");

const courseCSEButton = document.createElement("button");
courseCSEButton.textContent = "CSE Courses";
courseCSEButton.classList.add("course-button");
courseAllButton.setAttribute("aria-label", "Show CSE Courses");

const courseWDDButton = document.createElement("button");
courseWDDButton.textContent = "WDD Courses";
courseWDDButton.classList.add("course-button");
courseAllButton.setAttribute("aria-label", "Show WDD Courses");

//Add the buttons into the buttons div in the html file
buttonsContainer.appendChild(courseAllButton);
buttonsContainer.appendChild(courseCSEButton);
buttonsContainer.appendChild(courseWDDButton);

//Add Event Listeners and display courses for each category
courseAllButton.addEventListener("click", () => {
    displayCourse(courses);
    creditNumberDisplayed(courses);
});

courseCSEButton.addEventListener("click", () => {
    displayCourse(courseListCSE);
    creditNumberDisplayed(courseListCSE);
});

courseWDDButton.addEventListener("click", () => {
    displayCourse(courseListWDD);
    creditNumberDisplayed(courseListWDD);
});

//Use function to create each course for display
function displayCourse(courseList) {
    //Select class from index.html
    let container = document.querySelector(".courses-figures");

    //Clear before each button is pushed so new arrays can be made
    container.innerHTML = '';

    //Create content
    courseList.forEach(course => {
        let courseName = document.createElement("p");
        courseName.textContent = (`${course.completed ? '\u2713 ' : ''}${course.subject} ${course.number}`);

        //Add classes
        courseName.classList.add("courses-list");
        courseName.classList.add(course.completed ? "completed" : "not-completed");

        //Add the course to the courses div in the html file
        container.appendChild(courseName);
    });
}

//Create function to calculate the number of credits displayed.
function creditNumberDisplayed(courseList) {
    //Select element from html file
    const creditNumber = document.querySelector("#credit-number");

    //Calculate the number of credits for each array using reduce function
    const totalCredits = courseList.reduce((accumulator, course) => accumulator + course.credits, 0);

    //Display back in the html file
    creditNumber.textContent = `Credits Required: ${totalCredits}`;
};

//Write a function to display the modal
function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
});