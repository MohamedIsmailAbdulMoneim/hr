const express = require("express");
const db =  require("../database/connection")

let router = express.Router();

router.get('/generalmanager', function(req,res){
    const query = "SELECT * FROM a_main_box JOIN a_sup_box ON a_main_box.MAIN_BOX_ID = a_sup_box.MAIN_BOX_ID JOIN a_job_dgree ON a_main_box.J_D_ID_J = a_job_dgree.J_D_ID WHERE J_D_ID = 174;"
    db.query(query,(err,details)=> {
        if(err){
            console.log(err);
        }else{
            console.log(details);
            res.send(details)
        }
    })
})


module.exports = router;