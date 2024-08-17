const res=require('express/lib/response');
const GET=require('../module/bicyclemodule')

// exports.getVehicelInformation=async(req,res)=>
// {
//     try{
//         const information=await GET.GetVehicelDetails();
//         res.json(information);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

// exports.postvehicalinformation=async(req,res)=>
// { 
//     const body={_type,_name,_number,_features,_accessories,_address,_phoneNumber,_price}=req.body;
//     console.log(body);
//     try{
//         const information=await GET.PostvehicalDetails(_type,_name,_number,_features,_accessories,_address,_phoneNumber,_price);
//         res.json(information);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }

exports.postUserInformation= async (req,res)=>
{
    console.log('aaa',req.body);
   const{_name,_email,_password,_avatarUrl} = req.body;
   try{
    const information=await GET.PostUserInformation(_name,_email,_password,_avatarUrl);
    res.json(information);
   }
   catch(err)
   {
     console.log(err);
   }
}

exports.getUserInformation=async(req,res)=>
{
    const{_email,_password} = req.body;
    console.log("kkkkk");
    console.log(_email);
    try{
        const information=await GET.GetUserInformation(_email,_password);
        res.json(information);
    }
    catch(error)
    {
        console.log(error);
    }
}

exports.updateUser = async (req, res) => {
    console.log("k ks k s");
    const { _id, _name, _email, _password,_avatarUrl } = req.body;
    console.log(req.body._name, _name, _email, _password,_avatarUrl);
    try {
      const information = await GET.UpdateUserInformation(_id, _name, _email, _password,_avatarUrl);
      res.json(information);
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  };

exports.getcarBrands=async (req,res)=>
{
    try{
        const information=await GET.GetCarBrands();
        res.json(information);
    }
    catch(error)
    {
        console.log(error);
    }
}


exports.getcarModel=async(req,res)=>
{
    const {_id}=req.body;
    console.log(_id);
    try{
        const information=await GET.GetCarModel(_id);
        res.json(information);
    }
    catch(error)
    {
        console.log(error);
    }
}