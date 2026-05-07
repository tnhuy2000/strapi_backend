export default {
  async index(ctx) {
    ctx.body = {
      status: 'ok',
      time: new Date(),
    };
  },
};
