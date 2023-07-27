const uuid = require('uuid')
const mongoose = require('mongoose')
const rosterDataSchema = mongoose.Schema(
    {
        _id: { type: String, default: uuid.v1 },
          date: {
            type: Date,
            required: true
          },
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: True
        },
        image: {
            type: String,
            required: false
        }

    },
    {
        collection: 'roster'
    }
    )
const Roster = mongoose.model('Rosters', rosterDataSchema)
module.exports = Roster