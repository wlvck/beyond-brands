<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="py-4 border-bottom">
                    <div class="float-left"><router-link to="/" class="badge bg-white back-arrow"><i class="las la-angle-left"></i></router-link></div>
                    <div class="form-title text-center">
                        <h3>Create New Event Type</h3>
                    </div>
                </div>
            </div>                              
            <div class="col-lg-3 col-md-6" v-for="(newevent ,index ) in newevents" :key="index">
                <div class="card card-block card-stretch card-height" >
                    <div :class="'card-body rounded work-detail work-detail-'+newevent.color  ">
                        <div class="icon iq-icon-box-2 mb-3 rounded">
                            <i :class="newevent.icon"></i>
                        </div>
                        <h5 class="mb-2">{{newevent.title}}</h5>                             
                        <p class="mb-4">{{newevent.conatine}}</p>
                        <div class="pt-2">
                            <router-link to="/addevent" :class="'btn  mr-3 px-4 btn-'+newevent.color">{{newevent.linkbtn}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    name:'newevent',
    data(){
        return{
        newevents:[
            {
                color:'info',
                icon:'las la-users',
                title:'One-on-One',
                conatine:'Let an invitee pick a time to meet with you.',
                linkbtn:'Create',
            },
                {
                color:'danger',
                icon:'las la-users',
                title:'Group',
                conatine:'Let an invitee pick a time to meet with you.',
                linkbtn:'Create',
            }
        ]
        }
    }
}
</script>