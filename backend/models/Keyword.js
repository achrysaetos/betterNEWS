const { model, Schema } = require('mongoose')

const keywordSchema = new Schema({
  keyword: String,
  createdAt: String,
  user: {
    type: Schema.Types.ObjectId, // lets you reference documents in other collections
    ref: 'users' // tells mongoose which model to use during population
  }
})

module.exports = model('Keyword', keywordSchema)
