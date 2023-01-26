import initialize , { getStudentsData, getCoursesData, getTAs } from "./modules/collegeData.js";

initialize().then((value) => {
    getStudentsData().then((value) => {
        console.log("Successfully retrieved " + value.length + " students");
    }).catch((err) => {
        console.log(err);
    })
    
    getCoursesData().then((value) => {
        console.log("Successfully retrieved " + value.length + " courses");
    }).catch((err) => {
        console.log(err);
    })
    
    getTAs().then((value) => {
        console.log("Successfully retrieved " + value.length + " TAs");
    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log("It was fail!");
})

