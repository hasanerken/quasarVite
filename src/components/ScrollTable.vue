<template>
  <div class="q-pa-md w-screen">
    <q-table class="my-sticky-dynamic"
      title="Treats"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      row-key="index"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :pagination="pagination"
      :rows-per-page-options="[0]"
      @virtual-scroll="onScroll" />

    <div class="p-1 m-1 bg-red-300">**** {{ lastIndex }} **** {{ nextPage }} **** {{ lastPage }}</div>
  </div>
</template>


<script setup>
import axios from 'axios';

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
  { name: 'body', label: 'Body', field: 'body', sortable: true },
  { name: 'userId', label: 'User ID', field: 'userId' },
  { name: 'tags', label: 'Tags', field: 'tags' },
  { name: 'reactions', label: 'Reactions', field: 'reactions' }
]

const rows = ref([])
const loading = ref(true)
const pageSize = ref(40)
// const lastPage = Math.ceil(rows.value.length / pageSize)
const nextPage = ref(2)

onMounted(() => {
  axios.get('https://dummyjson.com/posts', { params: { skip: 0, limit: pageSize.value } }).then(res => {
    // pagination.value.rowsNumber = res.total
    console.log(res.data.posts)
    rows.value = res.data.posts
    loading.value = false
    lastPage = Math.ceil(rows.value.length / pageSize)
  }).catch(err => {
    console.log(err)
  })

})

const pagination = ref({
  rowsPerPage: 0
})


const lastPage = computed(() => {
  return Math.ceil(rows.value.length / pageSize.value)
})


async function onScroll({ to, ref }) {
  const lastIndex = rows.value.length - 1
  console.log('last index', lastIndex, to)

  if (loading.value === false && to === lastIndex) {
    console.log('nextPage')


    const returnedData = await axios.get('https://dummyjson.com/posts', { params: { skip: lastPage.value * pageSize.value, limit: 40 } })
    console.log('returnedData', returnedData)
    rows.value.push(...returnedData.data.posts)
    nextPage.value++




    nextTick(() => {
      ref.refresh()
      loading.value = false
    })

  }
}
</script>

<style lang="sass">
.q-table td, .q-table th
    /* don't shorten cell contents */
    white-space: normal !important
    text-align: left
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
