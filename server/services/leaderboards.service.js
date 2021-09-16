const dbService = require('./db.service')
module.exports = {
    getLeaderboardByLevel,
    handleLeaderboard
}

async function getLeaderboardByLevel(level) {
    const collection = await dbService.getCollection('leaderboard')
    const criteria = { level }
    let lvlSpecificLeaderboardScores = await collection.find(criteria).sort({ score: -1 }).limit(10).toArray()
    lvlSpecificLeaderboardScores = lvlSpecificLeaderboardScores.map(user => {
        let userScore = { ...user }
        delete userScore.userId
        delete userScore._id
        return userScore
    })
    return lvlSpecificLeaderboardScores
}

async function handleLeaderboard(userData) {
    let isUserInDB = false // So i'll know if I need to insert a new doc to DB or find existing one and update the score
    const collection = await dbService.getCollection('leaderboard')
    const relevantLevelLeaderboard = await collection.find({ level: userData.level }).toArray()
    if (!relevantLevelLeaderboard || !relevantLevelLeaderboard.length) {
        await collection.insertOne(userData)
        return
    }
    for (let dbUser of relevantLevelLeaderboard) {
        if (dbUser.userId === userData.userId && dbUser.level === userData.level) {
            isUserInDB = true
            if (dbUser.score >= userData.score) { // Better score for this user in DB
                return
            } else {
                if (isUserInDB) {
                    await collection.findOneAndUpdate({ 'userId': userData.userId, level: userData.level }, { $set: { 'score': userData.score } })
                }
            }
        }
    }
    if (!isUserInDB) {
        await collection.insertOne(userData)
    }
}



