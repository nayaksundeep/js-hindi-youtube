/* const tinderUser = new Object() */
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sandy"
tinderUser.isloggedIn = false

/* console.log(tinderUser); */

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname:"sundeep",
            lastname:"nayak",
        }
    }
}

/* console.log(regularUser.fullname.userfullname)
 */
const obj1 = {1:"a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

/* const obj3 = { obj1, obj2 } */

/* const obj3 = Object.assign({}, obj1, obj2) */

const obj3 = {...obj1, ...obj2}

console.log(obj3);


const users = [
{
    user: "123abc",
    email: "some@abc",
},
{
    user: "123abc",
    email: "some@abc",
},
{
    user: "123abc",
    email: "some@abc",
},

]

users[1].email
/* console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn')) */

const course = {
    course : "js in Hindi",
    price: "999",
    courseInstructor: "hitesh",
}

//course.courseInstructor

const{courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

