#include "news.hpp"

ACTION news::newarticle(name &author, time_point_sec timestamp, std::string title, std::string content, std::vector<std::string> tags)
{
    require_auth(author); // Require the creator of the article to sign.
    // Save article to table. Charge the get_self() , i.e. this contract for the resources used.
    _articles.emplace(get_self(), [&](auto &a) {
        a.id = _articles.available_primary_key();
        a.author = author;
        a.timestamp = timestamp;
        a.title = title;
        a.content = content;
        a.tags = tags;
    });
}

ACTION news::review(uint64_t article_id, name reviewer,std::string review)
{

    auto i = _articles.find(article_id);
    if (i != _articles.end())
    {
        _reviews.emplace(get_self(), [&](auto &r) {
            r.article_id = article_id;
            r.reviewer = reviewer ;
            r.review = review;
        });
    }
   
}

EOSIO_DISPATCH(news, (newarticle)(review))