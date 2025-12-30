//import multer
const multer = require('multer')

//disk storage
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './upload')
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now}-${file.originalname}`
        callback(null, filename)
    }
})

//file filter
const fileFilter = (req, file, callback) => {
    if (file.mimetype == `image/png` || file.mimetype == `image/jpeg` || file.mimetype == `image/jpg`) {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error(`only png, jpeg, jpg files are allowed`))
    }
}

const multerConfig = multer({
    storage,
    fileFilter
})

module.exports = multerConfig