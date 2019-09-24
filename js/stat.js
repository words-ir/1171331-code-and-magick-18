
// eslint-disable-next-line strict
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var SIDE_GAP = 40;
var CLOUD_X = 100;
var CLOUD_Y = 200;
var TEXT_PLACE = 20;
var LOW_GAP = 10;
var BAR_HEIGHT = -150;


// eslint-disable-next-line no-unused-vars
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var getMaxElement = function (arr) {
  var maxElement = Math.max.apply(null, arr);
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      (ctx.fillStyle = 'hsl(245, ' + getRandomNumber(1, 100) + '%, 45%)');
    }

    ctx.fillRect(CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i, CLOUD_Y + SIDE_GAP, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + SIDE_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - LOW_GAP);
    ctx.fillText(Math.round(times[i]), CLOUD_X + SIDE_GAP + (BAR_GAP + BAR_WIDTH) * i, (CLOUD_Y + LOW_GAP + TEXT_PLACE) + BAR_HEIGHT * times[i] / maxTime);
  }
};
