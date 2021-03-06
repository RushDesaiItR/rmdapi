const router = require('express').Router();
const { verifyUserToken, IsAdmin, IsUser } = require("../middleware/auth");
const userController = require('../controllers/user');

// Register a new User
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);
router.post('/rpi', userController.getData);
router.get("/getalluser", userController.getAllUser)

//--------------------get user by id
router.get("/getuserbyid/:id", userController.getUserData)

//-------------------get user posts
router.get("/getpostsbyid/:id", userController.getUserPosts)
//-------------------get get User pending Friend list
//---------------get home data----------IMP


router.get("/gethomedatabyid/:id",userController.getHomeAllStories)
router.get("/getfriendsbyid/:id",userController.getFriendsById)
router.get("/gethomedatabyidtwo/:id",userController.getHomeAllPosts)
router.get("/gethomedatabyidthree/:id",userController.getHomeAllUserSuggestions)



//-----------------------------------------------------------
router.get("/getpendingreqbyid/:id", userController.getUserpendinFriendlist)
//----------------get user friends
router.get("/getuserfriends/:id", userController.getUserFriendlist)
//------------create user story
router.post("/story/:id",userController.createStory)
//----------------get all story

router.get("/getallstory",userController.getAllStories)

//-get pending friend request
router.get("/getallpendingrequest/:id",userController.getPendingRequest)


//-get sended friend request
router.get("/getallsendedgrequest/:id",userController.getSendedRequest)
// Auth user only


router.get('/events', verifyUserToken, IsUser, userController.userEvent);

// Auth Admin only
router.get('/special', verifyUserToken, IsAdmin, userController.adminEvent);
router.put("/updateprofile/:id",userController.updateProfile)
router.post("/post/:id", userController.createPost);
router.post("/requestfriend/:id", userController.createFriend);
router.post("/createfriend/:id", userController.addIntoFriendList);
router.delete("/deleteAll",userController.deleteAllData)
module.exports = router;