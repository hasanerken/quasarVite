<template>
  <q-tab :name="item.name"
    class="w-70">
    <div class="w-screen p-0">
      <div class="row justify-between items-center">
        <div class="text-bold ml-4">
          {{ item.name }}
        </div>
        <q-btn class="text-gray-400"
          flat
          round
          icon="close"
          @click="updateParent" />
      </div>
    </div>
  </q-tab>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const emit = defineEmits(
  ['close']
)
function updateParent() {
  emit('close', props.item)
}
</script>

<style scoped>
</style>
