const db = require("../config")
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/AuthenticateUser')
class Users {
    fetchUsers(req, res) {
        const query = ` SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl FROM Users;`
        db.query(query, (err,results) => {
            if(err) throw err 
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, gender, userDOB, emailDOB, emailAdd, profileUrl FROM Users WHERE userID = ${req.params.id};`
        db.query(query, (err, result) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                result 
            })
        })
    }
    login(req, res) {
    }
    async register(req, res) {
        const data = req.body
        // Encrypt password
        data.userPass
        // Payload
        const user = {
            emailAdd: data.emailAdd,
            userPass: data.userPass
        }
        // Query
        const query = `INSERT INTO Users SET ?;`
        db.query(query, [data], (err) => {
            if(err) throw err
            // Create token 
            let token = createToken(user)
            res.cookie("legitUser", token, 
            {
                maxAge: 300,
                httpOnly: true
            })
            res.json({
                status: res.statusCode,
                msg: "You are now Registered"
            })
        })
    }
    updateUser(req, res) {
        const query = ` UPADATE Users SET ? WHERE userID = ?`
        db.query(query, [req.body, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "This user record has been updated"
                })
            })
    }
    deleteUser(req, res) {
        const query = `DELETE FROM Users WHERE userID = ${req.params.id};`
        db.query(query, (err) => {
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "User recorded deleted"
            })
        })
    }
}

module.exports = Users