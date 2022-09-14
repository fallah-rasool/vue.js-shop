<template>

<main class="product-container">

    <div class="container">
        <div class="product-context">
            <ul class="breadcrumb ">
                <li class="breadcrumb-item"><a href=""><span class="">صفحه اصلی</span></a></li>
                <li class="breadcrumb-item"><a href=""><span class="">فهرست محصولات</span></a></li>
                <li class="breadcrumb-item"><a href=""><span class="">محصول شماره یک</span></a></li>


                
            </ul>
            <div class="bg-white border-radius-3 shadow-sm padding-30">
                <div class="product-header">
                    <div class="row no-gutters flex-space-between">

                        <div class="product-expiration">
                            <div class="product-expiration-alert">
                                <div id="count-down-timer" data-countdown="2021-07-8 00:00:00" class="count-down-timer">
                                 {{ diffDay}}: روز 
                                 {{diffHours }}: ساعت 
                                 {{diffMinutes}}: دقیقه 
                                 {{diffSeconds }}: ثانیه 
                                                            
                                
                                </div>
                            </div>
                        </div>



                        <div class="product-gallery">
                            <div class="product-slideshow">
                                <div class="pdSlides">
                                    <span class="countSlides">
                                        <span class="numbertext">{{ slideIndex+1 }}</span>
                                        <span class="numbertext2">{{ gallerySlides.length }}</span>
                                    </span>


                                    <div 
                                        v-for="(slide,index) in gallerySlides" :key="index"
                                         @click="showModal(slide.img)"
                                       

                                        :style="slideIndex === index ? 'display: flex;' : 'display:none;'"
                                        class="pdSlide" 

                                    >
                                        <img 
                                          
                                            :src="slide.img"
                                        >
                                    </div>

                             

                               


                                </div>

                                <a class="pdPrev" @click="move(-1)">❮</a>
                                <a class="pdNext" @click="move(1)">❯</a>

                                <div class="row no-gutters">
                                        <div class="gallery-slides">
                                            <div class="gallery-slide">

                                            <div 
                                                class="gallery-slide-item"
                                                v-for="(item,index) in gallerySlides" :key="`item-${index}`"
                                                :class="{'gallery__item--is-acitve':slideIndex === index }"
                                                
                                            >
                                                <img 
                                                :class="{' gallery__item--is-acitve':slideIndex === index }"
                                                
                                                class="demo" @click="currentSlide(index)" 
                                                :src=" item.img ">
                                            </div>

                                            
                                    
                                        </div>
                                    </div>
                                   
                                </div>

                                <div id="Modal1" class="modal"
                                    v-show="isShowingModal"                                
                                >
                                    <div class="modal-content" style="width: 60%;">
                                        <span class="close"
                                            @click="closeModal"                                        
                                        >×</span>

                                        <div class="modal-body"
                                        tabindex="0" @focusout="closeModal"
                                        >
                                            <img :src="modalImage" alt="" class="modal-gallery">
                                        </div>
                                    </div>
                                </div>

                            </div>
                  
                  
                        </div>

                        <div class="product-left-container__info">
                            <div class="product__left p-5">
                                <div class="product__category">دسته وب</div>
                                <div class="product__info">
                                        <h1 class="product__title">محصول 
                                            
                                            {{ product?.name }}  

                                        </h1>

                                        <div class="rating">
                                            <div class="rating__star">
                                                <span
                                                class="rating__rate"
                                                :data-title="rate.title"
                                                v-for="rate in ratings"
                                                :key="rate.title"
                                                @click="rateWidth = rate.width"
                                                @mouseover="handleMouseover"
                                                @mouseleave="handleMouseleave"
                                                ></span>
                                            </div>
                                            <div class="rating__fstar" :style="showRate ? `width: ${rateWidth}%` : ''">
                                                <span class="rating__frate"></span>
                                                <span class="rating__frate"></span>
                                                <span class="rating__frate"></span>
                                                <span class="rating__frate"></span>
                                                <span class="rating__frate"></span>
                                            </div>
                                        </div>
                                        <div class="rating-star">4.5
                                            <span class="rating__num">(65)</span>
                                        </div>
                                </div>


                           <!--  اضافه کردن به سبد خرید-->

                           <div class="btn-add-product" >
                           <button 
                           @click="addItem(product)"
                           
                           class="btn btn--boxshadow btn--brand "> اضافه کردن به سبد خرید
                           </button>
                           </div>
                           <!--  -->
                           



                            </div>
                        </div>
                    





                    </div>
                </div>
            </div>


            <div class="product-description border-top">
                <p class="product-description-content">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی
                    مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم متن ساختگی با
                    تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                    مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با
                    هدف بهبود ابزارهای کاربردی می باشد.

                </p>
            </div>


            <SwiperSlider>
                        <template v-slot:title>
