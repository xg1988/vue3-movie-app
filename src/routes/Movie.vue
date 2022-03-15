<template>
    <div class="container">
        <div class="skeletons">
            <div class="skeleton poster">
                <div class="specs">
                    <div class="skeleton title"></div>
                    <div class="skeleton spen"></div>
                    <div class="skeleton plot"></div>
                    <div class="skeleton etc"></div>
                    <div class="skeleton etc"></div>
                    <div class="skeleton etc"></div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this.$route);
        this.$store.dispatch('movie/searchMovieWithId',{
            id: this.$route.params.id
        })
    }
}
</script>


<style lang="scss" scoped>
    @import "~/scss/main";
    
    .container{
        padding-top: 40px;
    }

    .skeletons{
        display: flex;
        .poster{
            width:500px;
            height: 500px * 3 / 2;
            margin-right: 70px;
        }
        .specs{
            
        }
        .skeleton{
            border-radius: 10px;
            background-color: $gray-200;
        }
    }
</style>