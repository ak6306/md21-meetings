const router = require('express').Router();
let Meet = require('../models/meeting.model');

router.route('/').get((req,res)=>{
    Meet.find()
        .then(meets =>res.json(meets))
        .catch(err=>res.status(400).json('Error '+err));
});

router.route('/add').post((req,res)=>{
    const MeetingName = req.body.MeetingName;
    const NumberPeople =Number(req.body.NumberPeople);
    const DateCreated = (req.body.Date);
    const StartTime = req.body.StartTime;
    const EndTime = req.body.EndTime;

    const newMeet = new Meet({MeetingName, NumberPeople, DateCreated ,StartTime, EndTime});
    console.log(newMeet);

    newMeet.save()
        .then(()=> res.json('User Added'))
        .catch(err=>res.status(400).json('Error '+err))
})
router.route('/search/:query').get((req,res)=>{
    Meet.find({
        $or: [
            {MeetingName: {$regex: req.params.query, $options: 'i'},}
        ]
        
    }, function(err,result){
        if(result){
            res.json(result)
        }else{
            res.json(err);
        }
    })
})
router.route('/:id').delete((req,res)=>{
    Meet.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Meeting Deleted!'))
        .catch((err => res.status(400).json('Error '+err)))
})

module.exports = router;