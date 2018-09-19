export default {
  changeCity (state, city) {
    console.info('mutations')
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {

    }
  }
}
