const Task = require("../models/Task");

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      category,
      dueDate,
    } = req.body;


    if (!title) {
      return res.status(400).json({
        message: "Title is required",
      });
    }


    const task = await Task.create({
      title,
      description,
      priority,
      category,
      dueDate,
      user: req.user._id,
    });


    res.status(201).json({
      message: "Task created successfully",
      task,
    });


  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const {
      status,
      priority,
      category,
      search,
      page = 1,
      limit = 10,
      sort,
    } = req.query;

    let filter = {
      user: req.user._id,
    };

    if (status) {
      filter.status = status;
    }

    if (priority) {
      filter.priority = priority;
    }

    if (category) {
      filter.category = category;
    }

    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const skip = (pageNumber - 1) * limitNumber;

    const totalTasks = await Task.countDocuments(filter);

    let sortOption = {};

    if (sort === "newest") {
      sortOption = { createdAt: -1 };
    } else if (sort === "oldest") {
      sortOption = { createdAt: 1 };
    } else if (sort === "dueDate") {
      sortOption = { dueDate: 1 };
    } else {
      sortOption = { createdAt: -1 };
    }

    const tasks = await Task.find(filter)
      .sort(sortOption)
      .skip(skip)
      .limit(limitNumber);

    res.status(200).json({
      totalTasks,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalTasks / limitNumber),
      tasks,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const getTaskStats = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalTasks = await Task.countDocuments({
      user: userId,
    });

    const completed = await Task.countDocuments({
      user: userId,
      status: "Completed",
    });

    const pending = await Task.countDocuments({
      user: userId,
      status: "Pending",
    });

    const inProgress = await Task.countDocuments({
      user: userId,
      status: "In Progress",
    });

    res.status(200).json({
      totalTasks,
      completed,
      pending,
      inProgress,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    // Check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }


    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );


    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const deleteTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    // Check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }


    await task.deleteOne();


    res.status(200).json({
      message: "Task deleted successfully",
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

const completeTask = async (req, res) => {
  try {

    const task = await Task.findById(req.params.id);


    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }


    // Check ownership
    if (task.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Not authorized",
      });
    }


    task.status =
      task.status === "Completed"
        ? "Pending"
        : "Completed";


    await task.save();


    res.status(200).json({
      message: "Task status updated",
      task,
    });


  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};


module.exports = {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  completeTask,
  getTaskStats,
};