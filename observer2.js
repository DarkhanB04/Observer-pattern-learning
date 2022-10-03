class AutoNews {
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

class Tairzhan {
  inform(message) {
    console.log(`Tairzhan has been informed about: ${message.news}`);
  }
}
class Kanat {
  inform(message) {
    console.log(`Kanat has been informed about: ${message.news}`);
  }
}
const autoNews = new AutoNews();
autoNews.subscribe(new Tairzhan());
autoNews.subscribe(new Kanat());
autoNews.setNews("Hyundai Palisade's price now: 30 millions tenge");
