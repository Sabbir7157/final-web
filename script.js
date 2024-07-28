function calculateGrade() {
    var score = document.getElementById('score').value;
    var result = document.getElementById('result');
    var grade = '';
    var gpa = 0.00;
    var message = '';

    if (score >= 80 && score <= 100) {
        grade = 'A+';
        gpa = 5.00;
        message = 'Excellent! Keep up the good work.';
        result.style.color = '#28a745';
    } 
    else if (score >= 70 && score <= 79) {
        grade = 'A';
        gpa = 4.00;
        message = 'Well done! You performed admirably.';
        result.style.color = '#28a745';
    } 
    else if (score >= 60 && score <= 69) {
        grade = 'A-';
        gpa = 3.50;
        message = 'Good job! You are above average.';
        result.style.color = '#17a2b8';
    } 
    else if (score >= 50 && score <= 59) {
        grade = 'B';
        gpa = 3.00;
        message = 'Not bad! You are on the right track.';
        result.style.color = '#007bff';
    } 
    else if (score >= 40 && score <= 49) {
        grade = 'C';
        gpa = 2.00;
        message = 'Fair effort. Keep pushing.';
        result.style.color = '#ffc107';
    } 
    else if (score >= 33 && score <= 39) {
        grade = 'D';
        gpa = 1.00;
        message = 'You can do better. Focus on improvement.';
        result.style.color = '#dc3545';
    } 
    else if (score >= 0 && score <= 32) {
        grade = 'F';
        gpa = 0.00;
        message = 'Im sorry but You need to work harder.';
        result.style.color = '#dc3545';
    } 
    else if (score == 0) {
        grade = 'Invalid Score';
        gpa = 'N/A';
        message = 'Please enter a valid score (0-100).';
        result.style.color = '#6c757d';
    } 
    else{
        grade = 'Invalid Score';
        gpa = 'N/A';
        message = 'Please enter a valid score (0-100).';
        result.style.color = '#6c757d';
    }

    result.textContent = 'Grade: ' +    grade + ' (GPA: ' + gpa.toFixed(2) + ')' + '\n' + message;
}
