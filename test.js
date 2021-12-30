const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Connect DB

mongoose.connect('mongodb://localhost/pcat-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create Schema

const PhotoSchema = new Schema({
    title: String,
    description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Create a Photo

/* 
Photo.create({
    title: 'Photo Title 2',
    description: 'Photo Desc 2',
});
 */

// Read a Photo

/* 
Photo.find({}, (err, data) => {
    console.log(data);
});
 */

// Update a Photo

/* 
const id = '61c9e2ef79279e3ca391f3f7'
Photo.findByIdAndUpdate(
    id,
    {
        title: "Photo 111 updated",
        description: "Photo 111 desc updated"
    },
    {
        new: true
    },
    (err, data) => {
        console.log(data)
    }
)
 */

// Delete a Photo
const id = '61c9e485b6b7b14ab199de46';
Photo.findByIdAndDelete(id, (err, data) => {
    console.log(`${id} nolu Photo silindi`);
});
