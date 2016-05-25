import _ from 'lodash'
import Result from '../models/result'

export function all(req, res){
  Result.find({}).exec((error, result) => {
    if(error){
      console.log("Error when getting all Results");
      return res.status(500).send("Something went wrong when getting all Results");
    }
    return res.json(result);
  });
}

export function remove(req, res){
  const condition = { id: req.params.id };
  Result.findOneAndRemove(condition, (error) => {
    if(error){
      console.log("Something went wrong when removing Result element");
      return res.status(500).send("Something went wrong when removing Result element");
    }
    return res.status(200).send("Removed successfully");
 });
}

export default{
  all,
  remove
};
