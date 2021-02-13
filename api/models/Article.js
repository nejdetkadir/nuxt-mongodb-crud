const {Schema, model} = require('mongoose')

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  text: {
    type: String,
    required: true
  }, 
},
{
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})

module.exports = model('article', ArticleSchema)