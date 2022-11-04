<template>
    <div>
        <button @click="deletePost">Elimina</button>
    </div>
</template>

<script>
export default{
    methods:{
        deletePost(){
            alert('elimino il post')

            if(confirm('sei sicuro? ${this.tile}?')){
                axios.delete('/admin/posts/?').then(res =>
                {
                    console.log(res)
                }).catch(err =>{
                    console.warn(err)
                })
            }
        }
    }
}

</script>