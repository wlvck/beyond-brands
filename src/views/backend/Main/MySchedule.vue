<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="py-4 border-bottom">
                    <div class="form-title text-center">
                        <h3>My Schedule</h3>
                    </div>
                </div>
            </div>
             <div class="col-lg-12">
                <h4 class="mb-3">Choose A Schedule Below</h4>
                <div class="d-flex flex-wrap align-items-center justify-content-between my-schedule mb-4">
                   <div class="d-flex align-items-center justify-content-between"> 
                        <div class="form-group mb-0">
                          <VueSelectPicker :options="option1" class="form-control selectpicker" v-model="selectValue"  label="Working Hours" />
                        </div>
                        <div class="select-dropdown input-prepend input-append">
                            <div class="btn-group">
                                <b-dropdown  id="dropdownMenuButton1"  variant="none" data-toggle="dropdown" no-caret >
                                <template v-slot:button-content >
                                <label data-toggle="dropdown">
                                <span class="dropdown-toggle search-query rounded btn bg-white btn-edit"><i class="las la-edit mr-0 text-center"></i></span><span class="search-replace"></span>
                                </label>
                                </template>
                                <b-dropdown-item><i class="ri-pencil-line mr-3"></i>{{ ('Edit') }}</b-dropdown-item>
                                <b-dropdown-item><i class="ri-delete-bin-6-line mr-3"></i>{{ ('delete') }}</b-dropdown-item>
                                </b-dropdown>
                            </div>
                        </div>
                    </div>  
                   <div class="create-workform">
                        <a href="#" v-b-modal.date-event data-toggle="modal" data-target="#date-event" class="btn btn-primary pr-5 position-relative">New Schedule<span class="add-btn"><i class="ri-add-line"></i></span></a>
                    </div>                    
                </div>
                <h4 class="mb-3">Set Your weekly hours</h4>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card card-block card-stretch">
                            <div class="card-body">
                                <FullCalendar :options="calendarOptions"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <b-modal centered hide-footer hide-header hide-header-close id="date-event" >
                    <div class="popup text-left">
                        <h4 class="mb-3">Add Schedule</h4>
                        <form id="submit-schedule" @submit.prevent="submitForm">
                            <div class="content create-workform row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="form-label" for="schedule-title">Schedule For</label>
                                        <input class="form-control" v-model="title" placeholder="Enter Title" type="text" name="title" id="schedule-title" required />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="schedule-start-date">Start Date</label>
                                         <flat-pickr  v-model="startdate" :config="config"  placeholder="2021-06-20" class="form-control"  readonly="readonly"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="schedule-end-date">End Date</label>
                                         <flat-pickr  v-model="enddate" :config="config"  placeholder="2021-06-20" class="form-control"  readonly="readonly"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input class="form-control" v-model="color" type="color" name="title" id="schedule-color" required />
                                    </div>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                        <button class="btn btn-primary mr-4" type="button" @click="cancelModal">Cancel</button>
                                        <button class="btn btn-outline-primary" type="submit">Save</button>
                                    </div>
                                </div>  
                            </div>
                        </form>
                    </div>
    </b-modal>    
</div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { english } from 'flatpickr/dist/l10n/default'
import moment from 'moment'
export default {
    name:'MySchedule',

    components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data() {
    return {
        startdate: moment(new Date(), 'YY-MM-DD').format('YY-MM-DD'),
        enddate: moment(new Date(), 'YY-MM-DD').format('YY-MM-DD'),
        title: '',
        color: '',
        config: {
          wrap: true, // set wrap to true only when using 'input-group'
          altFormat: 'yy-m-d',
          altInput: true,
          dateFormat: 'Y-m-d',
          locale: english
      },
        selectValue: '',
       option1: [
                {value: 1, text: 'Working Hours'},
                {value: 2, text: 'Default Hours'},
                {value: 3, text: 'Working Hours'},
                {value: 4, text: 'Learning Hours'},
            ],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
          listPlugin,
          bootstrapPlugin
        ],
        timeZone: 'UTC',
        themeSystem: 'bootstrap',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        },
        weekNumbers: false,
        initialView: 'dayGridMonth',
        initialEvents: [], // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        events: [
         {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: moment(new Date(), 'YYYY-MM-DD').add(-20, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color:'#4731b6'
        },
        {
          title: 'All Day Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(-18, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#465af7'
        },
        {
          title: 'Long Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(-16, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          end: moment(new Date(), 'YYYY-MM-DD').add(-13, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#7858d7'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(-14, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#465af7'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(-12, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#5baa73'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(-10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#01041b'
        },
        {
          title: 'Birthday Party',
          start: moment(new Date(), 'YYYY-MM-DD').add(-8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#4731b6'
        },
        {
          title: 'Meeting',
          start: moment(new Date(), 'YYYY-MM-DD').add(-6, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#15ca92'
        },
        {
          title: 'Birthday Party',
          start: moment(new Date(), 'YYYY-MM-DD').add(-5, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#f4a965'
        },
        {
          title: 'Birthday Party',
          start: moment(new Date(), 'YYYY-MM-DD').add(-2, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#ea643f'
        },

        {
          title: 'Meeting',
          start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#15ca92'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T06:30:00.000Z',
          color:'#4731b6'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T07:30:00.000Z',
          color: '#5baa73'
        },
        {
          title: 'Birthday Party',
          start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T08:30:00.000Z',
          color: '#f4a965'
        },
        {
          title: 'Doctor Meeting',
          start: moment(new Date(), 'YYYY-MM-DD').add(0, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#f4a965'
        },
        {
          title: 'All Day Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#465af7'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(8, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#465af7'
        },
        {
          groupId: '999',
          title: 'Repeating Event',
          start: moment(new Date(), 'YYYY-MM-DD').add(10, 'days').format('YYYY-MM-DD') + 'T05:30:00.000Z',
          color: '#5baa73'
        }
      ]
      },
      currentEvents: []
    }
  },
  methods: {
    cancelModal () {
      this.title = ''
      this.color = '#000000'
      this.$bvModal.hide('date-event')
    },
    submitForm () {
      this.calendarOptions.events.push({
        title: this.title,
        start: this.startdate,
        end: this.enddate,
        color: this.color
      })
      this.$bvModal.hide('date-event')
    },
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      console.log(selectInfo.start)
      this.$bvModal.show('date-event')
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    }
  }
}
</script>
<style lang="scss">
.v-select{ 
   height: 38px !important;
   background: #fff !important;
   padding-top: 2px !important;
   line-height:37px  !important;
   margin-bottom: 5px !important;
   background: #fff !important;
  
.v-select-toggle
    {
    background: unset  !important;
    border: unset !important;
    font-size: 16px  !important;
    color:#535f6b  !important;
}
.v-select-toggle > :first-child{
    padding-right: 20px  !important;
}
.v-dropdown-container
{ 
    margin-bottom: 2px  !important;
    margin-top: 0px  !important;
    z-index: 98  !important;
}
.v-dropdown-item
{

      background: unset  !important;
    font-size: 16px  !important;
      border: unset !important;
      padding: 4px 24px  !important;
      line-height:32px  !important;
    color:#535f6b  !important;    
}
.v-dropdown-item:hover
{
    background-color: #f5f6fa  !important;
    color: #1b2734  !important;
}}
</style>