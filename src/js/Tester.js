const encapsulator=require('./encapsulator');
const decapsulator=require('./decapsulator');

const enc = new encapsulator('./public_key.pem');
const dec=new decapsulator('./private_key.pem')

let text = 'In the year 2126, a Dive Massively Multiplayer Online Role Playing Game or DMMORPG called Yggdrasil was released. It stands out among all other DMMORPGs due to its unusually high ability for the player to interact with the game. After an intense 12-year run the game servers are about to be shut down. Within the game exists a guild, Ainz Ooal Gown, once consisting of 41 members and credited as one of the strongest guilds in the game. Now only 4 of the members remain, the other 37 having quit the game. Of those 4 only one, an elder lich character named Momonga, continues to play as the guild leader and maintaining their headquarters, The Great Tomb of Nazarick. He invites the remaining guild members but of those only one appears and only for a short while before leaving. While saddened by this, he accepts the reality that his friends have their other lives (both lives are real) to take care of and decides to stay logged in until the servers shut down.\nWhen the shut-down time arrives however, Momonga finds that the game hasn\'t vanished. Instead it appears as if Yggdrasil has been recreated as its own reality along with its various NPCs having been brought to life while Momonga has been trapped in the form of his game avatar, leaving him unable to use the normal player functions, such as General Message, or even to log out. With no other option, Momonga sets out to learn if anyone from the real world is also in this new world with him. Taking on the name of Ainz Ooal Gown, a message to any other players, Momonga begins exploring the world in an attempt to figure out what has happened while searching for anyone or anything that could help him solve this mystery, while ensuring the safety of Nazarick.';

let k = enc.encrypt(text);
console.log(k);
let d=dec.decrypt(k);
console.log('Output Text: \n'+d);
