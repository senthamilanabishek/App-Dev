const { error } = require('console');
const db=require('../config/config.js');
const util=require('util');


const queryAsync=util.promisify(db.connection1.query).bind(db.connection1);

// async function GetVehicelDetails()
// {
//     try{
//         const result=await queryAsync('CALL getVehicalinformation()');
//         return result[0];
//     }
//     catch(error)
//     {
//         console.log(error)
//     }
// }

// async function PostvehicalDetails(_type,_name,_number,_features,_accessories,_address,_phoneNumber,_price)
// {
//     try{
//         const result=await queryAsync('CALL postBicycleDetails(?,?,?,?,?,?,?,?)',[_type,_name,_number,_features,_accessories,_address,_phoneNumber,_price]);
//         console.log(result[0]);
//         return result[0];
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

async function PostUserInformation(name,email,password,avatarUrl)
{
    try{
        console.log(name);
        const result=await queryAsync("CALL userInformation(?,?,?,?)",[name,email,password,avatarUrl]);
        return result[0];
    }
    catch(error)
    {
        console.log(error);
    }
}

async function GetUserInformation(email,password)
{
    try{
        console.log(email);
        const result = await queryAsync("CALL loginInformation(?,?)",[email,password]);
        console.log(result[0]);
        return result[0];
    }
    catch(error)
    {
        console.log(error);
    }
}

async function UpdateUserInformation(_id,_name,_email,_password,_avatarUrl) {

    try{
        console.log(_email);
        const result = await queryAsync("CALL update_user(?,?,?,?,?)",[_id,_name,_email,_password,_avatarUrl]);
        console.log(result[0]);
        return result[0];
    }
    catch(error)
    {
        console.log(error);
    }
    
}


async function GetCarBrands()
{
    try{
        const result=await queryAsync("CALL getcarBrands()")
        return result[0];
    }
    catch(error)
    {
        console.log(error);
    }
}

async function GetCarModel(_id)
{
    try{
        const result=await queryAsync("CALL getcarModel(?)",[_id]);
        return result[0];
    }
    catch(error)
    {
        console.log(error);
    }
}
module.exports={PostUserInformation,GetUserInformation,GetCarBrands,GetCarModel,UpdateUserInformation};