import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Company();
new CustomMap('mapDiv').addMarker(user.location.lat, user.location.lng);






