// DOMの練習
function reWrite(num) {
  if (document.getElementById) {
    if (num==0) {
      document.getElementById("str").textContent="<b>テキスト</b>の書換え";
    } else {
      document.getElementById("str").innerHTML="<b>タグ</b>を含む書換え";
    }
  }
}
