const uuid = require('uuid')
const mongoose = require('mongoose')
const eventDataSchema = mongoose.Schema(
    {
        _id: { type: String, default: uuid.v1 },
        name: {
            type: String,
            required: true
          },
          date: {
            type: Date,
            required: true
          },
          location:{
            type: String,
            required: true
          },
          time:{
            type: String
          },
          opponent:{
            type: String,
            required: true
          },
          result:{
            type: String
          }
    },
    {
        collection: 'table'
    }
)
const Event = mongoose.model('Events', eventDataSchema)
module.exports = Event;