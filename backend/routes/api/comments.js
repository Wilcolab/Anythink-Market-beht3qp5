/**
 * Express router for handling comment-related API requests.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @name GetAllComments
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @returns {Object[]} 200 - Array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */

 /**
    * DELETE /:commentId
    * Deletes a comment by its ID.
    * 
    * @name DeleteCommentById
    * @function
    * @memberof module:routes/api/comments
    * @param {express.Request} req - Express request object
    * @param {express.Response} res - Express response object
    * @param {Function} next - Express next middleware function
    * @returns {Object} 200 - Success message
    * @returns {Object} 404 - Error message if comment not found
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// This is a comment route file for handling comment-related API requests in our application.

// Get all comments
router.get("/", (req, res) => {
    Comment.find()
        .then((comments) => {
            res.json(comments);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "An error occurred while fetching comments" });
        });
});

// Delete a comment by ID
router.delete("/:commentId", async (req, res, next) => {
    try {
        const comment = await Comment.findByIdAndRemove(req.params.commentId);
        if (!comment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while deleting the comment" });
    }
});

module.exports = router;