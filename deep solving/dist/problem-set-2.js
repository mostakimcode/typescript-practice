"use strict";
// problem-01
Object.defineProperty(exports, "__esModule", { value: true });
const getAgeRatingAccess = (age) => {
    return age < 7 ? `E (Everyone)` : age <= 12 ? `E10+ (Everyone 10+)` : age <= 16 ? `T (Teen)` : `M (Mature)`;
};
// problem -02
const getSignalStatus = (strength) => {
    return strength <= 20 ? `Weak` : strength <= 50 ? `Fair` : strength <= 80 ? `Good` : `Excellent`;
};
const formatPlayerCard = (player) => {
    return `${player.username} is a level ${player.level} player from ${player.region}`;
};
const calculateTotalListeningTime = (track) => {
    return track.reduce((total, recent) => total += recent.minutes, 0);
};
const getPlayerStats = (player) => {
    let Total = player.scores.reduce((total, score) => total += score, 0);
    let avg = Total / player.scores.length;
    let rank = avg >= 80 ? `MVP` : `Rookie`;
    return { name: player.name, average: avg, rank };
};
const canAccessOfflineMode = (tier) => {
    return tier === "pro" || tier === "premium";
};
const findMenuItemsByTag = (menu, tag) => {
    return menu.filter((item) => item.tag === tag);
};
const renderNotification = (notification) => {
    if (notification.type === "like")
        return `${notification.fromUser} liked your post`;
    if (notification.actionUrl)
        return `System: ${notification.message} (Tap to view)`;
    return `System: ${notification.message}`;
};
const updateStorageUsage = (currentUsageMB, action) => {
    let finalUsage = currentUsageMB;
    if (action.type === "upload")
        finalUsage += action.sizeMB;
    if (action.type === "delete")
        finalUsage -= action.sizeMB;
    if (finalUsage < 0)
        finalUsage = 0;
    return finalUsage;
};
const calculateRentalFee = (vehicle, minutes) => {
    if (vehicle === "scooter")
        return 10 + (minutes * 2);
    if (vehicle === "ebike")
        return 15 + (minutes * 3);
    if (vehicle === "moped")
        return 25 + (minutes * 5);
    if (minutes === 0)
        return 0;
};
console.log(calculateRentalFee("scooter", 20));
// 50    (10 + 20 x 2)
console.log(calculateRentalFee("ebike", 20));
// 75    (15 + 20 x 3)
console.log(calculateRentalFee("moped", 20));
// 125   (25 + 20 x 5)
//# sourceMappingURL=problem-set-2.js.map