<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-simple-search-dropdown/dist/vue-simple-search-dropdown.min.js"></script>
<script type="text/javascript"> Vue.use(Dropdown); </script>

import Dropdown from 'vue-simple-search-dropdown';

<template>
    <div class="mainEditBody">
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

        <!--Course Hours-->
        <!--Clock Symbol + Hours + Drop-down-->
        <div class="courseHoursContainer">
            <Dropdown
                :options="[{ id: 1, name: '1'}, { id: 2, name: '2'}, {id: 3, name: '3'}, , {id: 4, name: '4'}]"
                v-on:selected="validateSelection"
                v-on:filter="getDropdownValues"
                :disabled="false"
                name="hours"
                :maxItem="4"
                placeholder="Please select course hours">
            </Dropdown>
        </div>

        <!--Semesters Offered-->        
        <div class="semestersOfferedContainer">
            
        </div>

        <!--Lab Requirement-->
        <div class="labContainer">
            
        </div>

        <!--PreRequisites-->
        <!--'Search and Add' + Search Symbol-->
        <div class="preReqContainer">
            <input
                class="preReqElement"
                ref="preReqValue"
                type="text"
                placeholder="ex. 'CMSC-2133'"
            />
        </div>

        <!--Course Description-->
        <!-- TEXT FILLER-->
        <div class="courseDescriptionContainer">
            <input
                class="courseDescriptionElement"
                ref="courseDescriptionValue"
                type="text"
                placeholder="ex. 'CMSC-2133'"
            />            
        </div>

        <div class="courseDescriptionContainer"></div>

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

<style>
    .mainEditBody {
    width: 50vw;
    height: 60vh;
    display: grid;
    grid-template-columns: 10fr 1fr;
    column-gap: 2vw;
    padding: 2vw 2vw;
    }

    .courseNameContainer {
        
    }

    .saveButtonsContainer button{
    background-color: var(--light-gray);
    border: none;
    color: var(--light-green);
    font-size: 2vw;
    text-decoration: none;
    }

    .saveButtonsContainer button:hover {
    color: var(--darker-green);
    cursor: pointer;
    }

    .deleteButtonsContainer button {
    background-color: var(--light-gray);
    border: none;
    color: var(--light-red);
    font-size: 2vw;
    text-decoration: none;
    }

    .deleteButtonsContainer button:hover {
    color: var(--darker-red);
    cursor: pointer;
    }

    .courseNumberElement {
    background-color: wwhite;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    /* height: 100%; */
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    /* width: 100%; */
    }

    .courseNameElement {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    /* height: 100%; */
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    /* width: 100%; */
    }   
    
    .preReqElement {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    /* height: 100%; */
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    /* width: 100%; */
    }     

    .courseDescriptionElement {
    background-color: white;
    border: none;
    border-radius: 10vw;
    box-sizing: border-box;
    color: var(--dark-blue);
    font-size: 1.5vw;
    /* height: 100%; */
    letter-spacing: 0.1vw;
    padding: 0 0 0 2vw;
    /* width: 100%; */
    }  
</style>