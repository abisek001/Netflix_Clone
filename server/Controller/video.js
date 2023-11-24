const fs = require("fs");                               // FS MODULE: used to read files and folders.
const path = require('path');                           // PATH MODULE: to define file paths.
const { Movie } = require('../Model/video_Model');
const { VIDEO_DIR } = require('../video_path');


// List of videos
async function getMovie(req, res) {
    const movie = await Movie.find();
    res.json({ "movies": movie }).end();
}

async function getMovieByID(req, res) {
    const shows = await Movie.find({_id: req.params.Id});
    res.json({ "movies": shows }).end();
}


// Video to be played
async function getMovieById(req, res) {
    const CHUNK_SIZE = 10 ** 6;                         // 1MB
    let range = req.headers.range;                    //206 - Partial content sent by server
    console.log(JSON.stringify(req.headers));

    if(!range) {
        range = 'bytes=0-'
    }

    const movie = await Movie.findOne({_id: req.params.askedId});
    const videPath = path.join(VIDEO_DIR, movie.filePath);
    const videoSize = fs.statSync(videPath).size;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;

    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4"
    }

    // HTTP Status 206 for Partial Content
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videPath, { start, end });  // Open the file and read the data present in it
    videoStream.pipe(res);                                              // Reads the outputstream and connect it with the inputstream
}


module.exports = { getMovie, getMovieById, getMovieByID }
