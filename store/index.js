export const actions = {
  async nuxtServerInit ({ commit }, context) {
    // populate blog data
    const res = await context.$axios.$get('/blog')
    commit('blogs/setList', res.data)
  }
}
