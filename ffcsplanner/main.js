document.addEventListener("DOMContentLoaded", () => {
    showCourses(courses);
});

function filterCourses() {
    let search = document.getElementById("searchCourse").value.toLowerCase();
    let filtered = courses.filter(c => c.code.toLowerCase().includes(search));
    showCourses(filtered);
}
