<template>
      <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="py-4 border-bottom">
                    <div class="float-left"><router-link to="/newevent" class="badge bg-white back-arrow"><i class="las la-angle-left"></i></router-link></div>
                    <div class="form-title text-center">
                        <h3>Add One-on-One Event Type</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="card card-block card-stretch create-workform">                    
                    <div class="card-body p-5">
                        <div class="row">
                            <div class="col-lg-6 mb-4">
                                <label class="title">Event name *</label>
                                <input type="text" class="form-control" placeholder="Name..">
                            </div>
                            <div class="col-lg-6 mb-4">
                                <label class="title">Location</label>
                                <div class="search-dropdown-select device-search">  
                                    <form> 
                                    <div class="input-prepend input-append" >
                                        <div class="btn-group w-100 form-control" v-nav-toggle>
                           
                            <label class="dropdown-toggle searchbox" >
                            <input class="dropdown-toggle search-query text search-input " type="text" v-model="selectedInput" placeholder="Add a Location" >
                            <span class="search-replace"></span>
                            </label>
                              
                            <ul class="dropdown-menu" >
                                <li @click="selectedInput = 'In-person meeting'"><a href="#">
                                                        <div class="item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="i-icon text-danger">
                                                                    <i class="fas fa-map-marker-alt"></i>
                                                                </div>
                                                                <div class="ml-2">
                                                                    <h6>In-person meeting</h6>
                                                                    <p class="mb-0">Set an address or place</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                <li @click="selectedInput = 'Phone call'"><a href="#">
                                                        <div class="item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="i-icon text-primary">
                                                                    <i class="fas fa-phone-alt"></i>
                                                                </div>
                                                                <div class="ml-2">
                                                                    <h6>Phone call</h6>
                                                                    <p class="mb-0">Inbound or outbound calls</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                <li @click="selectedInput = 'Google Meet'"><a href="#">
                                                        <div class="item">
                                                            <div class="d-flex align-items-center">
                                                                <div class="i-icon text-success">
                                                                    <i class="fas fa-video"></i>
                                                                </div>
                                                                <div class="ml-2">
                                                                    <h6>Google Meet</h6>
                                                                    <p class="mb-0">Web conference</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></li>
                                
                            </ul>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                
                            </div>                            
                            <div class="col-lg-12 mb-4">
                                <label class="title mb-3">Dscription/Instructions</label>
                                <vue-editor  :editorToolbar="customToolbar1"></vue-editor>
                            </div>
                            <div class="col-lg-12 mb-4">
                                <label class="title">Event link *</label>
                                <input type="text" class="form-control" value="calendly.com/rickoshea1234/">
                            </div>
                            <div class="col-lg-12 mt-4">
                                <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                    <div class="btn btn-primary mr-4"><router-link to="/" class="cancel-btn">Cancel</router-link></div>
                                    <div class="btn btn-outline-primary"><a href="#" class="save-btn">Next</a></div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
    name:'addevent',
     components: {
         VueEditor,
    },
    data(){
        return{
            selectedInput: '',
                customToolbar1:
                [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic",  "underline" ,"link"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
                ],
                  option3: [
                {value: 1, text: 'Select..'},
                {value: 2, text: 'fas fa-map-marker-alt Send email to invitee'},
                {value: 3, text: 'Send email to host'},
                {value: 4, text: 'Thank You'},
                {value: 5, text: 'Send text to invitee'},
                {value: 6, text: 'Send text to host'},
               
            ],
        }
    }
}
</script>