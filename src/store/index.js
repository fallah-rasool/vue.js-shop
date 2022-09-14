import { createStore} from 'vuex'
// import axios from 'axios'
// import {SET_PRODUCTS_MUTATIONS } from './type'

// import state from './state'
// import getters from './getters'
// import mutations from './modules/products/mutations'
// import actions from './actions'

// import user from './modules/user'
// import products from './modules/products'

import  cart from './modules/cart/index'

const store = createStore({
         modules:{
                cart
        //         userName :  user,
        //         products
         }

})


// const store = createStore({
//         state:()=>({
//                       products:[],
//                 //    userstate:{name:"rasool", id:1}
//                       user:{name:"rasol",id:1}
                     
//         }),
//         getters:{
//                 // products(state){
//                 //   return state.products
//                 // },

//                 // getProductById:(state)=>(id)=>{
//                 //         return state.products.find(product=>product.id === id)
//                 // },
                  
//                 // userName(state){
//                 //   return state.user.name
//                 // }


//                 products: state => state.products,

//                 getProductById:(state)=>(id)=>state.products.find(product=>product.id === id),   

//                 userName: state => state.user.name
            
//         },
            


//         mutations:{
//                 [SET_PRODUCTS_MUTATIONS](state, data){
//                         state.products = data
//                 }
//         },
//         actions:{
//                 // async getProducts(context){
//                 // async getProducts({commit,dispatch},payload){
//               //  async getProducts({commit,dispatch},{text}){
//                 async getProducts({commit,dispatch},{text,id}){

//                        // console.log(context)

//                         const { data} = await axios.get('https://gist.githubusercontent.com/Tefoh/57a0ef76ab63a974105b9f0fbcb8475b/raw/d49e3d8104992ff6cc6742fbe91b0c642287837a/products.json')

//                         // context.commit(SET_PRODUCTS_MUTATIONS,data)
//                         commit(SET_PRODUCTS_MUTATIONS,data)

//                         // context.dispatch('log')
//                         // context.dispatch(payload)

//                         //  dispatch('log',payload)
//                         //  console.log(payload)

//                         // dispatch('log',text)
//                         //  console.log(text)

//                         // dispatch('log', {text,id})
//                         console.log('getProducts :',text)
                
                       
//                 },
//                 // log(ctx,payload){
//                 //         console.log(payload)
//                 //         console.log('actions logged')
//                 // }
//                 log(ctx,payload){
//                         console.log('fun log:', payload.text)
//                         console.log('actions logged')
//                 }
                
//         }
// })

export default store;