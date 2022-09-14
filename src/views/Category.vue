<template>
  
  <main>
    <div class="container">
        <div class="row no-gutters">
            <div class="js-list-aside-wrapper ">
                <div class="c-listing-sidebar js-list-aside sidebar-sticky">
                    <div class="c-box c-listing-options-labels " 
                    v-show="selectFilter.length"
                    >
                        <div class="c-listing-options__labels c-listing-options__labels--side-filter">
                            <div class="c-listing-options__title">
                                فیلتر های اعمال شده:
                                <a href="javascript:" class="js-listing-options-clear c-listing-options__clear c-listing-options__clear--no-icon c-listing-options__clear--left"
                                 @click.prevent="removeAll"
                                >حذف</a>
                            </div>

<ul>
    <li class="" 
    v-for="filter  in selectFilter" :key="filter"
    
    :data-id="index"> 
    <div class="">
        <button class="js-listing-option-remove" type="button" data-key="brand"  
        @click="removeFilter(filter)">
        </button>  <span class="delete-icon" @click="removeFilter(filter)"> {{ filter }} </span>  
    </div>
    </li>                      
</ul>

                        </div>
                    </div>
                    <div class="c-box c-box--brands-filter">  <div>
                            <div class="c-box__header c-box__header--toggleable js-box-toggle"
                            @click="isBrandOpen =!isBrandOpen"
                            :class="{'hide':isBrandOpen}"
                            >
                                برند ها
                            </div>
                            <div class="c-filter c-filter--params js-box-content"
                            v-show="isBrandOpen"
                           
                            >
                <div class="c-box__scroll-container">
                    <div class="c-box__scroll js-box-content-items">
                        <ul class="checkboxUl" style="margin-top: 40px">

                            <li data-id="1" class="licheck">
                                <label class="lblcheckbox" data-fa="سامسونگ" data-en="Samsung" data-search="سامسونگ Samsung">
                                    <input type="checkbox" 
                                    v-model="selectFilter" value="سامسونگ"
                                    class="checkboxFilter">
                                    <span class="checkmark"></span>
                                    سامسونگ
                                </label>
                            </li>

                            <li data-id="2" class="licheck">
                                <label class="lblcheckbox" data-fa="سونی" data-en="Sony" data-search="سونی Sony">
                                    <input type="checkbox" 
                                     v-model="selectFilter" value="سونی"
                                    class="checkboxFilter">
                                    <span class="checkmark"></span>
                                    سونی
                                </label>
                            </li>
                            <li data-id="3" class="licheck">
                                <label class="lblcheckbox" data-fa="اپل" data-en="Apple" data-search="اپل Apple">
                                    <input type="checkbox" 
                                     v-model="selectFilter" value="اپل"
                                    class="checkboxFilter">
                                    <span class="checkmark"></span>
                                    اپل
                                </label>
                            </li>
                            <li data-id="4" class="licheck">
                                <label class="lblcheckbox" data-fa="شیائومی" data-en="Xiaomi" data-search="شیائومی Xiaomi">
                                    <input type="checkbox" 
                                     v-model="selectFilter" value="شیائومی"
                                    
                                    class="checkboxFilter">
                                    <span class="checkmark"></span>
                                    شیائومی
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                            </div>
                        </div>
                    </div>

                    <div class="c-box  c-filter--switcher ">
                        <label class="c-ui-statusswitcher">
                            <input type="checkbox" value="1" id="">
                            <span class="c-ui-statusswitcher__slider">
                                   <span class="c-ui-statusswitcher__slider__toggle"></span>
                            </span>
                        </label>
                        فقط کالاهای موجود

                    </div>
                    <div class="c-box c-box--color-filter">
                        <div>
                            <div class="c-box__header c-box__header--toggleable js-box-toggle"
                            @click=" isColorOpen =! isColorOpen"
                            :class="{'hide': isColorOpen}"
                            
                            >برند
                                رنگ ها
                            </div>
                            <div class="c-filter c-filter--params js-box-content" style=""
                              v-show=" isColorOpen"
                            >
                                <div class="c-box__scroll-container">
                                    <div class="c-box__scroll js-box-content-items">
                                        <ul class="checkboxUl">
                                            <li data-id="6" class="licheck">
                                                <label class="lblcheckbox" data-fa="مشکی" data-search-val="rgb(0,0,0)" data-search="مشکی black">
                                                    <input type="checkbox" 
                                                      v-model="selectFilter" value="مشکی"
                                                    
                                                    class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    مشکی
                                                    <span class="c-filter__color" style="background-color: rgb(43,43,43)"></span>

                                                </label>
                                            </li>
                                            <li data-id="7" class="licheck">
                                                <label class="lblcheckbox" data-fa="قرمز" data-search-val="rgb(255, 0, 0)" data-search="قرمز Red">
                                                    <input type="checkbox" 
                                                        v-model="selectFilter" value="قرمز"
                                                    
                                                    class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    قرمز
                                                    <span class="c-filter__color" style="background-color: rgb(255, 0, 0)"></span>

                                                </label>
                                            </li>
                                            <li data-id="3" class="licheck">
                                                <label class="lblcheckbox" data-fa="آبی" data-search-val="rgb(0, 0, 255" data-search="آبی Blue">
                                                    <input type="checkbox" 
                                                       v-model="selectFilter" value="آبی"
                                                    
                                                    class="checkboxFilter">
                                                    <span class="checkmark"></span>
                                                    آبی
                                                    <span class="c-filter__color" style="background-color: rgb(0, 0, 255)"></span>

                                                </label>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="o-page__content">
                <ul class="breadcrumb ">
                    <li class="breadcrumb-item"><a href=""><span class="">صفحه اصلی</span></a></li>
                    <li class="breadcrumb-item"><a href=""><span class="">فهرست محصولات</span></a></li>
                    <li class="breadcrumb-item"><a href=""><span class="">محصول شماره یک</span></a></li>
                </ul>
                
                
                
                 <!-- <h1>{{ user}}</h1>   -->
                <!-- <h1>{{ useraccout.name }}</h1> -->
                   <!-- <h1>{{ userName }}</h1> -->
                   

                  

                  


                <div class="store-compact-products">

                    <div class="row no-gutters">
                        <div class="col-4 bm-15" 
                        v-for="item in products" :key="item.id">

                            <div class="c-product-box">
                           
                               <router-link :to="{ name :'product' ,params:{id : item.id}}"
                                 class="c-product-box__link">
                                    <img :src="require(`../assets/img/banner/mobile/${item.id}.jpg`)" 

                                    class="c-product-box__img" alt="">
                                 </router-link>



                                <div class="c-product-box__title">

                                    <router-link :to="{ name:'product' ,params:{id :item.id}}">
                                        {{item.name}}
                                    </router-link>
                                </div>

                                <div class="c-product-box__price">
                                    <span class="c-product-box__compare-price">13,200,000</span>
                                    <span class="c-product-box--price"><span>
                                    {{ item.price }}
                                    تومان</span></span>
                                </div>
                                <span class="c-product-box__discount">6٪</span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
