async function editPost(state, payload, blockInfo, context) {
  try {
    await state.article
      .findByIdAndUpdate(
        { timestamp: payload.data.timestamp, author: payload.data.author },
        payload.data
      )
      .exec();
  } catch (err) {
    console.error(err);
  }
}
export default editPost;
