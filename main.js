// グローバル  div要素を格納
tiles = [];

window.onload = function () {

    var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
    // シャッフル
    shuffle(arr);

    var panel = document.getElementById('panel');
    //パネルを取得

    // div要素作成
    for (i = 0; i < 9; i++) {
        var div = document.createElement('div');
        div.className = 'tile';
        div.index = i;
        div.textContent = arr[i];
        div.onclick = click; //function click
        panel.appendChild(div);
        tiles.push(div); //上の条件のdiv要素追加
    }
}


function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp; // ここで行われているのは乱数との交換??
    }
    return arr;
}

// タイルのtextContentを入れ替える
function swapContent(i, k) {

    var temp = tiles[i].textContent;
    tiles[i].textContent = tiles[k].textContent;
    tiles[k].textContent = temp;

}


function click(e) {

    var i = e.target.index; // 最初にイベントが起こった要素、今回は多分divのパズル

    if (i <= 5 && tiles[i + 3].textContent == '') {
        // 下と入れ替え
        swapContent(i, i + 3);
    } else if (i >= 3 && tiles[i - 3].textContent == '') {
        // 上と入れ替え
        swapContent(i, i - 3);
    } else if (i % 3 !== 2 && tiles[i + 1].textContent == '') {
        // 右と入れ替え
        swapContent(i, i + 1);
    } else if (i % 3 !== 0 && tiles[i - 1].textContent == '') {
        // 左と入れ替え
        swapContent(i, i - 1);
    }
}


