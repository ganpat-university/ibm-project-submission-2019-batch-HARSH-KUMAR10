const statusCode = {
    UNAUTHORIZED:0,
    SUCCESS:1,
    CREATE:2,
    READ:3,
    UPDATE:4,
    DELETE:5,
    DB_CREATE:6,
    DB_READ:7,
    DB_UPDATE:8,
    DB_DELETE:9,
    DB_CONNECT:10,
    ERROR:21,
    CREATE_ERROR:22,
    READ_ERROR:23,
    UPDATE_ERROR:24,
    DELETE_ERROR:25,
    DB_CREATE_ERROR:26,
    DB_READ_ERROR:27,
    DB_UPDATE_ERROR:28,
    DB_DELETE_ERROR:29,
    DB_ERROR:30
}

const message = {
    UNAUTHORIZED:"Unauthorized",
    SUCCESS:"Success",
    CREATE:"Successfully created ",
    READ:"Successfully read ",
    UPDATE:"Successfully updated ",
    DELETE:"Successfully deleted ",
    DB_CREATE:"(Database) Successfully created ",
    DB_READ:"(Database) Successfully read ",
    DB_UPDATE:"(Database) Successfully updated ",
    DB_DELETE:"(Database) Successfully deleted ",
    DB_CONNECT:"(Database) Success ",
    ERROR:"Error",
    CREATE_ERROR:"Unable to create ",
    READ_ERROR:"Unable to read ",
    UPDATE_ERROR:"Unable to update ",
    DELETE_ERROR:"Unable to delete ",
    DB_CREATE_ERROR:"(Database) Unable to create",
    DB_READ_ERROR:"(Database) Unable to read",
    DB_UPDATE_ERROR:"(Database) Unable to update",
    DB_DELETE_ERROR:"(Database) Unable to delete",
    DB_ERROR:"Database Error"
}

const response_back = (statusCode,message,data=null) => {
    const returnData = {statusCode,message,data};
    console.log("==========================");
    console.log(returnData);
    return returnData;
}

module.exports = {statusCode,message,response_back};