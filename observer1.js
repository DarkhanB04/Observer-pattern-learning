//observable
class DentalNews {
  constructor() {
    this.news = "";
    this.actions = [];
  }
  setNews(text) {
    this.news = text;
    this.notifyAll();
  }
  notifyAll() {
    return this.actions.forEach((subs) => subs.inform(this));
  }
  subscribe(observer) {
    this.actions.push(observer);
  }
  unsubscribe(observer) {
    this.actions.filter((el) => !(el instanceof observer));
  }
}
//observers
class Bekslan {
  inform(message) {
    console.log(`Bekslan has been informed about: ${message.news}`);
  }
}
class Darkhan {
  inform(message) {
    console.log(`Darkhan has been informed about: ${message.news}`);
  }
}
const dentalNews = new DentalNews();
dentalNews.subscribe(new Bekslan());
dentalNews.subscribe(new Darkhan());
dentalNews.setNews("Teeth cleaning and filling cost 20 thousand tenge");
