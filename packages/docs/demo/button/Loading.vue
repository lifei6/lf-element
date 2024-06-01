<template>
  <div>
    <lf-button type="primary" loading>Loading</lf-button>
    <lf-button type="primary" loading-icon="circle-notch" loading>Loading</lf-button>
    <lf-button type="primary" loading>
      <template #loading>
        <lf-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </lf-button>
  </div>
</template>
