
let courses = [];

function addCourse() {

    let courseCode = document.getElementById("courseCode").value;
    let courseUnit = Number(document.getElementById("courseUnit").value);
    let grade = document.getElementById("grade").value;

    if (courseCode === "" || document.getElementById("courseUnit").value === "" || grade === "") {
        alert("Please fill all course information");
    }

    else if (courseUnit <= 0 || !Number.isInteger(courseUnit)) {
        alert("Course unit must be a positive whole number");
    }

    else {

        let course = {
            code: courseCode,
            unit: courseUnit,
            gradePoint: Number(grade)
        };

        courses.push(course);

        let table = document.getElementById("courseList");

        let row = table.insertRow();

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.textContent = courseCode;
        cell2.textContent = courseUnit;
        cell3.textContent = grade;

        document.getElementById("courseCode").value = "";
        document.getElementById("courseUnit").value = "";
        document.getElementById("grade").value = "";

        console.log(courses);
    }
}


function calculateGPA() {

    let studentName = document.getElementById("studentName").value;

    let previousCGPAInput = document.getElementById("previousCGPA").value;
    let previousUnitsInput = document.getElementById("previousUnits").value;

    let previousCGPA = Number(previousCGPAInput);
    let previousUnits = Number(previousUnitsInput);

    if (studentName === "") {
        alert("Please enter student name");
    }

    else if (courses.length === 0) {
        alert("Please add at least one course");
    }

    else if ((previousCGPAInput === "" && previousUnitsInput !== "") ||
            (previousCGPAInput !== "" && previousUnitsInput === "")) {
        alert("Please enter both previous CGPA and previous units");
    }

    else if (previousCGPA < 0 || previousCGPA > 5 || previousUnits < 0 ||
            !Number.isInteger(previousUnits)) {
        alert("Please enter valid previous academic records");
    }

    else {

        let totalUnits = 0;
        let totalPoints = 0;

        for (let i = 0; i < courses.length; i++) {

            let qualityPoints = courses[i].unit * courses[i].gradePoint;

            totalUnits = totalUnits + courses[i].unit;

            totalPoints = totalPoints + qualityPoints;
        }

        let GPA = totalPoints / totalUnits;

        let previousPoints = previousCGPA * previousUnits;

        let CGPA = (previousPoints + totalPoints) /
                (previousUnits + totalUnits);

        document.getElementById("result").innerHTML =
            "Student Name: " + studentName +
            "<br>Total Course Units: " + totalUnits +
            "<br>Total Quality Points: " + totalPoints +
            "<br>GPA: " + GPA.toFixed(2) +
            "<br>CGPA: " + CGPA.toFixed(2);

        console.log("Student Name: " + studentName);
        console.log("Total Units: " + totalUnits);
        console.log("Total Points: " + totalPoints);
        console.log("GPA: " + GPA);
        console.log("CGPA: " + CGPA);
    }
}
