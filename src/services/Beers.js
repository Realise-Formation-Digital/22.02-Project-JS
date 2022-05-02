import Requests from "../libs/requests.js";
import apiRoutes from "../consts/apiRoutes.js";
/**
 * @class
 * @classdesc Beers Service
 * @author Marco Tribuzio
 */
class BeersService{

  static async getBeersList(){
    try{
      const response = await Requests.get(apiRoutes.getBeers)
      return response
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  static async getSingleBeer(id) {
    try {
      const response = await Requests.get(apiRoutes.getSingleBeers + id)
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }
}

export default BeersService