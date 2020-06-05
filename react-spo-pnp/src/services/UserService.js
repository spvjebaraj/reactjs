import { sp } from "@pnp/sp";
import { Observable, of } from "rxjs";

class UserService {
  constructor() {
    const config = {
      sp: {
        headers: {
          Accept: "application/json; odata=verbose"
        }
      }
    };
    sp.setup(config);
  }

  getCurrentUserDetails() {
    //return sp.web.currentUser.get();
    return of(sp.web.currentUser.get());
  }
}

export default UserService;
