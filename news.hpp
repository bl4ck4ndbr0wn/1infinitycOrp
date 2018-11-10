#include <eosiolib/eosio.hpp>
#include <eosiolib/time.hpp>
#include <eosiolib/print.hpp>

using namespace eosio;

CONTRACT news : public contract
{
    using contract::contract;

  public:
    news(eosio::name self, eosio::name code, datastream<const char *> stream) : contract(self, code, stream), _articles(self, self.value), _reviews(self, self.value) {}

    ACTION newarticle(name user, name & author, uint64_t timestamp, std::string title, std::string content, std::string tags, std::string category, std::string filename, std::string filepath);

    ACTION review(uint64_t timestamp, name author, name reviewer, std::string review);

  private:
    TABLE article
    {
        uint64_t id;
        name user;
        name author;
        // time_point_sec timestamp;
        uint64_t timestamp;
        std::string title;
        std::string content;
        std::string tags;
        std::string filename;
        std::string filepath;
        // std::vector<name> reviewers;
        // std::string review;
        uint128_t skey;
        std::string category;
        // primary key
        uint64_t primary_key() const { return id; }

        // secondary key
        uint128_t get_by_skey() const { return skey; }
    };

    // typedef a multi index table. Index by secondary key as well.
    typedef eosio::multi_index<name("articles"), article,
                               indexed_by<name("getbyskey"), const_mem_fun<article, uint128_t, &article::get_by_skey>>>
        articles_table;

    TABLE rev
    {
        uint64_t id;
        uint64_t article_id;
        name reviewer;
        std::string review;

        uint64_t primary_key() const { return id; }
    };

    typedef eosio::multi_index<name("reviews"), rev> reviews_table;

    articles_table _articles;
    reviews_table _reviews;
};std::string filename, std::filepathstd::string filename, std::filepathstd::string filename, std::filepathstd::string filename, std::filepath