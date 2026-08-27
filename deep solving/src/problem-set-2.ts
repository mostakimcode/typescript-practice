// problem-01

const getAgeRatingAccess = (age:number): string =>{
    return age < 7 ? `E (Everyone)` : age <= 12? `E10+ (Everyone 10+)` : age <= 16 ? `T (Teen)` : `M (Mature)`
}


// problem -02

const getSignalStatus =  (strength: number): string =>{
    return strength <= 20 ? `Weak` : strength <= 50 ? `Fair` : strength <= 80 ? `Good` : `Excellent`
}


// problem -03 
type Player1 = {
    username: string,
    level: number,
    region : string
}

const formatPlayerCard =(player: Player1): string =>{
    return `${player.username} is a level ${player.level} player from ${player.region}`
}


//problem -04


type Track = {
    title: string,
    minutes: number
}


const calculateTotalListeningTime =(track: Track[]): number =>{
    return track.reduce((total, recent) => total += recent.minutes, 0)
}



//problem -05


type Player2 = {
    name: string;
    scores: number[];
}


const getPlayerStats =(player:Player2): { name: string; average: number; rank: string } =>{
    let Total = player.scores.reduce((total, score) => total += score, 0)
    let avg = Total / player.scores.length 
    let rank = avg >= 80 ? `MVP` : `Rookie`
    return {name: player.name, average: avg, rank}
}


//problem -06


type Tier = "free" | "pro" | "premium"

const canAccessOfflineMode = (tier: Tier): boolean =>{
    return tier === "pro" || tier === "premium"
}



//problem -07

type MenuItem = {
    name: string,
    price: number,
    tag: string
}

const findMenuItemsByTag =(menu: MenuItem[], tag: string) =>{
    return menu.filter((item) => item.tag === tag)
}


//problem-08

type LikeNotification ={
    type: "like",
    fromUser: string
}

type SystemNotification = {
    type: "system",
    message: string,
    actionUrl?: string
}


const renderNotification = (notification: LikeNotification | SystemNotification): string =>{
    if(notification.type === "like") return `${notification.fromUser} liked your post`
    if(notification.actionUrl) return `System: ${notification.message} (Tap to view)`
    return `System: ${notification.message}`
}


//problem-09

type UploadAction = {
    type: "upload",
    sizeMB: number
}

type DeleteAction ={
    type: "delete"
    sizeMB: number
}


const updateStorageUsage =(currentUsageMB: number, action: UploadAction | DeleteAction): number =>{
    let finalUsage = currentUsageMB
    if(action.type === "upload") finalUsage += action.sizeMB
    if(action.type === "delete") finalUsage -= action.sizeMB
    if(finalUsage < 0) finalUsage = 0
    return finalUsage
}


//problem-10



type VehicleType = "scooter" | "ebike" | "moped"


const calculateRentalFee = (vehicle: VehicleType, minutes: number): number | undefined => {
    if(vehicle === "scooter") return 10 + (minutes * 2)
    if(vehicle === "ebike") return 15 + (minutes * 3)
    if(vehicle === "moped") return 25 + (minutes * 5)
    if(minutes === 0) return 0
}