const { PORT } = process.env

module.exports = {
    port: PORT || 4000,
    mongoURI: 'mongodb://db_user:Phong@123@ds247047.mlab.com:47047/microservice_db'
}