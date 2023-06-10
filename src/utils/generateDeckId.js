const crypto = require("node:crypto");

function serializeCards(cards) {
  const actionCardCount = Object.values(cards.actionCards).reduce((a, b) => a + b);
  if (actionCardCount !== 30) console.warn(`行动牌数量为${actionCardCount}`);

  const cardData = {
    characterCards: cards.characterCards,
    actionCards: "",
  };
  const actionCardKeys = Object.keys(cards.actionCards).sort(); // 获取所有action卡片的key，并按字母顺序排序
  cardData.actionCards = actionCardKeys.map(k => `${k}=${cards.actionCards[k]}`).join("&");
  return JSON.stringify(cardData);
}

function md516(data) {
  const objStr = serializeCards(data); // 将JS对象序列化为字符串
  const hash = crypto.createHash("md5"); // 创建MD5哈希对象
  hash.update(objStr); // 更新数据到哈希对象
  const fullHash = hash.digest(); // 计算哈希摘要并以Buffer形式返回
  return fullHash.toString("hex").slice(8, 24);
}

// 示例
const data = {
};
const hashValue = md516(data);
console.log(data.characterCards);
console.log(hashValue); // 输出计算出的MD5 16位散列值
