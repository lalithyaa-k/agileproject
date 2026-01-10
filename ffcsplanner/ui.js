function showCourses(list) {
    const container = document.getElementById("courseList");
    container.innerHTML = "";
    list.forEach(course => {
        container.innerHTML += `
         <div onclick="addToTimetable('${course.code}')">
            ${course.code} - ${course.title} (${course.slot})
         </div>`;
    });
}

function addToTimetable(code) {
    const course = courses.find(c => c.code === code);
    const table = document.getElementById("timetable");
    table.innerHTML += `<div>${course.code} - ${course.slot}</div>`;
}
