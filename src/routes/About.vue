<template>
    <div class="about">
        <Loader
            v-if="imageLoading"
            absolute
        />
        <div class="photo">
            <img :src="image" :alt="name">
        </div>
        <div class="name">{{name}}</div>
        <div>{{email}}</div>
        <div>{{blog}}</div>
        <div>{{phone}}</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Loader from "~/components/Loader";

export default {
    data(){
      return{
          imageLoading: true
      }  
    },
     components:{
        
        Loader
    },
    computed:{
        ...mapState('about',[
            'image'
            ,'name'
            ,'email'
            , 'blog'
            , 'phone'
        ])
    },
    mounted(){
        this.init();
    },
    methods:{
        async init(){
            await this.$loadImage(this.image);
            this.imageLoading = false;
        }
    }
}
</script>


<style lang="scss" scoped>

    .about{
        text-align: center;
        .photo{
            width: 250px;
            height: 250px;
            margin: 40px auto 20px;
            //padding: 30px;
            border: 10px solid $gray-300;
            border-radius: 10px;
            box-sizing: border-box;
            background-color: $gray-200;
            img{
                width: auto;
            }
        }
        .name{
            font-size: 40px;
            margin-bottom: 20px;
            font-family: "Oswald", sans-serif;

        }
    }
</style>