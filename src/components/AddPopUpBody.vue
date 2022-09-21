<template> 
    <div class="grid-container">
        <div class="courseNumberContainer">
            <header>
                Course #
            </header>
            <input
                class="courseNumberElement"
                id="courseNumberValueAdd"
                type="text"
            />
        </div>
        <div class="courseNameContainer">
            <header>
                Course Name
            </header>
            <input
                class="courseNameElement"
                id="courseNameValueAdd"
                type="text"
            />
        </div>
        <div class="courseHoursContainer">
            <div class="dropdown">
                <button class="courseHoursElementAdd">
                    <i class="fa-solid fa-clock"></i>
                    Hours <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#" @click="setHours(1)">1</a>
                    <a href="#" @click="setHours(2)">2</a>
                    <a href="#" @click="setHours(3)">3</a>
                    <a href="#" @click="setHours(4)">4</a>
                </div>
            </div>
        </div>  
        <div class="semestersOfferedContainer">
            <div class="dropdown"> 
                <button class="semestersOfferedElementAdd">
                    Semesters Offered <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="dropdown-content">
                    <ul class="no-bullets semestersAdd">
                        <li><input type="checkbox" />Spring</li>
                        <li><input type="checkbox" />Summer</li>
                        <li><input type="checkbox" />Fall</li>
                        <li><input type="checkbox" />Winter</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="labContainer">
            <button class="semestersOfferedElement">
                <ul class="no-bullets">
                    <li><input class="labCheckboxAdd" type="checkbox" />Lab</li>
                </ul>
            </button>
        </div>
        <div class="preReqContainer">
            <header class="prHeader">
                Prerequisites
            </header>
            <input
                class="preReqElementAdd"
                ref="preReqValue"
                type="text"
                placeholder="Search and Add"
            />
            <button class="prSearchButton">
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
        <div class="displayPreReqContainer">
                <!-- Insert something here -->
        </div>
        <div class="courseDescriptionContainer">
            <header>
                Course Description
            </header>
            <input
                class="courseDescriptionElementAdd"
                ref="courseDescriptionValue"
                type="text"
                placeholder="Enter course information here."
            /> 
        </div>
        <div class="saveButtonsContainer">
            <button @click="save()">
                <i class="fa-solid fa-floppy-disk" > SAVE </i>
            </button>
        </div>
        <div class="deleteButtonsContainer">
            <button>
                <i class="fa-solid fa-trash-can" > DELETE </i>
            </button>
        </div> 
    </div>
</template>

<script>

import CoursesDataService from "../services/CoursesDataService.js";

export default {
    data() {
    return {
      courseDept: "",
      courseNumber: 1111,
      courseName: "",
      courseHours: 3,
      courseSemesters: "",
      courseLab: true,
      courseHasPrereqs: false,
      coursePrereqs: "",
      courseDescription: "",
    }
  },
  methods: {
    close() {
      console.log(this.courseName + "Close");
      this.$emit("close");
    },
    setDept() {  
        this.courseDept = document.getElementById("courseNumberValueAdd").value.split("-")[0];
    },
    getLevel() {
        return this.courseNumber.substr(0,1);
    },
    setNumber() {
        this.courseNumber = document.getElementById("courseNumberValueAdd").value.split("-")[1];
    },
    setName() {
        this.courseName = document.getElementById("courseNameValueAdd").value;
    },
    setHours(hour) {
        this.courseHours = hour;
    },
    setSemesters() {

        var semestersArray = [];
        var children = document.querySelector(".semestersAdd").childNodes;

        for(var i = 0; i < children.length; i++) {
            var child = children[i];

            if(child.childNodes[0].checked) {
                semestersArray.push(child.childNodes[1].data);
            }
        }

        if(semestersArray.length >= 2) {
            this.courseSemesters = "Every";
        }
        else {
        this.courseSemesters = semestersArray.join(", ");
        }
    },
    setLab() {
        this.courseLab = document.querySelector(".labCheckboxAdd").checked;

    },
    setCoursePrereqs() {
        this.coursePrereqs = document.querySelector(".preReqElementAdd").value; 

        if(this.coursePrereqs != "") {
            this.courseHasPrereqs = true;
        }
        else {
            this.courseHasPrereqs = false;
        }
    },
    setDescription() {
        this.courseDesc = document.querySelector(".courseDescriptionElementAdd").value;
    },
    save() {
        
    this.setDept();
    this.setNumber();
    this.setName();
    this.setSemesters();
    this.setLab();
    this.setCoursePrereqs();
    this.setDescription();

    console.log(this.courseDept);

    CoursesDataService.create({
        dept: this.courseDept, 
        coursenumber: (this.courseDept + "-" + this.courseNumber), 
        level: this.getLevel(),
        hours: this.courseHours, 
        name: this.courseName, 
        description: this.courseDesc, 
        prerequisite: this.courseHasPrereqs, 
        lab: this.courseLab, 
        semester: this.courseSemesters, 
        prerequisitecourse: this.coursePrereqs
        });
    }
  },
};
</script>

