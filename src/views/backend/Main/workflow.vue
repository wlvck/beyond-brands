<template>
    <div>
          <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="py-4 border-bottom">
                    <div class="float-left"><router-link to="/?activeTab=workflow" class="badge bg-white back-arrow"><i class="las la-angle-left"></i></router-link></div>
                    <div class="form-title text-center">
                        <h3>Create A Workflow</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="card card-block card-stretch">
                    <div class="card-body">
                        <form class="create-workform">
                            <div class="d-flex flex-wrap align-items-ceter">
                                <div class="col-lg-6 mb-4">
                                <label for="exampleInputDisabled1" class="title">Disabled Input</label>
                                <input type="text" class="form-control" id="exampleInputDisabled1" disabled="" value="Email Reminder To Invitee">
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label class="title">Which Event Types Will This Apply To?</label>
                                    <div class="form-group mb-0">
                                        <VueSelectPicker :options="option1" class="form-control selectpicker" v-model="selectValue" />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label class="title">When This Happens</label>
                                    <div class="edit-button"><a  v-b-modal.what-happened  class="form-control">24 Hours Before Event Starts<span class="float-right"><i class="ri-edit-box-line"></i></span></a></div>
                                </div>
                                <div class="col-lg-6 mb-4">
                                    <label class="title">Do This</label>
                                    <div class="edit-button">
                                        <a   v-b-modal.email-invite  class="form-control">Send email to invitee</a>
                                        <span class="d-flex align-items-ceter float-right email-event-btn">
                                            <a     v-b-modal.email-invite  class="text-body"><i class="ri-edit-box-line mr-3"></i></a>
                                            <a  v-b-modal.delete-btn  class="text-body"><i class="ri-delete-bin-6-line"></i></a>
                                        </span>
                                    </div>
                                    <div class="float-right mt-2">
                                        <a href="javascript:void(0)"  v-b-modal.do-this class="pl-3"><i>Add New Action</i></a>
                                    </div>
                                </div>
                                <div class="col-lg-12 mt-4">
                                    <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                        <div class="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                        <div class="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                    </div>
                                </div>      
                            </div>             
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <b-modal  centered hide-footer hide-header hide-header-close  id="what-happened">
        <div class="popup text-left">
                        <h4 class="mb-3">When this happens</h4>
                        <div class="content create-workform">
                            <h5 class="mb-3">How long before event starts?</h5>
                            <div class="row">
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" value="24">
                                </div>
                                <div class="col-lg-8">                 
                                    <div class="form-group mb-0">
                                        <VueSelectPicker :options="option4" class="form-control selectpicker" v-model="selectValue" label="Hours" />
                                        </div>
                                </div>  
                                <div class="col-lg-12 mt-4">
                                    <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                        <div class="btn btn-primary mr-4"  @click="$bvModal.hide('what-happened')">Cancel</div>
                                        <div class="btn btn-outline-primary"  @click="$bvModal.hide('what-happened')">Save</div>
                                    </div>
                                </div>                                           
                            </div>
                        </div>
                    </div>
                </b-modal>
    <!-- Modal -->
    <b-modal  centered hide-footer hide-header hide-header-close id="email-invite" modal-class="create-workform">
        <div class="popup text-left">
                        <h4 class="mb-3">Email to invitee</h4>
                        <div class="mb-3">
                            <h5>How long before event starts?</h5>
                            <div class="content create-workform">
                                <div class="form-group mb-0">
                                    <VueSelectPicker :options="option2" class="form-control selectpicker" v-model="selectValue" label="Reminder" />
                                </div>
                            </div>
                        </div> 
                        <div class="mb-3">
                            <div class="form-group">
                                <h5 class="mb-2">Subject</h5>
                                <input type="text" class="form-control">
                            </div>
                        </div>   
                        <div class="mb-3">
                            <h5 class="mb-2">Body</h5>
                            <vue-editor  :editorToolbar="customToolbar1"></vue-editor> 
                        </div> 
                        <div class="mb-3">
                            <div class="checkbox mb-1">
                                <input type="checkbox" class="checkbox-input mr-3" id="checkbox01">
                                <label for="checkbox01" class="mb-0">Include cancel and reschedule links</label>
                            </div>
                            <div class="checkbox">
                                <input type="checkbox" class="checkbox-input mr-3" id="checkbox02">
                                <label for="checkbox02" class="mb-0">Include cancellation policy</label>
                            </div>
                        </div>                                  
                        <div class="mt-3">
                            <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                <div class="btn btn-primary mr-4" @click="$bvModal.hide('email-invite')">Cancel</div>
                                <div class="btn btn-outline-primary" @click="$bvModal.hide('email-invite')">Save</div>
                            </div>
                        </div>  
                    </div>
                </b-modal>
    <!-- Modal -->

    <b-modal  centered hide-footer hide-header hide-header-close  id="delete-btn" >
        <div class="popup text-center">
                        <h4 class="mb-3">Delete</h4>
                        <div class="content create-workform">
                            <p class="mb-2">Are yo sure you want to delete this ?</p>
                            <div class="row">  
                                <div class="col-lg-12 mt-4">
                                    <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                        <div class="btn btn-primary mr-4" @click="$bvModal.hide('delete-btn')">Cancel</div>
                                        <div class="btn btn-outline-primary" @click="$bvModal.hide('delete-btn')">Continue</div>
                                    </div>
                                </div>                                           
                            </div>
                        </div>
                    </div>
                
    </b-modal>
    <!-- Modal -->
    <b-modal  centered hide-footer hide-header hide-header-close  id="do-this" >
        <div class="popup text-left">
                        <h4 class="mb-3">Add Action</h4>
                        <div class="content create-workform">
                            <h5>Do this</h5>
                            <div class="form-group mb-0">
                                <VueSelectPicker :options="option3" class="form-control selectpicker" v-model="selectValue"  />
                                </div>
                            <div class="col-lg-12 mt-4">
                                <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                    <div class="btn btn-primary mr-4" @click="$bvModal.hide('do-this')">Cancel</div>
                                    <div class="btn btn-outline-primary" @click="$bvModal.hide('do-this')">Save</div>
                                </div>
                            </div>  
                        </div>
                    </div>
    </b-modal> 
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
export default {
    name:'workflow',
    components: {
         VueEditor,
    },
    data () {
        return {
            selectValue: '',
            option1: [
                {value: 1, text: 'Select..'},
                {value: 2, text: '15 Minute Meeting'},
                {value: 3, text: '30 Minute Meeting'},
                {value: 4, text: '60 Minute Meeting'}
            ],
            option2: [
                {value: 1, text: 'Reminder'},
                {value: 2, text: 'Custom'},
                {value: 3, text: 'Thank You'},
                {value: 4, text: 'Additional Resource'},
                {value: 5, text: 'Request Follow-Up'},
                {value:6, text:'Feedback Survey'}
            ],
             option3: [
                {value: 1, text: 'Select..'},
                {value: 2, text: 'Send email to invitee'},
                {value: 3, text: 'Send email to host'},
                {value: 4, text: 'Thank You'},
                {value: 5, text: 'Send text to invitee'},
                {value: 6, text: 'Send text to host'},
               
            ],
             option4: [
                {value: 1, text: 'Hours'},
                {value: 2, text: 'Days'},
                {value: 3, text: 'Minutes'},      
            ],
                customToolbar: [
                    ["bold", "underline", "italic" ,"image", "code-block"]],
                customToolbar1: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ["bold", "italic",  "underline" ,"link"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["clean"],
                
            ]
        }
    },
    mounted(){
    }

}
</script>