<template>
    <v-select :options="options" class="selectpicker form-control" v-model="selectedValue" :labelTitle="label" />
</template>

<script>
import VSelect from '@alfsnd/vue-bootstrap-select'
export default {
    name: 'VueSelectpicker',
    components: {
        VSelect
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        label: {
            type: String,
            default: 'Select...'
        }
    },
    data () {
        return {
            selectedValue: null
        }
    }
}
</script>

<style lang="scss">
.v-select{
    height: unset  !important;
    font-size: 16px  !important;
    .v-select-toggle
        {
        background: unset  !important;
        border: unset !important;
        font-size: 16px  !important;
        color:#535f6b  !important;
    }
    .v-dropdown-container
    {
       margin-bottom: 2px  !important;
       margin-top: 0px  !important;
       z-index: 98  !important;
    }
    .v-dropdown-item
    {
         background: unset  !important;
        font-size: 16px  !important;
         border: unset !important;
         padding: 4px 24px  !important;
         line-height:45px  !important;
        color:#535f6b  !important;    
    }
    .v-dropdown-item:hover
    {
        background-color: #f5f6fa  !important;
        color: #1b2734  !important;
    }
}
</style>