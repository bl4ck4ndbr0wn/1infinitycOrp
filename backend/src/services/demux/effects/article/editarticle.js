function editArticle(state, payload, blockInfo, context) {
  const post = {
    _id: {
      timestamp: payload.data.timestamp,
      author: payload.data.author
    },
    author: payload.data.author,
    title: payload.data.title,
    content: payload.data.content,
    tag: payload.data.tag
  };
  context.socket.emit("editarticle", post);
}

export default editArticle;