محصولات مرتبط 
                        </template>
                        <a href="product.html" class="swiper-slide" v-for="item in 6" :key="item">
                                <div class="slider__box">
                                    <div class="slider__image"><img :src="require(`../assets/img/slider/labtab/${item}.jpg`)" alt="" class="slider__img"></div>
                                    <div class="slider__title2">
                                        گوشی موبایل سامسونگ مدل نوت 20
                                    </div>
                                    <div class="slider__price">
                                        <span class="slider__compare-price">12,200,000</span>
                                        <span class="slider__total-price">12,400,000 تومان</span>
                                    </div>
                                    <span class="slider__discount">%6</span>
                                </div>
                            </a>
            </SwiperSlider>



        <div class="product-details" id="product-details">
            <div class="tab-box">
                <div class="tab-items">
                    <a class="tab-box_1"  

                        :class="{ 'active': activeTab === 'tab-box_1' }"
                        @click="activeTab = 'tab-box_1'"
                      
                      >نقد و برسی</a>
                    <a class="tab-box_2"  

                        :class="{ 'active': activeTab === 'tab-box_2' }"
                        @click="activeTab = 'tab-box_2'"
                    
                    
                    >مشخصات</a>
                    <a class="tab-box_3"  

                        :class="{ 'active': activeTab === 'tab-box_3' }"
                        @click="activeTab = 'tab-box_3'"
                    
                    >نظرات</a>
                </div>
                <div class="tab-sections ">

                  <Details :style="activeTab === 'tab-box_1' ? 'display:block;': 'display:none;'"/>

                  <Fields :style="activeTab === 'tab-box_2' ? 'display:block;': 'display:none;'"/>

                  <Comments  :style="activeTab === 'tab-box_3' ? 'display:block;': 'display:none;'" />

                </div>
            </div>
        </div>




        </div>
    </div>

</main>

  
</template>

<script>
import axios from 'axios'
import SwiperSlider from '../components/SwiperSlider.vue'

import Details from '../components/productTab/details.vue'
import Fields from '../components/productTab/Fields.vue'
import Comments from '../components/productTab/Comments.vue'

import moment from 'moment'
import jalaali from 'moment-jalaali'
import {SET_PRODUCTS_MUTATIONS } from '@/store/modules/products/type'

import {mapMutations,mapState,mapActions} from 'vuex'  

// import products from '@/store/modules/products'


import '../assets/css/modal.css'

