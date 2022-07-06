<template>
  <q-page>
    <div class="q-gutter-md">
      <q-tabs v-model="tab"
        active-bg-color="white"
        inline-label
        class="bg-blue-gray-200 text-primary">

        <base-tab v-for="t in tabs"
          :key="t.name"
          @close="onClose"
          :item="t" />

      </q-tabs>
    </div>
    {{ tab2 }}
  </q-page>
</template>

<script setup>
const tab = ref('')
onMounted(() => {
  tab.value = tabs.value[0]?.name
})

const tabs = ref([
  { name: 'mails', label: 'Mails' },
  { name: 'settings', label: 'Settings' },
  { name: 'profile', label: 'Profile' }
])

const tab2 = [...tabs.value]

function onClose(payload) {
  console.log('on close', payload.name)
  tabs.value = tabs.value.filter(item => item.name !== payload.name)
  console.log('filtered tabs', tabs.value)
}
</script>
