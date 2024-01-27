import { Router } from 'express'
import UserController from '../controller/users.js'
const router = Router()

router.get('/student' ,UserController.getAllstudents)
router.get('/student/:id', UserController.getStudentById)
router.post('/student', UserController.createStudent)
router.put('/student/:id', UserController.editStudentById)
router.delete('/student/:id', UserController.deleteStudentById)
router.get('/teacher' ,UserController.getAllteacher)
router.get('/teacher/:id', UserController.getTeacherById)
router.post('/teacher', UserController.createTeacher)
router.put('/teacher/:id', UserController.editTeacherById)
router.delete('/teacher/:id', UserController.deleteTeacherById)

export default router