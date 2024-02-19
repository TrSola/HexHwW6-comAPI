<template>
  <h2>後台</h2>
  <nav>
    <RouterLink to="/">回到前台</RouterLink> |
    <RouterLink to="/admin/order">order</RouterLink> |
    <RouterLink to="/admin/backProducts">backProducts</RouterLink> |
  </nav>
  <RouterView />
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import '../../assets/main.css'
const Toast = Swal.mixin({
  toast: true,
  position: 'center',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
export default {
  data () {
    return {
      APIUrl: 'https://ec-course-api.hexschool.io/v2',
      products: [],
      tempProduct: {}
    }
  },
  methods: {
    seeDetails (product) {
      this.tempProduct = product
    },
    checkLogin () {
      const { VITE_APP_URL } = import.meta.env
      axios
        .post(`${VITE_APP_URL}/api/user/check`)
        .then((res) => Toast.fire({
          icon: 'success',
          title: '驗證身分成功'
        }))
        .catch((err) => {
          alert(err.response.data.message)
          this.$router.push('/')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)WillyToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    axios.defaults.headers.common.Authorization = token

    this.checkLogin()
  }
}
</script>
