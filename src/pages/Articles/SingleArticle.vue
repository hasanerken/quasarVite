<template>
  <q-page padding>
    <q-dialog v-model="confirm"
      position="right">
      <q-card class="bg-green"
        style="min-width: 48rem; height:100vh">
        <q-input v-model="text"
          class="p-10 text-2xl"
          type="text"
          placeholder="Enter a title"
          style="max-height: 10rem"
          borderless />
        <QuillEditor theme="snow"
          class="p-10 bg-pink"
          style="max-height: calc(100vh - 16rem);"
          contentType="html"
          placeholder="Please enter the content of the article ..."
          v-model:content="editorData">
        </QuillEditor>

        <q-card-actions class="bg-red "
          style="max-height:4rem">
          <q-btn flat
            label="Action 1" />
          <q-btn flat
            label="Action 2" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>


const confirm = ref(true)
const editorData = ref('')

</script>

<style lang="scss" scoped>
</style>