export default {

    name:"Product",
    components: {
        SwiperSlider,
        Details,
        Fields,
        Comments
    },

    data:()=>({
            dateNow_Jalaali:jalaali().format('jYYYY/jM/jD'),
           
            dataCountDown:moment('2022-08-20 00:00:00'),   
            diffDay:null,
            diffHours:null,
            diffMinutes:null,
            diffSeconds:null,
            timeInterval: null,

            gallerySlides:[
                {img: require('../assets/img/banner/gallery/1.jpg') },
                {img: require('../assets/img/banner/gallery/2.jpg') },
                {img: require('../assets/img/banner/gallery/3.jpg') },
                {img: require('../assets/img/banner/gallery/4.jpg') },
                {img: require('../assets/img/banner/gallery/5.jpg') },
                {img: require('../assets/img/banner/gallery/6.jpg') },
                {img: require('../assets/img/banner/gallery/7.jpg') },
                {img: require('../assets/img/banner/gallery/8.jpg') }             
            ],
            ratings: [
                { width: 100, title: 'عالی' },
                { width: 80, title: 'خوب' },
                { width: 60, title: 'معمولی' },
                { width: 40, title: 'ضعیف' },
                { width: 20, title: 'بد' },
            ],

            colorsOptions: ['قرمز', 'سبز', 'آبی'],
            selectedLang: [],
            langOptions: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Adonis', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ],

            slideIndex: 0,
            isShowingModal:false,
            modalImage:null,
            rateWidth: 0,
            showRate: true,
            slides:[
                {img :(require('../assets/img/slideshow/1.png'))},            
                {img :(require('../assets/img/slideshow/2.png'))},             
                {img :(require('../assets/img/slideshow/3.png'))},            
                {img :(require('../assets/img/slideshow/4.png'))},
            ],
            activeTab:'tab-box_1',
            product:{}
    }),


  async  created(){


       // this.$store.registerModule('products', products)

        //    if (!this.$store.hasModule('userName')) {
              
        //        this.$store.registerModule('userName', user)

        //     }

        this.timeInterval =  setInterval(() => {
                let diffTime= this.dataCountDown.diff(moment())
                let durationTime= moment.duration(diffTime)
                this.diffDay = Math.floor(durationTime.asDays()) 
                this.diffHours = durationTime.hours()
                this.diffMinutes =  durationTime.minutes()
                this.diffSeconds =  durationTime.seconds()
                }, 1000);

       

        this.product = this.$store.getters['products/getProductById'](parseInt(this.$route.params.id))

        if(!this.product){

            // this.$store.dispatch('getProducts')
            // .then(() => {
            //     this.product = this.$store.getters.getProductById(parseInt(this.$route.params.id))
            // })




              const { data }=await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')

            ///  this.$store.commit(SET_PRODUCTS_MUTATIONS, data)  //with types
            //  this.$store.commit('SET_PRODUCTS_MUTATIONS', data) //with mutations name 


                this.SET_PRODUCTS(data)

         this.product = this.$store.getters['products/getProductById'](parseInt(this.$route.params.id))

        }

  
    },


    destroyed(){
        clearInterval(this.timeInterval)
    },
    computed:{
       
        ...mapState('cart',['items'])
        
       

    } ,

    methods:{
        move(n){
            //console.log(n)
            if(this.gallerySlides.length <= this.slideIndex +n){
            this.slideIndex =0;

            }else if(this.slideIndex +n < 0 ){
                this.slideIndex =(this. gallerySlides.length - 1);
            }else{
            this.slideIndex += n;
            }
        },

        currentSlide(index) {
            this.slideIndex = index
        },
        showModal(image){
            this.isShowingModal = true
            this.modalImage = image
            document.body.style.overflow = 'hidden'
        },
        closeModal() {
            this.isShowingModal = false
            document.body.style.overflow = 'unset'
        },

        handleMouseover() {
        this.showRate = false
        },
        handleMouseleave() {
           
        this.showRate = true
        },
       
        ...mapMutations('products',[SET_PRODUCTS_MUTATIONS]),

        ...mapActions('cart',['addItem'])

        

    },
}
</script>

<style>
.product__left{
    text-align: right;
    padding: 16px;
}
.product__left{
    text-align: right;
    padding: 16px;
}
.btn-add-product button {
    padding:10px 16px;
    font-family: Vazirmatn, Verdana, Geneva, Tahoma, sans-serif;
}

</style>