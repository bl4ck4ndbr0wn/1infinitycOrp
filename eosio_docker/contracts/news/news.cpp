#include "news.hpp"

ACTION news::newarticle(name user, name &author, uint64_t timestamp, std::string title, std::string content, std::string tags, std::string category)
{
  require_auth(author); // Require the creator of the article to sign.
  uint128_t skey = static_cast<uint128_t>(author.value) << 64 | timestamp;
  // Save article to table. Charge the get_self() , i.e. this contract for the resources used.
  _articles.emplace(get_self(), [&](auto &a) {
    a.id = _articles.available_primary_key();
    a.skey = skey;
    a.author = author;
    a.user = user;
    a.timestamp = timestamp;
    a.title = title;
    a.content = content;
    a.tags = tags;
    a.category = category;
  });
}

ACTION news::review(uint64_t timestamp, name author, name reviewer, std::string review)
{

  // auto i = _articles.find(article_id);
  // if (i != _articles.end())
  // {
  //     _reviews.emplace(get_self(), [&](auto &r) {
  //         r.article_id = article_id;
  //         r.reviewer = reviewer;
  //         r.review = review;
  //     });
  // }

  // Above works but lets get fancy now. Index by secondary key :-)
  auto articles_index = _articles.get_index<name("getbyskey")>();
  uint128_t skey = static_cast<uint128_t>(author.value) << 64 | timestamp;
  auto article = articles_index.find(skey);
  eosio_assert(article != articles_index.end(), "Article could not be found");
  _reviews.emplace(get_self(), [&](auto &r) {
    r.reviewer = reviewer;
    r.review = review;
  });

  // check if authorized to update post
}

EOSIO_DISPATCH(news, (newarticle)(review))
