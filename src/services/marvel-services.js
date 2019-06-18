export default class MarvelService {
	_apiBase = 'http://gateway.marvel.com/v1/public/comics?ts=2&apikey=ccf7bd2a0c12312622a79c75467b47dd&hash=ef4ecf8a788497179a5cc7b0f6e4ae06';
	async getResource() {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(`Could not fetch` +
        `, received ${res.status}`)
    }
    return await res.json();
  }
  get() {
		return this.getResource();
	}
}