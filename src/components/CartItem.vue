<template>

 <div class="border-bottom cart-item"  >
            <div class="row no-gutters" style="padding: 10px;">
                <div class="cart-image">
                    <div class="cart--image">
                        <div class="cart-item-image">
                <router-link :to="{name: 'product' , params:{ id:item.id}}" class="cart-item-image-link">
                               
                    <img :src="require(`../assets/img/slider/mobil/${item.id}.jpg`)" class="width-100" alt="">
                </router-link> 
                        </div>
                    </div>
                </div>
                <div class="cart-details">
                    <div class="cart--details ">
                        <div class="cart-item-details width-100">
                            <h5 class="cart-item-title">

                            <router-link :to="{name: 'product' , params:{ id:item.id}}" 
                                class="cart-item-link " href="/product">
                                     {{ item.name }}
                            </router-link> 
                            
                            </h5>
                            <div>
                                تعداد : 
                            {{ item.quantity }}
                            </div>
                          
                            <p>قیمت : 
                                {{  formatedPrice(item.price) }}</p>
                            <!-- <div class="cart-item-subtitle font-size-14 margin-bottom-10">
                                رنگ: سفید، اندازه: کوچک، حجم: 32 گیگ
                            </div>
                            <div class="cart-item-id font-size-14">
                                کد: 101163511
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="cart-amounts">
                    <div class="cart--amounts">
                        <div class="cart-item-amounts width-100">
                            <input type="number" min="1" placeholder="تعداد" 

                            v-model.number="quantity"
                            
                            
                            max="1000" class="text">
                            <!-- <div class="cart-item-price"><span>130000 تومان</span></div> -->
                            
                            <button  type="button"
                            @click="changeQuantity({ product: item, quantity})"
                            
                            class="btn btn-brand box-show-btn">اضافه به سبد خرید </button>


                            <br>
                            <button  
                                type="button"
                                @click="removeItem(item)"         
                                class="cart-item-remove">حذف
                            </button>


                        </div>
                    </div>
                </div>
                <div class="cart-subtotal">
                    <div class="cart--subtotal">
                        <div class="cart-item-subtotal">
                            <div class="cart-item-subtotal ">
                                <h6 class="cart-item-subtotal-title">جمع</h6>
                                
                             {{ formatedPrice(item.price * item.quantity) }}
                                تومان
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
</template>

<script>

import {mapAction, mapActions } from 'vuex'

export default {
    
    name:"CartItem",
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    data(){
        return {
            quantity: 0
        }
    },

    methods:{
        
        formatedPrice(price){
           return new Intl.NumberFormat('ar-EG').format(price)
        },
        ...mapActions('cart',['changeQuantity','removeItem']),
       
       
    },


}
</script>

<style>
    .cart-item-image{
        width: 120px;
        padding: 25px;
    }
    .cart-item-subtotal{
        width: 150px;
        text-align: right;
    }

</style>