</template>

<script>
import {mapState} from 'vuex'
import { mapGetters,mapActions } from 'vuex'

// import user from '@/store/modules/user'
// import products from '@/store/modules/products'



export default {
        name:"Category",

        data:()=>({
            isBrandOpen:true,
            isColorOpen:true,
            selectFilter:[],
            name :null
        }),


        //   computed:{
        //     products(){
        //         return this.$store.state.products
        //     },
        //     user(){
        //          return this.$store.state.user
        //     }
        // },
        

    //  computed: mapState(['products','user']),
       
    //    computed:{
    //          numberOne(){
    //             return 1
    //         },
    //         // ...mapState(['products','user'])
    //         //  ...mapState({
    //         //    products: 'products',
    //         //   // useraccout: 'userstate'
    //         //   userName:state=>state.userstate.name
    //         //  })

    //     } ,

// *****************  getters *******************
            computed:{
            numberOne(){
                return 1
            },
            // products(){
            //     return this.$store.getters.products
                //   return state.products.slice(0, 4)
            // },
            // userName(){
            //     return this.$store.getters.userName
            // },

            // ...mapGetters(['products','userName']) 
                //  ...mapGetters({
                //     products: 'products',
                //     userName:'name'
                // })
                ...mapGetters('products',['products']),
                // ...mapGetters('user',{userName:'name'})
                ...mapGetters('userName',{userName:'name'})

          
        },



        created(){
            //  this.$store.dispatch('getProducts',{text:"jhjhkkhkhkjhk"})
            // this.$store.dispatch('getProducts',{text:"jhjhkkhkhkjhk",id:15})

            // this.$store.registerModule('userName', user)

            // this.$store.registerModule('products', products)

            // if (!this.$store.hasModule('userName')) {
              
            //    this.$store.registerModule('userName', user)

            // }

            // if(! this.$store.hasModule('products')){
            //     this.$store.registerModule('products', products)
            // }





            this.$store.dispatch('products/getProducts',{text:"jhjhkkhkhkjhk"})
          
          

            // console.log(this.$store.state.user.user.name)

            // this.name =this.$store.state.user.user.name
            
            //console.log(this.$store.state.userName.user.name)

            this.name =this.$store.state.userName.user.name

            // this.getProducts({text:"jhjhkkhkhkjhk",id:15})
            this.getProducts({text:"jhjhkkhkhkjhk"})

           // console.log(this.$store.getters.name)


           console.log(this.$store.getters['userName/name'])

           console.log(this.$store.getters['products/name'])


        },
        methods:{
            removeAll(){
                 this.selectFilter=[]
            },
            removeFilter(filter){
                    this.selectFilter=this.selectFilter.filter((item) => item !== filter
                )
            },
           // ...mapActions(['getProducts'])
           ...mapActions('products',['getProducts'])
        }
}
</script>

<style>
.delete-icon{
     font-family: Vazirmatn, Geneva, Tahoma, sans-serif;
     font-weight: 200;
}
.delete-icon::after {
        content: '\2716';
        font-size: 16px;
        font-family: Vazirmatn, Geneva, Tahoma, sans-serif;
         font-weight: 100;
       
        padding:0 5px;
        cursor: pointer;
        color: red;
}

</style>