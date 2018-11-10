async function createArticle(state, payload, blockInfo, context) {
  const Article = state.article;
  try {
    let article = await Article.find({
      _id: {
        timestamp: payload.data.timestamp,
        author: payload.data.author
      }
    }).exec();

    // if article already exists do not insert it in again
    if (article.length !== 0) return;

    article = new Article({
      _id: {
        timestamp: payload.data.timestamp,
        author: payload.data.author
      },
      author: payload.data.author,
      title: payload.data.title,
      content: payload.data.content,
      tag: payload.data.tag,
      articleConfirmed: true
    });
    await article.save();
  } catch (err) {
    console.error(err);
  }
}

export default createArticle;
