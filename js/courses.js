const COURSE_NAME = document.querySelector("#header .data h1");
const COURSE_DESC = document.querySelector("#header .data .desc");
const COURSE_BUTTON = document.querySelector("#header .data button");
const COURSE_INSTRUCTIONS = document.querySelector("#header .data .instructions");

const DIFF_SLIDER = document.querySelector(".difficulty-slider");
const DIFF_LABEL = document.querySelector(".difficulty-slider h3");
const DIFF_AREA = document.querySelector(".difficulty-slider .difficulty");

var selectedCourse = null;

function setCourse(course) {
    if(selectedCourse != null) {
        selectedCourse.classList.remove("selected");
    }

    selectedCourse = course;
    selectedCourse.classList.add("selected");

    COURSE_INSTRUCTIONS.style.display = "none";
    COURSE_BUTTON.style.display = "block";

    COURSE_NAME.innerHTML = selectedCourse.getAttribute("name");
    COURSE_DESC.innerHTML = selectedCourse.getAttribute("desc");

    DIFF_LABEL.innerHTML = `${selectedCourse.getAttribute("diff")}/5`;
    DIFF_AREA.style.width = `${(selectedCourse.getAttribute("diff") / 5) * 100}%`;

    DIFF_SLIDER.style.display = "flex";
}

function selectCourse() {
    if(selectedCourse == null) return;

    window.location = `/education/${selectedCourse.getAttribute("location")}`;
}