require("dotenv").config();
const AWS = require('aws-sdk')
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_KEY
})

const uploadFile = async (fileData, filename) => {
    try {
        let base64Data = await Buffer.from(fileData, 'binary')
        return new Promise(async (resolve, reject) => {
            try {
                s3.putObject({
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: `${filename}.wav`,
                    Body: base64Data,
                }, (err, data) => {
                    console.log('Uploaded to S3 bucket', data)
                    resolve()
                })
            } catch (err) {
                throw err
            }
        })

    } catch {
        throw new Error('Failed to upload to S3.')
    }
}

const checkIfExistsInS3 = async (filename) => {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${filename}.wav`
    }
    try {
        const headCode = await s3.headObject(params).promise()
        const signedUrl = s3.getSignedUrl('getObject', params)
        return true // File exists in S3
    } catch (err) {
        if (err.code === 'NotFound') {
            console.log('File not found on S3')
            return false
        } else {
            console.log(err) // Different error
        }
    }
}

module.exports = {
    uploadFile,
    checkIfExistsInS3
}