<script >
export default{
    props:{
        bg:{
            type: String,
            default: 'bg-greay-100'
        }
    }
}
</script>

<template>
    <div :class="`${bg} p-6 rounded-lg shadow-md`">
        <slot></slot>
    </div>
</template>