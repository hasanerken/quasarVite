<template>

  <div>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, tenetur?
    <q-btn color="primary"
      icon="check"
      label="OK" />


    <q-table title="Treats"
      class="my-sticky-dynamic"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
      :loading="loading"
      no-data-label="I didn't find anything for you"
      @request="onRequest" />


  </div>

</template>

<script setup>
import { userApi } from 'src/api/user';
import api from 'src/api/axios';

const columns = [
  {
    name: 'id',
    required: true,
    label: 'ID',
    align: 'left',
    field: 'id',
    format: val => `${val}`,
    sortable: true
  },
  { name: 'title', align: 'center', label: 'Title', field: 'title', sortable: true },
  // { name: 'body', label: 'Body', field: 'body', sortable: true },
  { name: 'userId', label: 'User ID', field: 'userId' },
  { name: 'tags', label: 'Tags', field: 'tags' },
  { name: 'reactions', label: 'Reactions', field: 'reactions' }
]

const rows = ref([])
const loading = ref(false)
const pagination = ref({
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 10
})


function onRequest(props) {
  const { page, rowsPerPage } = props.pagination

  loading.value = true
  const fetchCount = rowsPerPage === 0 ? pagination.value.rowsNumber : rowsPerPage
  const startRow = (page - 1) * rowsPerPage

  // fetch data from "server"
  const returnedData = api().get('https://dummyjson.com/posts', { params: { skip: startRow, limit: fetchCount } }).then(res => {
    rows.value.splice(0, rows.value.length, ...res.posts)
    pagination.value.rowsNumber = res.total
    loading.value = false
  }).catch(err => {
    $q.notify(err.message, 'error')
  })
  pagination.value.page = page
  pagination.value.rowsPerPage = rowsPerPage
}

onMounted(() => {
  // get initial data from server (1st page)
  onRequest({
    pagination: pagination.value,
  })
})




</script>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: #fff

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0
</style>
