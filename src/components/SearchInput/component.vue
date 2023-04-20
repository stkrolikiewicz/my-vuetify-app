<script setup lang="ts">
import { TextField, Button, Icon, Dialog, Card } from '@/components';
import { ref } from 'vue'
interface Props {
  label: string
}

const props = defineProps<Props>()

const dialog = ref(false)

</script>

<template>
  <Button variant="tonal">
    <Icon
      icon="$mdiMagnify"
      size="30"
    />
    <Dialog
      v-model="dialog"
      activator="parent"
      width="auto"
    >
      <Card class="search-input">
        <TextField
          :label="props.label"
          prepend-inner-icon="$mdiMagnify"
          variant="outlined"
          color="secondary"
          clearable
          hide-details
        />
      </Card>
    </Dialog>
  </Button>
</template>

<style scoped lang="scss">

  .search-input {
    width: 80vw;
    max-width: 400px;
    padding: 16px;
    display: flex;
  }

</style>