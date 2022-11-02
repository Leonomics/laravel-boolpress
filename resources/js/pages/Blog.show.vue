<template>
    <div>
        <section>
            <div class="container">
                <h1>Pagina di dettaglio</h1>
                <p>{{$route.params.slug}}</p>
            </div>
        </section>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                post: null
            }
        },
        methods:{
            fetchPost(){
                const slug = this.$route.params.slug;
                axios.get('/api/posts/sit-eos-id-harum-qui-provident-minima').then(res => {
                    console.log(res.data)
                }).catch(err=>{
                    console.log(err)
                })
            }
        },
        beforeMount(){
            this.fetchPost()
        }
    }
</script>

<style lang="scss" scoped>

</style>