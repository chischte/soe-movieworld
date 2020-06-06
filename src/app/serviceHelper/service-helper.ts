export class ServiceHelper {

  baseUrl = 'https://api.themoviedb.org/3/';

  createUrlPath(firstPath: string, middlePath: string, language: string, page: string = '', afterApiKeyPath: string = '') {
    const apiKey = this.getApiKey();
    const returnPath = this.baseUrl + firstPath + middlePath + apiKey + afterApiKeyPath + language + page;
    return returnPath;
  }

  createUrlSearchPath(firstPath: string, middlePath: string, language: string, page: string = '', userInputString: string = '', includeAdult: string= 'false') {
    const apiKey = this.getApiKey();
    const returnPath = this.baseUrl + firstPath + middlePath + apiKey + language + userInputString + page + includeAdult;
    return returnPath;
  }

  private getApiKey() {
    return 'api_key=9daf07285a3560ae7a1a515899ab5db5';
  }
}
