<template>
  <div class="main-table">
    <h1 v-if="title">{{ title }}</h1>
    <app-loader v-if="isLoading" />
    <table v-else>
      <tr v-if="headers">
        <th
          v-for="(header, index) in headers"
          :key="index"
        >
          {{ header }}
        </th>
      </tr>

      <app-table-row-vertical
        :item="props.item"
        @action="onItemAction"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, PropType } from "vue";
import { TCharacter } from "@/types/character";
import AppLoader from "@/components/ui/app-loader.vue";
import AppTableRowVertical from "@/components/app-table/app-table-row-vertical.vue";

const props = defineProps({
  title: String,
  headers: Array as PropType<Array<string>>,
  item: {
    type: Object as PropType<TCharacter>,
    required: true,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["action-click"]);

const onItemAction = (item: TCharacter) => {
  emits("action-click", item);
};
</script>
