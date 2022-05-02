import BsHandler from "./libs/bsHandler.js";
import BeersService from "./services/Beers.js";

/**
 * @class
 * @classdesc Class that start the page
 * @author Marco Tribuzio
 */
class Start {

  static async onload() {
    try {
      const beersList = await BeersService.getBeersList();
      for (const beer of beersList){
        BsHandler.createCard(beer.name, beer.description, beer.image_url)
      }
    }catch (e) {
      console.error(e)
    }
  }
}

export default Start