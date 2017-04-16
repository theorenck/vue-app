<template>
  <el-table
    :data="data"
    style="width: 100%">
    <el-table-column
      prop="codservico"
      label="Código"
      width="180">
    </el-table-column>
    <el-table-column
      prop="cliente"
      label="Cliente"
      width="180">
    </el-table-column>
    <el-table-column
      prop="aberto"
      label="Aberto?">
    </el-table-column>
  </el-table>
</template>

<script>

  import io from 'socket.io-client'
  import { mapGetters } from 'vuex'

  export default {
    computed: mapGetters([
      'data'
    ]),
    created () {
      let socket = io.connect('http://localhost:3000/zw15ser')
      socket.on('initial', (data) => {
        console.log(data)

        this.$store.dispatch('fetchData', data)
      })
    }
  }
</script>

<style scoped>
</style>
