// Global variable to store user responses
let scores = {
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0
};

// Function to show the next section and hide the current section
function nextSection(sectionNumber) {
    const currentSection = document.getElementById(`section${sectionNumber}`);
    currentSection.classList.add('hidden');

    const nextSection = document.getElementById(`section${sectionNumber + 1}`);
    nextSection.classList.remove('hidden');
}

// Function to scroll back to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Function to submit a section
function submitSection(sectionNumber) {
    const questionInputs = document.querySelectorAll(`#section${sectionNumber} input[type="radio"]:checked`);
    if (questionInputs.length === 5) {
        questionInputs.forEach(input => {
            scores[`section${sectionNumber}`] += parseInt(input.value);
        });

        // If it's not the last section (Section 5), show the next section
        if (sectionNumber !== 5) {
            nextSection(sectionNumber);
        } else {
            // If it's the last section (Section 5), show the result and hide Section 5
            document.getElementById('section5').classList.add('hidden');
            document.getElementById('result').classList.remove('hidden');
            displayResult();
        }

        scrollToTop(); // Scroll back to the top after submitting a section
    } else {
        alert('Please answer all five questions before submitting.');
    }
}

// Function to calculate total score and display result
function displayResult() {
    // Calculate total score
    let totalScore = scores.section1 + scores.section2 + scores.section3 + scores.section4 + scores.section5;
    let resultDescription = '';

    if (totalScore >= 60) {
        // Result description for Level 4 - Exceptionally Eligible
        resultDescription = "Congratulations! Based on your responses, you have demonstrated the qualities and aptitude that align with the ABM (Accountancy, Business, and Management) strand. Your strong leadership, analytical thinking, and problem-solving skills make you well-suited for a career in business, finance, entrepreneurship, or management. Pursuing the ABM strand can open doors to various opportunities in the business world, allowing you to make a positive impact and achieve your career goals. Keep up the excellent work!";
    } else if (totalScore >= 40) {
        // Result description for Level 3 - Highly Eligible
        resultDescription = "Great job! Your responses indicate that you have a balanced mix of skills and interests. While the ABM (Accountancy, Business, and Management) strand may not be your top match, it still presents exciting possibilities for you. You have the potential to excel in various fields, including arts, media, communication, or even careers that involve problem-solving and research. Explore different paths to discover what aligns best with your passions and aspirations. Remember, your determination and dedication will drive your success!";
    } else {
        // Result description for Level 2 - Moderately Eligible
        resultDescription = "Well done! Your interests and strengths point you towards careers related to the ABM (Accountancy, Business, and Management) strand. You have the potential to excel in areas that involve business, finance, entrepreneurship, and management. Pursuing the ABM strand can open doors to various opportunities in the business world, allowing you to make a positive impact and achieve your career goals. Embrace your potential and explore the multitude of possibilities that lie ahead!";
    }

    // Display result description
    document.getElementById('result-description').innerText = resultDescription;
}

// Function to restart the quiz
function restartQuiz() {
    // Reset scores to 0
    scores = {
        section1: 0,
        section2: 0,
        section3: 0,
        section4: 0,
        section5: 0
    };

    // Show Section 1 and hide the result
    document.getElementById('section1').classList.remove('hidden');
    document.getElementById('result').classList.add('hidden');

    // Clear all selected radio inputs
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.checked = false;
    });

    scrollToTop(); // Scroll back to the top after restarting the quiz
}

// Event listener for the restart button
document.getElementById('restart-button').addEventListener('click', restartQuiz);

// Event listener for the submit buttons in each section
document.querySelectorAll('.section-submit').forEach(button => {
    button.addEventListener('click', () => {
        const sectionNumber = parseInt(button.getAttribute('data-section'));
        submitSection(sectionNumber);
    });
});
