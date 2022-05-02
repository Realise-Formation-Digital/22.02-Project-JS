/**
 * @class
 * @classdesc Class wrapper for Axios
 */
class Requests {

  /**
   * Wrapper of axios get
   * @param {String} url - url to get
   * @returns {Promise<Promise>}
   */
  static async get(url) {
    try {
      const response = await axios.get(url);
      if (response.status !== 200) throw new Error('An error has thrown')
      return response.data
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  /**
   * Wrapper of axios post
   * @param {String} url - url to post
   * @param {Object} body - body to send
   * @returns {Promise<Promise>}
   */
  static async post(url, body) {
    try {
      const response = await axios.post(url, body);
      if (response.status !== 200) throw new Error('An error has thrown')
      return response.data
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  /**
   * Wrapper of axios put
   * @param {String} url - url to post
   * @param {Object} body - body to send
   * @returns {Promise<Promise>}
   */
  static async put(url, body) {
    try {
      const response = await axios.put(url, body);
      if (response.status !== 200) throw new Error('An error has thrown')
      return response.data
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }

  /**
   * Wrapper of axios delete
   * @param {String} url - url to post
   * @param {Object} body - body to send
   * @returns {Promise<Promise>}
   */
  static async delete(url, body) {
    try {
      const response = await axios.delete(url, body);
      if (response.status !== 200) throw new Error('An error has thrown')
      return response.data
    }catch (e) {
      console.error(e)
      throw new Error(e)
    }
  }
}

export default Requests