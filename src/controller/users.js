import Model from "../models/user.js"


const getAllstudents = async(req, res) => {
    try {
         let students = await Model.studentModel.find()
         res.status(200).send({message: "user list fetched",students})
    } catch (error) {
        res.status(500).send({error:error.message})
    }   
}

const createStudent = async(req, res) => {
    try {
        const { rollNumber} = req.body;
        
        const student = await Model.studentModel.findOne( {rollNumber} );
        
        if (!student)
        {
             await Model.studentModel.create(req.body)
            res.status(200).send({message:"student created successfully"})
        }
        else {
        res.status(400).send({message:`student with ${req.body.rollNumber} already exists`})
        
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send({error:error.message})
    }
}

const editStudentById = async (req, res) => {
    try {
        let { id } = req.params;
        let student = await Model.studentModel.findByIdAndUpdate( id );
            if (student)
            {
                student.name = req.body.name
                student.class = req.body.class
                student.rollNumber = req.body.rollNumber

                await student.save()
                res.status(200).send({message:"student details edited successfully"})
        }
        else {
        res.status(400).send({message:'invalid student id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

const deleteStudentById = async (req, res) => {
    try {
        let { id } = req.params;
        let student = await Model.studentModel.findByIdAndDelete( id );
        if (student)
           
        {
             await Model.studentModel.deleteOne({student})
            res.status(200).send({message:"student deleted successfully"})
        }
        else {
        res.status(400).send({message:'invalid student id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

const getStudentById = async (req, res) => {
    try {
        let { id } = req.params;
        let student = await Model.studentModel.findById(id)
        res.status(200).send({message: "student data fetched",student})
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

//teacher controller

const getAllteacher = async(req, res) => {
    try {
         let teachers = await Model.teacherModel.find()
         res.status(200).send({message: "user list fetched",teachers})
    } catch (error) {
        res.status(500).send({error:error.message})
    }   
}

const createTeacher = async(req, res) => {
    try {
             await Model.teacherModel.create(req.body)
            res.status(200).send({message:"teacher created successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).send({error:error.message})
    }
}

const editTeacherById = async (req, res) => {
    try {
        let { id } = req.params;
        let teacher = await Model.teacherModel.findByIdAndUpdate( id );
            if (teacher)
            {
                teacher.name = req.body.name
                teacher.subject = req.body.subject

                await teacher.save()
                res.status(200).send({message:"teacher details edited successfully"})
        }
        else {
        res.status(400).send({message:'invalid teacher id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

const deleteTeacherById = async (req, res) => {
    try {
        let { id } = req.params;
        let teacher = await Model.teacherModel.findByIdAndDelete( id );
        if (teacher)
           
        {
             await Model.teacherModel.deleteOne({teacher})
            res.status(200).send({message:"teacher deleted successfully"})
        }
        else {
        res.status(400).send({message:'invalid teacher id'})
        
        }
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}
const getTeacherById = async (req, res) => {
    try {
        let { id } = req.params;
        let teacher = await Model.teacherModel.findById(id)
        res.status(200).send({message: "teacher data fetched",teacher})
        
    } catch (error) {
         res.status(500).send({error:error.message})
    }
}

export default {
    getAllstudents,
    createStudent,
    editStudentById,
    deleteStudentById,
    getAllteacher,
    createTeacher,
    editTeacherById,
    deleteTeacherById,
    getStudentById,
    getTeacherById
}