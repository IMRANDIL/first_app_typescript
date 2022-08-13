import { User } from "./User";
import { Company } from "./Company";



interface Mappable{
    location: {
        lat: number;
        lng: number;
    }
}






export class CustomMap {
    private googleMap: google.maps.Map; //default modifier is public....private is not accessible outside the class

    constructor(divId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }











//    addMarker(mapable: User | Company): void {
// new google.maps.Marker({
//     map: this.googleMap,
//     position:{
//         lat: mapable.location.lat,
//         lng: mapable.location.lng
//     }

// })
//    }

//    addCompanyMarker(company: Company):void{
// new google.maps.Marker({
//     map: this.googleMap,
//     position:{
//         lat: company.location.lat,
//         lng: company.location.lng
//     }
//    })
// }
}


