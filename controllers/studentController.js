import Student from '../models/Student.js';

// Create new student
export const createStudent = async (req, res) => {
  try {
    const { name, email, rollNo, marks } = req.body;

    // Calculate total and percentage
    const totalMarks = marks.sub1 + marks.sub2 + marks.sub3 + marks.sub4 + marks.sub5;
    const percentage = (totalMarks / 500) * 100;

    const student = new Student({
      name,
      email,
      rollNo,
      marks,
      percentage: percentage.toFixed(2)
    });

    await student.save();

    res.status(201).json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Get paginated student list
export const getStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;

    const totalItems = await Student.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const students = await Student.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      students,
      pagination: {
        totalItems,
        currentPage: page,
        totalPages,
        pageSize: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// Get single student
export const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    res.json({ success: true, student });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update student
export const updateStudent = async (req, res) => {
  try {
    const { name, email, rollNo, marks } = req.body;

    const totalMarks = marks.sub1 + marks.sub2 + marks.sub3 + marks.sub4 + marks.sub5;
    const percentage = (totalMarks / 500) * 100;

    const updatedData = {
      name,
      email,
      rollNo,
      marks,
      percentage: percentage.toFixed(2)
    };

    const student = await Student.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    res.json({ success: true, student });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ success: false, message: 'Student not found' });
    }

    res.json({ success: true, message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
