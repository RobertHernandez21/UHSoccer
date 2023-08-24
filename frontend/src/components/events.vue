<template>
  <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
    >
      <div class="ml-10">
        <h2 class="text-2xl font-bold">List of Events</h2>
        
      </div>
      <div class="flex flex-col col-span-2">
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Event Date</th>
              <th class="p-4 text-left">Event Location</th>
              <th class="p-4 text-left">Event Time</th>
              <th class="p-4 text-left">Event opponent</th>
              <th class="p-4 text-left">Event Result</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-300">
            <tr
            @click="authStore.isAuth ? editEvent(event._id) : null"
              v-for="event in events"
              :key="event._id"
            >
              <td class="p-2 text-left">{{ formattedDate(event.date) }}</td>
              <td class="p-2 text-left">{{ event.location}}</td>
              <td class="p-2 text-left">{{ event.time }}</td>
              <td class="p-2 text-left">{{ event.opponent }}</td>
              <td class="p-2 text-left">{{ event.result }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button> 
      <router-link class="link text-xl" :to="{name: 'eventform'}">Get Started</router-link> 
    </Button>
    </div>
</template>

<script>
import axios from 'axios';
const apiURL = import.meta.env.VITE_ROOT_API
import { DateTime } from 'luxon'
import { useAuthStore } from "@/store/auth"

export default {
  name:'Event',
  data(){
  return{
    events:[]
  }
},
setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
mounted() {
    this.getEvents()
  },
methods:{
  getEvents() {
      axios.get(`${apiURL}/event`).then((res) => {
        this.events = res.data.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
        })
      })
      window.scrollTo(0, 0)
    },
  
  formattedDate(datetimeDB) {
      const dt = DateTime.fromISO(datetimeDB, {
        zone: 'utc'
      })
      return dt
        .setZone(DateTime.now().zoneName, { keepLocalTime: true })
        .toLocaleString()
    },
    editEvent(eventID) {
      this.$router.push({ name: 'eventdetails', params: { id: eventID } })
    },
  }
}
</script>

<style>

</style>