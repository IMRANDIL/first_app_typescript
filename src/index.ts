// import { User } from "./User";
// import { Company } from "./Company";

// const user = new User();
// const company = new Company();


// console.log(company);


// console.log(user);
const element = document.getElementById('mapDiv') as HTMLElement;

new google.maps.Map(element, {
    zoom: 1,
    center: {
        lat: 10,
        lng: 0
    }

})

