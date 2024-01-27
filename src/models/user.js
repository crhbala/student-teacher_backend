import mongoose from './root.js'

const studentSchema = new mongoose.Schema({
    name: { type: String },
    class: { type: String },
    rollNumber:{type:Number}
}, {
    collaction: 'students'
})
const teacherSchema = new mongoose.Schema({
    name: { type: String },
    subject: { type: String }
}, {
    collaction: 'teachers'
})

const teacherModel = mongoose.model('teachers', teacherSchema)
const studentModel = mongoose.model('students', studentSchema)

export default {
    teacherModel,
    studentModel
}