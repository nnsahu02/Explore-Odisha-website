const mongoose = require('mongoose')

const LocationModel = new mongoose.Schema({
    place: {
        type: String,
      require:[ true, 'PLEASE PROVIDE placename'],
        Unique: true  
    },
    image: {
        type: String,
        required:[true, 'PLEASE PROVIDE IMAGE']
    },
    description: {
        type: String,
        require:[ true, 'PLEASE PROVIDE Description']
    },
    category: {
        type: String,
        require:[ true, 'PLEASE PROVIDE category']
    },
    visitingTime: {
        type: Number,
        require:[ true, 'PLEASE PROVIDE  visitingTime  ']
    },
    dist: {
        type: String,
        require:[ true, 'PLEASE PROVIDE dist  ']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true })

module.exports = mongoose.model('Location', LocationModel)