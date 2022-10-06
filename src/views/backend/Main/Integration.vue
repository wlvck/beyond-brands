<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="py-4 border-bottom">
                    <div class="form-title text-center">
                        <h3>Integrations</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="card card-block card-stretch">                    
                    <div class="card-body">
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <h6 class="mb-3 mb-md-0">Your API Key</h6>
                            <input type="text" class="form-control api-password" v-model="keystring" id="api-password">  
                            <div class="media flex-wrap api-link"  >
                                <a @click.prevent="copyButton(keystring)"  @mouseleave="removedeta()" href="#" class="btn btn-outline-primary mr-4" data-extra-toggle="copy" data-input=".api-password"  v-b-tooltip.hover  :title="showtooltipdeta" ><i class="las la-link pr-2"></i>Copy Key</a>
                                <a @click="clickButton" href="#" class="btn btn-primary" data-extra-toggle="random-text" data-input=".api-password" data-length="24"><i class="las la-sync pr-2"></i>Regenerate Key</a>
                            </div>                         
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(list,index) in lists" :key="index" class="col-xl-3 col-lg-4 col-md-6">
                <div class="card card-block card-stretch card-height">
                    <div :class="'card-body rounded work-detail work-detail-'+list.color">
                        <div class="icon iq-icon-box-2 mb-4 rounded">
                            <i :class="list.icon"></i>
                        </div>
                        <h5 class="mb-2">{{list.name}}</h5>  
                        <p class="card-description">{{list.content}}</p>          
                        <div class="pt-3">
                            <a href="#" :class="'btn mr-3 px-4 btn-calendify btn-'+list.color">Get Calendify</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {  random , copyToClipboard} from '../../../config/pluginInit'
export default {
    name:'Integration',
    data(){
   
        return{
             showtooltipdeta:'Copy to clipboard',
            keystring: 'GG1AU9QJUGH0RSGUUR90WO1Z',
            lists:[
                {
                 color:'info', 
                 icon:'fab fa-chrome',
                 name:'Chrome',
                 content:'Access your Event Type links, create Meetings and more.',
                },
                {
                 color:'danger', 
                 icon:'fab fa-mailchimp',
                 name:'Mailchimp',
                 content:'Access your Event Type links, create Meetings and more.',
                },
                {
                 color:'success', 
                 icon:'fab fa-paypal',
                 name:'PayPal',
                 content:'Access your Event Type links, create Meetings and more.',
                },
                {
                 color:'warning', 
                 icon:'fab fa-facebook-f',
                 name:'Facebook Pixel',
                 content:'Access your Event Type links, create Meetings and more.',
                },
                {
                 color:'primary', 
                 icon:'far fa-envelope',
                 name:'Gmail',
                 content:'Access your Event Type links, create Meetings and more.',
                },
                {
                 color:'info', 
                 icon:'far fa-calendar',
                 name:'Calendar Connections',
                 content:'Access your Event Type links, create Meetings and more.',
                },
            ]
        }
    },
    methods: {
        clickButton(){
            this.keystring = random(24)
           
        },
        copyButton(value){
            copyToClipboard(value)
             this.showtooltipdeta="copy!"
        },
        removedeta(){
              setTimeout(()=> this.showtooltipdeta='Copy to clipboard',500) 
        }
    },
}
</script>