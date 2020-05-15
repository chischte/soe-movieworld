export class ServiceHelper {

  baseUrl: string = "https://api.themoviedb.org/3/";

  createUrlPath(firstPath: string, middlePath: string, language: string, page: string = "", afterApiKeyPath: string = "") {
    let apiKey = this.getApiKey();
    let returnPath = this.baseUrl + firstPath + middlePath + apiKey + afterApiKeyPath + language + page;
    return returnPath;
  };

  private getApiKey() {
    return "api_key=9daf07285a3560ae7a1a515899ab5db5";
  }
}

