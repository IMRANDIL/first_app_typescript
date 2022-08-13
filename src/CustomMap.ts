

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

    addMarker(lat: number, lng: number): void {
        new google.maps.Marker({
            position: {
                lat: lat,
                lng: lng
            },
            map: this.googleMap
        });
    }
}