module.exports = {
    formatLeaderboardByLevel,
    handleLeaderboard
}

function formatLeaderboardByLevel(leaderboard) {
}

async function handleLeaderboard(collection, userData) {
    let isUserInDB = false
    const relevantLevelLeaderboard = await collection.find({ level: userData.level }).toArray()
    if (!relevantLevelLeaderboard || !relevantLevelLeaderboard.length) {
        await collection.insertOne(userData)
    }
    for (let dbUser of relevantLevelLeaderboard) {
        if (dbUser.userId === userData.userId && dbUser.level === userData.level) {
            isUserInDB = true
        }
        if (dbUser.userId === userData.userId && dbUser.level === userData.level && dbUser.score >= userData.score) {
            console.log('there is better')
            isUserInDB = true
            return
        } else {
            if (isUserInDB) {
                await collection.findOneAndUpdate({ 'userId': userData.userId, level: userData.level }, { $set: { 'score': userData.score } })
            } else {
                await collection.insertOne(userData)
            }
        }
    }
}
