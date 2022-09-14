<template>
<main id="cart">
    <div class="container">
        <h1 class="page-title border-bottom padding-bottom-30 margin-bottom-20">سبد خرید</h1>
        <div class="cart-items">
            <form action="">

                <CartItem v-for="item in items" :key="item.id" :item="item"/>

            </form>

            <div class="row no-gutters cart-coupons-code">
                <div class="col-6 total">
                    <form class="cart-coupons-code-group" action="">
                        <div class="d-flex">
                            <input type="text" placeholder="کوپن خود را بنویسید">
                            <button class="btn-coupons">اعماال</button>
                        </div>
                    </form>
                </div>
                <div class="col-6">
                    <table class="table text-center table-bordered table-striped">
                        <tbody>
                        <tr>
                            <th class="total">جمع کل</th>
        
            <td class="total">{{  formatedPrice(subtotal)}} تومان</td>
                        </tr>

                        <tr>
                            <th> مالیات </th>
                            <td> 
                                {{  formatedPrice(tax)}}
                                تومان</td>
                        </tr>
                        <tr>
                            <th> تخفیف </th>
                            <td class="text-red">0 تومان</td>
                        </tr>
                        <tr>
                            <th> قابل پرداخت </th>
                            <td class="text-blue">

                                {{ formatedPrice(total) }}
                                
                                تومان</td>
                        </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-brand  box-show-btn">ثبت سفارش</button>
                </div>
            </div>
        </div>
    </div>
</main>
  
</template>

<script>

import {mapState,mapGetters }from 'vuex'
import CartItem from '@/components/CartItem'

export default {
    name:"Cart",

    components:{
        CartItem
    },
    computed:{
        ...mapState('cart',['items']),

        ...mapGetters('cart',['subtotal','tax','total'])
             
    },
    methods:{
   

        formatedPrice(price){
           return new Intl.NumberFormat('ar-EG').format(price)
        },

    }
    



}
</script>

<style>
    .cart-details ,.cart-amounts{
        text-align: right;
        font-family: Vazirmatn;
        font-weight:400 ;
    }
    .cart-amounts button{
        font-family: Vazirmatn;
        font-weight: 400;

    }
    .table {
        font-family: Vazirmatn;
        font-weight: 400;
    }

</style>