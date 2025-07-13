function getLetterGrade(average) {
    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

let repeat = 'yes';
while (repeat === 'yes'){
    const numAssignments = prompt("Enter the number of assignments to grade (up to 10):");
    let totalScore = 0;
    for (let i = 1; i <= numAssignments; i++) {
        const score = prompt("Enter the score for assignment " + i);
        totalScore += parseFloat(score);
} 
    const average = totalScore / numAssignments;
    const letterGrade = getLetterGrade(average);  
    alert('The average score is' + average.toFixed(2) + '%. The letter grade is ' + letterGrade);
    repeat = prompt('would you like to calculate another grade? (yes/no)').toLowerCase();
}