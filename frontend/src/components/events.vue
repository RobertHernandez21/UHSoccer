<template>
  <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10"
    >
    <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10 mb-12"
      >
       
      </h1>
      <div class="flex flex-col col-span-2">
        <h1
        class="font-bold text-4xl text-red-700 tracking-widest text-center mt-10 mb-12"
      >
       Game Schedule
      </h1>
        <table class="min-w-full shadow-md rounded">
          <thead class="bg-gray-50 text-xl">
            <tr>
              <th class="p-4 text-left">Date</th>
              <th class="p-4 text-left">Location</th>
              <th class="p-4 text-left">Time</th>
              <th class="p-4 text-left">Opponent</th>
              <th class="p-4 text-left">Result</th>
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
      <div class="text-center mt-8 mb-4">
  <router-link :to="{ name: 'eventform' }">
    <button  v-if=authStore.isAuth class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      Update Schedule
    </button>
  </router-link>
</div>
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