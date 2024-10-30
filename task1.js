function isEnoughCapacity(products, containerSize, fragileItems = [], minVolume = {}) {
    let totalItems = 0;
    let totalVolume = 0;
  
    for (const [item, data] of Object.entries(products)) {
      const count = typeof data === 'object' ? data.count : data;
      const volume = typeof data === 'object' ? data.volume : 1;
      totalItems += count;
      totalVolume += count * volume;
      
      if (fragileItems.includes(item)) {
        console.warn("Контейнер має бути використаний з обережністю: крихкі товари присутні.");
      }
    }
  
    if (totalVolume > containerSize) {
      console.log(`Перевищення місткості контейнера на ${totalVolume - containerSize} одиниць обсягу.`);
      return false;
    }
  
    return totalVolume <= containerSize;
  }
  
  console.log(isEnoughCapacity({ apples: { count: 2, volume: 1.5 }, grapes: { count: 3, volume: 0.5 } }, 8, ['apples'])); // true
  console.log(isEnoughCapacity({ apples: { count: 4, volume: 2 }, grapes: { count: 6, volume: 1.5 } }, 12, ['grapes'])); // false
  