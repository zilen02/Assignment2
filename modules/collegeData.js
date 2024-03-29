import fs from 'fs';

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

function initialize() {
    return new Promise((resolve, reject) => {
        var courseDataFromFile, studentsDataFromFile;

        courseDataFromFile = fs.readFileSync('./data/courses.json', 'utf8')
        courseDataFromFile = JSON.parse(courseDataFromFile);

        studentsDataFromFile = fs.readFileSync('./data/students.json', 'utf8')
        studentsDataFromFile = JSON.parse(studentsDataFromFile);

        dataCollection = new Data(studentsDataFromFile, courseDataFromFile);
        if (dataCollection) {
            resolve(dataCollection)
        } else {
            reject("Unable to read!");
        }
    })
}

export function getStudentsData() {
    return new Promise((resolve, reject) => {
        var studentsDataFromFile = dataCollection.students;

        if (studentsDataFromFile.length != 0) {
            resolve(studentsDataFromFile);
        } else {
            reject("no results returned")
        }
    })
}

export function getCoursesData() {
    return new Promise((resolve, reject) => {
        var courseDataFromFile = dataCollection.courses;

        if (courseDataFromFile.length != 0) {
            resolve(courseDataFromFile);
        } else {
            reject("no results returned")
        }
    })
}

export function getTAs() {
    return new Promise((resolve, reject) => {
        var studentsDataFromFile = dataCollection.students;
        var studentsWithTAs = studentsDataFromFile.filter((student) => student.TA == true)

        if (studentsWithTAs.length != 0) {
            resolve(studentsWithTAs);
        } else {
            reject("no results returned")
        }
    })
}

export default initialize;