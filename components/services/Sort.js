export default {
  sortAll(data, nb) {
    let sortedData = [];

    let currentBestScore = 0;
    let currentBestData = null;
    let currentBestIndex = 0;

    for (let j = 0; j < nb; j++) {
      if (j < data.length) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].data.score > currentBestScore) {
            currentBestData = data[i].data;
            currentBestScore = data[i].data.score;
            currentBestIndex = i;
          }
        }
        currentBestScore = 0;
        sortedData.push(data[currentBestIndex]);
        data.splice(currentBestIndex, 1);
      } else return sortedData;
    }
    return sortedData;
  },
};
