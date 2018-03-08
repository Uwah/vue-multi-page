<template>
    <div>
        <h3>{{message}}</h3>
        <a href="home.html">go home page</a>
    </div>
</template>

<script>
export default {
    name: "about",
    data: () => ({
        message: "multi page about page"
    }),
    mounted() {
        console.log("multi page about page")
    }
}
</script>

