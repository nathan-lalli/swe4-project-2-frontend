<template> 
    <div class="grid-container">
        <div class="courseNumberContainer">
            <header>
                Course #
            </header>
            <input
                class="courseNumberElement"
                ref="courseNumberValue"
                type="text"
                placeholder="ex. 'CMSC-2133'"
            />
        </div>
        <div class="courseNameContainer">
            <header>
                Course Name
            </header>
            <input
                class="courseNameElement"
                ref="courseNameValue"
                type="text"
                placeholder="ex. 'Object Oriented Programming'"
            />
        </div>
        <div class="courseHoursContainer">
            <div class="dropdown">
                <button class="courseHoursElement">
                    <i class="fa-solid fa-clock"></i>
                    Hours <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                </div>
            </div>
        </div>  
        <div class="semestersOfferedContainer">
            <div class="dropdown"> 
                <button class="semestersOfferedElement">
                    Semesters Offered <i class="fa-solid fa-chevron-down"></i>
                </button>
                <div class="dropdown-content">
                    <ul class="no-bullets">
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
                    <li><input type="radio" />Lab</li>
                </ul>
            </button>
        </div>
        <div class="preReqContainer">
            <header class="prHeader">
                Prerequisites
            </header>
            <input
                class="preReqElement"
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
                class="courseDescriptionElement"
                ref="courseDescriptionValue"
                type="text"
                placeholder="ex. 'CMSC-2133'"
            /> 
        </div>
        <div class="saveButtonsContainer">
            <button>
                <i class="fa-solid fa-floppy-disk"> SAVE </i>
            </button>
        </div>
        <div class="deleteButtonsContainer">
            <button>
                <i class="fa-solid fa-trash-can"> DELETE </i>
            </button>
        </div> 
    </div>
</template>

<script>
    /* Course Number */
    
    // Get course number

    // Recieve input

    // Remove old course number

    // Replace with new course number


    /* Course Name */
        
    // Get course number

    // Recieve input

    // Remove old course number

    // Replace with new course number


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
    .courseHoursElement {   
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
    .semestersOfferedElement {
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
    .labElement {
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
    .preReqElement {
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
    .courseDescriptionElement {
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