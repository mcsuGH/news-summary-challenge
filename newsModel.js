class newsModel {
  constructor() {
    this.news = [];
  }

  getNews() {
    return this.news;
  }

  addNews(headline) {
    this.news.push(headline);
  }

}

module.exports = newsModel;