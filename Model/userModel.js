import db from "../Db/db.js";

const table = "users";

class UserModel {
    static async createUserModel({ name, email, password }) {
        const sql = `INSERT INTO users (name,email,password) values(?,?,?)`
        const [result] = await db.execute(sql, [name, email, password])
        return result.insertId;

    }
    static async getAllUsers() {
        const sql = `SELECT * FROM ${table}`
        const [rows] = await db.execute(sql)
        return rows;
    }
}
export default UserModel;
