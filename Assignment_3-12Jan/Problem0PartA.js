//Problem 0 Part A

var cat = { name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
        name: 'bar',
        activities: ['be grumpy', 'eat bread omblet'],
        weight: 8,
        furcolor: 'white'
    }, 
    {
        name: 'foo',
        activities: ['sleep', 'pre-sleep naps'],
        weight: 3
    }
    ]
};
cat.height = 40;
cat.weight = 9;
cat.name = 'Fluffyy';
const all_name = [];
var friends_activities = [];
var total_weight = 0;
for(i in cat.catFriends){
    friends_activities = friends_activities.concat(cat.catFriends[i].activities);
    all_name.push(cat.catFriends[i].name);
    total_weight = total_weight + cat.catFriends[i].weight;
    cat.catFriends[i].activities.push('play with wool ball','annoy hooman');
}
console.log('all activities of friends:', friends_activities);
console.log('all names of friends:', all_name);
console.log('total weight is:',total_weight);
var fluffy_activity = cat.activities;
const total_activities = fluffy_activity.concat(friends_activities);
console.log('all activities of all cats:',total_activities);
cat.catFriends[0].furcolor = 'black';
console.log(cat);