<style>
    .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 3fr 1fr;

    grid-template-areas:
     'courseNum courseName courseName'
     'hours offered lab'
     'preReq preReq preReqDisplay'
     'courseDesc courseDesc courseDesc'
     'save . delete';
    background-color: var(--light-gray);
    padding: 10px;
    }

    .grid-container > div {
    background-color: var(--light-gray);
    text-align: left;
    padding: 10px 0;
    font-size: 15px;
    }

    /* Course Number */
    .courseNumberContainer {grid-area: courseNum;}
    .courseNumberElement {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    }

    /* Course Name */
    .courseNameContainer {grid-area: courseName;}
    .courseNameElement {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    padding: 0 1vw 0 1vw;
    width: 100%;
    }   

    /* Hours */
    .courseHoursContainer {grid-area: hours;}
    .courseHoursElementAdd {   
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    padding: 0 2vw 0 2vw;
    cursor: pointer;
    }

    /* Semesters Offered */
    .semestersOfferedContainer {grid-area: offered;}
    .semestersOfferedElementAdd {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    padding: 0 2vw 0 2vw;
    cursor: pointer;
    }
    
    /* Lab */
    .labContainer {grid-area: lab;}
    .labElementAdd {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    letter-spacing: 0.1vw;
    padding: 0 0 0 0;
    }  

    /* Prerequisite */
    .preReqContainer 
    {
        display: grid;
        grid-template-columns: 1fr .05fr;
        grid-template-rows: 1fr 1fr;
        grid-template-areas: "prHeader ." "prSearchElement prSearchButton";
        grid-area: preReq;
        width: 100%;
    }
    .displayPreReqContainer {grid-area: preReqContainer;}
    .prHeader {grid-area: prHeader;}
    .preReqElementAdd {
    background-color: white;
    border: none;
    border-radius: 10vw 0 0 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    grid-area: prSearchElement;
    /* height: 100%; */
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    }     
    .prSearchButton {
        background-color: white;
        border: none;
        border-radius: 0 10vw 10vw 0;
        color: var(--dark-blue);
        grid-area: prSearchButton;
        padding: 0 2vw 0 1vw;

    }    
    
    /* Course Description */
    .courseDescriptionContainer {grid-area: courseDesc}
    .courseDescriptionElementAdd {
    background-color: white;
    border: none;
    border-radius: 2vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    height: 200px;
    letter-spacing: 0.1vw;
    padding: 0 2vw 0 2vw;
    width: 100%;
    }  
    
    /* Save Button */
    .saveButtonsContainer{grid-area: save;}
    .saveButtonsContainer button {
    background-color: white;
    border: none;
    color: var(--light-green);
    font-size: 2vw;
    text-decoration: none;
    border-radius: 10vw;
    padding: 0 2vw 0 2vw;
    }
    .saveButtonsContainer button:hover {
    color: var(--darker-green);
    cursor: pointer;
    }

    /* Delete Button */
    .deleteButtonsContainer{grid-area: delete;}
    .deleteButtonsContainer button{
    background-color: white;
    border: none;
    color: var(--light-red);
    font-size: 2vw;
    text-decoration: none;
    border-radius: 10vw;
    padding: 0 2vw 0 2vw;
    }
    .deleteButtonsContainer button:hover {
    color: var(--darker-red);
    cursor: pointer;
    }

    /* Dropdown */
    .dropdown {position: relative; display: inline-block;}
    .dropdown-content {
    display: none;
    position: absolute;
    border-radius: 2vw;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    }
    .dropdown-content a {
    color: var(--dark-blue);
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }
    .dropdown-content a:hover {background-color: #f1f1f1}
    .dropdown:hover .dropdown-content {display: block;}

    /* Checkbox */
    /* Customize the label (the container) */
    .checkbox-container {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
    /* Create a custom checkbox */
    .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    }
    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {background-color: #ccc;}
    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {background-color: var(--dark-blue);}
    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }
    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {display: block;}

    ul.no-bullets {list-style-type: none; padding: 0 0 0 2vw;}
</style>